async function fetchProducts() {
  const response = await fetch('http://localhost:8080/products');
  const data = await response.json();
  return data._embedded.products;
}

async function postUser(user) {
  console.log("Entering post method")
  const response = await fetch('http://localhost:8080/users', {
    
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(user)
  });
  console.log('post user method completed');
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

export { fetchProducts, postUser, updateUser}