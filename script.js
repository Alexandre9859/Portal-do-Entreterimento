function acessar(){
    if (idade.value<=0 ){
        alert ('Idade invalida')
        }
    else if (idade.value<=12){
       window.location.href='infantil.html'
    }
    else if (idade.value >12 && idade.value <18){
       window.location.href='jovem.html'
    }
    else if (idade.value >=18 && idade.value <121){
        window.location.href='adulto.html'
    }
    else{
        alert('Você já passou da Idade')
    }

}


function desenho(){
    if (filmes.value == '1'){
        document.getElementById('foto').src= 'img/criança/1.jpeg'
        document.getElementById('trailer').href= 'https://www.youtube.com/watch?v=PBCsu_ylh8c'
    }
    else if (filmes.value == '2'){
        document.getElementById('foto').src='img/criança/2.jpeg'
        document.getElementById('trailer').href= 'https://www.youtube.com/watch?v=kLaF9b6wmrg'
    }
     else if (filmes.value == '3'){
        document.getElementById('foto').src='img/criança/3.jpeg'
        document.getElementById('trailer').href= 'https://www.youtube.com/watch?v=cmCRyIxBE3s'
    }
    else{
        document.getElementById('foto').src='img/index/tv.jpeg'
    }


}

function serie(){
    if(opcao1.checked){
        document.getElementById('foto').src='img/jovem/bad.jpeg';
        document.getElementById('p1').innerHTML='Breaking Bad é uma série que conta a história de Walter White um professor de química que descobre ter câncer e decide produzir metanfetamina para sustentar sua família ele se une a Jesse Pinkman um ex-aluno envolvido com drogas e juntos entram no mundo do crime ao longo do tempo Walter se transforma em uma figura perigosa enfrentando rivais traficantes e a polícia a série mostra como suas escolhas afetam sua vida e a de todos ao seu redor com temas como ambição orgulho e moralidade Breaking Bad é considerada uma das melhores séries já feitas com atuações marcantes e uma narrativa envolvente'
            document.getElementById('span1').innerText='Classificação: 16 anos'
    }
    else if(opcao2.checked){
        document.getElementById('foto').src='img/jovem/saul.jpeg'
          document.getElementById('p1').innerHTML='Better Call Saul é uma série que mostra a origem de Jimmy McGill um advogado esforçado e carismático que aos poucos se transforma no inescrupuloso Saul Goodman conhecido por atuar na série Breaking Bad a história acompanha sua luta para ganhar respeito no meio jurídico enfrentando dificuldades pessoais profissionais e familiares Jimmy também lida com seu irmão Chuck um advogado renomado que duvida de sua ética ao longo do tempo ele se envolve com personagens do submundo do crime como Mike Ehrmantraut e outros que futuramente aparecem em Breaking Bad a série explora temas como identidade escolhas e consequências com uma narrativa rica e detalhada'
         document.getElementById('span1').innerText='Classificação: 16 anos'
    }
    else if(opcao3.checked){
        document.getElementById('foto').src='img/jovem/sobrenatural.jpeg'
          document.getElementById('p1').innerHTML='Sobrenatural é uma série que acompanha os irmãos Sam e Dean Winchester dois caçadores de criaturas sombrias como fantasmas demônios vampiros e outras ameaças sobrenaturais após a morte de sua mãe por uma força misteriosa eles são criados pelo pai para lutar contra o mal viajando pelos Estados Unidos em um carro clássico eles enfrentam casos assustadores enquanto buscam vingança e tentam proteger inocentes com o tempo descobrem grandes conspirações celestiais e infernais envolvendo anjos demônios e até o próprio destino a série mistura ação suspense e drama com fortes laços familiares e batalhas entre o bem e o mal'
         document.getElementById('span1').innerText='Classificação: 16 anos'
    }
}

function eng(){
document.getElementById('texto').innerHTML=' Engenheiro de Software: Desenvolve, testa e mantém sistemas e aplicativos Atua em todas as etapas do ciclo de vida do software, aplicando princípios de engenharia para garantir qualidade, desempenho e escalabilidade.'
}
function arquiteto(){
document.getElementById('texto').innerHTML='Arquiteto de Software: Define a estrutura técnica de sistemas complexos. Escolhe tecnologias, padrões e frameworks, garantindo que os componentes de software sejam bem integrados e sustentáveis a longo prazo.'
}
function analista(){
document.getElementById('texto').innerHTML='Analista de Sistemas: Intermedia entre usuários e desenvolvedores. Levanta requisitos, modela processos e propõe soluções tecnológicas que atendam às necessidades do negócio, muitas vezes escrevendo especificações técnicas.'
}
function seguranca(){
document.getElementById('texto').innerHTML=' Analista de Segurança da Informação: Garante a proteção dos dados e sistemas da empresa. Avalia riscos, define políticas de segurança, implementa controles e monitora vulnerabilidades para prevenir ataques e vazamentos.'
}
function ti(){
document.getElementById('texto').innerHTML='Gerente de TI: Lidera equipes e projetos de tecnologia. Planeja estratégias, gerencia recursos, define prioridades e assegura que a infraestrutura e os sistemas atendam às metas da organização.'
}
function limpa(){
document.getElementById('texto').innerHTML=''
}
