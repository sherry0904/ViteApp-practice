import { useState } from 'react';
import {Provider} from './context/context'
import {HashRouter as Router, Routes, Route} from 'react-router-dom';
import Header from './Header/Header';
import Home from './pages/Home';
import Detail from './pages/Detail';
import useStore from './hooks/useStore';
import './style/App.css';

function App() {
  // 主題模式
  const [mode, setMode] = useState(false);

  // Separate Data and Components.
  // You can use hook or context to store your models or controls.
  const { state, action } = useStore();

  return (
    <Provider value={{
      state: { ...state, mode },
      action: { ...action, setMode }
    }}>
      <div className={`app ${mode && 'dark'}`}>
        <Header/>
        <Router>
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/detail/:name' element={<Detail/>} />
          </Routes>
        </Router>
      </div>
    </Provider>
  );
}

export default App;
