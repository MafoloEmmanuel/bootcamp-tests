describe("transportFee function", function(){

    it("should give R10 for the afternoon shift", function(){
        assert.equal(transportFee('afternoon'), "R"+10);
    });

    it("should give free for a nightshift", function(){
        assert.equal(transportFee('nightshift'), "free");
    });
    it("should give R20 for a morning shift", function(){
        assert.equal(transportFee('morning'), "R"+20);
    })
})