import React from 'react'
import {Row,Col} from "react-bootstrap"
import storeItems from '../data/sroteItems.json'
import StoreItem from '../components/StoreItem'
const Store = () => {
  return (
    <div>
        <Row mb={2} xs={1} lg={3} className='g-3'> 
        {storeItems.map((item) =>{
            return <Col key={item.id}>
            <StoreItem {...item}/>
            </Col>
        })}

        </Row>
    </div>
  )
}

export default Store
