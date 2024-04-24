import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Pages/Main';
import Inicio from './Pages/Main/Inicio';

export default function AppRouter() {
    return (
        <Router>
            <Routes>
                <Route path='/' element={<Home />} >
                    <Route path='/' element={<Inicio />} />
                </Route>
            </Routes>
        </Router>
    );
};