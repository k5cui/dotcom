import './styles/animations.css'
import { useState } from 'react';
import sun from './images/sun.png';
import moon from './images/moon.png';
import resume from './files/resume.pdf';

function App() {

  const [theme, setTheme] = useState(true);
  const [themeImage, setThemeImage] = useState(true);

  const fontColor = theme ? 'black' : 'white';
  
  document.body.style = `background: ${theme ? '#ECEBDC' : '#333C53'};`;
  document.body.className = 'background-fade';

  function themeSwap() {
    document.getElementById('theme').classList.remove('bounce-in-top');
    document.getElementById('theme').classList.add('slide-out-blurred-top');
    setTheme(!theme);
    setTimeout(function(){
      setThemeImage(!themeImage);
      document.getElementById('theme').classList.remove('slide-out-blurred-top');
      document.getElementById('theme').classList.add('bounce-in-top');
    }, 600);
  }

  function openResume() {
    window.open(resume);
  }

  return (
    <div style={{ display: 'flex', flexDirection:'column'}}>
      <div style={{ display: 'flex', flexDirection:'row', justifyContent:'space-between', padding: 50 }}>
        <div style={{ display: 'flex', flex: 2, padding:50 }}>     
          <header>
            <h1 class='color-fade' style={{ color: fontColor }}>
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
            class='lighting-box bounce-in-top'
            src={themeImage ? sun : moon}
            onClick={() => themeSwap()}
            alt='Unavailable'
          ></img>
          <text style={{ fontSize: 'x-large', marginLeft: 5, marginRight: 10 }}>👉</text>
          <text class='color-fade' style={{ color: fontColor }}>Click me </text>
        </div>
      </div>
      <div>
        <button 
          class='astext'
          onClick={openResume}>
            <u class= 'color-fade' style={{ fontSize: '2vw', color: fontColor, fontFamily: 'PT Serif, serif' }}>
              resume
            </u>
        </button>
      </div>
    </div>
  );
}

export default App;
