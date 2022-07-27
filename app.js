let button = document.getElementById("button");
button.addEventListener("click", function () {
  let fNameFirstChange = document.getElementById("input1").value;
  let fNameSecondChange = fNameFirstChange.toLowerCase();
  let fName =
    fNameSecondChange.charAt(0).toUpperCase() + fNameSecondChange.slice(1);
  sessionStorage.setItem("fName", fName);

  let mNameFirstChange = document.getElementById("input2").value;
  let mNameSecondChange = mNameFirstChange.toLowerCase();
  let mName =
    mNameSecondChange.charAt(0).toUpperCase() + mNameSecondChange.slice(1);
  sessionStorage.setItem("mName", mName);

  if (fName != "" && fName != " " && mName != "" && mName != " ") {
    location.href = "index1.html";
  } else {
    alert("Please provide names and then press SUBMIT.");
  }
});

let now = new Date();
let hour = now.getHours();
let title = document.querySelector("h1");
if (hour > 4 && hour < 12) {
  title.innerHTML = "Good morning!";
} else if (hour >= 12 && hour < 17) {
  title.innerHTML = "Good afternoon!";
} else if (hour >= 17 && hour < 22) {
  title.innerHTML = "Good evening!";
} else {
  title.innerHTML = "Good night!";
}
