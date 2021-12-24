import React, { useState, useEffect } from 'react';
import axios from 'axios';
import FormFilters from '../FilterComponent/FormFilters';
import InputComponent from '../InputComponent/InputComponent';

import "./FormComponent.css";

const filterList = [
    {
        code: "brand",
        name: "brand",
        url: "http://localhost:8000/brand"
    },
    {
        code: "size",
        name: "size",
        url: "http://localhost:8000/size"
    }
    ,{
        code: "fabric",
        name: "fabric",
        url: "http://localhost:8000/fabric"
    }
];

const send = () => {
    axios.post()
    .then( res => {
        
    })
    .catch(error => {
        
    });
};

const FormComponent = (props) => {
	const [formState, setFormState] = useState({});
    // console.log(formState);
    const errorObj = {};
	return(
		<div className="formFiltersContainer">
			<FormFilters filterList={filterList} setForm={setFormState} formState={formState}/>
		</div>
	);
}

export default FormComponent;
