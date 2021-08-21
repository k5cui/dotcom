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
              <u class='color-fade' style={{ fontSize: 'x-large', color: fontColor, fontFamily: 'PT Serif, serif' }}>
                resume
              </u>
          </button>
          <div style={{ display: 'flex', flexDirection:'row', justifyContent:'left', cursor: 'pointer', color: fontColor, marginTop: 28 }}>
            <span className = 'svg-color color-fade' onClick={() => window.open('mailto:kenneth.cui296@gmail.com')} style = {{ marginRight: 15 }}>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="11 12 43.55 43.55" style = {{ height: 50 }}>
                <path d="M19.71 12C14.8994 12 11 15.8994 11 20.71V46.84C11 51.6506 14.8994 55.55 19.71 55.55H45.84C50.6499 55.55 54.55 51.6506 54.55 46.84V20.71C54.55 15.8994 50.6506 12 45.84 12H19.71ZM19.71 13.34H45.84C49.9103 13.34 53.21 16.6398 53.21 20.71V46.84C53.21 50.9103 49.9103 54.21 45.84 54.21H19.71C15.6398 54.21 12.34 50.9103 12.34 46.84V20.71C12.34 16.6398 15.6391 13.34 19.71 13.34ZM21.6101 15.35C17.6001 15.35 14.35 18.6001 14.35 22.6101V44.9386C14.35 48.9486 17.6001 52.2 21.6101 52.2H43.9386C47.9486 52.2 51.2 48.9492 51.2 44.9386V32.435C51.2 32.2501 51.0499 32.1 50.865 32.1C50.6801 32.1 50.53 32.2501 50.53 32.435V44.9386C50.53 48.5787 47.5787 51.53 43.9386 51.53H21.6114C17.9713 51.53 15.02 48.5787 15.02 44.9386V22.6101C15.02 18.97 17.97 16.02 21.6101 16.02H44.165C44.3499 16.02 44.5 15.8699 44.5 15.685C44.5 15.5001 44.3499 15.35 44.165 15.35H21.6101ZM21.4439 24.0679C20.7645 24.0679 20.1418 24.2966 19.6315 24.6711C19.5599 24.6974 19.4995 24.7472 19.4601 24.8124C18.7946 25.3784 18.3621 26.2107 18.3621 27.1496V41.0861C18.3621 42.0247 18.7938 42.8573 19.4587 43.4233C19.4996 43.4955 19.5658 43.5501 19.6446 43.5764C20.1523 43.9446 20.7708 44.1679 21.4439 44.1679H44.0904C44.9424 44.1679 45.7145 43.8187 46.2731 43.2571C46.3178 43.2361 46.3572 43.2055 46.3887 43.1675C46.4201 43.1295 46.4428 43.085 46.455 43.0372C46.8961 42.5039 47.1721 41.8298 47.1721 41.0861V27.1496C47.1721 26.4053 46.8955 25.7307 46.4537 25.1972C46.4408 25.1548 46.4195 25.1153 46.3912 25.0812C46.3629 25.047 46.3281 25.0189 46.2888 24.9983C45.7289 24.4261 44.9514 24.0679 44.0904 24.0679H21.4439ZM50.865 24.4473C50.6801 24.4473 50.53 24.5974 50.53 24.7823V26.1223C50.53 26.3073 50.6801 26.4573 50.865 26.4573C51.0499 26.4573 51.2 26.3079 51.2 26.1223V24.7823C51.2 24.5974 51.0499 24.4473 50.865 24.4473ZM21.4439 24.7379H44.0904C44.6932 24.7379 45.2362 24.9649 45.6581 25.328L38.0408 33.9831C38.0106 34.0077 37.9849 34.0373 37.9649 34.0707L36.3736 35.8779C34.4749 38.0354 31.1153 37.9963 29.2667 35.7955L27.8272 34.0812C27.808 34.048 27.7832 34.0183 27.7539 33.9935C27.7531 33.9931 27.7522 33.9927 27.7513 33.9922L20.2518 25.0624C20.6042 24.8613 21.0076 24.7379 21.4439 24.7379ZM19.7165 25.468L27.0944 34.2513L19.7244 42.7755C19.2973 42.3408 19.0321 41.7463 19.0321 41.0861V27.1496C19.0321 26.4934 19.2941 25.9021 19.7165 25.468ZM46.1083 25.8292C46.3562 26.2083 46.5021 26.661 46.5021 27.1496V41.0861C46.5021 41.5812 46.3531 42.0401 46.0991 42.4222L38.7029 34.2448L46.1083 25.8292ZM50.865 27.1273C50.6801 27.1273 50.53 27.2774 50.53 27.4623V30.1423C50.53 30.3273 50.6801 30.4773 50.865 30.4773C51.0499 30.4773 51.2 30.3279 51.2 30.1423V27.4623C51.2 27.2774 51.0499 27.1273 50.865 27.1273ZM38.2567 34.7512L45.645 42.9181C45.2248 43.2748 44.6871 43.4979 44.0904 43.4979H21.4439C21.0117 43.4979 20.6123 43.3761 20.2622 43.1786L27.5302 34.7708L28.7537 36.2273C30.8581 38.7326 34.7147 38.7763 36.8761 36.3202L38.2567 34.7512Z" fill="black"/>
              </svg>
            </span>
            <span className = 'svg-color color-fade' onClick={() => window.open('https://github.com/k5cui')} style = {{ marginRight: 15 }}>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="10.05 10.05 46.9 46.9" style = {{ height: 50 }}>
                <path d="M33.5 10.05C20.5568 10.05 10.05 20.5568 10.05 33.5C10.05 46.4431 20.5568 56.95 33.5 56.95C46.4431 56.95 56.95 46.4431 56.95 33.5C56.95 20.5568 46.4431 10.05 33.5 10.05ZM33.5 11.39C45.7189 11.39 55.61 21.281 55.61 33.5C55.61 45.7189 45.7189 55.61 33.5 55.61C21.281 55.61 11.39 45.7189 11.39 33.5C11.39 21.281 21.281 11.39 33.5 11.39ZM33.5 14.07C22.7731 14.07 14.07 22.7731 14.07 33.5C14.07 44.2268 22.7731 52.93 33.5 52.93C37.6926 52.93 41.5784 51.6004 44.7539 49.3405C44.7907 49.3154 44.8221 49.2832 44.8462 49.2458C44.8704 49.2083 44.8869 49.1665 44.8947 49.1226C44.9025 49.0788 44.9015 49.0338 44.8917 48.9904C44.8819 48.9469 44.8636 48.9058 44.8378 48.8695C44.8119 48.8333 44.7791 48.8025 44.7412 48.779C44.7034 48.7556 44.6612 48.7399 44.6172 48.733C44.5732 48.726 44.5282 48.7279 44.485 48.7385C44.4417 48.7492 44.401 48.7683 44.3652 48.7948C42.897 49.8398 41.2693 50.6711 39.53 51.2615V45.3284C39.53 43.7929 38.7763 42.4329 37.6522 41.54H38.156C42.9639 41.54 46.8699 37.6655 46.8699 32.8562C46.8699 30.606 45.9849 28.5743 44.5825 27.029C44.8345 25.5065 44.8041 23.4749 44.2017 21.669C44.1794 21.6023 44.1367 21.5443 44.0796 21.5032C44.0226 21.462 43.954 21.44 43.8837 21.44C40.8085 21.44 38.4441 23.6492 37.944 24.12H29.5912C29.1252 23.675 26.8606 21.44 23.785 21.44C23.7147 21.44 23.6461 21.462 23.589 21.5032C23.5319 21.5443 23.4893 21.6023 23.467 21.669C22.9329 23.2718 22.7488 25.1038 22.8873 26.5317C21.2013 28.1186 20.1314 30.3576 20.1314 32.8562C20.1314 37.6655 24.0375 41.5387 28.8453 41.5387H29.5114C28.6015 42.1985 27.8875 43.0768 27.6126 44.1991C26.9921 44.193 26.2932 44.1712 25.6471 44.0041C24.9378 43.8206 24.3237 43.4958 23.942 42.9232C23.1048 41.6673 22.482 41.0115 21.9163 40.6606C21.3507 40.3098 20.8467 40.3008 20.435 40.3008C20.1731 40.3008 19.9318 40.3677 19.748 40.5193C19.5642 40.6708 19.4608 40.9024 19.4483 41.133C19.4233 41.5943 19.6767 42.0667 20.1314 42.5214C20.9555 43.3455 20.892 43.2588 21.7161 44.907C22.4377 46.3513 24.277 47.459 27.47 47.5399V51.2641C20.067 48.7534 14.74 41.754 14.74 33.5C14.74 23.1352 23.1352 14.74 33.5 14.74C43.8647 14.74 52.26 23.1352 52.26 33.5C52.26 35.4333 51.9681 37.2984 51.4251 39.0524C51.4105 39.0948 51.4045 39.1398 51.4076 39.1846C51.4107 39.2294 51.4228 39.2731 51.4431 39.3132C51.4634 39.3532 51.4916 39.3888 51.526 39.4177C51.5603 39.4466 51.6001 39.4684 51.643 39.4816C51.6859 39.4949 51.7311 39.4994 51.7757 39.4948C51.8204 39.4903 51.8637 39.4768 51.9031 39.4552C51.9425 39.4336 51.9771 39.4043 52.0049 39.369C52.0327 39.3338 52.0532 39.2933 52.065 39.25C52.6276 37.4328 52.93 35.5009 52.93 33.5C52.93 22.7731 44.2268 14.07 33.5 14.07ZM24.0441 22.1558C26.7377 22.2898 28.832 24.3108 29.2471 24.6997C29.3092 24.7578 29.391 24.79 29.4761 24.79H38.0539C38.1391 24.7897 38.221 24.7569 38.2829 24.6984C38.6673 24.3369 40.9148 22.2949 43.6167 22.1571C44.1076 23.8133 44.1569 25.7073 43.9151 27.0525C43.9059 27.1041 43.9089 27.1572 43.9239 27.2074C43.9389 27.2577 43.9654 27.3037 44.0015 27.3417C45.3621 28.7828 46.1999 30.7188 46.1999 32.8562C46.1999 37.3035 42.6048 40.87 38.156 40.87H36.515C36.4384 40.8697 36.364 40.8957 36.3043 40.9437C36.2445 40.9916 36.203 41.0586 36.1866 41.1334C36.1702 41.2082 36.18 41.2864 36.2143 41.3549C36.2485 41.4234 36.3053 41.4781 36.375 41.5099C37.8127 42.1689 38.86 43.6454 38.86 45.3284V51.4709C37.1607 51.9771 35.3646 52.26 33.5 52.26C31.6367 52.26 29.8387 51.9854 28.14 51.4801V47.235C28.14 47.1461 28.1047 47.0609 28.0419 46.9981C27.979 46.9353 27.8938 46.9 27.805 46.9C24.5297 46.9 22.9228 45.8239 22.3154 44.6073C21.4913 42.9591 21.4292 42.8718 20.6051 42.0477C20.2357 41.6784 20.1098 41.3264 20.1183 41.1697C20.1225 41.0913 20.1398 41.0649 20.1746 41.0362C20.2094 41.0075 20.2848 40.9708 20.435 40.9708C20.8467 40.9708 21.1322 40.9626 21.563 41.2299C21.9938 41.4971 22.5736 42.0784 23.3846 43.2948C23.8853 44.0461 24.6726 44.4434 25.4783 44.6518C26.2841 44.8603 27.1248 44.8887 27.805 44.8887C27.8844 44.8888 27.9613 44.8607 28.0219 44.8094C28.0826 44.7582 28.123 44.687 28.1361 44.6086C28.3599 43.2327 29.3745 42.0811 30.625 41.5086C30.6947 41.4768 30.7514 41.4221 30.7857 41.3536C30.82 41.2851 30.8297 41.2069 30.8134 41.1321C30.797 41.0573 30.7555 40.9903 30.6957 40.9424C30.636 40.8944 30.5616 40.8684 30.485 40.8687H28.8453C24.3964 40.8687 20.8014 37.3035 20.8014 32.8562C20.8014 30.494 21.8228 28.3825 23.4434 26.9112C23.483 26.8753 23.5134 26.8304 23.532 26.7803C23.5507 26.7302 23.5571 26.6764 23.5507 26.6233C23.4055 25.3808 23.5894 23.656 24.0441 22.1558ZM24.2351 28.123C24.1484 28.1274 24.0667 28.1655 24.0074 28.229C23.4098 28.8492 22.9452 29.5629 22.6295 30.3384C22.6112 30.3794 22.6014 30.4237 22.6006 30.4686C22.5998 30.5135 22.608 30.5581 22.6248 30.5998C22.6415 30.6414 22.6665 30.6793 22.6982 30.7111C22.7299 30.7429 22.7676 30.7681 22.8092 30.785C22.8508 30.8019 22.8954 30.8103 22.9403 30.8097C22.9852 30.8091 23.0295 30.7994 23.0706 30.7813C23.1117 30.7632 23.1487 30.737 23.1795 30.7043C23.2103 30.6716 23.2342 30.6331 23.2498 30.591C23.5331 29.8951 23.9503 29.2539 24.4903 28.6935C24.5379 28.6455 24.5699 28.5842 24.5821 28.5177C24.5942 28.4512 24.5859 28.3825 24.5583 28.3208C24.5307 28.259 24.4851 28.2071 24.4274 28.1718C24.3697 28.1365 24.3027 28.1195 24.2351 28.123ZM22.5353 31.5044C22.4583 31.509 22.3853 31.5401 22.3286 31.5923C22.2718 31.6445 22.2348 31.7147 22.2238 31.791C22.1689 32.1398 22.1414 32.4957 22.1414 32.8562C22.1414 33.2105 22.1689 33.56 22.2225 33.9004C22.2272 33.9457 22.2411 33.9896 22.2632 34.0293C22.2854 34.0691 22.3155 34.1039 22.3516 34.1316C22.3877 34.1594 22.4291 34.1795 22.4732 34.1907C22.5173 34.2019 22.5632 34.2041 22.6082 34.1969C22.6532 34.1898 22.6962 34.1736 22.7347 34.1493C22.7732 34.125 22.8063 34.0931 22.8321 34.0555C22.8578 34.018 22.8757 33.9756 22.8845 33.9309C22.8933 33.8862 22.8929 33.8402 22.8834 33.7957C22.8352 33.4902 22.8114 33.1759 22.8114 32.8562C22.8114 32.5306 22.8364 32.2101 22.886 31.8957C22.8946 31.8458 22.8918 31.7947 22.8778 31.7462C22.8638 31.6976 22.839 31.6528 22.8053 31.6152C22.7716 31.5775 22.7297 31.548 22.683 31.5288C22.6362 31.5096 22.5857 31.5013 22.5353 31.5044ZM22.9108 34.8269C22.8555 34.8262 22.8009 34.8393 22.7519 34.8649C22.7028 34.8905 22.6609 34.9278 22.6298 34.9735C22.5987 35.0193 22.5794 35.072 22.5736 35.127C22.5679 35.1821 22.5758 35.2376 22.5968 35.2888C23.4406 37.4505 25.3743 39.0686 27.7199 39.4672C27.7645 39.4775 27.8106 39.4786 27.8556 39.4704C27.9005 39.4622 27.9433 39.4449 27.9814 39.4195C28.0194 39.3942 28.0518 39.3613 28.0767 39.3229C28.1015 39.2846 28.1183 39.2416 28.1259 39.1965C28.1335 39.1514 28.1318 39.1053 28.1209 39.0609C28.11 39.0165 28.0901 38.9748 28.0625 38.9384C28.0349 38.902 28.0001 38.8716 27.9604 38.8491C27.9206 38.8266 27.8766 38.8125 27.8312 38.8076C25.7212 38.4491 23.9798 36.9895 23.221 35.0454C23.1974 34.9819 23.1552 34.9271 23.0998 34.888C23.0445 34.849 22.9786 34.8277 22.9108 34.8269ZM51.2615 40.1568C51.1959 40.1595 51.1325 40.1814 51.0793 40.2197C51.026 40.2581 50.9852 40.3113 50.9619 40.3727C50.2998 42.0543 49.4009 43.6167 48.3067 45.0208C48.2521 45.091 48.2275 45.1799 48.2384 45.2681C48.2493 45.3563 48.2949 45.4366 48.365 45.4913C48.4351 45.5459 48.524 45.5705 48.6122 45.5596C48.7005 45.5487 48.7807 45.5032 48.8354 45.4331C49.9683 43.979 50.8988 42.3609 51.5848 40.6187C51.6061 40.5668 51.614 40.5104 51.6078 40.4546C51.6016 40.3988 51.5815 40.3455 51.5493 40.2995C51.5171 40.2535 51.4739 40.2164 51.4236 40.1914C51.3733 40.1665 51.3176 40.1546 51.2615 40.1568ZM47.4116 46.2221C47.3248 46.228 47.2436 46.2674 47.1853 46.3321C46.7357 46.8113 46.2606 47.2663 45.7628 47.6969C45.7282 47.7253 45.6995 47.7603 45.6786 47.7999C45.6577 47.8395 45.645 47.8829 45.6412 47.9275C45.6373 47.9721 45.6425 48.0171 45.6563 48.0597C45.6701 48.1023 45.6924 48.1416 45.7217 48.1755C45.751 48.2094 45.7868 48.237 45.8269 48.2568C45.8671 48.2766 45.9108 48.2881 45.9555 48.2907C46.0003 48.2933 46.045 48.2869 46.0872 48.2719C46.1294 48.2569 46.1682 48.2336 46.2012 48.2033C46.7164 47.7576 47.2077 47.2864 47.6734 46.7901C47.7184 46.7436 47.749 46.6851 47.7615 46.6216C47.774 46.5581 47.7678 46.4923 47.7437 46.4322C47.7197 46.3722 47.6787 46.3204 47.6258 46.2831C47.5729 46.2458 47.5103 46.2246 47.4457 46.2221C47.4343 46.2216 47.423 46.2216 47.4116 46.2221Z" fill="black"/>
              </svg>
            </span>
            <span className = 'svg-color color-fade' onClick={() => window.open('https://www.linkedin.com/in/kenneth-cui11/')} >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="11.6 11.83 43.55 43.55" style = {{ height: 50 }}>
                <path d="M20.3055 11.8284C15.5029 11.8284 11.5955 15.7358 11.5955 20.5384V46.6684C11.5955 51.4709 15.5029 55.3784 20.3055 55.3784H46.4355C51.238 55.3784 55.1455 51.4709 55.1455 46.6684V20.5384C55.1455 15.7351 51.2387 11.8284 46.4355 11.8284H20.3055ZM20.3055 13.1684H46.4355C50.499 13.1684 53.8055 16.4748 53.8055 20.5384V46.6684C53.8055 50.7319 50.499 54.0384 46.4355 54.0384H20.3055C16.2419 54.0384 12.9355 50.7319 12.9355 46.6684V20.5384C12.9355 16.4748 16.2419 13.1684 20.3055 13.1684ZM22.2068 15.1771C18.2029 15.1771 14.9455 18.4345 14.9455 22.4384V44.767C14.9455 48.7709 18.2029 52.0271 22.2068 52.0271H44.5354C48.5393 52.0271 51.7955 48.7709 51.7955 44.767V32.2634C51.7955 32.0778 51.6454 31.9284 51.4605 31.9284C51.2755 31.9284 51.1255 32.0785 51.1255 32.2634V44.767C51.1255 48.4011 48.1695 51.3584 44.5354 51.3584H22.2068C18.5728 51.3584 15.6155 48.4011 15.6155 44.767V22.4384C15.6155 18.8044 18.5728 15.8471 22.2068 15.8471H44.7605C44.9454 15.8471 45.0955 15.697 45.0955 15.5121C45.0955 15.3271 44.9454 15.1771 44.7605 15.1771H22.2068ZM26.0122 23.9159C24.6139 23.9159 23.5992 24.8957 23.5992 26.2465C23.5992 27.5972 24.5931 28.5771 25.9874 28.5771C27.3857 28.5771 28.4017 27.5974 28.4017 26.2386C28.3682 24.8711 27.3844 23.9159 26.0122 23.9159ZM26.0122 24.5859C27.0313 24.5859 27.7069 25.2421 27.7317 26.2478C27.7324 27.2253 27.0157 27.9084 25.9651 27.9084C24.9675 27.9084 24.2692 27.2253 24.2692 26.2478C24.2692 25.2696 24.9858 24.5859 26.0122 24.5859ZM51.4605 25.2284C51.2755 25.2284 51.1255 25.3778 51.1255 25.5634V26.9034C51.1255 27.0883 51.2755 27.2384 51.4605 27.2384C51.6454 27.2384 51.7955 27.0883 51.7955 26.9034V25.5634C51.7955 25.3785 51.6454 25.2284 51.4605 25.2284ZM51.4605 27.9084C51.2755 27.9084 51.1255 28.0585 51.1255 28.2434V30.9234C51.1255 31.1083 51.2755 31.2584 51.4605 31.2584C51.6454 31.2584 51.7955 31.1083 51.7955 30.9234V28.2434C51.7955 28.0578 51.6454 27.9084 51.4605 27.9084ZM38.576 29.8359C37.102 29.8446 35.9071 30.2847 35.0442 31.21V30.2521C35.0442 30.0671 34.8941 29.9171 34.7092 29.9171H30.6394C30.5476 29.9171 30.4597 29.9541 30.396 30.0204C30.333 30.0868 30.3004 30.1766 30.3044 30.2678C30.3587 31.4396 30.3044 42.8655 30.3044 42.9808C30.3038 43.0705 30.339 43.1559 30.4013 43.2189C30.4642 43.2819 30.5497 43.3171 30.6381 43.3171H34.7105C34.8954 43.3171 35.0455 43.167 35.0455 42.9821V35.8712C35.0455 35.4611 35.0848 35.1566 35.1632 34.9643C35.326 34.5623 35.8327 33.6269 37.028 33.6269C38.8155 33.6269 39.0092 35.4406 39.0092 36.2232L39.0642 42.9847C39.0655 43.1689 39.2156 43.3171 39.3992 43.3171H43.4192C43.6041 43.3171 43.7542 43.167 43.7542 42.9821V36.163C43.7542 33.9319 43.2038 32.2508 42.1184 31.1668C41.234 30.2837 40.0427 29.8359 38.576 29.8359ZM23.9905 29.9184C23.8055 29.9184 23.6555 30.0685 23.6555 30.2534V42.9834C23.6555 43.1683 23.8055 43.3184 23.9905 43.3184H28.0105C28.1954 43.3184 28.3455 43.1683 28.3455 42.9834V30.2534C28.3455 30.0685 28.1954 29.9184 28.0105 29.9184H23.9905ZM38.5656 30.5072H38.576C39.8591 30.5072 40.8923 30.8894 41.646 31.6418C42.6008 32.5952 43.0855 34.1161 43.0855 36.163V42.6484H39.7328L39.6792 36.2219C39.6792 34.2085 38.6641 32.9569 37.0293 32.9569C35.9171 32.9569 34.9872 33.613 34.543 34.7118C34.4304 34.9878 34.3755 35.3667 34.3755 35.8712V42.6471H30.9757C30.9844 40.8407 31.0178 32.6165 30.9823 30.5884H34.3755V32.1312C34.3379 32.2257 34.3533 32.3352 34.4043 32.4269C34.4639 32.5321 34.5892 32.5984 34.7105 32.5984C34.8498 32.5984 34.969 32.487 35.0193 32.3537C35.5084 31.5497 36.4115 30.5072 38.5656 30.5072ZM24.3255 30.5884H27.6755V42.6484H24.3255V30.5884Z" fill="black"/>
              </svg>
            </span>
          </div>
        </div>
        <div style={{ display: 'flex', flex:1}}>.</div>
      </div>
    </div>
  );
}

export default App;
