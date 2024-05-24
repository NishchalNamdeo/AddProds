const arr = [
    { name: 'Apple', tag: "Fruit", price:100},
    { name: 'refrigerator', tag: "electronics", price:10000},
    { name: 'kurta', tag: "clothing", price:500},
    { name: 'shirt', tag: "clothing", price:600},
    { name: 'mobile', tag: "plastic", price:100},
    { name: 'banana', tag: "Fruit", price:50},
    { name: 'jeans', tag: "clothing", price:1600}
   ];

   function getOptions(){
    var ans = arr.map( e => e.tag)
    ans = [...new Set(ans)];
    var clutter = `<option value="all">all</option>`
    ans.forEach(function(elem){
        clutter += `<option value="${elem}">${elem}</option>`
    })
    document.querySelector("#selecttag").innerHTML = clutter
   }


   function getProds(selct){
    var clutter = "";
    selct.forEach(function(elem){
        clutter += `   <div class="w-60 p-5 bg-zinc-300 rounded-md">
        <h1 class="text-2xl mb-3 font-semibold">${elem.name}</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic, eos!</p>
        <h4 class="text-2xl mb-3 font-semibold">${elem.tag}</h4>
        <h2 class="text-xl mb-3 font-medium">${elem.price}</h2>

        <button class="w-full bg-blue-600 mt-2 p-2 rounded-full">Add</button>
    </div>`
    })
    document.querySelector(".prods").innerHTML = clutter

   }


   function filterProds() {
    document.querySelector("#selecttag").addEventListener("change", function() {
        var selectedTag = this.value;
        var filteredArr;

        if (selectedTag !== "all") {
            // Filter the array based on the selected tag
            filteredArr = arr.filter(function(item) {
                return item.tag === selectedTag;
            });
        } else {
            // If "all" is selected, use the original array
            filteredArr = arr;
        }

        // Display the filtered products
        getProds(filteredArr);
    });
}

function filteredSearch() {
    var search = document.querySelector("#search");
    search.addEventListener("input", function() {
        var searchTerm = search.value.toLowerCase();
        var filteredProducts = arr.filter(function(item) {
            return item.name.toLowerCase().startsWith(searchTerm);
            // return item.name.toLowerCase().includes(searchTerm);
        });
        getProds(filteredProducts);
    });
}

// Initialize functions
filterProds();
filteredSearch()
getProds(arr)
getOptions()
