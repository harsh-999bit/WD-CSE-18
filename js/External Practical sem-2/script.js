function convertTemp() {
    let temp = Number(document.getElementById("temp").value);
    let type = document.getElementById("type").value;
    let result;

    if (type === "fc") {
        result = ((temp - 32) * 5 / 9).toFixed(2) + " °C";
    } else {
        result = ((temp * 9 / 5) + 32).toFixed(2) + " °F";
    }

    document.getElementById("result").textContent = result;
}