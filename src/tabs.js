tabris.ui.set("toolbarVisible", false);
var page = new tabris.Page({
  topLevel: true,
background: "rgb(200,255,200)"
}).open();
//--------------------------------------------------------------------------------------------------------------------------- 

var opened = false;
var last = 1;

new tabris.Composite({
  left: 0, right: 0, top: 47, bottom: 0,
  background: "rgb(200,255,200)"
}).appendTo(page);

var folder = new tabris.Composite({
  left: 0, right: 0, top: 0, height: 47,
  background: "rgb(180,255,180)",
  elevation: 5,
  opacity: 0
}).appendTo(page);

var tabFolder = new tabris.TabFolder({
  layoutData: {top: 0, left: 0, right: 0, bottom: 0},
  background: "rgb(180,255,180)",
  paging: true,
  elevation: 5
}).appendTo(page);

var createTab = function(title) {
  var tab = new tabris.Tab({
    title: title,
    background: "rgb(200,255,200)"
  }).appendTo(tabFolder);
  var scroll = new tabris.ScrollView({
    left: 0, top: 0, right: 0, bottom: 0,
    background: "transparent"
  }).on("longpress", function(){
  if (opened ==  false){
    opened = true
    navigator.notification.confirm(
  'Do you want to dispose this tab?',
  function(buttonIndex) {
    if (buttonIndex == 1){
           tab.dispose()
      if (last > 1){
        lasts.set("text", --last)
    } else if (last == 1){
      lasts.set("text", --last)
     tabFolder.set("opacity", 0)
     folder.set("opacity", 1)
     }
    }
   }, 'Dispose', ['Yes', 'No']
   );
  } else {
    opened = false
  }
  }).appendTo(tab);
  for (var index = 0; index < 201; index++) {
  var texts = new tabris.TextView({
    left: 10, right: 10, top: "prev() 2",
    text: "juuh",
    font: "18px"
  }).appendTo(scroll);
  }
}

createTab("Main tab");

var lasts = new tabris.TextView({
  right: 10, bottom: 10,
  text: last
}).appendTo(page);

  new tabris.Button({
  left: 10, bottom: 10,
  opacity: 0.5,
  text: "Create new tab"
  }).on("select", function(){
	navigator.notification.prompt(
    'Name your new tab',  // message
    	prompt,                  // callback to invoke
    'Create new tab',            // title
    ['Create', 'Cancel']             // buttonLabels
);
 }).appendTo(page);

          function prompt(tabs){
                    if (tabs.buttonIndex == 1) {
                      tabFolder.set("opacity", 1)
                      folder.set("opacity", 0)
                       lasts.set("text", ++last)
                      if (tabs.input1 == ''){
                        createTab("New tab")
                      } else {
    createTab(tabs.input1)
    }

                    }
    };
