//행동 지침
let initialState = {
	//초기값으로 contactList 이름의 빈배열
	contactList: [],
	keyword: '',
};//새 state 추가

function reducer(state = initialState, action) {
	let { type, payload } = action; //action 구조분해 이용
	switch (type) {
		case 'ADD_CONTACT':
			state.contactList.push({name: payload.name, phoneNumber: payload.phoneNumber})
			break;
		case 'SEARCH_BY_NAME':		//케이스 새로 추가
			state.keyword = payload.keyword
			break;
	}
	return {...state};
}

export default reducer;
