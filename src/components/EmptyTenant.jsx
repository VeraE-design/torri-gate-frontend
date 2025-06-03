import React from "react";
import img from "../assets/Frame.png";

const EmptyTenant = () => {
  return (
    <div className="h-[500px] flex items-center justify-center">
      <div className="text-center p-1.5 max-w-[356px]">
        <img src={img} alt="image" className="mx-auto block" />
        <h1 className="font-medium text-xl my-2.5">No Match found</h1>
        <p className="text-[#666] font-medium text-[16px] mb-6">
          We couldnt find any House that matches your search request.
        </p>
      </div>
    </div>
  );
};

export default EmptyTenant;
