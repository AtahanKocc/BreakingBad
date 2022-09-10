import { useState, useEffect } from "react";
import {Row, Col} from "react-bootstrap";
import CardComponent from "../Components/CardComponent";

function HomeScreen(){
    const [characters, setCharacters] = useState([]);

    useEffect(function () {
      const fetchData = async function () {
        const result = await fetch("https://breakingbadapi.com/api/characters"); // cevap tutmak icin
        const data = await result.json(); // dönen cevabı, okunabilir bi data haline getiriyoruz.
        // console.log(data) // konsolda görebilmek.
       setCharacters(data); // datayı al characters in icine gonder
      };
      fetchData(); // bir kere çalışacaktır.
    }, []);
    return(
    <div>
    {!characters.length ? <h1>Loading...</h1> :
     <div>
      <Row>
      {characters.map(character => (
          <Col Lg={4} xL={3}>
             <CardComponent characterInformation={character}></CardComponent>
          </Col>
          ))}
      </Row>   
    </div>
    } 
  </div>
 )
}
export default HomeScreen;