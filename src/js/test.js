console.log('Hello from main.js!');

function synchronousFunction() {
    let number = 1;
    for(let i = 1; i < 100000; i++){
      number += i;
      console.log('synchronousFunction running');
    }
    console.log('regular function complete', number);
  }

function synchronousFunction2() {
    console.log('MIKÄKESTI');
  }

//synchronousFunction();
//synchronousFunction2();


// TEHDÄÄN HTTP PYYNTÖ 
  fetch('https://api.restful-api.dev/objects')
	.then((response) => {
        console.log(response);
		if (!response.ok) {
			throw new Error('Verkkovastaus ei ollut kunnossa');
		}
		return response.json();
	})
	.then((data) => {
		console.log(data);
	})
	.catch((error) => {
		console.error('Fetch-operaatiossa ilmeni ongelma:', error);
	});




// TEHDÄÄN MODERNIMPI TAPA HAKEA
const getData = async () => {
    try {
        //tehdään pyyntö http get 
        const response = await fetch('https://api.restful-api.dev/objects');
        console.log(response);
        //muutetaan vastaus json muotoon
        const data = await response.json();
        console.log(data);
        console.log(data.value);
    } catch (error) {
        console.error('Virhe:', error);
    }
}

export { getData };
