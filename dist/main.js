!function(e){var t={};function o(s){if(t[s])return t[s].exports;var n=t[s]={i:s,l:!1,exports:{}};return e[s].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=e,o.c=t,o.d=function(e,t,s){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:s})},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var s=Object.create(null);if(o.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)o.d(s,n,function(t){return e[t]}.bind(null,n));return s},o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/dist/",o(o.s=6)}([function(e,t){function o(e,t){for(var o=0;o<t.length;o++){var s=t[o];s.enumerable=s.enumerable||!1,s.configurable=!0,"value"in s&&(s.writable=!0),Object.defineProperty(e,s.key,s)}}var s=function(){function e(t,o){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.boxes={0:[],1:[],2:[],3:[],4:[],5:[],6:[],7:[],8:[]},this.rows={0:[],1:[],2:[],3:[],4:[],5:[],6:[],7:[],8:[]},this.columns={0:[],1:[],2:[],3:[],4:[],5:[],6:[],7:[],8:[]},this.canvas=t,this.ctx=o,this.generateNum=this.generateNum.bind(this),this.drawBoxes=this.drawBoxes.bind(this),this.placeNums=this.placeNums.bind(this),this.checkValues=this.checkValues.bind(this)}var t,s,n;return t=e,(s=[{key:"generateNum",value:function(){var e=Math.ceil(9*Math.random());return console.log("num: ".concat(e)),e}},{key:"drawOutline",value:function(){this.ctx.beginPath(),this.ctx.lineWidth=4;for(var e=0;e<=540;e+=180)this.ctx.moveTo(e,0),this.ctx.lineTo(e,540),this.ctx.moveTo(0,e),this.ctx.lineTo(540,e);this.ctx.stroke(),this.ctx.closePath()}},{key:"drawBoxes",value:function(){this.ctx.beginPath(),this.ctx.lineWidth=.5;for(var e=0;e<540;e+=60)for(var t=0;t<540;t+=60)this.ctx.rect(e,t,60,60);this.ctx.stroke(),this.ctx.closePath()}},{key:"placeNums",value:function(e,t){this.ctx.beginPath(),this.ctx.font="20px Arial";for(var o=[],s=e/60-1,n=e;n<e+180;n+=60){var l=t/60-1;s++;for(var i=[],r=t;r<t+180;r+=60){l++,num=this.generateNum();var a=!1;this.rows[l].includes(num)||(a=!0);var u=!1;1===Math.ceil(6*Math.random())&&(u=!0),u&&a&&!o.includes(num)&&!this.columns[s].flat().flat().includes(num)?(o.push(num),i.push(num),this.rows[l][s]=num,this.ctx.fillText(num,n+25,r+45)):(i.push(0),this.rows[l][s]=0)}this.columns[s].push(i),this.columns[s]=this.columns[s].flat(),console.log("box: [".concat(o,"]")),console.log("Columns: ",this.columns)}console.log("Rows: ",this.rows),this.ctx.closePath()}},{key:"recursiveSolver",value:function(){}},{key:"genRows",value:function(){for(var e=0;e<Object.keys(this.columns).length;e++)for(var t=0;t<Object.keys(this.columns).length;t++){var o=this.columns[t].flat()[e];this.rows[e].push(o)}return this.rows}},{key:"checkValues",value:function(){console.log("Checking columns: ",this.columns),console.log("Checking rows: ",this.rows);var e=[this.rows[0].slice(0,3),this.rows[1].slice(0,3),this.rows[2].slice(0,3)],t=[this.rows[3].slice(0,3),this.rows[4].slice(0,3),this.rows[5].slice(0,3)],o=[this.rows[6].slice(0,3),this.rows[7].slice(0,3),this.rows[8].slice(0,3)],s=[this.rows[0].slice(3,6),this.rows[1].slice(3,6),this.rows[2].slice(3,6)],n=[this.rows[3].slice(3,6),this.rows[4].slice(3,6),this.rows[5].slice(3,6)],l=[this.rows[6].slice(3,6),this.rows[7].slice(3,6),this.rows[8].slice(3,6)],i=[this.rows[0].slice(6,9),this.rows[1].slice(6,9),this.rows[2].slice(6,9)],r=[this.rows[3].slice(6,9),this.rows[4].slice(6,9),this.rows[5].slice(6,9)],a=[this.rows[6].slice(6,9),this.rows[7].slice(6,9),this.rows[8].slice(6,9)];console.log("box1: ",e),console.log("box2: ",t),console.log("box3: ",o),console.log("box4: ",s),console.log("box5: ",n),console.log("box6: ",l),console.log("box7: ",i),console.log("box8: ",r),console.log("box9: ",a)}}])&&o(t.prototype,s),n&&o(t,n),e}();e.exports=s},function(e,t,o){function s(e,t){for(var o=0;o<t.length;o++){var s=t[o];s.enumerable=s.enumerable||!1,s.configurable=!0,"value"in s&&(s.writable=!0),Object.defineProperty(e,s.key,s)}}var n=o(4),l=o(5),i=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.templateRows={1:[],2:[],3:[],4:[],5:[],6:[],7:[],8:[],9:[]},this.rowSolutions={1:[],2:[],3:[],4:[],5:[],6:[],7:[],8:[],9:[]},this.updatedRows={1:[],2:[],3:[],4:[],5:[],6:[],7:[],8:[],9:[]},this.emptyCount=0,this.boxes={};for(var t=1;t<=9;t++)this.boxes[t]=[1,2,3,4,5,6,7,8,9];this.quads={topleft:[],topmiddle:[],topright:[],midleft:[],midmiddle:[],midright:[],bottomleft:[],bottommiddle:[],bottomright:[]},this.quadsArray=Object.keys(this.quads),this.quadrant=document.getElementById("myCanvas"),Object.assign(this.quadrant.style,{height:"54vh",width:"54vw",display:"flex",flexFlow:"wrap",justifyContent:"center",alignContent:"center",color:"black"}),this.createCartesian=this.createCartesian.bind(this),this.obtainIDs=this.obtainIDs.bind(this),this.obj=["0","1","2","3","4","5","6","7","8","9"],this.filled=["."],this.transposeTemplate=this.transposeTemplate.bind(this),this.renderTemplate=this.renderTemplate.bind(this),this.score=0}var t,o,i;return t=e,(o=[{key:"transposeTemplate",value:function(){for(var e=Math.ceil(10*Math.random()),t=0;t<3;t++){for(var o=0;o<3;o++)this.templateRows[1].push(n.sudokuPuzzles[e][t][o]),this.rowSolutions[1].push(l.sudokuPuzzleSolutions[e][t][o]);for(var s=3;s<6;s++)this.templateRows[2].push(n.sudokuPuzzles[e][t][s]),this.rowSolutions[2].push(l.sudokuPuzzleSolutions[e][t][s]);for(var i=6;i<9;i++)this.templateRows[3].push(n.sudokuPuzzles[e][t][i]),this.rowSolutions[3].push(l.sudokuPuzzleSolutions[e][t][i])}for(var r=3;r<6;r++){for(var a=0;a<3;a++)this.templateRows[4].push(n.sudokuPuzzles[e][r][a]),this.rowSolutions[4].push(l.sudokuPuzzleSolutions[e][r][a]);for(var u=3;u<6;u++)this.templateRows[5].push(n.sudokuPuzzles[e][r][u]),this.rowSolutions[5].push(l.sudokuPuzzleSolutions[e][r][u]);for(var c=6;c<9;c++)this.templateRows[6].push(n.sudokuPuzzles[e][r][c]),this.rowSolutions[6].push(l.sudokuPuzzleSolutions[e][r][c])}for(var h=6;h<9;h++){for(var d=0;d<3;d++)this.templateRows[7].push(n.sudokuPuzzles[e][h][d]),this.rowSolutions[7].push(l.sudokuPuzzleSolutions[e][h][d]);for(var m=3;m<6;m++)this.templateRows[8].push(n.sudokuPuzzles[e][h][m]),this.rowSolutions[8].push(l.sudokuPuzzleSolutions[e][h][m]);for(var p=6;p<9;p++)this.templateRows[9].push(n.sudokuPuzzles[e][h][p]),this.rowSolutions[9].push(l.sudokuPuzzleSolutions[e][h][p])}console.log(this.templateRows),console.log(this.rowSolutions),this.updatedRows=this.templateRows}},{key:"renderTemplate",value:function(){var e=this;this.transposeTemplate();for(var t=function(t){for(var o=function(o){var s=e.obj[o+1],n=e.obj[t+1],l=document.getElementById("x:"+e.obj[o+1]+", y:"+e.obj[t+1]),i=e.templateRows[t+1][o],r="x:"+s+", y:"+n;if(quad=l.className,"."===i){e.emptyCount+=1;var a=document.createElement("input");a.type="text",a.value="",a.id=r,a.className=quad,a.style.width="5.4vw",a.style.height="5.4vh",a.style.backgroundColor=document.getElementById(r).style.backgroundColor;var u="no",c=e.updatedRows,h=e.rowSolutions,d=(e.score,e.emptyCount);document.getElementById("score").innerHTML=0,l.appendChild(a),a.onchange=function(e){e.preventDefault();var s=parseInt(e.target.value,10);if(console.log(h),s===h[t+1][o]?(document.getElementById("score").innerHTML=parseInt(document.getElementById("score").innerHTML)+1,a.style.backgroundColor=document.getElementById(r).style.backgroundColor,a.value=e.target.value,console.log(u),u=e.target.value,console.log(u),c[t+1][o]=parseInt(u),console.log(c===h),console.log(c)):s?(document.getElementById("score").innerHTML=parseInt(document.getElementById("score").innerHTML)-2,a.style.backgroundColor="red"):a.style.backgroundColor=document.getElementById(r).style.backgroundColor,JSON.stringify(c)===JSON.stringify(h)){alert("total empty spaces: ".concat(d));var n=parseInt(document.getElementById("score").innerHTML)/d*100;document.getElementById("myCanvas").style.background="white",document.getElementById("myCanvas").innerHTML="GAME OVER!  Final Score: ",document.getElementById("myCanvas").appendChild(document.createTextNode(Math.ceil(n))),document.getElementById("myCanvas").appendChild(document.createTextNode("%")),alert("game over")}}}else l.appendChild(document.createTextNode(i)),l.style.alignItems="center",l.style.fontWeight="bold";l.style.display="flex",l.style.left="50%",l.style.top="50%"},s=0;s<9;s++)o(s)},o=0;o<9;o++)t(o)}},{key:"createCartesian",value:function(){this.quadrant.style.backgroundColor="black";for(var e=0,t=0,o=1;o<=9;o++){var s=document.createElement("div");this.quadrant.appendChild(s),Object.assign(s.style,{height:"17.4vh",width:"17.4vw",border:".2vw solid black",display:"flex",flexFlow:"wrap",justifyContent:"center"});for(var n=1;n<=9;n++){var l="";o<=3?(t=1,l+="top"):o>3&&o<=6?(t=4,l+="mid"):(t=7,l+="bottom"),o%3==1?(e=1,l+="left"):o%3==2?(e=4,l+="middle"):o%3==0&&(e=7,l+="right"),e+=(n-1)%3,t+=Math.ceil(n/3)-1;var i=document.createElement("div");s.appendChild(i),i.style.width="5.4vw",i.style.height="5.4vh",i.style.border=".1vw solid gray";var r="x:"+e+", y:"+t;i.id=r,console.log(i.id),i.className=l,this.quadsArray.indexOf(l)%2==0||(i.style.backgroundColor="tan"),i.style.backgroundColor="white"}}}},{key:"obtainIDs",value:function(){for(var e=this,t=[[],[],[],[],[],[],[],[],[]],o=[[],[],[],[],[],[],[],[],[]],s="",n=1;n<=9;n++)for(var l=1;l<=9;l++){console.log(this.obj[l],this.obj[n]);var i=this.obj[l],r=this.obj[n],a=document.getElementById("x:"+this.obj[l]+", y:"+this.obj[n]);console.log("rows: ".concat(this.rows));var u=Math.ceil(9*Math.random());console.log("num: ".concat(u));var c="x:"+i+", y:"+r;s=a.className;var h=!0;Math.ceil(6*Math.random()),(t[r-1].includes(u)||o[i-1].includes(u))&&(h=!1),h&&!this.quads[s].includes(u)?(this.quads[s].push(u),a.appendChild(document.createTextNode(u)),t[r-1].push(u),o[i-1].push(u)):function(){t[r-1].push(""),o[i-1].push("");var n=document.createElement("input");n.type="text",n.value="",n.id=c,n.className=s,n.style.width="5.4vw",n.style.height="5.4vh",n.style.backgroundColor=document.getElementById(c).style.backgroundColor,n.style.border=".2vw dotted black",a.appendChild(n);var l="no",u=e.quads;n.onchange=function(e){e.preventDefault();var t=parseInt(e.target.value,10);console.log("quads: ".concat(u[n.className])),console.log("quads includes ".concat(t,"?: ").concat(u[n.className].includes(t))),console.log("quad: ".concat(n.className)),u[n.className].includes(t)?alert("try again"):(n.value=e.target.value,console.log(l),l=e.target.value,console.log(l))}}(),console.log("rows ".concat(i,": ").concat(t[i-1])),console.log("cols ".concat(r,": ").concat(o[r-1])),console.log(s),console.log(this.quads)}}}])&&s(t.prototype,o),i&&s(t,i),e}();e.exports=i,document.getElementById("myCanvas").style.width="54vw",document.getElementById("myCanvas").style.textAlign="left";var r=document.createElement("button");document.getElementById("myCanvas").appendChild(r),r.style.height="4vh",r.style.width="20vw",r.innerHTML="Start",r.id="startBoard";new i},function(e,t){function o(e,t){for(var o=0;o<t.length;o++){var s=t[o];s.enumerable=s.enumerable||!1,s.configurable=!0,"value"in s&&(s.writable=!0),Object.defineProperty(e,s.key,s)}}var s=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.startTime=new Date,this.timer=document.getElementById("time"),this.start=this.start.bind(this)}var t,s,n;return t=e,(s=[{key:"start",value:function(){var e=new Date;this.timer.innerHTML="Time: ";var t=Math.round((e-this.startTime)/1e3);t%60<10?this.timer.appendChild(document.createTextNode(Math.floor(t/60)+":0"+t%60)):this.timer.appendChild(document.createTextNode(Math.floor(t/60)+":"+t%60))}},{key:"stop",value:function(){}}])&&o(t.prototype,s),n&&o(t,n),e}();e.exports=s},function(e,t,o){},function(e,t){e.exports.sudokuPuzzles={1:[[1,3,".",".",2,5,4,8,"."],[2,".",".",".",1,".",".",6,"."],[7,4,".",".",".",".",".",5,"."],[".",".",".",5,".",".",9,".","."],[7,8,".",".",9,".",".",3,"."],[2,1,".",3,7,".",".",".",5],[".",4,".",".",5,3,6,".","."],[".",".",6,".",".",1,".",".","."],[8,9,".",4,".",".",".",".","."]],2:[[1,".",".",".",".",9,".",2,"."],[".",".",".",1,4,".",".",".",6],[2,7,6,".",".",".",".",9,1],[".",8,".",7,3,".",".",".",2],[".",".",9,".",8,4,".",".",5],[6,1,".",".",".",".",".",8,"."],[5,".",6,".",".",7,3,4,"."],[".",".",3,".",".",".",5,9,"."],[".",".",".",".",5,".",".",".","."]],3:[[4,".",6,5,7,".",".",".",1],[".",".",".",2,".",6,".",".",5],[2,".",9,".",".",".",".",".",8],[6,".",3,7,".",".",".",".",5],[4,8,1,5,".",".",".",".","."],[7,".",".",3,".",".",".",".","."],[".",8,9,".",6,".",3,".",4],[".",".",".",".",".",".",".",".","."],[4,3,".",".",".",1,".",6,7]],4:[[4,8,7,9,".",".",2,".",6],[".",5,".",4,".",".",".",8,9],[".",6,".",".",".",3,5,".","."],[".",".",4,1,".",".",".",7,8],[".",1,5,".",".",4,2,".","."],[6,".",".",".",5,".",".",".","."],[".",".",".",7,5,".",".",2,"."],[".",".",8,".",".",".",".",3,7],[".",7,".",".",3,".",4,1,"."]],5:[[1,9,".",".",4,".",".",7,8],[5,".",".",".",".",8,1,".","."],[".",6,4,7,".",".",9,".","."],[7,".",".",".",".",".",".",".",9],[".",".",".",3,7,9,".",1,4],[".",".",".",2,".",".",3,5,"."],[".",5,2,".",1,".",".",8,"."],[".",3,6,".",".",".",".",9,"."],[4,7,".",6,8,".",".",3,"."]],6:[[4,3,7,".",5,".",".",".","."],[".",1,".",".",".",6,".",".","."],[2,6,".",3,".",1,".",8,5],[".",7,4,".",".",9,".",2,"."],[6,2,".",7,".",3,9,".",5],[".",".",".",".",1,".",".",".","."],[".",9,3,7,".",".",8,".","."],[".",".",".",8,".",2,3,7,9],[".",".",".",".",3,4,".",".","."]],7:[[1,".",".",9,".",".",".",7,"."],[2,".",".",".",".",7,".",".","."],[3,".",6,4,2,".",".",".",1],[".",".",".",".",1,".",2,4,5],[".",".",4,".",9,".",".",".",8],[5,".",7,6,".",".",".",".","."],[".",5,8,".",6,".",".",".","."],[7,3,2,".",".",".",9,".","."],[".",".",".",".",3,".",".",".",4]],8:[[2,".",".",".",".",".",".",".",1],[6,1,".",9,".",".",".",3,7],[3,7,8,1,".",".",".",".",5],[".",".",5,9,".",2,8,4,"."],[1,4,".",".",8,".",".",7,"."],[2,".",3,4,".",".",".",".","."],[".",".",".",".",5,".",".",".","."],[".",".",4,".",9,".",".",".","."],[7,5,".",8,1,".",".",".","."]],9:[[7,4,9,".",2,".",6,".",3],[".",".",1,6,".",".",9,".",4],[3,".",2,4,".",".",1,7,"."],[2,".",".",".",".",".",".",".",4],[".",8,".",1,".",".",".",6,"."],[".",".",3,".",9,".",".",".","."],[".",3,".",".",".",".",".",7,8],[2,".",8,".",3,".",5,9,"."],[".",".",".",8,1,".",2,".","."]],10:[[2,4,".",3,".",".",".",9,"."],[".",".",5,".",2,4,3,".","."],[".",".",".",6,".",9,5,".","."],[".",6,".",7,".",3,".",".","."],[5,".",".",".",".",".",".",7,8],[9,".",".",4,".",1,".",".","."],[".",".",8,".",".",5,1,".","."],[2,".",".",8,".",3,".",".","."],[7,4,5,1,6,2,".",".","."]]}},function(e,t){e.exports.sudokuPuzzleSolutions={1:[[1,3,6,7,2,5,4,8,9],[2,5,9,4,1,8,3,6,7],[7,4,8,9,3,6,1,5,2],[3,6,4,5,1,8,9,7,2],[7,8,5,6,9,2,1,3,4],[2,1,9,3,7,4,6,8,5],[2,4,1,8,5,3,6,9,7],[5,7,6,9,2,1,8,4,3],[8,9,3,4,6,7,5,2,1]],2:[[1,5,4,6,7,9,8,2,3],[9,3,8,1,4,2,7,5,6],[2,7,6,8,3,5,4,9,1],[4,8,5,7,3,1,9,6,2],[2,7,9,6,8,4,3,1,5],[6,1,3,5,2,9,7,8,4],[5,1,6,2,9,7,3,4,8],[8,2,3,4,6,1,5,9,7],[9,4,7,3,5,8,1,6,2]],3:[[4,3,6,5,7,8,9,2,1],[1,7,8,2,9,6,3,4,5],[2,5,9,1,4,3,6,7,8],[6,9,3,7,1,2,8,4,5],[4,8,1,5,6,9,7,2,3],[7,2,5,3,8,4,9,1,6],[1,8,9,2,6,7,3,5,4],[6,5,7,8,3,4,9,1,2],[4,3,2,5,9,1,8,6,7]],4:[[4,8,7,9,1,5,2,3,6],[3,5,1,4,2,6,7,8,9],[9,6,2,7,8,3,5,4,1],[3,9,4,1,6,2,5,7,8],[8,1,5,9,7,4,2,6,3],[6,2,7,3,5,8,1,9,4],[6,4,3,7,5,1,8,2,9],[1,9,8,6,4,2,5,3,7],[2,7,5,8,3,9,4,1,6]],5:[[1,9,3,2,4,5,6,7,8],[5,2,7,9,6,8,1,4,3],[8,6,4,7,1,3,9,2,5],[7,3,4,5,6,1,8,2,9],[2,8,5,3,7,9,6,1,4],[1,9,6,2,4,8,3,5,7],[9,5,2,3,1,7,4,8,6],[8,3,6,4,5,2,7,9,1],[4,7,1,6,8,9,5,3,2]],6:[[4,3,7,2,5,8,9,6,1],[5,1,8,4,9,6,2,3,7],[2,6,9,3,7,1,4,8,5],[3,7,4,5,8,9,1,2,6],[6,2,1,7,4,3,9,8,5],[5,9,8,6,1,2,7,4,3],[6,9,3,7,1,5,8,4,2],[1,5,4,8,6,2,3,7,9],[8,2,7,9,3,4,1,5,6]],7:[[1,8,4,9,3,6,5,7,2],[2,5,9,8,1,7,4,6,3],[3,7,6,4,2,5,8,9,1],[6,9,3,8,1,7,2,4,5],[1,2,4,3,9,5,6,7,8],[5,8,7,6,4,2,9,1,3],[4,5,8,7,6,9,3,2,1],[7,3,2,5,4,1,9,8,6],[1,6,9,2,3,8,7,5,4]],8:[[2,9,4,5,3,7,6,8,1],[6,1,5,9,2,8,4,3,7],[3,7,8,1,4,6,9,2,5],[7,6,5,9,1,2,8,4,3],[1,4,9,5,8,3,2,7,6],[2,8,3,4,6,7,5,9,1],[1,2,8,3,5,6,4,7,9],[3,6,4,7,9,2,8,5,1],[7,5,9,8,1,4,6,3,2]],9:[[7,4,9,5,2,1,6,8,3],[8,5,1,6,7,3,9,2,4],[3,6,2,4,8,9,1,7,5],[2,1,5,3,6,7,8,9,4],[7,8,9,1,4,2,3,6,5],[6,4,3,5,9,8,7,2,1],[4,3,6,9,5,2,1,7,8],[2,1,8,4,3,7,5,9,6],[9,5,7,8,1,6,2,3,4]],10:[[2,4,6,3,5,7,8,9,1],[9,8,5,1,2,4,3,6,7],[3,1,7,6,8,9,5,2,4],[4,6,2,7,8,3,5,1,9],[5,3,1,6,9,2,4,7,8],[9,7,8,4,5,1,2,3,6],[6,3,8,9,7,5,1,2,4],[2,1,9,8,4,3,7,5,6],[7,4,5,1,6,2,8,9,3]]}},function(e,t,o){"use strict";o.r(t);o(3),o(0),o(1);var s,n=o(1),l=(o(0),o(2));function i(){var e;clearInterval(s),e=new l,s=setInterval((function(){e.start()})),document.getElementById("myCanvas").innerHTML="";var t=new n;t.createCartesian(),t.renderTemplate()}document.getElementById("resetBoard").onclick=i,document.getElementById("startBoard").onclick=i;o(2)}]);
//# sourceMappingURL=main.js.map