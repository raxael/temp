import { useMemo, useState } from 'react';
import { historyEntries } from '../../data/dashboard';

const periodFilters = [
  { id: 'day', label: 'День' },
  { id: 'week', label: 'Неделя' },
  { id: 'month', label: 'Месяц' },
] as const;

const typeFilters = [
  { id: 'all', label: 'Все' },
  { id: 'withdrawal', label: 'Вывод' },
  { id: 'pending', label: 'Ожидание' },
  { id: 'deposit', label: 'Пополнение' },
  { id: 'error', label: 'Ошибки' },
] as const;

const currencyFilters = [
  { id: 'all', label: 'Все' },
  { id: 'USD', label: 'USD' },
  { id: 'EUR', label: 'EUR' },
] as const;

export const HistoryPage = () => {
  const [period, setPeriod] = useState<(typeof periodFilters)[number]['id']>('week');
  const [type, setType] = useState<(typeof typeFilters)[number]['id']>('all');
  const [currency, setCurrency] = useState<(typeof currencyFilters)[number]['id']>('all');

  const filtered = useMemo(
    () =>
      historyEntries.filter((entry) => {
        const matchesPeriod = period ? entry.timeframe === period : true;
        const matchesType = type === 'all' || entry.category === type;
        const matchesCurrency = currency === 'all' || entry.currency === currency;
        return matchesPeriod && matchesType && matchesCurrency;
      }),
    [period, type, currency]
  );

  return (
    <div className="page">
      <section className="card">
        <div className="section-header">
          <p className="section-title">История операций</p>
          <button className="btn btn-secondary" style={{ padding: '0.4rem 0.9rem' }}>
            Экспорт
          </button>
        </div>

        <div className="filter-row">
          <div className="filter-group">
            <p>Период</p>
            <div className="filter-tabs">
              {periodFilters.map((filter) => (
                <button
                  key={filter.id}
                  type="button"
                  className={`filter-tab ${period === filter.id ? 'filter-tab-active' : ''}`}
                  onClick={() => setPeriod(filter.id)}
                >
                  {filter.label}
                </button>
              ))}
            </div>
          </div>
          <div className="filter-group">
            <p>Тип</p>
            <div className="filter-tabs">
              {typeFilters.map((filter) => (
                <button
                  key={filter.id}
                  type="button"
                  className={`filter-tab ${type === filter.id ? 'filter-tab-active' : ''}`}
                  onClick={() => setType(filter.id)}
                >
                  {filter.label}
                </button>
              ))}
            </div>
          </div>
          <div className="filter-group">
            <p>Валюта</p>
            <div className="filter-tabs">
              {currencyFilters.map((filter) => (
                <button
                  key={filter.id}
                  type="button"
                  className={`filter-tab ${currency === filter.id ? 'filter-tab-active' : ''}`}
                  onClick={() => setCurrency(filter.id)}
                >
                  {filter.label}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="list">
          {filtered.map((entry) => (
            <div key={entry.id} className="list-tile">
              <div>
                <p className="list-tile__title">{entry.type}</p>
                <p className="list-tile__subtitle">
                  {entry.method} · {entry.date}
                </p>
              </div>
              <div style={{ textAlign: 'right' }}>
                <p style={{ margin: 0, fontWeight: 600 }}>
                  {entry.category === 'deposit' ? '+' : '-'}${entry.amount.toFixed(2)} {entry.currency}
                </p>
                <span className="badge">{entry.status}</span>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

