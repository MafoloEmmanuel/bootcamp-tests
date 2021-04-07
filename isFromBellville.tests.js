describe("isFromBellvile function", function(){

    it("Should return false for registration numbers that do not start with CY", function(){
        assert.equal(isFromBellville('CA 0986'), false);
    });
    it("Should return true for 'CY 0986', which starts with CY", function(){
        assert.equal(isFromBellville('CY 0986'), true);
    });
    it("Should return false for 'CA 986YT' because it does not start with CY ", function(){
        assert.equal(isFromBellville("CA 986YT"), false)
    })
})