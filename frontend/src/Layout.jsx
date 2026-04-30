import {Outlet} from 'react-router-dom'
import Header from './Components/Header/Header'
import { Toaster } from 'react-hot-toast'
function Layout() {
  return (
    <>
      <Toaster position='bottom-center' reverseOrder={false}/>
      <Header />
      <Outlet />
    </>
  )
}

export default Layout
