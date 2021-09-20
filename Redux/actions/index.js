export const addContacts=(item)=>{
    return (dispatch) => {
        dispatch({
            type: "addContacts",
            item: item
        })
    }
}

export const addMember=(item)=>{
    return (dispatch) => {
        dispatch({
            type: "addMember",
            item: item
        })
    }
}

export const updateAmount=(number)=>{
    return (dispatch) => {
        dispatch({
            type: "updateMember",
            number: number,
            // amount: amount
        })
    }
}

export const addGroup=(members)=>{
    return (dispatch) => {
        dispatch({
            type: "addGroup",
            members:members
        })
    }
}

export const newMember=(member)=>{
    return (dispatch) => {
        dispatch({
            type: "newMember",
            item:member
        })
    }
}

export const addMemberI=(member)=>{
    return (dispatch) => {
        dispatch({
            type: "addMemberI",
            item:member
        })
    }
}

