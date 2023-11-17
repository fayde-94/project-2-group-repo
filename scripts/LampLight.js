const socket = new WebSocket("ws://homeassistant.local:8123/api/websocket");
var idNumber = 1;

socket.onopen = (event) => {
  console.log("WebSocket connection opened:", event);

  // Authenticate with Home Assistant
  socket.send(
    JSON.stringify({
      type: "auth",
      access_token:
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJhMmM3MWI4YTdjZjU0NTdkOWVmZmVjMTI3ZTcyNmM0YyIsImlhdCI6MTcwMDI0MDU3NiwiZXhwIjoyMDE1NjAwNTc2fQ.qU9qQdmwScJHjUrVa9eSNRUUvaoMPUFfjzteBh-YYLw"
  );

  // Subscribe to events (optional)
  socket.send(
    JSON.stringify({
      type: "subscribe_events",
    })
  );
};

socket.onmessage = (event) => {
  const data = JSON.parse(event.data);
  console.log("Received message:", data);

  // Process received messages if needed
};

socket.onclose = (event) => {
  console.log("WebSocket connection closed:", event);
};

function sendMessage(message) {
  console.log("Sending message:", message);
  socket.send(message);
}

function turnOnSwitch() {
  // Example: Send a command to turn on Switch
  const message = JSON.stringify({
    id: idNumber,
    type: "call_service",
    domain: "switch",
    service: "turn_on",
    service_data: {
      entity_id: "switch.thing2", // Replace with your switch entity ID
    },
  });
  idNumber++;
  sendMessage(message);
}

function turnOffSwitch() {
  // Example: Send a command to turn off Switch
  const message = JSON.stringify({
    id: idNumber,
    type: "call_service",
    domain: "switch",
    service: "turn_off",
    service_data: {
      entity_id: "switch.thing2", // Replace with your switch entity ID
    },
  });
  idNumber++;
  sendMessage(message);
}

function flickSwitch(buttonID) {
  const button = document.getElementById(buttonID);
  if (button.checked == true) {
    turnOnSwitch();
  } else if (button.checked == false) {
    turnOffSwitch();
  }
}
