import React from "react";
import ReactLoading from "react-loading";

function Loading() {
  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "rgba(0, 0, 0, 0.5)",
      }}
    >
      <ReactLoading type={"bars"} color={"#0055ff"} height={200} width={200} />
      <h3 style={{ fontSize: "30px", fontFamily: "Lato" }}>
        It might take up to 1 minute, please wait patiently.
      </h3>
    </div>
  );
}

export default Loading;
