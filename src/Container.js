import React, {useContext} from 'react';
import LightSwitch from './context/LightSwitch';
import Content from './context/Content';
import Footer from './context/Footer';
import { UserModeContext } from './context/UserMode';

function Container() {
  const {userMode} = useContext(UserModeContext);
  return (
  <>
    <div className={userMode ? `container container-dark` : `container container-light`}>
      <Content />
      <Footer />
      <LightSwitch />
    </div>
  </>
  )
}

export default Container
