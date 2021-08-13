const fetch = require('node-fetch');

module.exports = async () => {
    //takeshape is the endpoint defined
  const response = await fetch('YOUR-ENDPOINT-HERE', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
      Authorization: `Bearer YOUR-API-KEY-HERE`,
    },
    body: JSON.stringify({
      query: `query{
        getProductList{
          items{
            name
            price
          }
        }
      }`})
    });
  const responseJSON = await response.json();
  return responseJSON.data.getProductList.items;
};