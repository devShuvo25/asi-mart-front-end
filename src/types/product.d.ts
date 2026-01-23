// ProductCard.types.ts or Product.Card.tsx
export interface ProductCardProps {
  product: {
    id: number;
    image: string;
    title: string;
    currentPrice: number;
    originalPrice: number;
    discountAmount: number;
    rating: number;
    reviewsCount: number;
  };
}
