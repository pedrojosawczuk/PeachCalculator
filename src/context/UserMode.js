import React, {createContext, useState} from "react";

const UserModeContext = createContext();

function UserModeProvider(props) {
  const [userMode, setMode] = useState(false);
  const toggleMode = () => {
    setMode(!userMode);
  };
  return (
    <>
      <UserModeContext.Provider value={{userMode, toggleMode}}>
        {props.children}
      </UserModeContext.Provider>
    </>
  )
};

export {UserModeContext, UserModeProvider}