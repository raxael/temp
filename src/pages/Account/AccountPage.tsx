import { useState } from 'react';
import { supportProfile, walletSummary } from '../../data/dashboard';
import { useTheme } from '../../hooks/useTheme';

export const AccountPage = () => {
  const { theme, toggleTheme } = useTheme();
  const [notifications, setNotifications] = useState(true);

  return (
    <div className="page">
      <section className="card" style={{ textAlign: 'center' }}>
        <img src={supportProfile.avatar} alt="Avatar" style={{ width: 120, borderRadius: '50%', margin: '0 auto' }} />
        <p className="section-title" style={{ marginTop: '1rem' }}>
          {supportProfile.userName}
        </p>
        <p className="list-tile__subtitle">Роль: {supportProfile.role}</p>
        <div className="grid grid-two" style={{ marginTop: '1rem' }}>
          <div className="card card-muted">
            <p className="list-tile__subtitle" style={{ margin: 0 }}>
              ID пользователя
            </p>
            <p style={{ fontWeight: 600, margin: '0.35rem 0 0' }}>USR-00124</p>
          </div>
          <div className="card card-muted">
            <p className="list-tile__subtitle" style={{ margin: 0 }}>
              Версия приложения
            </p>
            <p style={{ fontWeight: 600, margin: '0.35rem 0 0' }}>1.4.2</p>
          </div>
        </div>
      </section>

      <section className="card">
        <div className="section-header">
          <p className="section-title">Контакты</p>
        </div>
        <div className="list">
          <div className="list-tile">
            <div>
              <p className="list-tile__title">Email</p>
              <p className="list-tile__subtitle">guest@parse-pay.app</p>
            </div>
            <span className="badge">Изменить</span>
          </div>
          <div className="list-tile">
            <div>
              <p className="list-tile__title">Telegram</p>
              <p className="list-tile__subtitle">@parsepay_guest</p>
            </div>
            <span className="badge">Подтвердить</span>
          </div>
        </div>
      </section>

      <section className="card">
        <div className="section-header">
          <p className="section-title">Баланс</p>
        </div>
        <div className="grid grid-two">
          <div className="card card-muted">
            <p className="list-tile__subtitle" style={{ margin: 0 }}>
              Доступно
            </p>
            <p style={{ margin: '0.3rem 0 0', fontSize: '1.6rem', fontWeight: 600 }}>${walletSummary.available.toFixed(2)}</p>
          </div>
          <div className="card card-muted">
            <p className="list-tile__subtitle" style={{ margin: 0 }}>
              Сборка
            </p>
            <p style={{ margin: '0.3rem 0 0', fontWeight: 600 }}>build#4512</p>
          </div>
        </div>
      </section>

      <section className="card">
        <div className="section-header">
          <p className="section-title">Настройки</p>
        </div>
        <div className="list">
          <div className="list-tile">
            <div>
              <p className="list-tile__title">Тема приложения</p>
              <p className="list-tile__subtitle">{theme === 'light' ? 'Светлая' : 'Тёмная'}</p>
            </div>
            <button className="btn btn-secondary" onClick={toggleTheme}>
              Сменить
            </button>
          </div>
          <div className="list-tile">
            <div>
              <p className="list-tile__title">Уведомления</p>
              <p className="list-tile__subtitle">{notifications ? 'Включены' : 'Выключены'}</p>
            </div>
            <button className="btn btn-secondary" onClick={() => setNotifications((prev) => !prev)}>
              {notifications ? 'Отключить' : 'Включить'}
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

