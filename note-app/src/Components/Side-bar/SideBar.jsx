import { useState } from "react";
import plus from "../assets/plus.png";
import "./SideBar.css";
function SideBar  (props) {

  const colors = ["#fe9b72", "#fec971", "#00d4fe", "#b693fd", "#e4ee91"]


  const [listOpen, setListOpen] = useState(false);
  return (
    <div>
      <div className="sidebar">
        <img src={plus} alt="p-icon" onClick={() => setListOpen(!listOpen)}/>
        <ul className={`sidebar_list  ${listOpen ? "sidebar_list_active" : ""}`}>
          {
            colors.map((item, index) =>  <li key={index} className="sidebar_list_item" 
            style={{backgroundColor:item}}
            onClick={() => props.addNote(item)}/>)
          }
        </ul>
      </div>
    </div>
  )
}

export default SideBar
