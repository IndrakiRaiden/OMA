-- Create quote_requests table
CREATE TABLE quote_requests (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  nombre TEXT NOT NULL,
  email TEXT NOT NULL,
  telefono TEXT NOT NULL,
  empresa TEXT,
  tipodeservicio TEXT NOT NULL,
  cantidad TEXT,
  field TEXT,
  planos_especificaciones TEXT DEFAULT 'No',
  descripcion TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Create cart_items table to store items from the shopping cart
CREATE TABLE cart_items (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  quote_request_id UUID NOT NULL REFERENCES quote_requests(id) ON DELETE CASCADE,
  product_id TEXT NOT NULL,
  name TEXT NOT NULL,
  quantity INTEGER NOT NULL,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Add RLS (Row Level Security) policies
ALTER TABLE quote_requests ENABLE ROW LEVEL SECURITY;
ALTER TABLE cart_items ENABLE ROW LEVEL SECURITY;

-- Simple policy to allow inserting quote requests without authentication
-- No user authentication is needed, just collecting customer information

-- Simple policy to allow inserting quote requests
CREATE POLICY "Anyone can create quote requests"
  ON quote_requests
  FOR INSERT
  WITH CHECK (true);

-- Policy to allow selecting all quote requests (for admin dashboard)
CREATE POLICY "Allow selecting all quote requests"
  ON quote_requests
  FOR SELECT
  USING (true);

-- Policies for cart_items table
CREATE POLICY "Allow viewing all cart items"
  ON cart_items
  FOR SELECT
  USING (true);

CREATE POLICY "Anyone can insert cart items"
  ON cart_items
  FOR INSERT
  WITH CHECK (true);

-- No need for admin-specific policies since we're using public access

-- Create function to automatically update updated_at timestamp
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Create trigger to call the function
CREATE TRIGGER update_quote_requests_updated_at
BEFORE UPDATE ON quote_requests
FOR EACH ROW
EXECUTE FUNCTION update_updated_at_column();

-- Add indexes for better performance
CREATE INDEX idx_quote_requests_created_at ON quote_requests(created_at);
CREATE INDEX idx_quote_requests_email ON quote_requests(email);
