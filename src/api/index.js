async function fetchProducts() {
  const response = await fetch('http://localhost:8080/products');
  const data = await response.json();
  return data._embedded.products;
}

async function createUser(user) {
  const response = await fetch('http://localhost:8080/users', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(user);
  });
  return response.json();
}

async function createOrder(order) {
  const reponse = await fetch('http://localhost:8080/ords', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(order)
  });
  return response.json();
}

async function updateOrder(payload) {
  const reponse = await fetch(payload.order._links.self.href, {
    method: 'PUT',
    headers: {
      'Content-Type': 'text/uri-list'
    },
    body: payload.orderLine._link.self.href
  });
  return response.json();
}

async function createOrderLine(cartItem) {
  const reponse = await fetch('http://localhost:8080/ordLines', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: {quantity: cartItem.quantity}
  }); 
  return response.json();
}

async function updateOrderLine(payload) {
  const reponse = await fetch(payload.orderLine._links.product.href, {
    method: 'PUT',
    headers: {
      'Content-Type': 'text/uri-list'
    },
    body: payload.product._links.self.href
  });
  return response.json();
}

async function updateUser(user) {
  console.log('entering updateUser method');
  const response = await fetch('http://localhost:8080/users', {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(user)
  });
  console.log('put user method completed');
  return response.json();
}

export { fetchProducts, createUser, createOrder, createOrderLine, updateUser }