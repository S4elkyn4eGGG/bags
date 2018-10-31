import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch} from 'react-router-dom';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';

import reducer from 'reducers';
import TopMenu from 'containers/TopMenu';
import Catalog from 'containers/Catalog';

const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)));

ReactDOM.render(
    <BrowserRouter>
       <Switch>
           <Provider store={store}>
               <div>
                   <Route path={'/'} component={TopMenu} exact/>
                   <Route path={'/catalog'} component={Catalog} exact/>
               </div>
           </Provider>
       </Switch>
   </BrowserRouter>
    , document.getElementById('root'));
