const botao = document.getElementById('tema');
const icone = botao.querySelector('i');
//BUSCA NA MEMÓRIA DO NAVEGADOR A OPÇÃO QUE O USUÁRIO ESCOLHE DE TEMA
const salvarTema = localStorage.getItem('theme');

//SE O TEMA SALVO NA MEMÓRIA NO LOCALSTORAGE, FOR TEMA ESCURO
if (salvarTema === 'dark'){
    document.body.classList.add('dark-mode');

    //TROCANDO O ÍCONE DE LUA PARA SOL
    icone.classList.replace('fa-moon', 'fa-sun');
}

botao.addEventListener('click', () =>{
    //LIGA E DESLIGA A CLASSE DARK-MODE
    document.body.classList.toggle('dark-mode');

    //VERIFICAR SE A PÁGINA FICOU NO MODO ESCURO
    const dark = document.body.classList.contains('dark-mode');

    //SE O MODO ESCURO ESTIVER ATIVADO
    if (dark){
        icone.classList.replace('fa-moon', 'fa-sun');
        localStorage.setItem('theme', 'dark');
    }else{
        //TROCA DO SOL PRA LUA
        icone.classList.replace('fa-sun', 'fa-moon');
        localStorage.setItem('theme', 'light');
    }
})