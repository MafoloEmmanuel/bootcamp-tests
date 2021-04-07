describe("countAllFromTown function", function(){

    it("Should count 0 for CA, there's no registration number that starts with CA in the string ", function(){
        assert.equal(countAllFromTown('CL 124,CY 567,CL 345, CJ 456,CL 341', "CA"),0);
    });
    it("Should count 1 for CJ, only one registration number begin with CJ", function(){
        assert.equal(countAllFromTown('CL 124,CY 567,CL 345, CJ 456,CL 341', "CJ"),1);
    });

    it("Should count 3 for CL, there are three registration numbers that starts with CL", function(){
        assert.equal(countAllFromTown('CL 124,CY 567,CL 345, CJ 456,CL 341', "CL"),3);

    });
})
