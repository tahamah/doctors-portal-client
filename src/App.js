import { Route, Routes } from 'react-router-dom'
import './App.css'
import Appointment from './Pages/Appointment/Appointment'
import Home from './Pages/Home/Home'
import Navbar from './Pages/Shared/Navbar'
import Login from './Pages/Login/Login'

function App() {
    return (
        <div className="md:max-w-7xl mx-auto">
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/appointment" element={<Appointment />} />
                <Route path="/login" element={<Login />} />
            </Routes>
        </div>
    )
}

export default App
