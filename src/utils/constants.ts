export const baseQueryRequest = `query ($name: String) {
  characters(page: 2, filter: { name: $name }) {
    info {
      count
    }
    results {
      name
    }
  }
  location(id: 1) {
    id
  }
  episodesByIds(ids: [1, 2]) {
    id
  }
}`;

export const apiErrorMessage = 'You must provide a query to the request field';

export const tabsContent = [{ title: 'Headers' }, { title: 'Variables' }];
