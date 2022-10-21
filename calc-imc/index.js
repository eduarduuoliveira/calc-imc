function calcula_resultado(){


let resposta = document.getElementById('resultado-imc')
const nome = document.getElementById('nome').value;
const peso = Number(document.getElementById('peso').value);
const altura = Number(document.getElementById('altura').value);

const imc = peso / (altura * altura);

document.getElementById('resultado-imc').innerHTML = `O imc de ${nome} é: ${imc.toFixed(2)}`;

  if (imc <= 15.99) {
    document.getElementById('resultado-categoria').innerHTML =  `Magreza Grave`;
    document.getElementById('resultado-categoria').className = 'perigo';
  } else if (imc <= 16.99){
    document.getElementById('resultado-categoria').innerHTML =  `Magreza Moderada`;
    document.getElementById('resultado-categoria').className = 'alerta';
  }

  else if (imc <=18.5){
    document.getElementById('resultado-categoria').innerHTML =  `Magreza Leve`;
    document.getElementById('resultado-categoria').className = 'cuidado';
  }

  else if (imc <=24.9){
    document.getElementById('resultado-categoria').innerHTML =  `Saudável`;
    document.getElementById('resultado-categoria').className = 'bem';
  }

  else if (imc <=29.9){
    document.getElementById('resultado-categoria').innerHTML =  `Sobrepeso`;
    document.getElementById('resultado-categoria').className = 'cuidado';
  }

  else if (imc <= 34.9){
    document.getElementById('resultado-categoria').innerHTML =  `Obesidade Grau 1`;
    document.getElementById('resultado-categoria').className = 'cuidado';
  }

  else if (imc <= 39.9){
    document.getElementById('resultado-categoria').innerHTML =  `Obesidade Grau2 (Severa) `;
    document.getElementById('resultado-categoria').className = 'alerta';
  }

  else if (imc > 40){
    document.getElementById('resultado-categoria').innerHTML =  `Obesidade Grau3 (Mórbida) `;
    document.getElementById('resultado-categoria').className = 'perigo';
  }

  document.getElementById('resultado-categoria').innerHTML = `O status de ${nome} é: ${resultado-categoria}`;

}


