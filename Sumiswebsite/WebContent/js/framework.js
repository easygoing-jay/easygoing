(function(){
	var bujjiframework = function(){ 
		var updateContent = function(href, sel){
		$.get("html/"+href+".html", function(){}).
			done(function(data){ 
					$(sel).html(data);
				}).
			fail(function() { $(sel).html("sorry");});
		};
		
		return {updateContent:updateContent};
	};
	bujjiframework.test = function(text){alert(text);};
	var BS = new bujjiframework();

	window.BS = BS;
})();

$(document).ready(function(){
		$("a").click(function () {
			 window.location.hash = $(this).attr("link");
            return false;  
         });
		$(".maincontent").on("click","a", function () {
			 window.location.hash = $(this).attr("link");
            return false;  
         });
		$(window).on('hashchange', function() {
			BS.updateContent(window.location.hash.substring(1),'.maincontent');
			document.title = document.title.substring(0, 17) + " : " + window.location.hash.substring(1);
	            return false;  
		});
		$("#logo").click();
});