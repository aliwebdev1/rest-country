const loadCounty = () => {
    fetch('https://restcountries.com/v3.1/all')
        .then(res => res.json())
        .then(data => displayCountry(data))
}

loadCounty()


const displayCountry = (countrys) => {
    // console.log(countrys);
    const countryBox = document.getElementById('countrys')
    countrys.forEach(country => {
        // console.log(country);
        const div = document.createElement('div');
        div.classList.add('country')
        div.innerHTML = `
        <h3>${country.name.official}</h3>
        <p>${country.population}</p>
        <button onclick="loadCountryDetals('${country.name.common}')">Show Details</button>
        `
        countryBox.appendChild(div)
    })

}


const loadCountryDetals = (name) => {
    // console.log(name);
    const url = `https://restcountries.com/v3.1/name/${name}`
    fetch(url)
        .then(res => res.json())
        .then(data => displayCountryDetails(data[0]))

}

const displayCountryDetails = (details) => {
    console.log(details);
    const countryDiv = document.getElementById('country-details');
    countryDiv.classList.add('details')
    countryDiv.innerHTML = `
    <h3>${details.name.official}</h3>
    <p>${details.population}</p>
    <img src="${details.flags.png}" alt="">
    `

} 