import { Container, Row, Col, Card, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Movie from './Movie';


const MovieList = ({ movies }) => {
  return (

    <>
      <Container>
        <h1>Movies</h1>
      </Container>

      <Container className="mb-5 mt-2">
        <Row md={4} xs={12}>
          {movies.map((m) => (
            <Col>
              <Card style={{ width: '14rem' }}>
                <Card.Body>
                  <Card.Img variant="top" src={m.mlink} />
                  <Card.Title className="mt-4">  {m.title}</Card.Title>
                  <Card.Text className="mt-2">
                    Description: {m.desc}
                  </Card.Text>
                  <Card.Link>
                    <Link to={`//movies/${m.id}`}>
                      <Button variant="dark">Show</Button>
                    </Link>
                  </Card.Link>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>







    

    </>
  )
}

export default MovieList;
