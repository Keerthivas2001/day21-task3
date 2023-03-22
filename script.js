var div=document.createElement("div");
div.setAttribute("class","container");
var heading=document.createElement("p");
heading.setAttribute("class","heading");
heading.innerHTML="Disney Characters";
var row=document.createElement("div");
row.setAttribute("class","row");



async function Api(){
    var res=await fetch("https://api.disneyapi.dev/characters");
    var res1=await res.json();
    var final=res1.data;
   console.log(res1.data);

    for(let i= 0;i<50;i++){
      var col=document.createElement("div");
      col.setAttribute("class","col");
      col.innerHTML+=`<div class="card">
      <img class="img-top" src="${final[i].imageUrl}" alt="${final[i].name}"></img>
      <div class="card-body">
      <p class="title"> ${final[i].name} </p></div>
      </div>` 
        
      row.append(col);
    }
       

}
Api();

div.append(heading,row);
document.body.append(div);
