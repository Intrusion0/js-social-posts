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

1. Creo un array di oggetti contenente i vari post. => const socialPosts = [{}];
    1.2 Inserisco le varie proprietà nei singoli oggetti => {x: y ecc..};
2. Stampo l'array di oggetti in pagina.
    2.1 Scorro all'interno dell'array di oggetti => for in --- for (let key in socialPosts);
    2.2 Salvo le informazioni di un oggetto in una variabile => let {x, y, z} = socialPosts[key];
    2.3 Stampo in pagina le varie informazioni => .innerHTML +=;
3. Creo un evento sul pulsante "Mi Piace" => pulsante.AddEventListner('click', function(){})
    3.1 Al click quindi aggiungerò una classe che colorerà il pulsante => y.Classlist.add(x);
    3.2 Al click incrementerò di 1 il numero totale di "Mi Piace"; => socialPosts.likes + 1 ???;
    3.3 Una volta cliccato il pulsante una volta lo disabiliterò => x.setAttribute('disabled', true)

*/

let contPost = document.getElementById('container');

// TEST IMG CASUALE
contPost.innerHTML += `<img src=https://unsplash.it/550/300?image=>`;