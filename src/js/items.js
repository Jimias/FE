// oman rajapinnan kutsu
import { fetchData } from "./fetch";

//const getItems = async () => {
//    try {
//      const response = await fetch('http://127.0.0.1:3000/api/items');
//        console.log(response);
//        const data = await response.json();
//        console.log("Haetaan omasta rajapinnasta items!");
//        console.log(data);
//        data.forEach(element => {
//            //jokainen rivi
//            console.log(element);
//            //jokaisen rivin yksittäiset tiedot
//            console.log(element.name);
//        });
//    } catch (error) {
//        console.error('Virhe:', error);
//    }
//}

const getItems = async () => {
    
    const url = 'http://127.0.0.1:3000/api/items';
    const getItems = await fetchData(url)

    if (getItems.error) {
        console.log('tapahtui virhe fetch haussa');
        return;
    }

    console.log(getItems);
}


export { getItems };