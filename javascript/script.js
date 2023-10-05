/********** ELEMENTS **********/
var body = document.querySelector("body");
var adding = document.querySelector(".adding");
var backfull = document.querySelector(".backfull");
var backfullnote = document.querySelector(".backfull-note");
var app_name_calculator = document.querySelector("#calculator");
var calculator = document.querySelector(".calculator");
var closecal = document.querySelector(".close-cal");
var close = document.querySelector(".close");
var closenote = document.querySelector(".close-note");
var container = document.querySelector(".container__Window");
var deleting = document.querySelector(".deleting");
var full = document.querySelector(".full");
var fullnote = document.querySelector(".full-note");
var launchpad = document.querySelector(".launchpad");
var launchpad_searchbox = document.querySelector(".launchpad .searchbox");
var launchpad_app_container = document.querySelector(".Apps-container");
var navbar = document.querySelector(".navbar");
var note = document.querySelector(".note");
var app_name_notes = document.querySelector("#Notes");
var opencalculator = document.querySelector(".open-cal");
var point_cal = document.querySelector("#point-cal");
var openNote = document.querySelector(".openNote");
var opencalculator_lunchpad = document.querySelector(".open-cal-lunching");
var opening = document.querySelector(".opening");
var point_launchpad = document.querySelector("#point-launchpad");
var point_terminal = document.querySelector("#point-terminal");
var point_note = document.querySelector("#point-note");
var terminal = document.querySelector(".terminal");
var content__typing = document.querySelector(".content__typing");
var app_name_terminal = document.querySelector("#Terminal");
var terminal_content = document.querySelector(".terminal .terminal_content");
var terminal_taskbar = document.querySelector(".terminal .window__taskbar");

var clockElement = document.getElementById("clock");
var clockWrapper = document.querySelector(".clock");
var widgetsPanel = document.querySelector(".widgets-panel");

const batteryButton = document.querySelector(".battery");
const batteryText = document.querySelector(".battery__text");
const batteryPopup = document.querySelector(".battery__popup");
const batteryPopupText = document.querySelector(".battery__popup header span");
const batteryProgress = document.querySelector(".battery__progress");
const batteryIsChargingLogo = document.querySelector(".is-charging");
const powerSource = document.querySelector(".power-source");

var clockElement = document.getElementById("clock");
var clockWrapper = document.querySelector(".clock");
var widgetsPanel = document.querySelector(".widgets-panel");

// var open_vscode = document.querySelector(".open_vscode");
// var Vscode_window = document.querySelector(".Vscode");
// var app_name_VScode = document.querySelector("#VScode");
// var close_Vscode = document.querySelector(".close-Vscode");
var notes = document.querySelector(".content__sidebar--notes");
// var backfull_Vscode = document.querySelector(".backfull-Vscode");
// var full_Vscode = document.querySelector(".full-Vscode");
// var point_vscode = document.querySelector("#point-vscode");


var create_input = document.createElement("input");

var open_map = document.querySelector(".open_map");
var maps_window = document.querySelector(".maps");
var point_map = document.querySelector("#point-maps");
var app_name_maps = document.querySelector("#map");
var close_map = document.querySelector(".close-map");
var backfull_map = document.querySelector(".backfull-map");
var full_map = document.querySelector(".full-map");


//sssssssssssssssss
// var open_message = document.querySelector(".open_message");
// var messages_window = document.querySelector(".messages");
// var point_message = document.querySelector("#point-messages");
// var app_name_messages = document.querySelector("#message");
// var close_message = document.querySelector(".close-message");
// var backfull_message = document.querySelector(".backfull-message");
// var full_message = document.querySelector(".full-message");
//ssssssssssssssssssssssssssssssss


//SITE ALEX BORN
var open_alex = document.querySelector(".open_alex");
var alex_window = document.querySelector(".alex");
var point_alex = document.querySelector("#point-alex");
var app_name_alex = document.querySelector("#alex");
var close_alex = document.querySelector(".close-alex");
var backfull_alex = document.querySelector(".backfull-alex");
var full_alex = document.querySelector(".full-alex");
//END SITE ALEX BORN

//SITE XBL
var open_xbl = document.querySelector(".open_xbl");
var xbl_window = document.querySelector(".xbl");
var point_xbl = document.querySelector("#point-xbl");
var app_name_xbl = document.querySelector("#xbl");
var close_xbl = document.querySelector(".close-xbl");
var backfull_xbl = document.querySelector(".backfull-xbl");
var full_xbl = document.querySelector(".full-xbl");
//END SITE XBL

//SITE PILULAS DE MENTORIA
var open_pilulas = document.querySelector(".open_pilulas");
var pilulas_window = document.querySelector(".pilulas");
var point_pilulas = document.querySelector("#point-pilulas");
var app_name_pilulas = document.querySelector("#pilulas");
var close_pilulas = document.querySelector(".close-pilulas");
var backfull_pilulas = document.querySelector(".backfull-pilulas");
var full_pilulas = document.querySelector(".full-pilulas");
//END SITE PILULAS DE MENTORIA

//SITE CINELOVERS
var open_cine = document.querySelector(".open_cine");
var cine_window = document.querySelector(".cine");
var point_cine = document.querySelector("#point-cine");
var app_name_cine = document.querySelector("#cine");
var close_cine = document.querySelector(".close-cine");
var backfull_cine = document.querySelector(".backfull-cine");
var full_cine = document.querySelector(".full-cine");
//END SITE CINELOVERS

//SITE NETFLIX CLONE
var open_netflix = document.querySelector(".open_netflix");
var netflix_window = document.querySelector(".netflix");
var point_netflix = document.querySelector("#point-netflix");
var app_name_netflix = document.querySelector("#netflix");
var close_netflix = document.querySelector(".close-netflix");
var backfull_netflix = document.querySelector(".backfull-netflix");
var full_netflix = document.querySelector(".full-netflix");
//END SITE NETFLIX CLONE

//SITE LANDING PAGE ALURA PLUS
var open_aluraplus = document.querySelector(".open_aluraplus");
var aluraplus_window = document.querySelector(".aluraplus");
var point_aluraplus = document.querySelector("#point-aluraplus");
var app_name_aluraplus = document.querySelector("#aluraplus");
var close_aluraplus = document.querySelector(".close-aluraplus");
var backfull_aluraplus = document.querySelector(".backfull-aluraplus");
var full_aluraplus = document.querySelector(".full-aluraplus");
//END SITE LANDING PAGE ALURA PLUS

//FIGMA ELLOS-CCAB
var open_ellosccab = document.querySelector(".open_ellosccab");
var ellosccab_window = document.querySelector(".ellosccab");
var point_ellosccab = document.querySelector("#point-ellosccab");
var app_name_ellosccab = document.querySelector("#ellosccab");
var close_ellosccab = document.querySelector(".close-ellosccab");
var backfull_ellosccab = document.querySelector(".backfull-ellosccab");
var full_ellosccab = document.querySelector(".full-ellosccab");
//END FIGMA ELLOS-CCAB


//FIGMA CASA VERDE
var open_casaverde = document.querySelector(".open_casaverde");
var casaverde_window = document.querySelector(".casaverde");
var point_casaverde = document.querySelector("#point-casaverde");
var app_name_casaverde = document.querySelector("#casaverde");
var close_casaverde = document.querySelector(".close-casaverde");
var backfull_casaverde = document.querySelector(".backfull-casaverde");
var full_casaverde = document.querySelector(".full-casaverde");
//END FIGMA CASA VERDE

//FIGMA VIVENDO COM SAÚDE
var open_vivendosaude = document.querySelector(".open_vivendosaude");
var vivendosaude_window = document.querySelector(".vivendosaude");
var point_vivendosaude = document.querySelector("#point-vivendosaude");
var app_name_vivendosaude = document.querySelector("#vivendosaude");
var close_vivendosaude = document.querySelector(".close-vivendosaude");
var backfull_vivendosaude = document.querySelector(".backfull-vivendosaude");
var full_vivendosaude = document.querySelector(".full-vivendosaude");
//END FIGMA VIVENDO COM SAÚDE

//FIGMA E-TICKET
var open_eticket = document.querySelector(".open_eticket");
var eticket_window = document.querySelector(".eticket");
var point_eticket = document.querySelector("#point-eticket");
var app_name_eticket = document.querySelector("#eticket");
var close_eticket = document.querySelector(".close-eticket");
var backfull_eticket = document.querySelector(".backfull-eticket");
var full_eticket = document.querySelector(".full-eticket");
//END FIGMA E-TICKET

//FIGMA SKATE
var open_skate = document.querySelector(".open_skate");
var skate_window = document.querySelector(".skate");
var point_skate = document.querySelector("#point-skate");
var app_name_skate = document.querySelector("#skate");
var close_skate = document.querySelector(".close-skate");
var backfull_skate = document.querySelector(".backfull-skate");
var full_skate = document.querySelector(".full-skate");
//END FIGMA SKATE

//FIGMA CONNECT
var open_connect = document.querySelector(".open_connect");
var connect_window = document.querySelector(".connect");
var point_connect = document.querySelector("#point-connect");
var app_name_connect = document.querySelector("#connect");
var close_connect = document.querySelector(".close-connect");
var backfull_connect = document.querySelector(".backfull-connect");
var full_connect = document.querySelector(".full-connect");
//END FIGMA CONNECT


//FIGMA RECRUTAMENTO
var open_recrutamento = document.querySelector(".open_recrutamento");
var recrutamento_window = document.querySelector(".recrutamento");
var point_recrutamento = document.querySelector("#point-recrutamento");
var app_name_recrutamento = document.querySelector("#recrutamento");
var close_recrutamento = document.querySelector(".close-recrutamento");
var backfull_recrutamento = document.querySelector(".backfull-recrutamento");
var full_recrutamento = document.querySelector(".full-recrutamento");
//END FIGMA RECRUTAMENTO

//FIGMA MKT
var open_mkt = document.querySelector(".open_mkt");
var mkt_window = document.querySelector(".mkt");
var point_mkt = document.querySelector("#point-mkt");
var app_name_mkt = document.querySelector("#mkt");
var close_mkt = document.querySelector(".close-mkt");
var backfull_mkt = document.querySelector(".backfull-mkt");
var full_mkt = document.querySelector(".full-mkt");
//END FIGMA MKT


//FIGMA DESIGN DIÁRIO
var open_designdiario = document.querySelector(".open_designdiario");
var designdiario_window = document.querySelector(".designdiario");
var point_designdiario = document.querySelector("#point-designdiario");
var app_name_designdiario = document.querySelector("#designdiario");
var close_designdiario = document.querySelector(".close-designdiario");
var backfull_designdiario = document.querySelector(".backfull-designdiario");
var full_designdiario = document.querySelector(".full-designdiario");
//END FIGMA DESIGN DIÁRIO


//FIGMA REDE DE ROLES
var open_roles = document.querySelector(".open_roles");
var roles_window = document.querySelector(".roles");
var point_roles = document.querySelector("#point-roles");
var app_name_roles = document.querySelector("#roles");
var close_roles = document.querySelector(".close-roles");
var backfull_roles = document.querySelector(".backfull-roles");
var full_roles = document.querySelector(".full-roles");
//END FIGMA REDE DE ROLES

//PROTOTIPO REDE DE ROLES
var open_rolesprototipo = document.querySelector(".open_rolesprototipo");
var rolesprototipo_window = document.querySelector(".rolesprototipo");
var point_rolesprototipo = document.querySelector("#point-rolesprototipo");
var app_name_rolesprototipo = document.querySelector("#rolesprototipo");
var close_rolesprototipo = document.querySelector(".close-rolesprototipo");
var backfull_rolesprototipo = document.querySelector(".backfull-rolesprototipo");
var full_rolesprototipo = document.querySelector(".full-rolesprototipo");
//END PROTOTIPO REDE DE ROLES


//CV
var open_cv = document.querySelector(".open_cv");
var cv_window = document.querySelector(".cv");
var point_cv = document.querySelector("#point-cv");
var app_name_cv = document.querySelector("#cv");
var close_cv = document.querySelector(".close-cv");
var backfull_cv = document.querySelector(".backfull-cv");
var full_cv = document.querySelector(".full-cv");
//END CV


//INSTAGRAM
var open_instagram = document.querySelector(".open_instagram");
var instagram_window = document.querySelector(".instagram");
var point_instagram = document.querySelector("#point-instagram");
var app_name_instagram = document.querySelector("#instagram");
var close_instagram = document.querySelector(".close-instagram");
var backfull_instagram = document.querySelector(".backfull-instagram");
var full_instagram = document.querySelector(".full-instagram");
//END INSTAGRAM

//INSTAGRAM
var open_facebook = document.querySelector(".open_facebook");
var facebook_window = document.querySelector(".facebook");
var point_facebook = document.querySelector("#point-facebook");
var app_name_facebook = document.querySelector("#facebook");
var close_facebook = document.querySelector(".close-facebook");
var backfull_facebook = document.querySelector(".backfull-facebook");
var full_facebook = document.querySelector(".full-facebook");
//END INSTAGRAM


//WHATSAPP
var open_whatsapp = document.querySelector(".open_whatsapp");
var whatsapp_window = document.querySelector(".whatsapp");
var point_whatsapp = document.querySelector("#point-whatsapp");
var app_name_whatsapp = document.querySelector("#whatsapp");
var close_whatsapp = document.querySelector(".close-whatsapp");
var backfull_whatsapp = document.querySelector(".backfull-whatsapp");
var full_whatsapp = document.querySelector(".full-whatsapp");
//END WHATSAPP

//LINKEDIN
var open_linkedin = document.querySelector(".open_linkedin");
var linkedin_window = document.querySelector(".linkedin");
var point_linkedin = document.querySelector("#point-linkedin");
var app_name_linkedin = document.querySelector("#linkedin");
var close_linkedin = document.querySelector(".close-linkedin");
var backfull_linkedin = document.querySelector(".backfull-linkedin");
var full_linkedin = document.querySelector(".full-linkedin");
//END LINKEDIN


//EMAIL
var open_email = document.querySelector(".open_email");
var email_window = document.querySelector(".email");
var point_email = document.querySelector("#point-email");
var app_name_email = document.querySelector("#email");
var close_email = document.querySelector(".close-email");
var backfull_email = document.querySelector(".backfull-email");
var full_email = document.querySelector(".full-email");
//END EMAIL


//FOTOS
var open_fotos = document.querySelector(".open_fotos");
var fotos_window = document.querySelector(".fotos");
var point_fotos = document.querySelector("#point-fotos");
var app_name_fotos = document.querySelector("#fotos");
var close_fotos = document.querySelector(".close-fotos");
var backfull_fotos = document.querySelector(".backfull-fotos");
var full_fotos = document.querySelector(".full-fotos");
//END FOTOS

//EU
var open_eu = document.querySelector(".open_eu");
var eu_window = document.querySelector(".eu");
var point_eu = document.querySelector("#point-eu");
var app_name_eu = document.querySelector("#eu");
var close_eu = document.querySelector(".close-eu");
var backfull_eu = document.querySelector(".backfull-eu");
var full_eu = document.querySelector(".full-eu");
//END EU








var open_spotlight = document.querySelector(".open_Search");
var spotlight_serach = document.querySelector(".spotlight_serach");

var brightness_range = document.getElementById("brightness");
var sound_range = document.getElementById("sound");

function change_brightness() {
  var brightnessVal = brightness_range.value;

  body.style.filter = `brightness(${brightnessVal + "%"})`;
  body.style.backdropFilter = `brightness(${brightnessVal + "%"})`;
}

// Spotlight
function handleopen_spotlight() {
  if (spotlight_serach.style.display === "none") {
    spotlight_serach.style.display = "flex";
  } else {
    spotlight_serach.style.display = "none";
  }
}

// Notes app function start

function handleAdding() {
  var create_input = document.createElement("input");
  create_input.placeholder = "writing name";
  notes.append(create_input);
}
function handleDeleting() {
  var inputChild = document.querySelector(".content__sidebar--notes input");
  inputChild.remove();
  content__typing.style.display = "none";
}
function handleNotes() {
  content__typing.style.display = "block";
}
// Notes app function end
function handleMinimize(Minimize) {
  Minimize.style.maxWidth = "50%";
  Minimize.style.minWidth = "40%";
  Minimize.style.height = "430px";
  Minimize.style.position = "absolute";
  Minimize.style.top = "20%";
  

  
  

}
function handleFullScreen(maximize) {
  maximize.style.maxWidth = "100%";
  maximize.style.minWidth = "100%";
  maximize.style.height = "100vh";
  maximize.style.position = "absolute";
  maximize.style.top = "0";
 


  

  
}

function close_window(close, point, appName) {
  close.style.display = "none";

  point.style.display = "none";
  appName.style.display = "none";
}
function open_window(open, point, appName) {
  navbar.style.display = "flex";
  open.style.display = "block";
  container.style.display = "flex";
  launchpad.style.display = "none";
  point_launchpad.style.display = "none";
  appName.style.display = "block";

  point.style.display = "block";
}

// Launchpad function start
function handleOpenLaunching() {
  if (launchpad.style.display === "none") {
    launchpad.style.display = "block";
    navbar.style.display = "none";
    point_launchpad.style.display = "block";
  } else {
    launchpad.style.display = "none";
    navbar.style.display = "flex";
    point_launchpad.style.display = "none";
  }
  container.style.display = "none";
}

function handleLaunchpadSearch(e) {
  for (let app of launchpad_app_container.children) {
    if (e.target.value) {
      app.style.display = "none";
      if (app.dataset.keywords.includes(e.target.value)) {
        app.style.display = "flex";
      }
    } else app.style.display = "flex";
  }
}
// Launchpad function end

// Calculator app start
function handleOpenCal_lunchpad() {
  calculator.style.display = "block";
  container.style.display = "flex";
  navbar.style.display = "flex";
  launchpad.style.display = "none";
  point_cal.style.display = "block";
  point_launchpad.style.display = "none";
}
// Calculator app end

/********** LISTENERS **********/

handleopen_spotlight();
handleOpenLaunching();
adding.addEventListener("click", handleAdding);
backfull.addEventListener("click", () => handleMinimize(terminal));
backfullnote.addEventListener("click", () => handleMinimize(note));
close.addEventListener("click", () =>
  close_window(terminal, point_terminal, app_name_terminal)
);
closenote.addEventListener("click", () =>
  close_window(note, point_note, app_name_notes)
);
close_map.addEventListener("click", () =>
  close_window(maps_window, point_map, app_name_maps)
);






//sssss
// close_message.addEventListener("click", () =>
//   close_window(messages_window, point_message, app_name_messages)
// );
// full_message.addEventListener("click", () => handleFullScreen(messages_window));
// open_message.addEventListener("click", () =>
//   open_window(messages_window, point_message, app_name_messages)
// );
// backfull_message.addEventListener("click", () => handleMinimize(messages_window));
//sssssssss

//SITE ALEX BORN
close_alex.addEventListener("click", () =>
  close_window(alex_window, point_alex, app_name_alex)
);
full_alex.addEventListener("click", () => handleFullScreen(alex_window));
open_alex.addEventListener("click", () =>
  open_window(alex_window, point_alex, app_name_alex)
);
backfull_alex.addEventListener("click", () => handleMinimize(alex_window));
//END SITE ALEX BORN


//SITE XBL
close_xbl.addEventListener("click", () =>
  close_window(xbl_window, point_xbl, app_name_xbl)
);
full_xbl.addEventListener("click", () => handleFullScreen(xbl_window));
open_xbl.addEventListener("click", () =>
  open_window(xbl_window, point_xbl, app_name_xbl)
);
backfull_xbl.addEventListener("click", () => handleMinimize(xbl_window));
//END SITE XBL

//SITE PILULAS DE MENTORIA
close_pilulas.addEventListener("click", () =>
  close_window(pilulas_window, point_pilulas, app_name_pilulas)
);
full_pilulas.addEventListener("click", () => handleFullScreen(pilulas_window));
open_pilulas.addEventListener("click", () =>
  open_window(pilulas_window, point_pilulas, app_name_pilulas)
);
backfull_pilulas.addEventListener("click", () => handleMinimize(pilulas_window));
//END SITE PILULAS DE MENTORIA

//SITE CINELOVERS
close_cine.addEventListener("click", () =>
  close_window(cine_window, point_cine, app_name_cine)
);
full_cine.addEventListener("click", () => handleFullScreen(cine_window));
open_cine.addEventListener("click", () =>
  open_window(cine_window, point_cine, app_name_cine)
);
backfull_cine.addEventListener("click", () => handleMinimize(cine_window));
//END SITE CINELOVERS

//SITE NETFLIX CLONE
close_netflix.addEventListener("click", () =>
  close_window(netflix_window, point_netflix, app_name_netflix)
);
full_netflix.addEventListener("click", () => handleFullScreen(netflix_window));
open_netflix.addEventListener("click", () =>
  open_window(netflix_window, point_netflix, app_name_netflix)
);
backfull_netflix.addEventListener("click", () => handleMinimize(netflix_window));
//END SITE NETFLIX CLONE

//SITE LANDING PAGE ALURA PLUS
close_aluraplus.addEventListener("click", () =>
  close_window(aluraplus_window, point_aluraplus, app_name_aluraplus)
);
full_aluraplus.addEventListener("click", () => handleFullScreen(aluraplus_window));
open_aluraplus.addEventListener("click", () =>
  open_window(aluraplus_window, point_aluraplus, app_name_aluraplus)
);
backfull_aluraplus.addEventListener("click", () => handleMinimize(aluraplus_window));
//END SITE LANDING PAGE ALURA PLUS

//FIGMA ELLOS-CCAB
close_ellosccab.addEventListener("click", () =>
  close_window(ellosccab_window, point_ellosccab, app_name_ellosccab)
);
full_ellosccab.addEventListener("click", () => handleFullScreen(ellosccab_window));
open_ellosccab.addEventListener("click", () =>
  open_window(ellosccab_window, point_ellosccab, app_name_ellosccab)
);
backfull_ellosccab.addEventListener("click", () => handleMinimize(ellosccab_window));
//END FIGMA ELLOS-CCAB

//FIGMA CASA VERDE
close_casaverde.addEventListener("click", () =>
  close_window(casaverde_window, point_casaverde, app_name_casaverde)
);
full_casaverde.addEventListener("click", () => handleFullScreen(casaverde_window));
open_casaverde.addEventListener("click", () =>
  open_window(casaverde_window, point_casaverde, app_name_casaverde)
);
backfull_casaverde.addEventListener("click", () => handleMinimize(casaverde_window));
//END FIGMA CASA VERDE


//FIGMA VIVENDO COM SAÚDE
close_vivendosaude.addEventListener("click", () =>
  close_window(vivendosaude_window, point_vivendosaude, app_name_vivendosaude)
);
full_vivendosaude.addEventListener("click", () => handleFullScreen(vivendosaude_window));
open_vivendosaude.addEventListener("click", () =>
  open_window(vivendosaude_window, point_vivendosaude, app_name_vivendosaude)
);
backfull_vivendosaude.addEventListener("click", () => handleMinimize(vivendosaude_window));
//END FIGMA VIVENDO COM SAÚDE


//FIGMA E-TICKET
close_eticket.addEventListener("click", () =>
  close_window(eticket_window, point_eticket, app_name_eticket)
);
full_eticket.addEventListener("click", () => handleFullScreen(eticket_window));
open_eticket.addEventListener("click", () =>
  open_window(eticket_window, point_eticket, app_name_eticket)
);
backfull_eticket.addEventListener("click", () => handleMinimize(eticket_window));
//END FIGMA E-TICKET

//FIGMA SKATE
close_skate.addEventListener("click", () =>
  close_window(skate_window, point_skate, app_name_skate)
);
full_skate.addEventListener("click", () => handleFullScreen(skate_window));
open_skate.addEventListener("click", () =>
  open_window(skate_window, point_skate, app_name_skate)
);
backfull_skate.addEventListener("click", () => handleMinimize(skate_window));
//END FIGMA SKATE

//FIGMA CONNECT
close_connect.addEventListener("click", () =>
  close_window(connect_window, point_connect, app_name_connect)
);
full_connect.addEventListener("click", () => handleFullScreen(connect_window));
open_connect.addEventListener("click", () =>
  open_window(connect_window, point_connect, app_name_connect)
);
backfull_connect.addEventListener("click", () => handleMinimize(connect_window));
//END FIGMA CONNECT

//FIGMA RECRUTAMENTO
close_recrutamento.addEventListener("click", () =>
  close_window(recrutamento_window, point_recrutamento, app_name_recrutamento)
);
full_recrutamento.addEventListener("click", () => handleFullScreen(recrutamento_window));
open_recrutamento.addEventListener("click", () =>
  open_window(recrutamento_window, point_recrutamento, app_name_recrutamento)
);
backfull_recrutamento.addEventListener("click", () => handleMinimize(recrutamento_window));
//END FIGMA RECRUTAMENTO


//FIGMA MKT
close_mkt.addEventListener("click", () =>
  close_window(mkt_window, point_mkt, app_name_mkt)
);
full_mkt.addEventListener("click", () => handleFullScreen(mkt_window));
open_mkt.addEventListener("click", () =>
  open_window(mkt_window, point_mkt, app_name_mkt)
);
backfull_mkt.addEventListener("click", () => handleMinimize(mkt_window));
//END FIGMA MKT

//FIGMA DESIGN DIÁRIO
close_designdiario.addEventListener("click", () =>
  close_window(designdiario_window, point_designdiario, app_name_designdiario)
);
full_designdiario.addEventListener("click", () => handleFullScreen(designdiario_window));
open_designdiario.addEventListener("click", () =>
  open_window(designdiario_window, point_designdiario, app_name_designdiario)
);
backfull_designdiario.addEventListener("click", () => handleMinimize(designdiario_window));
//END FIGMA DESIGN DIÁRIO


//FIGMA REDE DE ROLES
close_roles.addEventListener("click", () =>
  close_window(roles_window, point_roles, app_name_roles)
);
full_roles.addEventListener("click", () => handleFullScreen(roles_window));
open_roles.addEventListener("click", () =>
  open_window(roles_window, point_roles, app_name_roles)
);
backfull_roles.addEventListener("click", () => handleMinimize(roles_window));
//END FIGMA REDE DE ROLES

//PROTOTIPO REDE DE ROLES
close_rolesprototipo.addEventListener("click", () =>
  close_window(rolesprototipo_window, point_rolesprototipo, app_name_rolesprototipo)
);
full_rolesprototipo.addEventListener("click", () => handleFullScreen(rolesprototipo_window));
open_rolesprototipo.addEventListener("click", () =>
  open_window(rolesprototipo_window, point_rolesprototipo, app_name_rolesprototipo)
);
backfull_rolesprototipo.addEventListener("click", () => handleMinimize(rolesprototipo_window));
//END PROTOTIPO REDE DE ROLES

//CV
close_cv.addEventListener("click", () =>
  close_window(cv_window, point_cv, app_name_cv)
);
full_cv.addEventListener("click", () => handleFullScreen(cv_window));
open_cv.addEventListener("click", () =>
  open_window(cv_window, point_cv, app_name_cv)
);
backfull_cv.addEventListener("click", () => handleMinimize(cv_window));
//END CV

//INSTAGRAM
close_instagram.addEventListener("click", () =>
  close_window(instagram_window, point_instagram, app_name_instagram)
);
full_instagram.addEventListener("click", () => handleFullScreen(instagram_window));
// open_instagram.addEventListener("click", () =>
//   open_window(instagram_window, point_instagram, app_name_instagram)
// );
backfull_instagram.addEventListener("click", () => handleMinimize(instagram_window));
//END INSTAGRAM

//FACEBOOK
close_facebook.addEventListener("click", () =>
  close_window(facebook_window, point_facebook, app_name_facebook)
);
full_facebook.addEventListener("click", () => handleFullScreen(facebook_window));
// open_facebook.addEventListener("click", () =>
//   open_window(facebook_window, point_facebook, app_name_facebook)
// );
backfull_facebook.addEventListener("click", () => handleMinimize(facebook_window));
//END FACEBOOK


//WHATSAPP
close_whatsapp.addEventListener("click", () =>
  close_window(whatsapp_window, point_whatsapp, app_name_whatsapp)
);
full_whatsapp.addEventListener("click", () => handleFullScreen(whatsapp_window));
// open_whatsapp.addEventListener("click", () =>
//   open_window(whatsapp_window, point_whatsapp, app_name_whatsapp)
// );
backfull_whatsapp.addEventListener("click", () => handleMinimize(whatsapp_window));
//END WHATSAPP


//LINKEDIN
close_linkedin.addEventListener("click", () =>
  close_window(linkedin_window, point_linkedin, app_name_linkedin)
);
full_linkedin.addEventListener("click", () => handleFullScreen(linkedin_window));
// open_linkedin.addEventListener("click", () =>
//   open_window(linkedin_window, point_linkedin, app_name_linkedin)
// );
backfull_linkedin.addEventListener("click", () => handleMinimize(linkedin_window));
//END LINKEDIN

//EMAIL
close_email.addEventListener("click", () =>
  close_window(email_window, point_email, app_name_email)
);
full_email.addEventListener("click", () => handleFullScreen(email_window));
// open_email.addEventListener("click", () =>
//   open_window(email_window, point_email, app_name_email)
// );
backfull_email.addEventListener("click", () => handleMinimize(email_window));
//END EMAIL

//FOTOS
close_fotos.addEventListener("click", () =>
  close_window(fotos_window, point_fotos, app_name_fotos)
);
full_fotos.addEventListener("click", () => handleFullScreen(fotos_window));
open_fotos.addEventListener("click", () =>
  open_window(fotos_window, point_fotos, app_name_fotos)
);
backfull_fotos.addEventListener("click", () => handleMinimize(fotos_window));
//END FOTOS

//EU
close_eu.addEventListener("click", () =>
  close_window(eu_window, point_eu, app_name_eu)
);
full_eu.addEventListener("click", () => handleFullScreen(eu_window));
open_eu.addEventListener("click", () =>
  open_window(eu_window, point_eu, app_name_eu)
);
backfull_eu.addEventListener("click", () => handleMinimize(eu_window));
//END EU









deleting.addEventListener("click", handleDeleting);
full.addEventListener("click", () => handleFullScreen(terminal));
fullnote.addEventListener("click", () => handleFullScreen(note));
// full_Vscode.addEventListener("click", () => handleFullScreen(Vscode_window));
full_map.addEventListener("click", () => handleFullScreen(maps_window));
notes.addEventListener("click", handleNotes);
opening.addEventListener("click", () =>
  open_window(terminal, point_terminal, app_name_terminal)
);
openNote.addEventListener("click", () =>
  open_window(note, point_note, app_name_notes)
);
opencalculator.addEventListener("click", () =>
  open_window(calculator, point_cal, app_name_calculator)
);
// open_vscode.addEventListener("click", () =>
//   open_window(Vscode_window, point_vscode, app_name_VScode)
// );
open_map.addEventListener("click", () =>
  open_window(maps_window, point_map, app_name_maps)
);
// close_Vscode.addEventListener("click", () =>
//   close_window(Vscode_window, point_vscode, app_name_VScode)
// );
// backfull_Vscode.addEventListener("click", () => handleMinimize(Vscode_window));
backfull_map.addEventListener("click", () => handleMinimize(maps_window));
closecal.addEventListener("click", () =>
  close_window(calculator, point_cal, app_name_calculator)
);
opencalculator_lunchpad.addEventListener("click", handleOpenCal_lunchpad);
open_spotlight.addEventListener("click", handleopen_spotlight);
launchpad_searchbox.addEventListener("input", handleLaunchpadSearch);
clockWrapper.addEventListener("click", () => {
  widgetsPanel.classList.toggle("open");
});

//calculator code
// select all the buttons
const buttons = document.querySelectorAll(".input button");
// select the <input type="text" class="display" disabled> element
const display = document.querySelector(".display");

// add eventListener to each button
buttons.forEach((button) => {
  button.addEventListener("click", (event) => calculate(event.target.value));
});

operators = ["+", "-", "*", "/"];
function lastNumber(value) {
  var tempChar = operators[0];
  for (var i = 1; i < operators.length; i++) {
    value = value.split(operators[i]).join(tempChar);
  }
  value = value.split(tempChar);
  return value[value.length - 1];
}

function calculate(value) {
  const latestChar = display.value[display.value.length - 1];

  const isEmpty = display.value === "0";
  const isDecimalLastOperand = lastNumber(display.value).includes(".");
  const isNumber =
    value === "0" ||
    value === "1" ||
    value === "2" ||
    value === "3" ||
    value === "4" ||
    value === "5" ||
    value === "6" ||
    value === "7" ||
    value === "8" ||
    value === "9" ||
    value === "10";

  if (isEmpty && isNumber) {
    return (display.value = value);
  }

  switch (value) {
    case "=":
      if (!isEmpty) display.value = eval(display.value);
      return;
    case ".":
      if (!isDecimalLastOperand) display.value += ".";
      return;
    case "C":
      return (display.value = "0");
    case "+/-":
      if (
        !operators.some((operator) =>
          display.value.replace(/^-/, "").includes(operator)
        )
      )
        display.value = -1 * parseFloat(display.value);
      return;
    case "*":
    case "/":
    case "-":
    case "+":
    case "%":
      if (
        latestChar === "/" ||
        latestChar === "*" ||
        latestChar === "-" ||
        latestChar === "+" ||
        latestChar === "%"
      )
        return (display.value = display.value.slice(0, -1) + value);
    default:
      display.value += value;
  }
}

//App dragable
$(function () {
  $(".terminal").draggable();
  $(".note").draggable();
  $(".calculator").draggable();
  // $(".Vscode").draggable();
  $(".spotlight_serach").draggable();
  $(".maps").draggable();
});
//date and time
var d = new Date();
document.getElementById("date").innerHTML = d.toDateString();

function digi() {
  var date = new Date(),
    hour = date.getHours(),
    minute = checkTime(date.getMinutes());

  function checkTime(i) {
    if (i < 10) {
      i = "0" + i;
    }
    return i;
  }

  if (hour > 12) {
    hour = hour - 12;
    if (hour == 12) {
      hour = checkTime(hour);
      clockElement.innerHTML = hour + ":" + minute + " AM";
    } else {
      hour = checkTime(hour);
      clockElement.innerHTML = hour + ":" + minute + " PM";
    }
  } else {
    clockElement.innerHTML = hour + ":" + minute + " AM";
  }
}

let terminal_line_html = $(".terminal_line").html();
let path = "~";
let dirName;
let dirs = ["Desktop", "Downloads", "Music", "Documents"];
function init_terminal_line() {
  $(".cursor").keydown(function (e) {
    // trap the return key being pressed
    if (e.keyCode === 13) {
      e.preventDefault();
      let command = $(this).html();
      if (!command) return;
      let command_output = "zsh: command not found: " + command + "<br>";

      if (command.startsWith("cd ")) {
        path = command.substring(3);
        command_output = "";
      } else if (command === "ls") {
        command_output = dirs.join("\t");
      } else if (command === "pwd") {
        command_output = path + "/";
      } else if (command.startsWith("mkdir ")) {
        dirName = command.substring(6);
        dirs.push(dirName);
        command_output = "";
      } else if (command === "rmdir") {
        dirs.pop();
        command_output = "";
      } else if (command === "ps -aux") {
        command_output = "CPU = 56% <br> MEMORY = 25% <br> DISK = 34%";
      } else if (command.startsWith("cat ")) {
        command_output =
          "Lorem ipsum dolor sit amet consectetur adipisicing elit.<br> Fugiat nihil totam expedita sint necessitatibus quos ducimus.";
      } else if (command.startsWith("du -hs ")) {
        command_output = Math.floor(Math.random() * 100) + "GB";
      }

      $(this).removeAttr("contenteditable");
      $(this).removeClass("cursor");
      $(".terminal_content")
        .append(command_output)
        .append(terminal_line_html.replace("~", path));
      placeCaretAtEnd(document.querySelector(".cursor"));
      init_terminal_line();
    }
  });
}

init_terminal_line();
$(".terminal_content").click(function () {
  placeCaretAtEnd(document.querySelector(".cursor"));
});

function placeCaretAtEnd(el) {
  el.focus();
  var range = document.createRange();
  range.selectNodeContents(el);
  range.collapse(false);
  var sel = window.getSelection();
  sel.removeAllRanges();
  sel.addRange(range);
}

//Right click to desktop
document.onclick = hideMenu;
document.oncontextmenu = rightClick;

function hideMenu() {
  document.getElementById("contextMenu").style.opacity = "0";
}

function rightClick(e) {
  e.preventDefault();

  if (document.getElementById("contextMenu").style.opacity == "1") hideMenu();
  else {
    var menu = document.getElementById("contextMenu");

    menu.style.opacity = "1";
    menu.style.left = e.pageX + "px";
    menu.style.top = e.pageY + "px";
  }
}

// loading
var load = document.getElementById("loading");
function lockload() {
  load.style.display = "none";
}

/********** Start Battery **********/
const calculateBattery = () => {
  let number = Math.floor(Math.random() * 100); // If there is any error, it will be the random default battery level

  let batteryIsCharging = false; // Charging status

  navigator
    .getBattery()
    .then(function (battery) {
      number = battery.level * 100;

      batteryIsCharging = battery.charging;
      battery.addEventListener("chargingchange", function () {
        batteryIsCharging = battery.charging;
      });
    })
    .finally(() => {
      batteryText.textContent = `${number}%`;
      batteryProgress.style.width = `${number}%`;
      batteryPopupText.textContent = `${number}%`;

      if (number <= 20) {
        batteryProgress.classList.add("battery__low");
      } else if ((number > 90 && batteryIsCharging) || batteryIsCharging) {
        batteryProgress.classList.add("battery__high");
        batteryIsChargingLogo.classList.add("is-charging-visibel");
        powerSource.textContent = "Power Adapter";
      }
    });
};

batteryButton.addEventListener("click", () => {
  batteryPopup.classList.toggle("opened");
  batteryButton.classList.toggle("selected");
});
/********** End Battery **********/
