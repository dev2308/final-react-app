import React from "react";
import ImageCard from "./ImageCard";

function ImageList(props: any) {
  const { onChipTypeChange, imageDetails, region, costEstimator } = props;
  return (
    <div>
      {imageDetails.map((data: {}) => {
        return (
          <div>
            <ImageCard data={data} onChipTypeChange={onChipTypeChange} region={region} costEstimator={costEstimator}/>
          </div>
        );
      })}
    </div>
  );
}

export default ImageList;
