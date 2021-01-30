import React, { useState, useEffect } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { useSelector } from 'react-redux'
import {
  MdQueryBuilder,
  MdInsertInvitation,
  MdTurnedInNot,
  MdRemoveRedEye
} from 'react-icons/md'
import { BsPencil } from 'react-icons/bs'

import firebase from '../../config/firebase'

import NavBar from '../../components/NavBar'

import './styles.css'

const EventDetails = (props) => {
  const [event, setEvent] = useState({})
  const [url, setUrl] = useState('')
  const [loading, setLoading] = useState(true)

  const user = useSelector((state) => state.usuarioEmail)
  const history = useHistory()

  useEffect(() => {
    firebase
      .firestore()
      .collection('events')
      .doc(props.match.params.id)
      .get()
      .then((response) => {
        setEvent(response.data())
        firebase
          .firestore()
          .collection('events')
          .doc(props.match.params.id)
          .update('views', response.data().views + 1)

        firebase
          .storage()
          .ref(`imagens/${response.data().image}`)
          .getDownloadURL()
          .then((url) => {
            setUrl(url)
            setLoading(false)
          })
      })
  }, [props.match.params.id])

  const remove = () => {
    firebase
      .firestore()
      .collection('events')
      .doc(props.match.params.id)
      .delete()
      .then(() => {
        setLoading(true)
        history.push('/')
      })
  }

  return (
    <>
      <NavBar />
      {loading ? (
        <div className="w-100 row mt-5">
          <div className="spinner-border text-danger mx-auto " role="status">
            <span className="text-center visually-hidden"></span>
          </div>
        </div>
      ) : (
        <div className="container-fluid">
          <div className="row">
            <img src={url} alt="banner" className="img-banner" />
            <div className="col-12 d-flex justify-content-end align-items-center mt-1 views">
              <MdRemoveRedEye /> <span className="ms-1">{event.views + 1}</span>
            </div>
            <h3 className="mt-5 text-center title">
              <strong>{event.title}</strong>
            </h3>
          </div>
          <div className="row mt-5 d-flex justify-content-around">
            <div className="col-md-3 col-sm-12 box-info p-3">
              <MdTurnedInNot size={36} />
              <h5>
                <strong>Tipo</strong>
              </h5>
              <span className="mt-3">{event.type}</span>
            </div>
            <div className="col-md-3 col-sm-12 box-info p-3">
              <MdInsertInvitation size={36} />
              <h5>
                <strong>Data</strong>
              </h5>
              <span className="mt-3">{event.date}</span>
            </div>
            <div className="col-md-3 col-sm-12 box-info p-3">
              <MdQueryBuilder size={36} />
              <h5>
                <strong>Hora</strong>
              </h5>
              <span className="mt-3">{event.hour}</span>
            </div>
          </div>
          <div className="row box-details mt-5 text-center">
            <h5>
              <strong>Detalhes do Evento</strong>
            </h5>
            <p>{event.description}</p>
          </div>

          {user === event.user && (
            <Link
              to={`/editevent/${props.match.params.id}`}
              className="btn-edit p-1"
            >
              <BsPencil size={40} />
            </Link>
          )}
          {user === event.user && (
            <button
              type="button"
              className="w-100 btn btn-lg btn-block mt-3 mb-5 btn-cadastro"
              onClick={remove}
            >
              Remover Evento
            </button>
          )}
        </div>
      )}
    </>
  )
}

export default EventDetails
