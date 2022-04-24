var colors=['rebeccapurple','teal','cyan','yellow','red','blue','yellow','green','pink','violet'];
function background_change(){
    var x = Math.floor(Math.random()*10)+1;
    var y = Math.floor(Math.random()*10)+1;
    var prop = "linear-gradient(to right,"+colors[x]+","+colors[y]+")";
    document.getElementsByTagName('body')[0].style.backgroundImage=prop;
    console.log("Making changes");
}
function changeAgainAndAgain(){
    setInterval(background_change,1000);
}

var keyArr = document.getElementsByClassName("keys");
for(var i=0;i<keyArr.length;i++){
    keyArr[i].addEventListener('click',function(){
        keyArr[i].style.backgroundColor="tomato";
    })
}
function changeBtnClr(e){
    e.style.backgroundColor="tomato";
}
function changebackBtnClr(e){
    e.style.backgroundColor="turquoise";
}
/*result panel handler*/
function clearResultPanel(e){
    document.getElementById("result_panel").innerHTML="";
}
/* symbols handler*/
function writeleft_parenthesis(e){
    var text = document.getElementById("result_panel").innerHTML;
    text = text+" "+"("+" ";
    document.getElementById("result_panel").innerHTML=text;
}

function writeright_parenthesis(e){
    var text = document.getElementById("result_panel").innerHTML;
    text = text+" "+")"+" ";
    document.getElementById("result_panel").innerHTML=text;
}

function writeAddition(e){
    var text = document.getElementById("result_panel").innerHTML;
    text = text+" "+"+"+" ";
    document.getElementById("result_panel").innerHTML=text;    
}

function writeSubtraction(){
    var text = document.getElementById("result_panel").innerHTML;
    text = text+" "+"-"+" ";
    document.getElementById("result_panel").innerHTML=text;
}

function writeMultiplication(){
    var text = document.getElementById("result_panel").innerHTML;
    text = text+" "+"X"+" ";
    document.getElementById("result_panel").innerHTML=text;
}

function writeDivision(){
    var text = document.getElementById("result_panel").innerHTML;
    text = text+" "+"/"+" ";
    document.getElementById("result_panel").innerHTML=text;
}

function writeModulus(){
    var text = document.getElementById("result_panel").innerHTML;
    text = text+" "+"%"+" ";
    document.getElementById("result_panel").innerHTML=text;
}

function point(){
    var text = document.getElementById("result_panel").innerHTML;
    text = text+".";
    document.getElementById("result_panel").innerHTML=text;
}
/*number handler*/
function seven(){
    var text = document.getElementById("result_panel").innerHTML;
    text = text+"7";
    document.getElementById("result_panel").innerHTML=text;
}
function eight(){
    var text = document.getElementById("result_panel").innerHTML;
    text = text+"8";
    document.getElementById("result_panel").innerHTML=text;
}
function nine(){
    var text = document.getElementById("result_panel").innerHTML;
    text = text+"9";
    document.getElementById("result_panel").innerHTML=text;
}

function four(){
    var text = document.getElementById("result_panel").innerHTML;
    text = text+"4";
    document.getElementById("result_panel").innerHTML=text;
}
function five(){
    var text = document.getElementById("result_panel").innerHTML;
    text = text+"5";
    document.getElementById("result_panel").innerHTML=text;
}
function six(){
    var text = document.getElementById("result_panel").innerHTML;
    text = text+"6";
    document.getElementById("result_panel").innerHTML=text;
}
function one(){
    var text = document.getElementById("result_panel").innerHTML;
    text = text+"1";
    document.getElementById("result_panel").innerHTML=text;
}
function two(){
    var text = document.getElementById("result_panel").innerHTML;
    text = text+"2";
    document.getElementById("result_panel").innerHTML=text;
}
function three(){
    var text = document.getElementById("result_panel").innerHTML;
    text = text+"3";
    document.getElementById("result_panel").innerHTML=text;
}
function zero(){
    var text = document.getElementById("result_panel").innerHTML;
    text = text+"0";
    document.getElementById("result_panel").innerHTML=text;
}

/*result handler*/
function calculateExpression(){

}