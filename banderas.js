var america=[
    {bandera: 'argentina', etiqueta:'argentina'},
    {bandera: 'bahamas', etiqueta:'bahamas'},
    {bandera: 'barbados', etiqueta:'barbados'},
    {bandera: 'belice', etiqueta:'belice'},
    {bandera: 'bolivia', etiqueta:'bolivia'},
    {bandera: 'brasil', etiqueta:'brasil'},
    {bandera: 'canada', etiqueta:'canada'},
    {bandera: 'chile', etiqueta:'chile'},
    {bandera: 'colombia', etiqueta:'colombia'},
    {bandera: 'costa_rica', etiqueta:'costa_rica'},
    {bandera: 'cuba', etiqueta:'cuba'},
    {bandera: 'ecuador', etiqueta:'ecuador'},
    {bandera: 'el_salvador', etiqueta:'el_salvador'},
    {bandera: 'estados_unidos', etiqueta:'estados_unidos'},
    {bandera: 'guatemala', etiqueta:'guatemala'},
    {bandera: 'honduras', etiqueta:'honduras'},
    {bandera: 'jamaica', etiqueta:'jamaica'},
    {bandera: 'mexico', etiqueta:'mexico'},
    {bandera: 'nicaragua', etiqueta:'nicaragua'},
    {bandera: 'panama', etiqueta:'panama'},
    {bandera: 'paraguay', etiqueta:'paraguay'},
    {bandera: 'peru', etiqueta:'peru'},
    {bandera: 'republica_dominicana', etiqueta:'republica_dominicana'},
    {bandera: 'uruguay', etiqueta:'uruguay'},
    {bandera: 'venezuela', etiqueta:'venezuela'}
];

var europa=[
    {bandera: 'alemania', etiqueta:'alemania'},
    {bandera: 'austria', etiqueta:'austria'},
    {bandera: 'belgica', etiqueta:'belgica'},
    {bandera: 'bulgaria', etiqueta:'bulgaria'},
    {bandera: 'chipre', etiqueta:'chipre'},
    {bandera: 'croacia', etiqueta:'croacia'},
    {bandera: 'dinamarca', etiqueta:'dinamarca'},
    {bandera: 'eslovaquia', etiqueta:'eslovaquia'},
    {bandera: 'eslovenia', etiqueta:'eslovenia'},
    {bandera: 'españa', etiqueta:'españa'},
    {bandera: 'estonia', etiqueta:'estonia'},
    {bandera: 'finlandia', etiqueta:'finlandia'},
    {bandera: 'francia', etiqueta:'francia'},
    {bandera: 'grecia', etiqueta:'grecia'},
    {bandera: 'hungria', etiqueta:'hungria'},
    {bandera: 'irlanda', etiqueta:'irlanda'},
    {bandera: 'italia', etiqueta:'italia'},
    {bandera: 'letonia', etiqueta:'letonia'},
    {bandera: 'lituania', etiqueta:'lituania'},
    {bandera: 'luxemburgo', etiqueta:'luxemburgo'},
    {bandera: 'malta', etiqueta:'malta'},
    {bandera: 'polonia', etiqueta:'polonia'},
    {bandera: 'portugal', etiqueta:'portugal'},
    {bandera: 'rumania', etiqueta:'rumania'},
    {bandera: 'suecia', etiqueta:'suecia'}
];

var asia=[
    {bandera: 'afganistan', etiqueta:'afganistan'},
    {bandera: 'arabia_saudita', etiqueta:'arabia_saudita'},
    {bandera: 'armenia', etiqueta:'armenia'},
    {bandera: 'banglades', etiqueta:'banglades'},
    {bandera: 'birmania', etiqueta:'birmania'},
    {bandera: 'camboya', etiqueta:'camboya'},
    {bandera: 'catar', etiqueta:'catar'},
    {bandera: 'china', etiqueta:'china'},
    {bandera: 'corea_del_norte', etiqueta:'corea_del_norte'},
    {bandera: 'corea_del_sur', etiqueta:'corea_del_sur'},
    {bandera: 'emiratos_arabes', etiqueta:'emiratos_arabes'},
    {bandera: 'filipinas', etiqueta:'filipinas'},
    {bandera: 'georgia', etiqueta:'georgia'},
    {bandera: 'india', etiqueta:'india'},
    {bandera: 'indonesia', etiqueta:'indonesia'},
    {bandera: 'irak', etiqueta:'irak'},
    {bandera: 'iran', etiqueta:'iran'},
    {bandera: 'israel', etiqueta:'israel'},
    {bandera: 'japon', etiqueta:'japon'},
    {bandera: 'jordania', etiqueta:'jordania'},
    {bandera: 'kuwait', etiqueta:'kuwait'},
    {bandera: 'malasia', etiqueta:'malasia'},
    {bandera: 'pakistan', etiqueta:'pakistan'},
    {bandera: 'siria', etiqueta:'siria'},
    {bandera: 'tailandia', etiqueta:'tailandia'}
];

var africa=[
    {bandera: 'angola', etiqueta: 'angola'},
    {bandera: 'argelia', etiqueta: 'argelia'},
    {bandera: 'benin', etiqueta: 'benin'},
    {bandera: 'botsuana', etiqueta: 'botsuana'},
    {bandera: 'burkina_faso', etiqueta: 'burkina_faso'},
    {bandera: 'cabo_verde', etiqueta: 'cabo_verde'},
    {bandera: 'camerun', etiqueta: 'camerun'},
    {bandera: 'chad', etiqueta: 'chad'},
    {bandera: 'comoras', etiqueta: 'comoras'},
    {bandera: 'costa_de_marfil', etiqueta: 'costa_de_marfil'},
    {bandera: 'egipto', etiqueta: 'egipto'},
    {bandera: 'eritrea', etiqueta: 'eritrea'},
    {bandera: 'etiopia', etiqueta: 'etiopia'},
    {bandera: 'gabon', etiqueta: 'gabon'},
    {bandera: 'ghana', etiqueta: 'ghana'},
    {bandera: 'guinea', etiqueta: 'guinea'},
    {bandera: 'kenia', etiqueta: 'kenia'},
    {bandera: 'liberia', etiqueta: 'liberia'},
    {bandera: 'libia', etiqueta: 'libia'},
    {bandera: 'madagascar', etiqueta: 'madagascar'},
    {bandera: 'marruecos', etiqueta: 'marruecos'},
    {bandera: 'nigeria', etiqueta: 'nigeria'},
    {bandera: 'republica_del_congo', etiqueta: 'republica_del_congo'},
    {bandera: 'somalia', etiqueta: 'somalia'},
    {bandera: 'sudan', etiqueta: 'sudan'}
];

var imagenes=[];
var puestas=[];
var etiquetas=[];

var r = 0;
var m= 0;
var fallidos = 0;
var aciertos = 0;

function permiteSoltar2(ev){

    ev.preventDefault();

}

function arrastrar2(ev){
    ev.dataTransfer.setData("text", ev.target.id);
}

function soltar2(ev){

    ev.preventDefault();

    if(ev.target.children.length <= 0){
        //Si es un div entoinces soltamos la imagen
        if(ev.target.tagName == "DIV"){
            var idImg = ev.dataTransfer.getData("text");
            var refImg = document.getElementById(idImg);
            ev.target.appendChild(refImg);
        }

        if(idImg+".png" == ev.target.id){
            aciertos = aciertos + 1;
            document.getElementById("aciertosopcion2").innerHTML = "Acertados: " + aciertos;
            var correcto = document.getElementById(idImg);
            correcto.style.border = "5px solid green";
            document.getElementById(idImg).draggable = false;

        } else if(idImg+".png" != ev.target.id){
            fallidos = fallidos + 1;
            document.getElementById("erroresopcion2").innerHTML = "Fallidos: " + fallidos;
            var incorrecto = document.getElementById(idImg);
            incorrecto.style.border = "5px solid red";

        } 
    } else{
        fallidos = fallidos - 1;
        document.getElementById("erroresopcion2").innerHTML = "Fallidos: " + fallidos;
    }

    if(ev.target.id == "etiqueta"){
        var etiqueta = document.getElementById(idImg);
        etiqueta.style.border = "0px";
        fallidos = fallidos - 1;
        document.getElementById("erroresopcion2").innerHTML = "Fallidos: " + fallidos;
    }

}

function permiteSoltar(ev){
    ev.preventDefault();
}

function arrastrar(ev){
    ev.dataTransfer.setData("text", ev.target.id);

}

function soltar(ev){
    
    ev.preventDefault();

    if(ev.target.children.length <= 0){
        //Si es un div entoinces soltamos la imagen
        if(ev.target.tagName == "DIV"){
            var idImg = ev.dataTransfer.getData("text");
            var refImg = document.getElementById(idImg);
            ev.target.appendChild(refImg);
        }
        puestas[ev.target.id] = idImg;
    }

    if(ev.target.id == "etiqueta"){
        for(var i=0; i<puestas.length; i++){
            if(puestas[i] == idImg){
                puestas[i] = "0";
            }
        }
    }

    if(puestas.includes('0') == true){
        document.getElementById('evaluar').disabled = true;
    } else{
        document.getElementById('evaluar').disabled = false;
    }
}

function eliminarContenido(elemento) {
    document.getElementById(elemento).innerHTML='';
}

function aparecer(elemento){
    document.getElementById(elemento).style.display = "block";
}

function desaparecer(elemento){
    document.getElementById(elemento).style.display = "none";
}

function menu(){

    var continente = document.getElementById('continente').value;
    var cantidadBanderas = document.getElementById('cantidadBanderas').value;

    if(document.getElementById('opcionJuego1').checked){
        var opcionJuego = document.getElementById('opcionJuego1').value;   
    }
    else{
        var opcionJuego = document.getElementById('opcionJuego2').value; 
    }

    desaparecer("menu");
    desaparecer("modalopcion1");

    if(opcionJuego=="opcion1"){
        aparecer("juegoopcion1");
        jugaropcion1(continente, cantidadBanderas);

    }else{
        aparecer("juegoopcion2");
        jugaropcion2(continente, cantidadBanderas);
    }
}

function NumeroRandom(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

function acomodoAletorioImagenes(array, cantidadBanderas){
    
    var numerorandom;
    
    while(imagenes.length < cantidadBanderas){

        numerorandom = NumeroRandom(0, 25);

        for(var i=0;i<cantidadBanderas;i++){
            if(imagenes[i]==(array[numerorandom])){
                break;
            }
        }
        if(imagenes[i] != array[numerorandom]){
            imagenes.push(array[numerorandom])
        }
    }
}

function acomodoAletorioEtiquetas(array){

    var numerorandom;
    
    while(etiquetas.length < array.length){

        numerorandom = NumeroRandom(0, array.length);

        for(var i=0;i<array.length;i++){
            if(etiquetas[i]==(array[numerorandom].etiqueta)){
                break;
            }
        }
    
        if(etiquetas[i] != array[numerorandom].etiqueta){
            etiquetas.push(array[numerorandom].etiqueta);
        }
    }
}

function imprimiretiquetas(array, paneletiquetas, continente){
   
    for (var i=0; i<array.length; i++){
        var img = "<div class=\"etiqueta\" id=\"etiqueta\" ondragover=\"permiteSoltar(event);\" ondrop=\"soltar(event);\"><img src=\""+continente+"/etiquetas/"+array[i]+".png\" id='"+array[i]+"' draggable=\"true\" style=\"z-index:2;\" ondragstart=\"arrastrar(event);\"></div>";
        var salto =  "<br>";
        paneletiquetas.innerHTML = paneletiquetas.innerHTML + img+ salto;
    }
        
}

function imprimirimagenes(array, panelimagenes, cantidadBanderas, continente){

    var veces = cantidadBanderas / 5;

    for (var i=0; i<veces; i++){
        
        var salto =  "<br>";

        for (var j=0; j<5; j++){
            var img = "<img src='"+continente+'/'+array[r].bandera+".png'>";
            panelimagenes.innerHTML = panelimagenes.innerHTML + img;
            r = r + 1;
        }

        panelimagenes.innerHTML = panelimagenes.innerHTML + salto;

        for (var j=0; j<5; j++){
            var casilla = "<div class=\""+m+"\" id=\""+m+"\" ondragover=\"permiteSoltar(event);\" ondrop=\"soltar(event);\"></div>";
            panelimagenes.innerHTML = panelimagenes.innerHTML + casilla;
            m = m+1;
        }
        panelimagenes.innerHTML = panelimagenes.innerHTML + salto;
    }

    r = 0;
    m=0;
}

function imprimirimagenes2(array, panelimagenes, cantidadBanderas, continente){

    var veces = cantidadBanderas / 5;

    for (var i=0; i<veces; i++){
        
        var salto =  "<br>";

        for (var j=0; j<5; j++){
            var img = "<img src='"+continente+'/'+array[r].bandera+".png'>";
            panelimagenes.innerHTML = panelimagenes.innerHTML + img;
            r = r + 1;
        }

        panelimagenes.innerHTML = panelimagenes.innerHTML + salto;

        for (var j=0; j<5; j++){
            var casilla = "<div class='casilla' id=\""+array[m].bandera+".png\" ondragover=\"permiteSoltar2(event);\" ondrop=\"soltar2(event);\"></div>";
            panelimagenes.innerHTML = panelimagenes.innerHTML + casilla;
            m = m+1;
        }
        panelimagenes.innerHTML = panelimagenes.innerHTML + salto;
    }

    r = 0;
    m=0;
}

function imprimiretiquetas2(array, paneletiquetas, continente){
   
    for (var i=0; i<array.length; i++){
        var img = "<div class=\"etiqueta\" id=\"etiqueta\" ondragover=\"permiteSoltar2(event);\" ondrop=\"soltar2(event);\"><img src=\""+continente+"/etiquetas/"+array[i]+".png\" id='"+array[i]+"' draggable=\"true\" style=\"z-index:2;\" ondragstart=\"arrastrar2(event);\"></div>";
        var salto =  "<br>";
        paneletiquetas.innerHTML = paneletiquetas.innerHTML + img+ salto;
    }
        
}

function jugaropcion1(continente, cantidadBanderas){

    var panel = document.getElementById('juegoopcion1');

    for(var i=0; i<cantidadBanderas; i++){
        puestas[i] = "0";
    }

    document.getElementById("titulo").innerHTML = continente;
    document.getElementById("instrucciones").innerHTML = "(Arrastra y suelta las etiquetas en sus respectivas casillas, contesta todas para poder evaluar)";


    var panelimagenes = document.getElementById("imagenesjuego1");
    var paneletiquetas = document.getElementById("etiquetasjuego1");


    if(continente == "america"){
        acomodoAletorioImagenes(america, cantidadBanderas);
        acomodoAletorioEtiquetas(imagenes);
    }
    if(continente == "europa"){
        acomodoAletorioImagenes(europa, cantidadBanderas);
        acomodoAletorioEtiquetas(imagenes);
    }
    if(continente == "africa"){
        acomodoAletorioImagenes(africa, cantidadBanderas);
        acomodoAletorioEtiquetas(imagenes);
    }
    if(continente == "asia"){
        acomodoAletorioImagenes(asia, cantidadBanderas);
        acomodoAletorioEtiquetas(imagenes);
    }

    imprimirimagenes(imagenes, panelimagenes, cantidadBanderas, continente);
    imprimiretiquetas(etiquetas, paneletiquetas, continente);
}

function jugaropcion2(continente, cantidadBanderas){

    var panel = document.getElementById("juegoopcion1");

    document.getElementById("titulo2").innerHTML = continente;
    document.getElementById("instrucciones2").innerHTML = "(Arrastra y suelta las etiquetas en sus respectivas casillas)";

    var panelimagenes = document.getElementById("imagenesjuego2");
    var paneletiquetas = document.getElementById("etiquetasjuego2");

    if(continente == "america"){
        acomodoAletorioImagenes(america, cantidadBanderas);
        acomodoAletorioEtiquetas(imagenes);
    }
    if(continente == "europa"){
        acomodoAletorioImagenes(europa, cantidadBanderas);
        acomodoAletorioEtiquetas(imagenes);
    }
    if(continente == "africa"){
        acomodoAletorioImagenes(africa, cantidadBanderas);
        acomodoAletorioEtiquetas(imagenes);
    }
    if(continente == "asia"){
        acomodoAletorioImagenes(asia, cantidadBanderas);
        acomodoAletorioEtiquetas(imagenes);
    }
    if(continente == "oceania"){
        acomodoAletorioImagenes(oceania, cantidadBanderas);
        acomodoAletorioEtiquetas(imagenes);
    }

    imprimirimagenes2(imagenes, panelimagenes, cantidadBanderas, continente);
    imprimiretiquetas2(etiquetas, paneletiquetas, continente);

    aparecer("modalopcion2");
    
}

function evaluar(){
    aparecer("modalopcion1");

    aciertos = 0;
    fallidos = 0;

    for(var i=0; i<imagenes.length; i++){
        if(imagenes[i].bandera == puestas[i]){


            document.getElementById(imagenes[i].bandera).style.border = "5px solid green";
            document.getElementById(imagenes[i].bandera).style.marginLeft = "-2px";
            document.getElementById(imagenes[i].bandera).style.marginTop = "-2px";
            document.getElementById(imagenes[i].bandera).draggable = false;
            aciertos = aciertos + 1;
            document.getElementById("aciertosopcion1").innerHTML = "Aciertos: " + aciertos;

        } else{
            document.getElementById(imagenes[i].bandera).style.border = "5px solid red";
            document.getElementById(imagenes[i].bandera).style.marginLeft = "-2px";
            document.getElementById(imagenes[i].bandera).style.marginTop = "-2px";
            document.getElementById(imagenes[i].bandera).style.disabled = true;
            document.getElementById(imagenes[i].bandera).draggable = false;
            fallidos = fallidos+1;
            document.getElementById("erroresopcion1").innerHTML = "Errores: " + fallidos;
        }
    }
}

function volverajugar(){
    eliminarContenido("imagenesjuego1");
    eliminarContenido("etiquetasjuego1");
    eliminarContenido("imagenesjuego2");
    eliminarContenido("etiquetasjuego2");     
    imagenes =[];
    etiquetas =[];
    puestas=[];
    aciertos = 0;
    fallidos = 0;
    document.getElementById("aciertosopcion2").innerHTML = "Acertados: " + aciertos;
    document.getElementById("erroresopcion2").innerHTML = "Fallidos: " + fallidos;
    document.getElementById("aciertosopcion1").innerHTML = "Aciertos: " + aciertos;
    document.getElementById("erroresopcion1").innerHTML = "Errores: " + fallidos;
    document.getElementById('evaluar').disabled = true;
    menu();
}

function regresar(){
    document.getElementById('continente').value='america';
    document.getElementById('cantidadBanderas').value='10';
    imagenes =[];
    etiquetas =[];
    puestas=[];
    aciertos = 0;
    fallidos = 0;
    document.getElementById('evaluar').disabled = true;
    eliminarContenido("imagenesjuego1");
    eliminarContenido("etiquetasjuego1");
    eliminarContenido("imagenesjuego2");
    eliminarContenido("etiquetasjuego2");
    desaparecer("juegoopcion1");
    desaparecer("juegoopcion2");
    aparecer("menu");
    desaparecer("modalopcion1");
    desaparecer("modalopcion2");
}


