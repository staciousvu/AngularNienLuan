import {Product} from "./Product";

export interface ProductList {
  productResponses:Product[];
  totalPages:number;
  count:number
}
