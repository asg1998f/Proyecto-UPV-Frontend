import { useEffect, useState } from 'react'
import { Button } from "antd";
import { useDispatch, useSelector } from "react-redux";

const Landing = () => {
  const [files, setFiles] = useState([]);

  const subirArchivos = (file) =>{
    console.log(file);
    
  }

  const handleFileChange = (event) => {
    setFiles(event.target.files);
  };
  
  const handleUpload = async () => {
    for (const file of files) {
      await subirArchivos(file);
    }
  };

  return (
    <div>
      <input type="file" id="fileInput" multiple onChange={handleFileChange}
        accept="*/*"/>
      <Button onClick={subirArchivos} disabled={files.length === 0}>Subir foto</Button>
    </div>
  )
}

export default Landing
