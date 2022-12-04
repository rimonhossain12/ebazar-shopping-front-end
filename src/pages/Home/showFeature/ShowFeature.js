import axios from "axios";
import React, { useEffect, useState } from "react";

const ShowFeature = () => {
  const [features, setFeature] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:5000/feature")
      .then((res) => {
        console.log(res.data)
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
      <div className="grid sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-5 container-lg px-12">
    </div>
  );
};

export default ShowFeature;
