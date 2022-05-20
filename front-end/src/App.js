import Login from './pages/Login'
import Overview from './pages/Overview'
import './App.css';
import {
  Routes,
  Route,
  Outlet,
  Navigate
} from "react-router-dom";
import Appbar from './components/Appbar';




function App() {

  const App_sidebar = () => {
  return(
    <>
      <Appbar />
      <Outlet />
    </>
    )
  }
  
  return (
    <div>
  
      <Routes>
   
        <Route path="MERN-stack" element={<Login/>}/>
        <Route path="*" element={<Navigate to="MERN-stack"/>}/>

{/* my Apbbar */}
        <Route element={<App_sidebar/>} >
          <Route path="MERN-stack/Homepage" element={<Overview/>}/>
        </Route>

      </Routes>


    </div>
  );
}

export default App;
