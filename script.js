var a=document.getElementById("box1")
var b=document.getElementById("box2")
var c=document.getElementById("box3")
var d=document.getElementById("box4")
var e=document.getElementById("box5")
var f=document.getElementById("box6")
var g=document.getElementById("box7")
var h=document.getElementById("box8")
var i=document.getElementById("box9")

var arr=[
    [0,0,0],
    [0,0,0],
    [0,0,0]
]
var x=1
var y="X"
function swap () {
    if(x==1){
        x=2
        y="X"
    }
    else{
        x=1
        y="0"
    }
    document.getElementById("info").innerHTML="Turn for player "+ x; 

}

function a_func(){arr[0][0]=x;swap();a.innerHTML=y;win();a.removeEventListener("click", a_func)}
function b_func(){arr[0][1]=x;swap();b.innerHTML=y;win();b.removeEventListener("click", b_func)}
function c_func(){arr[0][2]=x;swap();c.innerHTML=y;win();c.removeEventListener("click", c_func)}
function d_func(){arr[1][0]=x;swap();d.innerHTML=y;win();d.removeEventListener("click", d_func)}
function e_func(){arr[1][1]=x;swap();e.innerHTML=y;win();e.removeEventListener("click", e_func)}
function f_func(){arr[1][2]=x;swap();f.innerHTML=y;win();f.removeEventListener("click", f_func)}
function g_func(){arr[2][0]=x;swap();g.innerHTML=y;win();g.removeEventListener("click", g_func)}
function h_func(){arr[2][1]=x;swap();h.innerHTML=y;win();h.removeEventListener("click", h_func)}
function i_func(){arr[2][2]=x;swap();i.innerHTML=y;win();i.removeEventListener("click", i_func)}

a.addEventListener("click", a_func)
b.addEventListener("click", b_func)
c.addEventListener("click", c_func)
d.addEventListener("click", d_func)
e.addEventListener("click", e_func)
f.addEventListener("click", f_func)
g.addEventListener("click", g_func)
h.addEventListener("click", h_func)
i.addEventListener("click", i_func)



document.getElementById("info").innerHTML="Turn for player "+ x;

function win(){
    if(
        (arr[0][0]==arr[0][1] && arr[0][1]==arr[0][2] && arr[0][0] == 1 ) || 
        (arr[1][0]==arr[1][1] && arr[1][1]==arr[1][2] && arr[1][0] == 1 ) || 
        (arr[2][0]==arr[2][1] && arr[2][1]==arr[2][2] && arr[2][0] == 1 ) ||
        (arr[0][0]==arr[1][0] && arr[1][0]==arr[2][0] && arr[0][0] == 1 ) || 
        (arr[0][1]==arr[1][1] && arr[1][1]==arr[2][1] && arr[0][1] == 1 ) ||
        (arr[0][2]==arr[1][2] && arr[1][2]==arr[2][2] && arr[0][2] == 1 ) ||
        (arr[0][0]==arr[1][1] && arr[1][1]==arr[2][2] && arr[0][0] == 1 ) || 
        (arr[0][2]==arr[1][1] && arr[1][1]==arr[2][0] && arr[0][2] == 1 )
    ){
        document.getElementById("info").innerHTML="Player 1 won game over";
        a.removeEventListener("click", a_func)
        b.removeEventListener("click", b_func)
        c.removeEventListener("click", c_func)
        d.removeEventListener("click", d_func)
        e.removeEventListener("click", e_func)
        f.removeEventListener("click", f_func)
        g.removeEventListener("click", g_func)
        h.removeEventListener("click", h_func)
        i.removeEventListener("click", i_func)
    }
    else if(
        (arr[0][0]==arr[0][1] && arr[0][1]==arr[0][2] && arr[0][0] == 2 ) || 
        (arr[1][0]==arr[1][1] && arr[1][1]==arr[1][2] && arr[1][0] == 2 ) || 
        (arr[2][0]==arr[2][1] && arr[2][1]==arr[2][2] && arr[2][0] == 2 ) ||
        (arr[0][0]==arr[1][0] && arr[1][0]==arr[2][0] && arr[0][0] == 2 ) || 
        (arr[0][1]==arr[1][1] && arr[1][1]==arr[2][1] && arr[0][1] == 2 ) ||
        (arr[0][2]==arr[1][2] && arr[1][2]==arr[2][2] && arr[0][2] == 2 ) ||
        (arr[0][0]==arr[1][1] && arr[1][1]==arr[2][2] && arr[0][0] == 2 ) || 
        (arr[0][2]==arr[1][1] && arr[1][1]==arr[2][0] && arr[0][2] == 2 )
    ){
        document.getElementById("info").innerHTML="Player 2 won game over";
        a.removeEventListener("click", a_func)
        b.removeEventListener("click", b_func)
        c.removeEventListener("click", c_func)
        d.removeEventListener("click", d_func)
        e.removeEventListener("click", e_func)
        f.removeEventListener("click", f_func)
        g.removeEventListener("click", g_func)
        h.removeEventListener("click", h_func)
        i.removeEventListener("click", i_func)
       
    }
    else if(match_draw()){
        document.getElementById("info").innerHTML="No one won! Match Draw";
    }
    
   
}

function match_draw(){
    let p=0
    for(let l=0;l<3;l++){
        for(let k=0;k<3;k++){
            if(arr[l][k]==0){
                p=p+1
            }

        }
    }
    if(p==0){
        return true
    }
    else{
        return false
    }
}

var r=document.getElementById("reset")
r.addEventListener("click",r_func)
function r_func(){
    window.location.reload();
}
var x=1
var y="X"
