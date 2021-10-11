document.querySelector(".cbutton").addEventListener("click", () => {
  const name = document.querySelector(".name").value;
  const last = document.querySelector(".last").value;
  const mail = document.querySelector(".mail").value;
  const pass = document.querySelector(".pass").value;

  if (name === "") {
    document.querySelector(".w-name").classList.add("error-p");
    document.querySelector(".name").classList.add("error-img");
    document.querySelector(".inputs-n").classList.add("input-fix");
  } else {
    document.querySelector(".w-name").classList.remove("error-p");
    document.querySelector(".name").classList.remove("error-img");
    document.querySelector(".inputs-n").classList.remove("input-fix");
  }

  if (last === "") {
    document.querySelector(".w-last").classList.add("error-p");
    document.querySelector(".last").classList.add("error-img");
    document.querySelector(".inputs-l").classList.add("input-fix");
  } else {
    document.querySelector(".w-last").classList.remove("error-p");
    document.querySelector(".last").classList.remove("error-img");
    document.querySelector(".inputs-l").classList.remove("input-fix");
  }

  if (mail === "") {
    document.querySelector(".w-mail").classList.add("error-p");
    document.querySelector(".mail").classList.add("error-img");
    document.querySelector(".inputs-m").classList.add("input-fix");
  } else {
    document.querySelector(".w-mail").classList.remove("error-p");
    document.querySelector(".mail").classList.remove("error-img");
    document.querySelector(".inputs-m").classList.remove("input-fix");
  }

  if (pass === "") {
    document.querySelector(".w-pass").classList.add("error-p");
    document.querySelector(".pass").classList.add("error-img");
    document.querySelector(".inputs-p").classList.add("input-fix");
  } else {
    document.querySelector(".w-pass").classList.remove("error-p");
    document.querySelector(".pass").classList.remove("error-img");
    document.querySelector(".inputs-p").classList.remove("input-fix");
  }
});
