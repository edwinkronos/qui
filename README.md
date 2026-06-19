<!DOCTYPE html>
<html lang="es">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Quiniela Edwin</title>

<style>
body{
    font-family: Arial, sans-serif;
    background:#f2f2f2;
    margin:0;
    padding:20px;
}

.contenedor{
    max-width:800px;
    margin:auto;
}

.encabezado{
    background:#5d8c31;
    color:white;
    padding:20px;
    border-radius:10px 10px 0 0;
}

.encabezado h1{
    margin:0;
}

.marcador{
    font-size:40px;
    text-align:center;
    margin-top:10px;
}

table{
    width:100%;
    border-collapse:collapse;
    background:white;
}

th{
    background:#72a93f;
    color:white;
    padding:12px;
}

td{
    padding:10px;
    text-align:center;
    border-bottom:1px solid #ddd;
}

tr:hover{
    background:#f5f5f5;
}

.total{
    background:#fff;
    padding:15px;
    text-align:right;
    font-weight:bold;
    border-radius:0 0 10px 10px;
}
</style>

</head>
<body>

<div class="contenedor">

<div class="encabezado">
    <h1>🇧🇷 BRASIL - HAITÍ 🇭🇹</h1>
    <div class="marcador">
        0 - 0
    </div>
</div>

<table>
<thead>
<tr>
    <th>#</th>
    <th>Apostador</th>
    <th>Apuesta</th>
    <th>Brasil</th>
    <th>Haití</th>
</tr>
</thead>

<tbody id="tablaApuestas">
</tbody>

</table>

<div class="total">
    Total apostado: Bs 54.40
</div>

</div>

<script>

const apuestas = [
    {nombre:"JOSE", apuesta:"9.40", brasil:3, haiti:2},
    {nombre:"HUBBER", apuesta:"10.00", brasil:2, haiti:1},
    {nombre:"EDWIN", apuesta:"10.00", brasil:3, haiti:0},
    {nombre:"AMELIA", apuesta:"10.00", brasil:3, haiti:1},
    {nombre:"CRISTIAN ACTIVOS", apuesta:"5.00", brasil:"-", haiti:"-"}
];

const tabla = document.getElementById("tablaApuestas");

apuestas.forEach((item, index)=>{

    tabla.innerHTML += `
    <tr>
        <td>${index+1}</td>
        <td><b>${item.nombre}</b></td>
        <td>${item.apuesta}</td>
        <td>${item.brasil}</td>
        <td>${item.haiti}</td>
    </tr>
    `;

});

</script>

</body>
</html>
