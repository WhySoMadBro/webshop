import { useState } from 'react';
import kasutajadFail from '../kasutajad.json';

function Kasutajad() {

  const [kasutajad, uuendaKasutajad] = useState(kasutajadFail);

  const allBack = () => {
    uuendaKasutajad(kasutajadFail);
  
  }

  const filterName = () => {
    const result = kasutajad.filter(kasutaja => kasutaja.username.lenght >= 10);
    uuendaKasutajad(result);
  }

  return ( 
  <div>
      <div>{kasutajad.map(kasutaja =>
      <div>
        <div>{kasutaja.id}</div>
        <div>{kasutaja.name}</div>
        <div>{kasutaja.username}</div>
        <div>{kasutaja.address.street}</div>
        <div>{kasutaja.address.suite}</div>
        <div>{kasutaja.address.city}</div>
        <div>{kasutaja.address.zipcode}</div>
        <div>{kasutaja.address.geo.lat}</div>
        <div>{kasutaja.address.geo.lng}</div>
        <div>{kasutaja.phone}</div>
        <div>{kasutaja.website}</div>
        <div>{kasutaja.company.name}</div>
        <div>{kasutaja.company.catchPhrase}</div>
        <div>{kasutaja.company.bs}</div>
      <br />
    </div>)}</div>
    </div> );
}

export default Kasutajad;