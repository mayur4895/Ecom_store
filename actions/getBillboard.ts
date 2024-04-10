import axios from "axios";

 


const URl = `${process.env.NEXT_PUBLIC_API_URL}/billboards`;
 export async function getBillboard(id:string){
     const res =  await axios.get(`${URl}/${id}`);
     return res.data;

 }