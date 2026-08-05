export type Metal = 'gold' | 'silver';
export type Karat = '24' | '21' | '18' | '14' | '925';
export type ProductType =
  | 'ring'
  | 'necklace'
  | 'bracelet'
  | 'earring'
  | 'wedding_ring'
  | 'pendant'
  | 'bar'
  | 'other';
export type ProductStatus = 'available' | 'sold' | 'reserved';
export type Role = 'manager' | 'cashier' | 'employee';
export type PaymentMethod = 'cash' | 'card' | 'credit';
export type ExpenseCategory = 'rent' | 'electricity' | 'salaries' | 'other';

export interface Profile {
  id: string;
  display_name: string;
  role: Role;
  created_at: string;
}

export interface Settings {
  id: string;
  owner_id: string;
  shop_name: string;
  logo_url: string | null;
  tax_enabled: boolean;
  tax_rate: number;
  currency: string;
  default_making_charge: number;
  low_stock_threshold: number;
  created_at: string;
  updated_at: string;
}

export interface Product {
  id: string;
  owner_id: string;
  code: string;
  name: string;
  type: ProductType;
  metal: Metal;
  karat: Karat;
  weight: number;
  gram_buy_price: number;
  making_charge: number;
  sell_price: number;
  image_url: string | null;
  barcode: string | null;
  status: ProductStatus;
  created_at: string;
  updated_at: string;
}

export interface Customer {
  id: string;
  owner_id: string;
  name: string;
  phone: string | null;
  balance: number;
  notes: string | null;
  created_at: string;
  updated_at: string;
}

export interface Supplier {
  id: string;
  owner_id: string;
  name: string;
  phone: string | null;
  balance_due: number;
  notes: string | null;
  created_at: string;
  updated_at: string;
}

export interface SaleItem {
  id: string;
  sale_id: string;
  owner_id: string;
  product_id: string | null;
  product_name: string;
  weight: number;
  unit_price: number;
  making_charge: number;
  quantity: number;
  line_total: number;
}

export interface Sale {
  id: string;
  owner_id: string;
  invoice_number: string;
  customer_id: string | null;
  customer_name: string | null;
  customer_phone: string | null;
  subtotal: number;
  tax_amount: number;
  total: number;
  payment_method: PaymentMethod;
  notes: string | null;
  created_at: string;
  sale_items?: SaleItem[];
}

export interface Purchase {
  id: string;
  owner_id: string;
  purchase_number: string;
  supplier_id: string | null;
  supplier_name: string | null;
  metal: Metal;
  karat: string;
  weight: number;
  gram_price: number;
  total_price: number;
  notes: string | null;
  created_at: string;
}

export interface Expense {
  id: string;
  owner_id: string;
  category: ExpenseCategory;
  description: string | null;
  amount: number;
  created_at: string;
}

export interface AuditLog {
  id: string;
  owner_id: string;
  action: string;
  entity_type: string;
  entity_id: string | null;
  details: Record<string, unknown> | null;
  created_at: string;
}

export const PRODUCT_TYPE_LABELS: Record<ProductType, string> = {
  ring: 'خاتم',
  necklace: 'سلسلة',
  bracelet: 'إسورة',
  earring: 'حلق',
  wedding_ring: 'دبلة',
  pendant: 'تعليقة',
  bar: 'سبيكة',
  other: 'أخرى',
};

export const METAL_LABELS: Record<Metal, string> = {
  gold: 'ذهب',
  silver: 'فضة',
};

export const KARAT_LABELS: Record<string, string> = {
  '24': '24',
  '21': '21',
  '18': '18',
  '14': '14',
  '925': '925',
};

export const STATUS_LABELS: Record<ProductStatus, string> = {
  available: 'متوفر',
  sold: 'تم البيع',
  reserved: 'محجوز',
};

export const ROLE_LABELS: Record<Role, string> = {
  manager: 'مدير',
  cashier: 'كاشير',
  employee: 'موظف',
};

export const PAYMENT_LABELS: Record<PaymentMethod, string> = {
  cash: 'نقدي',
  card: 'بطاقة',
  credit: 'آجل',
};

export const EXPENSE_LABELS: Record<ExpenseCategory, string> = {
  rent: 'إيجار',
  electricity: 'كهرباء',
  salaries: 'رواتب',
  other: 'أخرى',
};
