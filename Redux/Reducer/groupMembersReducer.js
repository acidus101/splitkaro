let initialState = {
    groups:[],
    contacts:[],
    temp:[]
}
const reducer = (state = initialState, action) => {
    switch(action.type){
        case "addContacts":
            return{
                ...state,
                contacts:action.item                
            }
        case "addMember":
            return {
                ...state,
                temp:[...state.temp, action.item]
            };
        case "updateMember":
            let arr = state.temp.filter(el => el.number === action.number)
            let arr2 = state.temp.filter(el => el.number !== action.number)
            arr[0].paid = !arr[0].paid;
            return { 
                ...state,
                temp:[...arr2,arr[0]]
            };
        case "addGroup":
            return {
                ...state,
                groups:[...state.groups, action.members],
                temp: []
            }
        default:
            return state;
    }
}

export default reducer;