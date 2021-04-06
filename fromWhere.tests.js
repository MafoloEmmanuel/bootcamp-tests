describe("fromWhere function", function(){

    it('It should return "Some other place!" for places outside town', function(){
        assert.equal(fromWhere("CL 45678"), "Some other place!");
    });
    it('It should return Cape Town for registration numbers that starts with CA', function(){
        assert.equal(fromWhere("CA 45678"), "Cape Town");
    });
    it('It should return Bellville for that starts with CY', function(){
        assert.equal(fromWhere("CY 45678"), "Bellville");
    });
});