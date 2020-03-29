
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

fetch('https://thevirustracker.com/free-api?countryTotals=ALL')
    .then(res => res.json())
    .then(data =>generateHtml1(data))

    const generateHtml1 = (data) =>{
        console.log(data);
        
        //const html = '<div class= "cases">'+ data.countryitems[0][1].title +  ' <br>'+data.countryitems[0][2].title+'</div>'
        //const casdiv = document.querySelector('.total1')
        // casdiv.innerHTML = html
    }
    