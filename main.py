from flask import Flask,render_template,url_for,request,redirect , session , jsonify , flash
from authlib.integrations.flask_client import OAuth
from dotenv import load_dotenv
import os 
import base64
from google import genai
from google.genai import types
from supabase import create_client
from database import check_user_login , make_new_user  , social_login , check_premium , get_data , get_portfolio
import threading
load_dotenv()
key = os.getenv("key")
MICROSOFT_CLIENT_ID = os.getenv("microsoft_client_id")
MICROSOFT_CLIENT_SECRET = os.getenv("microsoft_client_secret")
microsoft_redirect_uri  = os.getenv("microsoft_redirect_uri")
github_redirect_uri  = os.getenv("github_redirect_uri")
google_redirect_uri  = os.getenv("google_redirect_uri")

CLIENT_ID_GITHUB = os.getenv("github_client_id")
CLIENT_SECRET_GITHUB = os.getenv("github_client_secret")
CLIENT_ID_GOOGLE = os.getenv("google_client_id")
CLIENT_SECRET_GOOGLE = os.getenv("google_client_secret")
Client = genai.Client(api_key=key)
url = os.getenv("supabase_url")
supabase_key = os.getenv("supabase_key")
supabase = create_client(url, supabase_key)
app = Flask(__name__,static_folder="static",static_url_path="/static")
app.secret_key = os.getenv("app_secret_key") 
value = False 
# root 
@app.route("/",methods=["GET"])
def root():
    session["ret"]="/"
    session["portfolio"]=get_portfolio()
    return render_template("intro.html")

# About 
@app.route("/About",methods=["GET"])
def About():
    session["ret"]="/About"
    log = "Login"
    if(session.get("login")):
        log = "Logout"
    return render_template("About.html",log=log, portfolio = session.get("portfolio") or get_portfolio())

# Essential
@app.route("/Essential")
def Essential():
    session["ret"]="/Essential"
    if(session.get("login")!=True):
        return render_template("login.html")
    else:
        return render_template("essential.html", portfolio = session.get("portfolio") or get_portfolio())

#Services
@app.route("/Services",methods=["GET","POST"])
def Services():
    session["ret"]="/Services"
    if request.method=="POST":
        check_premium(session["user"]["email"])
        print(request.method)
        session["Executive"] = True
        session["user"]["premium"] = True
        
    elif session.get("Executive")==True:
        return render_template("plans.html")
    else:
        session["Executive"] = False
    return render_template("plans.html",value=session["Executive"])

#payments
@app.route("/Payment")
def Payment():
    session["ret"]="/Payment"
    if(session.get("login")!=True):
        return redirect("/Login")
    elif session.get("Executive")==True:
        return redirect("/Executive")
    else:    
        return render_template("payment.html", portfolio = session.get("portfolio") or get_portfolio())

#Login
@app.route("/Login",methods=["GET","POST"])
def Login():
    if request.method == "POST":
        Email = request.form["Email"]
        Password = request.form["Password"]
        if Email and Password :
            response  = check_user_login(Email,Password)
            if response:
               session["login"]=True
               data = {
                    "name":response["name"],
                    "email":response["email"],
                    "premium":response["premium"]
                }
               session["user"] = data 
               session["Executive"] = response["premium"]
               return redirect(session["ret"])
            else:
                flash("Check Email or Password","error")
            return render_template("login.html")
        else :
            flash("Both Fields Required!","error")
            return render_template("login.html")
    else:
        if session.get("login")!=True:
            return render_template("login.html")
        else:
            return redirect(session["ret"])

@app.route("/signup",methods=["GET","POST"])
def signup():
    if request.method == "POST":
        Email = request.form["Email"]
        Password = request.form["Password"]
        Name = request.form["Name"]
        if Email and Password and Name :
            response =  make_new_user(Email,Name,Password)
            if response:
                session["login"]=True
                data = {
                    "name":response["name"],
                    "email":response["email"],
                    "premium":response["premium"]
                }
                session["user"] = data
                session["Executive"] = session["user"]["premium"]
                return redirect(session["ret"])
            else:
                flash("Email already registered!","error2")
                return render_template("login.html") 
        else :
            flash("All Fields Required!","error2")
            return render_template("login.html")
    else:
        if request.method == "GET":
            return render_template("error.HTML")
#Executive
@app.route("/Executive",methods=["GET"])
def Executive():
    session["ret"] = "/Executive"
    if session.get("login") != True:
        return redirect("/Login")
    elif session.get("Executive") == True:
        data = get_data()
        return render_template("company.html",data=data, portfolio = session.get("portfolio") or get_portfolio())
    else:
        flash("PAY First to Get Executive Tier","error")
        return render_template("payment.html", portfolio = session.get("portfolio") or get_portfolio())
    
# logout
@app.route("/Logout")
def logout():
    session.pop('user', None)
    session.clear()
    session["login"] = False
    session["ret"]="/"
    session["portfolio"]=get_portfolio()
    return redirect(session["ret"])

#get session for zyra
@app.route("/getSessionData")
def getData():
    if(session.get("zyra")):
        return jsonify(session["zyra"])
    return jsonify(0)

#update session for zyra
@app.route("/updateSessionData",methods=["POST"])
def updateData():
    data=request.get_json()
    if data and "chat_html" in data:
        session["zyra"] = data["chat_html"]
        print(session["zyra"])
        return jsonify({"status": "success", "message": "Session updated successfully"})
    return jsonify({"status": "error", "message": "No data received"}), 400
@app.route("/ResumePRO",methods=["POST"])
def Pro_resume():
    session["ret"] = "/ResumePRO"
    if session.get("login") != True:
        return redirect("/Login")
    elif session.get("Executive") == True:
        company = request.form["company"]
        session["company"] = company 
        wso_companies = [
        "Walmart", "IBM", "Oracle", "Goldman Sachs", "JPMorgan Chase",
        "Morgan Stanley", "Bank of America", "Citigroup", "HSBC", "Barclays",
        "Deutsche Bank", "UBS", "McKinsey & Company", "Boston Consulting Group",
        "Bain & Company", "Deloitte", "PwC", "EY", "KPMG", "TCS", "Wipro",
        "Toyota", "Ford", "General Motors", "Honda", "Volkswagen",
        "Procter & Gamble", "Unilever", "Nestlé", "Johnson & Johnson", "Pfizer",
        "Roche", "Novartis", "Merck", "Sanofi", "AstraZeneca", "Boeing",
        "Lockheed Martin", "General Electric", "Siemens", "Hitachi", "Panasonic",
        "Canon", "McDonald's", "KFC", "AT&T", "Verizon", "American Express",
        "Subway", "Burger King", "IKEA", "UPS", "Shell", "NTT",
        "Texas Instruments", "Applied Materials"
        ]
        if company in wso_companies:
            return render_template("WSO_Template.html", portfolio = session.get("portfolio") or get_portfolio())
        return render_template("Modern_Template.html", portfolio = session.get("portfolio") or get_portfolio())
    else:
        flash("PAY First to Get Executive Tier","error")
        return render_template("payment.html")
        
#git login
oauth = OAuth(app)
github = oauth.register(
    name='gitHub',
    client_id=CLIENT_ID_GITHUB,
    client_secret=CLIENT_SECRET_GITHUB,
    access_token_url=
    'https://github.com/login/oauth/access_token',

    authorize_url=
    'https://github.com/login/oauth/authorize',

    api_base_url=
    'https://api.github.com/',

    client_kwargs={
        'scope': 'user:email'
    }
)
@app.route("/login/gitHub")
def gitHub_login():
    redirect_uri = github_redirect_uri

    return github.authorize_redirect(
        redirect_uri
    )

@app.route("/github/callback")
def github_callback():
    token = github.authorize_access_token()
    resp = github.get(
        'user',
        token=token
    )
    profile = resp.json()
    email_resp = github.get(
        'user/emails',
        token=token
    )
    emails = email_resp.json()
    primary_email = None
    for email in emails:
        if email.get("primary"):
            primary_email = email.get("email")
            break
    data = {
        "name": profile.get("name"),
        "username": profile.get("login"),
        "email": primary_email
    }
    session["user"] = data 
    response = social_login(data)
    session["Executive"] = response["premium"]
    session["user"]["premium"] = response["premium"]
    session["login"] = True
    print(session["user"])
    return redirect(session["ret"])
#google

google = oauth.register(
    name='google',
    client_id=CLIENT_ID_GOOGLE,
    client_secret=CLIENT_SECRET_GOOGLE,
    server_metadata_url=
    'https://accounts.google.com/.well-known/openid-configuration',
    client_kwargs={
        'scope': 'openid profile email'
    }
)

@app.route("/login/google")
def google_login():
    redirect_uri = google_redirect_uri
    return google.authorize_redirect(
        redirect_uri
    )

@app.route("/google/callback")
def google_callback():
    token = google.authorize_access_token()
    user_info = token.get("userinfo")
    data = { "name": user_info.get("name"),
    "username": user_info.get("given_name"),
    "email": user_info.get("email")}
    session["user"] = data 
    response = social_login(data)
    session["Executive"] = response["premium"]
    session["user"]["premium"] = response["premium"]
    
    print(session["user"])
    session["login"] = True
    return redirect(session["ret"])

#microsoft

microsoft = oauth.register(
    name='microsoft',
    client_id=MICROSOFT_CLIENT_ID,
    client_secret=MICROSOFT_CLIENT_SECRET,
    server_metadata_url='https://login.microsoftonline.com/common/v2.0/.well-known/openid-configuration',
    client_kwargs={
        'scope': 'openid profile email User.Read'
    }
)

@app.route("/login/microsoft")
def login_microsoft():
    redirect_uri = microsoft_redirect_uri
    return microsoft.authorize_redirect(redirect_uri)

@app.route("/microsoft/callback")
def microsoft_callback():
    token = microsoft.authorize_access_token()
    user = token.get("userinfo")
    data = {
        "name": user.get("name"),
        "email": user.get("email"),
        "username":user.get("preferred_username")
    }
    session["user"] = data
    response = social_login(data)
    session["Executive"] = response["premium"]
    session["user"]["premium"] = response["premium"]
    session["login"]=True
    print(session["user"])
    return redirect(session["ret"])


# features pro
@app.route("/Features_pro")
def features_pro():
    session["ret"]="/Features_pro"
    if(not session.get("login")):
        return redirect("/Login")
    elif(not session.get("Executive")):
        return redirect("/Payment")
    else :
        return render_template("proFeatures.html", portfolio = session.get("portfolio") or get_portfolio())

#zyra AI
@app.route("/ask",methods=["POST"])
def ask():
    question = request.form.get("question")
    response = Client.models.generate_content(
    model="gemini-2.5-flash",
    contents=question,
    config=types.GenerateContentConfig(
        system_instruction="You are Zyra, a premium personal AI assistant. Your tone is professional, sleek, and highly intellectual. You are helpful but maintain a high-end, luxury tech vibe. Respond concisely and effectively.You are trained by Aaquib khilji to help people you have access of full folio.X website folio.X website make company specific resumes , Folio.X give company Specific templates "
    )
)
    response_ask=response.text
    return jsonify({"response":response_ask}),200

#Zyra Summary
@app.route("/summary",methods=["POST"])
def summary():
    question = request.data.decode("utf-8")
    response = Client.models.generate_content(
    model="gemini-2.5-flash",
    contents=question,
    config=types.GenerateContentConfig(
        system_instruction="You are Summary AI assistant.give answer such that it seems like the user gives summary of his own."
        )
)
    response_ask=response.text
    return jsonify({"response":response_ask}),200

#ATS
storage_lock = threading.Lock()
image_storage = {}
@app.route("/ATS", methods=["POST"])
def ATS():
    global image_storage
    try:
        target_company = session.get("company")
        if not target_company:
            return jsonify({"error": "No company found in session."}), 400

        data = request.get_json()
        image_id = data.get("image_id")
        chunk_index = data.get("chunk_index")
        total_chunks = data.get("total_chunks")
        image_chunk = data.get("image_chunk")

        with storage_lock:
            if image_id not in image_storage:
                image_storage[image_id] = [None] * total_chunks
            image_storage[image_id][chunk_index] = image_chunk
            all_chunks_received = None not in image_storage[image_id]
            
            if all_chunks_received:
             
                full_base64_image = "".join(image_storage[image_id])
           
                del image_storage[image_id]
            else:
                full_base64_image = None

        
        if all_chunks_received and full_base64_image:
            print("All Chunks received...")
            
            if "," in full_base64_image:
                header, base64_data = full_base64_image.split(",", 1)
                mime_type = header.split(";")[0].split(":")[1]
            else:
                base64_data = full_base64_image
                mime_type = "image/jpeg"

            image_bytes = base64.b64decode(base64_data)
            image_part = types.Part.from_bytes(data=image_bytes, mime_type=mime_type)

            target_company = session["company"]
            strict_ats_instruction = f"""
### CRITICAL CONTENT-ONLY EVALUATION RULE

You are NOT evaluating resume design quality.

DO NOT penalize or reward:

* Resume templates
* Colors, icons, graphics, visual aesthetics
* Section ordering
* Contact, Education, Work Experience, Skills, Projects, Languages, Certifications, Summary, Hobbies, or Interests headings
* Multi-column or single-column layouts
* Fonts, spacing, margins, visual hierarchy
* Decorative elements, timelines, badges, or section separators

Assume the ATS parser is perfect and extracts 100% of the content correctly.
you are ATS system based on the {target_company} so give your answer and response according to the {target_company}
Your entire evaluation must focus ONLY on:

1. The actual written content inside sections.
2. The strength of bullet points and descriptions.
3. Quantified achievements and measurable impact.
4. Technical depth and engineering complexity.
5. Missing technologies, frameworks, methodologies, and domain keywords.
6. Relevance to the target company.
7. Action verbs and ownership language.
8. Project quality and business/engineering impact.
9. Experience descriptions and evidence of scale.
10. Skills relevance and market competitiveness.

IMPORTANT:

* Ignore section titles completely. Do not criticize "Education", "Work Experience", "Projects", "Skills", "Languages", "Summary", "Contact", or similar headings because these are template components.
* Ignore whether a section exists because of template design choices. Evaluate only the quality of the content inside the section.
* Do not mention parser risks, columns, sidebars, progress bars, charts, icons, visual elements, or ATS formatting issues.
* Never deduct points because of template choice.
* Never deduct points because of visual design.
* Never deduct points because of section placement.

Your ATS score must be determined ONLY by:

* Achievement impact
* Metrics
* Technical depth
* Business impact
* Company-specific keyword coverage
* Project quality
* Experience quality
* Leadership evidence
* Ownership evidence
* Scale and complexity evidence

When identifying weaknesses, focus only on weak wording, missing metrics, shallow projects, missing keywords, weak technical stack, vague descriptions, lack of ownership, or lack of measurable outcomes.
""" 

            response = Client.models.generate_content(
                model="gemini-2.5-flash",
                contents=[image_part], 
                config=types.GenerateContentConfig(system_instruction=strict_ats_instruction)
            )
            
            return jsonify({"response": response.text, "status": "completed"}), 200

        return jsonify({"status": "processing", "message": f"Chunk {chunk_index + 1} received safely."}), 200

    except Exception as e:
        return jsonify({"error": str(e)}), 500

    
@app.errorhandler(Exception)
def handle_all_errors(error):
    return render_template("error.html")
if __name__ == "__main__":
    app.run(debug=True)
    