const takeToOption=document.getElementById('age');//for books cateagories
const button=document.querySelector('.show-button');//for start to function
const inputArea=document.getElementById('choose-area');
const background=document.getElementById('body');

//remove form and background image
function removeOption(){
    inputArea.style.display='none';
    background.style.backgroundImage='url(img/books-bg.jpeg)';
}

//show books
function showImg(){

    if(takeToOption.value==='child'){
        let header=takeToOption[1].innerHTML; //for header part 
        let index=books.filter(book=>book.type==='forChild').map(book=>book.image); //just forChild
        createBookCol(index);
        createHeader(header)
    }
    else if(takeToOption.value==='adolescent'){
        let header=takeToOption[2].innerHTML;//for header part
        let index=books.filter(book=>book.type==='forAdolescent').map(book=>book.image);//just forAdolescent
        createBookCol(index);
        createHeader(header)
    }
    else if(takeToOption.value==='adult'){
        let header=takeToOption[3].innerHTML;//for header part
        let index=books.filter(book=>book.type==='forAdult').map(book=>book.image);//just forAdult
        createBookCol(index);
        createHeader(header)

    }
    else if(takeToOption.value==='all'){
        let header='Herkes';
        let index=books.map(book=>book.image);//all books
        createBookCol(index);
        createHeader(header)
    }
  
}


function createBookCol(index){// we are taking index from showImg()
    for (let i of index){ //I created 'i' for  for loop

        let column=
        `
        <div class="col-md-4 text-center">
            <div class="book-image">
                <img src="img/${i}" alt="">
            </div>
        </div>`
 
        document.getElementById('book-row').insertAdjacentHTML('beforeend', column);

       
    }

    
}



function createHeader(header){//we are taking header from showImg() again
    const createCategories=`<h1 class="text-center">${header + '  İçin Kitaplar'}</h1>`;

    document.getElementById('categories').innerHTML=createCategories;
}




button.addEventListener('click', ()=>{

    if(takeToOption.value==='default'){
        window.alert('Lütfen geçerli Bir Kategori Seçin')
    }
    else{
        removeOption();
        showImg();
    }
    
})



