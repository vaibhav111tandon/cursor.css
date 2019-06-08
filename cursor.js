var cursor = document.querySelector('.cursor');
cursor.addEventListener('mousemove', (e) => {
   cursor.setAttribute('style', 'top:'+(e.clientY + 10 - cursor.clientHeight/2)+'px;left:'+(e.clientX - cursor.clientWidth/2) +'px;'); 

});

var body = document.getElementsByTagName('body')[0];
body.addEventListener('mouseover', (e) => {
    cursor.setAttribute('style', 'top:'+(e.clientY + 10 - cursor.clientHeight/2)+'px;left:'+(e.clientX - cursor.clientWidth/2) +'px;'); 
});

body.addEventListener('click', (e) => {
    cursor.setAttribute('style', 'top:'+(e.clientY + 10 - cursor.clientHeight/2)+'px;left:'+(e.clientX - cursor.clientWidth/2) +'px;');
});
 