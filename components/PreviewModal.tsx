import React from 'react'
import Modal from './ui/modal' 
import Container from './ui/container'
import { Gallery } from './Gallery'
import ProductInfo from './ProductInfo'
import UseModal from '@/hooks/use-modal-store'

const PreviewModal = () => {
    const {data} = UseModal();

    if(!data){
        return null;
    }
  return (
     <Modal>
      
      
<div className='md:grid md:grid-cols-2 md:items-start md:gap-x-8     my-10  mx-8'>
<div >
 <Gallery productItem={data}/>
  </div>
  <div>
    <ProductInfo productItem={data}/>
  </div>
</div> 

      
     </Modal>
  )
}

export default PreviewModal
