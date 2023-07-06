const source = "../json/data.json";

async function getBusinessData() {
    const response = await fetch(source);
    const data = await response.json();
    displayBusinesses(data.companies);
    console.table(data.companies);
}
getBusinessData();

const displayBusinesses = (businesses) => {
    const cards = document.querySelector('div.cards');

    business.forEach(business => {
        let card = document.createElement('section');
        let logo = document.createElement('img');
        let name = document.createElement('h2');
        let website = document.createElement('p');
        let membership = document.createElement('h5');
        let address = document.createElement('p');
        let number = document.createElement('p');

        logo.setAttribute('src', business.logo);
        logo.setAttribute('alt', `${business.name}'s logo`);
        logo.setAttribute('loading', 'lazy');
        name.textContent = business.name;
        address.textContent = business.address;
        number.textContent = business.number;
        website.textContent = business.website;
        membership.textContent = business.membership;

        card.appendChild(logo);
        card.appendChild(name);
        card.appendChild(address);
        card.appendChild(number);
        card.appendChild(website);
        card.appendChild(membership);

        cards.appendChild(card);
    });
}