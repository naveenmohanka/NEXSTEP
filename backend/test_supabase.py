from database.supabase_client import supabase

response = supabase.table("profiles").select("*").limit(1).execute()

print(response.data)