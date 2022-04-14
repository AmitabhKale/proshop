import Footer from "./components/Footer";
import Header from "./components/Header";
import {Container } from 'react-bootstrap'

function App() {
  return (
    <>
      <Header />
      <main className="py-3">
        <Container>
        <h2>Welcome to Proshop</h2>
        </Container>
      
      </main>
      <Footer />
    </>
    
  );
}

export default App;
