import { Card } from "flowbite-react";
import React from "react";

const feature = ({ feature }) => {
  const { images } = feature;
  return (
    <div className="max-w-sm">
     <Card>
      <img style={{height:'180px'}} src={images} alt="not found" />
      </Card>
    </div>
  );
};

export default feature;
