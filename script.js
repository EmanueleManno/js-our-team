//VEDO SE FUNZIONA:
console.log('JS OK');

//CREO UN ARRAY DEI MEMBRI DEL TEAM:
const members = [
    {
        firstName: 'Wayne',
        surName: 'Barnett',
        role: 'Founder & CEO',
        photo: 'wayne-barnett-founder-ceo.jpg'
    },

    {
        firstName: 'Angela',
        surName: 'Caroll',
        role: 'Chief Editor',
        photo: 'angela-caroll-chief-editor.jpg'
    },

    {
        firstName: 'Walter',
        surName: 'Gordon',
        role: 'Office Manager',
        photo: 'walter-gordon-office-manager.jpg'
    },

    {
        firstName: 'Angela',
        surName: 'Lopez',
        role: 'Social Media Manager',
        photo: 'angela-lopez-social-media-manager.jpg'
    },

    {
        firstName: 'Scott',
        surName: 'Estrada',
        role: 'Developer',
        photo: 'scott-estrada-developer.jpg'
    },

    {
        firstName: 'Barbara',
        surName: 'Ramos',
        role: 'Graphic Designer',
        photo: 'barbara-ramos-graphic-designer.jpg'
    }
]

//STAMPO TUTTO L'ARRAY SOTTOFORMA DI TABELLA:
console.table(members);

//STAMPO IN CONSOLE LE INFO RELATIVE AL PRIMO OGGETTO DELL'ARRAY:
console.log('PRIMO OGGETTO ARRAY: ' + members[0]['firstName'] , members[0]['role'] , members[0]['photo']);

//STAMPO IN CONSOLE LE INFO RELATIVE AL SECONDO OGGETTO DELL'ARRAY:
console.log('SECONDO OGGETTO ARRAY: ' + members[1]['firstName'] , members[1]['role'] , members[1]['photo']);

//STAMPO IN CONSOLE LE INFO RELATIVE AL TERZO OGGETTO DELL'ARRAY:
console.log('TERZO OGGETTO ARRAY: ' + members[2]['firstName'] , members[2]['role'] , members[2]['photo']);

//STAMPO IN CONSOLE LE INFO RELATIVE AL QUARTO OGGETTO DELL'ARRAY:
console.log('QUARTO OGGETTO ARRAY: ' + members[3]['firstName'] , members[3]['role'] , members[3]['photo']);

//STAMPO IN CONSOLE LE INFO RELATIVE AL QUINTO OGGETTO DELL'ARRAY:
console.log('QUINTO OGGETTO ARRAY: ' + members[4]['firstName'] , members[4]['role'] , members[4]['photo']);

//STAMPO IN CONSOLE LE INFO RELATIVE AL SESTO OGGETTO DELL'ARRAY:
console.log('SESTO OGGETTO ARRAY: ' + members[5]['firstName'] , members[5]['role'] , members[5]['photo']);


