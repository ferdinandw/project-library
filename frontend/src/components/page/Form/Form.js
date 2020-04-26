import React from 'react'
import {useFormik} from 'formik';
import {Card, Button, Form, Container, Row } from 'react-bootstrap';
import {add} from './../../actioncreator/Library'
import {connect} from 'react-redux'

const FormLibrary = (props) =>{
    const formik = useFormik({
        initialValues: {
            title: '',
            year:'',
            number:'',
            status: ''
        },
        onSubmit: (value, action) =>{
            props.add(value);
            action.resetForm();
        }
    })
    
    return (
       <Container>
            <Row className="justify-content-md-center">
                    <Card className="text-left">
                        <Card.Body>
                            <Form onSubmit={formik.handleSubmit}>
                                <Form.Group>
                                    <Form.Label>Title</Form.Label>
                                    <Form.Control 
                                    type="text" 
                                    name="title" 
                                    onChange={formik.handleChange} 
                                    value={formik.values.title}
                                    placeholder="Enter Book Title">
                                    </Form.Control>
                                </Form.Group>
                                <Form.Group>
                                    <Form.Label>Year</Form.Label>
                                    <Form.Control 
                                    type="number" 
                                    name="year" 
                                    onChange={formik.handleChange} 
                                    value={formik.values.year}
                                    placeholder="Enter Book Year">
                                    </Form.Control>
                                </Form.Group>
                                <Form.Group>
                                    <Form.Label>Number</Form.Label>
                                    <Form.Control 
                                    type="number" 
                                    name="number" 
                                    onChange={formik.handleChange} 
                                    value={formik.values.number}
                                    placeholder="Enter Book Number">
                                    </Form.Control>
                                </Form.Group>
                                <Form.Group>
                                    <Form.Label>Status</Form.Label>
                                    <Form.Control 
                                    type="text" 
                                    name="status" 
                                    onChange={formik.handleChange} 
                                    value={formik.values.status}
                                    placeholder="Enter Book Status">
                                    </Form.Control>
                                </Form.Group>
                                <Button type="submit">Submit</Button>
                            </Form>
                        </Card.Body>
                    </Card>
            </Row>
        </Container>
    )
    
}


const mapDispatchToProps = {
    add
}

export default connect(null,mapDispatchToProps)(FormLibrary);