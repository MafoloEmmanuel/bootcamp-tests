describe("fromWhere function", function(){

    it('It should be a place', function(){
        assert.equal(fromWhere("CL 45678"), "Some other place!");
    });
    it('It should be a place', function(){
        assert.equal(fromWhere("CA 45678"), "Cape Town");
    });
    it('It should be a place', function(){
        assert.equal(fromWhere("CY 45678"), "Bellville");
    });
})