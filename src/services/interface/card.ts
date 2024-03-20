export interface DataCardProps {
  id: number;
  image: string;
  name: string;
  description: string;
  price: number;
  quantity?: number;
}

export interface CardProps {
  data: DataCardProps;
}
