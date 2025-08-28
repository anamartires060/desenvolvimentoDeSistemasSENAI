<!DOCTYPE 
html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Atividade 2 - Inverter Números</title>
</head>
<body>
    <h1>Atividade 2 - Ler e Inverter Números</h1>
    <button onclick="inverterNumeros()">Executar</button>

    <pre id="saida"></pre>

    <script>
        function inverterNumeros() {
            let numeros = [];
            for (let i = 0; i < 3; i++) {
                let num = prompt("Digite o " + (i + 1) + "º número:");
                numeros.push(Number(num));
            }

            let texto = "Array original: " + numeros.join(", ") + "\n";
            let invertido = [...numeros].reverse();
            texto += "Array invertido: " + invertido.join(", ");

            document.getElementById("saida").textContent = texto;
        }
    </script>
</body>
</html>