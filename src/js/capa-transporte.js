function transporte(asciitxt){
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
export {
    transporte
}