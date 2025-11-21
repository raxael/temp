import { Link } from 'react-router-dom';
import { cardProducts } from '../../data/cardProducts';

const groupedByCategory = cardProducts.reduce<Record<string, typeof cardProducts>>((acc, product) => {
  if (!acc[product.category]) {
    acc[product.category] = [];
  }
  acc[product.category].push(product);
  return acc;
}, {});

export const NewCardPage = () => (
  <div className="page">
    <section className="card">
      <div className="section-header">
        <div>
          <p className="section-title">Виртуальные карты</p>
          <p className="list-tile__subtitle">Выберите тип карты под задачу</p>
        </div>
        <Link to="/payment-methods" className="section-link">
          Как пополнить?
        </Link>
      </div>
    </section>

    {Object.entries(groupedByCategory).map(([category, products]) => (
      <section key={category} className="card">
        <div className="section-header">
          <p className="section-title">{category}</p>
          <span className="badge">{products.length}</span>
        </div>
        <div className="grid">
          {products.map((product) => (
            <Link key={product.id} to={`/cards/${product.slug}`} className="card card-muted" style={{ padding: '1rem' }}>
              <div style={{ display: 'flex', gap: '0.8rem' }}>
                <img src={product.imageUrl} alt={product.name} style={{ width: 64, borderRadius: 12 }} loading="lazy" />
                <div>
                  <p style={{ margin: 0, fontWeight: 600 }}>{product.name}</p>
                  <p style={{ margin: '0.3rem 0', color: 'var(--color-text-muted)', fontSize: '0.9rem' }}>{product.description}</p>
                  <p style={{ margin: 0, fontWeight: 600 }}>{product.priceLabel}</p>
                  {product.tags && (
                    <div style={{ marginTop: '0.3rem', display: 'flex', flexWrap: 'wrap', gap: '0.35rem' }}>
                      {product.tags.map((tag) => (
                        <span key={tag} className="badge">
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>
    ))}
  </div>
);

