const bookslist = document.getElementById("books")
 
const URL = "https://www.anapioficeandfire.com/api/books"

async function getbooksdata(){
    try{
    const response = await fetch(URL);
    bookslist.innerText =''
    const booksdata = await response.json();
    console.log(booksdata);
    booksdata.forEach(async (i) => {
        let name =[]
        let k = 5
        let date  = new Date(i.released).toDateString()
     for (let j=0; name.length<k; j++ ){
        let ChartURL = i.characters[j];
            const rep1 = await fetch(ChartURL)
            const chartData  = await rep1.json()
            if(chartData.name!=""){
                name.push(chartData.name)
            }
    }   
        bookslist.innerHTML +=`
        <div class="bookID">
        <div class="bookname"><b>Book Name :</b> ${i.name}</div>
        <p class="bookname"><b>Book ISBN</b> : ${i.isbn}</p>
        <p class="bookname"><b>Number of Pages : </b>${i.numberOfPages}</p>
        <p class="bookname"><b>Authers : </b>${i.authors[0]}</p>
        <p class="bookname"><b>Publisher Name : </b>${i.publisher}</p>
        <p class="bookname"><b>Release Date : </b>${date}</p>
        <p class="bookname"><b>Charactors : </b>${name.join(",")} </p>
        </div>
        `
    })

}catch (error) {
        console.log('There was an error', error);
      }
}
getbooksdata();