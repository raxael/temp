import { Link } from 'react-router-dom';

export const OnboardingPage = () => (
  <div className="page">
    <section className="card" style={{ textAlign: 'center' }}>
      <p className="section-title">Parse Pay</p>
      <p style={{ color: 'var(--color-text-muted)' }}>Выпускайте виртуальные карты и управляйте платежами за пару минут.</p>
      <img
        src="https://wanttopay.app/xLgDubTdtjj6z2ifuLNZSfbNvJaPpGfSI9A70fDr.svg"
        alt="Onboarding"
        style={{ width: 180, margin: '1rem auto' }}
      />
      <p>Создайте учетную запись и получите доступ к карте, аналитике и партнерской программе.</p>
      <Link to="/registration" className="btn btn-primary" style={{ width: '100%', marginTop: '1rem' }}>
        Создать учетную запись
      </Link>
    </section>
  </div>
);

