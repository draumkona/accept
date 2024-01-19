"use strict";

const button = document.querySelector("#gen-btn");
const form = document.querySelector(".form");

const handleClickBtn = (e) => {
  //wybór obrazka
  const formInputSrc = form.querySelector(".obrazek");
  const selectedImg = formInputSrc.querySelector("#obrazek").value;

  // wybór sprawdzającego
  const formSelectAdmin = form.querySelector(".admin");
  const selectedAdmin = formSelectAdmin.querySelector("#admin").value;

  //wybór rangi
  const formSelectRang = form.querySelector(".ranga");
  const selectedRang = formSelectRang.querySelector("#ranga").value;

    e.preventDefault();
    console.log(selectedAdmin, selectedImg, selectedRang);
};

button.addEventListener("click", handleClickBtn);
