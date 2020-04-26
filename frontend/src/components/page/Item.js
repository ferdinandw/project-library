import React from 'react';

import {connect} from 'react-redux'
import {deleteData, showDelete, showEdit} from './../actioncreator/Library'
import {Button} from 'react-bootstrap'
const Item = props => {
    const handleEdit = () => {
        props.showEdit(props.data)
    }
    const handleDelete = () => {
        props.showDelete(props.data)
    }
    return (
        <tr>
            <td>{props.data.title}</td>
            <td>{props.data.year}</td>
            <td>{props.data.number}</td>
            <td>{props.data.status}</td>
            <td><Button variant="primary" onClick={handleEdit}>Edit</Button></td>
            <td><Button variant="danger" onClick={handleDelete}>DELETE</Button></td>
        </tr>
    )
}

const mapDispatchToProps = {
    deleteData,
    showDelete,
    showEdit
}

export default connect(null,mapDispatchToProps)(Item)