var app={start:function(){window.Promise||(window.Promise=Promise);background.preload.then(function(){background.start()});turtle.start()}},preloader={hide:function(){document.getElementById("preloader").classList.add("vanish")}},background={images:"Sequence1.png Sequence2.png Sequence3.png Sequence4.png Sequence5.png Sequence6.png Sequence7.png Sequence8.png Sequence9.png Sequence10.png Sequence11.png Sequence12.png Sequence0.png".split(" "),path:"./images/960",timeout:3333,elmId:"background",elm:{}};
background.preload=new Promise(function(a,b){background.images.forEach(function(c,a){var b=background.path+"/"+background.images[a];(new Image).src=b});a()});background.start=function(){var a=this.images.length,b=Math.floor(Math.random()*a),c=null;this.elm=document.getElementById(background.elmId);preloader.hide();background.next(b);setInterval(function(){c="number"===typeof c?c<a-1?parseInt(c+1):0:b;background.next(c)},this.timeout)};
background.next=function(a){this.elm.style.backgroundImage="url("+(this.path+"/"+this.images[a])+")";var b=document.createElement("img");b.src=this.path+"/"+this.images[0<a?a-1:this.images.length-1];this.elm.appendChild(b);b.classList.add("vanish");var c=this.elm.getElementsByTagName("img");"object"===typeof c[0]&&setTimeout(function(){c[0].remove()},10*background.timeout)};
var turtle={imgPath:"./images/jojo-on-turtle.png",img2Path:"./images/jojo-on-turtle-blink.png",elmId:"turtle",timeout:5E3,start:function(){this.elm=document.getElementById(turtle.elmId);var a=document.createElement("img"),b=!1;a.addEventListener("load",function(){b||(preloader.hide(),turtle.blink(),turtle.reposition(),b=!0)});var c=this.imgPath;(new Image).src=c;c=this.img2Path;(new Image).src=c;c=this.elm;a.src=this.imgPath;c.appendChild(a)},blink:function(){var a=this.elm;setInterval(function(){b.src=
turtle.img2Path;setTimeout(function(){b.src=turtle.imgPath},turtle.timeout/10)},turtle.timeout);var b=a.getElementsByTagName("img")[0]},reposition:function(){var a=this.elm;setInterval(function(){var b=document.documentElement.clientWidth/2,c=0-b;ymax=document.documentElement.clientHeight/2;ymin=0-ymax;var d=Math.floor(Math.random()*(ymax-ymin))+ymin;a.style.marginLeft=Math.floor(Math.random()*(b-c))+c+"px";a.style.marginTop=d+"px"},Math.floor(2E4*Math.random())+2E3)}};
window.addEventListener("load",app.start,!1);