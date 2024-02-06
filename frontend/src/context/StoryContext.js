const { createContext, useState } = require("react");

const StoryContext = createContext();

const Provider = ({ children }) => {

  const [loggedIn, setLoggedIn] = useState(false);
  const [login, setLogin] = useState(true);
  const [name,setName] = useState("");
  const [password,setPassword] = useState("");
  const [email,setEmail] = useState("");
  
  const valueToShare = {
    loggedIn, setLoggedIn,
    login, setLogin,
    name,setName,
    password,setPassword,
    email,setEmail
  };

  return (
    <StoryContext.Provider value={valueToShare}>
      {children}
    </StoryContext.Provider>
  );
};

export { Provider };

export default StoryContext;
