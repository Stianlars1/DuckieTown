/* Elements // title, article text + submit button */
var input_title = document.getElementById("editor_title");
var input_article = document.getElementById("editor_article_input");
var editor_submit = document.getElementById("article_editor_button");


var articles_wrapper = document.getElementById("articles_wrapper");


editor_submit.addEventListener('click', submit, false);

function submit(e) {
    console.log("hello, clicked :)");

    // create <article> </article>
    article_element = document.createElement("article");

    // create <h2> </h2>
    article_title = document.createElement("h2");

    // get title
    input_title_submit = input_title.innerText;

    // add input Title to H2 title <h2> innertext.sample </h2>
    article_title.innerText(input_title_submit);

    // parent ARTICLE gets == h2 added.
    article_element.appendChild(article_title);

    articles_wrapper.appendChild(article_element);
};
