//search 적용
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import ContactItem from './ContactItem';
import SearchBox from './SearchBox';

function ContactList() {
	const { contactList, keyword } = useSelector((state) => state);
	// search 할 때 쓰이는 keyword 값도 받아옴
	const [filteredList, setFilteredList] = useState([]);
	useEffect(() => {
		if (keyword !== '') {
			//keyword가 (search에서) 입력이 되었을때
			let book = contactList.filter((item) => item.name.includes(keyword));
			setFilteredList(book);
		} else {
			//입력값이 없을 때
			setFilteredList(contactList);
		}
	}, [keyword, contactList]);
	return (
		<div>
			<SearchBox />
			<div>
				인원 : {filteredList.length} 명
				{filteredList.map((item) => (
					<ContactItem item={item} />
					//search 적용후 필터링 된 리스트
				))}
			</div>
		</div>
	);
}

export default ContactList;
