import './styles/animations.css'
import { useState } from 'react';
import sun from './images/sun.png';
import moon from './images/moon.png';
import resume from './files/resume.pdf';
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
        <div style={{ display: 'flex', alignItems: 'center'}}>     
          <header>
            <h1 style={{ color: fontColor, fontSize: 40 }}>
              Hey, I'm Ken!
            </h1>
          </header>
        </div>
        <div style={
          { display: 'flex',
            flexDirection:'row-reverse',
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
            <text> & </text>
            <a href="https://www.finastra.com/" target="_blank" rel="noreferrer">
              @Finastra
            </a>
          </p>
          <p>
            <text>You can learn more about the things I've done in </text>
            <button 
              class='astext'
              onClick={openResume}
              style={{ width: 'fit-content', color: fontColor }}
            >
                <a>my resume</a>
            </button>
            .
          </p>
          <div style={{ display: 'flex', flexDirection:'row', justifyContent:'left', cursor: 'pointer', color: fontColor, marginTop: 28 }}>
            <span className = 'svg-color color-fade' onClick={() => window.open('mailto:kenneth.cui296@gmail.com')} style = {{ marginRight: 15 }}>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 12.713l-11.985-9.713h23.971l-11.986 9.713zm-5.425-1.822l-6.575-5.329v12.501l6.575-7.172zm10.85 0l6.575 7.172v-12.501l-6.575 5.329zm-1.557 1.261l-3.868 3.135-3.868-3.135-8.11 8.848h23.956l-8.11-8.848z"/></svg>
            </span>
            <span className = 'svg-color color-fade' onClick={() => window.open('https://github.com/k5cui')} style = {{ marginRight: 15 }}>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
            </span>
            <span className = 'svg-color color-fade' onClick={() => window.open('https://www.linkedin.com/in/kenneth-cui11/')} >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
            </span>
          </div>
        </div>
        <div style={{ display: 'flex', flex: 3}} />
      </div>
    </div>
  );
}

export default App;
