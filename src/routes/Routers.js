import React from 'react'
import { Route, Routes, Navigate } from 'react-router-dom'
import Home from '../views/admin/Home'
import RandomList from '../views/admin/RandomList'
import WinnerList from '../views/admin/WinnerList'
import PrizeList from '../views/admin/PrizeList'
import PeriodList from '../views/admin/PeriodList'
import PageNotFond from '../views/admin/pagenotfond/PageNotFond'
import User from '../views/admin/User'
import AddPeriod from '../views/admin/AddPeriod'
import AddRandom from '../views/admin/AddRandom'
import AddPrize from '../views/admin/AddPrize'
import AddUser from '../views/admin/Adduser'
import BannerManagement from '../Components/BannerManagement'
import EventManagement from '../Components/EventManagement'
import CreaeEvent from '../Components/Create/CreateEvent'
import AboutManagement from '../Components/AboutManagement'

const Routers = () => {
  return (
    <div>
      <Routes>
        <Route path='/BannerManage' element={<BannerManagement/>} />
        <Route path='/EventManagement' element={<EventManagement />} />
        <Route path='/AboutManagement' element={<AboutManagement />} />
        <Route path='/CreateEVent' element={<CreaeEvent />} />
        <Route path="/*" element={<Navigate to="/404" />} />
        <Route path='/404' element={<PageNotFond />} />
      </Routes>
    </div>
  )
}

export default Routers