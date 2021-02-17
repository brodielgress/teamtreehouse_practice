const main = document.querySelector('main');
let html = '';

for ( let i = 0; i < pets.length; i++ ) {
    let pet = pets[i];
    html +=`
        <h2>${pet.name}</h2>
        <h3>${pet.type} | ${pet.breed}</h3>
        <h2>Age: ${pet.age}</h2>
        <img src="${pet.photo}" alt="${pet.breed}">
    `;
}

main.insertAdjacentHTML('beforeend', html);