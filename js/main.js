/*
Ricreiamo un feed social aggiungendo al layout di base fornito, il nostro javascript in cui:
- Creiamo il nostro array di oggetti che rappresentano ciascun post.
Ogni post dovrà avere le informazioni necessarie per stampare la relativa card:
nome autore,
foto profilo,
data,
testo del post,
immagine (non tutti i post devono avere una immagine) [quindi gestisco il caso],
numero di likes.
- Prendendo come riferimento il layout di esempio presente nell’html, stampiamo i post del nostro feed.
- Rendiamo il tasto “Mi Piace” cliccabile con incremento del counter dei likes.
*/

/*

--DONE  1. Creo un array di oggetti contenente i vari post. => const socialPosts = [{}];
    --DONE  1.2 Inserisco le varie proprietà nei singoli oggetti => {x: y ecc..};
-DONE   2. Stampo l'array di oggetti in pagina.
    --DONE  2.1 Scorro all'interno dell'array di oggetti => for in --- for (let key in socialPosts);
    --DONE  2.2 Salvo le informazioni di un oggetto in una variabile => let {x, y, z} = socialPosts[key];
    --DONE  2.3 Stampo in pagina le varie informazioni => .innerHTML +=;
--DONE  3. Creo un evento sul pulsante "Mi Piace" => pulsante.AddEventListner('click', function(){})
    --DONE  3.1 Al click quindi aggiungerò una classe che colorerà il pulsante => y.Classlist.add(x);
    --DONE  3.2 Al click incrementerò di 1 il numero totale di "Mi Piace"; => socialPosts.likes + 1 ???;
    --DONE  3.3 Una volta cliccato il pulsante una volta lo disabiliterò => x.setAttribute('disabled', true)

*/

const socialPosts = [
    {
        'authorName' : 'Mario Lombardo' ,
        'profilePicture' : 'https://unsplash.it/300/300?image=',
        'date' : '1 giorno fa',
        'textPost' : 'Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae archirecto. Et nihil ullam aut alias.',
        'picture' : 'https://unsplash.it/600/300?image=',
        'numLikes' : 174
    },
    {
        'authorName' : 'Filippo Palermo' ,
        'profilePicture' : 'https://unsplash.it/300/300?image=',
        'date' : '20 giorni fa',
        'textPost' : 'Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae archirecto. Et nihil ullam aut alias.',
        'picture' : 'https://unsplash.it/600/300?image=',
        'numLikes' : 95
    },
    {
        'authorName' : 'Martina Catalano' ,
        'profilePicture' : 'https://unsplash.it/300/300?image=',
        'date' : '1 mese fa',
        'textPost' : 'Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae archirecto. Et nihil ullam aut alias. Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Placeat libero ipsa nobis ipsum quibusdam quas harum ut.',
        'picture' : '',
        'numLikes' : 10
    },
    {
        'authorName' : 'Giulia Bianco' ,
        'profilePicture' : 'https://unsplash.it/300/300?image=',
        'date' : '3 mesi fa',
        'textPost' : 'Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae archirecto. Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Et nihil ullam aut alias.',
        'picture' : 'https://unsplash.it/600/300?image=',
        'numLikes' : 16
    },
    {
        'authorName' : 'Giuseppe Perlari' ,
        'profilePicture' : 'https://unsplash.it/300/300?image=',
        'date' : '10 ore fa',
        'textPost' : 'Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Ad ad maiores et sint voluptate recusandae archirecto. Et nihil ullam aut alias.',
        'picture' : '',
        'numLikes' : 15
    },
    {
        'authorName' : 'Simone Mangione' ,
        'profilePicture' : 'https://unsplash.it/300/300?image=',
        'date' : '5 minuti fa',
        'textPost' : 'Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae archirecto. Et nihil ullam aut alias.',
        'picture' : 'https://unsplash.it/600/300?image=',
        'numLikes' : 49
    },
    {
        'authorName' : 'Flavio Pirandello' ,
        'profilePicture' : 'https://unsplash.it/300/300?image=',
        'date' : '3 anni fa',
        'textPost' : 'Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae archirecto. Et nihil ullam aut alias. Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Placeat libero ipsa nobis ipsum quibusdam quas harum ut.',
        'picture' : 'https://unsplash.it/600/300?image=',
        'numLikes' : 58
    }
];

let contPosts = document.getElementById('container');
addPosts();

// FUNZIONI
function addPosts() {
    
    contPosts.innerHTML = '';
    for (let key in socialPosts) {
        let {authorName, profilePicture, date, textPost, picture, numLikes} = socialPosts[key];

        contPosts.innerHTML += `
        <div class="post">
            <div class="post__header">
                <div class="post-meta">                    
                    <div class="post-meta__icon">
                        <img class="profile-pic" src="${profilePicture}" alt="${authorName}">                    
                    </div>
                    <div class="post-meta__data">
                        <div class="post-meta__author">${authorName}</div>
                        <div class="post-meta__time">${date}</div>
                    </div>                    
                </div>
            </div>
            <div class="post__text">${textPost}</div>
            <div class="post__image">
                <img src="${picture}" alt="">
            </div>
            <div class="post__footer">
                <div class="likes js-likes">
                    <div class="likes__cta">
                        <a class="like-button  js-like-button" href="#" data-postid="${key}">
                            <i class="like-button__icon fas fa-thumbs-up" aria-hidden="true"></i>
                            <span class="like-button__label">Mi Piace</span>
                        </a>
                    </div>
                    <div class="likes__counter">
                        Piace a <b id="like-counter-1" class="js-likes-counter">${numLikes}</b> persone
                    </div>
                </div> 
            </div>            
        </div>`
        console.log(numLikes);
    }
    return contPosts;
}
    
let buttonsLikes = document.querySelectorAll('.like-button');
console.log(buttonsLikes);

let likeCounter = document.querySelectorAll('.js-likes-counter');
console.log(likeCounter);

for (let i = 0; i < socialPosts.length; i++) {

    const baseLike = socialPosts[i].numLikes;
    buttonsLikes[i].addEventListener('click', function(event) {
        event.preventDefault();

        if (likeCounter[i].innerHTML == baseLike) {
            socialPosts[i].numLikes++;
            likeCounter[i].innerHTML++;
            console.log(socialPosts[i].numLikes);
        } else {
            socialPosts[i].numLikes--;
            likeCounter[i].innerHTML--;
            console.log(socialPosts[i].numLikes);
        }
    
        buttonsLikes[i].classList.toggle('like-button--liked');
    });
}


// VERSIONE ADRIANO E LORIS -- FUNZIONA SOLO AL PRIMO CLICK

// buttonsLikes[i].addEventListener("click", function(e) {
//     e.preventDefault();
//     buttonsLikes[i].classList.toggle("like-button--liked");
//     const index = this.getAttribute('data-postid');
//     console.log(index);
//     socialPosts[index].numLikes++;

//     addPosts();
// });