const electron = require('electron');
const url = require('url');
const path = require('path');

const json = require('./info.json');

const {app, BrowserWindow, Menu} = electron;

var mainWindow;

// Lister for app to be ready
app.on('ready', function() {
    // Create a new window
    mainWindow = new BrowserWindow({width: 800, height: 600});
    // Load html into window
    mainWindow.loadURL(url.format({
        pathname: path.join(__dirname, 'mainWindow.html'),
        protocol: 'file',
        slashes: true
    }));

    // Build menu from template
    const mainMenu = Menu.buildFromTemplate(mainMenuTemplate);
    // Insert menu
    Menu.setApplicationMenu(mainMenu);

});

// Create menu template
const mainMenuTemplate = [
    {
        label:'Opções',
        submenu: [
            {
                label: 'Discord',
                click(){
                    app.quit();
                }
            },
            {
                label: 'Sair',
                click(){
                    app.quit();
                }
            }
        ]
    },
    {
        role: 'window',
        submenu: [
          {role: 'minimize'},
          {role: 'close'}
        ]
    },
];

// variáveis


// Menu
function jogar(){
    setTimeout(function(){ window.location = "./jogo.html"; }, 1300);
};

function sair(){
    alert("sair");
};

// Sistema

// Clicks para pegar planilha
function planilha(){
    var pontos =  json.planilhas;
    json.planilhas += 1;
    document.getElementsByClassName("p")[0].innerHTML = "planilha(s): " + json.planilhas;
};

// M8

function comprarM8(){
    if (json.planilhas >= json.preço) {
        json.m8 += 1;
        document.getElementsByClassName("m8")[0].innerHTML = "M8(s): " + json.m8;
        json.planilhas -= json.preço;
        json.preço += 5;
        document.getElementsByClassName("p")[0].innerHTML = "planilha(s): " + json.planilhas;
    } else {
        alert(`Falta ${json.preço - json.planilhas}`)
    };
};

// Neo 

function comprarNeo(){
    if (json.planilhas >= json.preço2) {
        json.Neo += 1;
        document.getElementsByClassName("neo")[0].innerHTML = "Neo(s): " + json.Neo;
        json.planilhas -= json.preço2;
        json.preço2 += 5;
        document.getElementsByClassName("p")[0].innerHTML = "planilha(s): " + json.planilhas;
    } else {
        alert(`Falta ${json.preço2 - json.planilhas}`)
    };
};

function a(){

};

// Som

// Música de fundo

// Desligar/ Ligar

function songPause(){
    document.getElementsByClassName("ost")[0].pause();
    document.getElementsByClassName("music")[0].setAttribute("onclick", "songPlay()");
    document.getElementsByClassName("music")[0].setAttribute("src" , "./img/mutado.png");
};

function songPlay(){
    document.getElementsByClassName("ost")[0].play();
    document.getElementsByClassName("music")[0].setAttribute("onclick", "songPause()");
    document.getElementsByClassName("music")[0].setAttribute("src" , "./img/tocando.png");
};

// Efeitos Sonoros

// Desligar/ Ligar

function soundPause(){
    document.getElementsByClassName("botão")[0].setAttribute("onclick", "planilha();");
    document.getElementsByClassName("sound")[0].setAttribute("onclick", "soundPlay();");
    document.getElementsByClassName("sound")[0].setAttribute("src" , "./img/mutado.png");
};

function soundPlay(){
    document.getElementsByClassName("botão")[0].setAttribute("onclick", "planilha(); coinSong();");
    document.getElementsByClassName("sound")[0].setAttribute("onclick", "soundPause();");
    document.getElementsByClassName("sound")[0].setAttribute("src" , "./img/sound.png");
};

// Começar o jogo

function inicioSong(){
    var audio = new Audio('./songs/Cn.mp3');
    audio.play();
};

// Botão de clicker

function coinSong(){
    var audio = new Audio('./songs/Sonic Ring Sound.mp3');
    audio.play();
};