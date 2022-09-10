import React from 'react'
import {useParams} from 'react-router-dom';
import { useState, useEffect } from "react";
import CardComponent from '../Components/CardComponent';
import {Card} from "react-bootstrap";

const CharacterScreen = () => {
    const [character, setCharacter] = useState({});
    const params = useParams()
    useEffect(function () {
      const fetchData = async function () {
        const result = await fetch(
            `https://breakingbadapi.com/api/characters/${params.id}`
            ); // cevap tutmak icin
        const data = await result.json(); // dönen cevabı, okunabilir bi data haline getiriyoruz.
        // console.log(data) // konsolda görebilmek.
       setCharacter(data[0]); // datayı al characters in icine gonder 
       console.log(data[0]);
    };
      fetchData(); // bir kere çalışacaktır.
    }, []);
        
        return <div>
            <Card style={{marginTop:"10"}}>
                <h2>{character.name}</h2>
                <Card.Body>
                    <Card.Text>
                     <h3>Nickname: {character.nickname}</h3>  
                     <h3>Actor: {character.portrayed}</h3> 
                     <h3>Status: {character.status}</h3> 
                    </Card.Text>
                </Card.Body>
            </Card>
        </div> // id nereden geldi, app.js parametre adına id verdiğimiz icin params.id ile buna erisiyoruz
}

export default CharacterScreen;