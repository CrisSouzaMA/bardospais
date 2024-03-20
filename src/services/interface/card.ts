export interface DataCardProps {
  id: string;
  image: string;
  name: string;
  description: string;
  price: number;
  quantity?: number;
}

export interface CardProps {
  data: DataCardProps;
}
