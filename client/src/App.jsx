import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import Homepage from './pages/Homepage';
import NotFoundpage from './pages/NotFoundpage';
import CoinFlip from './components/CoinFlip';
import CashHunt from './components/CashHunt';
import Pachinko from './components/Pachinko';
import CrazyTime from './components/CrazyTime';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/coinFlip" element={<CoinFlip />} />
        <Route path="/cashHunt" element={<CashHunt />} />
        <Route path="/pachinko" element={<Pachinko />} />
        <Route path="/crazyTime" element={<CrazyTime />} />
        <Route path="*" element={<NotFoundpage />} />
      </Routes>
    </BrowserRouter>
  )
}