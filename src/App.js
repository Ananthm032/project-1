import React from 'react';
import "./App.css"
import { Route, Routes } from 'react-router-dom';
import Sidebar from "./components/Sidebar/Sidebar"
import Dashboard from './pages/Dashboard.js';
import About from './pages/About.js';
import Analytics from './pages/Analytics.js';
import Comment from './pages/Comment.js';
import Product from './pages/Product.js';
import ProductList from './pages/ProductList.js';
import Topbar from './components/Topbar/Topbar';
import Routing from "./Content/Routing/Routing"
import UserAddress from './pages/UserAddress';
import UserProfile from './pages/UserProfile';
import { ApolloProvider, ApolloClient, InMemoryCache } from "@apollo/client";
const App = () => {

  const client = new ApolloClient({
    uri: "https://api.spacex.land/graphql/",
    cache: new InMemoryCache()
  });


  return (
   <>
  
   <ApolloProvider client={client}>
  <Topbar/>
      <Sidebar>
         
        <Routes>
          <Route path="/" element={<Dashboard />}>
           
            </Route>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/user" element={<About />} />
          <Route path="/comment" element={<Comment />} />
          <Route path="/analytic" element={<Analytics />} />
          <Route path="/product" element={<Product />} />
          <Route path="/user/address" element={<UserAddress />} />
          <Route path="/user/profile" element={<UserProfile />} />
          <Route path="/productList" element={<ProductList />} />
        </Routes>
     
   </Sidebar>
     
   </ApolloProvider>
      </>
  );
};

export default App;