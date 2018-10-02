describe('Plane', function() {
  it('prints Plane', function() {
    plane = new Plane()
    expect(plane["constructor"]()).toEqual('I am a plane')
  })
})
