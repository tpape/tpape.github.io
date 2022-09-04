var error = false;

$(function(){
  $(".overlay").hide();
  $(".confirmation").hide();
  
  var inputError = function() {
    if( $(this).val().length === 0 ) {
        $(this).addClass('warning');
      } else {
        $(this).removeClass('warning');
      }
   }
  
  $('#name').blur(inputError);
  $('#lastname').blur(inputError);
})

function validateForm() {
  if ($("#name").val().length != 0 && $("#lastname").val().length != 0) {
    var qrcode = new QRCode(document.getElementById("qrcode"), {
	width: 300,
	height: 300,
	colorDark : "#000000",
	colorLight : "#ffffff",
	correctLevel : QRCode.CorrectLevel.M
});
    var elText = "https://docs.google.com/forms/d/e/1FAIpQLSceTmM18RYxBL4A4VtRzP09qZ_2-v_sPcrZcCB0zj3o6FnkGw/viewform?usp=pp_url&entry.1045781291="+ $("#name").val() +"&entry.2005620554="+ $("#lastname").val() +"&entry.1065046570="+$("#mail").val() + "&entry.1166974658="+$("#tel").val();
    
    qrcode.makeCode(elText);
     }
  
  $("#logo").hide();
  $(".overlay").show();
  $(".confirmation").show();
}