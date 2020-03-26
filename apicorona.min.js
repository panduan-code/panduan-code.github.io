$(document).ready(function(){
 $.ajax({async: true, cache: true, url: "https://api.kawalcorona.com/indonesia/", success: function(result){
             $("#positif").html(result[0].positif);
             $("#sembuh").html(result[0].sembuh);
             $("#meninggal").html(result[0].meninggal);
            }});
            });
