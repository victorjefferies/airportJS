describe("Airport", function(){
  beforeEach(function() {
     this.plane = new Plane();
     this.airport = new Airport();
  });

    describe("land", function() {
    it("airport hanger to include plane", function() {
      this.airport.land(this.plane);
      expect(this.airport.hanger).toContain(this.plane);
    });   
  });

  describe('takeOff', function(){
    
    it('instructs a plane to take off', function() {
      
      this.airport.land(this.plane)

  
      expect(this.airport.takeOff(this.plane)).toEqual(this.plane)
    })
    it('removes a plane from the hangar', function() {
      this.airport.land(this.plane);
    
      this.airport.takeOff(this.plane);
     
      expect(this.airport.hanger).not.toContain(this.plane)
    })
  })
});
  