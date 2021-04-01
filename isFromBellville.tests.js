describe("isFromBellvile function", function(){

    it("Registration numbers for Bellville should start with CY", function(){
        assert.equal(isFromBellville('CA 0986'), false);
    });
    it("Registration numbers for Bellville should start with CY", function(){
        assert.equal(isFromBellville('CY 0986'), true);
    });
    it("Registration numbers for Bellville should start with CY", function(){
        assert.equal(isFromBellville("CA 986YT"), false)
    })
})