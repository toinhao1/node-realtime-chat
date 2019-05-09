const moment = require('moment');

const generateMessage = text => {
  return {
    text,
    createdAt: moment(new Date().getTime()).format('LT')
  };
};

const generateLocationMessage = url => {
  return {
    url,
    createdAt: moment(new Date().getTime()).format('LT')
  };
};

module.exports = { generateMessage, generateLocationMessage };
