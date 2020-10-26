

function checkEmail() {
    var email = document.getElementById("email").value;
    console.log(email);
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}
function validEmail() {
    if (checkEmail() == true && isVietnamesePhoneNumber() == true) {
        alert("chuc mung");
    }

    else if (checkEmail() == false) {
        alert("Sai Email");
    }
    else if (isVietnamesePhoneNumber() == false) {
        alert("Sai SDT");
    }
}
function isVietnamesePhoneNumber() {
    var number = document.getElementById("tel").value;
    return /(03|07|08|09|01[2|6|8|9])+([0-9]{8})\b/.test(number);
}

                    