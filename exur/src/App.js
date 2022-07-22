import './App.css';
// import ProductsList from './components/products/ProductsList';
import { ProductsList } from './components/products/ProductsList';
import Header from "./components/header/Header";
import Footer from './components/footer/Footer';


function App() {
  return (
    <div className="App">
      <Header/>
     <ProductsList/>
     <Footer/>
    </div>
  );
}

export default App;
