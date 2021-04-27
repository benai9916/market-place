import React , {useEffect, useState } from "react";
import { BrowserRouter, Switch, Route }  from 'react-router-dom';
import { useHistory, useLocation} from 'react-router-dom';
import { useDispatch } from 'react-redux';
import decode from 'jwt-decode';
import * as actionType from './components/constants/actionType';

import { Container } from "@material-ui/core";

import Navbar from './components/Navbar/navbar';
import AddProducts from './components/Products/products';
import BuyerDashboard from  './components/UserDashboard/BuyerDashboard';
import Auth from '../src/components/Auth/Auth';
import ProductDetail from '../src/components/ProductDetail/ProductDetail';

const App = () => {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));
  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
    const token = user?.token;

    if (token) {
      const decodedToken = decode(token);

      if (decodedToken.exp * 1000 < new Date().getTime()) {
        dispatch({ type: actionType.LOGOUT });

        history.push('/auth');

        setUser(null);
      }
    }

    setUser(JSON.parse(localStorage.getItem('profile')));
  }, [history]);

  // const userdata = JSON.parse(localStorage.getItem('profile'));

  console.log('USER DATA => ', user)

    return (
      <BrowserRouter>
       <div>
           <Navbar />
           <Container width="xl">
             <Switch>
               {user?.result.account  === 'seller' && (
               <Route path="/" exact component={AddProducts}/>
               )}
               {user?.result.account  === 'buyer' && (
                 <>
                 <Route path="/" exact component={BuyerDashboard}/>
                 <Route path="/product/:username" exact component={ProductDetail} />
                 </>
               )}
               
             </Switch>
             <Route path="/auth" exact component={Auth} />
           </Container>
           
       </div>
      </BrowserRouter>

    )
}

 export default App