import { Size } from "@/types";
import axios from "axios";

 


const URl = process.env.NEXT_PUBLIC_API_URL;
 const getSizes = async():Promise<Size[]>=>{
     const res =  await axios.get(`${URl}/sizes`);
     return res.data;

 }

 export default getSizes