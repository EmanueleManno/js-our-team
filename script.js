//VEDO SE FUNZIONA:
console.log('JS OK');

//RECUPERO GLI ELEMENTI DAL DOM:
const names = document.getElementById('names');
const roles = document.getElementById('roles');
const photos = document.getElementById('photos');

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

//STAMPO IN CONSOLE TUTTI I NOMI:
console.log('I NOMI: ' + members[0]['firstName'] , members[1]['firstName'] , members[2]['firstName'] , members[3]['firstName'] , members[4]['firstName'] , members[5]['firstName']);

//STAMPO IN CONSOLE TUTTI I RUOLI:
console.log('I RUOLI: ' + members[0]['role'] , members[1]['role'] , members[2]['role'] , members[3]['role'] , members[4]['role'] , members[5]['role']);

//STAMPO IN CONSOLE TUTTE LE STRINGHE FOTO:
console.log('STRINGHE FOTO: ' + members[0]['photo'] , members[1]['photo'] , members[2]['photo'] , members[3]['photo'] , members[4]['photo'] , members[5]['photo']);

//PREPARO LA STRINGA DEI NOMI CHE METTERO' IN PAGINA:
let namesList = '<ul></ul>';

//PREPARO LA LISTA DEI RUOLI CHE METTERO' IN PAGINA:
let rolesList = '<ul></ul>';

//PREPARO LA LISTA DELLE FOTO CHE METTERO' IN PAGINA:
let photosList = '<ul></ul>';

//RECUPERO I NOMI:
for (let i = 0; i < members.length; i++) {
    const singleName = members[i]['firstName'];
    namesList += `<ul>${singleName}</ul>`;
    console.log(namesList);
}

//RECUPERO I RUOLI:
for (let i = 0; i < members.length; i++) {
    const singleRole = members[i]['role'];
    rolesList += `<ul>${singleRole}</ul>`;
    console.log(rolesList);
}

//RECUPERO LE STRINGHE DELLE FOTO:
for (let i = 0; i < members.length; i++) {
    const singlePhoto = members[i]['photo'];
    photosList += `<ul>${singlePhoto}</ul>`;
    console.log(photosList);
}

//STAMPO IN PAGINA I NOMI:
names.innerHTML = namesList;

//STAMPO IN PAGINA I RUOLI:
roles.innerHTML = rolesList;

//STAMPO IN PAGINA LE STRINGHE FOTO:
photos.innerHTML = photosList;