//importando o express
const express = require("express");
const app = express();
app.set('view engine','ejs');

app.use(express.static('public'));
//ROTAS DO SITE
//rota index
app.get("/", function(req,res){
    res.render("index");
})
//rota personagens
app.get("/personagens", function(req,res){
     const personagens =[
        {nome: "MaoMAo", idade: "17 anos", descricao: "Jovem com grande conhecimento de ervas, venenos e medicina, que acaba trabalhando no harém imperial após ser sequestrada."},
        {nome: "Jinshi", idade: "18 anos", descricao: "Um eunuco enigmático e de beleza impressionante que rege muitas das tarefas do palácio e se interessa pelas habilidades de MaoMao"},
        {nome: "Gaoshun", idade: "36 anos", descricao: "Servo leal e braço direito de Jinshi."},
        {nome: "Gyokuyou", idade: "19 anos", descricao: "A concubina favorita do imperador ligada ao pavilhão de Jade."},
        {nome: "Lihua", idade: "23 anos", descricao: "Consorte do pavilhão Cristal."},
        {nome: "lishu", idade: "14 anos", descricao: "A mais jovem entre as consortes."},
        {nome: "Ah-Duo", idade: "35 anos", descricao: "Ex-Consorte de alta patente que possui forte ligação com os segredos do palácio."},
        {nome: "Imperador", idade: "34 anos", descricao: "Governante do Império."},
        {nome: "Xiaolan", idade: "14 anos", descricao: "Amiga e colega serva de MaoMao no Palácio."},
        {nome: "Lakan", idade: "~40 anos", descricao: "Extrategista militar com uma relação complexa e profunda com a MaoMao."},

        

];
 res.render('personagens',{
        personagens:personagens,
    });
});

//rota curiosidades
app.get("/curiosidades", function(req,res){
    const curiosidades =[
        {ordem: "1° - A ideia original era totalmente diferente: ", curiosidade: "A autora Natsu Hyuga revelou que o plano inicial era focar em três mães que descobriam um envenenamento em uma cidade mineira. Achando que o público não se interessaria, ela reformulou a narrativa, transformando a história na trajetória de Maomao no palácio."},
        {ordem: "2° - Anacronismos propositais na medicina:", curiosidade: " O guia de medicamentos oficial da obra mostra que Maomao lida com compostos que tecnicamente não deveriam estar disponíveis naquele espaço-tempo. O caso mais famoso é o uso de chocolate em uma receita de afrodisíaco, um ingrediente que estava completamente ausente na China antiga."},
        {ordem: "3° - Cicatrizes reais e testes perigosos: ", curiosidade: "A obsessão de Maomao por venenos tem um preço físico bem nítido. Ela usa faixas e bandagens no braço esquerdo não por estilo, mas para esconder cicatrizes de queimaduras e cortes autoinfligidos. Ela usa o próprio corpo como laboratório para testar a resistência a toxinas, o que explica sua alta tolerância a substâncias perigosas.anos"},
        {ordem: "4° - Aprovação massiva da comunidade chinesa: ", curiosidade: "Embora a história seja escrita por uma autora japonesa, leitores e historiadores chineses elogiaram publicamente a obra pela precisão histórica. A autora capturou perfeitamente as nuances mais complexas da dinastia Ming, retratando fielmente a dura hierarquia das concubinas, o funcionamento burocrático dos eunucos e a realidade cultural dos distritos de entretenimento da época."},
        {ordem: "5° - O ranço de escrever o Jinshi: ", curiosidade: "Embora Jinshi seja um dos personagens mais populares da franquia, a autora confessou que ele é seu personagem mais difícil e trabalhoso de escrever."},
       

    
];
 res.render('curiosidades',{
        curiosidades:curiosidades,
    });
});

//rota melhores episódios
app.get("/mlrsEpisodios", function(req, res){
    const mlrsEpisodios =[
        {episodio: "Maomao", resumo: "Uma apotecária do distrito da luz vermelha é sequestrada e forçada a trabalhar como criada no palácio. Um dia, ouve falar na maldição que aflige os herdeiros do imperador"},
        {episodio: "Palitos de trigo", resumo: " Uma aprendiz chega á casa de Maomao e a leva às pressas para um bordel, onde uma cortesã e seu cliente beberam veneno."},
        {episodio: "Lakan ", resumo: "Maomao visita a Casa Verdigris e cuida de uma cortesã doente que tem um triste passado. Jinshi faz uma descoberta surpreendente ao conversar com Lakan"},
        {episodio: "Guarda Real", resumo: "Jinshi confronta Shishou durante a invasão da fortaleza Shi pela guarda real e assume a responsabilidade pela tentativa de assassinato.."},
        {episodio: "Clã Shi ", resumo: "Jinshi e suas forças se infiltram na fortaleza para encurralar e render os membros restantes do clã Shi durante o desfecho da rebelião."},
       

    
];

 res.render('mlrsEpisodios',{
        mlrsEpisodios:mlrsEpisodios,
    });
});

const port = 8080;
app.listen(port, function(erro){

    if(erro){
        console.log("Ocorreu um erro!");
        
    }else{
        console.log(`Servidor iniciado com sucesso em: http://localhost:${port}`);
    }
})