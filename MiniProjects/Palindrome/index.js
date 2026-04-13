const input = document.getElementById("input")

function reverseString(str) {
    return str.split('').reverse().join('')
}

function checkIfPalindrome() {
    const value = input.value;
    if (value === reverseString(value)) {
        alert("True")
    }
    else {
        alert("False")
    }

    input.value = ""
}