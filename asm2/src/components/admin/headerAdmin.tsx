import { useLocalStorage } from "../../hooks"
import logo from '../../asset/logo.png'
import { Link } from "react-router-dom"
import { useNavigate } from "react-router-dom"


const AdminHeader = () => {
    const [user, setUser] = useLocalStorage('user', null)
    const navigite = useNavigate()
    if(!user){
        navigite('/')
    }
    return <header className="bg-blue-500">
        <div className="container mx-auto flex gap-4 items-center">
            <img className="w-[50px]" src={logo} alt="" />
            <input className="grow" type="text" placeholder="Search"/>
            <p className="text-white">Xin chào: {user &&  user.firstName}</p>
        </div>
    </header>
}

export default AdminHeader