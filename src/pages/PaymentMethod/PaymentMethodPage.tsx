import { paymentMethods } from '../../data/paymentMethods';
import type { PaymentMethod } from '../../types';

const categoryLabels: Record<string, string> = {
  fiat: 'Рубли',
  crypto: 'Криптовалюта',
};

const grouped = paymentMethods.reduce<Record<string, PaymentMethod[]>>((acc, method) => {
  if (!acc[method.category]) {
    acc[method.category] = [];
  }
  acc[method.category].push(method);
  return acc;
}, {});

export const PaymentMethodPage = () => (
  <div className="page">
    {Object.entries(grouped).map(([category, methods]) => (
      <section key={category} className="card">
        <div className="section-header">
          <p className="section-title">{categoryLabels[category] ?? category}</p>
          <span className="badge">{methods.length}</span>
        </div>
        <div>
          {methods.map((method) => (
            <div key={method.id} className="list-tile">
              <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'center' }}>
                <img src={method.iconUrl} alt={method.name} style={{ width: 48, height: 48, borderRadius: 12 }} loading="lazy" />
                <div>
                  <p className="list-tile__title">{method.name}</p>
                  <p className="list-tile__subtitle">{method.description}</p>
                </div>
              </div>
              {method.network && <span className="badge">{method.network}</span>}
            </div>
          ))}
        </div>
      </section>
    ))}
  </div>
);

