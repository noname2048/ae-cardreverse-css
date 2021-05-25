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
}
