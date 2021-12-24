import React, { useState, useEffect } from 'react';
import axios from 'axios';

import "./InputComponent.css";



const InputComponent = () => {

    const [brand, setBrand] = useState('');
    const [size, setSize] = useState('');
    const [fabric, setFabric] = useState('');

    const postBrand = async (e) => {
        e.preventDefault();
        try {
            await axios.post('http://localhost:8000/brand', { name: brand })
            console.log(brand)
        } catch (err) {
            console.log(err);
        }
    }

    const postSize = async (e) => {
        e.preventDefault();
        try {
            await axios.post('http://localhost:8000/size', { size: size })
            console.log(size)
        } catch (err) {
            console.log(err);
        }
    }

    const postFabric = async (e) => {
        e.preventDefault();
        try {
            await axios.post('http://localhost:8000/fabric', { name: fabric })
            console.log(fabric)
        } catch (err) {
            console.log(err);
        }
    }

    return (
        <div>
            <form>
                <div>

                    <p>Brand</p>
                    <input type="text" name="brand" value={brand} onChange={(e) => setBrand(e.target.value)} />
                    <button onClick={postBrand}>Post</button>
                </div>
                <div>
                    <p>Size</p>
                    <input type="text" name="size" value={size} onChange={(e) => setSize(e.target.value)} />
                    <button onClick={postSize}>Post</button>
                </div>
                <div>
                    <p>Fabric</p>
                    <input type="text" name="fabric" value={fabric} onChange={(e) => setFabric(e.target.value)} />
                    <button onClick={postFabric}>Post</button>
                </div>
            </form>
        </div>
    )
};


export default InputComponent;