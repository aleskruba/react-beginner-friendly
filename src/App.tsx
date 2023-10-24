// import Message from './Message'
// import ListGroup from './components/ListGroup'
import { useState } from "react";
import Alert from "./components/Alert";
import AlertButton from "./components/AlertButton";
import Button from "./components/Button";

function App() {
  const [alertVisible, setAlertVisibility] = useState(false);

  return (
    <div className="alert alert-primary">
      {alertVisible && (
        <Alert onClose={() => setAlertVisibility(false)}>My Alert</Alert>
      )}
      <Button onClick={() => console.log("Clicked")}>My Button</Button>
      <AlertButton onClick={() => setAlertVisibility(true)}>
        Open Alert
      </AlertButton>
    </div>
  );
}

export default App;
