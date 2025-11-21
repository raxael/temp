import { Link } from 'react-router-dom';
import { cardProducts } from '../../data/cardProducts';

export const CardsPage = () => {
  const featured = cardProducts.slice(0, 3);

  return (
    <div className="page">
      <section className="card">
        <div className="section-header">
          <p className="section-title">Мои карты</p>
          <Link to="/cards/new" className="section-link">
            Выпустить
          </Link>
        </div>
        <div className="empty-state">
          <img src="/imgs/new/home1.svg" alt="Нет карт" loading="lazy" />
          <p>Пока нет виртуальных карт. Попробуйте выпустить Visa Easy или Mastercard.</p>
          <div className="grid">
            <Link to="/cards/new" className="btn btn-primary">
              Выпустить карту
            </Link>
            <Link to="/payment-methods" className="btn btn-secondary">
              Пополнить баланс
            </Link>
          </div>
        </div>
      </section>

      <section className="card">
        <div className="section-header">
          <p className="section-title">Популярные решения</p>
          <Link to="/cards/new" className="section-link">
            Смотреть все
          </Link>
        </div>
        <div className="grid">
          {featured.map((card) => (
            <Link key={card.id} to={`/cards/${card.slug}`} className="list-tile">
              <div>
                <p className="list-tile__title">{card.name}</p>
                <p className="list-tile__subtitle">{card.description}</p>
              </div>
              <div style={{ textAlign: 'right' }}>
                <p style={{ margin: 0, fontWeight: 600 }}>{card.priceLabel}</p>
                <span className="badge">{card.category}</span>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
};

