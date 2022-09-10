
import {Card, Button} from "react-bootstrap";
import {Link} from "react-router-dom";


function CardComponent({characterInformation}){
    return(
        <Card style={{width:"280px", marginBottom: 10, marginTop:10}}>
        <Card.Img src={characterInformation.img} style={{height:"400px"}}/>
        <Card.Body>
          <Card.Title>
           {characterInformation.name}
          </Card.Title>
          <Card.Text>
           {characterInformation.nickname}
          </Card.Text>
          <Button>
            <Link 
            style={{textDecoration: 'none'}} 
            to={"/" + characterInformation.char_id}>
            Detailed Info
            </Link>
          </Button>
        </Card.Body>
     </Card>
    );
}
export default CardComponent;