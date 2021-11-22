/*
*			Studentarrays
*/
const students = [
	{
		"name" : "Adi Dzocaj",
		"image": "assets/images/students/adi-dzocaj.jpg"
	},
	{
		"name" : "Alexander Bergquist",
		"image": "assets/images/students/alexander-bergquist.jpg"
	},
	{
		"name" : "Alexander Kocman",
		"image": "assets/images/students/alexander-kocman.jpg"
	},
	{
		"name" : "Benjamin Benson",
		"image": "assets/images/students/benjamin-benson.jpg"
	},
	{
		"name" : "Benjamin Tsubarah",
		"image": "assets/images/students/benjamin-tsubarah.jpg"
	},
	{
		"name" : "Calle Nilsson",
		"image": "assets/images/students/calle-nilsson.jpg"
	},
	{
		"name" : "Chikage Takahashi Molander",
		"image": "assets/images/students/chikage-takahashi-molander.jpg"
	},
	{
		"name" : "Daniel Be",
		"image": "assets/images/students/daniel-be.jpg"
	},
	{
		"name" : "Daniel Carlsson",
		"image": "assets/images/students/daniel-carlsson.jpg"
	},
	{
		"name" : "Elin Ahlgren",
		"image": "assets/images/students/elin-ahlgren.jpg"
	},
	{
		"name" : "Emma Käck",
		"image": "assets/images/students/emma-kack.jpg"
	},
	{
		"name" : "Eric Ståhl",
		"image": "assets/images/students/eric-stahl.jpg"
	},
	{
		"name" : "Frans Gustavson Påsse",
		"image": "assets/images/students/frans-gustavson-passe.jpg"
	},
	{
		"name" : "Glafira Veretennikova",
		"image": "assets/images/students/glafira-veretennikova.jpg"
	},
	{
		"name" : "Gustaf Grönlund",
		"image": "assets/images/students/gustaf-gronlund.jpg"
	},
	{
		"name" : "Hanna Håkanson",
		"image": "assets/images/students/hanna-hakanson.jpg"
	},
	{
		"name" : "Heidi Sjöberg",
		"image": "assets/images/students/heidi-sjoberg.jpg"
	},
	{
		"name" : "Hugo Carzborn",
		"image": "assets/images/students/hugo-carzborn.jpg"
	},
	{
		"name" : "Jesper Kling",
		"image": "assets/images/students/jesper-kling.jpg"
	},
	{
		"name" : "Johan Ranestam",
		"image": "assets/images/students/johan-ranestam.jpg"
	},
	{
		"name" : "Johanna Bäckström",
		"image": "assets/images/students/johanna-backstrom.jpg"
	},
	{
		"name" : "Johanna Jönsson",
		"image": "assets/images/students/johanna-jonsson.jpg"
	},
	{
		"name" : "Jona Torsson",
		"image": "assets/images/students/jona-torsson.jpg"
	},
	{
		"name" : "Josefine Ahlstedt",
		"image": "assets/images/students/josefine-ahlstedt.jpg"
	},
	{
		"name" : "Julia Jespersdotter Högman",
		"image": "assets/images/students/julia-jespersdotter-hogman.jpg"
	},
	{
		"name" : "Julia Nemell",
		"image": "assets/images/students/julia-nemell.jpg"
	},
	{
		"name" : "Linus Lindberg",
		"image": "assets/images/students/linus-lindberg.jpg"
	},
	{
		"name" : "Malin Olsson",
		"image": "assets/images/students/malin-olsson.jpg"
	},
	{
		"name" : "Maria Haara-Lundhammar",
		"image": "assets/images/students/maria-haara-lundhammar.jpg"
	},
	{
		"name" : "Maria Lövgren",
		"image": "assets/images/students/maria-lovgren.jpg"
	},
	{
		"name" : "Nikola Dimitrijoski",
		"image": "assets/images/students/nikola-dimitrijoski.jpg"
	},
	{
		"name" : "Paulina Kiendys",
		"image": "assets/images/students/paulina-kiendys.jpg"
	},
	{
		"name" : "Raymond Lam",
		"image": "assets/images/students/raymond-lam.jpg"
	},
	{
		"name" : "Robin Karlsson",
		"image": "assets/images/students/robin-karlsson.jpg"
	},
	{
		"name" : "Sara Almqvist",
		"image": "assets/images/students/sara-almqvist.jpg"
	},
	{
		"name" : "Tim Nilsson",
		"image": "assets/images/students/tim-nilsson.jpg"
	},
	{
		"name" : "Tirapat Sukjit",
		"image": "assets/images/students/tirapat-sukjit.jpg"
	},
	{
		"name" : "Tobias Silfverberg",
		"image": "assets/images/students/tobias-silfverberg.jpg"
	},
	{
		"name" : "Wiktoria Dobrzewinska",
		"image": "assets/images/students/wiktoria-dobrzewinska.jpg"
	}
];

// Array att spara använda bilder i
let usedIndex = [];


/*
*		Slumpfunktion
*/
const shuffleArray = (array) => {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
	return array;
}

shuffleArray(students);
let randomCorrectStudent = students[0];


/*
*		Bild-generator
*/
const imgEl = document.querySelector('#img');

let imageGenerator = () => imgEl.setAttribute( "src", randomCorrectStudent.image);

imageGenerator();


/*
*			DOM
*/

let guesses = 0;
let correctGuesses = 0;

const testFunc = (e) => {
		guesses++;

		if (e.target.innerText === randomCorrectStudent.name) {
			correctGuesses++;

			usedIndex.push(randomCorrectStudent);
		}


		shuffleArray(students);
		randomCorrectStudent = students[0];
		imageGenerator();

		document.querySelector('.row').innerHTML = "";
		renderButtons();
}



/*
*		Knapp-generator
*/
let renderButtons = () => {

	// Array med alternativen
	const alternatives = [randomCorrectStudent, students[1], students[2], students[3]];

	const randomAlternatives = shuffleArray(alternatives);

	randomAlternatives.forEach(alternative => {
		document.querySelector('.row').innerHTML += `
			<button class="button col-sm m-sm-3 btn-primary btn-lg">${alternative.name}</button>
		`
	});

	let clicks = document.querySelectorAll('.button')
	clicks.forEach(click => {
		click.addEventListener('click', testFunc)
	});
}

renderButtons();
