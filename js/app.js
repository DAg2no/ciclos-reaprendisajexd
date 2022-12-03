const Names = ['thomas', 'mario', 'juan', 'pablo']
// capturando texto del id

let box = document.getElementById('box');

function activeCircuit(){
if (Names[1] == box.value) {
    console.log('correct')
} else {
    console.error('incorrect')
}
}
