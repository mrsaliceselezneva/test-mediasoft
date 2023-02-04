import './App.scss';
import { Routes, Route } from 'react-router-dom';

import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

import Main from './pages/Main/Main';
import Cart from './pages/Cart/Cart';
import Order from './pages/Order/Order';
import NotFound from './pages/NotFound/NotFound';
import Game from './pages/Game/Game';

import { createContext, useState } from 'react';

export const SearchContext = createContext();
export const ShowSidebarModalContext = createContext();
export const ShowSearchModalContext = createContext();

function App() {
    const [searchValue, setSearchValue] = useState('');
    const [showSidebarModal, setShowSidebarModal] = useState(false);
    const [showSearchModal, setShowSearchModal] = useState(false);

    return (
        <div>
            <SearchContext.Provider value={{ searchValue, setSearchValue }}>
                <ShowSidebarModalContext.Provider value={{ showSidebarModal, setShowSidebarModal }}>
                    <ShowSearchModalContext.Provider
                        value={{ showSearchModal, setShowSearchModal }}>
                        <Header />
                        <Routes>
                            <Route exact path="/cart" element={<Cart />} />
                            <Route exact path="/order" element={<Order />} />
                            <Route exact path="/game" element={<Game />} />
                            <Route exact path="/game/*" element={<NotFound />} />
                            <Route exact path="/" element={<Main />} />
                            <Route exact path="/*" element={<NotFound />} />
                        </Routes>
                        <Footer />
                    </ShowSearchModalContext.Provider>
                </ShowSidebarModalContext.Provider>
            </SearchContext.Provider>
        </div>
    );
}

export default App;
