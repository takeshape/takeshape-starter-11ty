const fetch = require('node-fetch');

module.exports = async () => {
    //takeshape is the endpoint defined
  const response = await fetch(process.env.TAKESHAPE_ENDPOINT, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
      Authorization: `Bearer ${process.env.TAKESHAPE_API_KEY}`,
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