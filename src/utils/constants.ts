export const baseQueryRequest = `query {
  characters {
    results {
      name
    }
  }
} `;

export const apiErrorMessage = 'You must provide a query to the request field';

export const tabsContent = [{ title: 'Headers' }, { title: 'Variables' }];
