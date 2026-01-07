import React from "react";

function StudentCard(props) {
  return (
    <div style={{ border: "1px solid black", padding: "15px", width: "250px" }}>
      <h3>Student Details</h3>

      <p><b>Name:</b> {props.name}</p>
      <p><b>Department:</b> {props.department}</p>
      <p><b>CGPA:</b> {props.cgpa}</p>

      <p>
        <b>Performance:</b>{" "}
        {props.cgpa >= 8 ? "Excellent" : "Needs Improvement"}
      </p>
    </div>
  );
}

export default StudentCard;
