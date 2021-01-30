import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import { useSelector } from 'react-redux'

import NavBar from '../../components/NavBar'

import firebase from '../../config/firebase'

import './styles.css'

const EventRegistration = (props) => {
  const [title, setTitle] = useState('')
  const [typeEvent, setTypeEvent] = useState('')
  const [descriptionEvent, setDescriptionEvent] = useState('')
  const [dateEvent, setDateEvent] = useState(new Date())
  const [hourEvent, setHourEvent] = useState('')
  const [imageEvent, setImageEvent] = useState('')
  const [newImage, setNewImage] = useState('')
  const [msg, setMsg] = useState('')
  const [loading, setLoading] = useState(false)

  const storage = firebase.storage()
  const db = firebase.firestore()
  const history = useHistory()

  const email = useSelector((state) => state.usuarioEmail)

  useEffect(() => {
    firebase
      .firestore()
      .collection('events')
      .doc(props.match.params.id)
      .get()
      .then((response) => {
        setTitle(response.data().title)
        setTypeEvent(response.data().type)
        setDescriptionEvent(response.data().description)
        setDateEvent(response.data().date)
        setHourEvent(response.data().hour)
        setImageEvent(response.data().image)
      })
  }, [props.match.params.id])

  const publisher = () => {
    setLoading(true)
    setMsg('')

    if (!email) {
      alert('Por favor! Faça login para prosseguir com a publicação.')
      history.push({ pathname: '/login' })
    }

    if (
      title === '' ||
      typeEvent === '' ||
      descriptionEvent === '' ||
      dateEvent === '' ||
      hourEvent === '' ||
      newImage === ''
    ) {
      setMsg('Por favor! Preencha todos os campos')
      setLoading(false)
      return
    }

    storage
      .ref(`imagens/${newImage.name}`)
      .put(newImage)
      .then((response) => {
        db.collection('events')
          .add({
            title,
            type: typeEvent,
            description: descriptionEvent,
            date: dateEvent,
            hour: hourEvent,
            user: email,
            views: 0,
            image: newImage.name,
            publico: true,
            created: new Date()
          })
          .then(() => {
            setLoading(false)
            history.push({ pathname: '/' })
          })
          .catch((err) => {
            setMsg('Não foi possível cadastrar o evento')
            setLoading(false)
            return
          })
      })
  }
  const update = () => {
    setLoading(true)
    setMsg('')

    if (
      title === '' ||
      typeEvent === '' ||
      descriptionEvent === '' ||
      dateEvent === '' ||
      hourEvent === '' ||
      newImage === ''
    ) {
      setMsg('Por favor! Preencha todos os campos')
      setLoading(false)
      return
    }

    if (newImage) storage.ref(`imagens/${newImage.name}`).put(newImage)

    db.collection('events')
      .doc(props.match.params.id)
      .update({
        title,
        type: typeEvent,
        description: descriptionEvent,
        date: dateEvent,
        hour: hourEvent,
        image: newImage ? newImage.name : imageEvent
      })
      .then(() => {
        setLoading(false)
        history.push({ pathname: '/' })
      })
      .catch((err) => {
        setMsg('Não foi possível cadastrar o evento')
        setLoading(false)
        return
      })
  }

  return (
    <>
      <NavBar />
      <div className="col-12 container-fluid mt-5">
        <div className="row">
          <h3 className="text-center fw-bold">
            {props.match.params.id ? 'Atualizar Evento' : 'Novo Evento'}
          </h3>
        </div>

        <form>
          <div className="form-group my-2">
            <label>Título:</label>
            <input
              type="text"
              className="form-control"
              value={title !== '' && title}
              onChange={(e) => setTitle(e.target.value)}
              required
            />
          </div>
          <div className="form-group my-2">
            <label>Tipo do Evento:</label>
            <select
              onChange={(e) => setTypeEvent(e.target.value)}
              className="form-control"
              required
              defaultValue={typeEvent !== '' && typeEvent}
            >
              <option disabled>Selecione o tipo</option>
              <option>Festa</option>
              <option>Teatro</option>
              <option>Show</option>
              <option>Culto</option>
            </select>
          </div>
          <div className="form-group my-2">
            <label>Descrição do Evento:</label>
            <textarea
              className="form-control"
              rows="3"
              required
              value={descriptionEvent !== '' && descriptionEvent}
              onChange={(e) => setDescriptionEvent(e.target.value)}
            ></textarea>
          </div>
          <div className="form-group my-2 row">
            <div className="col-6">
              <label>Data:</label>
              <input
                type="date"
                className="form-control"
                required
                value={dateEvent !== '' && dateEvent}
                onChange={(e) => setDateEvent(e.target.value)}
              />
            </div>
            <div className="col-6">
              <label>Hora:</label>
              <input
                type="time"
                className="form-control"
                required
                value={hourEvent !== '' && hourEvent}
                onChange={(e) => setHourEvent(e.target.value)}
              />
            </div>
          </div>
          <div className="form-group my-2">
            <label>Upload de imagens:</label>
            <input
              type="file"
              className="form-control"
              placeholder={imageEvent}
              required
              onChange={(e) => setNewImage(e.target.files[0])}
            />
          </div>

          {loading ? (
            <div className="w-100 row">
              <div
                className="spinner-border text-danger mx-auto "
                role="status"
              >
                <span className="text-center visually-hidden"></span>
              </div>
            </div>
          ) : (
            <button
              type="button"
              className="w-100 btn btn-lg btn-block mt-3 mb-4 btn-publisher"
              onClick={props.match.params.id ? update : publisher}
            >
              {props.match.params.id ? 'Atualizar Evento' : 'Publicar Evento'}
            </button>
          )}
        </form>

        {msg !== '' && (
          <div className="msg-login text-black text-center mt-2">
            <span>{msg}</span>
          </div>
        )}
      </div>
    </>
  )
}

export default EventRegistration
