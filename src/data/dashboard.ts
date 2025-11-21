import type { CardProduct } from '../types';

export const userCards: CardProduct[] = [
  {
    id: 'visa-lite',
    slug: 'visa-lite',
    name: 'Visa Lite',
    category: 'Виртуальные',
    description: 'Ежемесячные подписки • Пополнение USDT 4%',
    priceLabel: '$560.20',
    imageUrl: 'https://wanttopay.app/sslO3w9reAEBnUEPttYDoy69irLTY7V7R4GUHho9.png',
    features: [],
  },
  {
    id: 'mastercard-pro',
    slug: 'mastercard-pro',
    name: 'Mastercard Pro',
    category: 'NFC',
    description: 'Apple Pay • Комиссия 0%',
    priceLabel: '$1,290.00',
    imageUrl: 'https://wanttopay.app/T8KIj45mSzckvQbS17bkNCY4pwlsSKbPRY0Q72Ew.png',
    features: [],
  },
];

export const purchases = [
  { id: 'p1', vendor: 'Apple Services', amount: 24.99, currency: 'USD', status: 'Оплачено', date: '21.11.2025', channel: 'Visa Lite' },
  { id: 'p2', vendor: 'Midjourney', amount: 10.0, currency: 'USD', status: 'Оплачено', date: '20.11.2025', channel: 'Visa Lite' },
  { id: 'p3', vendor: 'Steam', amount: 45.5, currency: 'USD', status: 'Оплачено', date: '19.11.2025', channel: 'Mastercard Pro' },
];

export const todayPayments = [
  { id: 'tp1', vendor: 'ChatGPT Plus', amount: 20, currency: 'USD', status: 'Оплачено', time: '10:45', channel: 'Visa Lite' },
  { id: 'tp2', vendor: 'Netflix', amount: 12.99, currency: 'USD', status: 'Оплачено', time: '08:22', channel: 'Visa Lite' },
];

export const rejectedPayments = [
  { id: 'r1', vendor: 'Meta Ads', date: '19.11.2025', reason: 'Issuer declined', percent: 0.3 },
  { id: 'r2', vendor: 'OnlyFans', date: '18.11.2025', reason: 'Insufficient funds', percent: 0.1 },
];

export type HistoryFilterType = 'deposit' | 'withdrawal' | 'pending' | 'error';

export type HistoryEntry = {
  id: string;
  type: string;
  amount: number;
  currency: 'USD' | 'EUR';
  method: string;
  status: string;
  date: string;
  timeframe: 'day' | 'week' | 'month';
  category: HistoryFilterType;
};

export const historyEntries: HistoryEntry[] = [
  {
    id: 'h1',
    type: 'Пополнение',
    amount: 500,
    currency: 'USD',
    method: 'USDT (TRC-20)',
    status: 'Зачислено',
    date: '21.11.2025',
    timeframe: 'week',
    category: 'deposit',
  },
  {
    id: 'h2',
    type: 'Вывод',
    amount: 280,
    currency: 'EUR',
    method: 'СБП',
    status: 'В обработке',
    date: '20.11.2025',
    timeframe: 'week',
    category: 'withdrawal',
  },
  {
    id: 'h3',
    type: 'Перевод',
    amount: 120,
    currency: 'USD',
    method: 'Mastercard Pro',
    status: 'Ожидание',
    date: '18.11.2025',
    timeframe: 'month',
    category: 'pending',
  },
  {
    id: 'h4',
    type: 'Пополнение',
    amount: 250,
    currency: 'EUR',
    method: 'USDC (ERC-20)',
    status: 'Ошибка',
    date: '16.11.2025',
    timeframe: 'month',
    category: 'error',
  },
  {
    id: 'h5',
    type: 'Пополнение',
    amount: 89,
    currency: 'USD',
    method: 'Visa Lite',
    status: 'Зачислено',
    date: '15.11.2025',
    timeframe: 'day',
    category: 'deposit',
  },
];

export const supportProfile = {
  supportLink: 'https://t.me/parsepay_support',
  userName: 'Гость Parse Pay',
  role: 'Guest',
  avatar: 'https://i.pravatar.cc/120?img=15',
};

export const walletSummary = {
  totalBalance: 2750.45,
  blockedAmount: 120.0,
  available: 2630.45,
};

