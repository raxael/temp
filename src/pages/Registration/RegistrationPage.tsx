import { FormEvent, useState } from 'react';
import { useNavigate } from 'react-router-dom';

type RegistrationForm = {
  email: string;
  name: string;
  promo: string;
  referral: string;
};

const initialState: RegistrationForm = {
  email: '',
  name: '',
  promo: '',
  referral: '',
};

export const RegistrationPage = () => {
  const [form, setForm] = useState(initialState);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleChange = (field: keyof RegistrationForm) => (event: React.ChangeEvent<HTMLInputElement>) => {
    setForm((prev) => ({ ...prev, [field]: event.target.value }));
  };

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    if (!form.email || !form.name) {
      setError('Заполните обязательные поля: Email и Имя.');
      return;
    }
    setError('');
    navigate('/registration/completed', { state: form });
  };

  return (
    <div className="page">
      <section className="card">
        <p className="section-title">Регистрация</p>
        <p className="list-tile__subtitle">Создайте профиль, чтобы выпускать карты и управлять балансом.</p>

        <form onSubmit={handleSubmit} className="form-grid">
          <label className="form-field">
            <span>Email *</span>
            <input type="email" placeholder="you@example.com" value={form.email} onChange={handleChange('email')} required />
          </label>

          <label className="form-field">
            <span>Имя *</span>
            <input type="text" placeholder="Иван Иванов" value={form.name} onChange={handleChange('name')} required />
          </label>

          <label className="form-field">
            <span>Промокод</span>
            <input type="text" placeholder="PROMO2025" value={form.promo} onChange={handleChange('promo')} />
          </label>

          <label className="form-field">
            <span>Реферальный код</span>
            <input type="text" placeholder="INVITE123" value={form.referral} onChange={handleChange('referral')} />
          </label>

          {error && <p className="form-error">{error}</p>}

          <button type="submit" className="btn btn-primary" style={{ width: '100%' }}>
            Продолжить
          </button>
        </form>
      </section>
    </div>
  );
};

