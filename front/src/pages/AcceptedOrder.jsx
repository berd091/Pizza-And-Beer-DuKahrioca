import React from 'react'
import { Link } from 'react-router-dom'
import acceptedImg from '../assets/img/accepted.png'

const AcceptedOrder = () => {
	
	return (
    <div className="container container--cart">
      <div className="cart cart--empty">
        <h2>Seu pedido foi aceito <i>❤</i></h2>
        <p>
          Sua pizza está sendo preparada com muito amor e logo mais será entregue até você.<br />
          Bom apetite!
        </p>
        <img height={300} width={200} src={acceptedImg} alt="img" />
        <Link to="/" className="button button--black">
          <span>Ir para o menu</span>
        </Link>
      </div>
    </div>
    )
}

export default AcceptedOrder