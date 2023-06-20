import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Button from './Button';
import logoSvg from '../assets/img/logo.png';

const Header = () => {
  const { totalPrice, totalCount } = useSelector(({ cart }) => cart);


  return (
    <header className="header">
      <div className="container">
        <Link to="/home">
          <div className="header--logo">
            <img width={250} src={logoSvg} alt="Pizza&Beer logo" />
            <div>
              <br></br>
              <p>O melhor delivery de pizzas da cidade</p>
            </div>
          </div>
        </Link>
        <div className="header--cart">
          <Link to="/cart">
            <Button className="button--cart">
              <span>{totalPrice} R$</span>
              <div className="button--delimiter"></div>
              <svg
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                {/* Ícone do carrinho */}
              </svg>
              <span>{totalCount}</span>
            </Button>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
