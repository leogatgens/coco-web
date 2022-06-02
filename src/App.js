import './App.css';
import './css/style.css';
import Header from './views/home/Header';
import SideBar from './views/home/SideBar';
import Gallery from './views/home/Gallery';
import Detail from './views/home/container/Detail';
import Overview from './views/home/Overview';
function App() {
  return (
    <div className="container">
   
<Header></Header>\

    <div className="content">
      
    <SideBar></SideBar>

        <main className="hotel-view">
            <Gallery></Gallery>
            <Overview></Overview>

            <Detail/>


        </main>
    </div>
</div>
  );
}

export default App;
