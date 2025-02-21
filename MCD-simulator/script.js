function calcolaMCD() {
    let num1 = parseInt(document.getElementById("num1").value);
    let num2 = parseInt(document.getElementById("num2").value);

    if (isNaN(num1) || isNaN(num2) || num1 <= 0 || num2 <= 0) {
        document.getElementById("risultato").innerText = "Inserisci numeri validi!";
        return;
    }

    function mcd(a, b) {
        while (b) {
            let temp = b;
            b = a % b;
            a = temp;
        }
        return a;
    }

    let risultato = mcd(num1, num2);
    document.getElementById("risultato").innerText = `MCD: ${risultato}`;
}
