import './styles/animations.css'
import { useState } from 'react';
import sun from './images/sun.png';
import moon from './images/moon.png';
import resume from './files/resume.pdf';
import text from './files/text.json';
import email from './images/email.svg';
import github from './images/github.svg';
import linkedin from './images/linkedin.svg';

function App() {

  const [theme, setTheme] = useState(true);
  const [themeImage, setThemeImage] = useState(true);

  const fontColor = theme ? 'black' : 'white';
  
  document.body.style = `background: ${theme ? '#ECEBDC' : '#333C53'};`;
  document.body.className = 'background-fade';

  function themeSwap() {
    document.getElementById('theme').classList.remove('bounce-in-top');
    document.getElementById('theme').classList.remove('pulsate-fwd');
    document.getElementById('theme').classList.add('slide-out-blurred-top');
    setTheme(!theme);
    setTimeout(function(){
      setThemeImage(!themeImage);
      document.getElementById('theme').classList.remove('slide-out-blurred-top');
      document.getElementById('theme').classList.add('bounce-in-top');
    }, 600);
    setTimeout(function(){
      document.getElementById('theme').classList.add('pulsate-fwd');
    }, 2000);

  }

  function openResume() {
    window.open(resume);
  }

  return (
    <div style={{ display: 'flex', flexDirection:'column', padding: 50 }}>
      <div style={{ display: 'flex', flexDirection:'row', justifyContent:'space-between' }}>
        <div style={{ display: 'flex', flex: 2, padding: 50 }}>     
          <header>
            <h1 style={{ color: fontColor}}>
              Hey, I'm Ken! <br></br> Welcome to my website.
            </h1>
          </header>
        </div>
        <div style={
          { display: 'flex',
            flex:1,
            flexDirection:'row-reverse',
            marginBottom: 150,
            alignItems: 'center'
          }}
        >
          <img 
            id='theme'
            class='lighting-box pulsate-fwd'
            src={themeImage ? sun : moon}
            onClick={() => themeSwap()}
            alt='Unavailable'
          ></img>
        </div>
      </div>
      <div style={{ display: 'flex',flexDirection:'row' }}
      >
        <div style={{ display: 'flex', flex:1, flexDirection:'column', justifyContent:'left', paddingLeft:50 }}>
          <p style={{ color: fontColor }}>
            {text.intro}
          </p>
          <button 
            class='astext'
            onClick={openResume}
            style={{ width: 'fit-content' }}
          >
              <u style={{ fontSize: 'x-large', color: fontColor, fontFamily: 'PT Serif, serif' }}>
                resume
              </u>
          </button>
          <div style={{ display: 'flex', flexDirection:'row', justifyContent:'left' }}>
            <img 
              style = {{ cursor: 'pointer' }}
              src={email}
              onClick={() => window.open('mailto:kenneth.cui296@gmail.com')}
              alt='Unavailable'
            ></img>
          </div>
        </div>
        <div style={{ display: 'flex', flex:1}}>.</div>
      </div>
    </div>
  );
}

export default App;
