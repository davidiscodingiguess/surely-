-- PHASE 1 SKELETON — schema contract, not the full schema.
-- HARD RULE: tenant_id on EVERY table (single-tenant for the test;
-- multi-tenancy later must never require a rebuild).
-- Detailed columns, indexes, and RLS land in Phase 3.

create extension if not exists "pgcrypto";

create table if not exists tenants (
  id uuid primary key default gen_random_uuid(),
  tenant_id uuid not null, -- stubbed; the test runs as exactly one tenant
  created_at timestamptz not null default now()
);

create table if not exists properties (
  id uuid primary key default gen_random_uuid(),
  tenant_id uuid not null,
  created_at timestamptz not null default now()
);

create table if not exists units (
  id uuid primary key default gen_random_uuid(),
  tenant_id uuid not null,
  property_id uuid not null references properties(id),
  created_at timestamptz not null default now()
);

create table if not exists residents (
  id uuid primary key default gen_random_uuid(),
  tenant_id uuid not null,
  unit_id uuid not null references units(id),
  created_at timestamptz not null default now()
);

create table if not exists conversations (
  id uuid primary key default gen_random_uuid(),
  tenant_id uuid not null,
  resident_id uuid not null references residents(id),
  created_at timestamptz not null default now()
);

create table if not exists messages (
  id uuid primary key default gen_random_uuid(),
  tenant_id uuid not null,
  conversation_id uuid not null references conversations(id),
  created_at timestamptz not null default now()
);

create table if not exists tickets (
  id uuid primary key default gen_random_uuid(),
  tenant_id uuid not null,
  unit_id uuid not null references units(id),
  created_at timestamptz not null default now()
);

create table if not exists vendors (
  id uuid primary key default gen_random_uuid(),
  tenant_id uuid not null,
  created_at timestamptz not null default now()
);

create table if not exists house_rules (
  id uuid primary key default gen_random_uuid(),
  tenant_id uuid not null,
  property_id uuid not null references properties(id),
  created_at timestamptz not null default now()
);

create table if not exists owner_settings (
  id uuid primary key default gen_random_uuid(),
  tenant_id uuid not null,
  created_at timestamptz not null default now()
);

create table if not exists audit_log (
  id uuid primary key default gen_random_uuid(),
  tenant_id uuid not null,
  created_at timestamptz not null default now()
);

create table if not exists push_subscriptions (
  id uuid primary key default gen_random_uuid(),
  tenant_id uuid not null,
  created_at timestamptz not null default now()
);
