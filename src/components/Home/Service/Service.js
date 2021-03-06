import React from 'react';
import { Link } from 'react-router-dom';
import './Service.css';

const Service = ({ service }) => {

    const { id, name, fee, description, img } = service;
    return (
        <div className="service pb-3">
            <img src={img} alt="" />
            <h3>{name}</h3>
            <h5>Price: {fee}</h5>
            <p className="px-3">{description}</p>
            <Link to={`/booking/${id}`}>
                <button className=" btn btn-primary">Appointment: {name.toLowerCase()}</button>
            </Link>
        </div>
    );
};

export default Service;