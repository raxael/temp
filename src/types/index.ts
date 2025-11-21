export type Banner = {
  id: string;
  title: string;
  description: string;
  href: string;
  imageUrl: string;
  actionLabel: string;
  tag?: string;
};

export type QuickLink = {
  id: string;
  title: string;
  description: string;
  href: string;
  accent?: string;
};

export type CardFeature = {
  label: string;
  value: string;
  highlight?: boolean;
};

export type CardProduct = {
  id: string;
  slug: string;
  name: string;
  category: string;
  description: string;
  priceLabel: string;
  imageUrl: string;
  tags?: string[];
  features: CardFeature[];
};

export type PaymentMethodCategory = 'fiat' | 'crypto';

export type PaymentMethod = {
  id: string;
  category: PaymentMethodCategory;
  name: string;
  description: string;
  iconUrl: string;
  network?: string;
};

