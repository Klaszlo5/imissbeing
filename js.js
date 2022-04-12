const kepek = ["kepek/kep1.jpg","kepek/kep2.jpg","kepek/kep3.jpg","kepek/kep4.jpg",
"kepek/kep5.jpg","kepek/kep6.jpg","kepek/kep7.jpg","kepek/kep8.jpg","kepek/kep9.jpg"
,"kepek/kep10.jpg","kepek/kep11.jpg","kepek/kep12.jpg","kepek/kep13.jpg","kepek/kep14.jpg",
"kepek/kep15.jpg","kepek/kep16.jpg","kepek/kep17.jpg","kepek/kep18.jpg","kepek/kep19.jpg",
"kepek/kep20.jpg"]
const hatter="kepek/hatter.jpg";

window.addEventListener("load", init);

function ID(elem) {
    return document.getElementById(elem);
}
function $(elem) {
    return document.getElementsByClassName(elem);
}
function Q(elem) {
    return document.querySelectorAll(elem);
}

function init(){
    const kepeck=ID("kepek");
    let txt="";
    
    kepeck.forEach(function (elem, index){
        txt+=`<div><img src="${elem}" id="${index}"></div>`
    });
    kepeck.innerHTML=txt;
    const fordioto=Q("#kepeck div img");
    console.log(fordioto);
    fordioto.forEach(function(kepEleme){
        kepEleme.addEventListener("click", megfordit);
    })
    
}
function megfordit(){
    const hatter="kepek/hatter.jpg";
    console.log(event.target.id);
    let aktualisElem=event.target.id;
    event.target.src=kepTomb[aktualisElem];
    kivalasztottTomb.push(aktualisElem);
    console.log(kivalasztottTomb);
    event.target.removeEventListener("click",megfordit);
    if (kivalasztottTomb.length===2){
        const kepElemTomb=document.querySelectorAll("#galeria div img");
        kepElemTomb.forEach(function(elem){
            elem.removeEventListener("click", megfordit);
        });

        let feltetel=kepTomb[kivalasztottTomb[0]]===kepTomb[kivalasztottTomb[1]];
        console.log(feltetel);
        if(!feltetel){
            setTimeout(function(){

                kivalasztottTomb.forEach(function(elem){
                    document.getElementById(elem).src=hatter;
                })
                kivalasztottTomb.splice(0);
                },1000);
                kepElemTomb.forEach(function(elem){
                    elem.addEventListener("click", megfordit);
                });
            }
        }
        else{
        
        kivalasztottTomb.forEach(function(elem){
            document.getElementById(elem).dispay="none";
        })
        kivalasztottTomb.splice(0);
        kepElemTomb.forEach(function(elem){
            elem.addEventListener("click", megfordit);
        });
    }
}