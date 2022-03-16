import { useState ,useEffect} from 'react';
import './App.css';
import {Provider} from './context/context'
import {HashRouter as Router, Routes, Route} from 'react-router-dom';
import Header from './Header/Header';
import Home from './Home';
import Detail from './Detail';

// import {FixedSizeList} from 'react-window';
// import AutoSizer from "react-virtualized-auto-sizer";

function App() {
  // 主題模式
  const [mode,setMode] = useState(false);
  // 搜尋關鍵字
  const [search,setSearch] = useState("");
  // 搜尋區域
  const [region,setRegion] = useState("All");
  // 內容資料
  const [data, SetData] = useState([]);
  // 所有區域
  const [allRegion, SetAllRegion] = useState([]);

  // 切換主題模式
  function toggleMode(){
    setMode(!mode)
    // console.log(mode)
  }

  // 取得資料
  useEffect(()=>{
    fetch('https://restcountries.com/v2/all?fields=flags%2Cname%2Cpopulation%2Cregion%2Ccapital%2CnativeName%2Clanguages%2CtopLevelDomain%2Csubregion%2Ccurrencies')
      .then(rs=>rs.json())
      .then(result=>{
        SetData(result);
        const getAllRegion = result.map(item=>{
          return item.region
        });
        let getAllItem = getAllRegion.filter((item,idx,arr)=>{
          return arr.indexOf(item) === idx;
        })
        
        getAllItem.unshift("All")
        // console.log(getAllItem)
        
        SetAllRegion(getAllItem)
        // console.log(result)
        // console.log(getAllRegion)
      })
  },[]);

  // useEffect(()=>{
  //   console.log(data)
  //   console.log(allRegion)
  // },[data,allRegion]);

  // context資料
  let modeValue = {
    mode,
    toggleMode,
    data,
    search,
    setSearch,
    region,
    setRegion,
    allRegion
  }

  return (
    <Provider value={modeValue}>
      <div className={`app ${modeValue.mode?'dark':''}`}>
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
