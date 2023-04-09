import { Outlet } from 'react-router-dom'
import AdminHeader from './headerAdmin'

const AdminLayout = () => {
  return <>
    <AdminHeader/>
    <Outlet/>
  </>
    
}

export default AdminLayout