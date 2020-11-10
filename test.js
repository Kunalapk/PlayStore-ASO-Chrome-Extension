
document.body.onload = function(){
	var root = document.getElementsByClassName("ZmHEEd")
	var data = root[root.length-1].getElementsByClassName("Vpfmgd")
	var app_position = 0
	var app_icon = ""
	var app_name = ""
    for(let i = 0; i < data.length; i++){
    	var container = data[i];
    	var href = container.getElementsByClassName("poRVub")[0].href

    	if(href.match("/app.amigoz.android/i")){
    		app_position = i+1
    	}
    	container.style.position = "relative"
        var count = i+1
        container.innerHTML += "<div style='width:30px; height:30px; font-weight:bold; position:absolute; z-index:50; top:0px; left:0px; border-radius:100px; background-color:red; color:#FFFFFF; font-size:18px;'>"
          +"<div style='position:absolute; top:50%; left:50%; transform: translate(-50%, -50%);'>"+count+"</div>"
          "</div>"
    }


    if(app_position!=0){
    	var chipDiv = "<div style='display: inline-block; padding: 0 25px; height: 50px; font-size: 16px; line-height: 50px; border-radius: 25px; background-color: #FFFFFF;'>Amigoz - "+app_position+"</div>"
		var main = document.getElementsByClassName("T4LgNb")
    	main[0].innerHTML = chipDiv + main[0].innerHTML
    }
    
};


