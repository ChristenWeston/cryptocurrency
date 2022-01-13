export default class Cryptocurrency {
  static getCryptos(currency) {
    return fetch(`https://api.coingecko.com/api/v3/coins/${currency}`)
    .then(function(response) {
      if (!response.ok) {
        throw Error(response.statusText);
      }
      return response.json();
    })
    .catch(function(error) {
      return error;
    });
  }
}