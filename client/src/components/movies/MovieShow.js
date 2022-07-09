import React from 'react'
import axios from 'axios'
import { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import { Centered, BtnCrud } from '../shared/styles/Style'
import { RoundPicture, Buttons } from '../shared/styles/Style'
import { InfoDoctor } from '../shared/styles/Style'
import Trash from '../images/Trash.svg'
import heartPulse from '../images/heartPulse.svg'
import edit from '../images/edit.svg'
import {Modal} from 'react-bootstrap';
import MovieForm from './MovieForm';
import {MovieConsumer} from '../providers/MovieProvider';

const MovieShow = ({UpdateMovie, deleteMovie}) => {
  const { id } = useParams()
  const [movie, setMovie] = useState({
    title: '',
    desc: '',
    mlink: '',
  })
  const { title, desc, mlink } = movie
  const [movieUsers, setMovieUsers] = useState([])
  const [editing, setEdit] = useState(false)

  useEffect(() => {
    axios
      .get(`/api/movies/${id}`)
      .then((res) => setMovie(res.data))
      .catch((err) => console.log(err))
  }, [])

  useEffect(() => {
    axios
      .get(`/api/movies/${id}/movieUsers`)
      .then((res) => setMovieUsers(res.data))
      .catch((err) => console.log(err))
  }, [])

  return (
    <>
      <Centered>
        <RoundPicture src={mlink} width="600px"></RoundPicture>
        <InfoDoctor>
          <h2>
            Movie Name {title}
          </h2>
          <h5>{desc} </h5>
        </InfoDoctor>

        <Buttons>
          <BtnCrud className="btn-crud" onClick={() => setEdit(true)}>
            <img src={edit} alt="yo edit btn" />
          </BtnCrud>

          <Modal show={editing} onHide={() => setEdit(false)}>
            <Modal.Header closeButton></Modal.Header>
            <Modal.Body>
              <DoctorForm
                id={id}
                title={title}
                desc={desc}
                mlink={mlinjk}
                setEdit={setEdit}
                UpdateMovie={UpdateMovie}
              />
            </Modal.Body>
          </Modal>

          <Link to={`/${id}/comments`} state={{ title: title }}>
            <BtnCrud className="btn-crud">
              Coments
            </BtnCrud>
          </Link>
          <BtnCrud className="btn-crud" onClick={() => deleteMovie(id)}>
           Delete
          </BtnCrud>
        </Buttons>

        <h1 style={{marginTop: " 40px", textAlign:"center"}}>Comments {title}</h1>
      <ul>
        { movieUser.map( mu => 
          <>
            <li>{mu.first} {mu.last}</li>
            <hr />
          </>  
        )}
      </ul>
      </Centered>
    </>
  )
}

const ConnectedMovieShow =(props)=>(
  <MovieConsumer>
  {value => <MovieShow {...props} {...value}/>}
  </MovieConsumer>
 
 )
 export default ConnectedMovieShow;