import React from 'react';
import { Col, Form, Button } from 'react-bootstrap';

//import context for global state
// import SavedWineContext from '../utils/SavedWineContext';

//import getSavedWines and deleteWine from API file
// import * as API from '../utils/API';

function AddWines() {
    //<form onSubmit={handleFormSubmit}>
    return (
        <Form>
            <Form.Row>
                <Col xs={12} md={8}>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" />
                        <Form.Text className="text-muted">
                            We'll never share your email with anyone else.
                        </Form.Text>
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" />
                    </Form.Group>
                    
                    <Form.Group controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" label="Check me out" />
                    </Form.Group>
                </Col>
                <Col xs={12} md={4}>
                    <Button type='submit' size='lg' className=''>Submit Search</Button>
                </Col>
            </Form.Row>
        </Form>
    )
}

export default AddWines;