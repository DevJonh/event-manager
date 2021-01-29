import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import firebase from '../../config/firebase'

import { MdRemoveRedEye } from 'react-icons/md'

import './styles.css'

const CardEvent = ({ title, id, img, details, views }) => {
  const [urlImage, setUrlImage] = useState()

  useEffect(() => {
    firebase
      .storage()
      .ref(`imagens/${img}`)
      .getDownloadURL()
      .then(async (url) => await setUrlImage(url))
  }, [img])

  return (
    <div className="col-md-3 col-sm-12">
      <img
        src={urlImage}
        className="card-img-top img-cartao"
        alt="Imagem do Evento"
      />
      <div className="card-body">
        <h5>{title}</h5>
        <p className="card-text text-justify">{details}</p>

        <div className="row rodape-card d-flex align-items-center justify-content-between">
          <div className="col-6">
            <Link className="btn btn-sm btn-detalhes" to={`/eventdetails`}>
              + detalhes
            </Link>
          </div>

          <div className="col-6 d-flex justify-content-end align-items-center">
            <MdRemoveRedEye />
            <span className="ms-1">{views}</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CardEvent
