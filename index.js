const express = require("express");
const cors = require("cors");
const app = express();

app.use(express.json());
app.use(cors());

const attendanceDb = [];

// Route to take attendance
app.post("/attendance", (req, res) => {
  const { studentId, date, status } = req.body;

  if (!studentId || !date) {
    return res.status(400).json({ error: "studentId and date are required" });
  }

  const attendanceRecord = {
    studentId,
    date,
    status: status || "present",
  };

  attendanceDb.push(attendanceRecord);
  res
    .status(201)
    .json({ message: "Attendance recorded", record: attendanceRecord });
});

// Route to get attendance records
app.get("/attendance", (req, res) => {
  res.json(attendanceDb);
});

// Route to get attendance records for a specific student
app.get("/attendance/:studentId", (req, res) => {
  const { studentId } = req.params;
  const records = attendanceDb.filter(
    (record) => record.studentId === studentId
  );
  res.json(records);
});

// Route to get attendance records for a specific date
app.get("/attendance/date/:date", (req, res) => {
  const { date } = req.params;
  const records = attendanceDb.filter((record) => record.date === date);
  res.json(records);
});

// Start the server
// const PORT = process.env.PORT || 3000;
// app.listen(PORT, () => {
//     console.log(`Server is running on port ${PORT}`);
// });

const port = process.env.PORT || 1000;
app.listen(port, () => console.log(`listening on port ${port}`));
