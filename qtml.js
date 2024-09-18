let qtml = {
    elements: [],
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
        form:function(text) {
            let div = qtml.new("div").css({gap:"8px", display:"grid"}).container().centered();
            let username = qtml.new("input", div.element).set({placeholder:"username"});
            let password = qtml.new("input", div.element).set({placeholder:"password"});
            let submit = qtml.new("button", div.element).text(text).hover({fontSize:"10px"});

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

        let head = document.head;
        head.appendChild(meta1);
        head.appendChild(meta2);
        head.appendChild(title);

        document.body.style = "margin:0;padding:0;box-sizing:border-box;";
    },

    new: function(element, parent=document.body) {
        element = document.createElement(element); // element
        parent.appendChild(element);

        element_data = {element,
            destroy:function() {
                element.remove();
            },
            css:function(style={}) {
                for (let prop in style) {
                    element.style[prop] = style[prop];
                }
                return this;
            },
            hover:function(style={}) {
                let before = element.style;
                element.onmouseover = function() {
                    for (let prop in style) {
                        element.style[prop] = style[prop];
                    }
                };

                element.onmouseout = function() {
                    for (let prop in before) {
                        element.style[prop] = before[prop];
                    }
                }
            },
            text:function(text) {
                element.textContent = text;
                return this;
            },
            color:function(color) {
                element.style.color = color;
                return this;
            },
            background:function(color) {
                element.style.background = color;
                return this;
            },
            font:function(font) {
                element.style.fontFamily = font;
                return this;
            },
            parent:element.parentNode,
            id:function(id) {
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
            size:function(size) {
                element.style.fontSize = size;
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
               return this;
            },
            remove:function(className) {
                element.classList.remove(className);
                return this;
            }, 
        };

        this.elements.push(element_data);
        return element_data;
    },
}
