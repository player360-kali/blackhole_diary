import Nav from '@renderer/components/Nav'
import { useTranslation } from 'react-i18next'
import { images } from '/src/dto/images'
import './index.scss'

const Home: React.FC = () => {
  const { t } = useTranslation()
  return (
    <div className="container">
      <Nav />

      <div className="home_container">
        <div className="home_text_container">
          <div className="home_text">
            <h1>{t('home.h1')}</h1>
            <h2>{t('home.h2')}</h2>
            <p>{t('home.p')}</p>
            <h3>{t('home.created')}:</h3>
            <a
              target="_blank"
              href="https://github.com/player360-kali"
              className="created_container"
              rel="noreferrer"
            >
              <img src={images.created} />
              <div className="created_text">
                <h3>{t('home.fullName')}</h3>
                <h4>{t('home.who')}</h4>
              </div>
            </a>
          </div>
        </div>
        <div className="home_image_container">
          <h2>{t('home.usage')}:</h2>
          <div className="video_container">
            {/*<video></video>*/}
            <h2>Video</h2>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
