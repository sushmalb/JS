function displayAllProducts() {
  for (let i = 0; i < products.length; i++) {
    console.log(products[i].name, products[i].price);
  }
}
//

addNewProduct("sugar");
//findProductByName("sugar")

function findProductByName(name) {
  for (var i = 0; i < products.length; i++) {
    if (products[i].name == name) {
      console.log("Product found");
      return;
    }
  }
  console.log("Product not found");
}

findProductByName("sugar");
//deleteProductbyName("sugar")
