document.addEventListener("DOMContentLoaded", function () {
  // Screen 1
  const nameInput = document.getElementById("fname");
  const continueBtn1 = document.getElementById("continue-button");

  if (nameInput && continueBtn1) {
    nameInput.addEventListener("input", function () {
    if (nameInput.value.trim() != ""){
       continueBtn1.disabled = false;
    }
    else{
       continueBtn1.disabled = true;
    };
    });

    nameInput.addEventListener("keydown", function (event) {
      if (event.key === "Enter" && nameInput.value.trim() !== "") {
        continueBtn1.click();
      }
    });

    continueBtn1.addEventListener("click", function () {
        if (nameInput.checkValidity()) {
      const petname = nameInput.value.trim();
      localStorage.setItem("petname", petname);
      showpage(2);
    }
  else {
    nameInput.reportValidity(); 
  }
  });
  }

  // Screen 2
  let emailInput = document.getElementById("email");
  let continueBtn2 = document.getElementById("continue-button-1");
  let backBtn1 = document.getElementById("back-button-1");

  if (emailInput && continueBtn2 && backBtn1) {
    emailInput.addEventListener("input", function () {
      let email = emailInput.value.trim();
  localStorage.setItem("email", email);
     if (emailInput.value.trim() != "") {
        continueBtn2.disabled = false;
      } else {
        continueBtn2.disabled = true;
      }
    });
 emailInput.addEventListener("keydown", function (event) {
      if (event.key === "Enter" && emailInput.value.trim() !== "") {
        continueBtn2.click();
      }
    });
    continueBtn2.addEventListener("click", function () {
      if (emailInput.checkValidity()){
      showpage(3);
    }
  else {
    emailInput.reportValidity();
  }
  })
    backBtn1.addEventListener("click", function () {
      showpage(1);
    });
  }

  // Screen 3
  const petAgeSelect = document.getElementById("pet-age");
  let continueBtn3 = document.getElementById("continue-button-2");
 let backBtn2 = document.getElementById("back-button-2");
 let dogNamePlaceholder = document.getElementById("pet-name-placeholder");

  const savedName = localStorage.getItem("petname");
  if (savedName && dogNamePlaceholder) {
    dogNamePlaceholder.textContent = savedName;
  }

  if (petAgeSelect && continueBtn3 && backBtn2) {
    petAgeSelect.addEventListener("change", function () {
      const petAge = petAgeSelect.value;
localStorage.setItem("petAge", petAge);
        if (petAgeSelect.value !== "0") {
        continueBtn3.disabled = false;
      } else {
        continueBtn3.disabled = true;
      }
    });
    continueBtn3.addEventListener("click", function () {
      showpage(4);
    });

    backBtn2.addEventListener("click", function () {
      showpage(2);
    });
  }
  //Screen 4
  const savedPetName = localStorage.getItem('petname');
  let dogNameplaceholder = document.getElementById('pet-name-placeholder-4')
  if(savedPetName && dogNameplaceholder){
    dogNameplaceholder.textContent = savedPetName;
  }
  let weightInput = document.getElementById('text');
  let continueBtn4 = document.getElementById("continue-button-3");
 let backBtn4 = document.getElementById("back-button-3");
 weightInput.addEventListener("input", function () {
  const petWeightText = weightInput.value.trim();
localStorage.setItem("petWeightText", petWeightText);

      if (weightInput.value.trim() != "") {
        continueBtn4.disabled = false;
      } else {
        continueBtn4.disabled = true;
      }
    });

    weightInput.addEventListener("keydown", function (event) {
      if (event.key === "Enter" && weightInput.value.trim() !== "") {
        continueBtn4.click();
      }
    });
  continueBtn4.addEventListener("click", function () {
      showpage(5);
    });

    backBtn4.addEventListener("click", function () {
      showpage(3);
    });
    // Screen 5
     const savedDogName = localStorage.getItem('petname');
  let dogNmplaceholder = document.getElementById('pet-name-placeholder-5')
  if(savedDogName && dogNmplaceholder){
    dogNmplaceholder.textContent = savedDogName;
  }
  let petweight = document.getElementById("petweight")
  let continueBtn5 = document.getElementById("continue-button-4");
 let backBtn5 = document.getElementById("back-button-4");
  if (petweight && continueBtn5 && backBtn5) {
    petweight.addEventListener("change", function () {
      const petWeightOption = petweight.value;
localStorage.setItem("petWeightOption", petWeightOption);

        if (petweight.value !== "0") {
            continueBtn5.disabled = false;
      } else {
        continueBtn5.disabled = true;
      }
    });
    continueBtn5.addEventListener("click", function () {
      showpage(6);
    });

    backBtn5.addEventListener("click", function () {
      showpage(4);
    });
}
//Screen 6 
let savedDOGNAME = localStorage.getItem('petname');
let dogplaceholder6 = document.getElementById('dog-name-placeholder-6');
if (dogplaceholder6 && savedDOGNAME ){
  dogplaceholder6.textContent = savedDOGNAME;
}
let activityCards = document.querySelectorAll('#quiz-page-6 .activity-card');
let continueBtn6 = document.getElementById('continue-button-5');
let backBtn6 = document.getElementById('back-button-5');
for (let i = 0; i<activityCards.length; i++){
activityCards[i].addEventListener('click', function(){
  for(let j=0; j<activityCards.length; j++){
    activityCards[j].classList.remove('selected');
  }
   activityCards[i].classList.add('selected')
    continueBtn6.disabled = false;
  }
)}
if (continueBtn6 && backBtn6) {
  continueBtn6.addEventListener("click", function () {
    showpage(7);
  });
  backBtn6.addEventListener("click", function () {
    showpage(5);
  });
}
//Screen 7 
let storedDOGNAME = localStorage.getItem('petname');
let dogplaceholder7 = document.getElementById('dog-name-placeholder-7');
if (dogplaceholder7 && storedDOGNAME ){
  dogplaceholder7.textContent = storedDOGNAME;
}
let bodyCards = document.querySelectorAll('#quiz-page-7 .body-type-card');
let continueBtn7 = document.getElementById('continue-button-6');
let backBtn7 = document.getElementById('back-button-6');
for (let i = 0; i<bodyCards.length; i++){
bodyCards[i].addEventListener('click', function(){
  for(let j=0; j<activityCards.length; j++){
    bodyCards[j].classList.remove('selected');
  }
   bodyCards[i].classList.add('selected')
    continueBtn7.disabled = false;
  }
)}
if (continueBtn7 && backBtn7) {
  continueBtn7.addEventListener("click", function () {
    showpage(8);
  });
  backBtn7.addEventListener("click", function () {
    showpage(6);
  });
}
//Screen 8 
let healthissues = document.querySelectorAll('#quiz-page-8 .health-screen-individual-option');
for (let i =0; i<healthissues.length; i++){
  healthissues[i].addEventListener("click", function(){
    healthissues[i].classList.add('checked');
    continueBtn8.disabled = false;
  })
}
let storedDGNAME = localStorage.getItem('petname');
let dogplaceholder8 = document.getElementById('dog-name-placeholder-8');
if (dogplaceholder8 && storedDGNAME ){
  dogplaceholder8.textContent = storedDGNAME;
}
let continueBtn8 = document.getElementById('continue-button-7');
let backBtn8 = document.getElementById('back-button-7');
if (continueBtn8 && backBtn8) {
  continueBtn8.addEventListener("click", function () {
    showpage(9);
  });
  backBtn8.addEventListener("click", function () {
    showpage(7);
  });
}

//Screen 9
let foodscreen = document.querySelectorAll('#quiz-page-9 .food-screen-individual-option');
for (let i =0; i<foodscreen.length; i++){
  foodscreen[i].addEventListener("click", function(){
    foodscreen[i].classList.add('checked');
    continueBtn9.disabled = false;
  })
}
let storedDOGNAMe = localStorage.getItem('petname');
let dogplaceholder9 = document.getElementById('dog-name-placeholder-9');
if (dogplaceholder9 && storedDOGNAMe){
  dogplaceholder9.textContent = storedDOGNAMe;
}
let continueBtn9 = document.getElementById('continue-button-8');
let backBtn9 = document.getElementById('back-button-8');
if (continueBtn9 && backBtn9) {
  continueBtn9.addEventListener("click", function () {
    showpage(10);
  });
  backBtn9.addEventListener("click", function () {
    showpage(8);
  });
}

//Screen 10 
let feedingplan = document.querySelectorAll('#quiz-page-10 .feeding-plan-individual-option');
for (let i =0; i<feedingplan.length; i++){
  feedingplan[i].addEventListener("click", function(){
   feedingplan[i].classList.add('checked');
    continueBtn10.disabled = false;
  })
}
let storedDOGNAme = localStorage.getItem('petname');
let dogplaceholder10 = document.getElementById('dog-name-placeholder-10');
if (dogplaceholder10 && storedDOGNAme){
  dogplaceholder10.textContent = storedDOGNAme;
}

let continueBtn10 = document.getElementById('continue-button-9');
let backBtn10 = document.getElementById('back-button-9');
if (continueBtn10 && backBtn10) {
  continueBtn10.addEventListener("click", function () {
   continueBtn10.disabled = true;
  });
  backBtn10.addEventListener("click", function () {
    showpage(9);
  });
}
});




function showpage(pageNumber){
    for (let i=1; i<=10; i++){
 let page = document.getElementById(`quiz-page-${i}`);
     if (i === pageNumber) {
  page.style.display = 'block';
} else {
  page.style.display = 'none';
}
    }
    
}