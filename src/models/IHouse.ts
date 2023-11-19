export interface IHouse {
  id: number;
  imageURL: string;
  floor: string;
  price: number;
  address: string;
  rooms: number;
  nearToSubway: boolean;
  wayToSubway: number;
  area: number;
  date: string;
  sell: boolean;
  selected?: boolean;
}
