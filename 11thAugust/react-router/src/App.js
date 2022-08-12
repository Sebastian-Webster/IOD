import React from 'react';
import {Routes, Route} from 'react-router-dom'
import NavBar from './components/NavBar';
import OrderSummary from './routes/OrderSummary';
import Home from './routes/Home';
import PageNotFound from './routes/PageNotFound';
import Products from './routes/Products';
import NewProducts from './routes/NewProducts';
import FeaturedProducts from './routes/FeaturedProducts';
import Users from './routes/Users';
import UserDetails from './routes/UserDetails';

const LazyAbout = React.lazy(() => import('./routes/About'))

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='about' element={
          <React.Suspense fallback='Loading...'>
            <LazyAbout/>
          </React.Suspense>
        }/>
        <Route path='order-summary' element={<OrderSummary/>}/>
        <Route path='products' element={<Products/>}>
          <Route index element={<FeaturedProducts/>}/>
          <Route path='featured-products' element={<FeaturedProducts/>}/>
          <Route path='new-products' element={<NewProducts/>}/>
        </Route>
        <Route path='users' element={<Users/>}>
          <Route path=':userId' element={<UserDetails/>}/>
        </Route>
          {/*<Route path='users' element={<Users/>}/>*/}
        <Route path='*' element={<PageNotFound/>}/>
      </Routes>
    </div>
  );
}

export default App;
