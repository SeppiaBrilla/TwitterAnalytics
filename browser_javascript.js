var numeroFiltri = 0;


$(document).ready(function(){
    
    Add_Filter();

    $("#aggiungi").click(function(ev){
        ev.preventDefault();
        Add_Filter();
    });

    $("#cerca").click( function(ev){
        ev.preventDefault();
        /*
        TUTTO INUTILE ED ODIO TWITTER
        let str ="";
        for(let i = 1; i <= numeroFiltri; i++){
            str+=$("#tipo_Filtro_"+i).val()+":"+$("#testo_Filtro_"+i).val()+" ";
        }
        $.ajax({
            type: "POST",
            url: "https://api.twitter.com/2/tweets/search/stream/rules",
            dataType: 'json',
            contentType: 'application/json',
            processData: false,
            data: '{"add":[{"value":str}]}',
            crossDomain:true,
            headers: {
                "Authorization": "Bearer AAAAAAAAAAAAAAAAAAAAAHLBIQEAAAAA6rcaCo2i4YR0AZRWaCK90hHR1nk%3D0z9Mc0w7NWc7AnLwWr7YzC0GXtNt75KNTfiLAJQpjXpHMjhxyJ",
                "Access-Control-Allow-Origin": "https://api.twitter.com",
                "Access-Control-Allow-Headers": "Origin, Content-Type, X-Auth-Token"
            },
            success: function(){console.log("filtri aggiunti")},
          });*/
          $("#filtri").html("");
          numeroFiltri = 0;
          Add_Filter();

    });
});

function Add_Filter(){
    let filtro = $("#Filtro").html();

    numeroFiltri++;
    filtro = filtro.replace("$IDTYPE","tipo_Filtro_"+numeroFiltri).replace("$IDTYPE","tipo_Filtro_"+numeroFiltri);
    filtro = filtro.replace("$IDFILTRO","testo_Filtro_"+numeroFiltri).replace("$IDFILTRO","testo_Filtro_"+numeroFiltri);

    $("#filtri").append(filtro);
}
