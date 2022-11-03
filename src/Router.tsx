import { Route, Routes } from 'react-router-dom'
import { Avaliable } from './pages/Avaliable'
import { Coaches } from './components/Users/Coaches'
import { Studants } from './components/Users/Studants'
import { Dashboard } from './pages/Dashboard'

export function Router() {
    return (
        <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/coaches" element={<Coaches />} />
            <Route path="/studants" element={<Studants />} />
            <Route path="/avaliable" element={<Avaliable />} />
        </Routes>
    )
}