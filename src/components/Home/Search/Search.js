import './Search.css'


import React, { useState, useEffect } from 'react';

const Search = () => {
    const [services, setServices] = useState([]);

    const [searchText, setSearchText] = useState("");



    useEffect(() => {
        if (searchText !== "") {
            let filter_data = services.filter(obj => obj.name.includes(searchText));
            setServices(filter_data)
        } else {
            fetch('./services.JSON')
                .then(res => res.json())
                .then(data => setServices(data));
        }
    }, [searchText])



    const handleChange = (e) => {
        // const searchText = e.target.value;
        setSearchText(e.target.value);
    };



    return (
        <div>
            <div className="course-container p-3 m-5">
                <h1>Our Courses</h1>
                <div className="srarch-box ">
                    <input onChange={handleChange} type="text" className="p-2" placeholder="enter course name" />
                    <button className="btn btn-danger m-3">Search</button>
                </div>
                /</div>
        </div>
    );
};

export default Search;