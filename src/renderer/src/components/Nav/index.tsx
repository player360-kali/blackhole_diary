import './index.scss'
import { images } from '../../dto/images'
import { NavLink } from 'react-router-dom'
import LangToggler from '../LangToggler'
import { useTranslation } from 'react-i18next'

const Nav: React.FC = () => {
  const { t } = useTranslation()
  return (
    <nav>
      <div className="nav_container">
        <img className="logo" src={images.logo} alt="Logo" />
        <div className="nav_links">
          <NavLink to={'/'}>{t('nav.welcome')}</NavLink>
          <NavLink to={'/about'}>{t('nav.about')}</NavLink>
          <NavLink to={'/help'}>{t('nav.help')}</NavLink>
          <NavLink to={'/contact'}>{t('nav.contact')}</NavLink>
        </div>
        <div className="nav_buttons">
          <LangToggler />
          <button className="nav_buttons--button">{t('nav.newAccount')} +</button>
        </div>
      </div>
    </nav>
  )
}

export default Nav
