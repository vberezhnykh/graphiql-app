export async function getData(data: string | undefined) {
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
    console.log(res);
    return JSON.stringify(res);
  } catch (e) {
    if (e) {
      return e;
    }
  }
}
