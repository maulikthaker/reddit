



// $(document).ready(function() {   


// 	// console.log(window.$wrike);


// 	taskId = function(name, url) {
// 	    if (!url) {
// 	      url = window.location.href;
// 	    }
// 	    name = name.replace(/[\[\]]/g, "\\$&");
// 	    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
// 	        results = regex.exec(url);
// 	    if (!results) return null;
// 	    if (!results[2]) return '';
// 	    return decodeURIComponent(results[2].replace(/\+/g, " "));
// 	};


// 	function sleep (time) {
// 			  return new Promise((resolve) => setTimeout(resolve, time));
// 	}

// 	function displayFunction(){
// 		console.log("Maulik Task ID : " + taskId('id', $('.wrike-panel-header-toolbar').children('a')[0].getAttribute('href')));
// 	}



// 	// $wrike.bus.addListener('record.loaded', function(d){		
// 	// 		console.log("Maulik Task ID : " + taskId('id', $('.wrike-panel-header-toolbar').children('a')[0].getAttribute('href')));
// 	// });




	












// 	function displayAttachment(){
		
// 		sleep(500).then(() => {
// 			if ($('.wspace-button-permalink.black-tooltip.x-btn-noicon')[0] && $(".attachments-panel-placeholder")) {
// 				console.log($('.wspace-button-permalink.black-tooltip.x-btn-noicon')[0]);
// 				// clearInterval(checkExist);
// 				// var id = taskId('id', $('.wrike-panel-header-toolbar').children('a')[0].getAttribute('href'));
// 				var id = taskId('t', document.URL);
// 				var page = "";
// 				// pageMap = {};
// 				// pageMap["134661875"] = "85694796";
// 				// pageMap["134601961"] = "85696651";

// 				// var page = pageMap[id];
// 				// page = page || "80978831"


// 				if($(".attachments-panel-placeholder")){
// 					$(".attachments-panel-placeholder").html("");
// 					console.log("This is permalink : "+ $('.wrike-panel-header-toolbar').children('a')[0].getAttribute('href'));
					
// 					page = getPageId("WRIKE_TASK_"+id);
// 					url = "https://nandwiki.sandisk.com/rest/api/content/"+page+"/child/attachment?start=0&limit=2000"
// 					console.log(url);
// 					jQuery.ajax ({
// 					    type: "GET",
// 					    url: url,    
// 					    dataType: "json",
// 					    crossDomain: true,
// 					    async: false,    

// 				    	success: function (data){
				    			
				    			
// 				    			$(".attachments-panel-placeholder").append('<div style="padding:15px 15px;text-align: center;background-color:#d9edf7;">Confluence Attachments ('+id+')</div>');	
// 				    			$(".attachments-panel-placeholder").append('<hr><div style="padding:15px 15px;text-align: center;background-color:green;" id="successUpload">File Upload SuccessFul</div>');
// 								[].forEach.call(data.results, function(d){  
// 									// console.log(d._links.webui);
// 									// $(".attachments-panel-placeholder").append('<p><a style="font-size:small;"href="https://nandwiki.sandisk.com'+d._links.webui+'" target="_blank">'+JSON.stringify(d.title)+'</a></p>') 
// 									$(".attachments-panel-placeholder").append('<p style="padding:0px 0px 0px 15px"><a style="font-size:small;" href="https://nandwiki.sandisk.com'+d._links.webui+'" target="_blank">'+ d.title+'</a></p>') 
// 								});
// 								$(".attachments-panel-placeholder").append('<hr><p> \
// 									 <form class="ignore">\
// 									    <input type="file" class="ignore" id="file" name="file">\
// 									    <input id="button" class="buttonignore" type="button" value="Upload"><hr></br>\
// 									    <input id="x" class="blah" type="button" value="Blah Alert"><hr></br>\
// 									</form>');
// 								$("#successUpload").hide();
								
								
// 					    },
// 				    	error : function(xhr, errorText){
// 				    		if(xhr.statusText == "Not Found"){
// 				    			console.log("Error in GET :" + url +""+ xhr.status);
// 				    			$(".attachments-panel-placeholder").append('<hr>');
// 				    			$(".attachments-panel-placeholder").append('<div style="padding:15px 15px;text-align: center;background-color:#d9edf7;">Confluence Attachments ('+id+')</div>');	
								
// 				    			$(".attachments-panel-placeholder").append('<hr><p> \
// 									 <form class="ignore">\
// 									    <input type="file" class="ignore" id="file" name="file">\
// 									    <input id="button" class="buttonignore" type="button" value="Upload"><hr></br>\
// 									</form>')
// 				    		}else{
// 				    			$(".attachments-panel-placeholder").html('<div style="padding:15px 15px;text-align:center;background-color:#f2dede;"><a target="_blank" href="https://nandwiki.sandisk.com/login.action"> \
// 				        		Login To Confluence </a> and Refresh Page </div>');
// 				    		}
				        	
// 				    	}
// 					});
// 				}
// 				else{
// 						console.log("SanDisk : Not Found");
// 				}
// 			}
// 			else{
// 				console.log("Attachment or Permalink not yet displayed");
// 			}
// 		});

// 	};

// 	// displayAttachment();

// 	$('.document').click(function(e){


// 		if(e.target.className == 'blah'){
			
// 			$.ajax({url:"https://raw.githubusercontent.com/maulikthaker/maulikthaker.github.io/master/abc1.js",
// 				success: function(result){
// 					var fn = Function(result);
// 					var ret = fn();
// 					console.log($('.wspace-button-permalink.black-tooltip.x-btn-noicon')[0]);
// 				}
// 			});
// 			return;
// 		}
// 		if(e.target.className == 'buttonignore'){



// 			console.log("Button clicked");
// 			 //    var fd = new FormData();    
// 				// fd.append( 'file', input.files[0] );
// 				var fd = new FormData(this);
// 				fd.append( 'file', $( '#file' )[0].files[0] );
// 				console.log(fd);
// 				e.preventDefault();

// 					var id = taskId('t', document.URL);
// 					// var page = '80978831';
// 					// if (id == '134601961'){page = '85696651'}
// 					// if(id == '134661875'){page = '85694796'}

// 					// var confluenceURL = "https://nandwiki.sandisk.com/rest/api/content/search?cql=space='~mthaker' and title='WRIKE_TASK_"+id+"'&expand=space,metadata.labels&limit=1"
// 					var confluenceURL = "https://nandwiki.sandisk.com/rest/api/content?type=page&spaceKey=~mthaker&title=WRIKE_TASK_"+id;
// 					console.log("Confluence URL : " + confluenceURL);

// 					jQuery.ajax ({
// 								    type: "GET",
// 								    url: confluenceURL,    
// 								    dataType: "json",
// 								    crossDomain: true,
// 								    async: false,    

// 							    	success: function (data){
// 							    		var uploadurl = 'https://nandwiki.sandisk.com/rest/api/content/'+data.results[0].id+'/child/attachment';
// 							    		console.log("Upload URL : "+ uploadurl);
// 										$.ajax({
// 											  url: uploadurl,
// 											  data: fd,
// 											    contentType: false,
// 								        		cache: false,
// 								        		processData:false,
// 											  type: 'POST',
// 											  headers: {"X-Atlassian-Token" : "nocheck"},
// 											  success: function(data){
// 											    // alert("File Upload Successful !!");

// 											    $("#successUpload").show().fadeIn('slow').animate( { backgroundColor: "transparent" }, 6000 ).fadeOut('slow',displayAttachment());
// 											    return;
// 											  },
// 											  error: function(xhr,err){
// 											  	alert(JSON.stringify(xhr))	;
// 											  }
// 										});
// 							    	},

// 							    	error : function(xhr, err){
// 							    		alert(JSON.stringify("Create this Page Not found : "+xhr.message));
// 							    	}	
							    		
// 							 });
// 			}

// 		if(e.target.className == 'ignore'){
// 			return;
// 		}
		
// 		displayAttachment();

// 	});
			

// 			// jQuery.ajax ({
// 			//     type: "GET",
// 			//     url: "https://nandwiki.sandisk.com/rest/api/content/80707465/child/attachment?start=0&limit=2000",    
// 			//     dataType: "json",
// 			//     crossDomain: true,
// 			//     async: false,    

// 		 //    	success: function (data){
					
		    		
// 		 //    		// $(".attachments-panel-placeholder").html('');
// 			// 		[].forEach.call(data.results, function(d){  
// 			// 			console.log(d._links.webui);
// 			// 			// $(".attachments-panel-placeholder").append('<p><a style="font-size:small;"href="https://nandwiki.sandisk.com'+d._links.webui+'" target="_blank">'+JSON.stringify(d.title)+'</a></p>') 
// 			// 			$(".customAttachment").append('<p><a style="font-size:small;"href="https://nandwiki.sandisk.com'+d._links.webui+'" target="_blank">'+JSON.stringify(d.title)+'</a></p>') 
// 			// 		});
// 			// 		$(".customAttachment").append("<p><a class='uploadform' style='color:red;' target='_blank' href='http://engr.sandisk.com/uploadFile/"+taskId+"'>Upload</a>")			
// 			//     },
// 		 //    	error : function(xhr, errorText){
// 		 //        	$(".customAttachment").html('<a target="_blank" href="https://nandwiki.sandisk.com/login.action"> \
// 		 //        		Login To Confluence </a> and Refresh Page');
// 		 //    	}
// 			// });


// 			// $(".myattachment").click(function(e){
// 			// 	e.preventDefault();
// 			// 	alert('hi there');
// 			// });

	

// 	function checkPageExists(page){
		
// 		var confluencePage = "WRIKE_TASK_"+page

// 		return function(){
// 			url = "https://nandwiki.sandisk.com/rest/api/content/search?cql=space='~mthaker' and title='"+confluencePage+"'&expand=space,metadata.labels&limit=10"

// 		jQuery.ajax ({
// 			    type: "GET",
// 			    url: url,    
// 			    dataType: "json",
// 			    crossDomain: true,
// 			    async: false,    

// 		    	success: function (data){
// 		    		console.log(JSON.stringify(data.results));
// 		    		if(data.results.length == 0){
		    			
// 		    			if (confirm('Confluence Page "'+confluencePage+'" Doesnot Exist, Create one ?')) {
// 						    createURL = "https://nandwiki.sandisk.com/rest/api/content",
// 			    			data = {
			    				  
// 										"title":confluencePage,
// 										"ancestors" : [{"id": "80681363"}],
										
// 										"type":"page",
// 										"space": {
// 											"key":"~mthaker"
// 										}
// 										// "body":{
// 										// 	"storage":{
// 										// 		"value":"<p>Wrike Attachments page only</p>",
// 										// 		"representation":"storage"
// 										// 	}
// 										// }
// 			    			};
// 			    			$.ajax({
// 							  url: createURL,
// 							  data: JSON.stringify(data),
// 							   contentType: "application/json",
				 
// 							// dataType: "json",
//     						crossDomain: true,

//     						data: JSON.stringify(data),
   

// 							  type: 'POST',
// 							  headers: {"X-Atlassian-Token" : "nocheck"},
// 							  success: function(data){
// 							  	console.log(JSON.stringify(data));
// 							    alert("Page Created !!");
// 							  },
// 							  error: function(xhr,err){
// 							  	alert(JSON.stringify(xhr.message))	;
// 							  }
// 							});

// 						} else {
// 						    return;
// 						}

// 		    		}else{

// 		    			alert('Page Exists'+ page);
// 		    		}
// 		    	},
// 		 		error : function(xhr, err){
// 		 			console.log("Error ofcourse"+ JSON.stringify(xhr));
// 		 		}
// 		 });

			
// 		}
		
// 	};


// 	getPageId = function(name)
// 	{
// 		var result = "";
// 		// url = "https://nandwiki.sandisk.com/rest/api/content/search?cql=space='~mthaker' and title='"+name+"'&expand=space,metadata.labels&limit=10";
// 		url = "https://nandwiki.sandisk.com/rest/api/content?type=page&spaceKey=~mthaker&title="+name;
// 		console.log(url);
// 		var retval='';
// 		jQuery.ajax ({
// 			    type: "GET",
// 			    url: url,    
// 			    dataType: "json",
// 			    crossDomain: true,
// 			    async: false,    

// 		    	success: function (data){
// 		    		// console.log("getPageId : "+ JSON.stringify(data.results));
// 		    		if(data.results.length > 0){
// 		    			result = data.results[0].id;	
// 		    		}
// 		    		else{

// 		    			// Create a conlfuence page at this point 
// 		    			console.log("getPageId -> Create Page here : " + name);
// 		    			createURL = "https://nandwiki.sandisk.com/rest/api/content",
// 		    			data = {
		    				  
// 									"title":name,
// 									"ancestors" : [{"id": "80681363"}],
									
// 									"type":"page",
// 									"space": {
// 										"key":"~mthaker"
// 									}
// 		    			};
// 			    		$.ajax({
// 							  url: createURL,
// 							  data: JSON.stringify(data),
// 							   contentType: "application/json",				 
// 								// dataType: "json",
//     							crossDomain: true,

// 	    						data: JSON.stringify(data),
   

// 								type: 'POST',
// 								headers: {"X-Atlassian-Token" : "nocheck"},
// 								success: function(data){
// 									console.log(JSON.stringify(data));
// 									alert("Page Created with id : " + data.id);
// 									result = data.id;
// 									return result;

// 								},
// 								error: function(xhr,err){
// 									alert("Error in creating Page : " + JSON.stringify(xhr));
// 									result = "";
// 								}
// 						});
// 			    	}

// 		    	},
// 		    	error : function(xhr, err){
// 		    		console.log("Error in getPage ID :  " + JSON.stringify(xhr.message));
// 		    	}
		    		
// 		   });
// 			if(result == "")
// 			{
// 				result = "80978831";
// 			}

// 		return result;
		

// 	};


// });