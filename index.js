let hiddenOutput = document.getElementsByClassName("output");
for(let i = 0; i < hiddenOutput.length; i++) {
    hiddenOutput[i].style.visibility = "hidden";
}

// document.getElementsByClassName("output").style.visibility = "hidden";
document.getElementById('lbsInput').addEventListener('input', function(e){
    // document.getElementsByClassName("output").style.visibility = "visible";

    let hiddenOutput = document.getElementsByClassName("output");
    for(let i = 0; i < hiddenOutput.length; i++) {
        hiddenOutput[i].style.visibility = "visible";
    }
    let lbs = e.target.value;
   
    document.getElementById('gramsOutput').innerHTML = lbs/0.0022046;
    document.getElementById('kgOutput').innerHTML = lbs/2.2046;
    document.getElementById('ozOutput').innerHTML = lbs*16;
});