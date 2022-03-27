import { TProductItem } from "app/entities//product/product.models"

export type TCartInitialState = {
    goods: IGoodsItem[]
}

export interface IGoodsItem extends TProductItem {
    count: number
}
