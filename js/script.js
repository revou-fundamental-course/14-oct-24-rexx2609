// test
function replaceName() {
    let name = prompt("Siapakah Nama Anda?", "");
    document.getElementById("name").innerHTML = name
}

replaceName()

function validateForm() {
    var name = document.forms["message-form"]["full-name"].value;
    var birthDate = document.forms["message-form"]["birth-date"].value;
    var gender = document.forms["message-form"]["gender"].value;
    var messages = document.forms["message-form"]["messages"].value;

    if (name === "" || birthDate === "" || gender === "" || messages === "") {
        alert("Tidak boleh ada yang kosong");
        return false
    }

    setSenderUI(name, birthDate, gender, messages);

    return false;
}

function setSenderUI(name, birthDate, gender, messages) {
    document.getElementById("sender-full-name").innerHTML = name;
    document.getElementById("sender-birth-date").innerHTML = birthDate;
    document.getElementById("sender-gender").innerHTML = gender;
    document.getElementById("sender-messages").innerHTML = messages;
}