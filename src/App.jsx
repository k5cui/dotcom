import './styles/animations.css'
import { useState } from 'react';
import sun from './images/sun.png';
import moon from './images/moon.png';
import resume from './files/resume.pdf';
import email from './images/email.svg';
import github from './images/github.svg';
import linkedin from './images/linkedin.svg';
import text from './files/text.json';

function App() {

  const [theme, setTheme] = useState(true);
  const [themeImage, setThemeImage] = useState(true);

  const fontColor = theme ? 'black' : 'white';
  
  document.body.style = `background: ${theme ? '#ECEBDC' : '#333C53'};`;
  document.body.className = 'background-fade';

  function themeSwap() {
    document.getElementById('theme').className = 'lighting-box';

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
    <div style={{ display: 'flex', flexDirection:'column', padding: 75, paddingLeft: 125 }}>
      <div style={{ display: 'flex', flexDirection:'row', justifyContent:'space-between' }}>
        <div style={{ display: 'flex', alignItems: 'flex-end'}}>     
          <header>
            <h1 style={{ color: fontColor, fontSize: 40 }}>
              Hey, I'm Ken!
            </h1>
          </header>
        </div>
        <div style={
          { display: 'flex',
            flexDirection:'row-reverse',
            paddingBottom: 30
          }}
        >
          <img 
            id='theme'
            class='lighting-box pulsate-fwd'
            src={themeImage ? sun : moon}
            onClick={() => themeSwap()}
            alt='theme'
          ></img>
        </div>
      </div>
      <div style={{ display: 'flex',flexDirection:'row' }}
      >
        <div style={{ display: 'flex', flex: 2, flexDirection:'column', justifyContent:'left', color: fontColor}}>
          <p>
            {text.intro}
          </p>
          <p>
            {text.body1}
            <a href="https://www.d2l.com/" target="_blank" rel="noreferrer">
              @D2L
            </a>
            {text.body1_1}
          </p>
          <p>
            {text.body2}
            <br />
            <a href="https://www.deloitte.com/" target="_blank" rel="noreferrer">
              @Deloitte
            </a>
            <text> &   </text>
            <a href="https://www.finastra.com/" target="_blank" rel="noreferrer">
              @Finastra
            </a>
          </p>
          <p>
            <text>You can learn more about the things I've done in </text>
            <button 
              class='astext'
              onClick={openResume}
              style={{ width: 'fit-content' }}
            >
                <u class='color-fade' style={{ fontSize: '16px', color: fontColor, fontFamily: 'PT Serif, serif' }}>
                  my resume
                </u>
            </button>
            .
          </p>
          <div style={{ display: 'flex', flexDirection:'row', justifyContent:'left', cursor: 'pointer', color: fontColor, marginTop: 28 }}>
            <span className = 'svg-color color-fade' onClick={() => window.open('mailto:kenneth.cui296@gmail.com')} style = {{ marginRight: 15 }}>
              <img src={email} alt='email'></img>
            </span>
            <span className = 'svg-color color-fade' onClick={() => window.open('https://github.com/k5cui')} style = {{ marginRight: 15 }}>
              <img src={github} alt='github'></img>
            </span>
            <span className = 'svg-color color-fade' onClick={() => window.open('https://www.linkedin.com/in/kenneth-cui11/')} >
              <img src={linkedin} alt='linkedin'></img>
            </span>
          </div>
        </div>
        <div style={{ display: 'flex', flex: 3}} />
      </div>
    </div>
  );
}

export default App;
