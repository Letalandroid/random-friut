document.getElementById("ident").addEventListener("click", () => {

    let fruta = Math.round(Math.random() * 2);
    console.log(fruta);

    let frutas = ["Manzana", "Banana", "Fresa"];

    document.getElementById("p-fruta").innerHTML = frutas[fruta];

    switch (fruta) {

        case 0:
            document.getElementById("banana").style.display = "none"
            document.getElementById("fresa").style.display = "none"
            document.getElementById("apple").style.display = "inline"
            break;

        case 1:
            document.getElementById("fresa").style.display = "none"
            document.getElementById("apple").style.display = "none"
            document.getElementById("banana").style.display = "inline"
            break;

        case 2:
            document.getElementById("banana").style.display = "none"
            document.getElementById("apple").style.display = "none"
            document.getElementById("fresa").style.display = "inline"
            break;

        default:
            break;

    }

});