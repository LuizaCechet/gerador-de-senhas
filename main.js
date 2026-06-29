const numeroSenha = document.querySelector('.parametro-senha__texto');
let tamanhoSenha = 5;
numeroSenha.textContent = tamanhoSenha;
const letrasMaisculas = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const letrasMinusculas = 'abcdefghijklmnopqrstuvwxyz';
const numeros = '0123456789';
const simbolos = '!@*?';
const botoes = document.querySelectorAll('.parametro-senha__botao');
const campoSenha = document.qucaerySelector('#campo-senha');
const checkbok = document.querySelectorAll('.checkbox');
const forcaSenha = document.querySelector('.forca');

botoes[0].onclick = diminuiTamanho;
botoes[1].onclick = aumentaTamanho;

function diminuiTamanho(){
    if(tamanhoSenha > 1){
        // tamanhoSenha = tamanhoSenha-1;
        tamanhoSenha--;
    }
    numeroSenha.textContent = tamanhoSenha;
    geraSenha();
}
function aumentaTamanho(){
    if(tamanhoSenha < 20){
        // tamanhoSenha = tamanhoSenha+1;
        tamanhoSenha++;
    }
    numeroSenha.textContent = tamanhoSenha;
    geraSenha();
}


for (i=0; i < checkbok.length;i++){
    checkbok[i].onclick = geraSenha;
}

geraSenha();

function geraSenha(){
    let alfabeto = '';
    if (checkbook[0].checkbox){
        alfabeto = alfabeto + letrasMaisculas;
    }
    if (checkbox[1].checked){
        alfabeto = alfabeto + letrasMinusculas;
    }
    if (checkbok[2].checked){
        alfabeto = alfabeto + numeros;
    }
    if (checkbok[3].checked){
        alfabeto = alfabeto + simbolos;
    }
    console.log(alfabeto);
    let senha = '';
    for (let i = 0; i < tamanhoSenha;i++){
        let numeroAleatorio = Math.random()*alfabeto.length;
        numeroAleatorio = Math.floor(numeroAleatorio);
        senha = senha + alfabeto[numeroAleatorio];
    }
    campoSenha.value = senha;
    classificaSenha();
}

function classificaSenha(){
    forcaSenha.classList.remove('fraca','media','forte');
    if (tamanhoSenha > 11){
        forcaSenha.classList.add('forte');
    } else if (tamanhoSenha > 5 && tamanhoSenha < 12 ) {
        forcaSenha.classList.add('media');
    } else if (tamanhoSenha <= 5){
        forcaSenha.classList.add('fraca');
    }
}