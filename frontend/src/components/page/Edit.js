import React, { useEffect, useState } from 'react';
import {connect} from 'react-redux'
import {Button, Modal} from 'react-bootstrap'
import {edit, hideEdit} from './../actioncreator/Library'
import {useFormik} from 'formik'

const Edit = props => {
    const [data, setData] = useState({
        title: props.data.title,
        year: props.data.year,
        number: props.data.number,
        status: props.data.status
    })

    const handleChange = (event) => {
        let {name,value} = event.currentTarget;
        setData({
            ...data,
            [name] : value
        })
    }
    const handleEdit = () =>{
        props.edit(data)
    }
    const handleClose = () => {
        props.hideEdit()
    }

    useEffect(() => {
        setData(props.data)
        console.log(props.data);
    }, [props.data])

    return (
        <Modal show={props.showEdit} onHide={handleClose}>
        <Modal.Header closeButton className="bg-warning text-white">
          <Modal.Title>Edit Library</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="form-group">
            <label htmlFor="title">Title</label>
            <input
              type="text"
              className="form-control"
              id="title"
              name="title"
              value={data.title}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="year">Year</label>
            <input
              type="number"
              className="form-control"
              id="year"
              name="year"
              value={data.year}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="number">Number</label>
            <input
              type="number"
              className="form-control"
              id="number"
              name="number"
              value={data.number}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="status">Status</label>
              <input
                className="form-control"
                type="text"
                id="status"
                name="status"
                value={data.status}
                onChange={handleChange}
              />
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="warning" onClick={handleEdit}>
            Save
          </Button>
        </Modal.Footer>
      </Modal>
    )
}
const mapStateToProps = state => {
    return {
        data: state.dataEdit,
        showEdit: state.showEdit
    }
}

const mapDispatchToProps = {
    edit,
    hideEdit
}

export default connect (mapStateToProps, mapDispatchToProps)(Edit)