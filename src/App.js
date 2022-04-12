import 'semantic-ui-css/semantic.min.css'
import { Container, Card, Image, Icon, Divider, Header } from 'semantic-ui-react'
import Terminator from './terminator.jpg'

function App() {

  // eslint-disable-next-line no-array-constructor
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
  let nextMonthName = month[d.getMonth() + 1];

  return (
    <Container text textAlign='center' style={{ marginTop: '30px', paddingBottom: "20px" }}>
      {/* <Header as="h3"  > 3 billion human lives ended on August 29, 1997. The Survivors of the nuclear holocaust called the war... JUDGMENT DAY.</Header> */}
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
              {" "}My Functional Mode :  Starts at 00:00 hours, beginning{" "}{nextMonthName}  </div>
          </Card.Meta>
          <Divider />
          <Card.Description>
            <p> I am using <b>free service</b> from Heroku and I have consumed my entire allocation of 550 free dyno hours for
              <b> {monthName}</b>
              {" "}
              <Icon name="frown"></Icon>
            </p>
          </Card.Description>
        </Card.Content>
        <Card.Content extra>
          <Header> Trust Me </Header>
          <b>I WILL BE BACK...</b>
        </Card.Content>
      </Card>
    </Container>
  );
}

export default App;
