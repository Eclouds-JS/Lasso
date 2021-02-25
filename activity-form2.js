jQuery(function () {
  jQuery("#radio-000000fb0").on("click", function(){
	alert("Testing jQuery");
	jQuery("#00000101_0").prop( "checked", false );
  });
  jQuery("#radio-000001010").on("click", function(){
    jQuery("#000000fb_0").prop( "checked", false );
	alert("test jQuery");
  });
});