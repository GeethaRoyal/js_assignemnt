import data from "./quotes.json"
console.log(data)

function validateFunc() {
    var name = document.forms["login-form"]["name"];
    var email = document.forms["login-form"]["email"];
    var phone = document.forms["login-form"]["phno"];
    var password = document.forms["login-form"]["password"];
    var dob = document.forms["login-form"]["dob"];
    var minNumberofChars = 8;
    var maxNumberofChars = 16;
    var regularExpression = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,16}$/;

    if (name.value == "") {
        window.alert("Please enter your name.");
        name.focus();
        return false;
    }

    if (email.value == "") {
        window.alert(
            "Please enter a valid e-mail address.");
        email.focus();
        return false;
    }

    if (phone.value == "" || phone.value.length < 10) {
        window.alert(
            "Please enter valid phone number");
        phone.focus();
        return false;
    }

    if (password.length < minNumberofChars || password.length > maxNumberofChars) {
        return false;
    }
    if (!regularExpression.test(password)) {
        alert("password should contain atleast one capital letter, one number and one special character");
        return false;
    }

    if (dob.value == "") {
        window.alert("Please enter valid date of birth.");
        address.focus();
        return false;
    }
    return True
}

let p = new Promise((resolve, reject) => {
    if (validateFunc()) {

    } else {

    }


})


class UI {
    static displayQuote() {
        console.log(data);
        data.forEach(quote => UI.addQuoteToList(quote))
    }
    static addQuoteToList(quote) {
        const list = document.getElementById('quotes-list')
        const row = document.createElement('tr')
        row.innerHTML = `
        <td>${quote.quote}</td>
        <td>${quote.author}</td>
        `
        list.appendChild(row)
    }
}

document.addEventListener('DOMContentLoaded', UI.displayQuote())