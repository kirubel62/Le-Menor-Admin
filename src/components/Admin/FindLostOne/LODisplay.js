import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./LODisplay.css";
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

const LODisplay = (props) => {
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
              <label>Lost Person First Name</label>
              <h3>{obj.LostPFName}</h3>
            </div>
            <div>
              <label>Lost Person Last Name</label>
              <h3>{obj.LostPLName}</h3>
            </div>
            <div>
              <label>Message</label>
              <h3>{obj.message}</h3>
            </div>

            {/*  */}
            <button onClick={() => openModal(obj.id)}>Update</button>
            <Modal
              isOpen={modalIsOpen[data.findIndex((o) => o.id === obj.id)]}
              onRequestClose={() => closeModal(obj.id)}
            >
              <h2>Modal Title</h2>
              <div className="UADPcardItem">
                <label>Appicant Name</label>
                <h3>{obj.AppicantFName}</h3>
              </div>
              <div className="UADPcardItem">
                <label>Appicant Phone Number</label>
                <h3>{obj.AppicantPhone}</h3>
              </div>
              <div className="UADPcardItem">
                <label>Appicant Email</label>
                <h3>{obj.AppicantEmail}</h3>
              </div>
              <div className="UADPcardItem">
                <label>Appicant Relation</label>
                <h3>{obj.AppicantRelation}</h3>
              </div>

              <button onClick={() => closeModal(obj.id)}>Close Modal</button>
            </Modal>
          </div>
        ))}
      </div>
    </>
  );
};

export default LODisplay;
