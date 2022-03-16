import './App.css';
import Filter from './Filter'
import List from './List';

// import {FixedSizeList} from 'react-window';
// import AutoSizer from "react-virtualized-auto-sizer";

function Home() {

  // useEffect(()=>{
  //   console.log(data)
  //   console.log(allRegion)
  // },[data,allRegion]);

  // context資料

  return (
    <div className="home">
      <main>
        <Filter/>
        <List/>
      </main>
    </div>
  );
}

export default Home;
