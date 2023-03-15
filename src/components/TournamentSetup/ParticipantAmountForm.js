import React, { useState } from "react";

const ParticipantAmountForm = () => {
  const [bracketName, setBracketName] = useState("");
  const [totalPeople, setTotalPeople] = useState(0);
  const [participant, setParticipant] = useState([{ participant: "" }]);

  const totalPeopleHandler = (e) => {
    setTotalPeople(e.target.value);
  };

  const bracketNameHandler = (e) => {
    setBracketName(e.target.value);
  };

  const participantHandler = (index, field, event) => {
    const newValue = event.target.value;
    setParticipant([
      ...participant.slice(0, index),
      {
        ...participant[index],
        [field]: newValue,
      },
      ...participant.slice(index + 1),
    ]);
  };

  const addParticipantHandler = () => {
    let temp = { particpant: "" };
    let test = participant.concat(temp);
    setParticipant(test);
  };

  const formSubmit = (e) => {
    e.preventDefault();
    console.log(totalPeople, bracketName);
    console.log(participant);
  };

  return (
    <div>
      <form onSubmit={formSubmit}>
        <h1>Bracket Name</h1>
        <input type="text" onChange={bracketNameHandler} />
        {participant.map((participants, index) => (
          <div key={index}>
            <h2>Particpant Name</h2>
            <input
              key={index}
              type="text"
              onChange={participantHandler.bind(this, index, "participant")}
            />
          </div>
        ))}
        <button>Submit</button>
      </form>
      <button onClick={addParticipantHandler}>ADD</button>
    </div>
  );
};

export default ParticipantAmountForm;
