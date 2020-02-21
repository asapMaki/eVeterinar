import {store} from 'store';
const ba = require('./locales/ba');
const en = require('./locales/en');

let getValue = (lang: any, arrKey: string) => {
  let arrKeys = arrKey.split('.');
  let language = lang;
  arrKeys.forEach((el: any) => {
    language = language[el];
  });

  return language;
};

export default function getTranslation(key: string, locale: string) {
  switch (locale) {
    case 'en': {
      return getValue(en, key);
    }
    case 'ba': {
      return getValue(ba, key);
    }
    default:
      return 'Unknown key';
  }
}
