describe("countAllPaarl function", function(){

    it("should count 2 for Paarl, registration numbers for Paarl starts with CJ", function(){
        assert.equal(countAllPaarl('CJ 182736,CJ 523519, CD 188936'),2);
    });
    it("should count 0 because there is no registration number for Paarl", function(){
        assert.equal(countAllPaarl('CA 182736,CY 523519, CD 188936'),0);
    });
    it("should count only 1 for Paarl, there's one registration number that starts with CJ", function(){
        assert.equal(countAllPaarl('CJ 182736,CA 523519, CD 188936'),1);
    });
})