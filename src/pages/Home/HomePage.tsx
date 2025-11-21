import { Link } from 'react-router-dom';
import { banners } from '../../data/banners';
import { supportProfile, purchases, todayPayments, rejectedPayments, userCards, walletSummary } from '../../data/dashboard';
import { useTheme } from '../../hooks/useTheme';

const QUICK_LINKS = [
    { id: 'issue', label: 'Оформить карту', href: '/cards/new', variant: 'primary' },
    { id: 'my-cards', label: 'Мои карты', href: '/cards', variant: 'secondary' },
];

const PURCHASE_ACTIONS = [
    {
        id: 'refresh',
        label: 'Обновить',
        action: () => {},
        isIcon: true
    },
    //{ id: 'all', label: 'Все покупки', to: '/history' },
];

export const HomePage = () => {
    const { theme, toggleTheme } = useTheme();

    return (
        <div className="page">
            <section className="card-header">
                <div>
                    <p className="section-title" style={{margin: '0', marginBottom: '0.5rem'}}>Change PRO</p>
                    <button className="stat-chip" onClick={toggleTheme} aria-label="Переключить тему">
                        {theme === 'light' ? '☀️ Светлая' : '🌙 Тёмная'}
                    </button>
                </div>
                <div className="header-actions">
                    <a
                        href={supportProfile.supportLink}
                        target="_blank"
                        rel="noreferrer"
                        className="icon-button"
                        aria-label="Поддержка"
                    >
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <circle cx="12" cy="12" r="10" />
                            <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
                            <circle cx="12" cy="17" r="0.5" fill="currentColor" />
                        </svg>
                    </a>
                    <Link to="/account" className="profile-pill">
                        <img src={supportProfile.avatar} alt="Профиль" />
                    </Link>
                </div>
            </section>

            <section className="card">
                <p className="section-title">Общий баланс</p>
                <div className="balance-grid">
                    <div>
                        <p className="balance-label">Доступно</p>
                        <p className="balance-value">${walletSummary.available.toFixed(2)}</p>
                    </div>
                    <div>
                        <p className="balance-label">Заблокировано</p>
                        <p className="balance-value muted">${walletSummary.blockedAmount.toFixed(2)}</p>
                    </div>
                    <div>
                        <p className="balance-label">Всего</p>
                        <p className="balance-value">${walletSummary.totalBalance.toFixed(2)}</p>
                    </div>
                </div>
                <div className="quick-actions">
                    {QUICK_LINKS.map((link) => (
                        <Link key={link.id} to={link.href} className={`btn ${link.variant === 'secondary' ? 'btn-secondary' : 'btn-primary'}`} style={{width: '100%'}}>
                            {link.label}
                        </Link>
                    ))}
                </div>
            </section>

            <section className="card">
                <div className="section-header">
                    <p className="section-title">Мои карты</p>
                    <Link to="/cards" className="section-link">
                        Управлять
                    </Link>
                </div>
                <div className="grid">
                    {userCards.map((card) => (
                        <div key={card.id} className="card account-card">
                            <div>
                                <p className="list-tile__title">{card.name}</p>
                                <p className="list-tile__subtitle">{card.description}</p>
                            </div>
                            <p className="account-card__amount">{card.priceLabel}</p>
                        </div>
                    ))}
                </div>
            </section>

            <section className="card">
                <div className="section-header">
                    <p className="section-title">Покупки за 30 дней</p>
                    <div className="section-links">
                        {PURCHASE_ACTIONS.map((action) =>
                            action.to ? (
                                <Link key={action.id} to={action.to} className="section-link">
                                    {action.label}
                                </Link>
                            ) : action.isIcon ? (
                                <button
                                    key={action.id}
                                    className="icon-button"
                                    onClick={action.action}
                                    aria-label={action.label}
                                >
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M21.5 2v6h-6" />
                                        <path d="M2.5 22v-6h6" />
                                        <path d="M22 11.5A10 10 0 0 0 3.2 7.2" />
                                        <path d="M2 12.5a10 10 0 0 0 18.8 4.2" />
                                    </svg>
                                </button>
                            ) : (
                                <button key={action.id} className="section-link" onClick={action.action}>
                                    {action.label}
                                </button>
                            )
                        )}
                    </div>
                </div>
                <div className="list">
                    {purchases.map((purchase) => (
                        <div key={purchase.id} className="list-tile">
                            <div>
                                <p className="list-tile__title">{purchase.vendor}</p>
                                <p className="list-tile__subtitle">
                                    {purchase.channel} · {purchase.date}
                                </p>
                            </div>
                            <div style={{ textAlign: 'right' }}>
                                <p style={{ margin: 0, fontWeight: 600 }}>
                                    -${purchase.amount.toFixed(2)} {purchase.currency}
                                </p>
                                <span className="badge">{purchase.status}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            <section className="card grid">
                <div className="card card-muted">
                    <div className="section-header">
                        <p className="section-title">Отклонённые платежи</p>
                        <span className="badge">{rejectedPayments.length}</span>
                    </div>
                    {rejectedPayments.map((item) => (
                        <div key={item.id} className="list-tile">
                            <div>
                                <p className="list-tile__title">{item.vendor}</p>
                                <p className="list-tile__subtitle">
                                    {item.date} · {item.reason}
                                </p>
                            </div>
                            <span className="badge">{(item.percent * 100).toFixed(1)}%</span>
                        </div>
                    ))}
                </div>
                <div className="card card-muted">
                    <div className="section-header">
                        <p className="section-title">Сегодня</p>
                        <span className="badge">{todayPayments.length}</span>
                    </div>
                    {todayPayments.map((payment) => (
                        <div key={payment.id} className="list-tile">
                            <div>
                                <p className="list-tile__title">{payment.vendor}</p>
                                <p className="list-tile__subtitle">
                                    {payment.time} · {payment.channel}
                                </p>
                            </div>
                            <p style={{ margin: 0, fontWeight: 600 }}>
                                -${payment.amount.toFixed(2)} {payment.currency}
                            </p>
                        </div>
                    ))}
                </div>
            </section>

            <section className="card">
                <div className="section-header">
                    <p className="section-title">Полезно знать</p>
                    <span className="scroll-hint">Листайте ➜</span>
                </div>
                <div className="banner-carousel">
                    {banners.map((banner) => {
                        const isExternal = banner.href.startsWith('http');
                        const content = (
                            <>
                                <div>
                                    {banner.tag && <span className="badge" style={{ color: '#fff', background: 'rgba(255,255,255,0.2)' }}>{banner.tag}</span>}
                                    <h3 style={{ margin: '0.35rem 0' }}>{banner.title}</h3>
                                    <p style={{ margin: 0, opacity: 0.85 }}>{banner.description}</p>
                                </div>
                                <div>
                                    <div className="btn btn-secondary" style={{ padding: '0.45rem 0.8rem', color: '#fff', borderColor: 'rgba(255,255,255,0.3)' }}>
                                        {banner.actionLabel}
                                    </div>
                                    <img src={banner.imageUrl} alt={banner.title} loading="lazy" />
                                </div>
                            </>
                        );

                        return isExternal ? (
                            <a key={banner.id} href={banner.href} target="_blank" rel="noreferrer" className="banner-card">
                                {content}
                            </a>
                        ) : (
                            <Link key={banner.id} to={banner.href} className="banner-card">
                                {content}
                            </Link>
                        );
                    })}
                </div>
            </section>
        </div>
    );
};