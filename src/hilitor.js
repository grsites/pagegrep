// Original JavaScript code by Chirp Internet: www.chirp.com.au
// Please acknowledge use of this code by including this header.

function Hilitor(col_class)
{

  var targetNode = document.body;
  var hiliteTag = "EM";
  var skipTags = new RegExp("^(?:" + hiliteTag + "|SCRIPT|FORM)$");
  var wordClass = [];
  var matchRegex = "";
  var openLeft = true;
  var openRight = true;

  this.setRegex = function(input)
  {
    input = input.replace(" ", "\\s");
    if(input) {
      var re = "(" + input + ")";
      if(!openLeft) re = "\\b" + re;
      if(!openRight) re = re + "\\b";
      matchRegex = new RegExp(re, "i");
      return true;
    }
    return false;
  };

  // recursively apply word highlighting
  this.hiliteWords = function(node)
  {
    if(node === undefined || !node) return;
    if(!matchRegex) return;
    if(skipTags.test(node.nodeName)) return;

    if(node.hasChildNodes()) {
      for(var i=0; i < node.childNodes.length; i++)
        this.hiliteWords(node.childNodes[i]);
    }
    if(node.nodeType == 3) { // NODE_TEXT
      if((nv = node.nodeValue) && (regs = matchRegex.exec(nv))) {
        if(!wordClass[regs[0].toLowerCase()]) {
          wordClass[regs[0].toLowerCase()] = col_class;
        }

        var match = document.createElement(hiliteTag);
        match.appendChild(document.createTextNode(regs[0]));
        match.className = wordClass[regs[0].toLowerCase()];
        match.style.fontStyle = "inherit";

        var after = node.splitText(regs.index);
        after.nodeValue = after.nodeValue.substring(regs[0].length);
        node.parentNode.insertBefore(match, after);
      }
    };
  };

  // remove highlighting
  this.remove = function()
  {
    var arr = document.getElementsByTagName(hiliteTag);
    while(arr.length && (el = arr[0])) {
      var parent = el.parentNode;
      parent.replaceChild(el.firstChild, el);
      parent.normalize();
    }
  };

  // start highlighting at target node
  this.apply = function(input)
  {
    if(input === undefined || !input) return;
    if(this.setRegex(input)) {
        this.hiliteWords(targetNode);
    }
  };

}
