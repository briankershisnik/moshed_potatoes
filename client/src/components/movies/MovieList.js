import { Container, Row, Col, Card } from 'react-bootstrap';

const MovieList = ({ movies }) => {

  return (
    <Container>
      <h1>Movies</h1>
      { movies.map( c =>
        <Col>
          <Card style={{ width: '18rem' }}>
            <Card.Body>
              <Card.Title>{c.title}</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">c.mlink</Card.Subtitle>
              <Card.Text>
                Some quick example text to build on the card title and make up the bulk of
                the card's content.
              </Card.Text>
              <Card.Link href="#">Card Link</Card.Link>
              <Card.Link href="#">Another Link</Card.Link>
            </Card.Body>
          </Card>
        </Col>
        
        )}
    </Container>
  )
}

export default MovieList;