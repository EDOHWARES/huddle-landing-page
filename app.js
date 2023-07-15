const tens = document.querySelector(".tens")
const units = document.querySelector(".units")

const increase = (t, u) => {
    let uD = u.textContent++;
    if (uD == 9) {
        u.textContent = 0;
        t.textContent++;
    }
}

setInterval(() => {
    increase(tens, units)
}, 1000);