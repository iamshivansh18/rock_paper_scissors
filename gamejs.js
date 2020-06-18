
var id,turn=0,ran,win=0,tie=0,lose=0,round=0,flag=0,over=0,aud=0;
var win_aud=new Audio('assets/won.mp3');
var los_aud=new Audio('assets/over.mp3');
var audio=new Audio('assets/game-menu.mp3');
audio.play();



function fun() {
    round=document.getElementById("rounds").value;
    document.getElementById("start").style.display="none";
    document.getElementById("container").style.filter="blur(0)";
    document.getElementById("record").style.filter="blur(0)";
    flag=1;
    turn=0;
    audio.play();
}

function stopaud() {
    
    if(aud==0) {
        document.getElementById("spkon").style.display="none";
        document.getElementById("spkoff").style.display="block";
        aud=1;
        audio.pause();
    }
    else {
        document.getElementById("spkoff").style.display="none";
        document.getElementById("spkon").style.display="block";
        aud=0;
        audio.play();
    }
}


function rock() {
    if(over==0) {
    document.getElementById("user").src="assets/rock_u.svg";
    document.getElementById("comp").src="assets/rock_c.svg";
    document.getElementById("comp").className="anime_c";
    document.getElementById("user").className="anime_u";
    setTimeout(rock_an,1000);
    }
}

function rock_an() {
    if(over==0) {
    document.getElementById("user").className=" ";
    document.getElementById("comp").className=" ";
    document.getElementById("user").src="assets/rock_u.svg";
    id=1;
    turn=turn+1;
    comp();
    }
}


function paper() {
    if(over==0) {
    document.getElementById("user").src="assets/rock_u.svg";
    document.getElementById("comp").src="assets/rock_c.svg";
    document.getElementById("comp").className="anime_c";
    document.getElementById("user").className="anime_u";
    setTimeout(paper_an,1000);
    }
}

function paper_an() {
    if(over==0) {
    document.getElementById("user").className=" ";
    document.getElementById("comp").className=" ";
    document.getElementById("user").src="assets/paper_u.svg";
    id=2;
    turn=turn+1;
    comp();
    }
}

function scissor() {
    if(over==0) {
    document.getElementById("user").src="assets/rock_u.svg";
    document.getElementById("comp").src="assets/rock_c.svg";
    document.getElementById("comp").className="anime_c";
    document.getElementById("user").className="anime_u";
    setTimeout(scissor_an,1000);
    }
}

function scissor_an() {
    if(over==0) {
    document.getElementById("user").className=" ";
    document.getElementById("comp").className=" ";
    document.getElementById("user").src="assets/scissors_u.svg";
    id=3;
    turn=turn+1;
    comp();
    }
}



function comp() {

        ran=Math.floor(Math.random()*3)+1;
        if(ran==1) {
            document.getElementById("comp").src="assets/rock_c.svg";
        }
        if(ran==2) {
            document.getElementById("comp").src="assets/paper_c.svg";
        }
        if(ran==3) {
            document.getElementById("comp").src="assets/scissors_c.svg";
        }
        turn++;
        if(turn/2!=round) { game();}
        else {
            document.getElementById("turns").innerHTML=turn/2;
            setTimeout(game,1000);
        }

}

function game() {
    if (flag==1 && over==0) {
        if(id==ran) tie++;
        if(id==1 && ran==3) win++;
        if(id==1 && ran==2) lose++;
        if(id==2 && ran==3) lose++;
        if(id==2 && ran==1) win++;
        if(id==3 && ran==2) win++;
        if(id==3 && ran==1) lose++;
        document.getElementById("win").innerHTML=win;
        document.getElementById("lose").innerHTML=lose;
        document.getElementById("tie").innerHTML=tie;
        document.getElementById("turns").innerHTML=turn/2;
        
        if(turn/2==round) {
            
            over=1;
            if(win>lose) {
                document.getElementById("result").style.display="block";
                document.getElementById("won").style.display="block";
                document.getElementById("anc-win").style.display="block";
                if(aud==0) win_aud.play();
            }
            if(lose>win) {
                document.getElementById("result").style.display="block";
                document.getElementById("lost").style.display="block";
                document.getElementById("anc-lost").style.display="block";
                if(aud==0) los_aud.play();
            }    
            if(win==lose) {
                document.getElementById("result").style.display="block";
                document.getElementById("tied").style.display="block";
                document.getElementById("anc-tied").style.display="block";                
            }
            document.getElementById("again").style.display="block";
        }
    }
}


