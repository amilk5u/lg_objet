mutation {
   addObjetSalesToCart(
      input: {
      cartItems: [
         {
            data: { sku: "MD05765376", qty: 1 },
            zipcode: "2000"
         },
         {
            data: { sku: "MD07506256", qty: 1 },
            zipcode: "2000"
             lg_custom_options: {
               objet_sales_options: "AGF30133425, lower_right, beige, glass"
                parent_sku: "MD05765376"
            }
         },
         {
            data: { sku: "MD05769254", qty: 1 },
            zipcode: "2000"
         },
         {
            data: { sku: "MD07533324", qty: 1 },
            zipcode: "2000"
             lg_custom_options: {
               objet_sales_options: "AGF30133461, upper_left, green, stainless"
                parent_sku: "MD05769254"
            }
         }
      ]
   }
   ) {
      redirectUrl
     cart {
       items {
         product {
               sku
            }
            qty
         }
      }
   }
}
