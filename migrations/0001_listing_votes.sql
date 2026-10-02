create table if not exists listing_votes (
  ip_hash text primary key,
  slug text not null,
  created_at timestamptz not null default now()
);
