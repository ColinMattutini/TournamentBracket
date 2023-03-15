import React, { useState } from "react";
import BracketBox from "./BracketBox";

const Bracket = () => {
  const [participants, setParticipants] = useState(
    JSON.parse(localStorage.getItem("participants"))
  );
  const bracketDivider = participants.map((participantName) => (
    <BracketBox participantName={participantName.participant} />
  ));

  return (
    <div>
      <div>{bracketDivider}</div>
    </div>
  );
};

export default Bracket;
