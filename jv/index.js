var NameInput = document.getElementById("NameInput");

var emailInput = document.getElementById("emailInput");
var passwordInput = document.getElementById("passwordInput");
var loginCard = document.getElementById("loginCard");
var signupCard = document.getElementById("signupCard");
// var btn = document.getElementById("btn");

userData = [];

if (localStorage.getItem("logInData") != null) {
  userData = JSON.parse(localStorage.getItem("logInData"));
  displayData();
}

// btn.onclick = function () {
//   addProduct();
// };

function addProduct() {
  if ((nameLocate(), emailLocate(), existsEmail() ,  passwordLocate())) {
    var logInData = {
      Name: NameInput.value,
      email: emailInput.value,
      password: passwordInput.value,
    };

    userData.push(logInData);
    logSwitch();

    localStorage.setItem("logInData", JSON.stringify(userData));

    clearForm();

    displayData();

    console.log("added");
  }
}

function clearForm() {
  NameInput.value = "";
  emailInput.value = "";
  passwordInput.value = "";
}

function displayData() {
  var box = "";

  for (var i = 0; i < userData.length; i++) {
    box += `<tr>
        <td>${i + 1}</td>
        <td>${userData[i].Name}</td>
        <td>${userData[i].email}</td>
        <td>${userData[i].password}</td>


        <td>  <button class="btn btn-danger " onclick = " deleteItem (${i} )  " ><i class="fa-regular fa-trash-can"></i> delete</button></td>

      </tr>`;
  }

  document.getElementById("tableBody").innerHTML = box;
}

function deleteItem(index) {
  userData.splice(index, 1);
  localStorage.setItem("logInData", JSON.stringify(userData));
  displayData();
}

function nameLocate() {
  var name = document.getElementById("NameInput").value;
  var regexp = /\b([A-ZÀ-ÿa-z][-,a-z. ']+[ ]*)+/gm;
  if (name != "") {
  }

  if (regexp.test(name)) {
    NameInput.classList.add("is-valid");
    NameInput.classList.remove("is-invalid");
    return true;
  } else {
    NameInput.classList.add("is-invalid");
    NameInput.classList.remove("is-valid");
    return false;
  }
}

function emailLocate() {
  var email = document.getElementById("emailInput").value;
  var regexp =
    /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/;
  if (email != "") {
  }

  if (regexp.test(email)) {
    emailInput.classList.add("is-valid");
    emailInput.classList.remove("is-invalid");
    document.getElementById("emailAlert").classList.add("d-none");
    return true;
  } else {
    emailInput.classList.add("is-invalid");
    emailInput.classList.remove("is-valid");
    
    return false;
  }
}

function passwordLocate() {
  var password = document.getElementById("passwordInput").value;
  var regexp = /^[A-Z][A-Za-z]\w{6,}$/;
  if (password != "") {
  }

  if (regexp.test(password)) {
    passwordInput.classList.add("is-valid");
    passwordInput.classList.remove("is-invalid");
    return true;
  } else {
    passwordInput.classList.add("is-invalid");
    passwordInput.classList.remove("is-valid");
    return false;
  }
}

function logSwitch() {
  loginCard.classList.add("d-block");
  loginCard.classList.remove("d-none");
  signupCard.classList.remove("d-block");
  signupCard.classList.add("d-none");
}

function signSwitch() {
  signupCard.classList.add("d-block");
  signupCard.classList.remove("d-none");
  loginCard.classList.remove("d-block");
  loginCard.classList.add("d-none");
}

// function existsEmail() {
//   var localData = JSON.parse(localStorage.getItem("logInData"));

//   for (var i = 0; i < localData.length; i++) {
//     if (emailInput.value != "") {
//     }

//     localData[i].email == emailInput.value
//     if (localData[i].email == emailInput.value) {
//       document.getElementById("emailAlert").classList.remove("d-none");
//       emailInput.classList.add("is-invalid");
//       emailInput.classList.remove("is-valid");
//       return true;
//     } else {
//       emailInput.classList.add("is-valid");
//       emailInput.classList.remove("is-invalid");

//       return false;
//     }
//   }
// }

//login
