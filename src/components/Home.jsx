import React from "react";
import { useEffect, useState } from "react";

const Home = ({ fetchData }) => {
    const [data, setData] = useState(null);
    const [currentIndex, setCurrentIndex] = useState(1);
    const [imageUrl, setImageUrl] = useState(`https://starwars-visualguide.com/assets/img/characters/${currentIndex}.jpg`);
    const [currentEndpoint, setCurrentEndpoint] = useState('people');

    const errorData = {
        name: 'not found',
        birth_year: 'not found',
        height: 'not found',
        mass: 'not found',
        hair_color: 'not found',
    }

    const getData = () => {
        fetchData(currentEndpoint, currentIndex).then((result) => {
            setData(result);
        }).catch((error) => {
            setData(errorData);
        });
    }

    const getPhoto = () => {
        fetch(`https://starwars-visualguide.com/assets/img/characters/${currentIndex}.jpg`).then(response => {
            if (response.ok) {
                setImageUrl(`https://starwars-visualguide.com/assets/img/characters/${currentIndex}.jpg`);
            } else {
                setImageUrl('https://img.freepik.com/vektoren-kostenlos/hoppla-404-fehler-mit-einer-kaputten-roboterkonzeptillustration_114360-5529.jpg');
            }
        }).catch(error => {
            console.log(error);
        });
    }

    useEffect(() => {
        getData();
        getPhoto();
    }, [currentIndex]);

    const next = () => {
        setCurrentIndex(currentIndex + 1);
    }

    return (
        <div>
            {data &&
                <div className="content">
                    <img className="image" src={imageUrl} alt="" />
                    < div className="info">
                        <h3>Name: {data.name}</h3>
                        <p>Birth year: {data.birth_year}</p>
                        <p>Height: {data.height}</p>
                        <p>Mass: {data.mass}</p>
                        <p>Hair color: {data.hair_color}</p>
                        <button onClick={next}>Next</button>
                    </div>
                </div>}
        </div >
    );

}
export default Home;

