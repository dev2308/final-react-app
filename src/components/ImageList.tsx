import React from "react";
import ImageCard from "./ImageCard";

function ImageList(props: any) {
  const { onChipTypeChange, imageDetails } = props;
  return (
    <div>
      {imageDetails.map((data: {}) => {
        return (
          <div>
            <ImageCard data={data} onChipTypeChange={onChipTypeChange} />
          </div>
        );
      })}
    </div>
  );
}

export default ImageList;
