import Header from '../Header';
import ItemListFunctional from '../ItemListFunctional';
import ItemListClass from '../ItemListClass';
import './App.scss';

function App() {
  return (
    <div className="App">
      <Header />
      <ItemListFunctional />
      <ItemListClass />
    </div>
  );
}

export default App;
