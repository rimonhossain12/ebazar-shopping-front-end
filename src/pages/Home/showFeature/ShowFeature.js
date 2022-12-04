import axios from "axios";
import React, { useEffect, useState } from "react";
import Feature from "./Feature";
const ShowFeature = () => {
  const [features, setFeature] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/feature")
      .then((res) => {
        // console.log(res.data)
        const data = res.data;
        setFeature(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="grid sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-5 container-lg px-12">
      {features.map((feature) => (
        <Feature key={feature._id} feature={feature} />
      ))}
    </div>
  );
};

export default ShowFeature;
