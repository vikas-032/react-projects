import React from "react";
import Title from "../components/Title";

export default function Esignature() {
const inputStyle ={
    border: "none",
    borderBottom: "2px dotted",
    outline: "none",
    padding: ".35rem 0",
};
 document.body.style.background = "#eee";
  return (
    <div className="container text-center">
      <Title classes={"title"} text={"Name"} />
      <Title classes={"main-title nb-4"} text={"Date"} />

      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto,
        tenetur distinctio perferendis
         sint in nesciunt vitae, praesentium
        soluta ullam harum voluptate nemo. Vel accusamus magni recusandae ab
        reprehenderit quos 
         laboriosam perspiciatis asperiores vitae facere
        tenetur nesciunt totam voluptate, itaque magnam laudantium repellat
        minima quas. Consequuntur, qui amet? At, tempore reiciendis?
      </p>
      <footer
className="d-flex"
style={
    {
        justifyContent: "space-around",
        position: "relative",
        top:"40vh",
    }
}>
      <input type="date" value={""} style={inputStyle}/>
      <input type="text" value={""} style={inputStyle}/>
      </footer>

    </div>
  );
}
