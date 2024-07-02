const form = document.getElementById("form");
const id = document.getElementById("studentId");
const date = document.getElementById("date");
const status = document.getElementById("status");
const btn = document.getElementById("submit");

btn.addEventListener("click", submitForm);

async function submitForm(e) {
  e.preventDefault();
  // console.log(id.value, date.value, status.value);

  const data = await fetch("http://localhost:1000/attendance", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      studentId: id.value,
      date: date.value,
      status: status.value,
    }),
  });

  const res = await data.json();
  if (res) {
    window.alert("Submitted");
  }
}
