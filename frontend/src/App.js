import { useContext } from 'react';
import {BrowserRouter, Route, Routes, Link} from 'react-router-dom';
import HomeScreen from "./screens/HomeScreen";
import ProductScreen from "./screens/ProductScreen";
import { Nav, Navbar, Badge } from 'react-bootstrap';
import { Container } from 'react-bootstrap';
import LinkContainer from 'react-router-bootstrap/LinkContainer';
import { Store }  from './Store';
import CartScreen from './screens/CartScreen'; 
import SigninScreen from './screens/SigninScreen'; 


function App() {
  const {state } = useContext(Store); 
  const { cart } = state;

  return (
     <BrowserRouter>
       <div className='d-flex flex-column site-container'>
         <header >
            <Navbar bg='dark'  varient='dark'>
              <Container>
                <LinkContainer to="/">
                <Navbar.Brand>Amazona</Navbar.Brand>
                </LinkContainer>
                <Nav className='me-auto'>
                  <Link to='/cart' className='nav-link'>
                    Cart
                    {cart.cartItems.length > 0 && (
                      <Badge pill bg='warning'>
                        {cart.cartItems.reduce((a, c) => a + c.quantity, 0)}
                      </Badge>
                    )}
                  </Link>

                </Nav>
              </Container>
            </Navbar>
          </header>


        <main>
          
          <Container className='mt-3'>

            <Routes>
              <Route path="/product/:slug" element={<ProductScreen />} />
              <Route path='/cart' element={<CartScreen />} />
              <Route path='/signin' element={<SigninScreen />} />
              <Route path='/' element={<HomeScreen />} />
            </Routes>
          </Container>

        </main>
        <footer>
          <div className='text-center'> Julius Phensic @2022</div>
        </footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
