import Login from './pages/Login'
import SendEmail from './pages/SendEmail'
import Overview from './pages/Mainpages/Overview'
import AccountSetting from './pages/Mainpages/AccountSettings'
import AddProduct from './pages/Mainpages/Addproduct'
import EditProduct from './pages/Mainpages/EditProduct'
import ViewProduct from './pages/Mainpages/Viewproduct'
import ViewArchive from './pages/Mainpages/ViewArchive'
import ConfirmDelete from './components/ConfirmDelete'
import AddOrder from './pages/Mainpages/AddOrder'
import './App.css';
import {
  Routes,
  Route,
  Outlet,
  Navigate
} from "react-router-dom";
import Appbar from './components/Appbar';
import { AuthProvider } from './AuthenticationCRUD/Authentication'
import { Privateroute , NotPrivateroute} from './AuthenticationCRUD/Privateroute';
import { useAuth } from './AuthenticationCRUD/firebase'
import { useState } from 'react';




function App() {
  const [rout,setRout] = useState()
  const authens = useAuth()

  const Routa = () => {

    if (authens) return(<><Navigate to="/Homepage"/></>)
    if (!authens)return (<>

    
    <Outlet /></>)
    
  }
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

      {/* <Route element={<Routa/>}> */}
        <Route path="/Login" element={authens ?<Navigate to="/Homepage"/> : <Login/> }/>
        <Route path="/Sendemail" element={authens ?<Navigate to="/Homepage"/> : <SendEmail/>}/>
        <Route path="*" element={authens ?<Navigate to="/Homepage"/> : <Navigate to="/Login"/>}/>
      {/* </Route> */}
        

{/* my Apbbar */}
        <Route  element={
          <Privateroute>
            <App_sidebar/>
          </Privateroute>
        }>

          {/* Account Settings */}
          <Route path="/AccountSettings" element={<AccountSetting/>}/>

          {/* Dashboard */}
          <Route path="/Homepage" element={<Overview/>}/>

          {/* Products */}
          <Route path="/AddProduct" element={<AddProduct/>}/>
          <Route path="/EditProduct" element={<EditProduct/>}/>
          <Route path="/ViewProduct" element={<ViewProduct/>}/>
          <Route path="/ViewArchive" element={<ViewArchive/>}/>

          {/* Orders */}
          <Route path='/AddOrder' element={<AddOrder/>}/>


          <Route path="*" element={<Navigate to="/Homepage"/>}/>
          <Route path="/ConfirmDelete" element={<ConfirmDelete/>}/>
        </Route>

      </Routes>


    </div>
</AuthProvider>
  );
}

export default App;
