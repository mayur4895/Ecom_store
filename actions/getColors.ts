import { Color } from "@/types";
import axios from "axios";
 

const URl = process.env.NEXT_PUBLIC_API_URL;
 const getColors = async():Promise<Color[]>=>{
     const res =  await axios.get(`${URl}/colors`);
     return res.data;

 }

 export default getColors