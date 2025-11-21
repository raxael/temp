import type { ReactNode } from 'react';
import { NavLink } from 'react-router-dom';

type NavItem = {
  id: string;
  label: string;
  to: string;
  icon: (isActive: boolean) => ReactNode;
};

const NAV_ITEMS: NavItem[] = [
  {
    id: 'home',
    label: 'Главная',
    to: '/',
    icon: (active) => (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3.5 9.5 12 3l8.5 6.5" style={{ opacity: active ? 1 : 0.7 }} />
        <path d="M5.5 21V11.5h13V21" style={{ opacity: active ? 1 : 0.6 }} />
      </svg>
    ),
  },
  {
    id: 'topup',
    label: 'Пополнить',
    to: '/balance/top-up',
    icon: (active) => (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="9" />
        <path d="M8 12h8" />
        <path d="M12 8v8" style={{ opacity: active ? 1 : 0.7 }} />
      </svg>
    ),
  },
  {
    id: 'history',
    label: 'История',
    to: '/history',
    icon: (active) => (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="9" style={{ opacity: active ? 1 : 0.8 }} />
        <path d="M12 7v5l3 2" />
      </svg>
    ),
  },
  {
    id: 'transfer',
    label: 'Перевод',
    to: '/transfer',
    icon: (active) => (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
        <path d="M5 12h14" />
        <path d="M12 5l7 7-7 7" style={{ opacity: active ? 1 : 0.7 }} />
      </svg>
    ),
  },
  {
    id: 'referral',
    label: 'Рефералы',
    to: '/bonuses',
    icon: (active) => (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2v6" style={{ opacity: active ? 1 : 0.8 }} />
        <path d="m12 8 4 4-4 10-4-10z" />
        <path d="M7 12h10" />
      </svg>
    ),
  },
];

export const BottomNavigation = () => (
  <nav className="nav-bottom" aria-label="Основная навигация">
    <ul className="nav-bottom__list">
      {NAV_ITEMS.map((item) => (
        <li key={item.id}>
          <NavLink
            to={item.to}
            className={({ isActive }) => `nav-bottom__item ${isActive ? 'nav-bottom__item-active' : ''}`}
            aria-label={item.label}
          >
            {({ isActive }) => (
              <>
                {item.icon(isActive)}
                <span>{item.label}</span>
              </>
            )}
          </NavLink>
        </li>
      ))}
    </ul>
  </nav>
);

