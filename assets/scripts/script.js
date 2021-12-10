let radio = [
    {
        hora: "11:00",
        especialista: "Ignacio Schulz",
        paciente: "Francisca Rojas",
        rut: "9878782-1",
        prev: "FONASA",
    },
    {
        hora: "11:30",
        especialista: "Federico Subercaseaux",
        paciente: "Pamela Estrada",
        rut: "15345241-3",
        prev: "ISAPRE",
    },
    {
        hora: "15:00",
        especialista: "Fernando Wurthz",
        paciente: "Armando Luna",
        rut: "16445345-9",
        prev: "ISAPRE",
    },
    {
        hora: "15:30",
        especialista: "Ana María Godoy",
        paciente: "Manuel Godoy",
        rut: "17666419-0",
        prev: "FONASA",
    },
    {
        hora: "16:00",
        especialista: "Patricia Suazo",
        paciente: "Ramón Ulloa",
        rut: "14989389-k",
        prev: "FONASA",
    },
]

let trauma = [
    {
        hora: "8:00",
        especialista: "María Paz Altuzarra",
        paciente: "Paula Sánchez",
        rut: "15554774-5",
        prev: "FONASA",
    },
    {
        hora: "10:30",
        especialista: "Raúl Araya",
        paciente: "Angélica Navas",
        rut: "15444147-9",
        prev: "ISAPRE",
    },
    {
        hora: "10:30",
        especialista: "María Arriagada",
        paciente: "Ana Klapp",
        rut: "17879423-9",
        prev: "ISAPRE",
    },
    {
        hora: "11:00",
        especialista: "Alejandro Badilla",
        paciente: "Felipe Mardones",
        rut: "1547423-6",
        prev: "ISAPRE",
    },
    {
        hora: "11:30",
        especialista: "Cecilia Budnik",
        paciente: "Diego Marre",
        rut: "16554741-K",
        prev: "FONASA",
    },
    {
        hora: "12:00",
        especialista: "Arturo Cavagnaro",
        paciente: "Cecilia Mendez",
        rut: "9747535-8",
        prev: "ISAPRE",
    },
    {
        hora: "12:30",
        especialista: "Andrés Kanacri",
        paciente: "Marcial Suazo",
        rut: "11254785-5",
        prev: "ISAPRE",
    },
]

let dental = [
    {
        hora: "8:30",
        especialista: "Andrea Zúñiga",
        paciente: "Marcela Retamal",
        rut: "11123425-6",
        prev: "ISAPRE",
    },
    {
        hora: "11:00",
        especialista: "María Pía Zañartu",
        paciente: "Ángel Muñoz",
        rut: "9878789-2",
        prev: "ISAPRE",
    },
    {
        hora: "11:30",
        especialista: "Scarlett Witting",
        paciente: "Mario Boric",
        rut: "7998789-5",
        prev: "FONASA",
    },
    {
        hora: "13:00",
        especialista: "Francisco Von Teuber",
        paciente: "Karin Fernández",
        rut: "18887662-K",
        prev: "FONASA",
    },
    {
        hora: "13:30",
        especialista: "Eduardo Viñuela",
        paciente: "Hugo Sánchez",
        rut: "17665461-4",
        prev: "FONASA",
    },
    {
        hora: "14:00",
        especialista: "Raquel Villaseca",
        paciente: "Ana Sepúlveda",
        rut: "14441281-0",
        prev: "ISAPRE",
    },
]

let primul = document.querySelector("#primultima");
let botrad = document.querySelector('#btn-1');
let bottra = document.querySelector('#btn-2');
let botden = document.querySelector('#btn-3');
let tab1 = document.querySelector(".radio");
let tab2 = document.querySelector(".trauma");
let tab3 = document.querySelector(".dental");
let distab1 = (document.querySelector(".tab1"));
let distab2 = (document.querySelector(".tab2"));
let distab3 = (document.querySelector(".tab3"));

function loggi(x) {
    let table = ""
    for (ele of x) {
        table += '<tr>';
        for (mento in ele) {
            table += `<td>${ele[mento]}</td>`;
        }
        table  += '</tr>';
    }
    return table;
}

tab1.innerHTML = loggi(radio);
tab2.innerHTML = loggi(trauma);
tab3.innerHTML = loggi(dental);

botrad.addEventListener('click', function () {
    primul.innerHTML = `Primera atención: ${radio[0].paciente} - ${radio[0].prev} | Última atención: ${radio[radio.length-1].paciente} - ${radio[radio.length-1].prev}`;
    distab1.setAttribute('class', 'tab1');
    distab2.setAttribute('class', 'd-none tab2');
    distab3.setAttribute('class', 'd-none tab3');
    botrad.setAttribute('class', 'btn btn-primary active');
    bottra.setAttribute('class', 'btn btn-primary');
    botden.setAttribute('class', 'btn btn-primary');
})
bottra.addEventListener('click', function () {
    primul.innerHTML = `Primera atención: ${trauma[0].paciente} - ${trauma[0].prev} | Última atención: ${trauma[trauma.length-1].paciente} - ${trauma[trauma.length-1].prev}`;
    distab1.setAttribute('class', 'd-none tab1');
    distab2.setAttribute('class', 'tab2');
    distab3.setAttribute('class', 'd-none tab3');
    botrad.setAttribute('class', 'btn btn-primary');
    bottra.setAttribute('class', 'btn btn-primary active');
    botden.setAttribute('class', 'btn btn-primary');
})

botden.addEventListener('click', function () {
    primul.innerHTML = `Primera atención: ${dental[0].paciente} - ${dental[0].prev} | Última atención: ${dental[dental.length-1].paciente} - ${dental[dental.length-1].prev}`;
    distab1.setAttribute('class', 'd-none tab1');
    distab2.setAttribute('class', 'd-none tab2');
    distab3.setAttribute('class', 'tab3');
    botrad.setAttribute('class', 'btn btn-primary');
    bottra.setAttribute('class', 'btn btn-primary');
    botden.setAttribute('class', 'btn btn-primary active');
})

/*
tab1.innerHTML = `${loggi(radio)}`;
tab2.innerHTML = `${loggi(trauma)}`;
tab3.innerHTML = `${loggi(dental)}`;

function mostrar() {
    tab1.setAttribute('class', 'd-block');
}
*/