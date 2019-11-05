let inppostnr = document.querySelector("#inpPostnr");
let postnummerforsalg = document.querySelector("#postnummerForslag");

inppostnr.addEventListener("input", function() {
    kaldWS(inppostnr.value);    

})

inppostnr.addEventListener("change", function() {

    alert("Der blev valgt følgende: " + inppostnr.value);
    

})


function kaldWS(opslag) {

    let wsurl = 'https://dawa.aws.dk/postnumre/autocomplete?q=' + opslag;

    fetch(wsurl, {
        method: 'GET'
    }).then(function(data) {
        return data.json();
    }).then(function(jsondata) {
        lavDatalist(jsondata);
        // console.log(jsondata);
        
    }).catch(function(error) {
        console.log("Noget gik galt" + error);  
    });

}

function lavDatalist(postnrdata) {

    //<option value="9000 Aalborg">

    //Tøm datalisten inden de nye føjes til
    postnummerforsalg.innerHTML = "";

    for( let x of postnrdata) {

        let opt =document.createElement("option");
        opt.value = x.tekst;
        postnummerforsalg.appendChild(opt);
    }

}