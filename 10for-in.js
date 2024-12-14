var avengers = {
    leader : 'Captain America',
    Richguy : 'Iron Man',
    beautyqueen : 'BlackWidow',
    powerhouse : 'hulk'

}
for (var hero in avengers) {
    console.log(hero +' = '+ avengers[hero])
  }

var transformers = ['optimus prime','bumblebee','wheeljack','rc']
for(var autobotes in transformers){
    console.log(autobotes+' = '+transformers[autobotes])
}