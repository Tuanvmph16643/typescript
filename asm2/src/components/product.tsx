import {Link} from 'react-router-dom'
import { IProduct } from "../models";

type Props = {
    data: IProduct
}

const Product = ({data}: Props) => {
    return <Link to={`product/${data.id}`} className="block hover: border-solid rounded-tr ">
        <img
            alt="Art"
            src={data.images?.[0].base_url}
            className="h-64 w-full object-cover sm:h-80 lg:h-96"
        />

        <h3 className="mt-4 text-lg font-bold text-gray-900 sm:text-xl">
            {data.name}
        </h3>

        <p className="mt-2 max-w-sm text-red-500 text-xl">
            {data.price} ₫
        </p>
        <p className="mt-2 max-w-sm text-gray-700 ">
            {data.original_price} ₫
        </p>

    </Link>
}

export default Product;