describe("transportFee function", function(){

    it("should give give us the right price based on the shift", function(){
        assert.equal(transportFee('afternoon'), "R"+10);
    });

    it("should give give us the right price based on the shift", function(){
        assert.equal(transportFee('nightshift'), "free");
    });
    it("should give give us the right price based on the shift", function(){
        assert.equal(transportFee('morning'), "R"+20);
    })
})