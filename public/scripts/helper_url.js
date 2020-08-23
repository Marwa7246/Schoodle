
const generateRandomUrl= function() {

  const length= 32;
  const chars = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
  let result = '';
  for (let i = length; i > 0; --i) result += chars[Math.floor(Math.random() * chars.length)];
  return 'http://localhost:8080/?'+result;
};
console.log (generateRandomUrl())
