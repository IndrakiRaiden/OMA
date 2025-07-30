# Supabase Integration for OMA

This directory contains the Supabase database schema and migration files for the OMA project.

## Setup Instructions

1. Create a Supabase project at [https://app.supabase.com](https://app.supabase.com)
2. Get your Supabase URL and anon key from the project settings
3. Create a `.env` file in the root of your project with the following variables:

```
SUPABASE_URL=your_supabase_url
SUPABASE_ANON_KEY=your_supabase_anon_key
```

## Database Schema

The main table for the checkout page is `quote_requests`, which stores all quote request submissions from customers.

### Quote Requests Table

This table stores all quote requests submitted through the checkout form:

| Column                | Type       | Description                                |
|-----------------------|------------|--------------------------------------------|
| id                    | UUID       | Primary key                                |
| nombre                | TEXT       | Customer name                              |
| email                 | TEXT       | Customer email                             |
| telefono              | TEXT       | Customer phone number                      |
| empresa               | TEXT       | Customer company (optional)                |
| tipodeservicio        | TEXT       | Type of service requested                  |
| cantidad              | TEXT       | Quantity                                   |
| field                 | TEXT       | Material type (optional)                   |
| planos_especificaciones | TEXT     | Whether customer has plans/specs (Yes/No)  |
| descripcion           | TEXT       | Additional details and cart items          |
| created_at            | TIMESTAMP  | When the record was created                |
| updated_at            | TIMESTAMP  | When the record was last updated           |

## Migration

To run the migration:

1. Connect to your Supabase project using the Supabase CLI
2. Run the migration script:

```bash
supabase db push
```

Or execute the SQL directly in the Supabase SQL editor.
