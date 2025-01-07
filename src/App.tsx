import { useState } from "react";
import Alert from "./components/Alert";
import AlertButton from "./components/AlertButton";
import Button from "./components/Button";
import Status from "./components/Status";

function App() {
  const [alertVisible, setAlertVisibility] = useState(false);

  const toggleAlert = () => {
    setAlertVisibility((prev) => !prev);
  };


  return (
    <div className="alert alert-primary">
      {alertVisible && (
        <Alert onClose={() => setAlertVisibility(false)}>My Alert</Alert>
      )}

      <Button onClick={() => toggleAlert()} alertVisible={alertVisible}>Change Status - currently </Button>

        <Status alertVisible={alertVisible}/>

      <AlertButton onClick={() => setAlertVisibility(true)}>
        Open Alert
      </AlertButton>
    </div>
  );
}

export default App;
