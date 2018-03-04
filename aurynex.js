//Sorteia numeros aleatorios
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

//Função verifica se contem valor no array
function contem(valor, array){
	if (array.indexOf(valor)>=0) {
		return true;
	}else
		return false;
}

//Metodo de ordenação
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

//Validação da entrada de dados do usuario
function verificaAcertos(numUsuario, numSistema){
	var acertos = 0;
	for (var i = 0; i < numUsuario.length; i++) {
		for (var j = 0; j < numUsuario.length; j++) {
			if(numUsuario[i]==numSistema[j]){
				acertos++;
			}
		}
	}
	return acertos;
}

function pulaLinha(num){
	for (var i = 0; i < num; i++) {
		document.write("<br>");
	}
}
