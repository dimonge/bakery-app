/**
 * Product
 * id
      type
      quantityProduced
      quantitySold
      unitPrice
      date
      earnings
 *  
 */
export const API_FIELD_ID = "id";
export const API_FIELD_TYPE = "type";
export const API_FIELD_QUANTITY_PRODUCED = "quantityProduced";
export const API_FIELD_QUANTITY_SOLD = "quantitySold";
export const API_FIELD_UNIT_PRICE = "unitPrice";
export const API_FIELD_DATE = "date";
export const API_FIELD_EARNINGS = "earnings";

/**
 * const ProductType = [
  { label: "Family Loaf", id: "FamilyLoaf" },
  { label: "Baby Rolls", id: "BabyRolls" },
];
 */

export const PRODUCT_TYPE = {
  BURGER_ROLLS: { label: "Burger Rolls", id: "BURGER_ROLLS", unitPrice: 250.0 },
  CHIN_CHIN: { label: "Chin Chin", id: "CHIN_CHIN", unitPrice: 500.0 },
  FAMILY_LOAVES: { label: "Family Loaves", id: "FAMILY_LOAVES", unitPrice: 400.0 },
  MINI_CAKES: { label: "Mini Cakes", id: "MINI_CAKES", unitPrice: 500.0 },
  MINI_CHOCO_CAKES: { label: "Mini Choco Cakes", id: "MINI_CHOCO_CAKES", unitPrice: 1000.0 },
  MINI_SP_LOAVES: { label: "Mini SP-Loaves", id: "MINI_SP_LOAVES", unitPrice: 250.0 },
  SPECIAL_LOAVES: { label: "Special Loaves", id: "SPECIAL_LOAVES", unitPrice: 400.0 },
};
