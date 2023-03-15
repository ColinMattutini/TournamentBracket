import React, { useState } from "react";

const ParticipantAmountForm = () => {
  const [totalPeople, setTotalPeople] = useState(0);

  const totalPeopleHandler = (e) => {
    setTotalPeople(e.target.value);
  };

  const formSubmit = (e) => {
    e.preventDefault();
    console.log(totalPeople);
  };

  return (
    <div>
      <form onSubmit={formSubmit}>
        <h2>How Many People Are Participating?</h2>
        <input type="number" onChange={totalPeopleHandler} />
        <button>Submit</button>
      </form>
    </div>
  );
};

export default ParticipantAmountForm;
