import { useState } from 'react';
import { Container, Row, Col, Card, Modal, Button, Image } from 'react-bootstrap';
import { MovieConsumer } from '../providers/MovieProvider';
import { Link } from 'react-router-dom';


const Movie =({id , title, desc , mlink , deleteMovie})=>{
  const [show, setShow] = useState(false)
  return (
    <Col>
      <Card style={{ width: '8rem' }}>
        <Card.Img variant="top" src={mlink} style={{ height: '150px'}} />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Button variant="primary" onClick={() => setShow(true)}>Show</Button>
        </Card.Body>
      </Card>

      <Modal show={show} onHide={() => setShow(false)}>
        <Modal.Header closeButton>
        </Modal.Header>
        <Modal.Body>
          <Container>
            <Row>
              <Col>
                <h1>{title}</h1>
                <h4>description: {desc}</h4>
                i
                <Link 
                  to={`/${id}/updateCat`}
                  state={{
                    id, 
                    mlink,
                    title,
                    desc,
                  }}
                >
                  <Button>Edit</Button>
                </Link>
                <Button
                  onClick={() => deleteMovie(78)}
                >
                  Delete
                </Button>
              </Col>
              <Col>
                <Image src={mlink} />
              </Col>
            </Row>
          </Container>
        </Modal.Body>
      </Modal>
    </Col>
  )
}

const ConnectedMovie =(props) =>{
    <MovieConsumer>
    { value => <Movie {...props} {...value} />}
    </MovieConsumer>
}
export default ConnectedMovie;