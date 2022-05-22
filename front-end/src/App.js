import Login from './pages/Login'
import SendEmail from './pages/SendEmail'
import Overview from './pages/Mainpages/Overview'
import './App.css';
import {
  Routes,
  Route,
  Outlet,
  Navigate
} from "react-router-dom";
import Appbar from './components/Appbar';
import { AuthProvider } from './AuthenticationCRUD/Authentication'
import { Privateroute } from './AuthenticationCRUD/Privateroute';
import { useAuth } from './AuthenticationCRUD/firebase'




function App() {
  const authens = useAuth()
  const App_sidebar = () => {
  return(
    <>
      <Appbar />
      <Outlet />
    </>
    )
  }

  return (
<AuthProvider>
    <div>

      <Routes>
   
        <Route path="/Login" element={<Login/>}/>
        <Route path="/Sendemail" element={<SendEmail/>}/>
        <Route path="*" element={<Navigate to="/Login"/>}/>

{/* my Apbbar */}
        <Route  element={
          <Privateroute>
            <App_sidebar/>
          </Privateroute>
        } >
          <Route path="/Homepage" element={<Overview/>}/>
          {/* <Route path="*" element={<Navigate to="/Homepage"/>}/> */}
        </Route>

      </Routes>


    </div>
</AuthProvider>
  );
}

export default App;
