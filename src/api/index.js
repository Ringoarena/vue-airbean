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

async function createOrder(order) {
  const response = await fetch('http://localhost:8080/ords', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(order)
  });
  return response.json();
}

async function updateUser(payload) {
  console.log('updateUser function. payload:');
  console.log(payload);
  const response = await fetch(payload.order._links.user.href, {
    method: 'PUT',
    headers: {
      'Content-Type': 'text/uri-list'
    },
    body: payload.user._links.self.href
  });
  return response;
}

async function fetchUserOrders(user) {
  const response = await fetch(user._links.ords.href);
  const data = await response.json();
  return data._embedded.ords;
}

export {fetchProducts, createUser, createOrder, fetchUserOrders, updateUser }