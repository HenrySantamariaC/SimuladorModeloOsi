function red(asciitxt, ip_origen, ip_destino){
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
export {
    red
}