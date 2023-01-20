import './App.scss';
import { Routes, Route } from 'react-router-dom';

import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

import Main from './pages/Main/Main';
import Cart from './pages/Cart/Cart';

function App() {
    return (
        <div>
            <Header />
            <Routes>
                <Route exact path="/*" element={<Main />} />
                <Route exact path="/cart" element={<Cart />} />
            </Routes>
            <Footer />
        </div>
    );
}

export default App;
