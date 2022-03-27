import {
  UPDATE_CURRENT_PAGE,
  SET_PRODUCT_ITEM,
  RESET_PRODUCT_ITEM,
  SET_FILTER_ITEM,
  RESET_FILTERS,
} from "./product.constants";
import {
  updateCurrenPage,
  setProductItem,
  setFilterItem,
} from "./product.actions";

import { TProductInitialState } from "./product.models";

import productData from "app/data/product.data";
import { DEFAULT_VISIBLE_ELEMENT } from "app/config/constants";

const initialState: TProductInitialState = {
  currentPage: 1,
  totalCount: productData.length,
  visibleElement: DEFAULT_VISIBLE_ELEMENT,
  products: productData,
  productItem: {
    id: "",
    img: "",
    name: "",
    price: 0,
    description: "",
  },
  filter: {
    name: {
      entityName: "name",
      sort: "asc",
      title: "названию",
    },
    price: {
      entityName: "price",
      sort: "asc",
      title: "Цена",
    },
  },
};

const productReducers = {
  [UPDATE_CURRENT_PAGE]: (
    state: TProductInitialState,
    { payload }: ReturnType<typeof updateCurrenPage>
  ) => ({
    ...state,
    currentPage: payload.page,
  }),
  [SET_PRODUCT_ITEM]: (
    state: TProductInitialState,
    { payload }: ReturnType<typeof setProductItem>
  ) => ({
    ...state,
    productItem: payload,
  }),
  [RESET_PRODUCT_ITEM]: (state: TProductInitialState) => ({
    ...state,
    productItem: initialState.productItem,
  }),
  [RESET_FILTERS]: (state: TProductInitialState) => ({
    ...state,
    filter: initialState.filter,
    products: initialState.products,
  }),
  [SET_FILTER_ITEM]: (
    state: TProductInitialState,
    { payload }: ReturnType<typeof setFilterItem>
  ) => {
    const { entityName, sort } = payload;
    const products = [...state.products];

    const sortName = entityName === "name" ? products.sort(() => -1) : products;

    const resultSort =
      entityName === "price"
        ? sortName.sort((a, b) => {
            if (sort === "asc") {
              return a.price - b.price;
            }
            return b.price - a.price;
          })
        : sortName;

    return {
      ...state,
      filter: {
        ...state.filter,
        [entityName]: {
          ...payload,
        },
      },
      products: resultSort,
    };
  },
};

const product = (state = initialState, action): TProductInitialState => {
  const reducers = productReducers[action.type];

  if (!reducers) {
    return state;
  }

  return reducers(state, action);
};

export type TProductState = Readonly<typeof initialState>;
export default product;
