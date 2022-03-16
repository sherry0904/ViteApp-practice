import Filter from '../components/Filter'
import List from '../components/List';

function Home() {
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
