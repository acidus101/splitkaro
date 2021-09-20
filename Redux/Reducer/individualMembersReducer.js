let initialState = {
    people:[]
}

const reducer = (state = initialState, action) => {
    switch(action.type){
        case "addMemberI":
            return {
                ...state,
                people:[...state.people, action.item]
            };
        default:
            return state;
    }
}

export default reducer;