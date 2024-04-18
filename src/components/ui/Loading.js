import React from "react";
import ReactLoading from "react-loading";
import backgroundImage from "../../static/photos/bg.webp";

function Loading() {
  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        zIndex: 1000,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          filter: "brightness(20%)",
        }}
      />

      <div
        style={{
          position: "relative",
          zIndex: 1001,
          display: "flex", 
          flexDirection: "column",
          justifyContent: "center", 
          alignItems: "center",
          width: "100%",
        }}
      >
        <ReactLoading
          type={"bars"}
          color={"#0055ff"}
          height={200}
          width={200}
        />
        <h3 style={{ fontSize: "30px", fontFamily: "Lato", color: "white" }}>
          It might take up to 1 minute, please wait patiently.
        </h3>
      </div>
    </div>
  );
}

export default Loading;
