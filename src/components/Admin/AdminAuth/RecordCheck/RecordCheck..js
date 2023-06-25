import React from "react";
import "./RecordCheck.css";
import { useState , useEffect } from "react";
import { db } from "../../../../FireBase/Firebase";
import { collection , getDocs } from "firebase/firestore";
import RDisplay from "./RDisplay"

const RecordCheck = () => {
    //
    const [data , setData] = useState([]);
  //
  useEffect(() => {
    const fetchData = async () => {
      //const db = firebase.firestore();
      //const snapshot = await db.collection("users").get();
      const snapshot = await getDocs(collection(db, "InvestigationReport"));
      const data = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
      setData(data);
      console.log(data);
    };

    fetchData();
  }, []);
  //
  return (
    <div>
      <h1>record</h1>
      <RDisplay data={data} />
    </div>
  );
};

export default RecordCheck;
