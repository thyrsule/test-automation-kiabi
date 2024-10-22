export const SEARCH_KEYWORD = "pantalon";

export interface SearchRepresentation {
  data: {
    products: {
      suggestions: string[];
      items: ItemsRepresentation[];
    };
  };
}

interface ItemsRepresentation {
  productUidpk: string;
  productUrl: string;
  productLabel: string;
  highlightedProductLabel: string;
  productCode: string;
  display: DisplayRepresentation;
}

interface DisplayRepresentation {
  price: {
    currency: string;
    salePrice: number;
    listPrice: number;
    salePriceHt: number;
    listPriceHt: boolean;
    startFrom: boolean;
  };
}
