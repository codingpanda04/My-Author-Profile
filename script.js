const home = document.getElementById("home");
const books = document.getElementById("books");
const contact = document.getElementById("contact");
const bookList = document.querySelector(".book-list");

function displayList(){
    home.classList.remove("active");
    books.classList.add("active");
    contact.classList.remove("active");
    bookList.style.display = "block";
}

function homePage(){
    home.classList.add("active");
    books.classList.remove("active");
    contact.classList.remove("active");
    bookList.style.display = "none";
}

function contactPage(){
    home.classList.remove("active");
    books.classList.remove("active");
    contact.classList.add("active");
    bookList.style.display = "none";
}


function changeJobTitle(){
    let job = document.getElementById("job");
    let place = document.getElementById("place");

    setTimeout(() => {
        job.innerHTML = "Author";
        place.innerHTML = "Webnovel";
    }, 15000);

    setTimeout(() => {
        job.innerHTML = "Ghostwriter";
        place.innerHTML = "Upwork";
    }, 10000);

    setTimeout(() => {
        job.innerHTML = "AE";
        place.innerHTML = "Webnovel";
    }, 5000);
}

setInterval(() => {
    changeJobTitle();
}, 20000);


function tarBook(){
    let bookImg = document.getElementById("book");
    let bookTitle = document.getElementById("title");
    let bookSynopis = document.getElementById("synopsis");
    let bookLink = document.getElementById("link");

    setTimeout(() => {
        bookImg.setAttribute("src", "images/The Assassin's Redemption.jpeg");
        bookTitle.innerHTML = "The Assassin's Redemption: A Princess's Journey To Forgiveness";
        bookSynopis.innerHTML = "It started as a tale, then turned into a prophecy, told for ages but no one believed it would actually turn to be true. Bound only to the Crescian royal family, everyone else took it as an adage, before it turned to a whisper. But when least expected, the Prophecy of The One was manifested. Crown prince Alexander of Valoria and princess Isadora of Crescia, brought together by fate, or is it destiny, to fulfill the foreseen prophecy. Together, they must strive to fight for what is right even when the differences between their kingdoms come in between.Join me in this pack field adventure of vengeance, love, war and destiny."
        bookLink.setAttribute("href", "https://www.webnovel.com/book/the-assassin's-redemption-a-princess's-journey-to-forgiveness_25780022505883505");
    }, 5000);

    setTimeout(() => {
        bookImg.setAttribute("src", "images/The Fugitive Princess.jpeg");
        bookTitle.innerHTML = "The Fugitive Princess";
        bookSynopis.innerHTML = "WARNING: MATURE CONTENT! Aria's POV: The world had given nothing but cruelty to me. Being a princess might sound a good idea, but trust me, it's not.I grew up living in fear of myself, a discovery of what I might be. A discovery that costed the absence of my mother in my childhood. Instead, my father, a cold hearted man, raised me. I thought he hated me but he was trying to protect me from the same cruel world that snatched his wife. And then he came into my life, a guiding light in the darkness. A missing puzzle that made me complete. Leon, my personal knight! If he was an angel or a devil in disguise, that, I didn't know!";
        bookLink.setAttribute("href", "https://www.webnovel.com/book/the-fugitive-princess_24492241506957205");
    }, 10000);

    setTimeout(() => {
        bookImg.setAttribute("src", "images/A Bastard's Allure.png");
        bookTitle.innerHTML = "A Bastard's Allure";
        bookSynopis.innerHTML = "He wanted to be accepted for who he was; a bastard. But the world was a cruel place for bastards, especially in the vampire realm of Eldoria.            A vampire prince, born a bastard, was a disgrace not only to the royal family but the realm at large. And for that, Gabriel Sinclair grew up in harsh environs within the very castle his brother considered heaven. And as if being bastard was not enough wound to scar him and put him miles away from the throne, they made marry a human to seal the treaty between the two warring species. Elena Thornhart always dreamt of venturing beyond the walls of Mysthaven. Since childhood, she had been confined in the castle of Mysthaven, safe from the vampire's reach.But not everything goes as planned. In an effort to save the nearly extinct human population, Andrian Thornhart, the human king and Elena's brother, offers her as the sacrificial lamb. Now Elena must navigate the treacherous Vampire court and royal family and protect her husband from his own kind. Little does she know her presence is set to unleash a side of Gabriel Sinclair that he never knew existed, a secret that might set the realm apart or unite it!";
        bookLink.setAttribute("href", "https://www.webnovel.com/book/a-bastard's-allure_29408191908838805");
    }, 15000);
}

setInterval(() => {
    tarBook();
}, 20000);