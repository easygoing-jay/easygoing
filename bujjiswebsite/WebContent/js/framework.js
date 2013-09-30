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
			BS.updateContent($(this).attr("link"),'.maincontent');
			//BS.test("done");
			 window.location.hash = $(this).attr("link");
            return false;  
         });
		$(".homelogo").click();
});