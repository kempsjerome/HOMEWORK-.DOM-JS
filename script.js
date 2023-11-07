// Créez un élément <img>
let image = document.createElement("img");

// Définissez l'attribut src avec l'URL de l'image
image.src = "camera.png";

// Ajoutez l'élément <img> à un conteneur existant (par exemple, le corps de la page)
document.body.appendChild(image);


let image2 = document.createElement("img");
image2.classList.add("logo")

// Définissez l'attribut src avec l'URL de l'image
image2.src = "logo.png";

// Ajoutez l'élément <img> à un conteneur existant (par exemple, le corps de la page)
document.body.appendChild(image2);


//           intro
// Sélectionnez l'élément body
let body = document.querySelector("body");

// Créez un élément <main>
let main = document.createElement("main");



    //////// VIdafRUTa

    //paragraf tag p
let paraf = document.createElement("p");
paraf.classList.add("paraf");  // nou bal yon class
let text = 'VidaFruita';

// span pou vida
let spanVida = document.createElement("span");
spanVida.style.color = "red";  ///nou bal yon style  koule
spanVida.textContent = text.substring(0, 4); // "Vida"  nou di ke text ki nan span vida ap egal text ki nan varyab ki egal "vidafruta"men lap retire 4 let pou vida

// Créez un élément <span> pour "Fruita" avec un style gras
let spanFruita = document.createElement("span");
spanFruita.style.fontWeight = "bold";
spanFruita.textContent = text.substring(4); // "Fruita"

paraf.appendChild(spanVida);
paraf.appendChild(spanFruita);

// Ajoutez l'élément <p> à un conteneur existant (par exemple, le corps de la page)
document.body.appendChild(paraf);
            /// vida fruta fin




// Ajoutez l'élément <p ki se paraf> à l'élément <main>
main.appendChild(paraf);

// Ajoutez l'élément <main> au body
body.appendChild(main);


                   //1

// Créez un élément <ul>
let ul = document.createElement("ul");
ul.classList.add('listProduit');
// Créez un élément <li>
let li = document.createElement("li");

// Créez un élément <p> contenant le texte "Banana"
let p1 = document.createElement("p");
let textP1 = document.createTextNode("Banana");
p1.appendChild(textP1);

// Ajoutez l'élément <p> à l'élément <li>
li.appendChild(p1);

// Ajoutez l'élément <li> à l'élément <ul>
ul.appendChild(li);
main.appendChild(ul);

          //2

// Créez un élément <li>
let li2 = document.createElement("li");
// Créez un élément <p> contenant le texte "morango"
let p2 = document.createElement("p");
let textP2 = document.createTextNode("Morango");
p2.appendChild(textP2);
// Ajoutez l'élément <p> à l'élément <l2>
li2.appendChild(p2);
// Ajoutez l'élément <li> à l'élément <ul2>
ul.appendChild(li2);

          //3
let li3 = document.createElement("li");
let p3 = document.createElement("p");
let textP3 = document.createTextNode("gengembre");
p3.appendChild(textP3);
li3.appendChild(p3);
ul.appendChild(li3);

          //4

let li4 = document.createElement("li");
let p4 = document.createElement("p");
let textP4 = document.createTextNode("Pasta de Tomato");
p4.appendChild(textP4);
li4.appendChild(p4);
ul.appendChild(li4);
//


            //kreyasyon button 1
let button = document.createElement("button");///// kreyasyon yon bouton
button.classList.add("buttonLog");   // nou bal yon klas  konm nom

let textButton = document.createTextNode("loging");    //// yon tect pouki ekri nan bouton an
button.appendChild(textButton);    //  la ou antre text ou kreye a nan bouton an

// Sélectionnez l'élément avec la classe "main"
let mainElement = document.querySelector("main"); // Utilisez "querySelector" pour sélectionner l'élément main.

// Ajoutez le bouton à l'élément "main"
body.appendChild(button);

                  //bouton 2
let button2 = document.createElement("button");///// kreyasyon yon bouton
button2.classList.add("buttonEnd");   // nou bal yon klas  konm nom

let textButton2 = document.createTextNode("choisir");    //// yon tect pouki ekri nan bouton an
button2.appendChild(textButton2);    //  la ou antre text ou kreye a nan bouton an

// Sélectionnez l'élément avec la classe "main"
let mainElement1 = document.querySelector("main"); // Utilisez "querySelector" pour sélectionner l'élément main.

// Ajoutez le bouton à l'élément "main"
mainElement.appendChild(button2);





