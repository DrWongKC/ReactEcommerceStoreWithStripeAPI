// Coffee: price_1QEjnKP7AwicnBbGoBBljQ38
// Sunglasses: price_1QEjonP7AwicnBbG5XGln7nR
// Camera: price_1QEjpsP7AwicnBbGqU7Yn9TT

const productsArray = [
  {
    id: "price_1QEjnKP7AwicnBbGoBBljQ38",
    title: "Coffee",
    price: "4.99",
  },
  {
    id: "price_1QEjonP7AwicnBbG5XGln7nR",
    title: "Sunglasses",
    price: "9.99",
  },
  {
    id: "price_1QEjpsP7AwicnBbGqU7Yn9TT",
    title: "Camera",
    price: "39.99",
  },
];

function getProductData(id) {
  let productData = productsArray.find((product) => product.id === id);

  if (productData === undefined) {
    console.log("Product data does not exist from ID " + id);
    return undefined;
  }

  return productData;
}

export { productsArray, getProductData };
