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
                score: 1,
                email: 'zucc@gmail.com'
                },
                {
                id: 2,
                name:'Zucchipakoda',
                score: 2,
                email: 'zucc@gmail.com'
                },
                {
                id: 3,
                name:'Zucchipakoda',
                score: 3,
                email: 'zucc@gmail.com'
                },
                {
                id: 4,
                name:'Zucchipakoda',
                score: 4,
                email: 'zucc@gmail.com'
                },
                {
                id: 5,
                name:'Zucchipakoda',
                score: 5,
                email: 'zucc@gmail.com'
                },
                {
                id: 6,
                name:'Zucchipakoda',
                score: 6,
                email: 'zucc@gmail.com'
                },
                {
                id: 7,
                name:'Zucchipakoda',
                score: 7,
                email: 'zucc@gmail.com'
                },
                {
                id: 8,
                name:'Zucchipakoda',
                score: 8,
                email: 'zucc@gmail.com'
                },
                {
                id: 9,
                name:'Zucchipakoda',
                score: 9,
                email: 'zucc@gmail.com'
                },
                {
                id: 10,
                name:'Zucchipakoda',
                score: 10,
                email: 'zucc@gmail.com'
                },
                {
                id: 11,
                name:'Zucchipakoda',
                score: 11,
                email: 'zucc@gmail.com'
                },
                {
                id: 12,
                name:'Zucchipakoda',
                score: 12,
                email: 'zucc@gmail.com'
                },
                {
                id: 13,
                name:'Zucchipakoda',
                score: 13,
                email: 'zucc@gmail.com'
                },
                {
                id: 14,
                name:'Zucchipakoda',
                score: 14,
                email: 'zucc@gmail.com'
                },
                {
                id: 15,
                name:'Zucchipakoda',
                score: 15,
                email: 'zucc@gmail.com'
                },
                {
                id: 16,
                name:'Zucchipakoda',
                score: 16,
                email: 'zucc@gmail.com'
                },
                {
                id: 17,
                name:'Zucchipakoda',
                score: 17,
                email: 'zucc@gmail.com'
                },
                {
                id: 18,
                name:'Zucchipakoda',
                score: 18,
                email: 'zucc@gmail.com'
                },
                {
                id: 19,
                name:'Zucchipakoda',
                score: 19,
                email: 'zucc@gmail.com'
                },
                {
                id: 20,
                name:'Zucchipakoda',
                score: 20,
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
    loadtbody();
}

function firstPage() {
    currentPage = 1;
    loadtbody();
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
        let table = `<tr class="tRow"><td valign="middle">${pagetbody[r].name}</td><td>${pagetbody[r].email}</td><td>${pagetbody[r].score}</td><td valign="middle"><img src="img/twitter.svg" width="30%" height="30%">          
                            <img src="img/linkedin.svg" width="30%" height="30%"></td>
                      </tr>`
        document.getElementById("tbody").innerHTML += table;

    }
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
}
    
window.onload = load;
