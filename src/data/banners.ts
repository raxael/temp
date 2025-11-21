import type { Banner } from '../types';

export const banners: Banner[] = [
  {
    id: 'faq',
    title: 'Есть вопросы?',
    description: 'Мгновенно переходите в центр помощи и найдите ответы.',
    href: 'https://faq.wanttopay.net/hello/obshie-voprosy',
    imageUrl: 'https://wanttopay.app/y3qjnGFHBcLns4sKXOOrdBWfuCIbfiiCscmmFTQz.svg',
    actionLabel: 'Подробнее',
    tag: 'FAQ',
  },
  {
    id: 'referral',
    title: 'Реферальная программа',
    description: 'Дарите бонусы друзьям и получайте вознаграждение в $',
    href: '/bonuses',
    imageUrl: 'https://wanttopay.app/xLgDubTdtjj6z2ifuLNZSfbNvJaPpGfSI9A70fDr.svg',
    actionLabel: 'Пригласить',
    tag: 'Доход',
  },
  {
    id: 'tariffs',
    title: 'Тарифы и условия',
    description: 'Прозрачные комиссии и актуальные лимиты в одном месте.',
    href: 'https://faq.wanttopay.net/hello/tarify-i-usloviya',
    imageUrl: 'https://wanttopay.app/wlHag1dqQ0k5UzW0w3QiElMDmJOg4EioJEvypeNJ.svg',
    actionLabel: 'Ознакомиться',
  },
  {
    id: 'exchange',
    title: 'Обмен криптовалюты',
    description: 'Покупайте и продавайте стейблкоины в официальном сервисе.',
    href: '/payment-methods',
    imageUrl: 'https://wanttopay.app/EkQEzMjXT2pWc60qvGJ7zCuVeMVJmkJztrw18mzE.svg',
    actionLabel: 'Перейти',
  },
];

