function enlace(asciitxt, ip_origen, ip_destino, mac_origen, mac_destino){
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

export{
 enlace
}
