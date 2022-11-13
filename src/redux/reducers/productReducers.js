import {
  PRODUCT_LIST_REQUEST,
  PRODUCT_LIST_SUCCESS,
  PRODUCT_LIST_FAIL,
  PRODUCT_DETAILS_REQUEST,
  PRODUCT_DETAILS_SUCCESS,
  PRODUCT_DETAILS_FAIL,
  PRODUCT_CREATE_REVIEW_REQUEST,
  PRODUCT_CREATE_REVIEW_SUCCESS,
  PRODUCT_CREATE_REVIEW_FAIL,
  PRODUCT_CREATE_REVIEW_RESET,
  PRODUCT_TOP__REQUEST,
  PRODUCT_TOP__SUCCESS,
  PRODUCT_TOP__FAIL,
  PRODUCT_REDUCE_REQUEST,
  PRODUCT_REDUCE_SUCCESS,
  PRODUCT_REDUCE_FAIL,
} from "../constants/productConstants";

export const productListReducer = (state = { products: [] }, action) => {
  switch (action.type) {
    case PRODUCT_LIST_REQUEST:
      return { loading: true, products: [] };
    case PRODUCT_LIST_SUCCESS:
      return {
        loading: false,
        products: action.payload.products,
        pages: action.payload.pages,
        page: action.payload.page,
      };
    case PRODUCT_LIST_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const productDetailsReducer = (
  state = { product: { reviews: [] } },
  action
) => {
  switch (action.type) {
    case PRODUCT_DETAILS_REQUEST:
      return { loading: true, ...state };
    case PRODUCT_DETAILS_SUCCESS:
      return { loading: false, product: action.payload };
    case PRODUCT_DETAILS_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const productCreateReviewReducer = (state = {}, action) => {
  switch (action.type) {
    case PRODUCT_CREATE_REVIEW_REQUEST:
      return { loading: true, ...state };
    case PRODUCT_CREATE_REVIEW_SUCCESS:
      return { loading: false, success: true };
    case PRODUCT_CREATE_REVIEW_FAIL:
      return { loading: false, error: action.payload };
    case PRODUCT_CREATE_REVIEW_RESET:
      return {};
    default:
      return state;
  }
};

export const productTopRatedReducer = (state = { products: [] }, action) => {
  switch (action.type) {
    case PRODUCT_TOP__REQUEST:
      return { loading: true, products: [] };
    case PRODUCT_TOP__SUCCESS:
      return { loading: false, products: action.payload };
    case PRODUCT_TOP__FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const productReduceReducer = (state = {}, action) => {
  switch (action.type) {
    case PRODUCT_REDUCE_REQUEST:
      return { loading: true, products: [] };
    case PRODUCT_REDUCE_SUCCESS:
      return { loading: false, products: action.payload };
    case PRODUCT_REDUCE_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
