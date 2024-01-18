import ListGroup from "../components/ListGroup";
import Button from "../components/Button";

function Specialities() {
  let items = ["New York", "Sam Francisco", "Tokyo", "London", "Paris"];

  return (
    <div>
      <h1>Specialities</h1>
      <ListGroup items={items} heading="Cities" />
      <Button onClick={() => null}>the best Button</Button>
    </div>
  );
}

export default Specialities;
