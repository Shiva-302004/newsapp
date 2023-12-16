import { BrowserRouter,Routes ,Route} from 'react-router-dom';
import './App.css';
import NewsContainer from './Components/NewsContainer';
import Navbar from './Components/Navbar';
import DropDownmenu from './Components/DropDownmenu';
// import NewsCard from './Components/NewsCard';

function App() {
  return (
    <>
    <Navbar></Navbar>
    <BrowserRouter>
    <Routes>
      {/* <Route path="/notes" element={<DropDownmenu/>}></Route> */}
      <Route path="/sports" element={<NewsContainer category={"sports"}/>}></Route>
      <Route path="/" element={<NewsContainer category={"general"}/>}></Route>
      <Route path="/entertainment" element={<NewsContainer  category={"entertainment"}/>}></Route>
      <Route path="/health" element={<NewsContainer  category={"health"}/>}></Route>
      <Route path="/science" element={<NewsContainer  category={"science"}/>}></Route>
      <Route path="/technology" element={<NewsContainer  category={"technology"}/>}></Route>
      <Route path="/home" element={<NewsContainer  category={"general"}/>}></Route>
    </Routes>
    
    </BrowserRouter>
    
    </>
  );
}

export default App;
