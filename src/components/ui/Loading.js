import React from "react";
import ReactLoading from "react-loading";

function Loading() {
  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
    }}>
      <ReactLoading type={"bars"} color={"#0055ff"} height={200} width={200} />
    </div>
  );
}

export default Loading;
