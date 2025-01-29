import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from '../pages/Home/Home';

export const AppRouter = () => {
    return(
        <Routes>
            <Route path='/app/*' element={ <Home/> }/>
        </Routes>

    )
}