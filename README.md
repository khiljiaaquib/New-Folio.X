# Folio.X — Premium Resume Builder 🚀

Welcome to the newly upgraded **Folio.X**, a powerhouse resume builder designed for developers and professionals who want a premium edge in their job search. We’ve rolled out a massive update with brand-new features, a redesigned high-end UI, smooth animations, a robust backend, and Google GenAI capabilities!

---

## 🔥 What's New in This Version?

### 🎨 Design & UI Overhaul
* **New Premium UI & Animations:** Fully upgraded to a sleek, modern aesthetic featuring smooth transitions, glassmorphism elements, and a high-end feel.
* **New Templates:** Added brand-new, professionally crafted resume templates catering to multiple career tiers.
* **Upgraded Hero Section:** A completely redesigned, high-impact Hero Section that instantly showcases what Folio.X can do.

### ⚙️ Feature Enhancements & Functionality
* **Delete Description:** Users can now seamlessly remove description fields or specific bullet points within their experience/projects with dedicated delete functionality.
* **100+ Companies Database:** Pre-loaded an extensive database of 100+ top companies for seamless tracking, benchmarking, or targeting.
* **Flawless & Multi-Provider Authentication:** Cleaned up and completely optimized the login/signup workflows. No more session bugs—everything works perfectly now!

### 📄 Brand New Pages
* **Developer / About Us Page:** A dedicated space highlighting the visionaries and development powerhouse behind Folio.X.

---

## 🛠️ Tech Stack

### Frontend
* **Languages:** HTML5, CSS3, JavaScript (ES6+), TypeScript (for type safety and robust code structure)
* **Styling & Animations:** Premium UI styling with modern CSS/Tailwind features and smooth animation libraries.

### Backend & Database
* **Framework:** Flask (Python-based micro-framework)
* **Database & BaaS:** Supabase (for real-time database management and scalable storage)

### AI Integration
* **Google GenAI API:** Powering smart content generation, resume optimization suggestions, and tailored description assistance.

### Security & Authentication
* **Authlib:** Used for implementing secure and standardized OAuth authentication.
* **Social Connections:** Multi-provider social login integration using **Google**, **GitHub**, and **Microsoft** APIs.
* **Password Hashing:** `bcrypt` for secure hashing and encryption of traditional user credentials.

---

## 🚀 Getting Started

To run this project locally, follow these simple steps:

### 1. Clone the repository
```bash

git clone [https://github.com/your-username/Folio.X.git](https://github.com/your-username/Folio.X.git)
cd Folio.X
```
### 2. Set Up Environment Variables
Create a .env file in your root/backend directory and add your credentials:
FLASK_APP=app.py
FLASK_ENV=development
SECRET_KEY=your_flask_secret_key

# Supabase Configurations
SUPABASE_URL=your_supabase_url
SUPABASE_KEY=your_supabase_anon_key

# Google GenAI API
GOOGLE_GENAI_API_KEY=your_google_genai_key

# OAuth Credentials (Authlib)
GOOGLE_CLIENT_ID=your_google_client_id
GOOGLE_CLIENT_SECRET=your_google_client_secret
GITHUB_CLIENT_ID=your_github_client_id
GITHUB_CLIENT_SECRET=your_github_client_secret
MICROSOFT_CLIENT_ID=your_microsoft_client_id
MICROSOFT_CLIENT_SECRET=your_microsoft_client_secret

### 3. Install Dependencies & Run
# Create a virtual environment
python -m venv venv
source venv/bin/activate  # On Windows use: venv\Scripts\activate

# Install required Python packages
pip install flask supabase authlib bcrypt google-generativeai

# Run the Flask application
flask run

### ✨ Key Features Breakdown
AI-Driven Resume Enhancement: Leverage Google GenAI to automatically generate, refine, or polish resume summaries and job descriptions.

One-Click Social Login: Secure and lightning-fast onboarding via Google, GitHub, or Microsoft accounts powered by Authlib.

Dynamic Content Management: Easily add, edit, or utilize the new Delete Description feature to tailor your content perfectly.

Supabase Backend: Scalable and lightning-fast user data storage ensuring real-time syncing of user portfolios.

### 👥 Authors & Contributors
Developed with ❤️ by Mohd Aaquib Mohd Farooque Khilji 
Give this repository a ⭐ if you love the new Folio.X updates!
