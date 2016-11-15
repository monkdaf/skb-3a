'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});


/**
 * Created by daf on 11.11.2016.
 * Многие сервисы, такие как ВК, Twitter, Telegram позволяют занимать унивальные имена пользователей.
 * Очень часто пользователи заполняя формы на сайте, вставляют не стандартные ссылки на свои профили в соц.сетях.
 * Клиент выполняет GET запрос с параметром Query: ` ?username` в разных форматах.
 * Задача: привести все ссылки к единому формату, а именно к виду ` @username`.
 * В случае если в url находится некорретная строка, необходимо вывести `Invalid username`
 */

var isUrlWrong = function isUrlWrong(url) {
  return !!(!url || url.length === 0);
};

var getUserName = function getUserName(url) {
  if (isUrlWrong(url)) {
    return 'Invalid username';
  }

  var arrFullURL = url.split('//');
  var arr = arrFullURL[arrFullURL.length - 1].split('/');
  var userName = '';
  if (arr.length === 1) {
    userName = arr[0].replace('@', '');
  } else {
    userName = arr[1].split('?')[0].replace('@', '');
  }

  return '@' + userName;
};

exports.default = getUserName;