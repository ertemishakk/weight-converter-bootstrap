document.getElementById('kgInput').addEventListener('input',converter)

function converter(){
    var kgs= document.getElementById('kgInput').value;
    document.getElementById('gramsOutput').innerHTML= kgs*1000;
    document.getElementById('poundOutput').innerHTML= kgs*2.20462;
    document.getElementById('ozOutput').innerHTML= kgs*35.274;

}