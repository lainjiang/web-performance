$(document).ready(function(){var $imglist=$("<div></div>");var $img;for(var j=0;j<5;j++){for(var i=0;i<3;i++){$img=$("<img>");$img.addClass("img2").addClass("foo"+(i+1));$imglist.append($img)}}$(".para2").after($imglist);$imglist=$("<div></div>");for(var j=0;j<5;j++){for(var i=0;i<3;i++){$img=$("<img>");$img.addClass("img2").addClass("foo"+(i+1));$imglist.append($img)}}$(".para3").after($imglist)});$(document).ready(function(){var $para1=$(".para1");$para1[0].innerText=$para1[0].innerText.replace(/Lorem/,"LOREM").replace(/dolor/,"DOLOR").replace(/amet/,"AMET").replace(/adipiscing/,"ADIPISCING").replace(/Donec/,"DONEC").replace(/justo/,"JUSTO").replace(/justo/,"JUSTO").replace(/luctus/,"LUCTUS").replace(/ut/,"UT").replace(/in/,"IN").replace(/eret/,"ERET").replace(/ante/,"ANTE").replace(/congue/,"CONGUE").replace(/ornare/,"ORNARE").replace(/felis/,"FELIS").replace(/hendrerit/,"HENDRERIT").replace(/elementum/,"ELEMENTUM").replace(/nam/,"NAM").replace(/facilisis/,"FACILISIS").replace(/Phasellus/,"PHASELLUS").replace(/turpis/,"TURPIS").replace(/libero/,"LIBERO").replace(/dictum/,"DICTUM").replace(/eu/,"EU").replace(/nam/,"NAM").replace(/metus/,"METUS").replace(/Integer/,"INTEGER").replace(/malesuada/,"MALESUADA").replace(/sed/,"SED").replace(/nisi/,"NISI").replace(/quis/,"QUIS")});var a=1;