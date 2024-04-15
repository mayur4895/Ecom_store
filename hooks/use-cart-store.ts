
import { Product } from "@/types";
import toast from "react-hot-toast";
import {create } from "zustand";
import {persist , createJSONStorage } from "zustand/middleware"

 

interface CartStore{
    
    Items:Product[];
    addItem:(data:Product)=>void;
     removeItem:(id:string)=>void; 
    removeAll:()=>void;
} 

 const useCartStore = create(
    persist<CartStore>((set,get)=>({
         Items:[], 
         
         addItem:(data:Product)=>{ 
         const currentItem = get().Items
         const existingItem = currentItem.find(item => item.id === data.id)
         if(existingItem){
            return toast("Item Already Added To Cart");
         }

            set({Items:[...currentItem,data]})
            toast.success("Item Added To Cart");
        },
         removeItem:(id:string)=>{ 
            set({Items:[...get().Items.filter(item=>item.id !== id)]})
             toast.success("Item Removed From Cart");
        },
         removeAll:()=>set({Items:[]})
         
    }),{
        name:"cart",
        storage:createJSONStorage(()=>localStorage)
    })
 )


export default useCartStore ;