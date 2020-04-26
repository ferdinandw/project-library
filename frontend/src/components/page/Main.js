import React, {useEffect} from 'react'
import {connect} from 'react-redux';
import {Table} from'react-bootstrap';
import {getData} from './../actioncreator/Library'
import Item from './Item'

const Main = props => {
    
    useEffect(() => {
        if (!props.data.length)
        props.getData();
    }, [])

    const tampilkanData = props.data.map ((item,index) => {
        return (
            <Item key={index} data={item}/>
        )
    },[])

    return (
        <div>
            <Table striped bordered>
                <thead>
                    <tr>
                        <td>Title</td>
                        <td>Year</td>
                        <td>Number</td>
                        <td>Status</td>
                        <td>Edit</td>
                        <td>Delete</td>
                    </tr>
                </thead>
                <tbody>
                    {tampilkanData}
                </tbody>
            </Table>
        </div>
    )
}

const mapStateToProps = state => {
    return {
       data: state.library.data
}
}
const mapDispatchToProps = {
    getData
}
export default connect(mapStateToProps,mapDispatchToProps)(Main)

// export default connect(mapStateToProps)(Main)