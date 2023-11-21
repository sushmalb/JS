function removeProductByName(name) {
  for (let i = 0; i < products.length; i++) {
    if (products[i].name === name) {
      products.splice(i, 1);
      console.log("Product removed: " + name);
      return;
    }
  }
  console.log("Product not found");
}
