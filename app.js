const street = document.querySelector('.street');

function getIdByStringAndNumber(name, i) {
    if (i < 10) {
        return `${name}_0${i}`;
    }
    return `${name}_${i}`;
}

for (let i = 1; i <= 15; i++) {
    const newDiv = document.createElement("div");
    newDiv.className = "road"
    newDiv.id = getIdByStringAndNumber('road', i);
    street.appendChild(newDiv);
}
    
const sky = document.querySelector(".sky");
for (let i = 1; i <= 15; i++) {
    const newDiv = document.createElement("div");
    newDiv.className = `cloud`
    newDiv.id = getIdByStringAndNumber('cloud', i);
}
