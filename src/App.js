import './App.scss';
import { Routes, Route } from 'react-router-dom';

import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

import Main from './pages/Main/Main';
import Cart from './pages/Cart/Cart';
import NotFound from './pages/NotFound/NotFound';
import Game from './pages/Game/Game';

import { createContext, useState } from 'react';

export const SearchContext = createContext();

function App() {
    const [searchValue, setSearchValue] = useState('');

    return (
        <div>
            <SearchContext.Provider value={{ searchValue, setSearchValue }}>
                <Header />
                <Routes>
                    <Route exact path="/cart" element={<Cart />} />
                    <Route exact path="/" element={<Main />} />
                    <Route exact path="/game/*" element={<Game />} />
                    <Route exact path="/*" element={<NotFound />} />
                </Routes>
                <Footer />
            </SearchContext.Provider>
        </div>
    );
}

export default App;
