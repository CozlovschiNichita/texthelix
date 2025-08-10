window.addEventListener("DOMContentLoaded", () => {
  const words = "lucasfernandodev";
  const ANGLE_SPEED = 0.02; // скорость вращения
  let angle = 0;

  // Функция создания буквы
  const createChar = (char, offset) => {
    const div = document.createElement("div");
    div.innerText = char;
    div.classList.add("character");
    div.dataset.offset = offset;
    return div;
  };

  // Заполняем оба контейнера
  words.split("").forEach((char, i) => {
    document.querySelector("#spiral").append(createChar(char, 5));
    document
      .querySelector("#spiral2")
      .append(createChar(char, Math.PI)); // вторая спираль сдвинута на пол-оборота
  });

  const spiralElements = [
    ...document.querySelectorAll("#spiral .character"),
    ...document.querySelectorAll("#spiral2 .character")
  ];

  // Анимация
  const animate = () => {
    angle += ANGLE_SPEED;

    spiralElements.forEach((el, i) => {
      const offset = parseFloat(el.dataset.offset);
      const y = Math.sin(angle + offset + i * 0.3) * 100;
      const scale = Math.cos(angle + offset + i * 0.3) * 0.5 + 0.5;
      el.style.transform = `translateY(${y}px) scale(${scale})`;
    });

    requestAnimationFrame(animate);
  };

  animate();
});
