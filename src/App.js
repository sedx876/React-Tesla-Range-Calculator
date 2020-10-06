import React, {Component} from 'react';
import './styles/App.css';
import Header from './components/Header/Header'
import TeslaBattery from './containers/TeslaBattery'

class App extends Component {  
  render() {
    return (      
      <div>        
      <Header /> 
      <TeslaBattery />
      </div>    
      ); 
    }}

export default App;
