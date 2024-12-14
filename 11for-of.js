myfriends = ['Vedant','Ashis','Bajpai']
for (let dost of myfriends) {
    console.log('dost log :',dost)
  }

myfriends = ['Vedant','Ashis','Bajpai']
for (let dost of myfriends) {
      dost = dost +' zinda he'
      console.log('dost log :',dost)
    }

mobiles = ['apple','Samsung','mi']
for(var [index,mobile] of mobiles.entries()){
    console.log(index+' = '+ mobile )
}

var string = 'Blockchaindeveloper'
for(var c of string){
    console.log(c)

}