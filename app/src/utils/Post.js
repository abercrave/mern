async function post(url, data) {
  const request = new Request(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data),
  });
  const response = await fetch(request);

  return response.json();
}

export default post;
