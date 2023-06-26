import React from "react";
import "./FindLostOne.css";
import LODisplay from "./LODisplay";
import { useState, useEffect } from "react";
//
import { db } from "../../../FireBase/Firebase";
import { collection, getDocs } from "firebase/firestore";
//

const FindLostOne = () => {
  //
  const [data, setData] = useState([]);
  const [Key, setKey] = useState("");
  //
  //
  useEffect(() => {
    const fetchData = async () => {
      //const db = firebase.firestore();
      //const snapshot = await db.collection("users").get();
      const snapshot = await getDocs(collection(db, "users"));
      const data = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
      setData(data);
      console.log(data);
    };

    fetchData();
  }, []);
  //
  //
  return (
    <div className="UpadateAccount">
      <LODisplay data={data} />
    </div>
  );
};

export default FindLostOne;
