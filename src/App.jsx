import React from 'react';
import { HashRouter, Route, Link, Routes } from 'react-router-dom';

// COMPONENTES
import { Home } from './pages/Home';
import { Collections } from './pages/Collections';
import { Profile } from './pages/Profile';

export const App = () => {
    return (
        <>
            <HashRouter>
                <h1>📚 Wooks</h1>
                <header>
                    <nav>
                        <ul>
                            <li>
                                <Link to="/">Inicio</Link>
                            </li>
                            <li>
                                <Link to="/books">Colecciones</Link>
                            </li>
                            <li>
                                <Link to="/profile">Perfil</Link>
                            </li>
                        </ul>
                    </nav>
                </header>
                <Routes>
                    <Route path="/" element={<Home/>} />
                    <Route path="/books" element={<Collections/>} />
                    <Route path="/profile" element={<Profile/>} />
                </Routes>
            </HashRouter>
        </>
    );
};