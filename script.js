const Challenge = document.querySelectorAll(".Challenge");
const filter = document.getElementById("filter");

filter.addEventListener("input", (e) => filterData(e.target.value));

function filterData(retos) {
    Challenge.forEach((item) => {
        // console.log(item.p.innerText)
        if (item.innerText.toLowerCase().includes(retos.toLowerCase())) {
            item.classList.remove("hide");
        } else {
            item.classList.add("hide");
        }
    });
}
