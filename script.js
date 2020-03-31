
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
        document.querySelector('.incasesoff').innerHTML = "Official: <b> "+data[114].cases+"<b>"
        document.querySelector('.inrecoveredoff').innerHTML = "Official: <b> "+data[114].recovered+"<b>"
        document.querySelector('.indeathsoff').innerHTML = "Official: <b> "+data[114].deaths+"<b>"
        document.querySelector('.inactiveoff').innerHTML = "Official: <b> "+data[114].active+"<b>"

    }  

    fetch('https://api.rootnet.in/covid19-in/unofficial/covid19india.org/statewise')
    .then(res => res.json())
    .then(data =>generateHtml3(data))

    const generateHtml3 = (data) =>{
        console.log(data); 
       document.querySelector('.incasesun').innerHTML = "Unofficial: <b> "+data.data.total.confirmed+"<b>"
        document.querySelector('.inrecoveredun').innerHTML = "Unofficial: <b> "+data.data.total.recovered+"<b>"
        document.querySelector('.indeathsun').innerHTML = "Unofficial: <b> "+data.data.total.deaths+"<b>"
        document.querySelector('.inactiveun').innerHTML = "Unofficial: <b> "+data.data.total.active+"<b>"

    }  
