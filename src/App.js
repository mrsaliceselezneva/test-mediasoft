import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import './App.css';
import Top from './top/top';
import Main from './main/main';
import store from './redux/store';

function App() {
  return (
      <Router>
        <Top store={store} />
        <Routes>
          <Route exact path="/" element={<Main />} />
        </Routes>
      </Router>
  );
}

export default App;


