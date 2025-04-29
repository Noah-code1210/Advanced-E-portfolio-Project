function contact(event) {
  event.preventDefault();
  const loading = document.querySelector(".modal__overlay--loading");
  const success = document.querySelector(".modal__overlay--success");
  loading.classList += " modal__overlay--visible";

  emailjs
    .sendForm(
      "service_tgdn6n9",
      "template_ujadqti",
      event.target,
      "MHJ3dcy-OK4NGMiSR"
    )
    .then(() => {
      loading.classList.remove("modal__overlay--visible");
      success.classList += " modal__overlay--visible";
    })
    .catch(() => {
      loading.classList.remove("modal__overlay--visible");
      alert(
        "The email service is temorarily unavailable. Please contact me direectly at noahjames1035@gmail.com"
      );
    });
}

function toggleModal() {
    // toggle modal
}