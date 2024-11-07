import tiktokIcon from '../images/tiktok.png'
import facebookIcon from '../images/facebook.png'
import instaIcon from '../images/insta.png'
import twitterIcon from '../images/twitter.png'
import youtubeIcon from '../images/youtube.png'

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-site">
          <a href="https://www.lollapaloozabr.com/"> Lollapaloozabr.com</a>
        </div>
        <div>
          <a href="https://www.tiktok.com/@lollapaloozabr?">
            <img src={tiktokIcon} alt="icone do tiktok" className='footer-icons'/>
          </a>
        </div>
        <div>
          <a href="https://www.instagram.com/lollapaloozabr/">
            <img src={instaIcon} alt="icone do instagram" className='footer-icons'/>
          </a>
        </div>
        <div>
          <a href="https://x.com/lollapaloozabr">
            <img src={twitterIcon} alt="icone do twitter" className='footer-icons'/>
          </a>
        </div>
        <div>
          <a href="https://www.youtube.com/lollapaloozabr">
            <img src={youtubeIcon} alt="icone do youtube" className='footer-icons'/>
          </a>
        </div>
        <div>
          <a href="https://www.facebook.com/LollapaloozaBR">
            <img src={facebookIcon} alt="icone do facebook" className='footer-icons'/>
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
