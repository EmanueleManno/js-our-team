//VEDO SE FUNZIONA:
console.log('JS OK');

//CREO UN ARRAY DEI MEMBRI DEL TEAM:
members = [
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

//STAMPO TUTTO IN CONSOLE:
console.log(members);

//STAMPO IN CONSOLE IL NOME, IL RUOLO E LA STRINGA DELLA FOTO TENTATIVO 1:
console.log(members.firstName + members.role + members.photo);

//STAMPO IN CONSOLE IL NOME, IL RUOLO E LA STRINGA DELLA FOTO TENTATIVO 2:
console.log(members[firstName] + members[role] + members[photo]);

//STAMPO IN CONSOLE IL NOME, IL RUOLO E LA STRINGA DELLA FOTO TENTATIVO 3:
console.log(members.firstName[i] + members.role[i] + members.photo[i]);

//STAMPO IN CONSOLE IL NOME, IL RUOLO E LA STRINGA DELLA FOTO TENTATIVO 4:
const names = members.firstName;
console.log(names);
console.log(members.names);
console.log(members[firstName]);
