// console.log(`jay shree ram`);

let pagination = document.querySelector('ul');

let pageNumber = 10;
let totalPage = 20;

pagination.innerHTML = paginationFunction(totalPage, pageNumber);
function paginationFunction(totalPage, pageNumber) {
    let beforePage = pageNumber - 1, afterPage = pageNumber + 1;
    let listTag = "";


    if (pageNumber > 1) {
        listTag += `<li class="prev btn"  onclick = "paginationFunction(totalPage, ${pageNumber - 1})"><span>Prev</span></li>`;
    }

    if (pageNumber > 2) {
        listTag += `<li class=" btn" onclick = "paginationFunction(totalPage, 1)"><span>1</span></li>`;

        if (pageNumber > 3) {
            listTag += `<li class="dots"><span>...</span></li>`;
        }
    }



    if (pageNumber == totalPage) {
        beforePage = beforePage - 2;
    } else if (pageNumber == totalPage - 1) {
        beforePage = beforePage - 1;
    }

    if (pageNumber == 1) {
        afterPage = afterPage + 2;
    } else if (pageNumber == 2) {
        afterPage = afterPage + 1;
    }

    for (let index = beforePage; index <= afterPage; index++) {

        if (totalPage < index) {
            break;
        }


        if (index == 0) {
            index = index + 1;
        }

        if (pageNumber == index) {
            active = "active"
        } else {
            active = "";
        }

        listTag += `<li class="btn ${active}" onclick = "paginationFunction(totalPage, ${index})"><span>${index}</span></li>`;

    }


    if (pageNumber < totalPage - 1) {

        if (pageNumber < totalPage - 2) {
            listTag += `<li class="dots"><span>...</span></li>`;
        }

        listTag += `<li class=" btn" onclick = "paginationFunction(totalPage, ${totalPage})"><span>${totalPage}</span></li>`;
    }

    if (totalPage > pageNumber) {
        listTag += `<li class="next btn" onclick = "paginationFunction(totalPage, ${pageNumber + 1})"><span>Next</span></li>`;
    }

    pagination.innerHTML = listTag;
    return listTag;
}
