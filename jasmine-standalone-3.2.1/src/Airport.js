function Airport() {
  // return "airport";
  this.hanger = [];
  
};

Airport.prototype.land = function(airplane) {
  this.hanger.push(airplane)
};

Airport.prototype.takeOff = function(airplane) {
  return this.hanger.splice(this.hanger.indexOf(airplane), 1)[0]
  
  
}