import { useState, ChangeEvent } from "react";
import { Speciality, SchVisQuery } from "../shared/types";

interface Props {
  specialities: Speciality[];
  query: SchVisQuery;
  setQuery: (query: SchVisQuery) => void;
}

const SearchBox = ({ specialities, query, setQuery }: Props) => {
  const handleInput = (event: ChangeEvent<HTMLInputElement>) => {
    setQuery({ ...query, [event.target.name]: event.target.value });
  };

  const handleSubmit = () => {
    query.specID = specialities[selectedID].specialityID;
    query.searched = true;
  };

  const [selectedID, setSelectedID] = useState(-1);

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
                    value={query.startDate}
                    className="form-control"
                    onChange={handleInput}
                  />
                </label>
              </td>
              <td className="table-item">
                <label>
                  End Date
                  <input
                    type="date"
                    value={query.endDate}
                    className="form-control"
                    onChange={handleInput}
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
