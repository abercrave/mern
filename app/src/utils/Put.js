async function put(url, data) {
  const request = new Request(url, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data),
  });
  const response = await fetch(request);

  return response.json();
}

export default put;
