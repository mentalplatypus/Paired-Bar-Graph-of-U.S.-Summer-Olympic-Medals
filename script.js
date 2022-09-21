var c = document.getElementById("pairedcolumn");

// draw axis lines
var axis = c.getContext("2d");

axis.beginPath();
axis.moveTo(100,40);
axis.lineTo(100,550);
axis.moveTo(100,550);
axis.lineTo(925,550);
axis.stroke();

// draw axis labels
var label = c.getContext("2d");

label.fillText("50",80,50);
label.fillText("40",80,150);
label.fillText("30",80,250);
label.fillText("20",80,350);
label.fillText("10",80,450);
label.fillText("0",80,550);

label.fillText("2000",200,570);
label.fillText("2004",350,570);
label.fillText("2008",500,570);
label.fillText("2012",650,570);
label.fillText("2016",800,570);

label.fillText("Medal",20,280);
label.fillText("Count",20,290);

label.fillText("Year",480,600);

label.fillText("Gold",1040,67);
label.fillText("Silver",1040,107);
label.fillText("Bronze",1040,147);

// draw bars
var bar = c.getContext("2d");

// year 2000
bar.beginPath();
bar.fillStyle = "#FFD700";
bar.fillRect(160,180,30,370);
bar.stroke();

bar.beginPath();
bar.fillStyle = "#C0C0C0";
bar.fillRect(190,310,30,240);
bar.stroke();

bar.beginPath();
bar.fillStyle = "#CD7F32";
bar.fillRect(220,230,30,320);
bar.stroke();

// year 2004
bar.beginPath();
bar.fillStyle = "#FFD700";
bar.fillRect(310,190,30,360);
bar.stroke();

bar.beginPath();
bar.fillStyle = "#C0C0C0";
bar.fillRect(340,160,30,390);
bar.stroke();

bar.beginPath();
bar.fillStyle = "#CD7F32";
bar.fillRect(370,290,30,260);
bar.stroke();

// year 2008
bar.beginPath();
bar.fillStyle = "#FFD700";
bar.fillRect(460,190,30,360);
bar.stroke();

bar.beginPath();
bar.fillStyle = "#C0C0C0";
bar.fillRect(490,160,30,390);
bar.stroke();

bar.beginPath();
bar.fillStyle = "#CD7F32";
bar.fillRect(520,180,30,370);
bar.stroke();

// year 2012
bar.beginPath();
bar.fillStyle = "#FFD700";
bar.fillRect(610,90,30,460);
bar.stroke();

bar.beginPath();
bar.fillStyle = "#C0C0C0";
bar.fillRect(640,270,30,280);
bar.stroke();

bar.beginPath();
bar.fillStyle = "#CD7F32";
bar.fillRect(670,250,30,300);
bar.stroke();

// year 2016
bar.beginPath();
bar.fillStyle = "#FFD700";
bar.fillRect(760,90,30,460);
bar.stroke();

bar.beginPath();
bar.fillStyle = "#C0C0C0";
bar.fillRect(790,180,30,370);
bar.stroke();

bar.beginPath();
bar.fillStyle = "#CD7F32";
bar.fillRect(820,170,30,380);
bar.stroke();

// key
bar.beginPath();
bar.fillStyle = "#FFD700";
bar.fillRect(1000,50,30,30);
bar.stroke();

bar.beginPath();
bar.fillStyle = "#C0C0C0";
bar.fillRect(1000,90,30,30);
bar.stroke();

bar.beginPath();
bar.fillStyle = "#CD7F32";
bar.fillRect(1000,130,30,30);
bar.stroke();