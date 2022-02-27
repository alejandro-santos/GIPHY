 var keyInput = document.getElementById("input");
 keyInput.addEventListener("keyup", function(event) {
     if (event.key === "Enter") {
         event.preventDefault();
         document.getElementById("searchbtn").click();
     }
 })




function sendApiRequest() {
    var userInput = document.getElementById("input").value
    console.log(userInput)
    var giphyApiKey = "0WNe178qasE32JqL8uOQfnQ7F0JUP91C"
    var giphyApiURL = `https://api.giphy.com/v1/gifs/search?api_key=${giphyApiKey}&q=${userInput}&limit=35&offset=0&lang=en`
    for (let i = 0; i < 25; i++) {
        fetch(giphyApiURL).then(function(data) {
            return data.json()
        }).then(function(json){
            console.log(json.data[i].images.fixed_height.url)
            var imgPath = json.data[i].images.fixed_height.url
            var img = document.createElement("img")
            let div = document.getElementById("homegifs")
            img.setAttribute("src", imgPath)
            img.setAttribute("id", "homegifs")
            div.appendChild(img)
        })
    }
}


function homePage() {

    var giphyApiKey = "0WNe178qasE32JqL8uOQfnQ7F0JUP91C"
    var giphyApiURL = `https://api.giphy.com/v1/gifs/trending?api_key=${giphyApiKey}&limit=35`
    for (let i = 0; i < 30; i++) {
        fetch(giphyApiURL).then(function(data) {
            return data.json()
        }).then(function(json){
            console.log(json.data[i].images.fixed_height.url)
            var imgPath = json.data[i].images.fixed_height.url
            var img = document.createElement("img")
            let div = document.getElementById("homegifs")
            img.setAttribute("src", imgPath)
            img.setAttribute("id", "homegifs")
            div.appendChild(img)
        })
    }
}


$(document).ready(function() {
    $("#searchbtn").click(function() {
        let val = document.getElementById("input").value;
        let nameCaps = val.charAt(0).toUpperCase() + val.slice(1);
        $("img[id=homegifs]").remove();
        $("#header1").text(nameCaps);
        sendApiRequest();
    })
})

$(document).load(function(){ 
    homePage();
})