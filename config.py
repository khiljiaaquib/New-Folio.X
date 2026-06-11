from dotenv import load_dotenv
import os 
from supabase import create_client
load_dotenv()
url = os.getenv("supabase_url")
key = os.getenv("supabase_key")
supabase = create_client(url, key)


