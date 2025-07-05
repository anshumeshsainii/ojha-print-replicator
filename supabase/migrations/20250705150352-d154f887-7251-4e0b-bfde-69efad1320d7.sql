
-- Create a table to store user phone numbers
CREATE TABLE public.user_contacts (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  phone_number TEXT NOT NULL,
  category TEXT NOT NULL,
  subcategory TEXT,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Add Row Level Security (RLS)
ALTER TABLE public.user_contacts ENABLE ROW LEVEL SECURITY;

-- Create policy to allow users to insert their contact info
CREATE POLICY "Anyone can insert contact info" 
  ON public.user_contacts 
  FOR INSERT 
  WITH CHECK (true);

-- Create policy to allow reading contact info (for admin purposes)
CREATE POLICY "Anyone can view contact info" 
  ON public.user_contacts 
  FOR SELECT 
  USING (true);
