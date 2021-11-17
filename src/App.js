
import './App.css';
import Menu from './component/menu';
import MainWelcome from './component/mainWelcome'
import ExperiencePage from './component/experiencePage';
import Footer from './component/footer';
import Myworks from './component/my-works';
import FutureGoal from './component/futureGoal';
import {  BrowserRouter,  Switch,  Route,  Link,  Routes} from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        
          
            <Menu />
            
            {/* <MainWelcome /> */}
            
            <Routes>
              <Route exact path="/" element={<MainWelcome />} />
              <Route path='/experience' element={<ExperiencePage />} />
              <Route path='/works' element={<Myworks />} />
              <Route path='/futureGoal' element={<FutureGoal />} />

            </Routes>
            {/* <Footer /> */}

          
        


      </BrowserRouter>
    </>
  );
}

export default App;
