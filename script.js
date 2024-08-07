const lirikElement = document.getElementById("lirik");
const lirikLagu = "Fuck You 🙂"
let index = 0;

function ketikLirik() {
    if (index < lirikLagu.length) {
        lirikElement.textContent += lirikLagu.charAt(index);
        index++;
        setTimeout(ketikLirik, 100);
    }
}

ketikLirik()