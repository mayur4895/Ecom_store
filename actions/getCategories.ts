import axios from "axios";

 


const URl = process.env.NEXT_PUBLIC_API_URL;
 export async function getCategories(){
     const res =  await axios.get(`${URl}/categories`);
     return res.data;

 }