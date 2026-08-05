export function formatCurrency(amount: number, currency = 'ج.م'): string {
  const formatted = new Intl.NumberFormat('ar-EG', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(Math.abs(amount));
  return `${amount < 0 ? '-' : ''}${formatted} ${currency}`;
}

export function formatNumber(num: number, digits = 2): string {
  return new Intl.NumberFormat('ar-EG', {
    minimumFractionDigits: digits,
    maximumFractionDigits: digits,
  }).format(num);
}

export function formatDate(date: string): string {
  return new Intl.DateTimeFormat('ar-EG', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }).format(new Date(date));
}

export function formatDateTime(date: string): string {
  return new Intl.DateTimeFormat('ar-EG', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  }).format(new Date(date));
}

export function generateCode(prefix: string): string {
  const random = Math.floor(100000 + Math.random() * 900000);
  return `${prefix}-${random}`;
}

export function generateBarcode(): string {
  let code = '';
  for (let i = 0; i < 12; i++) {
    code += Math.floor(Math.random() * 10).toString();
  }
  return code;
}

import { supabase } from './supabase';

export async function logAudit(
  action: string,
  entityType: string,
  entityId?: string,
  details?: Record<string, unknown>,
) {
  await supabase.from('audit_log').insert({
    action,
    entity_type: entityType,
    entity_id: entityId,
    details: details ?? null,
  });
}
