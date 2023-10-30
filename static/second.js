document.addEventListener('DOMContentLoaded', function() {
const stateDropdown = document.getElementById('state-dropdown');
const cityDropdown = document.getElementById('city-dropdown');


const cities = {
    //Abia
    0: [{name:'Aba', value: 0},{name:'Umuahia', value: 176}],

    //Abuja
    1: [
        {name: "Apo", value:17}, {name:"Asokoro District", value:20}, {name:"Bwari", value:23}, 
        {name:"Central Business District", value:25},
        {name:"Dakibiyu", value:27}, {name:"Dakwo", value:28}, {name:"Dape", value:30}, {name:"Dei-Dei", value:31}, 
        
        {name:"Diplomatic Zones", value:33},
        
        {name:"Duboyi", value:34}, {name:"Durumi", value:35}, {name:"Dutse", value:36}, {name:"Gaduwa", value:49}, 
        
        {name:"Galadimawa", value:50}, {name:"Garki", value:51},{name:"Gudu", value:53}, 
        
        {name:"Guzape District", value:55}, {name:"Gwagwalada", value:56}, {name:"Gwarinpa", value:57}, 
        
        {name:"Idu Industrial", value:69}, {name:"Jabi", value:93}, {name:"Jahi", value:94}, 
        
        {name:"Jikwoyi", value:95},{name:"Kabusa", value:99}, {name:"Kado" , value:100}, {name:"Kafe", value:103}, 
        
        {name:"Kagini", value:104}, {name:"Karmo", value:106}, {name:"Karsana", value:107}, {name:"Karshi", value:108}, 
        {name:"Katampe", value:110}, {name:"Kaura", value:111},{name:"Kubwa", value:115}, 
        
        {name:"Kuje", value:116}, {name:"Kukwaba", value:117}, {name:"Kurudu", value:118}, {name:"Kyami", value:120}, 
        
        {name:"Life Camp", value:123}, {name:"Lokogoma District", value:124}, {name:"Lugbe District", value:126},{name:"Mabushi", value:127}, 
        
        {name:"Maitama District", value:130}, {name:"Mararaba", value:131}, {name:"Mbora (Nbora)", value:133}, {name:"Mpape", value:136}, 
        
        {name:"Nyanya", value:140}, {name:"Orozo", value:156}, {name:"Utako", value:177},
        
        {name:"Wumba", value:182}, {name:"Wuse", value:183}, {name:"Wuse 2", value:184}, {name:"Wuye", value:185}
    ],

    //Akwa Ibom
    2: [{name:'Eket', value:42}, {name:'Ikot Ekpene', value:79}, {name:'Uyo', value:179}],

    //Anambra
    3: ['Select a city'],

    //Bayelsa
    4: [{name:'Yenagoa', value:187}],
    
    //Borno
    5: [{name:'Guzamala', value:54}],
    
    //Cross River
    6: [{name:'Calabar', value:24}],
    
    //Delta
    7: [{name: 'Warri', value: 181},
       { name:"Abraka", value: 3}, {name:"Aniocha South", value:15}, {name:"Asaba", value:19}, 
       {name:"Ethiope West", value:47},{ name:"Okpe", value:152}, {name:"Udu", value:172}, 
       {name:"Ughelli North", value:173}, {name:"Ughelli South", value:174}, {name:"Uvwie", value:178}
    ],

    //Edo
    8: [
        {name:"Egor", value:40},
        {name:"Ikpoba Okha", value:82},
        {name:"Oredo", value:154},
        {name:"Ovia North-East", value:159},
        {name:"Uhunmwonde", value:175}
    ],
    
    //Ekiti
    9: [{name:'Ado-Ekiti', value:4}],
    
    //Enugu
    10: [{name:'Enugu', value:45}],
    
    //Imo
    11:[
        {name:"Ohaji/Egbema", value:145},
        {name:"Owerri Municipal", value:160},
        {name:"Owerri North", value:161},
        {name:"Owerri West", value:162}
    ],
    
    //Kaduna
    12: [
        {name:'Chikun', value:26}, 
        {name:'Kaduna North', value:101}, 
        {name:'Kaduna South', value:102}

],
    
    //Kano
    13: [
        {name:'Kano', value:105},
        {name:'Nassarawa', value:139}],
    
    //Katina
    14: [{name:'Danja', value:29},
        {name:'Kusada', value:119}],
    
    //Kogi
    15: [
        {name:'Dekina', value:32},
        {name:'Lokoja', value:125},
        {name:'Okene', value:151}
    ],
    
    //Kwara
    16: [
        {name:'Ilorin East', value:84}, 
        {name:'Ilorin South', value:85}, 
        {name:'Ilorin West', value:86}
    ],
    
    //Lagos
    17: [{name:"Agbara-Igbesa", value:8}, {name:"Agege", value:9}, {name:"Ajah", value:10}, 
        {name:"Alimosho", value:13}, {name:"Amuwo Odofin", value:14}, {name:"Apapa", value:16},
        {name:"Ayobo", value:21}, {name:"Badagry", value:22}, {name:"Egbe", value:38}, 
        {name:"Ejigbo", value:41}, {name:"Eko Atlantic City", value:43}, {name:"Epe", value:46},
        {name:"Gbagada", value:52}, {name:"Ibeju", value:65}, {name:"Ibeju Lekki", value:66}, 
        {name:"Idimu", value:67}, {name:"Ifako-Ijaiye", value:70}, {name:"Ijaiye", value:72},
        {name:"Ijede", value:74}, {name:"Ijesha", value:75}, {name:"Ikeja", value:77}, 
        {name:"Ikorodu", value:78}, {name:"Ikotun", value:80}, {name:"Ikoyi", value:81}, 
        {name:"Ilupeju", value:87},{name:"Imota", value:88}, {name:"Ipaja", value:89}, 
        {name:"Isheri", value:90}, {name:"Isheri North", value:91}, {name:"Isolo", value:92}, 
        {name:"Ketu", value:113}, {name:"Kosofe", value:114}, {name:"Lagos Island", value:121}, 
        {name:"Lekki", value:122}, {name:"Magodo", value:129}, {name:"Maryland", value:132}, 
        {name:"Mushin", value:137}, {name:"Ogudu", value:144}, {name:"Ojo", value:146},
        {name:"Ojodu", value:147}, {name:"Ojota", value:148}, {name:"Oke-Odo", value:150}, 
        {name:"Orile", value:155}, {name:"Oshodi", value:157}, {name:"Shomolu", value:169}, 
        {name:"Surulere", value:171},{name:"Victoria Island (VI)", value:180}, {name:"Yaba", value:186}],
    
    //Nasarawa
    18: [
        {name:'Karu', value:109}, 
        {name:'Keffi', value:112}, 
        {name:'Nasarawa', value:138}],
    
    //Niger
    19: [{name:'Paikoro', value:165}],
    
    //Ogun
    20: [
        {name:"Abeokuta North", value:1}, {name:"Abeokuta South", value:2}, 
        {name:"Ado-Odo/Ota", value:5}, {name:"Agbara", value:7}, {name:"Arepo", value:18},
        {name:"Ewekoro", value:48}, {name:"Ibafo", value:63}, {name:"Ifo", value:71}, 
        {name:"Ijebu Ode", value:73}, {name:"Ijoko", value:76}, 
        {name:"KM 46", value:98},{name:"Magboro", value:128}, {name:"Mowe Ofada", value:134}, 
        {name:"Mowe Town", value:135}, {name:"Obafemi Owode", value:141}, {name:"Ogijo", value:143}, 
        {name:"Oke-Aro", value:149},{name:"Sagamu", value:167}, {name:"Sango Ota", value:168}, 
        {name:"Simawa", value:170}, {name:"Yewa South", value:188}
    ],
    
    //Osun
    21: [   
        {name:'Ede South', value:37}, 
        {name:'Osogbo', value:158}],
    
    //Oyo
    22: [
        {name:"Afijio", value:6}, 
        {name:"Akinyele", value:11}, 
        {name:"Egbeda", value:39}, 
        {name:"Ibadan", value:58}, 
        {name:"Ibadan North", value:59},
        {name:"Ibadan North-East", value:60},
        {name:"Ibadan North-West", value:61},
        {name:"Ibadan South-West", value:62}, 
        {name:"Ibarapa North", value:64}, 
        {name:"Ido", value:68}, 
        {name:"Oluyole", value:153}, 
        {name:"Oyo West", value:164}
   
        ],
    
    //Plateau
    23: [
        {name:'Jos North', value:96},   
        {name:'Jos South', value:97}],

      //Rivers
    24: [{name:'Eleme', value:44}, {name:'Ikwerre', value:83}, 
        {name:'Obio-Akpor', value:142}, {name:'Oyigbo', value:163},
        {name:'Port Harcourt', value:166}
    ]

};



// Event listener for state selection
stateDropdown.addEventListener('change', function () {
    cityDropdown.innerHTML = ''; // Clear the city dropdown

    const selectedState = stateDropdown.value;
    const stateCities = cities[selectedState] || [];

    if(Array.isArray(stateCities)){

    
        stateCities.forEach(city => {
            const option = document.createElement('option');
            option.value = city.value; // Set the value to the city's integer value
            option.textContent = city.name; // Display the city name in the dropdown
            cityDropdown.appendChild(option);
        });
    }
});

});
