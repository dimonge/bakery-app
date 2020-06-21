/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getProduct = /* GraphQL */ `
  query GetProduct($id: ID!) {
    getProduct(id: $id) {
      id
      type
      quantityProduced
      quantitySold
      unitPrice
      date
      earnings
      createdAt
      updatedAt
    }
  }
`;
export const listProducts = /* GraphQL */ `
  query ListProducts(
    $filter: ModelProductFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listProducts(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        type
        quantityProduced
        quantitySold
        unitPrice
        date
        earnings
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
