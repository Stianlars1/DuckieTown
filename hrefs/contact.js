// DARK MODE

var maiin = document.getElementById('main');



if (localStorage.getItem('darkmode') === null) {
    localStorage.setItem('darkmode', "false")
}

checkStatus() 


function checkStatus(){
    if (localStorage.getItem('darkmode') === "true") {
        console.log("dark mode is on from the first page ;) ")

        // sette bakgrunner og tekst til body
        document.body.classList.add('darkclass');
        document.body.style.backgroundColor = "#242424";
        maiin.classList.add("darkclass");

        
    } else {
        console.log("Darkmode not toggled // test");
        // knappen bytter element
        document.body.classList.remove('darkclass');
        document.body.style.backgroundColor = "";
        
        
    }
}




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
