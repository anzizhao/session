
const utility = require('utility');
const Keygrip = require('../session/keygrip');
// const string = 'cKYgTD2DKLuLzoBegwjjwt_fkzTJmh4qPejMwUaMvZRiwxE45VVNJzGEoZeqxWXk';
const value = 'lZQtJmx3z-kprq9Z-Cjzqy8bhkhy9YMqiOKzI7uN4bpT22tOfPv-XQ0UbJw7NLMJ';

const key = 'self-api-server_1550045035260_3002';
const gKeyHandle = new Keygrip([key]);
const res = gKeyHandle.decrypt(utility.base64decode(value, true, 'buffer'));
console.log('result: ', res.value.toString());