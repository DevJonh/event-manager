import React, { useEffect, useState, useMemo } from 'react'
import { Link } from 'react-router-dom'

import firebase from '../../config/firebase'

import CardEvent from '../../components/CardEvent'
import NavBar from '../../components/NavBar'

import './styles.css'

const Home = () => {
  const [events, setEvents] = useState([])

  let listEvent = useMemo(() => {
    return []
  }, [])

  useEffect(() => {
    firebase
      .firestore()
      .collection('events')
      .get()
      .then(async (response) => {
        await response.docs.forEach((doc) => {
          listEvent.push({
            id: doc.id,
            ...doc.data()
          })
        })

        setEvents(listEvent)
      })
  }, [listEvent])

  return (
    <>
      <NavBar />
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
