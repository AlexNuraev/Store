import React, { useState, useEffect } from 'react';
import axios from 'axios';

import "./FilterComponent.css";

const FilterComponent = (props) => {
    const [comState, setComState] = useState(null);


    useEffect(() => {
        axios.get(props.url)
            .then(res => {
                setComState(res?.data?.data);
            })
            .catch(error => {
                setComState({});
            });

    }, []);

    const buildOptions = () => {
        const arr = comState && Object.values(comState);
        let ret = [];
        arr && arr[0].forEach((obj) => {
            ret.push(<option key={obj._id} className="opt" value={obj._id}>{obj.name || "NA"}</option>);
        });
        return ret;
    };

    return (
        <div className="selectContainer">
            <label htmlFor={props.code} className="selectLabel">{props.name}</label>
            <select id={props.code} className="selectElement">
                {comState && buildOptions()}
            </select>
        </div>
    );
}

export default FilterComponent;