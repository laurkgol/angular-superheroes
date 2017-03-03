let superHeroData =[
  {name: "Superman", phone_number: "301-275-9876", affiliation: "DC Comics", photo_url: "http://media.dcentertainment.com/sites/default/files/styles/whos_who/public/ww_superman_588c0b2b7e4894.14006222_589110299aa510.60892721.jpg?itok=tvnAVtFb"},
  {name: "Batman", phone_number: "301-275-9898", affiliation: "DC Comics", photo_url: "http://media.dcentertainment.com/sites/default/files/styles/whos_who/public/ww_batman_588c0b6b7e2e88.03395664_589110907cb905.89801067.jpg?itok=VJaUURr3"},
  {name: "Wonder Woman", phone_number: "301-275-9768", affiliation: "DC Comics", photo_url: "http://media.dcentertainment.com/sites/default/files/styles/whos_who/public/ww_wonderwoman_588c0ed37bfc73.21006806_589110f430e637.19481409.jpg?itok=AmEJsCYe"},
  {name: "Spider Man", phone_number: "301-275-9368", affiliation: "Marvel Comics", photo_url: "https://i.annihil.us/u/prod/marvel/i/mg/6/60/538cd3628a05e.jpg"},
  {name: "Wolverine", phone_number: "301-275-9968", affiliation: "Marvel Comics", photo_url: "https://i.annihil.us/u/prod/marvel/i/mg/9/00/537bcb1133fd7.jpg"},
  {name: "Thor", phone_number: "301-275-0968", affiliation: "Marvel Comics", photo_url: "https://i.annihil.us/u/prod/marvel/i/mg/7/10/537bc71e9286f.jpg"}
]

angular
  .module('SuperHeroApp', [])
  .controller('superHeroCtrl', [ superHeroController ])
  function superHeroController (){
    this.superHeroes = superHeroData;
  
  }
