import { profileContent } from './data.js';

var current_window = 100;
// ::: =====> Show contact form
export function get_contact_form() {
    return `
        <form id="contact-form" style="display: flex; flex-direction: column; gap: 15px; padding: 20px; color: #333333; font-family: monospace; font-size: 16px; background-color: white;">
            <div style="display: flex; flex-direction: column; gap: 5px;">
                <label for="contact-name" style="color: #333333; font-weight: bold;">Name :</label>
                <input id="contact-name" type="text" required style="background: #f9f9f9; border: 1px solid #cccccc; color: #333333; padding: 8px; border-radius: 4px; font-family: monospace;">
            </div>
            <div style="display: flex; flex-direction: column; gap: 5px;">
                <label for="contact-email" style="color: #333333; font-weight: bold;">Email :</label>
                <input id="contact-email" type="email" required style="background: #f9f9f9; border: 1px solid #cccccc; color: #333333; padding: 8px; border-radius: 4px; font-family: monospace;">
            </div>
            <div style="display: flex; flex-direction: column; gap: 5px;">
                <label for="contact-message" style="color: #333333; font-weight: bold;">Message :</label>
                <textarea id="contact-message" rows="5" required style="background: #f9f9f9; border: 1px solid #cccccc; color: #333333; padding: 8px; border-radius: 4px; resize: vertical; font-family: monospace;"></textarea>
            </div>
            <button type="submit" id="contact-submit-btn" style="background: #0064ff; border: none; color: white; padding: 10px; font-weight: bold; border-radius: 4px; cursor: pointer; font-family: monospace;">
                Send Message
            </button>
            <div id="contact-status" style="margin-top: 10px; font-weight: bold;"></div>
        </form>
    `;
}

// ::: =====> Form submission management
export function init_contact_form() {
    const form = document.getElementById("contact-form");
    const statusDiv = document.getElementById("contact-status");
    const submitBtn = document.getElementById("contact-submit-btn");

    if (!form) return;

    form.addEventListener("submit", function(e) {
        e.preventDefault(); 

        const name = document.getElementById("contact-name").value;
        const email = document.getElementById("contact-email").value;
        const message = document.getElementById("contact-message").value;

        submitBtn.disabled = true;
        statusDiv.style.color = "orange";
        statusDiv.innerText = "Sending...";

        const formData = new FormData();
        formData.append("name", name);
        formData.append("email", email);
        formData.append("message", message);
        formData.append("_subject", "Portfolio:contact");

        fetch('https://formsubmit.co/ajax/eliot.chauve@epitech.eu', {
            method: 'POST',
            headers: { 'Accept': 'application/json' },
            body: formData
        })
        .then(res => {
            if (res.ok) {
                statusDiv.style.color = "green";
                statusDiv.innerText = "Your message has been sent successfully!";
                form.reset(); 
            } else {
                throw new Error();
            }
        })
        .catch(err => {
            statusDiv.style.color = "red";
            statusDiv.innerText = "An error occurred while sending. ";
        })
        .finally(() => {
            submitBtn.disabled = false;
        });
    });
}
// ::: =====> load custom file stored in database
function load_files (type, desktop, content) {
	let _class = "";

	content.innerHTML = "<h2 style='position:absolute;top:50%;left:50%;transform: translate(-50%, -50%);color:grey;'>Nothing !!</h2>";

	let mini_desktop = [];
	for (let i = 0; i < desktop.length; i++)
		if (desktop[i].name == type && desktop[i].type == "folder") mini_desktop = desktop[i].content;

	if (!mini_desktop || mini_desktop.length == 0) return;

	content.innerHTML = "";
	load_desktop(mini_desktop, content, 6);

	_class = type.toLowerCase();

	return _class;
}
// ::: =====> load window and show it
function load_windows (width, height, top, left, title_text, item, id) {

	let onglet = document.createElement("div");

	if (document.getElementById("window-" + id) != null) return 0;
	let media_size;

	if (window.matchMedia("(width <= 1024px)").matches) {
		let f_width = width + left >= window.innerWidth ? "calc(100% - 20px)" : width + "px";
		let f_height = height + top >= window.innerHeight ? "calc(100% - 20px)" : height + "px";
		let f_left = width + left >= window.innerWidth ? "10px" : left + "px";
		let f_top = height + top >= window.innerHeight ? "10px" : top + "px";
		media_size = [f_width, f_height, f_top, f_left];
		console.log("[RESPONSIVE]", media_size);
	} else if (window.matchMedia("(width > 1024px)").matches) {

		if (left+width > window.innerWidth) left = left - width;
		if (top+height > window.innerHeight) top = top - height;

		media_size = [width + "px", height + "px", top + "px", left + "px"];
		console.log("[PC]", media_size);
	}

	let container = document.createElement("div");
	container.id = "window-" + id;
	container.classList.add("window-resp");
	container.style = 
		"background-color: rgba(0, 100, 255, 1);" + 
		"animation: 0.2s showing;" +
		"border-radius:10px;" +
		"width:" + media_size[0] + ";" + 
		"height:" + media_size[1] + ";" + 
		"position:absolute;" + 
		"top:" + media_size[2] + ";" + 
		"padding:4px;" +
		"z-index: " + (current_window+1).toString() + ";" + 
		"padding-top:1px;" +
		"padding-bottom:8px;" +
		"overflow: hidden;" +
		"min-width: 400px;" + 
		"min-height: 400px;" +
		"resize: both;" + 
		"left:" + media_size[3] + ";";
	document.body.appendChild(container);

	container.addEventListener("click", () => {
			current_window++;
	    container.style.zIndex = current_window.toString();
	    document.querySelectorAll(".onglets").forEach(o => o.style.boxShadow = "inset 5px 5px 2px -3px rgba(255,255,255,0.46)");
   		onglet.style.boxShadow = "inset 5px 5px 2px -3px rgba(0,0,0,0.46)";
	});

	let nav = document.createElement("nav");
	nav.style = 
		"width: 100%;" + 
		"display:flex;" +
		"border-radius: 10px 10px 0px 0px;" +
		"justify-content: space-between;" +
		"-webkit-box-shadow: inset 10px 5px 5px -1px rgba(255,255,255,0.46);" + 
		"box-shadow: inset 10px 5px 5px -1px rgba(255,255,255,0.46);" +
		"border-top: 1px solid rgb(0, 180, 255);" + 
		"background-color: rgba(0, 100, 255, 1);" + 
		"height:30px;";
	container.appendChild(nav);

	// --- DRAG SYSTEM ---
	let isDragging = false;
	let offsetX = 0;
	let offsetY = 0;

	nav.style.cursor = "grab"; 
	nav.addEventListener("mousedown", function (e) {
		isDragging = true;
		offsetX = e.clientX - container.offsetLeft;
		offsetY = e.clientY - container.offsetTop;
		nav.style.cursor = "grabbing";
	});
	document.addEventListener("mousemove", function (e) {
		if (!isDragging) return;
		container.style.left = (e.clientX - offsetX) + "px";
		container.style.top = (e.clientY - offsetY) + "px";
	});
	document.addEventListener("mouseup", function () {
		isDragging = false;
		nav.style.cursor = "grab";
	});

	let title = document.createElement("h3");
	title.innerHTML = title_text;
	title.style = "margin-left:10px;width:60%;font-size:16px;margin-top:5px;color:white;"
	nav.appendChild(title);

	let tmp_content = document.createElement("div");
	nav.appendChild(tmp_content);

	let quit = document.createElement("img");
	quit.style = "width:25px;height:25px;margin-top:2.5px;margin-right:5px"
	quit.classList.add("window-btn");
	quit.src = "assets/quit.png"
	tmp_content.appendChild(quit);
	quit.addEventListener("click", function (e) {
		container.remove();
		onglet.remove();
	});

	let sec = document.createElement("div");
	sec.style = "width:100%;height:calc(100% - 30px);";
	container.appendChild(sec);

	let nav2 = document.createElement("nav");
	nav2.style = 
		"top:0;" + 
		"left:0px;" + 
		"width:100%;" + 
		"height: 25px;" + 
		"display:flex;" +
		"background-color:rgb(220,220,220);" +
		"border-bottom:2px solid darkgrey;" +
		"overflow-x:auto;"
	sec.appendChild(nav2);

	const opts = [
		"<a style='text-decoration: none;color:black;' href='https://github.com/Nakiio'><span class=\"underline\">G</span>ithub</a>", 
		"<a style='text-decoration: none;color:black;' href='https://www.linkedin.com/in/eliot-chauve-59061232a/'><span class=\"underline\">L</span>inkedIn</a>",
		"<a style='text-decoration: none;color:black;' href='https://huggingface.co/nakiio'><span class=\"underline\">H</span>gginface</a>", 
		"<a style='text-decoration: none;color:black;' href='/windaubeXP/first_website/assets/CV Eliot.pdf'><span class=\"underline\">C</span>v</a>", 
		"<a style='text-decoration: none;color:black;' href='mailto:eliot.chauve@epitech.eu'><span class=\"underline\">E</span>mail</a>"];

	for (var i = 0; i < opts.length; i++) {
		let opt = document.createElement("h5");
		opt.innerHTML = opts[i];
		opt.classList.add("window-opt");
		opt.style = "margin-top:2.5px;margin-left:10px;font-size:14px;font-weight:normal;"
		nav2.appendChild(opt);
	}

	let final_container = document.createElement("div");
	final_container.style = 
		"top:25px;" + 
		"left:0px;" + 
		"width:100%;" + 
		"height: calc(100% - 25px);" + 
		"border-top:1px solid darkgray;" +
		"border-radius: 0px 0px 10px 10px;" +
		"overflow-y:auto;" +
		"overflow-x: none;" +
		"background-color:white;";
	sec.appendChild(final_container);


	let onglets = document.getElementById("left_gui");

	onglet.classList.add("onglets");
	onglet.style.cssText = `
	    min-width: 25px;
	    width: auto;
	    max-width: 250px; 
	    height: calc(100% - 10px);
	    border-radius: 3px;
	    box-shadow: inset 5px 5px 2px -3px rgba(255,255,255,0.46);
	    display: flex;
	    align-items: center; /* Aligne l'icône et le texte verticalement */
	    background-color: rgba(0, 150, 255, 0.7);
	    padding: 0 10px;
	    overflow: hidden;
	`;

	onglets.appendChild(onglet);

	onglet.addEventListener("click", () => {
			current_window++;
	    container.style.zIndex = current_window.toString();
	    document.querySelectorAll(".onglets").forEach(o => o.style.boxShadow = "inset 5px 5px 2px -3px rgba(255,255,255,0.46)");
   		onglet.style.boxShadow = "inset 5px 5px 2px -3px rgba(0,0,0,0.46)";
	});

	let onglet_icon = document.createElement("img");
	onglet_icon.src = "assets/window.png";
	onglet_icon.style.cssText = "width:30px; height:30px; flex-shrink: 0; margin-right: 5px;"; 
	onglet.appendChild(onglet_icon);

	let onglet_text = document.createElement("h5");
	onglet_text.innerText = title_text; 
	onglet_text.style.cssText = `
	    color: white;
	    margin: 0;
		font-size: 16px;
	    white-space: nowrap;
	    overflow: hidden;
	    text-overflow: ellipsis;
	    flex-grow: 1;
	`;
	onglet.appendChild(onglet_text);

	document.querySelectorAll(".onglets").forEach(o => o.style.boxShadow = "inset 5px 5px 2px -3px rgba(255,255,255,0.46)");
  onglet.style.boxShadow = "inset 5px 5px 2px -3px rgba(0,0,0,0.46)";
	
	final_container.appendChild(item);
}
// ::: =====> update time in taskBar
function updateTime() {
  const now = new Date();
  const hours = String(now.getHours()).padStart(2, '0');
  const minutes = String(now.getMinutes()).padStart(2, '0');
  
  document.getElementById("time").textContent = `${hours}:${minutes}`;
}
// ::: =====> load filesystem and show it
export function load_desktop (desktop, element, max_file=3) {

	let width = max_file * 145;

	let file_container = document.createElement("div");
	file_container.style = 
		"min-width:100px;" +
		"min-height:100px;" + 
		"width:" + width.toString() + "px;" + 
		"height:100%;" + 
		"display:flex;" +
		"flex-direction: column;" +
		"height:100%;" + 
		"max-width:100%;" +
		"flex-wrap:wrap;" + 
	element.appendChild(file_container);

	let line = desktop.length / max_file;
	let index = 0;

	for (let i = 0; i < line; i++) {

		let row = document.createElement("div");
		row.style = 
			"max-width:100%;" +
			"position:relative;" +
			"margin-top:20px;" +
			"height:175px;" + 
			"width:auto;" +
			"display:flex;" + 
			"flex-warp:warp;";
		file_container.appendChild(row);

		for (let j = 0; j < max_file && index < desktop.length; j++) {
			let file = document.createElement("div");
			file.classList.add("file");
			file.id = desktop[index].name;
			file.style = 
				"width:160px;" +
				"min-width:100px;" +
				"height:150px;" +
				"display:flex;" +
				"flex-direction:column;" +
				"align-items:center;" +
				"justify-content:center;" +
				"padding:8px;" +
				"box-sizing:border-box;";
			row.appendChild(file); 

			let img = document.createElement("img");
			img.src = desktop[index].img;
			img.style = 
				"width:80px;" +
				"height:80px;" +
				"object-fit:contain;";
			file.appendChild(img);

			let color_text = "black";
			//if (element == document.body) color_text = "white";

			let title = document.createElement("h3");
			title.innerText = desktop[index].name;
			title.style = 
				"text-align:center;" + 
				"color:" + color_text + ";" + 
				"width:100%;" +
				"font-size: 22px;" +
				"font-weight:normal;" +
				"margin-top:6px;" +
				"margin-bottom:0px;" +
				"word-break:break-word;";
			file.appendChild(title);
			file_container.addEventListener("click", function (e) {
			    const fileDiv = e.target.closest(".file");
			    if (!fileDiv) 
			    	return;
			    const clickedId = fileDiv.id;
			    for (var i = 0; i < desktop.length; i++) {
			       	let item = desktop[i];
			        	let content;
			        	let wind_title;
			        	let windX = 700;
			        	let windY = 500;
			        	let _class ="";

			        	if (item.name != clickedId) 
			        		continue;
			        	if (item.type == "none") 
			        		continue;
			        	if (item.type == "app") {
				            content = document.createElement("iframe");
				            content.style = "width:100%;height:100%;border:none;border-radius: 0px 0px 10px 10px;";
				            content.src = item.content;
				            wind_title = clickedId + " - <a style=\"color:darkgray;\"href=\"" + item.content + "\">" + item.content + "</a>";
						} else if (item.type == "file") {
							content = document.createElement("div");
							content.classList.add("markdown-content");							
							content.style.cssText = `
								padding: 15px;
								font-weight: normal;
								height: auto;
								margin: 0;
								background-color: white;
								font-size: 20px;
								width: 100%;
								box-sizing: border-box;
								min-height: 100%;
								border: none;
								border-radius: 0px 0px 10px 10px;
								overflow-wrap: break-word; /* Empêche le texte de déborder à droite */
								word-break: break-word;
								line-height: 1.4;
								color: #333;
							`;

							content.innerHTML = marked.parse(item.content);
							setTimeout(() => {
								const elements = content.querySelectorAll('p, h1, h2, h3, ul, li');
								elements.forEach(el => {
									el.style.margin = "0 0 10px 0";
								});
							}, 0);

							wind_title = "NotePad - " + clickedId;
							if (item.class == "skill" || item.class == "education" || item.class == "experience" || item.class == "profile")
								_class = item.class;

							windX = item.windX;
							windY = item.windY;

			        	} else if (item.type == "img") {
			        		content = document.createElement("img");
				            content.style = "height:100%;margin:0;width:100%;border:none;border-radius: 0px 0px 10px 10px;";
				            content.src = item.content;
				            wind_title = "PNG - " + clickedId;
				            windX = 450;
				            windY = 300;
			        	} else if (item.type == "folder") {
			        		content = document.createElement("div");
			            	content.style = "margin:0;background-color:white;font-size:16px;width:100%;min-height:100%;border:none;border-radius: 0px 0px 10px 10px;";
			            	wind_title = "File Explorer - " + clickedId;
			            	let type = clickedId.toLowerCase();
			            	content.id = "desktop-" + type;
			        		_class = load_files(clickedId, desktop, content);
							windX = item.windX;
							windY = item.windY;
			           	} else if (item.type == "link") {
			        		window.location = item.content;
							break;
			           	} else if (item.type == "exe") {
			        		content = document.createElement("div");
                            content.id = "contact";
                            content.style = "margin:0; background-color:white; width:100%; height:100%; border:none; border-radius: 0px 0px 10px 10px; overflow-y: auto;";
                            
                            content.innerHTML = get_contact_form();
                            wind_title = "Contact - " + clickedId;

                            setTimeout(() => {
                                init_contact_form();
                            }, 50);
			        	}
			        	let cursorX = e.pageX;
    					let cursorY = e.pageY;
    					
			        	load_windows(windX, windY, cursorY, cursorX, wind_title, content, clickedId.toLowerCase());
			    }
			});
			index+=1;
		}

	}
}
// ::: =====> INIT
document.addEventListener("DOMContentLoaded", (event) => {

  	//SHOW INIT
	let content = document.createElement("div");
	content.classList.add("markdown-content");							
	content.style.cssText = `
		padding: 15px;
		font-weight: normal;
		height: auto;
		margin: 0;
		background-color: white;
		font-size: 16px;
		width: 100%;
		box-sizing: border-box;
		min-height: 100%;
		border: none;
		border-radius: 0px 0px 10px 10px;
		overflow-wrap: break-word; /* Empêche le texte de déborder à droite */
		word-break: break-word;
		line-height: 1.4;
		color: #333;
	`;

	content.innerHTML = marked.parse(profileContent);
	setTimeout(() => {
		const elements = content.querySelectorAll('p, h1, h2, h3, ul, li');
		elements.forEach(el => {el.style.margin = "0 0 10px 0";});
	}, 0);

	let sizes = 1150  >= window.innerWidth ? [(window.innerWidth - 20), 500, 20, 10] : [950, 500, 350, 150];
  	load_windows(sizes[0], sizes[1], sizes[2], sizes[3], "File - profile.txt", content, "profile.txt");

  	//SHOW TIME
  	updateTime()
	setInterval(updateTime, 30000);

	console.log("Started!");
});

