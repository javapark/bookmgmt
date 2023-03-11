import React, { useState } from "react";
import { QrReader } from "react-qr-reader";

function App() {
  const [isbn, setIsbn] = useState(null);

  const handleScan = (data) => {
    if (data) {
      setIsbn(data);
    }
  };

  const handleError = (err) => {
    console.error(err);
  };

  return (
    <div>
      <h1>ISBN Scanner</h1>
      <div>
          <h2>ISBN: {isbn}</h2>
        </div>
        <QrReader
          constraints={{ facingMode: "environment" }}
          delay={300}
          onError={handleError}
          onScan={handleScan}
          style={{ width: "100%" }}
        />
    </div>
  );
}

export default App;
