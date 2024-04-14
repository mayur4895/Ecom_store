'use client'
import React from 'react'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import UseModal from '@/hooks/use-modal-store'


interface ModalProps{
  children:React.ReactNode;
  title?:string;
  description?:string;
}

const Modal = ({children,title,description}:ModalProps) => {
const { onClose,Isopen} = UseModal()

  return (
    <div>
     <Dialog open={Isopen} onOpenChange={onClose}>
   
  <DialogContent className=''>
    <DialogHeader>
      <DialogTitle>{title}</DialogTitle>
      <DialogDescription>
        {description}
      </DialogDescription>
    </DialogHeader>
    {children}
  </DialogContent>
</Dialog>

    </div>
  )
}

export default Modal
