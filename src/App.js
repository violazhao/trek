import './App.css';
import Routes from "./Routes";
import {Helmet} from 'react-helmet';

function App() {
  return (
    <div className="App">
      <Helmet>
        <style>{'body {  background-image: linear-gradient(to right, #9A35EF, #4B00C4, #4176D6); width: 100%; height: 100%}'}</style>
      
      </Helmet>
      <Routes />
    </div>
  );
}

export default App;
