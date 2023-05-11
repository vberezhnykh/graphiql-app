export async function getData(data: string | undefined | Error) {
  try {
    const response = await fetch(`https://rickandmortyapi.com/graphql`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        query: data,
      }),
    });
    const res = await response.json();
    return JSON.stringify(res);
  } catch (e) {
    alert('You must provide a query to the request field');
  }
}
