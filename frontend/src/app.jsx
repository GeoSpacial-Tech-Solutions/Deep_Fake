import React, { useState } from "react";
import UploadForm from "./UploadForm";
import Dashboard from "./Dashboard";

function App() {
  // For demo, use hardcoded token and region
  const [token] = useState("YOUR_JWT_TOKEN_HERE");
  const [region, setRegion] = useState("NA");
  const [lastUpload, setLastUpload] = useState(null);

  return (
    <div>
      <h1>Deepfake Detection System</h1>
      <UploadForm token={token} onUploaded={setLastUpload} />
      <Dashboard token={token} region={region} />
    </div>
  );
}

export default App;
