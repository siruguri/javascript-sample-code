 $(document).ready(function() {
   $("#trigger").click(function() {
     //         value = $("#inputbox").val();
     add_comment($("#inputbox").val());
   });

   $("#hider").click(function() {
     $(".comment").toggle();
   });
 });