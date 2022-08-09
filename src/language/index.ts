import { createI18n } from 'vue-i18n'
import zh_CN from './lang/zh'
import en_US from './lang/en'

export const lang = localStorage.getItem('lang') ?? 'zhCn';
export function setLang(lang) {
  localStorage.setItem('lang', lang)
} 
export const useChinese = lang == 'zhCn';

const i18n = createI18n({
  locale: useChinese ? 'zh_CN' : 'en_US',
  messages: {
    'zh_CN': zh_CN,
    'en_US': en_US
  }
})

export default i18n
