$(document).ready(function(){
  $("#stressQuiz").submit(function(event){
    event.preventDefault();
    debugger;
    var userResponsesQ1 = [];
    $("input:checkbox[name=warningSigns]:checked").each(function(){
      var warningSigns = $(this).val();
      userResponsesQ1.push(warningSigns);
    });
    var userResponsesQ2 = [];
    $("input:checkbox[name=healthSymptoms]:checked").each(function(){
      var healthSymptoms = $(this).val();
      userResponsesQ2.push(healthSymptoms);
    });
    var userResponsesQ3 = [];
    $("input:checkbox[name=copingMethods]:checked").each(function(){
      var copingMethods = $(this).val();
      userResponsesQ3.push(copingMethods);
    });

    if(((userResponsesQ1.length < 3 && userResponsesQ2.length >= 3 && userResponseQ3.length<=4))||((userResponsesQ1.length >= 3 && userResponsesQ2.length < 3 && userResponseQ3.length<=4))||((userResponsesQ1.length >= 3 && userResponsesQ2.length >= 3 && userResponseQ3.length<4))){
      $("#result-one").show();
    }

    else if(((userResponsesQ1.length===2&&userResponsesQ2.length === 2)&&(userResponseQ3.length===4))||((userResponsesQ1.length===1&&userResponsesQ2.length===3)&&(userResponseQ3.length===4))||((userResponsesQ1.length===3&&userResponsesQ2.length===1)&&(userResponseQ3.length === 4))){
      $("#result-two").show();
    }


    else if(userResponsesQ2.length <= 3 && userResponsesQ3.length >= 3){
      $("#result-three").show();
    }


  });
});
