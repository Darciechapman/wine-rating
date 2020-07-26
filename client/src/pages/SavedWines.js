import React, { useContext } from 'react';
import { Jumbotron, Container, CardColumns, Card, Button } from 'react-bootstrap';

//import context for global state
import SavedWineContext from '../utils/SavedWineContext';

//import getSavedWines and deleteWine from API file
import * as API from '../utils/API';

function SavedWines(){

    const { wines: savedWines, getSavedWines } = useContext(SavedWineContext);

    //create function that accepts the wine's mongo_id value as param and deletes the wine from the database
    const handleDeleteWine = (mongoId) => {
        API.deleteWine(mongoId)
            .then(() => getSavedWines())
            .catch((err) => console.log(err));
    }
    return (
        <>
        <Jumbotron fluid bg='dark' className='text-light bg-dark'>
                <Container>
                    <h1>Viewing Saved Wines</h1>
                </Container>
            </Jumbotron>
            <Container fluid>
            <h2>{savedWines.length ? `Viewing ${savedWines.length} saved wines:` : 'You have no saved wines!'}</h2>
            <CardColumns>
                    {savedWines.map((wine) => {
                        return (
                            <Card key={wine._id} border='dark'>
                                {wine.image ? <Card.Img src={wine.image} alt={`The cover for ${wine.title}`} variant='top' /> : null}
                                <Card.Body>
                                    <Card.Title>{wine.title}</Card.Title>
                                    <p className='small'>Authors: {wine.authors.join(', ')}</p>
                                    <Card.Text>
                                        {wine.description}
                                    </Card.Text>
                                    <Button className='btn-block btn-danger' onClick={() => handleDeleteWine(wine._id)}>Delete this Wine!</Button>
                                </Card.Body>
                            </Card>
                        )
                    })}
                </CardColumns>
            </Container>
        </>
    );
}

export default SavedWines;