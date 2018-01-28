import { addLocaleData } from 'react-intl';
import * as deLocaleData from 'react-intl/locale-data/de';
import * as enLocaleData from 'react-intl/locale-data/en';

import deTranslationMessages from './de';
import enTranslationMessages from './en';

addLocaleData(enLocaleData);
addLocaleData(deLocaleData);

const DEFAULT_LOCALE = 'en';

export const appLocales = ['en', 'de'];

export const formatTranslationMessages = (locale: string, messages: {}): {} => {
  const defaultFormattedMessages = locale !== DEFAULT_LOCALE
    ? formatTranslationMessages(DEFAULT_LOCALE, enTranslationMessages)
    : {};
  return Object.keys(messages).reduce((formattedMessages, key) => {
    const formattedMessage = !messages[key] && locale !== DEFAULT_LOCALE
      ? defaultFormattedMessages[key]
      : messages[key];
    return Object.assign(formattedMessages, { [key]: formattedMessage });
  },                                  {});
};

export const translationMessages = {
  de: formatTranslationMessages('de', deTranslationMessages),
  en: formatTranslationMessages('en', enTranslationMessages)
};
