import React from 'react';
import First from './First';
import {BrowserRouter,Routes,Route, Link} from 'react-router-dom';
import Routing from './Routing';
import Lazy2 from './Lazy2';
import Counter from './Counter';
// import Routing from './Routing';
const LazyComp=React.lazy(()=>import ('./Routing'));
const Lazy2Comp= React.lazy(()=>import ('./Lazy2'));
const RoutingComp= React.lazy(()=>import ('./SubRouting'));
// import logo from './logo.svg';
// import './App.css';

function App() {
 
  return (
    <div className="App">
      <div>hello world</div>
      <First/>
      <Counter/>
      <BrowserRouter>
      {/* <Routes>
         <Route path='/routing' element={<React.Suspense={}>
        <LazyComp/></React.Suspense>}></Route>
      </Routes> 
     <Routes>
        <Route path='/routing' element={
        <LazyComp/>}></Route>
      </Routes>  */}
      <Link to={"/routing"}>routing</Link><br/>
      <Link to={"/lazy2"}>lazy2</Link><br/>
      <Routes>
      <Route path='/routing' element={<React.Suspense fallback={<p>page is loading pls wait</p>}><LazyComp/></React.Suspense>}></Route>
      <Route path='/lazy2' element={<React.Suspense fallback={<p>page is loading</p>}><Lazy2Comp/></React.Suspense>}></Route>
      <Route path='/logic' element={<React.Suspense fallback={<p>page is loading</p>}><RoutingComp/></React.Suspense>}></Route>
      </Routes>
      </BrowserRouter>
     
    </div>
  );
}

export default App;
