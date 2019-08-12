$(document).ready(function() {
  $("form#survey").submit(function(event) {
    var question1 = $("select#question1").val();
    var question2 = $("select#question2").val();
    var question3 = $("select#question3").val();
    var question4 = $("select#question4").val();
    var question5 = $("select#question5").val();
    var question6 = $("select#question6").val();

    if (question5) {
      var answer = question5;
      if (question5 === 'support' && (question1 === 'problems') && ((question2 === 'desktop') || (question2 === 'laptop') || (question2 === 'tablet') || (question2 === 'smartphone')) && ((question3 === 'vc') || (question3 === 'com')) && ((question4 === 'yes') || (question4  === 'no')) && ((question6 === 'vc') || (question6 === 'com'))) {
        answer = ('C#/.NET');
        description = ('#desc1');
        link = ('#link');
      } else if (question5 === 'apps' && ((question1 === 'front') || (question1 === 'new')) && ((question2 === 'tablet') || (question2 === 'smartphone')) && ((question3 === 'vc') || (question3 === 'com') || (question3 === 'sc') || (question3 === 'not')) && ((question4 === 'yes') || (question4  === 'no')) && ((question6 === 'vc') || (question6 === 'com') || (question6 === 'sc'))) {
        answer = ('CSS/React');
        description = ('#desc2');
        link = ('#link');
      } else if (question5 === 'develop' && ((question1 === 'front') || (question1 === 'new')) && ((question2 === 'desktop') || (question2 === 'laptop')) && ((question3 === 'vc') || (question3 === 'com') || (question3 === 'sc')) && ((question4 === 'yes') || (question4  === 'no')) && ((question6 === 'vc') || (question6 === 'com') || (question6 === 'sc'))) {
        answer = ('Ruby/Rails');
        description = ('#desc3');
        link = ('#link');
      }

      $("#result").empty().append(answer);
      $("#answer").show();
      $(description).show();
      $(link).show();
    } else {
      alert('Please finish providing your answers.');
    }

    event.preventDefault();
  });
});