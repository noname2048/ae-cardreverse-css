const street = document.querySelector('.street');

for (let i = 1; i <= 15; i++) {
    const newDiv = document.createElement("div");
    newDiv.className = "road"
    newDiv.id = `road_${i}`
    street.appendChild(newDiv);
}
    
const sky = document.querySelector(".sky");
for (let i = 1; i <= 15; i++) {
    const newDiv = document.createElement("div");
    newDiv.className = `cloud`
    newDiv.id = `cloud_${i}`
    sky.appendChild(newDiv);
}

const newFront = document.querySelector('.front').cloneNode(true);
const newBack = document.querySelector('.back').cloneNode(true);
newBack.classList.remove("show");

const cardChild = document.querySelector('.card-child');

cardChild.appendChild(newFront);
cardChild.appendChild(newBack);
