import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./RDisplay.css";
//map
import { MapContainer, TileLayer, useMap } from "react-leaflet";
import { Popup } from "react-leaflet";
import { Marker } from "react-leaflet";
import "leaflet/dist/leaflet.css";

//
//import Modal from "./Modal";
import Modal from "react-modal";
Modal.setAppElement("#root");
//

const RDisplay = (props) => {
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
      <div className="Rmasterdisplay">
        {data.map((obj) => (
          <div className="RDPCard" key={obj.id}>
            <img
              style={{
                width: "100px",
                height: "100px",
              }}
              src={obj.image}
              alt="User Photo"
            ></img>
            <div className="RDPcardItem">
              <label>First Name</label>
              <h3>{obj.firstName}</h3>
            </div>
            <div>
              <label>Last Name</label>
              <h3>{obj.lastName}</h3>
            </div>
            {/*  */}
            <button onClick={() => openModal(obj.id)}>More</button>
            <Modal
              isOpen={modalIsOpen[data.findIndex((o) => o.id === obj.id)]}
              onRequestClose={() => closeModal(obj.id)}
            >
              <h2>Modal Title</h2>
              <div className="RDPcardItem">
                <label>Record Result</label>
                <h3>{obj.recordResult}</h3>
              </div>
              <div className="RDPcardItem">
                <label>Offficer Name</label>
                <h3>{obj.offficer}</h3>
              </div>
              <div className="RDPcardItem">
                <label>Document ID</label>
                <h3>{obj.docid}</h3>
              </div>
              <div className="RDPcardItem">
                <label>Any specific needs or concerns</label>
                <h3>{obj.specificNeed}</h3>
              </div>
              <button onClick={() => closeModal(obj.id)}>Close Modal</button>
            </Modal>
          </div>
        ))}
      </div>
    </>
  );
};

export default RDisplay;
