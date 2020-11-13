import React, {useContext} from 'react';
import Ingredients from './components/Ingredients/Ingredients';
import Auth from './components/Auth';
import {AuthContext} from './Context/auth-context';

const App = () => {
  //passing the context that we want to listen to which is AuthContext
  const authContext = useContext(AuthContext);
  let content = <Auth />;

  if(authContext.isAuth){
    content = < Ingredients/>;
  }
  
  return content;
};

export default App;
