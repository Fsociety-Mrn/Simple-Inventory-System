import Login from './pages/Login'
import SendEmail from './pages/SendEmail'
import Overview from './pages/Mainpages/Overview'
import AccountSetting from './pages/Mainpages/AccountSettings'
import AddProduct from './pages/Mainpages/Addproduct'
import EditProduct from './pages/Mainpages/EditProduct'
import ViewProduct from './pages/Mainpages/Viewproduct'
import ViewArchive from './pages/Mainpages/ViewArchive'
import ConfirmDelete from './components/ConfirmDelete'
import ORDER_ConfirmDelete from './components/ORDER_ConfirmDelete'
import AddOrder from './pages/Mainpages/AddOrder'
import OrderList from './pages/Mainpages/OrderList'
import PendingList from './pages/Mainpages/PendingList'
import CancelledList from './pages/Mainpages/CancelledList'
import EditOrder from './pages/Mainpages/EditOrder'
import DraftList from './pages/Mainpages/DraftList'
import Invoices from './pages/Mainpages/Invoices'
import Settings_Category from './pages/Mainpages/Settings_Category'
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
import Homepage from './Homepage/Homepage'
import NotFoud from './NotFoud'

import Footer from './Homepage/Footer'

function App() {
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
        <Route path="/Laclothingpage" element={<Homepage/>}/>
        <Route path="*" element={<NotFoud/>}/>
        <Route path="/" element={<Navigate to="/Laclothingpage"/>}/>
      {/* </Route> */}
        

{/* my Apbbar */}
        <Route element={
          <Privateroute>
            <App_sidebar/>
          </Privateroute>
        }>

          {/* Account Settings */}
          <Route path="/AccountSettings" element={<AccountSetting/>}/>

          {/* Dashboard */}
          <Route path="/Homepage" element={<Overview/>}/>

          {/* Products */}
          
          <Route path="/AddProduct/Settings_Category" element={<Settings_Category/>}/>
          <Route path="/AddProduct" element={<AddProduct/>}/>
          <Route path="/EditProduct" element={<EditProduct/>}/>
          <Route path="/ViewProduct" element={<ViewProduct/>}/>
          <Route path="/ViewArchive" element={<ViewArchive/>}/>

          {/* Orders */}
          <Route path='/AddOrder' element={<AddOrder/>}/>
          <Route path='/EditOrder' element={<EditOrder/>}/>
          <Route path='/OrderList' element={<OrderList/>}/>
          <Route path='/PendingList' element={<PendingList/>}/>
          <Route path='/CancelledList' element={<CancelledList/>}/>
          <Route path='/DraftList' element={<DraftList/>}/>

          {/* Invoice */}
          <Route path='/Invoices' element={<Invoices/>}/>
          
          <Route path="*" element={<Navigate to="/Homepage"/>}/>
          <Route path="/ConfirmDelete" element={<ConfirmDelete/>}/>
          <Route path="/ORDER_ConfirmDelete" element={<ORDER_ConfirmDelete/>}/>
        </Route>

      </Routes>
      <Footer/>

    </div>
</AuthProvider>
  );
}

export default App;
