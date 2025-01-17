document
  .getElementById("contactForm")
  .addEventListener("submit", function (event) {
    event.preventDefault(); // Отменяем стандартное поведение формы

    const form = event.target;
    const formData = new FormData(form);

    fetch(form.action, {
      method: "POST",
      body: formData,
      headers: {
        Accept: "application/json",
      },
    })
      .then((response) => {
        if (response.ok) {
          alert("Сообщение успешно отправлено!");
          form.reset(); // Очищаем форму
        } else {
          alert("Произошла ошибка при отправке сообщения.");
        }
      })
      .catch((error) => {
        alert("Произошла ошибка при отправке сообщения.");
        console.error("Error:", error);
      });
  });
