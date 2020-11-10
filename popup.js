chrome.tabs.getCurrent(function(tab) {
        //alert(tab);
        //document.getElementById("main").innerHTML = tab.url
    });

document.addEventListener('DOMContentLoaded', function() {
  //document.getElementById("test").addEventListener('click', () => {

    function modifyDOM() {
        //You can play with your DOM here or check URL against your regex
        var root = document.getElementsByClassName("ZmHEEd")
        var data = root[root.length-1].getElementsByClassName("Vpfmgd")
        for(let i = 0; i < data.length; i++){
          var container = data[i];
          container.style.position = "relative"
          var count = i+1
          container.innerHTML += "<div style='width:30px; height:30px; font-weight:bold; position:absolute; z-index:50; top:0px; left:0px; border-radius:100px; background-color:red; color:#FFFFFF; font-size:18px;'>"
          +"<div style='position:absolute; top:50%; left:50%; transform: translate(-50%, -50%);'>"+count+"</div>"
          "</div>"
        }
        return data;
    }


    //We have permission to access the activeTab, so we can call chrome.tabs.executeScript:
    chrome.tabs.executeScript({
        code: '(' + modifyDOM + ')();' //argument here is a string but function.toString() returns function's code
    }, (results) => {
        //Here we have just the innerHTML and not DOM structure
        //console.log('Popup script:')
        //console.log(results[0]);
    });
  //});
}, false);

