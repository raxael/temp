import { useMemo, useState } from 'react';
import type { ReferralUserStatus } from '../../data/referrals';
import { referralStats, referralUsers, referralTimeframes } from '../../data/referrals';

const REFERRAL_STEPS = [
  'Скопируйте ссылку и отправьте друзьям',
  'Друг регистрируется и выпускает карту',
  'Вы получаете бонус на внутренний кошелёк',
];

const statusLabels: Record<ReferralUserStatus, string> = {
  all: 'Все',
  active: 'Активные',
  invited: 'Приглашённые',
  blocked: 'Заблокированные',
};

export const BonusesPage = () => {
  const [tab, setTab] = useState<ReferralUserStatus>('all');
  const [query, setQuery] = useState('');
  const [timeframe, setTimeframe] = useState<(typeof referralTimeframes)[number]>('День');

  const copyLink = async () => {
    try {
      await navigator.clipboard.writeText(referralStats.link);
    } catch {
      // ignore
    }
  };

  const filteredUsers = useMemo(
    () =>
      referralUsers.filter((user) => {
        const matchesTab = tab === 'all' || user.status === tab;
        const normalized = query.toLowerCase();
        const matchesQuery =
          !normalized || user.name.toLowerCase().includes(normalized) || user.email.toLowerCase().includes(normalized);
        return matchesTab && matchesQuery;
      }),
    [tab, query]
  );

  return (
    <div className="page">
      <section className="card">
        <div className="section-header">
          <p className="section-title">Реферальная программа</p>
          <span className="badge">{referralStats.status}</span>
        </div>
        <p>Приглашайте друзей и получайте до 5% от оплаченных подписок.</p>
        <div className="card card-muted" style={{ marginTop: '1rem' }}>
          <p className="list-tile__subtitle" style={{ margin: 0 }}>
            Инвайт-ссылка
          </p>
          <p style={{ margin: '0.4rem 0', fontWeight: 600 }}>{referralStats.link}</p>
          <button className="btn btn-secondary" onClick={copyLink}>
            Скопировать
          </button>
        </div>
        <div className="grid grid-two" style={{ marginTop: '1rem' }}>
          <div className="card card-muted">
            <p className="list-tile__subtitle" style={{ margin: 0 }}>
              Всего начислено
            </p>
            <p style={{ margin: '0.4rem 0 0', fontSize: '1.8rem', fontWeight: 600 }}>${referralStats.totalReward.toFixed(2)}</p>
          </div>
          <div className="card card-muted">
            <p className="list-tile__subtitle" style={{ margin: 0 }}>
              Статус выплат
            </p>
            <p style={{ margin: '0.4rem 0 0', fontSize: '1.8rem', fontWeight: 600 }}>{referralStats.status}</p>
          </div>
        </div>
      </section>

      <section className="card">
        <div className="section-header">
          <p className="section-title">Общая информация</p>
        </div>
        <div className="vertical-stack">
          {(['active', 'invited', 'blocked'] as const).map((key) => (
            <div key={key} className="card card-muted">
              <p className="list-tile__subtitle" style={{ margin: 0 }}>
                {statusLabels[key]}
              </p>
              <p style={{ margin: '0.2rem 0 0', fontSize: '1.6rem', fontWeight: 600 }}>{referralStats.totals[key]}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="card">
        <div className="section-header">
          <p className="section-title">Как это работает</p>
        </div>
        <ol style={{ margin: 0, paddingLeft: '1.5rem', color: 'var(--color-text-muted)' }}>
          {REFERRAL_STEPS.map((step) => (
            <li key={step} style={{ marginBottom: '0.75rem' }}>
              {step}
            </li>
          ))}
        </ol>
      </section>

      <section className="card">
        <div className="section-header">
          <p className="section-title">Партнёры</p>
          <span className="badge">{filteredUsers.length}</span>
        </div>
        <input
          className="search-input"
          placeholder="Поиск по имени или email"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
        />
        <div className="tabs">
          {(Object.keys(statusLabels) as ReferralUserStatus[]).map((status) => (
            <button
              key={status}
              className={`tab ${tab === status ? 'tab-active' : ''}`}
              type="button"
              onClick={() => setTab(status)}
            >
              {statusLabels[status]}
            </button>
          ))}
        </div>
        <div className="vertical-stack" style={{ marginTop: '1rem' }}>
          {filteredUsers.map((user) => (
              <div key={user.id} className="partner-card">
                <p className="partner-card__title">{user.name}</p>
                <p className="partner-card__subtitle">{user.email}</p>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '0.4rem' }}>
                  <span className="badge">{statusLabels[user.status as ReferralUserStatus]}</span>
                  <strong>{`$${user.reward.toFixed(2)}`}</strong>
                </div>
              </div>
          ))}
        </div>
      </section>

      <section className="card">
        <div className="section-header">
          <p className="section-title">Аналитика</p>
        </div>
        <div className="tabs" style={{ marginBottom: '1rem' }}>
          {referralTimeframes.map((frame) => (
            <button
              key={frame}
              className={`tab ${frame === timeframe ? 'tab-active' : ''}`}
              type="button"
              onClick={() => setTimeframe(frame)}
            >
              {frame}
            </button>
          ))}
        </div>
        <div className="analytics-fields">
          <label className="form-field">
            <span>Дата начала</span>
            <input type="date" />
          </label>
          <label className="form-field">
            <span>Дата окончания</span>
            <input type="date" />
          </label>
        </div>
        <div className="grid" style={{ marginTop: '1rem' }}>
          <button className="btn btn-secondary">Загрузить стату</button>
          <button className="btn btn-primary">Обновить</button>
        </div>
      </section>
    </div>
  );
};

