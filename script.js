/*
* 			ARRAYS
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

// 		Array för tidigare använda
let usedIndex = [];

/*
*		DOM och declarations
*/

const buttonEl = document.querySelector('#button-container');
const imgEl = document.querySelector('#img');
const startAndScoreEl = document.querySelector('#startAndScore');
const cardEl = document.querySelector('.card');

let guesses = 0;
let correctGuesses = 0;
let highscore = 0;


/*
*		FUNKTIONER
*/

//		Slumpfunktion
const shuffleArray = (array) => {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
	return array;
};

let randomStudents = students.map(student => shuffleArray(student));
let correctStudent = randomStudents[0];

//		Bild-generator
const imageGenerator = () => imgEl.setAttribute( "src", correctStudent.image);

//		Knapp-generator
const renderButtons = () => {
	// Array med alternativen
	const alternatives = randomStudents.slice(0, 4);

	// Array med slumpade alternativ
	const randomAlternatives = shuffleArray(alternatives);

	// Generera fyra knappar med slumpade alternativ
	randomAlternatives.forEach(alternative => {
		if (alternative === correctStudent) {
			buttonEl.innerHTML += `
				<button id="correct" class="button col-5 btn-lg m-2 mw-100 btn-primary">${alternative.name}</button>
			`;
		} else {
			buttonEl.innerHTML += `
				<button class="button col-5 btn-lg m-2 mw-100 btn-primary">${alternative.name}</button>
			`;
		}
	});

	let clicks = document.querySelectorAll('.button')
	clicks.forEach((click, e) => {
		click.addEventListener('click', correctOrNot)
	});
};

//		Rendera start-knapp
const renderStartGameButton = () => {
	startAndScoreEl.innerHTML = `
		<button id="start" class="button btn btn-warning">Starta spelet!</button>
	`;

	document.querySelector('#start').addEventListener('click', e => { 
		e.target.classList.add('d-none');
		cardEl.classList.remove('d-none');
		gameplayFunction(e);
	});
};

//		Rättningsfunktion till varje guess/spelomgång
const correctOrNot = (e) => {
	if (e.target.innerText === correctStudent.name) {
		correctGuesses++;
		randomStudents.shift();
	}
	gameplayFunction();
};

//		funktion för en spelrunda
const gameRound = () => {
	//	Blanda om och välj ny correct student
	shuffleArray(randomStudents);
	correctStudent = randomStudents[0];
	//	Generera ny bild
	imageGenerator();
	//	Knappelementet och generera nya alternativ
	buttonEl.innerHTML = "";
	renderButtons();
};

//		Slutskärm-funktion
const endGame = () => {
	// Göm gameplay-innehåll
	buttonEl.classList.add('d-none');
	cardEl.classList.add('d-none');
	startAndScoreEl.classList.remove('d-none');

	if (correctGuesses > highscore) {
		highscore = correctGuesses;
	}

	//genera score och resetknapp
	startAndScoreEl.innerHTML = "";
	startAndScoreEl.innerHTML = `
		<h2>Slut på spelet!</h2> 
		<p>Du hade ${correctGuesses} av ${guesses} rätt. </p>
		<p>Ditt nuvarande rekord är ${highscore} rätt. </p>
		<button id="restart" class="button btn btn-warning">Spela igen!</button>
	`;

	// const restartButton = document.querySelector('#restart');
	document.querySelector('#restart').addEventListener('click', e => { 
		guesses = 0;
		correctGuesses = 0;

		randomStudents = shuffleArray(students);

		startAndScoreEl.classList.add('d-none');
		buttonEl.classList.remove('d-none');
		cardEl.classList.remove('d-none');
		gameplayFunction(e);
	});
};

//		gameplayfunktion
const gameplayFunction = (e) => {
	if (guesses < 10) {
		gameRound(e);
		guesses++;
	} else {
		endGame(e);
	}
};

renderStartGameButton();











/*	Anteckningar

- Gör klart själva spelfunktionen.
	() gör så reset-knappen funkar
	() fixa räknaren för rätt svar och antal omgångar
	() Välj hur långt spelet ska vara.
	(x) En "slutskärm" med antal rätt/fel svar.
	(x) En spela-igenknapp.



- förhindra repetion av bilder.

*/