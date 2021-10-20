import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const Booking = () => {
    const { serviceId } = useParams();

    const [service, setService] = useState({})
    const [services, setServices] = useState([])
    useEffect(() => {
        fetch('../services.json')
            .then(res => res.json())
            .then(data => setServices(data));
    }, [])

    useEffect(() => {
        if (services.length > 0) {
            console.log(services, serviceId)
            const data = services.find((obj) => obj.id === Number(serviceId))
            console.log(data);
            setService(data)
        }
    }, [services])
    return (
        <div>
            <h2>this is booking: {service?.id}</h2>
            <img style={{ width: "120px", height: "120px" }} src={service?.img} alt="" />
            <p> Fee:{service?.fee}</p>
            <p>Description:{service?.description}</p>

            <br /> <br /> <br />
        </div>
    );
};

export default Booking;