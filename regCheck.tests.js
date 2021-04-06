describe("regCheck function", function(){

    it('The registration number "CY 189-012", "ND" should return false', function(){
        assert.equal(regCheck("CY 189-012", 'ND'), false);
    });
    it('The registration number "GH 78 BX GP", "GP" should return true', function(){
        assert.equal(regCheck("GH 78 BX GP", 'GP'), true);
    });
    it('The registration number "CY 189-012", "CY" should return false', function(){
        assert.equal(regCheck('CY 189-012', 'CY'), false);
    });

})