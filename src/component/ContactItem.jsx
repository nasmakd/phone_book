import React from 'react'
import { Col, Row } from 'react-bootstrap'
import style from './ContactItem.module.css'

function ContactItem({item}) {
  return (
    <div className={style.box}>
      <Row>
        <Col xs='auto'>
          <img src="https://i1.sndcdn.com/avatars-000853355806-dqybao-t500x500.jpg" alt="" />
        </Col>
        <Col xs='auto' className={style.text}>
          <h5>{item.name}</h5>
          <p>{item.phoneNumber}</p>
        </Col>
      </Row>
    </div>
  )
}

export default ContactItem