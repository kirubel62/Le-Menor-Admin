import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./DADisplay.css";
//
import { db } from "../../../../FireBase/Firebase";
import {
  collection,
  where,
  query,
  getDoc,
  getDocs,
  deleteDoc,
  doc,
} from "firebase/firestore";
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

const DADisplay = (props) => {
  //
  const [FName, setFName] = useState("");
  const [LName, setLName] = useState("");
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

  //
  const handleDelete = async (e) => {
    e.preventDefault();
    setFName(document.querySelector(".fName").value);
    setLName(document.querySelector(".lName").value);

    try {
      // Build the query to filter the documents
      const q = query(
        collection(db, "users"),
        where("first", "==", FName),
        where("last", "==", LName)
      );

      // Get the documents that match the query
      const snapshot = await getDocs(q);

      // Iterate over the matching documents and delete them
      snapshot.forEach((doc) => {
        deleteDoc(doc.ref)
          .then(() => {
            console.log("Document successfully deleted!");
            alert("Document successfully deleted!");
          })
          .catch((error) => {
            console.error("Error deleting document: ", error);
            alert("Error deleting document");
          });
      });
    } catch (error) {
      console.error("Error getting documents: ", error);
      alert("Error getting documents");
    }
  };
  //

  return (
    <>
      <div className="DADmasterdisplay">
        {data.map((obj) => (
          <div className="DADCard" key={obj.id}>
            <img
              style={{
                width: "100px",
                height: "100px",
              }}
              src={obj.image}
              alt="User Photo"
            ></img>
            <div className="DADcardItem">
              <label> erson First Name</label>
              <h3>{obj.first}</h3>
            </div>
            <div>
              <label>Person Last Name</label>
              <h3>{obj.last}</h3>
            </div>

            {/*  */}
            <button onClick={() => openModal(obj.id)}>Delete</button>
            <Modal
              isOpen={modalIsOpen[data.findIndex((o) => o.id === obj.id)]}
              onRequestClose={() => closeModal(obj.id)}
            >
              <h2>MORE INFO</h2>
              <div className="UADPcardItem">
                <label>Email</label>
                <h3>{obj.email}</h3>
              </div>
              <div className="UADPcardItem">
                <label>Gender</label>
                <h3>{obj.gender}</h3>
              </div>
              {/*  */}
              <form onSubmit={handleDelete} className="form">
                <input
                  type="text"
                  style={{
                    visibility: "hidden",
                  }}
                  className="fName"
                  value={obj.first}
                ></input>
                <input
                  type="text"
                  style={{
                    visibility: "hidden",
                  }}
                  className="lName"
                  value={obj.last}
                ></input>
                <button type="submit">Delete</button>
              </form>
              {/*  */}

              <button onClick={() => closeModal(obj.id)}>Close Modal</button>
            </Modal>
          </div>
        ))}
      </div>
    </>
  );
};

export default DADisplay;
