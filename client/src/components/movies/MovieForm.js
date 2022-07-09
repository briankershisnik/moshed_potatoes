import { useState, useEffect } from 'react';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import Flash from '../shared/Flash';
import { useParams, useLocation } from 'react-router-dom';
import { MovieConsumer } from '../providers/MovieProvider';

const MovieForm = ({ addMovie, errors, setErrors, updateMovie }) => {
  const [movie, setMovie] = useState({ title: '', desc: '', mlink: '' })
  
  const { id } = useParams()
  const location = useLocation()
  const { title, desc, mlink} = location.state

  useEffect( () => {
    if (id) {
      setMovie({ title , desc, mlink})
    }
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault()
    if (id) {
      updateMovie(id, movie)
    } else {
      addMovie(movie)
    }
    setMovie({ title: '', desc: '', mlink: '' })
  }

  return(
    <>
      { errors ?
        <Flash 
          variant={errors.variant}
          msg={errors.msg}
          setErrors={setErrors}
        />
        : null
      }
      <h1 className='text-center'>
        { id ? 'Update' : 'Create'} movie
      </h1>
      <Form onSubmit={handleSubmit}>
        <Container>
          <Row>
            <Col>
              <Form.Group className="mb-3">
                <Form.Label>Movie Name</Form.Label>
                <Form.Control
                  name='name'
                  value={movie.title}
                  onChange={(e) => setMovie({ ...movie, title: e.target.value })}
                  required
                />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group className="mb-3">
                <Form.Label>description</Form.Label>
                <Form.Control
                  name='description'
                  value={movie.desc}
                  onChange={(e) => setMovie({ ...movie, desc: e.target.value })}
                  required
                />
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col>
              <Form.Group className="mb-3">
                <Form.Label>Movie Image</Form.Label>
                <Form.Control
                  name='avatar'
                  value={movie.mlink}
                  onChange={(e) => setMovie({ ...movie, mlink: e.target.value })}
                  required
                />
              </Form.Group>
            </Col>
          </Row>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Container>
      </Form>
    </>
  )
}

const ConnectedMovieForm = (props) => (
  <MovieConsumer>
    { value => <MovieForm {...props} {...value} /> }
  </MovieConsumer>
)

export default ConnectedMovieForm;