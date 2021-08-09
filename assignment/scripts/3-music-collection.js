console.log('***** Music Collection *****')
let collection = []; //initializing collection variable as an empty array


//creating a function that adds an album object to the collection array 
function addToCollection( title, artist, yearPublished ){
    console.log( 'in addToCollection', title, artist, yearPublished);
    let album = {
        title: title,
        artist: artist,
        yearPublished: yearPublished
    }//end album object
    collection.push(album); //pushing album object into collection array
    return collection; //returning the collection with new album included
}//end addToCollection

//testing addToCollection by passing six albums into the function

console.log( addToCollection( 'Separation Sunday', 'The Hold Steady', '2005'));
console.log( addToCollection( 'A Sailors Guide to Earth', 'Sturgill Simpson', '2016'));
console.log( addToCollection( 'Born to Run', 'Bruce Springsteen', '1975'));
console.log( addToCollection( 'Let it Be', 'The Replacements', '1984'));
console.log( addToCollection( 'Southeastern', 'Jason Isbell', '2013'));
console.log( addToCollection( '1989', 'Taylor Swift', '2014'));
console.log(`The albums in the collection array are now ${collection}`);
console.log('The albums in the collection are now ', collection );

//creating showCollection function that takes in an array parameter and logs each album in the array - sorted TITLE by ARTIST published in YEAR
function showCollection( array ){
    console.log( 'in showCollection', array );
    console.log( 'The number of items in the array is ', array.length );//per instructions, showing the number of items in the array
    for( let i=0; i<array.length; i++){
        //looping through each album in the collection to log to console
        console.log( `The albums in the collection are ${array.title[i]} by ${array.artist[i]} published in ${array.yearPublished[i]}`)

    }//end for loop

}//end showCollection

//calling function to test showCollection function
console.log( showCollection(collection));

