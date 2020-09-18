function presser (touche){
    document.getElementById('resultat').innerHTML += touche;
}
function calculer (){
    var expression = document.getElementById('resultat').innerHTML
    console.log(expression,  math.evaluate(expression))
    var resultAtAfficher = math.evaluate(expression)
    document.getElementById('resultat').innerHTML = resultAtAfficher;
}
