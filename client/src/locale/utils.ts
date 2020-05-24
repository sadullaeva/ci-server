import i18n from './i18n';

enum SupportedLanguages {
  en = 'en',
  ru = 'ru',
}

export const getCurrentLanguage = () => i18n.language as SupportedLanguages;

export const getLanguageToChange = (curLang: SupportedLanguages): SupportedLanguages =>
  ({
    en: SupportedLanguages.ru,
    ru: SupportedLanguages.en,
  }[curLang]);

export const changeLanguage = async () => {
  const curLang = getCurrentLanguage();
  const lang: SupportedLanguages = getLanguageToChange(curLang);

  if (!i18n.hasResourceBundle(lang, 'translation')) {
    const translation = await import(`./${lang}/translations.json`);
    i18n.addResourceBundle(lang, 'translation', translation.default);
  }

  return await i18n.changeLanguage(lang, err => {
    if (err) {
      console.log('Something went wrong while changing language', err);
    }
  });
};
