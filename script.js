
fetch('https://api.thevirustracker.com/free-api?global=stats')
    .then(res => res.json())
    .then(data => generateHtml(data))

const generateHtml = (data) =>{
    //console.log(data);
     document.querySelector('.total_cases').innerHTML = data.results[0].total_cases
    document.querySelector('.total_recovered').innerHTML = data.results[0].total_recovered
    document.querySelector('.total_deaths').innerHTML = data.results[0].total_deaths
     document.querySelector('.total_active_cases').innerHTML = data.results[0].total_unresolved
}
/*
fetch('https://thevirustracker.com/free-api?global=stats')
    .then(res => res.json())
    .then(data => generateHtml2(data))

const generateHtml2 = (data) =>{
    //console.log(data);
    document.querySelector('.total_new_cases_today').innerHTML = data.results[0].total_new_cases_today
    document.querySelector('.total_new_deaths_today').innerHTML = data.results[0].total_new_deaths_today
}*/

// fetch('https://corona.lmao.ninja/countries?sort=country')
//     .then(res => res.json())
//     .then(data =>generateHtml1(data))

//     const generateHtml1 = (data) =>{
//        // console.log(data); 
//        // console.log(data.length)
//         for(i=0;i<data.length;i++){
//             if(data[i].country=="India"){
//                 document.querySelector('.incasesoff').innerHTML = "Official: <b> "+data[i].cases+"<b>"
//                 document.querySelector('.inrecoveredoff').innerHTML = "Official: <b> "+data[i].recovered+"<b>"
//                 document.querySelector('.indeathsoff').innerHTML = "Official: <b> "+data[i].deaths+"<b>"
//                 document.querySelector('.inactiveoff').innerHTML = "Official: <b> "+data[i].active+"<b>"
//                // console.log("true")
//                 break;
//             }
//         }
//     }  

    fetch('https://api.rootnet.in/covid19-in/unofficial/covid19india.org/statewise')
    .then(res => res.json())
    .then(data =>generateHtml3(data))

    const generateHtml3 = (data) =>{
        //console.log(data); 
       document.querySelector('.incasesun').innerHTML = data.data.total.confirmed
        document.querySelector('.inrecoveredun').innerHTML = data.data.total.recovered
        document.querySelector('.indeathsun').innerHTML = data.data.total.deaths
        document.querySelector('.inactiveun').innerHTML = data.data.total.active

    }  
