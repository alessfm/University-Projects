<?php 
// Média = (0.4 × AVP1) + (0.4 × AVP2) + [0.05 × (TDE1 + TDE2 + TDE3 + TDE4)]

$nota1 = floatval($_POST["avp1"]);
$nota2 = floatval($_POST["avp2"]);
$nota3 = floatval($_POST["tde1"]);
$nota4 = floatval($_POST["tde2"]);
$nota5 = floatval($_POST["tde3"]);
$nota6 = floatval($_POST["tde4"]);

$media = (0.4 * $nota1) + (0.4 * $nota2) + (0.05 * ($nota3 + $nota4 + $nota5 + $nota6));
$fala = "";

if ($media >= 7){
    $fala = " Sua média é $media. Aprovado!";
}elseif ($media < 7 && $media >= 4){
    $fala = " Sua média é $media. Vai para AVF.";
}else{
    $fala = " Sua média é $media. Reprovado.";
} 
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Calculadora de Média</title>
</head>
<body>
    <div>
        <h1>Calcule sua média:</h1>
    </div>
    <div>
    <form method="post">
        <div>
            <label for="avp1">Nota da AVP1:</label>
            <input type="number" name="avp1">
        </div>
        <div>
            <label for="avp2">Nota da AVP2:</label>
            <input type="number" name="avp2">
        </div>
        <div>
            <div>
                <label for="tdes">Nota dos TDEs:</label>
            </div>
            <label for="tde1">TDE1:</label>
            <input type="number" name="tde1">
            <label for="tde2">TDE2:</label>
            <input type="number" name="tde2">
            <label for="tde3">TDE3:</label>
            <input type="number" name="tde3">
            <label for="tde4">TDE4:</label>
            <input type="number" name="tde4">
        </div>
        <div>
            <button type="submit" value="Submit">Calcular</button>
        </div>
    </form>
    </div>
    <div>
        <h4><?= $fala ?></h4>
    </div>
</body>
</html>
