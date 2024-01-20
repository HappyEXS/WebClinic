import { Speciality } from "../shared/types";

interface Props {
  specialities: Speciality[];
  selectedSpeciality: number;
  setSelectedSpeciality: (number: number) => void;
  startDate: Date;
  setStartDate: (date: Date) => void;
  endDate: Date;
  setEndDate: (date: Date) => void;
}

const SearchBox = ({
  specialities,
  selectedSpeciality,
  setSelectedSpeciality,
  startDate,
  setStartDate,
  endDate,
  setEndDate,
}: Props) => {
  function handleSubmit(e) {
    e.preventDefault();
  }

  return (
    <>
      <table>
        <tr>
          <div>
            <form method="post" onSubmit={handleSubmit}>
              <td className="table-item">
                <label>
                  Speciality
                  <select className="form-control">
                    <option value={-1}>--all--</option>
                    {specialities.map((speciality, index) =>
                      speciality.specialityId === selectedSpeciality ? (
                        <option value={speciality.specialityId} selected>
                          {speciality.name}
                        </option>
                      ) : (
                        <option
                          value={speciality.specialityId}
                          onClick={() =>
                            setSelectedSpeciality(speciality.specialityId)
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
                    value={startDate.toDateString()}
                    className="form-control"
                    onChange={(e) => setStartDate(new Date(e.target.value))}
                  />
                </label>
              </td>
              <td className="table-item">
                <label>
                  End Date
                  <input
                    type="date"
                    value={endDate.toDateString()}
                    className="form-control"
                    onChange={(e) => setEndDate(new Date(e.target.value))}
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
