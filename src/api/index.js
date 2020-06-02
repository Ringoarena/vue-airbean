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
    body: JSON.stringify(user)
  });
  return response.json();
}

async function updateUser(payload) {
  console.log('entering updateUser method: ' + payload.user.name + ' order link: ' + payload.user._links.ords.href);
  console.log('body uri: ' + payload.order._links.self.href);
  const response = await fetch(payload.user._links.ords.href, {
    method: 'PUT',
    headers: {
      'Content-Type': 'text/uri-list'
    },
    body: payload.order._links.self.href
  });
  console.log('put user method completed');
  return response;
}

async function createOrder(order) {
  const response = await fetch('http://localhost:8080/ords', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(order)
  });
  return response;
}

async function fetchUserOrders(user) {
  console.log("fetchUserOrders method");
  const response = await fetch(user._links.ords.href);
  const data = await response.json();
  return data._embedded.ords;
}

async function updateOrder(payload) {
  const response = await fetch(payload.order._links.self.href, {
    method: 'PUT',
    headers: {
      'Content-Type': 'text/uri-list'
    },
    body: payload.orderLine._link.self.href
  });
  return response;
}

async function createOrderLine(cartItem) {
  const response = await fetch('http://localhost:8080/ordLines', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: {quantity: cartItem.quantity}
  }); 
  return response.json();
}

async function updateOrderLine(payload) {
  const response = await fetch(payload.orderLine._links.product.href, {
    method: 'PUT',
    headers: {
      'Content-Type': 'text/uri-list'
    },
    body: payload.product._links.self.href
  });
  return response.json();
}

export {fetchProducts, fetchUserOrders, createUser, createOrder, updateOrder, createOrderLine, updateOrderLine, updateUser }