import Header from './components/Header';
import Content from './components/Content';
import Footer from './components/Footer';
/*
import LightSwitch from './context/LightSwitch';
import { UserModeContext } from './context/UserMode';
import { UserModeProvider } from './context/UserMode';
*/
import logo from './logo.png';
import './index.css';

function App() {
  /*
  const {userMode} = useContext(UserModeContext);
    <UserModeProvider>
  <LightSwitch />
  
    </UserModeProvider>
  */
  return (
  <>
    <div className='container container-dark'/*className={userMode ? `container container-dark` : `container container-light`}*/>
      <Header
        logo={ logo }
        title='Peach Calculator' />
      <Content />
      <Footer />
    </div>
  </>
  );
}

export default App;