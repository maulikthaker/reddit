
    console.log("I'm in background page")
    

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

    var ajax_call = function(subreddit) {
        redditString = "https://www.reddit.com/r/"+subreddit+"/hot/.json?count=20";
        console.log("this is reddit string" + redditString);
        chrome.storage.sync.clear();
        $.getJSON(redditString,
            function foo(data)            {}
        ).done(function(data){
                
                console.log("Calling now ..")
                console.log(data.data.children)
                var arr = $.map(data.data.children, function(n){
                    return {"title": subreddit + " : " + n.data.title, "link": "https://www.reddit.com" + n.data.permalink};
                })
                storage = {};
                storage[subreddit] = arr;
                chrome.storage.sync.set(storage,function(){
                })
                
            });
      };
      
      var interval = 1000 * 60 * 30; // where X is your every X minutes
      function updateDB(){
          ajax_call("WorldNews");
          ajax_call("News");
          ajax_call("Technology");
          ajax_call("Sanjose");
      }
      updateDB();
      setInterval(updateDB, interval);
    //   updateDB();

    chrome.tabs.query({ currentWindow: true, active: true }, function (tabs) {
        console.log(tabs[0]);
      });

    chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    if (request.method == "getStatus"){
        chrome.storage.sync.get(['WorldNews','News','Technology','Sanjose'], function(x){
            // console.log(x)
            sendResponse({status : x.WorldNews.concat(x.News, x.Technology,x.Sanjose)});
        })
    }
    else
        sendResponse({}); // snub them.
    return true;
    });