import { Product } from "@/types";
import axios from "axios"; 

const URl = `${process.env.NEXT_PUBLIC_API_URL}/products`;
  
 const getProduct = async(id:string):Promise<Product>=>{
    const res =  await axios.get(`${URl}/${id}`);
     return res.data; 
 }

 export default getProduct