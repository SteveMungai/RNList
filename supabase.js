import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://rjpnavxtjzjvokkovyem.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJqcG5hdnh0anpqdm9ra292eWVtIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODQ3MTY3NTEsImV4cCI6MjEwMDI5Mjc1MX0.qZ9XzUH4sbzBTPXDkwLF-adCNU_pZ0fP8yHjshn87jM';

export const supabase = createClient(
  supabaseUrl,
  supabaseAnonKey
);