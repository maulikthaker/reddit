/**
 * injectScript - Inject internal script to available access to the `window`
 *
 * @param  {type} file_path Local path of the internal script.
 * @param  {type} tag The tag as string, where the script will be append (default: 'body').
 * @see    {@link http://stackoverflow.com/questions/20499994/access-window-variable-from-content-script}
 */
function injectScript(file_path, tag) {
    var node = document.getElementsByTagName(tag)[0];
    var script = document.createElement('script');
    script.setAttribute('type', 'text/javascript');
    script.setAttribute('src', file_path);
    node.appendChild(script);

    var myelement =document.createElement('div');
    myelement.setAttribute('class','sandisk');
    myelement.setAttribute('id','');
    node.appendChild(myelement);

    // console.log(chrome.extension.getURL('js/content.js'));
}
// injectScript(chrome.extension.getURL('js/content.js'), 'body');

function sleep (time) {
    return new Promise((resolve) => setTimeout(resolve, time));

}

function extractHostname(url) {
    var hostname;
    //find & remove protocol (http, ftp, etc.) and get hostname

    if (url.indexOf("://") > -1) {
        hostname = url.split('/')[2];
    }
    else {
        hostname = url.split('/')[0];
    }

    //find & remove port number
    hostname = hostname.split(':')[0];
    //find & remove "?"
    hostname = hostname.split('?')[0];

    return hostname;
}

function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;
  
    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
  
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
  
      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
  
    return array;
  }

$(document).ready(function() {

    
    if((extractHostname(location.href)) == "www.dealnews.com"){
        $('.sponsored-banner').each(function(){
            $(this).next().remove();
            $(this).remove();
            return;            
        });
    }

    sleep(1000).then(() => {
        $('<div id="myalert"><a></a></div>').prependTo('body');

        $('#myalert').click(function(){
            
        })

        $('#myalert').contextmenu(function(e){
            e.preventDefault();
            e.stopPropagation()
            $(this).remove();
        })


        chrome.runtime.sendMessage({method: "getStatus"}, function(response) {            
            var arr = response.status;
            arr = shuffle(arr);
            alter = function(){
                return arr.shift();
            }
            if(arr.length > 0){                
                $('#myalert a').attr("href",arr[1]["link"]).attr("target", "_blank").text(arr[1]["title"])
            }

            
            setInterval(function(){
                var t = alter(arr)                
                $('#myalert a').attr("href",t["link"]).attr("target", "_blank").text(t["title"])

            }, 5000)
        });
    });
});