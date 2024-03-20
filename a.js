let tabs, pages;
var editor;

// load scripts from request later on
var default_message = `-- sponsored by JonHosting.com --\n\nprint("Hello World!");`;
var scripts_free = [ ];
var scripts_prem = [
['Whatsapp Drip Car', 'require(6886067324).drip("player")'],
['The Button', 'require(14314013653):button("player")'],
['Russian Hardbass', 'require(4560139047).load("player")'],
['Grab Knife Edit', 'require(4528405939).load("player")'],
['Neptunian V', 'require(4661705712).load("player")', './img/0.png'],
];
var scripts_premplus = {};

var games = [["Ballsack", "100", ""], ["bussing", "12", ""]]

function store_code() {
    localStorage.code = editor.getValue();
    console.log("saved");
    console.log(editor)
}
function switch_tab(i) {
    tabs[localStorage.last_page].classList.remove("active"); pages[localStorage.last_page].style.display = 'none'; 
    tabs[i].classList.add("active"); pages[i].style.display = 'block'; 
    localStorage.last_page = i;
}

function resizeEditor() {
    var container = document.getElementById('editor');
    var rect = container.getBoundingClientRect();
    editor.layout({ width: rect.width, height: rect.height });
}

window.onload = function() {
    if (!localStorage.code) {localStorage.code = default_message;}
    tabs = [document.getElementById("tab_home"), document.getElementById("tab_scripts"), document.getElementById("tab_games"), document.getElementById("tab_affiliates")];
    pages = [document.getElementById("home_content"), document.getElementById("scripts_content"), document.getElementById("games_content"), document.getElementById("affiliates_content")];

    if (!localStorage["last_page"]) {localStorage.last_page = tabs[0];}
    tabs[localStorage.last_page].classList.add("active"); pages[localStorage.last_page].style.display = 'block';

    require.config({ paths: { 'vs': 'https://unpkg.com/monaco-editor/min/vs' }});
      require(['vs/editor/editor.main'], function() {
        editor = monaco.editor.create(document.getElementById('editor'), {
          value: localStorage.code,
          language: 'lua',
          theme: 'vs-dark',
          minimap: {
            enabled: false
        }
        })
        editor.onDidChangeModelContent(function(event) {store_code();});
      });

      window.addEventListener('resize', resizeEditor);
    
    let script_list = document.getElementById("script_list");
    let script = `<div class="script"><img src ="script_image" /><button class="primary auto-w"><i class="fa-solid fa-play"></i><span> script_name</span></button></div>`;
    for (let i=0;i<scripts_prem.length;i++) {
        let new_script = script;
        new_script=new_script.replace("script_name", scripts_prem[i][0]);
        new_script=new_script.replace("script_image", scripts_prem[i][2]);
        script_list.innerHTML += new_script;
    }

    let game_list = document.getElementById("game_list");
    let game = `<div class="script relative"><img src ="./img/0.png" /><span class = "status block absolute black-bg white small" style="opacity:0.8;bottom:0;width:100%;"><i class="fa-solid fa-user small middle"></i> game_playercount | game_name</span><button class="primary auto-w middle"><i class="fa-solid fa-play middle small"></i><span> Join Game</span></button></div>`;
    for (let i=0;i<games.length;i++) {
        let new_game = game;
        new_game=new_game.replace("game_name", games[i][0]);
        new_game=new_game.replace("game_playercount", games[i][1]);
        new_game=new_game.replace("game_image", games[i][2]);
        game_list.innerHTML += new_game;
    }
}
