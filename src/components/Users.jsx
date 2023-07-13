import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { deleteUsers, newDepartament } from "../store/slice";
import { Link } from "react-router-dom";

const Users = () => {
  const savedUsers = useSelector((state) => state.users.users);
  const departaments = useSelector((state) => state.departaments.departaments);
  const dispatch = useDispatch();

  const deleteUser = (valor) => {
    dispatch(deleteUsers(valor));
  };

  const selectDepartament = (departament, index) => {
    dispatch(
      newDepartament({
        index: index,
        newDepartament: departament,
      })
    );
  };

  return (
    <>
      <div className="top">
        <Link to="/candidates">
          <button>Candidates</button>
        </Link>
        <h1>Users:</h1>
      </div>
      <div className="users">
        {savedUsers.map((candidate, index) => (
          <div className="candidate" key={index}>
            <img src={candidate.picture.large} alt="" />
            <div className="info">
              <strong>
                {candidate.name.title}. {candidate.name.first}{" "}
                {candidate.name.last}
              </strong>
              <div>{candidate.location.state}</div>
              <div>({candidate.location.country})</div>
            </div>
            <div className="options">
              <select
                onChange={(e) => selectDepartament(e.target.value, index)}
              >
                <option value="">Select:</option>
                {departaments.map((value, index) =>
                  candidate.departament === value ? (
                    <option selected key={index}>
                      {value}
                    </option>
                  ) : (
                    <option key={index}>{value}</option>
                  )
                )}
              </select>
              <button onClick={() => deleteUser(candidate)}>Delete</button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Users;
