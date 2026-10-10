  const text = document.getElementById("text");
        const toFah = document.getElementById("toFah");
        const toCel = document.getElementById("toCel");
        const result = document.getElementById("result");
        let temp;

        function convert() {
            if (toFah.checked) {
                temp = Number(text.value);
                temp = temp * 9 / 5 + 32;
                result.textContent = temp + "°F";
            } else if (toCel.checked) {
                temp = Number(text.value);
                temp = (temp - 32) * (5 / 9);
                result.textContent = temp.toFixed(2) + "°C";  // Rounding to 2 decimal places for better readability
            } else {
                result.textContent = "No unit selected";
            }
        }