import { createClient } from "@supabase/supabase-js";

const SUPABASE_URL = "https://jntuaqvjdknlhtxzjmdz.supabase.co";
const SUPABASE_ANON_KEY =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImpudHVhcXZqZGtubGh0eHpqbWR6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mzk5ODA1MzQsImV4cCI6MjA1NTU1NjUzNH0.Jsku7DTYJfjCC9qbmKAkRvBVwQ3sIIr_bMCQ5MQBQCk";

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
