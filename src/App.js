import './App.scss';
import { Routes, Route } from 'react-router-dom';

import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

import Main from './pages/Main/Main';
import Cart from './pages/Cart/Cart';
import NotFound from './pages/NotFound/NotFound';

function App() {
    return (
        <div>
            <Header />
            <Routes>
                <Route exact path="/cart" element={<Cart />} />
                <Route exact path="/" element={<Main />} />
                <Route exact path="/*" element={<NotFound />} />
            </Routes>
            <Footer />
        </div>
    );
}

export default App;
