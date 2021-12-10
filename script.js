
var daysofweek=['sun','mon','tue','wed','thus','fri','sat'];
var month=['JAN','FEB','MAR','APR','MAY','JUN','JUL','AUG','SEPT','OCT','NOV','DEC'];

setInterval(() => {
    
    var today=new Date();
    var h=today.getHours();
    var m=today.getMinutes();
    var s=today.getSeconds();
    var day=h<12?'AM':'PM';
    var daytoday=today.getDay();
    var date=today.getDate()
    var mon=today.getMonth();
    var year=today.getFullYear();


h=h<10?'0'+h: h;
m=m<10?'0'+m: m;
s=s<10?'0'+s: s;

document.getElementById('Hours').innerHTML=`${h}:`
document.getElementById('Minutes').innerHTML=m+":";        
document.getElementById('Seconds').innerHTML=s;
document.getElementById('time').innerHTML=day;
document.getElementById('day').innerHTML=date;
document.getElementById('month').innerHTML=month[mon];
document.getElementById('year').innerHTML=year;
document.getElementById(''+daysofweek[daytoday]+'').style.color='#ffffff';


}, 1000);

const quote=document.querySelector("#quote");
const author=document.querySelector("#author");
const btn=document.querySelector("#btn");
window.addEventListener("load",getQuote);

function getQuote(){
    fetch("http://api.quotable.io/random")
    .then(res=>res.json())
    .then(data => {
        quote.innerHTML=`"${data.content}"`;
       author.innerHTML=data.author;
    });
}