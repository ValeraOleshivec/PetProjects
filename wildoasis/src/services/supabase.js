import { createClient } from "@supabase/supabase-js";

const SUPABASE_KEY =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im96Z2pyaHZyZ2FqZWh3emZ1b2FpIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTkzNDc1NDksImV4cCI6MjAxNDkyMzU0OX0.1a3uync-zyupXSRG1J0G6CY78q3sG_SWaTHMnWVACqY";
export const SUPABASE_URL = "https://ozgjrhvrgajehwzfuoai.supabase.co";
const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);

export default supabase;
