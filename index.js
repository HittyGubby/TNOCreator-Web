function set_label(ui_name, pos_x, pos_y, font_size)
{
    var label = document.getElementById(ui_name + "-label");
    var input = document.getElementById(ui_name + "-input");
    label.style.position = "absolute";

    label.style.left = pos_x + "px";
    label.style.top = pos_y + "px";
    label.style.fontSize = font_size + "px";
    label.innerText = input.value;
}

function set_pic(ui_name)
{
    var input = document.getElementById(ui_name + "-input");
    var pic = document.getElementById(ui_name + "-pic");
    var reader = new FileReader();

    reader.onload = function() { pic.setAttribute("src", this.result); }
    reader.readAsDataURL(input.files[0]);
}

function set_input_event(ui_name, pos_x, pos_y, font_size)
{
    var input = document.getElementById(ui_name + "-input");
    input.addEventListener("input", function() { set_label(ui_name, pos_x, pos_y, font_size); });
}

function set_input_value(ui_name, value)
{
    var input = document.getElementById(ui_name + "-input");
    input.value = value;
    input.dispatchEvent(new Event("input"));
}

function set_pic_event(ui_name)
{
    var input = document.getElementById(ui_name + "-input");
    input.addEventListener("input", function() { set_pic(ui_name); });
}

function load_default()
{
    set_input_value("country-name", "German Reich");
    set_input_value("faction-name", "Einheitspakt");
    set_input_value("leader-name", "Reichstaag Emergency Council");
    set_input_value("party-name", "NSDAP");
    set_input_value("ideology-name", "National Socialism");
    set_input_value("next-election", "No Elections");
    set_input_value("national-focus-name", "Unknown Focus");
    set_input_value("news-title", "German Civil War");
    set_input_value("news-description", "（placeholder）");
    set_input_value("news-button", "Reich crumbles apart.");
    set_input_value("super-event-title", "GERMAN CIVIL WAR");
    set_input_value("super-event-description", "yet another placeholder \n yes placeholder for name too");
    set_input_value("super-event-button", "Here it goes.");

    document.getElementById("country-flag-pic").setAttribute("src", "flags/GER.png");
    document.getElementById("country-flag-pic-overlay").setAttribute("src", "template/flag_overlay.png");
    document.getElementById("country-leader-pic").setAttribute("src", "leaders/Portrait_Germany_Reichstag_Emergency_Council.png");
    document.getElementById("ideology-icon-pic").setAttribute("src", "ideologies/national socialism.png");
    document.getElementById("national-focus-icon-pic").setAttribute("src", "focus_icons/GER_Ein_Reich_2.png");
    document.getElementById("news-pic").setAttribute("src", "news_image/news_event_german_civil_war.png");
    document.getElementById("super-event-pic").setAttribute("src", "super_image/german_civil_war.png");
}

window.onload = function()
{
    //document.getElementById("test-button").addEventListener("click", test_button_event);

    set_input_event("country-name", 220, -8, 16);
    set_input_event("faction-name", 220, 11, 16);
    set_input_event("leader-name", 220, 30, 16);
    set_input_event("party-name", 235, 70, 20);
    set_input_event("ideology-name", 235, 90, 20);
    set_input_event("next-election", 235, 115, 20);
    set_input_event("national-focus-name", 234, 155, 20);
    set_input_event("news-title", 130, 250, 15);
    set_input_event("news-description", 240, 340, 10);
    set_input_event("news-button", 230, 679, 12);
    set_input_event("super-event-title", 530, 0, 20);
    set_input_event("super-event-description", 595, 360, 19);
    set_input_event("super-event-button", 720, 548, 19);
    set_pic_event("country-flag");
    set_pic_event("country-leader");
    set_pic_event("ideology-icon");
    set_pic_event("national-focus-icon");
    set_pic_event("news");
    set_pic_event("super-event");
    load_default();
};