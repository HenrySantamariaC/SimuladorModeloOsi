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
export {
    text_Ascii
}