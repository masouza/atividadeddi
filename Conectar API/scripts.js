let generate_btn = document.querySelector(".generate_btn");
            
generate_btn.addEventListener("click", fetchGato);

function fetchGato(){
    fetch('https://api.thecatapi.com/v1/images/search')
    .then(response => response.json())
    .then((data) => {
        let catsImgUrl = data[0].url

        let catsImgEl = document.createElement("img")
        catsImgEl.setAttribute('src', '${catsImgUrl}')

        let catsImgDiv = document.querySelector(".catsImgDiv")
        catsImgDiv.appendChild(catsImgEl)
})
.catch(err => console.log(err))
}