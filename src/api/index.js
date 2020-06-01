// const products = [
//     {
//         "id":1,
//       "title":"Bryggkaffe",
//       "description":"Bryggd på månadens bönor.",
//       "price":39
//     },
//     {
//       "id":2,
//       "title":"Caffè Doppio",
//       "description":"Bryggd på månadens bönor.",
//       "price":49
//     },
//     {
//       "id":3,
//       "title":"Cappuccino",
//       "description":"Bryggd på månadens bönor.",
//       "price":49
//     },
//     {
//       "id":4,
//       "title":"Latte Macchiato",
//       "description":"Bryggd på månadens bönor.",
//       "price":49
//     },
//     {
//       "id":5,
//       "title":"Kaffe Latte",
//       "description":"Bryggd på månadens bönor.",
//       "price":54
//     },
//     {
//       "id":6,
//       "title":"Cortado",
//       "description":"Bryggd på månadens bönor.",
//       "price":39
//     }
//   ]
  // function fetchProducts() {
  //     return new Promise((resolve) => {
  //       setTimeout(() => resolve(products),500)
  //     });
  // }
  async function fetchProducts() {
      const response = await fetch('http://localhost:8080/products');
      const data = await response.json();
      return data._embedded.products;
  }

  export {fetchProducts}