import axios from "axios";

export default function salesApi(apiPrefix: string) {
    const getProducts = async (params: any): Promise<any> => {
        const response = await axios.get(`${apiPrefix}/product/getAllProduct`, {
            params: params
        });
        return response.data;
    };

    const getOrders = async(params: any): Promise<any> => {
        const response = await axios.get(`${apiPrefix}/order/getAllOrders`, {
            params: params
        });
        return response.data;
    }

    
}
