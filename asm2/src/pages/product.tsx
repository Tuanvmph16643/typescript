import { useEffect, useState } from 'react'
import {useParams} from 'react-router-dom'
import { getById } from '../api/products'
import ProDetail from '../components/productdetail'

const ProductDetail = () => {
    const {id} = useParams()
    const [product, setProduct] = useState({})

    const fetchProduct = async () => {
        const { data } = await getById(id)
        setProduct(data)
    }

    useEffect(()=>{
        fetchProduct()
    },[])
    return <div className='m-10'>
        <ProDetail data={product}/>
    </div>
}

export default ProductDetail