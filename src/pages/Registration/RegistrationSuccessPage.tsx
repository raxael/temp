import { Link, useLocation } from 'react-router-dom';

export const RegistrationSuccessPage = () => {
  const location = useLocation();
  const name = (location.state as { name?: string } | null)?.name ?? 'Новый пользователь';

  return (
    <div className="page">
      <section className="card" style={{ textAlign: 'center' }}>
        <img
          src="https://wanttopay.app/y3qjnGFHBcLns4sKXOOrdBWfuCIbfiiCscmmFTQz.svg"
          alt="Success"
          style={{ width: 160, margin: '0 auto 1rem' }}
        />
        <p className="section-title">Готово, {name}!</p>
        <p style={{ color: 'var(--color-text-muted)' }}>Мы создали профиль и отправили письмо-подтверждение на ваш email.</p>
        <div className="grid" style={{ marginTop: '1rem' }}>
          <Link to="/" className="btn btn-primary">
            Перейти в кабинет
          </Link>
          <Link to="/cards/new" className="btn btn-secondary">
            Выпустить карту
          </Link>
        </div>
      </section>
    </div>
  );
};

