




//      Selector for prosjektet headeren som lyser gult ved HOVER eller CLICK
var h1_header = document.getElementById("prosjektet_header");
var prosjektet_bg = document.getElementById("prosjektet_container");

// SHOW INFO FROM CARDS-PROFILES

const felles_ul = document.querySelector(".ul_list");
const ul_simen = document.querySelector(".ul_list_simen");
const ul_andreas = document.querySelector(".ul_list_andreas");
const ul_ida = document.querySelector(".ul_list_ida");



/*                                   x xx       G E T    E L E M E N T S   BY   =   ID         x xx
GetElementsByID   FOR    Button   CLICK...  +    Show Paragraphs... these are hidden under the   "Om Oss"   
Section, and is returning the   p   -  TAG for each person. fe

    + + +   + + +


    ScrollIntoView  ()   => Function.. To scroll when       "Les mer"   Button is clicked. 



*/
// Button + paragraph ==  info STIAN LARSEN:
const button_showInfo_profilesCard_Stian = document.getElementById("show_info_stian")
const show_info_paragraph_text_stian = document.getElementById("hidden_info_stian")
const stian_profile = document.getElementById("stian");

// Button + paragraph simen == info SIMEN
const button_simen = document.getElementById("show_info_simen");
const paragraph_simen = document.getElementById("hidden_info_simen");

const simen_profile = document.getElementById("simen_profile");


// Button + paragraph Andreas == info ANDREAS
const button_andreas = document.getElementById("show_info_andreas");
const paragraph_andreas = document.getElementById("hidden_info_andreas");

const andreas_profile_scroll = document.getElementById("andreas");

// Button + paragraph IDA == info IDAA
const button_ida = document.getElementById("show_info_ida");
const paragraph_ida = document.getElementById("hidden_info_ida");

const ida_profile_scroll = document.getElementById("ida");


//                              F U N C T I O N    ()    =>   {}              x xx       S T A R T E N    F() => {}  x xx

/*  Function TOGGLE info on click

                This Function Works for each 
                button beneath the profile user picture. 
                It is meant to create a nice looking animation
                when clicked, and be displayed for the user. 
                Did NOT succeed. Sorry By Thaat. 



*/

// Function button Stian
button_showInfo_profilesCard_Stian.addEventListener('click', function() {
    console.log("Clicked button for show-info on Stian :)"); 
    if (button_showInfo_profilesCard_Stian.innerText == "Les mer") {
        button_showInfo_profilesCard_Stian.innerText = "Lukk"
    } else {
        button_showInfo_profilesCard_Stian.innerText = "Les mer"
    };

    show_info_paragraph_text_stian.classList.toggle('hidden');

    felles_ul.classList.toggle("ul_profiles_felles");
    stian_profile.scrollIntoView();


    console.log(felles_ul.classList);
});


// Function button Simen
button_simen.addEventListener('click', function() {
    console.log("Clicked button for show-info on Simen :)"); 
    paragraph_simen.classList.toggle('hidden');
    ul_simen.classList.toggle("ul_profiles_felles");

    simen_profile.scrollIntoView()

    if (button_simen.innerText == "Les mer") {
        button_simen.innerText = "Lukk"
    } else {
        button_simen.innerText = "Les mer"
    };

    console.log(ul_simen.classList);
});


// Function Button ANDREAS
button_andreas.addEventListener('click', function() {
    console.log("Clicked button for show-info on Andreas :)"); 
    paragraph_andreas.classList.toggle('hidden');
    ul_andreas.classList.toggle("ul_profiles_felles");

    andreas_profile_scroll.scrollIntoView()

    if (button_andreas.innerText == "Les mer") {
        button_andreas.innerText = "Lukk"
    } else {
        button_andreas.innerText = "Les mer"
    };

    console.log(ul_andreas.classList);
});




button_ida.addEventListener('click', function() {

    console.log("Clicked button for show-info on Ida :)"); 
    paragraph_ida.classList.toggle('hidden');
    ul_ida.classList.toggle("ul_profiles_felles");
    
    ida_profile_scroll.scrollIntoView();

    //scroll


    if (button_ida.innerText == "Les mer") {
        button_ida.innerText = "Lukk"
    } else {
        button_ida.innerText = "Les mer"
    };


    console.log(ul_ida.classList);
});

// Function Button Ida                                   x xx       S L U T T T E N      x xx





// Tekst forside: Prosjektet === gåt mot gul ved Hover, eller ved "klikK" på Prosjektet link i NAV.

// Prosjektet HEADER            SOM BLIR GUL        No worries.... 
h1_header.addEventListener("mouseover", function(event) {
    prosjektet_bg.style.backgroundColor = "#FDC20A";
    prosjektet_bg.style.color = "#000000";

    setTimeout(function() {
        prosjektet_bg.style.backgroundColor = "";
        prosjektet_bg.style.color = "";

    }, 15000)

}, false);

// Prosjektet header som blir GUL
h1_header.addEventListener("click", function(event) {
    prosjektet_bg.style.backgroundColor = "#FDC20A";

    setTimeout(function() {
        prosjektet_bg.style.backgroundColor = "";

    }, 15000)

}, false);



// PROSJEKTET H1 som blir gul når html href nummer 2 laster inn og man trykker på om oss. REDIRECT =>
let prosjektet_hehe = document.getElementById("prosjektet_hehe");

prosjektet_hehe.addEventListener('click', function() {
    console.log("clicked........hehe")
    prosjektet_bg.style.backgroundColor = "#FDC20A";

    setTimeout(function() {
        prosjektet_bg.style.backgroundColor = "";

    }, 15000)
});


let om_oss_hehe = document.getElementById("prosjektet_hehe");
prosjektet_hehe.addEventListener('click', function() {
    prosjektet_bg.style.backgroundColor = "#FDC20A";

    setTimeout(function() {
        prosjektet_bg.style.backgroundColor = "";

    }, 15000)
});






/*      Artikler / Åpne // lukke de ==>
        Lage en addEventListener til hver artikkel
        Lage en felles funksjon som toggler classene osv..
//                                                                                                        START

*   Henter alle artiklene som finnes med className article_element.. Result => DOM collection list.    */                                                                            
var articles_list = document.getElementsByClassName("article_element");

//  For each aritcle_element => ADDEVENTLISTENER.. + felles funksjon
// We make an ARRAY out of the DOM collection "article_list" ;)

Array.from(articles_list).forEach((event) => {
    event.addEventListener('click', (e) => {
        //  consol-logger hvilket element vi trykker på, Sjekker at det er (article_element).
        console.log("element clicked: ", e.currentTarget);  
        var element = e.currentTarget;

        //  Sjekker, hvis noen av elementene er ÅPEN og har 
        //  ACTIVE classen: gjør dette: =>
        if (element.classList.contains("active") || element.classList.contains("active_darkMode")) {  // if darkmode is toggled, open the article in darkmode format ..
            console.log("IF = active || active_darkMode : object clicked: ", e.target.tagName);
            if (e.target.tagName === "BUTTON") {
                //  Hvis "X" knappen blir trykket på, altså: hvis elementet
                //  "BUTTON" blir klikket på => Lukk artikkel =>
                //  Fjern ACTIVE klassen og add article_element klassen..
                element.classList.remove("active");
                element.classList.remove("active_darkMode");
                element.classList.remove("article_dark_bg");
                element.style.backgroundColor = "#ffffff";
                element.classList.add("article_element");
                e.target.scrollIntoView(true); // auto-scroll to the article we just closed//opened.. just as an extra feature
                

                


            } else {

                    // Hvis innholdet i den ÅPNE artikkelen blir klikket på: Gjør ingenting // Do nothing.                    
            };

        //  Når et article_element blir trykket, og ingen andre 
        //  elementer har classen "ACTIVE", sett det "clicked" element 
        //  til ACTIVE ==> ÅPNE artikkel:
        } else {

            if (localStorage.getItem('darkmode') === "true") {
                console.log("darkmode toggled: open artih that in mind")
                var msg = "No classes contains ACTIVE, but DARKMODE is ON ==> Open article // åpne artikkel // toggle active + article_element";
                console.log(msg);
                element.style.backgroundColor = "#242424";
                element.style.color = "#ffffff";
                element.classList.toggle("article_element");
                element.classList.toggle("active_darkMode"); // Samme som under:: Endring = active_darkMode bare ;)
                element.classList.add("article_dark_bg");
                element.scrollIntoView(true);
            } else {
                var msg = "No classes contains ACTIVE, => Open article // åpne artikkel // toggle active + article_element";
                console.log(msg);
                element.style.backgroundColor = "white";
                element.style.color = "#242424";
                element.classList.toggle("article_element");
                element.classList.toggle("active");
                element.scrollIntoView(true);                
            }   




                
        };
    });
});
//                                                                                                        END



// For å endre BG farge til hvit når artikkel åpnes.                                    START
var article_container_bg = document.getElementById("articles_container");
        // Change FOOTER bg when article toggles..
var footer_bg = document.getElementById("footer_bg");

// element == all articles grouped by classname // sharing.
var article_elements = document.getElementById("articles_wrapper"); 
var article_elements_list = document.getElementsByClassName("active"); 

// for hvit bakgrunn neders ved footer når paragraf er åpen.. (skjule blå bagrunn SVG) bruker pseudo-kode
article_elements.addEventListener('click', function() {
    if (article_elements_list.length == 0 | null) { // Hvis classlist IKKE inneholder ACTIVE class..
        console.log("list with ACTIVE === EMPTY")
        footer_bg.classList.remove("footer_bg");

        if (localStorage.getItem('darkmode') === 'true') {
            console.log("noticed darkmode is enabled. continues with that theen..")
            article_container_bg.style.background = "#242424";
            article_elements.style.background = "#242424";
        } else {
            article_container_bg.style.background = "#3E5A80";
            article_elements.style.background = "#3E5A80";
        }


        
    } else { // Hvis classList for article_element != 0 ( ikke er lik 0 )

        if (document.body.classList.contains("darkclass") != true) {
            footer_bg.classList.add("footer_bg");
            article_container_bg.style.background = "white";


        } else {
                footer_bg.classList.add("footer_bg");
                article_container_bg.style.background = "#242424";
                article_elements.style.background = "#242424";
        }
        
        

    }
})

//                                                                                          END




// Copyrights Footer section // Åpne / lukke ==>
// Close button for copyrights section IN the Footer..
var copyrights_link = document.getElementById("copyrights");
var copyrights_hidden= document.getElementById("copyrights_hidden");

copyrights_link.addEventListener("click", function() {
    copyrights_hidden.classList.toggle("hidden_copy");
});


// Close copyrights pop-up... BUTTON
var close_btn = document.getElementById("copyrights_close_button");
close_btn.addEventListener('click', function() {
    copyrights_hidden.classList.toggle("hidden_copy");
})





// DARK MODE

//Button 
var darkmode_button_index_html = document.getElementById("darkmode_btn"); //    Get darkmode Button
darkmode_button_index_html.addEventListener('click', changeStatus);       //    make Button clickable 


// set darkmode to false...
if (localStorage.getItem('darkmode') === null) { // set darkmode to false in localstorage Default on load first time..
    localStorage.setItem('darkmode', "false");
    
}


//  check to see in the localStorage if there is darkmode already on // off. 
//  if not == switch to light mode, ELSE: if darkmode was on in a previously 
//  window, turn to darkmode for this page too
checkStatus() 


// CheckStatus function..
function checkStatus(){

    // if localstorgage darkmode is true => add darkmode classes.
    if (localStorage.getItem('darkmode') === "true") {
        // knappen bytter element


        // sette bakgrunner og tekst til body
        document.body.classList.add('darkclass');
        document.body.style.backgroundColor = "#242424";
        article_container_bg.style.backgroundColor = "transparent";

        

        // removing button class for pseudo element 
        darkmode_button_index_html.classList.remove("dot_switch")
        // adding dot_switch_on which is the green button for togglef ON symbol..
        darkmode_button_index_html.classList.add("dot_switch_on")
    }
        //  if local storage is false (which it is since we put it to false as Default 
        //  => remove darkclass, lightmode is active (deafult)
        else {
            // knappen bytter element
            document.body.classList.remove('darkclass');
            document.body.style.backgroundColor = "";
            // removing button class for darkmode button
            darkmode_button_index_html.classList.remove("dot_switch_on")
            // adding dot_switch  which is the default button withou green..
            darkmode_button_index_html.classList.add("dot_switch")
    }
}


// function to change themes on button click.. 
function changeStatus(){
    // when clicked on button. if the localstorage for darkmode is:  "darkmode": "true", toggle off...
    if (localStorage.getItem('darkmode') === "true"){   // if localstorage Darkmode == true, add darkmode on pageload from previous page. 
        console.log("Changing from dark to light theme :)")
        localStorage.setItem('darkmode', "false");
        document.body.classList.remove('darkclass');    //removing darklclass se default is entering back on 
        document.body.style.backgroundColor = "";

        // removing button class for darkmode button
        darkmode_button_index_html.classList.remove("dot_switch_on")
        // adding dot_switch  which is the default button withou green..
        darkmode_button_index_html.classList.add("dot_switch")

        article_container_bg.style.background = "#3E5A80";
        article_elements.style.background = "#3E5A80";

    } else { // If darkmode is NOT activated, it means that darkmode is not set, which menas this function will remove it.
        console.log("Changing theme from Light to Dark ;)")

        localStorage.setItem('darkmode', "true");
        document.body.classList.add('darkclass');
        document.body.style.backgroundColor = "#242424";

        // removing button class for pseudo element 
        darkmode_button_index_html.classList.remove("dot_switch")
        // adding dot_switch_on which is the green button for togglef ON symbol..
        darkmode_button_index_html.classList.add("dot_switch_on")

        article_container_bg.style.background = "#242424";
        article_elements.style.background = "#242424";
        
    }
}











/*      Toggle navigation for mobile view when screen width == <= 640px. 

*/

// Get hidden mobile nav..
var mobile_nav = document.getElementById("mobile_nav");

// Get DOM list of all mobile-nav-links. 
var mobile_links = document.getElementsByClassName("mobile_nav_links");

//  add eventlistener to each a link in the ul list for mobile nav..
Array.from(mobile_links).forEach(element => element.addEventListener('click', (event) => {
    mobile_nav.classList.toggle('hide_nav'); // removes "hide_nav" from classlist which contains Display: none;

}))


var nav_manu_button = document.getElementsByClassName("burger");
Array.from(nav_manu_button).forEach(element => element.addEventListener('click', (e) => {
    console.log()
    mobile_nav.classList.toggle('hide_nav'); // When the burger mobile menu icon is clicked, remove "display: none;" and open menu..(fixed pos..tion)

}))


// Get from the fullscreened mobile nav to homescreen => tp "tilbake" => returns home..
var back_to_mob = document.getElementsByClassName("back_from_mobile");
Array.from(back_to_mob).forEach(element => element.addEventListener('click', (event) => {
    mobile_nav.classList.toggle('hide_nav'); // adds "display: none" no the mobile nav wrapper/container.

}))


// Background video autoplay on page load..
// Autoplay when window.reload == True
var autoplayVideo = document.getElementById("video");
autoplayVideo.muted = true;
autoplayVideo.autoplay = true;
autoplayVideo.play();