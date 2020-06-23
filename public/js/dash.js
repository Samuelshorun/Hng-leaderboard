const interns = 
        [
                {
                id: 0,
                name:'bob',
                score: 150,
                email: 'bob@gmail.com'
                },
                {
                id: 1,
                name:'Zucchipakoda',
                score: 149,
                email: 'zucc@gmail.com'
                },
                {
                id: 2,
                name:'Zucchipakoda',
                score: 148,
                email: 'zucc@gmail.com'
                },
                {
                id: 3,
                name:'Zucchipakoda',
                score: 147,
                email: 'zucc@gmail.com'
                },
                {
                id: 4,
                name:'Zucchipakoda',
                score: 146,
                email: 'zucc@gmail.com'
                },
                {
                id: 5,
                name:'Zucchipakoda',
                score: 145,
                email: 'zucc@gmail.com'
                },
                {
                id: 6,
                name:'Zucchipakoda',
                score: 144,
                email: 'zucc@gmail.com'
                },
                {
                id: 7,
                name:'Zucchipakoda',
                score: 143,
                email: 'zucc@gmail.com'
                },
                {
                id: 8,
                name:'Zucchipakoda',
                score: 142,
                email: 'zucc@gmail.com'
                },
                {
                id: 9,
                name:'Zucchipakoda',
                score: 141,
                email: 'zucc@gmail.com'
                },
                {
                id: 10,
                name:'Zucchipakoda',
                score: 140,
                email: 'zucc@gmail.com'
                },
                {
                id: 11,
                name:'Zucchipakoda',
                score: 139,
                email: 'zucc@gmail.com'
                },
                {
                id: 12,
                name:'Zucchipakoda',
                score: 137,
                email: 'zucc@gmail.com'
                },
                {
                id: 13,
                name:'Zucchipakoda',
                score: 136,
                email: 'zucc@gmail.com'
                },
                {
                id: 14,
                name:'Zucchipakoda',
                score: 133,
                email: 'zucc@gmail.com'
                },
                {
                id: 15,
                name:'Zucchipakoda',
                score: 132,
                email: 'zucc@gmail.com'
                },
                {
                id: 16,
                name:'Zucchipakoda',
                score: 131,
                email: 'zucc@gmail.com'
                },
                {
                id: 17,
                name:'Zucchipakoda',
                score: 130,
                email: 'zucc@gmail.com'
                },
                {
                id: 18,
                name:'Zucchipakoda',
                score: 128,
                email: 'zucc@gmail.com'
                },
                {
                id: 19,
                name:'Zucchipakoda',
                score: 127,
                email: 'zucc@gmail.com'
                },
                {
                id: 20,
                name:'Zucchipakoda',
                score:126,
                email: 'zucc@gmail.com'
                }
    ]; 


//////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////



    const tbody = [];
    let pagetbody = new Array();
    let currentPage = 1;
    let numberPerPage = 10;
    let numberOfPages = 0;

console.log(interns);

function maketbody() {
    const intern = JSON.parse(JSON.stringify(interns));
    for (x of intern) {
        tbody.push(x);
    }

    numberOfPages = getNumberOfPages();
}

console.log(tbody);
    
function getNumberOfPages() {
    return Math.ceil(tbody.length / numberPerPage);
}

function nextPage() {
    currentPage += 1;
    loadtbody();
}

function previousPage() {
    currentPage -= 1;
    
    if (currentPage = 1) {
    loadtbody();
        best();
    } else {
       loadtbody(); 
    }
    
}

function firstPage() {
    currentPage = 1;
    loadtbody();
    best();
}

function lastPage() {
    currentPage = numberOfPages;
    loadtbody();
}

function loadtbody() {
    var begin = ((currentPage - 1) * numberPerPage);
    var end = begin + numberPerPage;

console.log(begin);
console.log(end);
    pagetbody = tbody.slice(begin, end);
    drawtbody();
    check();
}

console.log(pagetbody);
    
function drawtbody() {
   document.getElementById("tbody").innerHTML = "";
    for (r = 0; r < pagetbody.length; r++) {
        let table = `<tr class="tRow" id="tr"><td valign="middle">${pagetbody[r].name}</td><td>${pagetbody[r].email}</td><td>${pagetbody[r].score}</td><td valign="middle"><img src="img/twitter.svg" width="30%" height="30%">          
                            <img src="img/linkedin.svg" width="30%" height="30%"></td>
                      </tr>`
        document.getElementById("tbody").innerHTML += table;

    }
}
function best() {
    const trow = document.querySelectorAll("#tr");
    
    trow[0].classList.add("table-warning");
    
    trow[1].classList.add("table-success");
    
    trow[2].classList.add("table-info");
    
}

function check() {
    document.getElementById("next").disabled = currentPage == numberOfPages ? true : false;
    document.getElementById("previous").disabled = currentPage == 1 ? true : false;
    document.getElementById("first").disabled = currentPage == 1 ? true : false;
    document.getElementById("last").disabled = currentPage == numberOfPages ? true : false;
}

function load() {
    maketbody();
    loadtbody();
    best();
}
  
window.onload = load;
