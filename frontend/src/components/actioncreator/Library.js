import axios from 'axios'

const url = `https://db-library.herokuapp.com/library`

export const add = data => {
    return dispatch => {
        axios.post(url, data)
        .then(res => {
            dispatch({
                type: `LIBRARY_ADD`,
                payload: res.data
            })
        })
        dispatch({
            type:`LIBRARY_HIDE_ADD`
        })
    }
}

export const deleteData = _id => {
    return dispatch => {
        axios.delete(`${url}/${_id}`)
        dispatch({
            type: `LIBRARY_DELETE`,
            payload: _id
        })
        dispatch({
            type: `LIBRARY_HIDE_DELETE`
        })
    }
}

export const edit = data => {
    return dispatch => {
        axios.put(`${url}/${data._id}`, data)
        .then(res => {
            dispatch({
                type: `LIBRARY_EDIT`,
                payload: res.data
            })
        })
        dispatch({
            type:`LIBRARY_HIDE_EDIT`
        })
    }
}

export const getData = (data) => {
    return dispatch =>{
        axios.get(`${url}/get`, data)
        .then(res => {
            dispatch({
                type: `LIBRARY_GET`,
                payload: res.data
            })
        })
    }
}


export const hideAdd = () => {
    return {type: `LIBRARY_HIDE_ADD`}
}

export const hideEdit = () => {
    return {type: `LIBRARY_HIDE_EDIT`}
}

export const hideDelete = () => {
    return {type: `LIBRARY_HIDE_DELETE`}
}

export const showAdd = () => {
    return {type: `LIBRARY_SHOW_ADD`}
}
export const showEdit = (data) => {
    return {type: `LIBRARY_SHOW_EDIT`, payload: data}
}
export const showDelete = (data) => {
    return {type: `LIBRARY_SHOW_DELETE`, payload: data}
}