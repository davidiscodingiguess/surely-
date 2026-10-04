// Schema contract test: EVERY table in the migration must carry tenant_id.
// Single-tenant for the test; multi-tenancy later must never require a rebuild.
// This test guards the one architectural rule that cannot be violated.
import { readFileSync } from "node:fs";
import { describe, expect, it } from "vitest";

const SQL = readFileSync(
  new URL("../supabase/migrations/0001_skeleton.sql", import.meta.url),
  "utf8"
);

describe("tenant_id stub contract", () => {
  it("every CREATE TABLE block declares tenant_id", () => {
    const tables = [...SQL.matchAll(/create table if not exists (\w+)/gi)].map(
      (m) => m[1]
    );
    expect(tables.length).toBeGreaterThan(0);
    for (const table of tables) {
      const block = new RegExp(
        `create table if not exists ${table}\\s*\\(([\\s\\S]*?)\\);`,
        "i"
      ).exec(SQL)?.[1];
      expect(block, `${table}: CREATE TABLE block found`).toBeDefined();
      expect(
        /tenant_id\s+uuid\s+not null/i.test(block!),
        `${table}: tenant_id uuid not null`
      ).toBe(true);
    }
  });
});
