import { FormEvent, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const paymentOptions = [
  { id: 'usdt_trc', label: 'USDT (TRC-20)' },
  { id: 'usdt_erc', label: 'USDT (ERC-20)' },
];

export const BalanceTopUpPage = () => {
  const [method, setMethod] = useState(paymentOptions[0].id);
  const [amount, setAmount] = useState(100);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    if (amount < 100) {
      setError('Минимальная сумма пополнения — $100.');
      return;
    }
    setError('');
    navigate('/balance/payment', { state: { method, amount } });
  };

  return (
    <div className="page">
      <section className="card">
        <p className="section-title">Пополнить баланс</p>
        <p className="list-tile__subtitle">Выберите способ оплаты и введите сумму пополнения.</p>

        <form onSubmit={handleSubmit} className="form-grid">
          <label className="form-field">
            <span>Способ оплаты</span>
            <select value={method} onChange={(event) => setMethod(event.target.value)}>
              {paymentOptions.map((option) => (
                <option key={option.id} value={option.id}>
                  {option.label}
                </option>
              ))}
            </select>
          </label>

          <label className="form-field">
            <span>Сумма (мин. $100)</span>
            <input
              type="number"
              min={100}
              value={amount}
              onChange={(event) => setAmount(Number(event.target.value))}
              placeholder="100"
            />
          </label>

          {error && <p className="form-error">{error}</p>}

          <button type="submit" className="btn btn-primary" style={{ width: '100%' }}>
            Пополнить
          </button>
        </form>
      </section>
    </div>
  );
};

