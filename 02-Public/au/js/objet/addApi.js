mutation {
  addModelToCart(
    input: {
      cartItems: [
          {
            data: { sku: "MD044515154", qty: 1 },
            is_object_sale_product: true
          },
          {
            data: { sku: "MD06018056", qty: 1 },
            is_object_sale_product: true,
            position: "upper left",
            parent_sku: "MD044515154"
          },
          {
            data: { sku: "MD06018056", qty: 1 },
            is_object_sale_product: true,
            position: "lower right",
            parent_sku: "MD044515154"
          },
        ]
    }
  ) 
}
