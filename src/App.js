import './App.css';
import Header from './components.jsx/header'
import ProductList from './containers/prodlist.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <Header />
      <ProductList />
    </div>
  );
}

export default App;
