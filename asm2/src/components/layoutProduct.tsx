import {Outlet} from 'react-router-dom'

import UserFooter from "./userFooter"
import UserHeader from "./userHeader"

const LayoutProduct = () => {
    return <>
        <UserHeader/>
        <Outlet/>
        <UserFooter/>
    </>
}

export default LayoutProduct