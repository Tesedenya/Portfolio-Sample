
const form = document.querySelector('form');
const nameInput = document.querySelector('input[name="fullName"]');
const thankYou = document.querySelector(".thankYou");
const emailInput = document.querySelector('input[name="Email"]');
console.log(form);

const isValidEmail = (email) =>{
 const re =  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  return re.test(String(email).toLowerCase());
};
 

const inputs = [nameInput, emailInput];


let isFormValid = false;
let isValidationOn = false;

const resetElm = (elm) =>{
  elm.classList.remove("invalid");
  elm.nextElementSibling.classList.add("hidden");
}
const invalidateElm = (elm) =>{
  elm.classList.add("invalid");
  elm.nextElementSibling.classList.remove("hidden");
}

const invalidInput = () =>{
  if(!isValidationOn) return;
  resetElm(nameInput);
  resetElm(emailInput);
  isFormValid = true;
  if(!nameInput.value)
  {
    invalidateElm(nameInput);
    isFormValid = false; 
  }
  if(!isValidEmail(emailInput.value))
  {
    invalidateElm(emailInput);
    isFormValid = false; 
  }
};
 form.addEventListener("submit",(e) => {
  e.preventDefault();
   isValidationOn = true;
   invalidInput();
   if(isFormValid){
     form.remove();
     thankYou.classList.remove("hidden");
   }
});

inputs.forEach((input) => {
  input.addEventListener("input", () =>{
    invalidInput();
});
});
