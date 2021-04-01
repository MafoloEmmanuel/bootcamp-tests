describe("findItemsOver", function(){

    it("should return products that have quantity higher than the threshold", function(){
        assert.deepEqual(findItemsOver([{"name":"apples","qty":10},{"name":"pears","qty":37},
        {"name":"bananas","qty":27},{"name":"apples","qty":3}], 20), [{"name":"pears","qty":37},{"name":"bananas","qty":27}]);  
    });

    it("should return products that have quantity higher than the threshold", function(){
        assert.deepEqual(findItemsOver([{"name":"apples","qty":40},
        {"name":"pears","qty":20},{"name":"bananas","qty":23},{"name":"apples","qty":37}], 20), [{"name":"apples","qty":40},
        {"name":"bananas","qty":23},{"name":"apples","qty":37}]);
     });

     it("should return products that have quantity higher than the threshold", function(){
        assert.deepEqual(findItemsOver([{"name":"apples","qty":10},{"name":"pears","qty":19},
        {"name":"bananas","qty":17},{"name":"apples","qty":3}], 20), []);
     });
})