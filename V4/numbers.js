$.get("https://api.covidtracking.com/v1/us/current.json", function(data){
    var positive = JSON.stringify(data[0].positive);
    var hospitalizedCurrently = JSON.stringify(data[0].hospitalizedCurrently);
    var hospitalizedCumulative = JSON.stringify(data[0].hospitalizedCumulative);
    var onVentilatorCurrently = JSON.stringify(data[0].onVentilatorCurrently);
    var death = JSON.stringify(data[0].death);
    var lastModified = JSON.stringify(data[0].lastModified);
    $( "#positive" ).text(`Positive cases: ${positive}`);
    $( "#hospitalizedCurrently" ).text(`Currently hospitalized: ${hospitalizedCurrently}`);
    $( "#hospitalizedCumulative" ).text(`Total hospitalization: ${hospitalizedCumulative}`);
    $( "#onVentilatorCurrently" ).text(`Currently on Ventilator: ${onVentilatorCurrently}`);
    $( "#death" ).text(`Deaths confirmed: ${death}`);
    $( "#lastModified" ).text(`Last updated: ${lastModified}`);
  });