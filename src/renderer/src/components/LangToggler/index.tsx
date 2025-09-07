import { useEffect, useState } from 'react'
import { images } from '/src/dto/images'
import './index.scss'
import { useTranslation } from 'react-i18next'

const LangToggler: React.FC = () => {
  const { i18n } = useTranslation()
  const [activeLang, setActiveLang] = useState('en')

  useEffect(() => {
    const lang = localStorage.getItem('lang') || 'en'
    if (lang) {
      setActiveLang(lang)
    }
    i18n.changeLanguage(activeLang)
  }, [i18n, activeLang])

  const handleLangChange = async (lang: 'en' | 'ru' | 'uz'): Promise<void> => {
    await i18n.changeLanguage(lang).then(() => {
      localStorage.setItem('lang', lang)
      setActiveLang(lang)
    })
  }

  return (
    <div className="lang_container">
      <img
        onClick={() => handleLangChange('en')}
        className={activeLang === 'en' ? 'active' : ''}
        src={images.lang.en}
      />
      <img
        onClick={() => handleLangChange('ru')}
        className={activeLang === 'ru' ? 'active' : ''}
        src={images.lang.ru}
      />
      <img
        onClick={() => handleLangChange('uz')}
        className={activeLang === 'uz' ? 'active' : ''}
        src={images.lang.uz}
      />
    </div>
  )
}

export default LangToggler
