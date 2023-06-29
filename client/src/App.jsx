import { useState } from 'react'
import {Routes,Route,BrowserRouter as Router } from "react-router-dom"
import './App.css'
import MarketUnit from './pages/MarketUnit'
import Home from "./pages/Home"
import MarketPlace from './pages/MarketPlace'
import Item from './pages/Item'
import Collection from './pages/Collection'
import Profile from './pages/Profile'
import CreateToken from './pages/CreateToken'
import Stats from './modules/Unit/views/stats'
import Overview from './modules/Unit/views/overview'
import Chart from './modules/Unit/views/chart'
import Discover from './modules/Collection/components/Discover'
import Trading from './modules/Collection/components/Trading'
import KYC from './pages/KYC'
import DAO from './pages/DAO'


function App() {

  return (
   <Routes>
      <Route exact path="/" element={<Home />} />
      <Route exact path="/stock/:id" element={<MarketUnit />} >
          <Route exact path="" element={<Overview/>} />
          <Route exact path="chart" element={<Chart />} />
          <Route exact path="stat" element={<Stats />} />

      </Route>
      <Route exact path="/market" element={<MarketPlace />} />
      <Route exact path="/market/collection/item/:id" element={<Item />} />
      <Route exact path="/market/collection/:id" element={<Collection />} >
         <Route exact path="" element={<Discover />} />
         <Route exact path="trades" element={<Trading />} />
      </Route>
      <Route exact path="/account" element={<Profile />} />
      <Route exact path="/create" element={<CreateToken  />} />
      <Route exact path="/kyc" element={<KYC/>} />
      <Route exact path="/dao" element={<DAO/>} />
    </Routes>

  )
}

export default App
