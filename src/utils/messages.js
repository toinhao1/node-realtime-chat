const moment = require('moment');

const generateMessage = (username, text) => {
  return {
    username,
    text,
    createdAt: moment(new Date().getTime()).format('LT')
  };
};

const generateLocationMessage = (username, url) => {
  return {
    username,
    url,
    createdAt: moment(new Date().getTime()).format('LT')
  };
};

module.exports = { generateMessage, generateLocationMessage };
