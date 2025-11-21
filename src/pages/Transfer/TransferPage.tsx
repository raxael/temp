import { FormEvent, useState } from 'react';

export const TransferPage = () => {
  const [destination, setDestination] = useState('card');
  const [account, setAccount] = useState('');
  const [amount, setAmount] = useState(0);
  const [message, setMessage] = useState('');

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    if (!account || amount <= 0) {
      setMessage('Заполните реквизиты и сумму перевода.');
      return;
    }
    setMessage('Перевод создан. Мы уведомим, когда он будет выполнен.');
  };

  return (
    <div className="page">
      <section className="card">
        <p className="section-title">Перевод средств</p>
        <p className="list-tile__subtitle">Отправьте средства на карту или кошелёк партнёра.</p>
        <form onSubmit={handleSubmit} className="form-grid">
          <label className="form-field">
            <span>Тип перевода</span>
            <select value={destination} onChange={(event) => setDestination(event.target.value)}>
              <option value="card">Карта</option>
              <option value="wallet">Кошелёк</option>
              <option value="user">Внутренний пользователь</option>
            </select>
          </label>

          <label className="form-field">
            <span>{destination === 'user' ? 'ID пользователя' : destination === 'wallet' ? 'Адрес кошелька' : 'Номер карты'}</span>
            <input value={account} onChange={(event) => setAccount(event.target.value)} placeholder="Введите реквизиты" />
          </label>

          <label className="form-field">
            <span>Сумма</span>
            <input type="number" min={1} value={amount} onChange={(event) => setAmount(Number(event.target.value))} />
          </label>

          {message && <p className="form-info">{message}</p>}

          <button type="submit" className="btn btn-primary" style={{ width: '100%' }}>
            Отправить
          </button>
        </form>
      </section>
    </div>
  );
};

