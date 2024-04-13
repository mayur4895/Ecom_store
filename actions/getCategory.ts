import { Category } from "@/types";
import axios from "axios"; 

const URl = `${process.env.NEXT_PUBLIC_API_URL}/categories`;
  
 const getCategory = async(id:string):Promise<Category>=>{
    const res =  await axios.get(`${URl}/${id}`);
     return res.data; 
 }

 export default getCategory