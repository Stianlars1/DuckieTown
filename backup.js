// script . js 

// DARK MODE

var btnn = document.getElementById("darkmode_btn");
btnn.addEventListener('click', (e) => {

    if (btnn.classList.contains("dot_switch")) {
        btnn.classList.toggle("dot_switch");
        btnn.classList.toggle("dot_switch_on");

        goDark();
    } else {
        btnn.classList.toggle("dot_switch");
        btnn.classList.toggle("dot_switch_on");

        goLight();

    }


});

// Dark Theme Button.. ===== START ======

// go Dark function..
function goDark(event) {
    var darkmode = localStorage.getItem('darkBtnClicked'), 
        lightmode = localStorage.getItem('normalBtnClicked');
    document.body.style.backgroundColor = "#242424";
    document.body.style.color = "#FFFFFF";
    document.body.style.transition = "all 1s ease-in-out";
    let footer = document.querySelector(".footer_wrapper");
    footer.style.backgroundColor = "#242424";
    footer.style.transition = "background-Color 1s ease-in-out";

    var navv = document.getElementById("nav");
    navv.style.background = "#242424";
    navv.style.backgroundColor = "#242424";

    console.log("changing to DarkMode Theme :)"); 

    var yo = document.querySelector("meta[name=theme-color]"); //<-- this semicolon

    if (yo.hasAttribute("content", "#3E5A80")) { //<-- this semicolon 
    
        yo.setAttribute("content", "#242424"); //<-- this semicolon
    } else {
        yo.setAttribute("content", "#3E5A80"); //<-- and this semicolon are all your problem
    };    


    localStorage.setItem('darkBtnClicked', true);
    localStorage.setItem('normalBtnClicked', false);
}

function goLight(event) {
    var darkmode = localStorage.getItem('darkBtnClicked'), 
        lightmode = localStorage.getItem('normalBtnClicked');
    document.body.style.backgroundColor = "";
    document.body.style.color = "";   
    
    let footer = document.querySelector(".footer_wrapper");
    footer.style.backgroundColor = "";


    var navv = document.getElementById("nav");
    navv.style.background = "";
    navv.style.backgroundColor = "";

    console.log("changing to Lightmode Theme :)"); 

    var yo = document.querySelector("meta[name=theme-color]"); //<-- this semicolon

    if (yo.hasAttribute("content", "#242424")) { //<-- this semicolon 
    
        yo.setAttribute("content", "#3E5A80"); //<-- this semicolon
    } else {
        yo.setAttribute("content", "#242424"); //<-- and this semicolon are all your problem
    };  
    
    
    localStorage.setItem('darkBtnClicked', false);
    localStorage.setItem('normalBtnClicked', true);
}




var darkmode = localStorage.getItem('darkBtnClicked'), 
        lightmode = localStorage.getItem('normalBtnClicked');
$(".document").ready(function ()  {
    var darkmode = localStorage.getItem('darkBtnClicked'), 
        lightmode = localStorage.getItem('normalBtnClicked');

        if (darkmode != false) {
            if (btnn.classList.contains("dot_switch")) {
                btnn.classList.toggle("dot_switch_on");
                btnn.classList.toggle("dot_switch");
                goDark();

            } else {

            }
        }
        if (lightmode != false) {

            if (btnn.classList.contains("dot_switch_on")) {
                btnn.classList.toggle("dot_switch");
                btnn.classList.toggle("dot_switch_on");
                goLight();

            }
            
        }
});










// script les mer script js /&/


var btnn = document.getElementById("darkmode_btn");
btnn.addEventListener('click', (e) => {

    if (btnn.classList.contains("dot_switch")) {
        btnn.classList.toggle("dot_switch");
        btnn.classList.toggle("dot_switch_on");

        goDark();
    } else {
        btnn.classList.toggle("dot_switch");
        btnn.classList.toggle("dot_switch_on");

        goLight();

    }


});

// Dark Theme Button.. ===== START ======

// go Dark function..
function goDark(event) {

    document.body.classList.toggle('darkclass');
    document.body.style.transition = "all 1s ease-in-out";
    let footer = document.querySelector(".footer_wrapper");
    footer.classList.toggle("darkclass");
/*     footer.style.transition = "background-Color 1s ease-in-out";
 */    var navv = document.getElementById("nav");
    navv.classList.toggle("darkclass");

    console.log("changing to DarkMode Theme :)"); 

    var yo = document.querySelector("meta[name=theme-color]"); //<-- this semicolon

    if (yo.hasAttribute("content", "#3E5A80")) { //<-- this semicolon 
    
        yo.setAttribute("content", "#242424"); //<-- this semicolon
    } else {
        yo.setAttribute("content", "#3E5A80"); //<-- and this semicolon are all your problem
    };   
    

    //check the button which is clicked
    
    localStorage.setItem('darkBtnClicked', true);
    localStorage.setItem('normalBtnClicked', false);



    
}

function goLight(event) {
    document.body.classList.toggle('darkclass');
    document.body.style.color = "";   
    
    let footer = document.querySelector(".footer_wrapper");
    footer.style.backgroundColor = "";
    footer.classList.toggle("darkclass");



    var navv = document.getElementById("nav");
    navv.classList.toggle("darkclass");


    console.log("changing to Lightmode Theme :)"); 

    var yo = document.querySelector("meta[name=theme-color]"); //<-- this semicolon

    if (yo.hasAttribute("content", "#242424")) { //<-- this semicolon 
    
        yo.setAttribute("content", "#3E5A80"); //<-- this semicolon
    } else {
        yo.setAttribute("content", "#242424"); //<-- and this semicolon are all your problem
    };   


    localStorage.setItem('darkBtnClicked', false);
    localStorage.setItem('normalBtnClicked', true);
}


var darkmode = localStorage.getItem('darkBtnClicked'), 
        lightmode = localStorage.getItem('normalBtnClicked');
$(".document").ready(function ()  {
    var darkmode = localStorage.getItem('darkBtnClicked'), 
        lightmode = localStorage.getItem('normalBtnClicked');

        if (darkmode != false) {
            if (btnn.classList.contains("dot_switch")) {
                btnn.classList.toggle("dot_switch_on");
                btnn.classList.toggle("dot_switch");
                goDark();

            } else {

            }
        }
        if (lightmode != false) {
            if (btnn.classList.contains("dot_switch_on")) {
                btnn.classList.toggle("dot_switch");
                btnn.classList.toggle("dot_switch_on");
                goLight();

            }
            
        }
});




// btn
/* $(".close_article").click(function (event) {
    var parent = $(this).closest('.active');
    parent.toggle('active');
    parent.toggle('article_element');

}); */

/* var btn = document.getElementById("close_article_1_btn");
btn.addEventListener('click', (e) => {
    var parent = e.Target.parentElement;
    parent.classList.remove("active");
    parent.classList.add("article_element");
}) */
// NY åpne artikkel TEST                                    SLUTT




// script.js backup article element osv...

/*      ARTICLE BUTTONS OG FUNCTIONS        */

/* const article_click = document.querySelector(".selected_article");
const article_click2 = document.querySelector(".selected_article2");

article_click.addEventListener('click', function() {
    console.log("Clicked")
    article_click.classList.toggle("open_article_element");
    article_click.classList.toggle("article_element");

    article_click.scrollIntoView();

});

article_click2.addEventListener('click', function() {
    console.log("Clicked")
    article_click2.classList.toggle("open_article_element");
    article_click2.classList.toggle("article_element");

    article_click2.scrollIntoView();

}); */


/*      Get the article ++ Change background of article while OPEN */



// Close article content // page button..                               BUTTON CLOSE ==    START   ==

/* // Get button`s
var article_1_btn_close = document.getElementById("close_article_1_btn");
var article_2_btn_close = document.getElementById("close_article_2_btn");
var article_3_btn_close = document.getElementById("close_article_3_btn");
var article_4_btn_close = document.getElementById("close_article_4_btn");

// Add button CLICKED EventListener.. 
article_1_btn_close.addEventListener('click', close_article);
article_2_btn_close.addEventListener('click', close_article);
article_3_btn_close.addEventListener('click', close_article);
article_4_btn_close.addEventListener('click', close_article);

function close_article(e) {
    console.log("Button CLOSE_ARTICLE clicked..")
    e.currentTarget.parentElement.classList.remove("active");
    e.currentTarget.parentElement.classList.add("article_element");
    e.currentTarget.parentElement.classList.add("selected_article");
};
 */
//                                                                        BUTTON CLOSE ==   END   ==




// OPEN CARD CODE BACKUP....
/* // Articles individual + button CLOSE
var article1 = document.getElementById('article_1');
var article2 = document.getElementById('article_2');
var article3 = document.getElementById('article_3');
var article4 = document.getElementById('article_4');

article1.addEventListener('click', toggle);
article2.addEventListener('click', toggle);
article3.addEventListener('click', toggle);
article4.addEventListener('click', toggle);



function toggle(e) {
    
    console.log("hello, function Toggle() is starting...");

    if (this.classList.contains("active")) {
        console.log("IF statement started, article element contains: ACTIVE class");

        
        this.classList.toggle("active");
        this.classList.toggle("article_element");
        this.classList.toggle("selected_article");
        this.scrollIntoView(true);
       // article_container_bg.style.background = "#3E5A80";

        


    } else {
        console.log("ELSE statement, no ACTIVE class..");
            this.style.backgroundColor = "white";
            //article_container_bg.style.backgroundColor = "white";
            this.classList.toggle("article_element");
            this.classList.toggle("selected_article");
            this.classList.toggle("active");
            this.scrollIntoView(true);
        //this.style.backgroundColor = "#3E5A80";
    };
};


 */







// Test av selectores underveis         IKKE BRUKES                             XXX Referanse bare === Logikk ===***

/* var show_info = document.querySelector(".profiles");
var show_info_paragraph = document.querySelector(".show_info_profile");

show_info.addEventListener("mouseover", function(event) {
    show_info_paragraph.setAttribute("style", "display:inline;")
}, false);

show_info.addEventListener("mouseout", function(event) {
    show_info_paragraph.setAttribute("style", "display:none;")
}, false); */

