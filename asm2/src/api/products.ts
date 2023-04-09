import instance from ".";
import { IProduct, updateForm } from "../models";

export const getAll = () => {
    const uri = "/products"
    return instance.get(uri)
}

export const getById = (id: number) => {
    const uri = "/products/" + id
    return instance.get(uri)
}

export const update = (id: string, body: updateForm) => {
    const uri = "/products/" + id
    return instance.put(uri, body)
}

// export const create = (body: ) => {
//     const uri = '/admin/products'
//     return instance.post(uri, body)
// }

export const remove = (id: string) => {
    const uri = '/product' + id
    return instance.delete(uri)
}