
//Function to generate a random string depending on the length of the string. Will be used with length =4 for the token, and length=32 for the url
const generateRandomString= function(length) {
  const chars = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
  let result = '';
  for (let i = length; i > 0; --i) result += chars[Math.floor(Math.random() * chars.length)];
  return result;
};

const generateRandomUrl= function(length) {
  return 'http://localhost:8080/?'+generateRandomString(length);
};

const url = generateRandomUrl(32);
const token = generateRandomString(4);
// console.log(url);
// console.log(token);

export { url, token };
