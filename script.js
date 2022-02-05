fetch("https://www.omniva.lv/locations.json").then(response => response.json())
    .then(data => {
        data.forEach(l => {
            if(l.A0_NAME === "LV"){
                addOption(l);
            }
        })
    });

function addOption(l){
    var el = document.createElement("OPTION");
    var select = document.getElementById("omniva-location");

    var optionText = formatOptionText(l);
    el.innerText = optionText;
    el.value = optionText;

    select.appendChild(el);
}

function formatOptionText(l){
    var address = l.A5_NAME + " " + l.A7_NAME + ", " + getCity(l);
    return l.NAME + " - " + address;
}

function getCity(l){
    var city;
    if (l.A3_NAME) city = l.A3_NAME;
    else if (l.A2_NAME) city = l.A2_NAME;
    else if (l.A1_NAME) city = l.A1_NAME;
    return city;
}