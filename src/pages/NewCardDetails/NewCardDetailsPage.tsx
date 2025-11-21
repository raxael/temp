import { Link, useParams } from 'react-router-dom';
import { cardProducts } from '../../data/cardProducts';

export const NewCardDetailsPage = () => {
  const { slug } = useParams();
  const product = cardProducts.find((item) => item.slug === slug);

  if (!product) {
    return (
      <div className="page">
        <section className="card">
          <p className="section-title">Карта не найдена</p>
          <p className="list-tile__subtitle">Возможно, продукт обновлён или переименован.</p>
          <Link to="/cards/new" className="btn btn-primary">
            Вернуться к каталогу
          </Link>
        </section>
      </div>
    );
  }

  return (
    <div className="page">
      <section className="card">
        <div className="section-header">
          <div>
            <p className="section-title">{product.name}</p>
            <p className="list-tile__subtitle">{product.category}</p>
          </div>
          <span className="badge">{product.priceLabel}</span>
        </div>
        <img src={product.imageUrl} alt={product.name} style={{ width: 140, borderRadius: 24, marginBottom: '1rem' }} loading="lazy" />
        <p style={{ marginTop: 0 }}>{product.description}</p>
      </section>

      <section className="card">
        <div className="section-header">
          <p className="section-title">Особенности карты</p>
        </div>
        <div className="grid grid-two">
          {product.features.map((feature) => (
            <div
              key={feature.label}
              className={`card card-muted`}
              style={{
                border: feature.highlight ? `1px solid var(--color-accent)` : undefined,
                color: feature.highlight ? 'var(--color-accent)' : undefined,
              }}
            >
              <p className="list-tile__subtitle" style={{ margin: 0 }}>
                {feature.label}
              </p>
              <p style={{ margin: '0.4rem 0 0', fontWeight: 600 }}>{feature.value}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="card card-muted">
        <p className="section-title">Тарифы и условия</p>
        <p style={{ marginTop: '0.3rem' }}>Обслуживание карты — 690 ₽ / месяц, первый месяц бесплатно. Комиссии указаны без скрытых платежей.</p>
        <Link to="https://faq.wanttopay.net/hello/tarify-i-usloviya" className="section-link">
          Перейти к условиям
        </Link>
      </section>

      <section className="card">
        <p className="section-title">Как оплатить</p>
        <p className="list-tile__subtitle">Пополнение в рублях и криптовалюте занимает до 5 минут.</p>
        <Link to="/payment-methods" className="btn btn-primary">
          Посмотреть способы оплаты
        </Link>
      </section>
    </div>
  );
};

