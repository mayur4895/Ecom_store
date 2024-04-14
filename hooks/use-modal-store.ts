import { Product } from "@/types";
import {create} from "zustand";


// interface ModalData{

// }




interface ModalStore{
    
    data?:Product;
    onOpen:(data:Product)=>void;
    Isopen:boolean; 
    onClose:()=>void;
}


const UseModal =   create<ModalStore>((Set)=>({
    
    onOpen:(data:Product)=>{Set({
        data,
        Isopen:true
    })},
    Isopen:false,
    onClose:()=>{Set({Isopen:false})}
}))


export default UseModal;