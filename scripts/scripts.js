$(document).ready(function(){
  $(".artist_module .tabs .tabs_container .category").click(function(e){
     e.stopPropagation();
    $(".artist_module .tabs .tabs_container .category").removeClass("active");
		$(this).addClass("active");
	});

  $(document).click(function(){
    $(".artist_module .tabs .tabs_container .category").removeClass("active");
	});
});
