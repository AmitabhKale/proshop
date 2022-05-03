import Footer from "./components/Footer";
import Header from "./components/Header";
import {Container } from 'react-bootstrap'
import HomeScreen from "./screens/HomeScreen";
import ProductScreen from "./screens/ProductScreen"
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import CartScreen from "./screens/CartScreen";
import LoginScreen from "./screens/LoginScreen";

function App() {
  return (
    <Router>
      
      <Header />
      <main className="py-3">
        <Container>
        {/* <HomeScreen /> */}
        <Routes>
        <Route path='/' element={<HomeScreen />} />
        <Route path='/login' element={<LoginScreen />} />
        <Route path='/product/:id' element={<ProductScreen />} />
        <Route path='/cart' element={<CartScreen />} />
        <Route path='/cart/:id' element={<CartScreen />} />
        </Routes>
        </Container>
      
      </main>
      <Footer />
    </Router>
    
  );
}

export default App;
