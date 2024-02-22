
   const toggleBtn = document.getElementById("toggleBtn");
   const upArrow = document.querySelector(".up_arrow");
   const downArrow = document.querySelector(".down_arrow");
   const leftCard = document.querySelector(".category_section_left_card");
 
   toggleBtn.addEventListener("click", function() {
     if (upArrow.style.display === "none" || upArrow.style.display === "") {
       upArrow.style.display = "inline-block";
       leftCard.style.display = "inline-block";
       leftCard.style.transition = "2s ease-in-out";
       downArrow.style.display = "none";
       
     } else {
       upArrow.style.display = "none";
       downArrow.style.display = "inline-block";
       leftCard.style.display = "none";
     }
   });

 
