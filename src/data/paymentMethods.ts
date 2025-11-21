import type { PaymentMethod } from '../types';

export const paymentMethods: PaymentMethod[] = [
  {
    id: 'sbp',
    category: 'fiat',
    name: 'СБП',
    description: 'Система быстрых платежей. Комиссия 0%, зачисление до 5 минут.',
    iconUrl: 'https://wanttopay.app/ODliqpSvQ4doyPwuL9oFbtjH2dkIKPDNY1YCcmKT.png',
  },
  {
    id: 'tinkoff',
    category: 'fiat',
    name: 'Тинькофф Банк',
    description: 'Пополнение по реквизитам. Финмон включен.',
    iconUrl: 'https://wanttopay.app/sd9pVFaOs3kVWCJ8iwFua8DCl5HQcY36caXCjUle.png',
  },
  {
    id: 'usdt',
    category: 'crypto',
    name: 'USDT',
    description: 'TRC-20 / ERC-20 / TON. Автоматическое зачисление.',
    iconUrl: 'https://wanttopay.app/pirZrFE2B4Cv7Kn9w4uor6xSgUS7g8lHbXp9Meys.png',
    network: 'TRC-20, ERC-20, TON',
  },
  {
    id: 'usdc',
    category: 'crypto',
    name: 'USDC',
    description: 'Для пополнений карт и кошелька без волатильности.',
    iconUrl: 'https://wanttopay.app/Hk70kH2l9Wm8MrtRe3oCfZs5G07zM65WmlDcNIiK.png',
    network: 'ERC-20',
  },
  {
    id: 'ton',
    category: 'crypto',
    name: 'TON',
    description: 'Мгновенные платежи из Telegram Wallet.',
    iconUrl: 'https://wanttopay.app/3LwmdHqwQ5tIaG7aHvjAe4fltbg2aimC10o3wnzo.png',
  },
  {
    id: 'eth',
    category: 'crypto',
    name: 'ETH',
    description: 'Ethereum mainnet. Комиссия сети зависит от нагрузки.',
    iconUrl: 'https://wanttopay.app/fiUn8A9XbuJJHH0WMikED7SWEtApUJBWtGhLpZ5I.png',
  },
  {
    id: 'bnb',
    category: 'crypto',
    name: 'BNB',
    description: 'Лёгкое пополнение через BSC сеть.',
    iconUrl: 'https://wanttopay.app/MtMFpa6gaTdn5oHE10Wf0WeL14ZZ4gzLvknUiXzk.png',
  },
  {
    id: 'btc',
    category: 'crypto',
    name: 'BTC',
    description: 'Классический канал пополнения через Bitcoin.',
    iconUrl: 'https://wanttopay.app/0JvGqZQ9YhmfngNs9hF378dhou5whAgsngbpWoYV.png',
  },
];

