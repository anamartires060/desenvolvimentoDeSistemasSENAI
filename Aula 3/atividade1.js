<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Atividade 1 - Lista de Filmes</title>
</head>
<body>
    <h1>Atividade 1 - Lista de 6 Filmes</h1>
    <button onclick="listarFilmes()">Mostrar Filmes</button>

    <pre id="saida"></pre>

    <script>
        function listarFilmes() {
            let filmes = [
                "Para todos os garotos que já amei",
                "Gente Grande",
                "Interestelar",
                "Alvin e os esquilos",
                "A bailarina",
                "Avatar"
            ];

            let texto = "===== Lista de Filmes =====\n";
            for (let i = 0; i < filmes.length; i++) {
                texto += (i + 1) + " - " + filmes[i] + "\n";
            }

            document.getElementById("saida").textContent = texto;
        }
    </script>
</body>
</html>