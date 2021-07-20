export type Food = Readonly<{
  available: boolean;
  description: string;
  id: number;
  image: string;
  name: string;
  price: number;
}>;
