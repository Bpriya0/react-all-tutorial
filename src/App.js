
import React from 'react';
import {HashRouter, Route} from 'react-router-dom';
import Header from './header';
import Home from './home';
import UserLogin from './login';
import Register from './signup';
import UserProduct from './product';
import StateOne from './state1';
import StateTwo from './state2';
import StateThree from './state3';
import StateFour from './state4';
import StateFive from './state5';
import StateSix from './state6';
import StateApiOne from './stateapi1';
import StateApiTwo from './stateapi2';
import StateApiThree from './stateapi3';
import StateApiFive from './stateapi5';
import HookOne from './hook1';
import HookTwo from './hook2';
import HookThree from './hook3';
import HookFour from './hook4';
import HookFive from './hook5';
import MyProps from './props';
import Validation from './validation';
function App() {
  return(
    <HashRouter>
      <Header/>
      <Route exact path="/" component={Home} />
      <Route exact path="/login" component={UserLogin}/>
      <Route exact path="/signup" component={Register} />
      <Route exact path="/userproduct" component={UserProduct}/>
      <Route exact path="/stateone" component={StateOne}/>
      <Route exact path="/statetwo" component={StateTwo}/>
      <Route exact path="/statethree" component={StateThree}/>
      <Route exact path="/statefour" component={StateFour}/>
      <Route exact path="/statefive" component={StateFive}/>
      <Route exact path="/statesix" component={StateSix}/>
      <Route exact path="/stateapione" component={StateApiOne}/>
      <Route exact path="/stateapitwo" component={StateApiTwo}/>
      <Route exact path="/stateapithree" component={StateApiThree}/>
      <Route exact path="/stateapifive" component={StateApiFive}/>
      <Route exact path="/hookone" component={HookOne}/>
      <Route exact path="/hooktwo" component={HookTwo}/>
      <Route exact path="/:userid/hookthree" component={HookThree}/>
      <Route exact path="/:userid/:city/hook4" component={HookFour}/>
      <Route exact path="/:userid/hookfive" component={HookFive}/>
      <Route exact path="/myprops" component={MyProps}/>
      <Route exact path="/validation" component={Validation}/>
    </HashRouter>
  )
}

export default App;
