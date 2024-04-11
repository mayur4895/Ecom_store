import { Category } from "@/types";
import axios from "axios";

 


const URl = process.env.NEXT_PUBLIC_API_URL;
 const getCategories = async():Promise<Category[]>=>{
     const res =  await axios.get(`${URl}/categories`);
     return res.data;

 }

 export default getCategories