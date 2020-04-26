
const initialState = {
    data: [],
    dataDelete: {},
    dataEdit: {},
    showAdd: false,
    showEdit: false,
    showDelete: false
}

const Library = (state = initialState, action) => {
    let data;
    let {type, payload} = action;
    switch(type){
        case `LIBRARY_ADD`:
            return {...state, data:[...state.data, payload]};

        case 'LIBRARY_DELETE':
            
            data = state.data.filter(item => {
                if (item.id === payload){
                    return false
                } else {
                    return true;
                }
            })
            return {...state, data: data}

        case 'LIBRARY_EDIT':
            data = state.map(item => {
                console.log(state)
                if(item.id === payload.id){
                    return payload;
                } else {
                    return item;
                }
            })
            return {...state, data: data}

        case `LIBRARY_GET`:
            return {...state, data: payload}
        
        case 'LIBRARY_HIDE_ADD':
            return {...state, showAdd: false}

        case 'LIBRARY_HIDE_DELETE':
            return{...state, showDelete: false} 
        
        case 'LIBRARY_HIDE_EDIT':
            return {...state,showEdit : false}

        case 'LIBRARY_SHOW_ADD':
            return {...state, showAdd: true}
    
        case 'LIBRARY_SHOW_DELETE':
            return{...state, showDelete: true, dataDelete: payload} 
            
        case 'LIBRARY_SHOW_EDIT':
            return {...state,showEdit : true, dataEdit: payload}
        
        default: return state;
    }
} 

export default Library