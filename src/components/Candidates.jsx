import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { saveUser } from "../store/slice";
import { Link } from "react-router-dom";

const Candidates = () => {
  const [candidates, setCandidates] = useState([]);

  const dispatch = useDispatch();
  const savedUsers = useSelector((state) => state.users.users);

  useEffect(() => {
    fetch("https://randomuser.me/api/?results=6")
      .then((response) => response.json())
      .then((datos) => setCandidates(datos.results));
  }, []);

  const hideCandidate = (index) => {
    fetch("https://randomuser.me/api/?results=1")
      .then((response) => response.json())
      .then((datos) => {
        const newCandidates = [...candidates];
        newCandidates[index] = { ...datos.results[0] };
        setCandidates(newCandidates);
      });
  };

  const saveCandidate = (candidate, index) => {
    const newValue = { ...candidate, departament: "" };
    dispatch(saveUser(newValue));
    hideCandidate(index);
  };

  return (
    <>
      <div className="top">
        <Link to="/users">
          <button>Users</button>
        </Link>
        <h1>Candidates:</h1>
      </div>
      <div className="candidates">
        {candidates.map((candidate, index) => (
          <div className="candidate" key={index}>
            <img src={candidate.picture.large} alt="" />
            <div className="info">
              <strong>
                {candidate.name.title}. {candidate.name.first}{" "}
                {candidate.name.last}
              </strong>
              <div>
                Ubicacion: {candidate.location.state} (
                {candidate.location.country})
              </div>
              <div>
                <a href="#">{candidate.email}</a>
              </div>
              <div>
                <a href="#">{candidate.cell}</a>
              </div>
            </div>
            <div className="buttons">
              <button onClick={() => hideCandidate(index)}>Hide</button>
              <button onClick={() => saveCandidate(candidate, index)}>
                Save
              </button>
            </div>
          </div>
        ))}
      </div>
      <div>
        {savedUsers.map((user, index) => (
          <Link key={index} to="/users">
            <button>{user.name.first}</button>
          </Link>
        ))}
      </div>
    </>
  );
};

export default Candidates;
