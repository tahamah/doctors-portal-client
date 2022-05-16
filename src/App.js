import { Route, Routes } from 'react-router-dom'
import './App.css'
import Appointment from './Pages/Appointment/Appointment'
import Home from './Pages/Home/Home'
import Navbar from './Pages/Shared/Navbar'
import Login from './Pages/Login/Login'
import SignUp from './Pages/Login/SignUp'
import RequireAuth from './Pages/Login/RequireAuth'

function App() {
    return (
        <div className="md:max-w-7xl mx-auto">
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route
                    path="/appointment"
                    element={
                        <RequireAuth>
                            <Appointment />
                        </RequireAuth>
                    }
                />
                <Route path="/login" element={<Login />} />
                <Route path="/signUp" element={<SignUp />} />
            </Routes>
        </div>
    )
}

export default App
