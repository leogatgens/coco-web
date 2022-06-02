import './App.css';
import './css/style.css';
import Header from './Header';
import SideBar from './SideBar';
import Gallery from './Gallery';
import Detail from './Detail';
import Overview from './Overview';
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
