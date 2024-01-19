import ListGroup from "../components/ListGroup";
import Button from "../components/Button";

function Specialities() {
  const specialities = [
    "domowy",
    "laryngolog",
    "dermatolog",
    "okulista",
    "neurolog",
    "ortopeda",
    "pediatra",
  ];

  return (
    <div>
      <ListGroup items={specialities} heading="Specialities of our Doctor's" />
      <Button onClick={() => null}>the best Button</Button>
    </div>
  );
}

export default Specialities;
