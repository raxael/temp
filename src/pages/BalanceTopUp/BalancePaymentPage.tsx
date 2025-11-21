import { Link, useLocation, useNavigate } from 'react-router-dom';

export const BalancePaymentPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const state = (location.state as { amount?: number; method?: string }) ?? { amount: 100, method: 'usdt' };
  const amount = state.amount ?? 100;
  const method = state.method ?? 'usdt';
  const walletAddress = method === 'usdt' ? 'TV1Hs9fF7g1bxeCLcXQ2t8Wg' : 'bc1kkkkkklsampleaddress';
  const qrValue = `${method.toUpperCase()}-${amount}`;

  return (
    <div className="page">
      <section className="card" style={{ textAlign: 'center' }}>
        <p className="section-title">Оплата пополнения</p>
        <p className="list-tile__subtitle">Отсканируйте QR или используйте адрес кошелька.</p>
        <img
          src={`https://api.qrserver.com/v1/create-qr-code/?size=180x180&data=${encodeURIComponent(qrValue)}`}
          alt="QR"
          style={{ margin: '1rem auto', borderRadius: 24, border: '1px solid var(--color-border)' }}
        />
        <div className="card card-muted">
          <p className="list-tile__title">Адрес кошелька</p>
          <p style={{ wordBreak: 'break-all', marginBottom: '0.5rem' }}>{walletAddress}</p>
          <button className="btn btn-secondary" onClick={() => navigator.clipboard.writeText(walletAddress)}>
            Скопировать адрес
          </button>
        </div>
        <div className="card card-muted" style={{ marginTop: '1rem' }}>
          <p className="list-tile__title">Сумма</p>
          <p style={{ fontSize: '1.5rem', margin: 0 }}>${amount.toFixed(2)}</p>
        </div>
        <div className="grid" style={{ marginTop: '1.5rem' }}>
          <button className="btn btn-secondary" onClick={() => navigate(-1)}>
            Отменить
          </button>
          <Link to="/" className="btn btn-primary">
            Я оплатил
          </Link>
        </div>
      </section>
    </div>
  );
};

