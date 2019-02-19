// alert('Welcome to DCI')

// function showhide(){
//     if (document.getElementById('img').style.display=='block' ){
//         document.getElementById('img').style.display='none';
//         document.getElementById('showhide').innerHTML='Show';
//     }

//     else{document.getElementById('img').style.display='block';
//     document.getElementById('showhide').innerHTML='Hide';
    
// }
// }
function changestyle(){
    document.body.style.background='lightgray';
    document.getElementById('first').style.background='lime';
    document.getElementById('first').style.color='blue';
    document.getElementById('first').style.fontFamily='courier';
    document.getElementById('j').style.background='red';
    var newwidth="200px";
    var welcome='Welcome to DCI';
    document.getElementById('first').innerHTML=welcome;

}
function changelanguage(){
    var Wilkommen='Wilkommen bei DCI';
        Wilkommen=''
    
    document.getElementById('first').innerHTML=Wilkommen;
}

function welcome(fname,lname){
    var wilkommen='Wilkommen bei DCI';
    document.getElementById('first').innerHTML=wilkommen  +'       '+fname+' '+lname;
}
function changestyle2(){
    document.getElementById('myDiv').style.transition='all 3s'
}
function changestyle3(){
    document.getElementById('myDiv').style.transform='rotate(1080deg)'
}
function myrotate(){
    if (document.getElementById('myDiv').style.transform=='rotate1080deg'){
        document.getElementById('myDiv').style.transform='rotate0deg';
    }
    
    else{document.getElementById('myDiv').style.transform='rotate1080deg'}
}
function changestyle4(){
var newname=prompt('Please enter your name')
document.getElementById('FullName').innerHTML='<h1>'+newname+'</h1>'
}