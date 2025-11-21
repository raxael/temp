export const referralStats = {
  link: 'https://parse-pay.app/r/ALPHA123',
  totalReward: 420.75,
  status: 'Активна',
  totals: {
    active: 14,
    invited: 32,
    blocked: 2,
  },
  amounts: {
    active: 310.5,
    invited: 90.25,
    blocked: 20,
  },
};

export type ReferralUserStatus = 'all' | 'active' | 'invited' | 'blocked';

export const referralUsers = [
  { id: 'u1', name: 'Екатерина', email: 'kate@example.com', status: 'active', reward: 25.5 },
  { id: 'u2', name: 'Дмитрий', email: 'dima@example.com', status: 'invited', reward: 12.0 },
  { id: 'u3', name: 'Андрей', email: 'andrey@example.com', status: 'blocked', reward: 0 },
  { id: 'u4', name: 'София', email: 'sofia@example.com', status: 'active', reward: 40.25 },
];

export const referralTimeframes = ['День', 'Неделя', 'Месяц'] as const;

