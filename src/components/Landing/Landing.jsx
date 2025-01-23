import React, { useState } from "react";

const Landing = () => {
  const subirFotos = () => {

  }

  return (
    <div>
      <h1>Subir Archivos a Google Drive</h1>
      <input
        type="file"
        multiple
        onChange={handleFileChange}
        accept="*/*"
      />
      <button onClick={subirFotos} disabled={files.length === 0}>
        Subir Archivos
      </button>
    </div>
  );
};

export default Landing