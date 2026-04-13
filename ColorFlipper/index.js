const body = document.getElementsByTagName("body")[0]
body.style.backgroundColor = "whitesmoke"

function setColor(name) {
    body.style.backgroundColor = name;
}

function setRandomColor() {
    const r = Math.round(Math.random() * 255);
    const g = Math.round(Math.random() * 255);
    const b = Math.round(Math.random() * 255);
    
    const color = `rgb(${r},${g},${b})`
    body.style.backgroundColor = color;
}


