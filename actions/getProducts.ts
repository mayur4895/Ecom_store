import { Product } from "@/types";
import axios from "axios";
import qs from "query-string";



 


const URl = `${process.env.NEXT_PUBLIC_API_URL}/products`;

interface Query {
    categoryId?: string;
    colorId?: string;
    sizeId?: string;
    isFeatured?: boolean;
}
const  getProducts = async(query:Query):Promise<Product[]> =>{
    const url = qs.stringifyUrl({
        url:URl,
        query:{
            categoryId:query.categoryId,
            colorId:query.colorId,
            sizeId:query.sizeId,
            isFeatured:query.isFeatured
        }
    });
     const res =  await axios.get(url);
     return res.data;

 }

 export default getProducts