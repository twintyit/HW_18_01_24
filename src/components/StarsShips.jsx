import React from "react";
import { useEffect, useState } from "react";
import { BrowserRouter as Router, Link, Route, Routes } from "react-router-dom";

const StarsShips = ({ fetchData }) => {
    const [data, setData] = useState(null);
    const [currentIndex, setCurrentIndex] = useState(1);
    const [imageUrl, setImageUrl] = useState(`https://starwars-visualguide.com/assets/img/starships/${currentIndex}.jpg`);
    const [currentEndpoint, setCurrentEndpoint] = useState('starships');

    const errorData = {
        name: 'not found',
        model: 'not found',
        cost_in_credits: 'not found',
        length: 'not found',
        crew: 'not found',
    }

    const getData = () => {
        fetchData(currentEndpoint, currentIndex).then((result) => {
            setData(result);
          }).catch((error) => {
            setData(errorData);
            console.log(error);
        });
    }

    const getPhoto = () => {
        fetch(`https://starwars-visualguide.com/assets/img/starships/${currentIndex}.jpg`).then(response => {
            if (response.ok) {
                setImageUrl(`https://starwars-visualguide.com/assets/img/starships/${currentIndex}.jpg`);
            } else {
                setImageUrl('https://img.freepik.com/vektoren-kostenlos/hoppla-404-fehler-mit-einer-kaputten-roboterkonzeptillustration_114360-5529.jpg');
            }
        }).catch(error => {
            console.log(error);
        });
    }

    useEffect(() => {
        getPhoto();
        getData();
    }, [currentIndex]);

    const next = () => {
        setCurrentIndex(currentIndex + 1);
    }

    return (
        <div>
            {data &&
                <div className="content">
                    <img className="image" src={imageUrl} alt="" />
                    <div className="info">
                        <h3>Name: {data.name}</h3>
                        <p>Model: {data.model}</p>
                        <p>Cost in credits: {data.cost_in_credits}</p>
                        <p>Length: {data.length}</p>
                        <p>crew: {data.crew}</p>
                        <button onClick={next}>Next</button>
                    </div>
                </div >
            }
        </div >
    );

}
export default StarsShips;
