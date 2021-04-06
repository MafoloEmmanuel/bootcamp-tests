describe("isFromBellvile function", function(){

    it("Should return false for CA 0986", function(){
        assert.equal(isFromBellville('CA 0986'), false);
    });
    it("Should return true for CY 0986", function(){
        assert.equal(isFromBellville('CY 0986'), true);
    });
    it("Should return false for CA 986YT", function(){
        assert.equal(isFromBellville("CA 986YT"), false)
    })
})