let campos = [
    document.querySelector('#data'),
    document.querySelector('#quantidade'),
    document.querySelector('#valor'),
];
console.log(campos);

let tbody = document.querySelector('table tbody');


document.querySelector('.form').addEventListener('submit', function(event) {
    event.preventDefault();
    let lugar = document.querySelector('#teste')

    campos.forEach(function(campo) {

        let block = document.createElement('p');
        block.textContent = campo.value;
        lugar.appendChild(block)

    });


    let blockVolume = document.createElement('p');
    blockVolume.textContent = campos[1].value * campos[2].value;

    lugar.appendChild(blockVolume);

    campos[0].value = ''
    campos[1].value = 1
    campos[2].value = 0.0

});