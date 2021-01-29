import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

import firebase from '../../config/firebase'

import CardEvent from '../../components/CardEvent'
import NavBar from '../../components/NavBar'

import './styles.css'

const Home = () => {
  const [events, setEvents] = useState([])
  const [search, setSearch] = useState('')

  let listEvent = []

  useEffect(() => {
    firebase
      .firestore()
      .collection('events')
      .get()
      .then(async (response) => {
        await response.docs.forEach((doc) => {
          if (doc.data().title.indexOf(search) >= 0) {
            listEvent.push({
              id: doc.id,
              ...doc.data()
            })
          }
        })

        setEvents(listEvent)
      })
  })

  return (
    <>
      <NavBar />
      <div className="w-100 row my-5 px-3 mx-auto">
        <h3 className="text-center p-3">Eventos Publicados</h3>
        <input
          type="text"
          className="form-control text-center"
          placeholder="Pesquisar Eventos."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
      <div className="w-100 row p-3">
        {events.map((event) => (
          <CardEvent
            key={event.id}
            id={event.id}
            img={event.image}
            title={event.title}
            details={event.description}
            views={event.views}
          />
        ))}
      </div>
    </>
  )
}

export default Home
