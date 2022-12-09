import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import style from './ContactForm.module.css'

function ContactForm() {
	const [name, setName] = useState('');
	const [phoneNumber, setPhoneNumber] = useState('');
	const dispatch = useDispatch();
	const addContact = (e)=>{	//모든 이벤트 핸들러는 e 라는 매개변수를 넘김
		e.preventDefault();
		dispatch({	//넘겨줄 action을 dispatch를 이용해 만들어줌
			type: 'ADD_CONTACT', payload: {name, phoneNumber}
		})
		setName('')
		setPhoneNumber('')
	}
	return (
		<div>	
			<Form onSubmit={addContact}>
				<Form.Group className='mb-3' controlId='formName'>
					<Form.Label>이름</Form.Label>
					<Form.Control className={style.nameInput} type='text' placeholder='이름을 입력해주세요' onChange={(e)=>setName(e.target.value)} value={name} />
				</Form.Group>
				<Form.Group className='mb-3' controlId='formContact'>
					<Form.Label>전화번호</Form.Label>
					<Form.Control type='number' className={style.numberInput} placeholder='전화번호를 입력해주세요' onChange={(e)=>setPhoneNumber(e.target.value)} value={phoneNumber} />
				</Form.Group>
				<Button variant='primary' className={style.addBtn} type='submit'>
					추가
				</Button>
			</Form>
		</div>
	);
}

export default ContactForm;
