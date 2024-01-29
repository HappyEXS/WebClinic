import { useState, ChangeEvent } from "react";
import { Speciality, SchVisQuery } from "../shared/types";

interface Props {
  specialities: Speciality[];
  query: SchVisQuery;
  setQuery: (query: SchVisQuery) => void;
}

const SearchBox = ({ specialities, query, setQuery }: Props) => {
  // const handleInput = (event: ChangeEvent<HTMLInputElement>) => {
  //   setQuery({ ...query, [event.target.name]: event.target.value });
  // };

  const handleSubmit = () => {
    let qr = {
      startDate: startDate,
      endDate: endDate,
      specID: specialities[selectedID].specialityID,
      searched: true,
    };
    setQuery(qr);
  };

  const [startDate, setStartDate] = useState(query.startDate);
  const [endDate, setEndDate] = useState(query.endDate);
  const [selectedID, setSelectedID] = useState(query.specID);

  return (
    <>
      <table>
        <tr>
          <div>
            <form method="post" onSubmit={handleSubmit}>
              <td className="table-item">
                <label>
                  Speciality
                  <select
                    className="form-control"
                    onChange={(event) =>
                      setSelectedID(event.target.options.selectedIndex)
                    }
                  >
                    <option value={-1}>--all--</option>
                    {specialities.map((speciality, index) =>
                      speciality.specialityID === query.specID ? (
                        <option value={speciality.specialityID} selected>
                          {speciality.name}
                        </option>
                      ) : (
                        <option
                          value={speciality.specialityID}
                          onClick={() =>
                            (query.specID = speciality.specialityID)
                          }
                        >
                          {speciality.name}
                        </option>
                      )
                    )}
                  </select>
                </label>
              </td>
              <td className="table-item">
                <label>
                  Start Date
                  <input
                    type="date"
                    name="startDate"
                    value={query.startDate.substring(0, 10)}
                    className="form-control"
                    onChange={(e) => setStartDate(e.target.value)}
                  />
                </label>
              </td>
              <td className="table-item">
                <label>
                  End Date
                  <input
                    type="date"
                    name="endDate"
                    value={query.endDate.substring(0, 10)}
                    className="form-control"
                    onChange={(e) => setEndDate(e.target.value)}
                  />
                </label>
              </td>
              <td className="table-item">
                <button
                  type="submit"
                  className="btn btn-primary"
                  id="button-table"
                >
                  Search
                </button>
              </td>
            </form>
          </div>
        </tr>
      </table>
    </>
  );
};

export default SearchBox;
