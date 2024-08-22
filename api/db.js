import mysql from "mysql";

export const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "root",
  database: "blog",
});

// // let connection;

// function handleDisconnect() {
//   // connection = mysql.createConnection({
//   //   host: "localhost",
//   //   user: "root",
//   //   password: "root",
//   //   database: "blog",
//   // });

//   db.connect((err) => {
//     if (err) {
//       console.log("Error connecting to DB:", err);
//       setTimeout(handleDisconnect, 2000); // Reconnect after 2 seconds
//     }
//   });

//   db.on("error", (err) => {
//     if (err.code === "PROTOCOL_CONNECTION_LOST") {
//       handleDisconnect(); // Reconnect on connection loss
//     } else {
//       throw err;
//     }
//   });
// }

// handleDisconnect();
