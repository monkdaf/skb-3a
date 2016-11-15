// @flow

/**
 * Created by daf on 11.11.2016.
 * Многие сервисы, такие как ВК, Twitter, Telegram позволяют занимать унивальные имена пользователей.
 * Очень часто пользователи заполняя формы на сайте, вставляют не стандартные ссылки на свои профили в соц.сетях.
 * Клиент выполняет GET запрос с параметром Query: ` ?username` в разных форматах.
 * Задача: привести все ссылки к единому формату, а именно к виду ` @username`.
 * В случае если в url находится некорретная строка, необходимо вывести `Invalid username`
 */

const isUrlWrong = (url: string) => {
  return !!((!url) ||
  (url.length === 0));
};

const getUserName = (url) => {
  if (isUrlWrong(url)) {
    return 'Invalid username';
  }

  const arrFullURL = url.split('//');
  const arr = arrFullURL[arrFullURL.length - 1].split('/');
  let userName = '';
  if (arr.length === 1) {
    userName = arr[0].replace('@', '');
  } else {
    userName = arr[1].split('?')[0].replace('@', '');
  }

  return `@${userName}`;
};

export default getUserName;
