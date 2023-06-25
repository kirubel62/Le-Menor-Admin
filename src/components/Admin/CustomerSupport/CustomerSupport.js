import React from "react";
import "./CustomerSupport.css";
import CSDisplay from "./CSDisplay";
import { useState , useEffect } from "react";
//
import { db } from "../../../FireBase/Firebase";
import { collection , getDocs } from "firebase/firestore";
//

const CustomerSupport = () => {
  //
  const [data, setData] = useState([]);
  const [Key, setKey] = useState("");
  //
  //
  useEffect(() => {
    const fetchData = async () => {
      //const db = firebase.firestore();
      //const snapshot = await db.collection("users").get();
      const snapshot = await getDocs(collection(db, "CustomerSupport"));
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
      <CSDisplay data={data} />
    </div>
  );
};

export default CustomerSupport;
