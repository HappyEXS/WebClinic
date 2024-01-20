import ListGroup from "../components/ListGroup";
import Button from "../components/Button";
import { Speciality } from "../shared/types";

interface Props {
  specialities: Speciality[];
}

function Specialities({ specialities }: Props) {
  return (
    // <div>
    //   <ListGroup items={specialities} heading="Specialities of our Doctor's" />
    //   <Button onClick={() => null}>the best Button</Button>
    // </div>
    <>
      <h2>The list of doctor's specialities</h2>
      <hr />

      <div className="main-body">
        <table className="main-table">
          <thead className="main-head">
            <tr>
              <th className="table-item">Speciality ID</th>
              <th className="table-item">Name</th>
            </tr>
          </thead>
          <tbody>
            {specialities.map((spec) => (
              <tr className="speciality-item">
                <td className="table-item">{spec.specialityId}</td>
                <td className="table-item">{spec.name}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default Specialities;
