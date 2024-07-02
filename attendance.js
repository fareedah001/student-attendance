const container = document.getElementById("container");

async function getData() {
  const data = await fetch("http://localhost:1000/attendance");
  const result = await data.json();
  console.log(result);

  result.map((d) => {
    container.innerHTML += `
   <div
      style="
          border: 1px solid black;
          height: 150px;
          width: 250px;
          align-content: center;
          padding-left: 60px;
          border-radius: 20px;
          background-color: rgba(0, 0, 255, 0.16);
          margin-right: 20;
          margin-bottom: 10
        "
        id="card1"
      >
        <div>
          <b> Student id : ${d.studentId}</b><br />
          <b> Date : ${d.date}</b><br />
          <b> Status: ${d.status}</b><br />
        </div>
      </div>
    `;
  });
}

getData();
