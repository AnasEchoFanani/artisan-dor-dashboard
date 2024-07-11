import axios from 'axios'

const apiPrefix = 'http://localhost:8080/api'

export const getProducts = async (params: any): Promise<any> => {
    const response = await axios.get(`${apiPrefix}/product/getAllProduct`, {
        params: params,
    })
    return response.data
}

export const getOrders = async (params: any): Promise<any> => {
    const response = await axios.get(`${apiPrefix}/order/getAllOrders`, {
        params: params,
    })
    return response.data
}

export const saveProduct = async (params: any): Promise<any> => {
    const response = await axios.post(`${apiPrefix}/product/saveProduct`, {
        params: params,
    })
    return response.data
}
