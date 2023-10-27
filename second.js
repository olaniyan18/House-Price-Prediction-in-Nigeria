
const stateDropdown = document.getElementById('state-dropdown');
const cityDropdown = document.getElementById('city-dropdown');


const cities = {
    Abia: ['Aba', 'Umuahia'],

    Abuja: [
        "Apo", "Asokoro District", "Bwari", "Central Business District", "Dakibiyu", "Dakwo", "Dape",
        "Dei-Dei", "Diplomatic Zones", "Duboyi", "Durumi", "Dutse", "Gaduwa", "Galadimawa", "Garki",
        "Gudu", "Guzape District", "Gwagwalada", "Gwarinpa", "Idu Industrial", "Jabi", "Jahi", "Jikwoyi",
        "Kabusa", "Kado", "Kafe", "Kagini", "Karmo", "Karsana", "Karshi", "Karu", "Katampe", "Kaura",
        "Kubwa", "Kuje", "Kukwaba", "Kurudu", "Kyami", "Life Camp", "Lokogoma District", "Lugbe District",
        "Mabushi", "Maitama District", "Mararaba", "Mbora (Nbora)", "Mpape", "Nyanya", "Orozo", "Utako",
        "Wumba", "Wuse", "Wuse 2", "Wuye"
    ],

    Akwa_Ibom: ['Eket', 'Ikot Ekpene', 'Uyo'],
    
    Bayelsa: ['Yenagoa'],
    Borno: ['Guzamala'],
    Cross_River: ['Calabar'],
    Delta: [
        "Abraka", "Aniocha South", "Asaba", "Ethiope West",
        "Okpe", "Udu", "Ughelli North", "Ughelli South", "Uvwie"
    ],
    Edo: [
        "Egor",
        "Ikpoba Okha",
        "Oredo",
        "Ovia North-East",
        "Uhunmwonde"
    ],
    Ekiti: ['Ado-Ekiti'],
    Enugu: ['Enugu'],
    Imo:["Ohaji/Egbema",
    "Owerri Municipal",
    "Owerri North",
    "Owerri West"],
    Kaduna: ['Chikun', 'Kaduna North', 'Kaduna South'],
    Kano: ['Kano','Nassarawa'],
    Kastina: ['Danja', 'Kusada'],
    Kogi: ['Dekina','Lokoja','Okene'],
    Kwara: ['Ilorin East', 'Ilorin South', 'Ilorin West'],
    Lagos: ["Agbara-Igbesa", "Agege", "Ajah", "Alimosho", "Amuwo Odofin", "Apapa",
    "Ayobo", "Badagry", "Egbe", "Ejigbo", "Eko Atlantic City", "Epe",
    "Gbagada", "Ibeju", "Ibeju Lekki", "Idimu", "Ifako-Ijaiye", "Ijaiye",
    "Ijede", "Ijesha", "Ikeja", "Ikorodu", "Ikotun", "Ikoyi", "Ilupeju",
    "Imota", "Ipaja", "Isheri", "Isheri North", "Isolo", "Ketu", "Kosofe",
    "Lagos Island", "Lekki", "Magodo", "Maryland", "Mushin", "Ogudu", "Ojo",
    "Ojodu", "Ojota", "Oke-Odo", "Orile", "Oshodi", "Shomolu", "Surulere",
    "Victoria Island (VI)", "Yaba"],
    Nasarawa: ['Karu', 'Keffi', 'Nasarawa'],
    Niger: ['Paikoro'],
    Ogun: ["Abeokuta North", "Abeokuta South", "Ado-Odo/Ota", "Agbara", "Arepo",
    "Ewekoro", "Ibafo", "Ifo", "Ijebu Ode", "Ijoko", "Isheri North", "KM 46",
    "Magboro", "Mowe Ofada", "Mowe Town", "Obafemi Owode", "Ogijo", "Oke-Aro",
    "Sagamu", "Sango Ota", "Simawa", "Yewa South"],
    Osun: ['Ede South', 'Osogbo'],
    oyo: [
        "Afijio", "Akinyele", "Egbeda", "Ibadan", "Ibadan North", "Ibadan North-East",
        "Ibadan North-West", "Ibadan South-West", "Ibarapa North", "Ido", "Oluyole", "Oyo West"
    ],
    Plateau: ['Jos North', 'Jos South'],
    Rivers: ['Eleme', 'Ikwerre', 'Obio-Akpor', 'Oyigbo','Port Harcourt']

    
    // Add cities for the other 34 states
};

// Event listener for state selection
stateDropdown.addEventListener('change', function() {
    cityDropdown.innerHTML = ''; // Clear the city dropdown

    // Check the selected state and populate the city dropdown accordingly
    const selectedState = stateDropdown.value;
    const stateCities = cities[selectedState] || [];

    for (let i = 0; i < stateCities.length; i++) {
        const option = document.createElement('option');
        option.value = stateCities[i];
        option.text = stateCities[i];
        cityDropdown.appendChild(option);
    }
});

