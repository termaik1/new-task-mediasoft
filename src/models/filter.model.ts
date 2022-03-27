import { ESort } from "./enums"

export type TFilterItem = {
    title: string,
    sort: keyof typeof ESort
    entityName: string
}

