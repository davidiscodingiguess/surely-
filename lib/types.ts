// PHASE 1 SKELETON — DB row types. Hard rule: EVERY table carries tenant_id
// (single-tenant for the test; multi-tenancy later must never require a rebuild).
// Detailed columns land in Phase 3.

export type TenantId = string; // stubbed single-tenant value for the test

export interface Row {
  id: string;
  tenant_id: TenantId;
  created_at: string;
}

export interface Property extends Row {
  // name, address — Phase 3
}

export interface Unit extends Row {
  property_id: string;
  // label, lease dates — Phase 3
}

export interface Resident extends Row {
  unit_id: string;
  // name, phone — Phase 3
}

export interface Conversation extends Row {
  resident_id: string;
  // channel: 'sms' — Phase 3
}

export interface Message extends Row {
  conversation_id: string;
  // direction, body, from_ai — Phase 3
}

export interface Ticket extends Row {
  unit_id: string;
  // triage: 'emergency' | 'urgent' | 'routine', status, photos — Phase 3
}

export interface Vendor extends Row {
  // trade, phone, rate, preferred/backup — Phase 3
}

export interface HouseRule extends Row {
  property_id: string;
  // text — Phase 3
}

export interface OwnerSettings extends Row {
  // approval_limit_cents, quiet_hours, tone_preset, escalation_contacts — Phase 3
}

export interface AuditLog extends Row {
  // actor, action, reason, payload — Phase 3 (Compliance owns)
}

export interface PushSubscription extends Row {
  // endpoint, keys — Phase 3 (2-tap approvals from notification)
}
