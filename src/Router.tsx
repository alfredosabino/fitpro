import { Route, Routes } from 'react-router-dom'
import { Avaliable } from './components/Avaliable/Avaliable'
import { Coach } from './components/Users/Coaches/Coach'
import { Dashboard } from './pages/Dashboard'

export function Router() {
    return (
        <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/coach" element={<Coach />} />
            <Route path="/avaliable" element={<Avaliable />} />
            <Route path="/coach/:slug" element={<Coach />} />
        </Routes>
    )
}