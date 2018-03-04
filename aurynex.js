function sorteia(){
	//Armazena numeros sortiados
	var arraySorteado = [];

	for (var i=0; i<6; i++){
		//Gera um numero aleatorio
		var numero = Math.round(Math.random() * 60);	

		while(contem(numero, arraySorteado)){
			numero = Math.round(Math.random() * 60);
		}
		arraySorteado.push(numero);
	}
	//retorna os valores armazenados no array
	return arraySorteado;
}

function contem(valor, array){
	if (array.indexOf(valor)>=0) {
		return true;
	}else
		return false;
}

function selectSort(array){
	for (var i = 0; i < array.length; i++) {
		var x=i;
		for(var j = i+1; j<array.length; j++){
			if (array[j] < array[x]) {
				x = j;
			}
		}		
		var aux = array[i];
		array[i] = array[x];
		array[x] = aux;
	}
	return array;
}
