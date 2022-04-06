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
    text_Binario
}