import React, { useState } from 'react';
import { Col, Row, Form, Button } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import style from './SearchBox.module.css';

function SearchBox() {
	const [keyword, setKeyword] = useState(); //keyword(입력값)을 인식하게
	let dispatch = useDispatch();
	const searchByName = (e) => {
		e.preventDefault();
    
		dispatch({ type: 'SEARCH_BY_NAME', payload: { keyword } });
	};
	return (
		<form action='' className={style.form} onSubmit={searchByName}>
			<Row>
				<Col xs className={style.input_wrap}>
					<Form.Control type='text' placeholder='검색' onChange={(e) => setKeyword(e.target.value)} />
				</Col>
				<Col xs='auto' className={style.btn_wrap}>
					<Button variant='primary' type='submit'>
						찾기
					</Button>
				</Col>
			</Row>
		</form>
	);
}

export default SearchBox;
