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
import { AuthProvider } from './AuthenticationCRUD/Authentication'
import { Privateroute } from './AuthenticationCRUD/Privateroute';
import { NotPrivateroute } from './AuthenticationCRUD/NotAprivate'




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
<AuthProvider>
    <div>

      <Routes>
   
        <Route path="/Login" element={
          <NotPrivateroute>
            <Login/>
          </NotPrivateroute>
        }/>
        <Route path="*" element={<Navigate to="/Login"/>}/>

{/* my Apbbar */}
        <Route element={
          <Privateroute>
            <App_sidebar/>
          </Privateroute>
        } >
          <Route path="/Homepage" element={<Overview/>}/>
          <Route path="*" element={<Navigate to="/Homepage"/>}/>
        </Route>

      </Routes>


    </div>
</AuthProvider>
  );
}

export default App;
