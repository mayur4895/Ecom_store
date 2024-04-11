import { Billboard } from "@/types";
import axios from "axios";

 


const URl = `${process.env.NEXT_PUBLIC_API_URL}/billboards`;
  
 const getBillboard = async(id:string):Promise<Billboard>=>{
    const res =  await axios.get(`${URl}/${id}`);
     return res.data;

 }

 export default getBillboard