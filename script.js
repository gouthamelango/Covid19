
fetch('https://corona.lmao.ninja/all')
    .then(res => res.json())
    .then(data => generateHtml(data))

const generateHtml = (data) =>{
    console.log(data);
    document.querySelector('.total_cases').innerHTML = data.cases
    document.querySelector('.total_recovered').innerHTML = data.recovered
    document.querySelector('.total_deaths').innerHTML = data.deaths
    document.querySelector('.total_active_cases').innerHTML = data.active
}
fetch('https://thevirustracker.com/free-api?global=stats')
    .then(res => res.json())
    .then(data => generateHtml2(data))

const generateHtml2 = (data) =>{
    console.log(data);
    document.querySelector('.total_new_cases_today').innerHTML = data.results[0].total_new_cases_today
    document.querySelector('.total_new_deaths_today').innerHTML = data.results[0].total_new_deaths_today
}

fetch('https://corona.lmao.ninja/countries?sort=country')
    .then(res => res.json())
    .then(data =>generateHtml1(data))

    const generateHtml1 = (data) =>{
        console.log(data); 
        document.querySelector('.incases').innerHTML = data[113].cases
        document.querySelector('.inrecovered').innerHTML = data[113].recovered
        document.querySelector('.indeaths').innerHTML = data[113].deaths
        document.querySelector('.inactive').innerHTML = data[113].active
        
    }
    
