import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./CSDisplay.css";
//map
import { MapContainer, TileLayer, useMap } from "react-leaflet";
import { Popup } from "react-leaflet";
import { Marker } from "react-leaflet";
import "leaflet/dist/leaflet.css";
// import customIcon from "../images/Marker.png";
//
//import Modal from "./Modal";
import Modal from "react-modal";
Modal.setAppElement("#root");
//

const CSDisplay = (props) => {
  //console.log(props)
  const [id, setid] = useState("");
  const handleMore = () => {
    console.log("");
  };

  //
  const [modalIsOpen, setModalIsOpen] = useState(props.data.map(() => false));
  const { data } = props;

  function openModal(id) {
    const index = data.findIndex((obj) => obj.id === id);
    const newModalIsOpen = [...modalIsOpen];
    newModalIsOpen[index] = true;
    setModalIsOpen(newModalIsOpen);
  }

  function closeModal(id) {
    const index = data.findIndex((obj) => obj.id === id);
    const newModalIsOpen = [...modalIsOpen];
    newModalIsOpen[index] = false;
    setModalIsOpen(newModalIsOpen);
  }

  return (
    <>
      <div className="CSmasterdisplay">
        {data.map((obj) => (
          <div className="CSDPCard" key={obj.id}>
            <img
              style={{
                width: "100px",
                height: "100px",
              }}
              src={obj.image}
              alt="User Photo"
            ></img>
            <div className="CSDPcardItem">
              <label>Subject</label>
              <h3>{obj.subject}</h3>
            </div>
            <div>
              <label>Sender Name</label>
              <h3>{obj.name}</h3>
            </div>
            <div>
              <label>Message</label>
              <h3>{obj.message}</h3>
            </div>
            <div>
              <label>Sender Email</label>
              <h3>{obj.email}</h3>
            </div>
            {/*  */}
            {/* <button onClick={() => openModal(obj.id)}>Update</button> */}
            {/* <Modal
              isOpen={modalIsOpen[data.findIndex((o) => o.id === obj.id)]}
              onRequestClose={() => closeModal(obj.id)}
            >
              <h2>Modal Title</h2>
              <div className="UADPcardItem">
                <label>Nationality</label>
                <h3>{obj.nationality}</h3>
              </div>
              <div className="UADPcardItem">
                <label>Gender</label>
                <h3>{obj.gender}</h3>
              </div>
              <div className="UADPcardItem">
                <label>Home address before displacement</label>
                <h3>{obj.bdAddress}</h3>
              </div>
              <div className="UADPcardItem">
                <label>Any specific needs or concerns</label>
                <h3>{obj.specificNeed}</h3>
              </div>
              <button onClick={() => closeModal(obj.id)}>Close Modal</button>
            </Modal> */}
          </div>
        ))}
      </div>
    </>
  );
};

export default CSDisplay;
