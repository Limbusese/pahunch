const pagination = document.querySelector("ul");
console.log(pagination);

const startBtn = document.querySelector("#startBtn");
console.log(startBtn)

const endBtn = document.querySelector("#endBtn");
console.log(endBtn);

const prevNext = document.querySelectorAll(".prevNext");
console.log("the prevNext files are: ",prevNext);


let pageNumber = 10;
let totalPage = 20;

pagination.innerHTML = paginationFunction(totalPage, pageNumber);

function paginationFunction(totalPage, pageNumber) {
  let beforePage = pageNumber - 1;
  let afterPage = pageNumber + 1;
  let active;
  let listTag = "";


  if (pageNumber > 1) {
    listTag += `<li class="prev_buttons button">
    <button class="button" id="startBtn" onclick = "paginationFunction (totalPage, ${(totalPage - (pageNumber-1)) - pageNumber})">
      <i class="fa-solid fa-angles-left"></i>
    </button>

    <button class="button prevNext" id="prev" onclick = "paginationFunction (totalPage, ${pageNumber - 1})" ${pageNumber === 1 ? "disabled ": ""}>
      <i class="fa-solid fa-angle-left"></i>
    </button>
  </li>`;
  }


  if (pageNumber > 2) {
    listTag += `<li class="numb" onclick = "paginationFunction(totalPage, 1)"><span>1 </span>`;

    if (pageNumber > 3) {
      listTag += `<li class="dots">...</li>`;
    }
  }

  if (pageNumber === totalPage) {
    beforePage = beforePage - 2;
  } else if (pageNumber === totalPage - 1) {
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
      active = "active";
    } else {
      active = "";
    }

    listTag += `<li class="numb ${active}" onclick = "paginationFunction (totalPage, ${index})">${index}</li>`;
  }

  if (pageNumber < totalPage - 1) {
    if (pageNumber < totalPage - 2) {
      listTag += `<li class=" dots">...</li>`;
    }

    listTag += `<li class="numb" onclick = "paginationFunction (totalPage, ${totalPage})">${totalPage}</li>`;
  }


  if (totalPage > pageNumber) {
    listTag += `<li class="next_buttons button" >
    <button class="button prevNext" id="next" onclick = "paginationFunction (totalPage, ${pageNumber + 1})" onclick = "paginationFunction(totalPage, ${pageNumber === totalPage ? "disabled ": ""})">
      <i class="fa-solid fa-angle-right"></i>
    </button>
   
   <button class="button" id="endBtn" onclick = "paginationFunction (totalPage, ${pageNumber + (totalPage - pageNumber)})" >
    <i class="fa-solid fa-angles-right"></i>
   </button>
   </li>`;
   
  }

  pagination.innerHTML = listTag;
  return listTag;
}















