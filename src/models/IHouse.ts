export interface IHouse {
  id: number | string;
  ownerName?: string;
  imageURL: string;
  floor: string;
  price: number;
  address: string;
  rooms: number;
  nearTheSubway: boolean;
  wayToSubway?: number;
  area: number;
  date: string;
  sell: boolean;
  selected?: boolean;
}
