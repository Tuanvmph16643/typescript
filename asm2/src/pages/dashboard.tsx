import { useEffect, useState } from "react"
import { Link, useNavigate, useParams } from 'react-router-dom'

import { getAll, remove } from "../api/products"
import { IProduct } from "../models"

const Dashboard = () => {
    const [products, setProducts] = useState<IProduct[]>([])
    const navigate = useNavigate()
    const fetchProducts = async () => {
        const { data } = await getAll()
        setProducts(data)
    }
    // const deleteProduct = async ()=>{
    //     const id = useParams()
    //     const {data} = await remove(id)
    // }

    useEffect(() => {
        fetchProducts()
    }, [])

    return <>
        <h1 >Product list</h1>
        <div className="overflow-x-auto rounded-lg border border-gray-200">
            <table className="min-w-full divide-y-2 divide-gray-200 text-sm">
                <thead>
                    <tr>
                        <th
                            className="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900"
                        >
                            Tên sản phẩm
                        </th>
                        <th
                            className="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900"
                        >
                            Giá
                        </th>
                        <th
                            className="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900"
                        >
                            Giá khuyến mãi
                        </th>
                        <th
                            className="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900"
                        >
                            Hình ảnh
                        </th>
                        <th
                            className="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900"
                        >
                            Thao tác
                        </th>
                    </tr>
                </thead>

                <tbody className="divide-y divide-gray-200">
                    {products.map(product => (
                        <tr>
                            <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                                <Link to={`/admin/update/${product.id}`}>
                                    {product.name}
                                </Link>
                            </td>
                            <td className="whitespace-nowrap px-4 py-2 text-gray-700">{product.price}</td>
                            <td className="whitespace-nowrap px-4 py-2 text-gray-700">{product.original_price}</td>
                            <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                                <img className="w-[20%]" src={product.images?.[0].base_url} alt="" />
                            </td>
                            <td className="text-center">
                                <button className="bg-red-600 text-white rounded-md p-2">
                                    <Link to={`/admin/remove/${product.id}`}>Xoá</Link>
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>

    </>
}

export default Dashboard