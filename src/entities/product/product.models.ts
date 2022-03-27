import { TFilterItem } from "app/models/filter.model";

export type TProductInitialState = {
  currentPage: number;
  totalCount: number;
  visibleElement: number;
  products: TProductItem[];
  productItem: TProductItem
  filter: {
    name: TFilterItem
    price: TFilterItem
  }
};

export type TProductItem = {
  id: string;
  img: string;
  name: string;
  price: number;
  description: string;
};
