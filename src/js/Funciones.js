//aplicacion
// presentacion
function text_Ascii(cadena){
    let strAscii='';
    let arr = cadena.split('');  
    arr.forEach(item => {
      //  let i=arreglo.indexOf(item);
        strAscii+=item.charCodeAt(0);
        strAscii+=' ';
      //  console.log(i);

    });
    strAscii=strAscii.trimEnd();
    return strAscii;
}
//sesion
//transporte

function getTransporte(asciitxt){
    let transporte='';
    let arr = asciitxt.split(' ');
    arr.forEach(item=>{
    let pos = arr.indexOf(item);
        pos++;
        transporte+=pos;
        transporte+=' ';
        pos--;
        transporte+=item;
        transporte+=' ~ ';
    });
    var n=transporte.lastIndexOf(' ~ ');   //encuentra la posición del " - "
    transporte=transporte.substring(n,-1);    //elimina el caracter en esa posición
    return transporte;
}
//Red
function getRed(asciitxt, ip_origen, ip_destino){
    let red='';
    let arr = asciitxt.split(' ');
    arr.forEach(item=>{
        let pos = arr.indexOf(item);
        red+=ip_origen;
        red+=' ';
        red+=ip_destino;
        red+=' '; 

        pos++;
        red+= pos;
        red+=' ';

        pos--;
        red+=item;
        red+=' ~ ';
    });

    var n=red.lastIndexOf(' ~ ');
    red=red.substring(n,-1);
    return red;
}
//enlace de datos
function getEnlace(asciitxt, ip_origen, ip_destino, mac_origen, mac_destino){
    let enlace='';
    let arr = asciitxt.split(' ');

    arr.forEach(item=>{
        let pos=arr.indexOf(item);
        enlace+=mac_origen;
		enlace+=' ';
        enlace+=ip_origen;
		enlace+=' ';
		enlace+=mac_destino;
		enlace+=' ';
		enlace+=ip_destino;
		enlace+=' ';

		pos++;
		enlace+=pos;
		enlace+=' ';

		pos--;
		enlace+=item;
		enlace+=' ~ ';

    });
    var n=enlace.lastIndexOf(' ~ ');
    enlace=enlace.substring(n,-1);
    return enlace;
}


//fisica

function text_Binario(texto){
    texto = unescape( texto );
    var chr, i = 0, longitud = texto.length, valorBinario = '';
    for( ; i < longitud; i ++ ){
        chr = texto.charCodeAt( i ).toString( 2 );
        while( chr.length % 8 != 0 ){
             chr = '0' + chr; 
            }
        valorBinario += chr;
    }
    return valorBinario;
}

export {
    text_Ascii,
    getTransporte,
    getRed,
    getEnlace,
    text_Binario
}