var show_info_robot = document.getElementById("autonom_lesmer");
var buy_now_robot = document.getElementById("buy_now_robot");

var h3_link = document.getElementById("more_info_titles");
var h2_link = document.getElementById("assi_title");

let hidden_content = document.getElementById('hidden_info_robot');

show_info_robot.addEventListener('click', (e) => {
    
    hidden_content.classList.toggle('skjul');

    if (hidden_content.classList.contains("skjul")) {
        show_info_robot.innerText = "les mer";

        setTimeout((e) => {
            h2_link.scrollIntoView(true);
        }, 320)
    } else {
        show_info_robot.innerText = "les mindre"
        setTimeout((e) => {
            h3_link.scrollIntoView(true);

        }, 320)
    };
    
    
});


buy_now_robot.addEventListener('click', (e) => {
    location.href = "https://www.stianlarsen.com/hrefs/kjop.html";
    console.log("clicked object: ", e.currentTarget, "\nRedirecting to buy page.");
});



/* var list_of_show_pics = document.getElementsByClassName("robot_product_showroom");

Array.from(list_of_show_pics).forEach((event) => {
    event.addEventListener('click', (e) => {
        event.classList.toggle("robot_product_showroom_active");
        event.classList.toggle("robot_product_showroom");
    })
}); */


var list_of_pics = document.getElementsByClassName("showroom_item");


// Dark &::BEFORE BEFORE bg OPACITY 0.5 => 0 when HOVER.. mouseenter..
var showroom_wrapper = document.getElementsByClassName("showroom");
for (var i = 0; i < showroom_wrapper.length; i++) {
    showroom_wrapper[i].addEventListener('mouseover', (e) => {
        
        e.currentTarget.classList.remove("showroom_overlay_bg");

    })

    showroom_wrapper[i].addEventListener('mouseout', (e) => {
    
        e.currentTarget.classList.add("showroom_overlay_bg");

    })
}

// When a specific picture is HOVERING, the cursor changes to pointer..
Array.from(list_of_pics).forEach((element) => {
    element.addEventListener('mouseover', (event) => {
        element.classList.add('cursoor');
    }, false);
})



// Main product photo of the robot + with array of the smaller childs READY for preview..
var showroom_main_preview = document.getElementById("showroom_preview");
/* showroom_main_preview.addEventListener('click', (e) => {
    const saved = "https://www.stianlarsen.com/pictures/showroom/robot_butikk.png";
    showroom_main_preview.src = saved;

}) */

// Change graphic main SHOWING pictures (main viewing pic) => changes..
Array.from(list_of_pics).forEach((element) => {
    element.addEventListener('click', (event) => {
        console.log("clicked")
        var original_src = showroom_main_preview.src;
        const saved = "https://www.stianlarsen.com/pictures/showroom/robot_butikk.png";

        if (original_src === "https://www.stianlarsen.com/pictures/showroom/robot_butikk.png" || "http://127.0.0.1:5500/pictures/showroom/robot_butikk.png") {
            console.log("worked!");
            let current_src_img = element.src;
            showroom_main_preview.src = current_src_img;

        } else {
            console.log(original_src);
            showroom_main_preview.src = saved;
        }

        
        // 

        element.classList.add('cursoor');
    }, false);
})






var mobile_nav = document.getElementById("mobile_nav");


var mobile_links = document.getElementsByClassName("mobile_nav_links");
Array.from(mobile_links).forEach(element => element.addEventListener('click', (event) => {
    mobile_nav.classList.toggle('hide_nav');
    console.log("clicked hehe nav link");

}))




var nav_menu_button = document.getElementsByClassName("burger");

Array.from(nav_menu_button).forEach((event) =>  {
    event.addEventListener('click', (e) => {
        console.log("clicked hehe button burger");
        var element = e.currentTarget;
        mobile_nav.classList.toggle('hide_nav');
    
    })

})

var back_to_mob = document.getElementsByClassName("back_from_mobile");
Array.from(back_to_mob).forEach(element => element.addEventListener('click', (event) => {
    mobile_nav.classList.toggle('hide_nav');
    console.log("clicked hehe");

}))





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
function checkStatus() {

    // if localstorgage darkmode is true => add darkmode classes.
    if (localStorage.getItem('darkmode') === "true") {
        // knappen bytter element


        // sette bakgrunner og tekst til body
        document.body.classList.add('darkclass');
        document.body.style.backgroundColor = "#242424";
/*         article_container_bg.style.backgroundColor = "transparent";
 */
        

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
    if (localStorage.getItem('darkmode') === "true"){   
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

    }else {
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

