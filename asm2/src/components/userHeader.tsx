import { useLocalStorage } from "../hooks"
import logo from '../asset/logo.png'
import { Link } from "react-router-dom"


const UserHeader = () => {
    const [user, setUser] = useLocalStorage('user', null)
    return <header className="bg-red-500">
        <div className="container mx-auto flex gap-4 items-center">
            <img className="w-[50px]" src={logo} alt="" />
            <input className="grow" type="text" placeholder="Search"/>
            <p className="text-white">{user ? `Xin chào: ${user.firstName}` : <Link to="/signin" className="bg-blue-500 hover:bg-blue-700 text-white font-semibold py-1 px-4 border border-blue-500 hover:border-transparent rounded-full">Đăng nhập</Link>}</p>
        </div>
    </header>
}

export default UserHeader