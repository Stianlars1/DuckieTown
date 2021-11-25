// DARK MODE

//Button 
var darkmode_button_index_html = document.getElementById("darkmode_btn");
darkmode_button_index_html.addEventListener('click', changeStatus);



// set darkmode to false...
if (localStorage.getItem('darkmode') === null) {
    localStorage.setItem('darkmode', "false")
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

        // removing button class for pseudo element 
        darkmode_button_index_html.classList.remove("dot_switch")
        // adding dot_switch_on which is the green button for togglef ON symbol..
        darkmode_button_index_html.classList.add("dot_switch_on")
    }
        //  if local storage is false (which it is since we put it to false as Default => remove darkclass, lightmode is active (deafult)
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
    if (localStorage.getItem('darkmode') === "true"){   // when clicked on button. if the localstorage for darkmode is:  "darkmode": "true", toggle off...
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



var mobile_nav = document.getElementById("mobile_nav");


var mobile_links = document.getElementsByClassName("mobile_nav_links");
Array.from(mobile_links).forEach(element => element.addEventListener('click', (event) => {
    mobile_nav.classList.toggle('hide_nav');
    console.log("clicked hehe");

}))




var nav_menu_button = document.getElementsByClassName("burger");

Array.from(nav_menu_button).forEach((event) =>  {
    event.addEventListener('click', (e) => {
        console.log("clicked hehe");
        var element = e.currentTarget;
        mobile_nav.classList.toggle('hide_nav');
    
    })

})

var back_to_mob = document.getElementsByClassName("back_from_mobile");
Array.from(back_to_mob).forEach(element => element.addEventListener('click', (event) => {
    mobile_nav.classList.toggle('hide_nav');
    console.log("clicked hehe");

}))
