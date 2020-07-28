import React, { useState, useContext } from 'react';
import { Container, Col, Form, Card, Jumbotron, Button, CardColumns } from 'react-bootstrap';

//import context for global state
import SavedWineContext from '../utils/SavedWineContext';

import { saveWine, searchGlobalWine } from '../utils/API';

function SearchWines() {
    //create state for holding returned google api data
    const [searchedWines, setSearchedWines] = useState([]);
    //create state for holding our search field data
    const [searchInput, setSearchInput] = useState('');

    //get saved wines ftom app.js on load
    const { wines: savedWines, getSavedWines } = useContext(SavedWineContext);

    //create method to search for wines and set state on form submit
    const handleFormSubmit = event => {
        event.preventDefault();

        if (!searchInput) {
            return false;
        }

        searchGlobalWine(searchInput)
            .then(({ data }) => {
                // const wineData = data.items.map((wine) => ({
                //     // wineId: wine.id,
                //     // authors: wine.volumeInfo.authors || ['No author to display'],
                //     // title: wine.volumeInfo.title,
                //     // description: wine.volumeInfo.description,
                //     // image: wine.volumeInfo.imageLinks?.thumbnail || '',
                // }));
                // console.log(wineData);
                // return setSearchedWines(wineData);
                console.log(data)
            })
            .then(() => setSearchInput(''))
            .catch((err) => console.log(err));
    };

    //create function to handle saving a wine to our database
    const handleSaveWine = (wineId) => {
        //find the wine in `searchedWines` state by the matching id
        const wineToSave = searchedWines.find((wine) => wine.wineId === wineId);

        //save the wines data to our api
        saveWine(wineToSave)
            .then(() => getSavedWines())
            .catch((err) => console.log(err));
    }

    return (
        <>
            <Jumbotron fluid bg='dark' className='text-light bg-dark'>
                <Container>
                    <h1>Search for Wines</h1>
                    <Form onSubmit={handleFormSubmit}>
                        <Form.Row>
                            <Col xs={12} md={8}>
                                <Form.Control
                                    name='searchInput'
                                    value={searchInput}
                                    onChange={(e) => setSearchInput(e.target.value)}
                                    type='text'
                                    size='lg'
                                    placeholder='Search for a wine'
                                />
                            </Col>
                            <Col xs={12} md={4}>
                                <Button type='submit' size='lg' className=''>Submit Search</Button>
                            </Col>
                        </Form.Row>
                    </Form>
                </Container>
            </Jumbotron>
            <Container fluid>
                <h2>{searchedWines.length ? `Viewing ${searchedWines.length} results:` : 'Search for a wine to begin!'}</h2>
                <CardColumns>
                    {searchedWines.map((wine) => {
                        return (
                            <Card key={wine.winId} border='dark'>
                                {wine.image ? <Card.Img src={wine.image} alt={`The cover for ${wine.title}`} variant='top' /> : null}
                                <Card.Body>
                                    <Card.Title>{wine.title}</Card.Title>
                                    <p className='small'>Authors: {wine.authors.join(', ')}</p>
                                    <Card.Text>
                                        {wine.description}
                                    </Card.Text>
                                    <Button
                                        disabled={savedWines.some((savedWine) => savedWine.wineId === wine.wineId)} className='btn-block btn-info'
                                        onClick={() => handleSaveWine(wine.wineId)}>
                                        {savedWines.some((savedWine) => savedWine.wineId === wine.wineId)
                                            ? 'This wine has already been saved!'
                                            : 'Save this wine!'}
                                    </Button>
                                </Card.Body>
                            </Card>
                        )
                    })}
                </CardColumns>
            </Container>
        </>
    );
}

export default SearchWines;