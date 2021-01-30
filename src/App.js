import './App.css';

import InboxScreen from './Components/InboxScreen'
import { Provider } from 'react-redux';
import store from './lib/redux'

function App() {
  return (
    <Provider store={store} >
     <InboxScreen /> 
    </Provider>
  );
}

export default App;
