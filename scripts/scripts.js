function carregarNoticiasPrincipal(){
    let requestURL = "http://localhost:3000/PortalDeNoticias";
    let request = new XMLHttpRequest();
    request.open('GET',requestURL);
    request.responseType='json';
    request.send();
    request.onload = function(){
    let PortalDeNoticias = request.response;

    document.getElementById("categoriadaNoticiaPrincipal").innerText = PortalDeNoticias.Principais[0].CATEGORIA;
    document.getElementById("tituloNoticiaPrincipal").innerText = PortalDeNoticias.Principais[0].TITULO;
    document.getElementById("autorNoticiaPrincipal").innerText = PortalDeNoticias.Principais[0].AUTOR;
    document.getElementById("textoNoticiaPrincipal").innerText = PortalDeNoticias.Principais[0].TEXTO;

    document.getElementById("categoriaNoticiaPrincipal01").innerText = PortalDeNoticias.Principais[1].CATEGORIA;
    document.getElementById("titulodaNoticiaPrincipal01").innerText = PortalDeNoticias.Principais[1].TITULO;
    document.getElementById("autordaNoticiaPrincipal01").innerText = PortalDeNoticias.Principais[1].AUTOR;
    document.getElementById("textodaNoticiaPrincipal01").innerText = PortalDeNoticias.Principais[1].TEXTO;

    document.getElementById("categoriadaNoticiaPrincipal02").innerText = PortalDeNoticias.Principais[2].CATEGORIA;
    document.getElementById("titulodaNoticiaPrincipal02").innerText = PortalDeNoticias.Principais[2].TITULO;
    document.getElementById("autordaNoticiaPrincipal02").innerText = PortalDeNoticias.Principais[2].AUTOR;
    document.getElementById("textodaNoticiaPrincipal02").innerText = PortalDeNoticias.Principais[2].TEXTO;
    
    }
}

function carregarNoticiasPoliticas(){
    let requestURL = "http://localhost:3000/PortalDeNoticias";
    let request = new XMLHttpRequest();
    request.open('GET',requestURL);
    request.responseType='json';
    request.send();
    request.onload = function(){
    let PortalDeNoticias = request.response;

    document.getElementById("categoriadaNoticiaPolitica").innerText = PortalDeNoticias.Politica[0].CATEGORIA;
    document.getElementById("titulodaNoticiaPolitica").innerText = PortalDeNoticias.Politica[0].TITULO;
    document.getElementById("autordaNoticiaPolitica").innerText = PortalDeNoticias.Politica[0].AUTOR;
    document.getElementById("textodaNoticiaPolitica").innerText = PortalDeNoticias.Politica[0].TEXTO;

    document.getElementById("categoriadaNoticiaPolitica01").innerText = PortalDeNoticias.Politica[1].CATEGORIA;
    document.getElementById("titulodaNoticiaPolitica01").innerText = PortalDeNoticias.Politica[1].TITULO;
    document.getElementById("autordaNoticiaPolitica01").innerText = PortalDeNoticias.Politica[1].AUTOR;
    document.getElementById("textodaNoticiaPolitica01").innerText = PortalDeNoticias.Politica[1].TEXTO;

    document.getElementById("categoriadaNoticiaPolitica02").innerText = PortalDeNoticias.Politica[2].CATEGORIA;
    document.getElementById("titulodaNoticiaPolitica02").innerText = PortalDeNoticias.Politica[2].TITULO;
    document.getElementById("autordaNoticiaPolitica02").innerText = PortalDeNoticias.Politica[2].AUTOR;
    document.getElementById("textodaNoticiaPolitica02").innerText = PortalDeNoticias.Politica[2].TEXTO;
    
    }
}

function carregarNoticiasSaude(){
    let requestURL = "http://localhost:3000/PortalDeNoticias";
    let request = new XMLHttpRequest();
    request.open('GET',requestURL);
    request.responseType='json';
    request.send();
    request.onload = function(){
    let PortalDeNoticias = request.response;

    document.getElementById("categoriadaNoticiaSaude").innerText = PortalDeNoticias.Saude[0].CATEGORIA;
    document.getElementById("titulodaNoticiaSaude").innerText = PortalDeNoticias.Saude[0].TITULO;
    document.getElementById("autordaNoticiaSaude").innerText = PortalDeNoticias.Saude[0].AUTOR;
    document.getElementById("textodaNoticiaSaude").innerText = PortalDeNoticias.Saude[0].TEXTO;

    document.getElementById("categoriadaNoticiaSaude01").innerText = PortalDeNoticias.Saude[1].CATEGORIA;
    document.getElementById("titulodaNoticiaSaude01").innerText = PortalDeNoticias.Saude[1].TITULO;
    document.getElementById("autordaNoticiaSaude01").innerText = PortalDeNoticias.Saude[1].AUTOR;
    document.getElementById("textodaNoticiaSaude01").innerText = PortalDeNoticias.Saude[1].TEXTO;

    document.getElementById("categoriadaNoticiaSaude02").innerText = PortalDeNoticias.Saude[2].CATEGORIA;
    document.getElementById("titulodaNoticiaSaude02").innerText = PortalDeNoticias.Saude[2].TITULO;
    document.getElementById("autordaNoticiaSaude02").innerText = PortalDeNoticias.Saude[2].AUTOR;
    document.getElementById("textodaNoticiaSaude02").innerText = PortalDeNoticias.Saude[2].TEXTO;
    
    }
}

function carregarNoticiasEducacao(){
    let requestURL = "http://localhost:3000/PortalDeNoticias";
    let request = new XMLHttpRequest();
    request.open('GET',requestURL);
    request.responseType='json';
    request.send();
    request.onload = function(){
    let PortalDeNoticias = request.response;

    document.getElementById("categoriadaNoticiaEducacao").innerText = PortalDeNoticias.Educacao[0].CATEGORIA;
    document.getElementById("titulodaNoticiaEducacao").innerText = PortalDeNoticias.Educacao[0].TITULO;
    document.getElementById("autordaNoticiaEducacao").innerText = PortalDeNoticias.Educacao[0].AUTOR;
    document.getElementById("textodaNoticiaEducacao").innerText = PortalDeNoticias.Educacao[0].TEXTO;

    document.getElementById("categoriadaNoticiaEducacao01").innerText = PortalDeNoticias.Educacao[1].CATEGORIA;
    document.getElementById("titulodaNoticia01Educacao01").innerText = PortalDeNoticias.Educacao[1].TITULO;
    document.getElementById("autordaNoticiaEducacao01").innerText = PortalDeNoticias.Educacao[1].AUTOR;
    document.getElementById("textodaNoticiaEducacao01").innerText = PortalDeNoticias.Educacao[1].TEXTO;

    document.getElementById("categoriadaNoticiaEducacao02").innerText = PortalDeNoticias.Educacao[2].CATEGORIA;
    document.getElementById("titulodaNoticiaEducacao02").innerText = PortalDeNoticias.Educacao[2].TITULO;
    document.getElementById("autordaNoticiaEducacao02").innerText = PortalDeNoticias.Educacao[2].AUTOR;
    document.getElementById("textodaNoticiaEducacao02").innerText = PortalDeNoticias.Educacao[2].TEXTO;
    
    }
}

function carregarNoticiasAleatorias(){
    let requestURL = "http://localhost:3000/Noticias";
    let request = new XMLHttpRequest();
    request.open('GET',requestURL);
    request.responseType='json';
    request.send();
    request.onload = function(){
    let noticias = request.response;
	
	const min = 1;
	const max = 4;

	let sort = Math.floor(Math.random()*Math.floor(max))

	while(sort<min){
		sort = Math.floor(Math.random()*Math.floor(max));
	}
	
	if(sort==1){
        document.getElementById("categoriadaNoticiaPrincipal").innerText = PortalDeNoticias.Principais[0].CATEGORIA;
        document.getElementById("tituloNoticiaPrincipal").innerText = PortalDeNoticias.Principais[0].TITULO;
        document.getElementById("autorNoticiaPrincipal").innerText = PortalDeNoticias.Principais[0].AUTOR;
        document.getElementById("textoNoticiaPrincipal").innerText = PortalDeNoticias.Principais[0].TEXTO;
	}else if(sort==2){
        document.getElementById("categoriadaNoticiaPolitica").innerText = PortalDeNoticias.Politica[0].CATEGORIA;
        document.getElementById("titulodaNoticiaPolitica").innerText = PortalDeNoticias.Politica[0].TITULO;
        document.getElementById("autordaNoticiaPolitica").innerText = PortalDeNoticias.Politica[0].AUTOR;
        document.getElementById("textodaNoticiaPolitica").innerText = PortalDeNoticias.Politica[0].TEXTO;
	}else if(sort==3){
        document.getElementById("categoriadaNoticiaSaude").innerText = PortalDeNoticias.Saude[0].CATEGORIA;
        document.getElementById("titulodaNoticiaSaude").innerText = PortalDeNoticias.Saude[0].TITULO;
        document.getElementById("autordaNoticiaSaude").innerText = PortalDeNoticias.Saude[0].AUTOR;
        document.getElementById("textodaNoticiaSaude").innerText = PortalDeNoticias.Saude[0].TEXTO;
    }
}
}
function carregarNoticiasAleatorias1(){
    let requestURL = "http://localhost:3000/Noticias";
    let request = new XMLHttpRequest();
    request.open('GET',requestURL);
    request.responseType='json';
    request.send();
    request.onload = function(){
    let noticias = request.response;
	
	const min = 1;
	const max = 4;

	let sort = Math.floor(Math.random()*Math.floor(max))

	while(sort<min){
		sort = Math.floor(Math.random()*Math.floor(max));
	}
	
	if(sort==1){
        document.getElementById("categoriadaNoticiaPrincipal01").innerText = PortalDeNoticias.Principais[0].CATEGORIA;
        document.getElementById("tituloNoticiaPrincipal01").innerText = PortalDeNoticias.Principais[0].TITULO;
        document.getElementById("autorNoticiaPrincipal01").innerText = PortalDeNoticias.Principais[0].AUTOR;
        document.getElementById("textoNoticiaPrincipal01").innerText = PortalDeNoticias.Principais[0].TEXTO;
	}else if(sort==2){
        document.getElementById("categoriadaNoticiaPolitica01").innerText = PortalDeNoticias.Politica[0].CATEGORIA;
        document.getElementById("titulodaNoticiaPolitica01").innerText = PortalDeNoticias.Politica[0].TITULO;
        document.getElementById("autordaNoticiaPolitica01").innerText = PortalDeNoticias.Politica[0].AUTOR;
        document.getElementById("textodaNoticiaPolitica01").innerText = PortalDeNoticias.Politica[0].TEXTO;
	}else if(sort==3){
        document.getElementById("categoriadaNoticiaSaude01").innerText = PortalDeNoticias.Saude[0].CATEGORIA;
        document.getElementById("titulodaNoticiaSaude01").innerText = PortalDeNoticias.Saude[0].TITULO;
        document.getElementById("autordaNoticiaSaude01").innerText = PortalDeNoticias.Saude[0].AUTOR;
        document.getElementById("textodaNoticiaSaude01").innerText = PortalDeNoticias.Saude[0].TEXTO;
    }
}
}
function carregarNoticiasAleatorias2(){
    let requestURL = "http://localhost:3000/Noticias";
    let request = new XMLHttpRequest();
    request.open('GET',requestURL);
    request.responseType='json';
    request.send();
    request.onload = function(){
    let noticias = request.response;
	
	const min = 1;
	const max = 4;

	let sort = Math.floor(Math.random()*Math.floor(max))

	while(sort<min){
		sort = Math.floor(Math.random()*Math.floor(max));
	}
	
	if(sort==1){
        document.getElementById("categoriadaNoticiaPrincipal02").innerText = PortalDeNoticias.Principais[0].CATEGORIA;
        document.getElementById("tituloNoticiaPrincipal02").innerText = PortalDeNoticias.Principais[0].TITULO;
        document.getElementById("autorNoticiaPrincipal02").innerText = PortalDeNoticias.Principais[0].AUTOR;
        document.getElementById("textoNoticiaPrincipal02").innerText = PortalDeNoticias.Principais[0].TEXTO;
	}else if(sort==2){
        document.getElementById("categoriadaNoticiaPolitica02").innerText = PortalDeNoticias.Politica[0].CATEGORIA;
        document.getElementById("titulodaNoticiaPolitica02").innerText = PortalDeNoticias.Politica[0].TITULO;
        document.getElementById("autordaNoticiaPolitica02").innerText = PortalDeNoticias.Politica[0].AUTOR;
        document.getElementById("textodaNoticiaPolitica02").innerText = PortalDeNoticias.Politica[0].TEXTO;
	}else if(sort==3){
        document.getElementById("categoriadaNoticiaSaude02").innerText = PortalDeNoticias.Saude[0].CATEGORIA;
        document.getElementById("titulodaNoticiaSaude02").innerText = PortalDeNoticias.Saude[0].TITULO;
        document.getElementById("autordaNoticiaSaude02").innerText = PortalDeNoticias.Saude[0].AUTOR;
        document.getElementById("textodaNoticiaSaude02").innerText = PortalDeNoticias.Saude[0].TEXTO;
    }
}
}