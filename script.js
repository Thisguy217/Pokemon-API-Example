async function pokemonSearch() 
{
	let query = document.getElementById('input').value;
	name = query.toLowerCase().trim();
	console.log(name);
	var pokemonName;
	var pokemonData = new Array();
	await fetch(("https://pokeapi.co/api/v2/pokemon/" + name))
		.then(res => res.json())
		.then(pokemonJSON => {
			console.log(Object.keys(pokemonJSON));
			pokemonName = pokemonJSON['name'];
			pokemonData[0] = pokemonJSON['types'][0]['type']['name'];
			pokemonData[1] = pokemonJSON['types'].length === 2 ? pokemonJSON['types'][1]['type']['name'] : '';
		}
	);
	console.log(pokemonName);
	console.log(pokemonData[0]);
	console.log(pokemonData[1]);


	document.getElementById('name').textContent = `${pokemonName}`;
	document.getElementById('pokemonTypeNum1').textContent = `${pokemonData[0]}`;
	document.getElementById('pokemonTypeNum2').textContent = `${pokemonData[1]}`;
	
}