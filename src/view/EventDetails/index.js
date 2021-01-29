import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import {
  MdQueryBuilder,
  MdInsertInvitation,
  MdTurnedInNot
} from 'react-icons/md'
import { BsPencil } from 'react-icons/bs'

import firebase from '../../config/firebase'

import NavBar from '../../components/NavBar'

import './styles.css'

const EventDetails = () => {
  return (
    <>
      <NavBar />
      <div className="container-fluid">
        <div className="row">
          <img src="" alt="banner" className="img-banner" />
        </div>
        <div className="row mt-5 d-flex justify-content-around">
          <div className="col-md-3 col-sm-12 box-info p-3">
            <MdTurnedInNot size={36} />
            <h5>
              <strong>Tipo</strong>
            </h5>
            <span className="mt-3">Festa</span>
          </div>
          <div className="col-md-3 col-sm-12 box-info p-3">
            <MdInsertInvitation size={36} />
            <h5>
              <strong>Data</strong>
            </h5>
            <span className="mt-3">11/04/2018</span>
          </div>
          <div className="col-md-3 col-sm-12 box-info p-3">
            <MdQueryBuilder size={36} />
            <h5>
              <strong>Hora</strong>
            </h5>
            <span className="mt-3">18:30</span>
          </div>
        </div>
        <div className="row box-details mt-5">
          <h5 className="mx-auto">
            <strong>Detalhes do Evento</strong>
          </h5>
          <p className="text-justify p-3">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum
          </p>
        </div>

        <Link to="" className="btn-edit p-1">
          <BsPencil size={40} />
        </Link>
      </div>
    </>
  )
}

export default EventDetails
