/*
    write stupid code and ur dead
*/

let qtml = {
    elements: [],
    themes: {
        simple:{
            textColor:"#171717",
            padding:"1.5vh 2.5vh",
            elementBackgroundColor: "#dddddd",
            borderRadius:"5px",
            border:"1px solid #171717",
            fontSize:"1.5vh",
            font:'sans-serif',
            transition:"0.3s",
        },
        dark:{
            textColor:"#eeeeee",
            padding:"1.5vh 2.5vh",
            backgroundColor:"#171717",
            elementBackgroundColor: "#222222",
            borderRadius:"5px",
            border:"2px solid #404040",
            fontSize:"1.5vh",
            font:'sans-serif',
            transition:"0.3s",
        }
    },
    colors: {
        purple:"#5d18dc",
        cyan:"#3df2ad",
        red:"#f56565",
        magenta:"#b983ff",
        yellow:"#facc15",
        blue:"#3b82f6",
        burple:"#5865f2",
        aqua:"#00d4ff",
        gray:"#71717a",
        darkgray:"#38383d",
        black:"#000000",
        white:"#ffffff",
    },
    fonts: {
        sans:'ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',
        serif:'ui-serif, Georgia, Cambria, "Times New Roman", Times, serif',
        mono:'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace',
    },
    components: {
        loginForm:function(theme=qtml.themes.simple) {
            let div = qtml.new("div").setCss({gap:"8px", display:"grid"}).container().centered();
            let username = qtml.new("input", div.element).set({placeholder:"username"}).setTheme(theme);
            let password = qtml.new("input", div.element).set({placeholder:"password"}).setTheme(theme);
            let submit = qtml.new("button", div.element).setText("Submit").setTheme(theme);

            return {div, username, password, submit};
        },
    },
    

    init: function(new_title) {
        let meta1 = document.createElement("meta");
        meta1.setAttribute("charset", "utf-8");
        let meta2 = document.createElement("meta");
        meta2.setAttribute("name", "viewport");
        meta2.setAttribute("content", "width=device-width, initial-scale=1");
        let title = document.createElement("title");
        title.innerHTML = new_title;
        let qtml_link = document.createElement("link");
        qtml_link.setAttribute("rel", "stylesheet");
        qtml_link.setAttribute("href", "https://cdn.jsdelivr.net/gh/alvin677/qtml@latest/qtml.css");

        let head = document.head;
        head.appendChild(meta1);
        head.appendChild(meta2);
        head.appendChild(title);
        head.appendChild(qtml_link);

        let style = document.createElement("style");
        style.id = "qtml";
        document.body.appendChild(style);
        document.body.style = "margin:0;padding:0;box-sizing:border-box;";
    },

    setTheme: function(theme=qtml.themes.simple) {
        if (theme.backgroundColor) {document.body.style.backgroundColor = theme.backgroundColor};
    },

    new: function(element, parent=document.body) {
        element = document.createElement(element); // element
        parent.appendChild(element);

        element_data = {element,
            destroy:function() {
                element.remove();
            },
            setCss:function(style={}) {
                for (let prop in style) {
                    element.style[prop] = style[prop];
                }
                return this;
            },
            setText:function(text) {
                element.textContent = text;
                return this;
            },
            setColor:function(color) {
                element.style.color = color;
                return this;
            },
            setBgColor:function(color) {
                element.style.backgroundColor = color;
                return this;
            },
            // shit doesnt seem to work
            /*setParent:function(p) {
                element.parentNode = p;
                return this;
            },*/
            parent:element.parentNode,
            setId:function(id) {
                element.id = id;
                return this;
            },
            centered:function() {
                element.style.position = "absolute";
                element.style.top = "50%";
                element.style.left = "50%";
                element.style.transform = "translate(-50%, -50%)";
                return this;
            },
            clicked:function(code) {
                element.onclick = function() {
                    eval(code);
                };
                return this;
            },
            container:function() {
                element.style.border = "2px solid #404040";
                element.style.borderRadius = "5px";
                element.style.padding = "1vh 2vh";
                element.style.verticalAlign = "middle";
                return this;
            },
            setSize:function(size) {
                element.style.fontSize = size;
                return this;
            },
            setPlaceholder:function(text) {
                element.placeholder = text;
                return this;
            },
            set:function(properties={}) {
                for (let prop in properties) {
                    element[prop] = properties[prop];
                }
                return this;
            },
            add:function(className) {
               element.classList.add(className); 
            },
            remove:function(className) {
                element.classList.remove(className);
            }, 
            setTheme:function(theme) {
                if (theme.textColor) {element.style.color = theme.textColor};
                if (theme.padding) {element.style.padding = theme.padding};
                if (theme.backgroundColor) {document.body.style.backgroundColor = theme.backgroundColor};
                if (theme.elementBackgroundColor) {element.style.backgroundColor= theme.elementBackgroundColor}
                if (theme.borderRadius) {element.style.borderRadius = theme.borderRadius};
                if (theme.border) {element.style.border = theme.border};
                if (theme.fontSize) {element.style.fontSize = theme.fontSize};
                if (theme.font) {element.style.fontFamily = theme.font};
                return this;
            }
        };

        this.elements.push(element_data);
        return element_data;
    },
}
