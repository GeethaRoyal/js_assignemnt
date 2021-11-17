console.log("Holaaaaaaaaaaaaaa")
let p = new Promise((resolve, reject) => {
    let h1 = document.getElementsByTagName('h1')[0];
    h1 = ""
    if (h1) {
        h1.innerHTML = "Welcome";
        resolve("Success")
    } else {
        h1.innerHTML = "Something went wrong";
        reject("Something went wrong")
    }
})


p.then(message => {
    console.log('This is in the then ' + message)
}).catch(message => {
    console.log('This is in the catch ' + message)
})

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
        alert("Please enter your name.");
        name.focus();
        return false;
    }

    if (email.value == "") {
        alert(
            "Please enter a valid e-mail address.");
        email.focus();
        return false;
    }

    if (phone.value == "" || phone.value.length < 10) {
        alert(
            "Please enter valid phone number");
        phone.focus();
        return false;
    }

    if (password.value.length < minNumberofChars || password.value.length > maxNumberofChars) {
        alert("password should be between 8 to 16 characters");
        password.focus();
        return false;
    }
    if (!regularExpression.test(password.value)) {
        alert("password should contain atleast one capital letter, one number and one special character");
        password.focus();
        return false;
    }

    if (dob.value == "") {
        window.alert("Please enter valid date of birth.");
        dob.focus();
        return false;
    }
    return True
}



class UI {
    static displayQuote() {
        const data = [{
                    "quote": "Life isn’t about getting and having, it’s about giving and being.",
                    "author": "Kevin Kruse"
                },
                {
                    "quote": "Whatever the mind of man can conceive and believe, it can achieve.",
                    "author": "Napoleon Hill"

                }
            ]
            // const data = require("./quotes.json");
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

document.addEventListener('DOMContentLoaded', UI.displayQuote)
