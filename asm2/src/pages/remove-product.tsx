import { useParams } from "react-router-dom"
import { useNavigate } from "react-router-dom"
import { remove } from "../api/products"
import { useEffect } from "react"

const Removeproduct = () => {
    const {id} = useParams()
    const navigate = useNavigate()

    const removeProduct = async (id: string) => {
        const {data} = await remove(id)
        navigate('/admin')
    }
    useEffect(()=>{
        removeProduct
    },[])
} 

export default Removeproduct