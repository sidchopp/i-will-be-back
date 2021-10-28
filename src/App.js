import 'semantic-ui-css/semantic.min.css'
import { Container, Card, Image, Icon, Divider } from 'semantic-ui-react'
import Terminator from './terminator.jpg'

function App() {

  const month = new Array();
  month[0] = "January";
  month[1] = "February";
  month[2] = "March";
  month[3] = "April";
  month[4] = "May";
  month[5] = "June";
  month[6] = "July";
  month[7] = "August";
  month[8] = "September";
  month[9] = "October";
  month[10] = "November";
  month[11] = "December";

  const d = new Date();
  let monthName = month[d.getMonth()];

  return (
    <Container text textAlign='center' style={{ marginTop: '50px' }}>
      <Card raised fluid centered>
        <Image src={Terminator} wrapped ui={false} />
        <Card.Content>
          <Card.Header>Hasta La Vista...{" "}User</Card.Header>

          <Card.Meta>
            <div style={{ marginTop: '15px' }} >
              <Icon name="battery empty" />
              {" "} My Present Mode : Stand-By
            </div>
            <div style={{ margin: '5px' }} >
              <Icon name="battery full" />
              {" "}My Functional Mode :  Starts at 00:00 hours{" "}{monthName} End </div>
          </Card.Meta>
          <Divider />
          <Card.Description>
            <p>  Actually I am using the free service from Heroku and I have consumed my entire allocation of 550 free dyno hours for
              <b> {monthName}</b>
              {" "}
              <Icon name="frown"></Icon>
            </p>
          </Card.Description>
        </Card.Content>
        <Card.Content extra>
          <b>I WILL BE BACK...</b>
        </Card.Content>
      </Card>
    </Container>
  );
}

export default App;
