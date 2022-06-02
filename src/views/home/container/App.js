import '../../../css/style.css';
import Header from '../Header';
import SideBar from '../SideBar';
import Gallery from '../components/Gallery';
import Detail from './Detail';
import Overview from '../components/Overview';
import  {galeryimages } from '../../../globals/data'

function App() {
  return (
    <div className="container">
   
<Header></Header>\

    <div className="content">
      
    <SideBar></SideBar>

        <main className="hotel-view">
            <Gallery data={galeryimages}></Gallery>
            <Overview></Overview>

            <Detail/>


        </main>
    </div>
</div>
  );
}

export default App;
