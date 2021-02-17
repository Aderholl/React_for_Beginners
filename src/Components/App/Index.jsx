import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from '../Header';
import FirstPage from '../../pages/Firstpage';
import ItemListFunctional from '../ItemListFunctional';
import ItemListClass from '../ItemListClass';
import './App.scss';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route exact path="/" component={Header} />
          <Route path="/list-functional" component={ItemListFunctional} />
          <Route path="/list-class" component={ItemListClass} />
          <Route path="/class" component={FirstPage} />
        </Switch> 
      </div>
    </BrowserRouter>
  );
}

export default App;
