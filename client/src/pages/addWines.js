import React, { Component } from 'react';
import { Col, Form, Button, Rater } from 'react-bootstrap';
import Rater from 'react-rater'
import 'react-rater/lib/react-rater.css'
// import { render } from 'react-dom';

// ract rating component ===  https://www.youtube.com/watch?v=eDw46GYAIDQ

//import context for global state
// import SavedWineContext from '../utils/SavedWineContext';

//import getSavedWines and deleteWine from API file
// import * as API from '../utils/API';

// class App extends Component {
//     render() {
//         return (
//             <StarRating
//                 defaultValue={5}
//                 min={0}
//                 max={5}
//                 step={0.5} />
//         )
//     }
// }
render() {
    return (<Rater total={5} rating={2} />)
}


function AddWines() {

    //<form onSubmit={handleFormSubmit}>
    return (
        <Form>
            <Form.Row>
                <Col xs={12} md={8}>
                    <Form.Group controlId="wineName">
                        <Form.Label>Wine name</Form.Label>
                        <Form.Control type="name" placeholder="Enter wine name" />
                    </Form.Group>
                    <Form.Group controlId="wineYear">
                        <Form.Label>Wine year</Form.Label>
                        <Form.Control type="name" placeholder="Enter wine year" />
                    </Form.Group>
                    <Form.Group controlId="wineDescription">
                        <Form.Label>Wine description</Form.Label>
                        <Form.Control type="name" placeholder="Enter wine description" />
                    </Form.Group>
                    
                    <Form.Group controlId="wineRating">
                        <Rater onRate={({rating}) => {}}/>
                        <Rater rating={4} total={5} />
                    </Form.Group>
                </Col>
                <Col xs={12} md={4}>
                    <Button type='submit' size='lg' className=''>Submit Search</Button>
                </Col>
            </Form.Row>
        </Form>
    )
}

export default AddWines 