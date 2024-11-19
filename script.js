const hideButton = document.getElementById("hide-btn");
hideButton.addEventListener("dblclick", function () {
  const textEl = document.getElementById("hide-text");

  if (textEl.style.display === "none") {
    // 만약 안보인다면??
    textEl.style.display = "block"; // 보여라
  } else {
    // 만약 보인다면??
    textEl.style.display = "none"; // 숨겨라
  }
});

const board = document.querySelector(".board");
let isDrawing = false;

board.addEventListener("mousedown", () => {
  isDrawing = true;
});

board.addEventListener("mouseup", () => {
  isDrawing = false;
});

board.addEventListener("mouseleave", () => {
  isDrawing = false;
});

board.addEventListener("mousemove", (event) => {
  if (isDrawing) {
    const dot = document.createElement("div");
    dot.className = "dot";
    dot.style.left = event.pageX - board.offsetLeft + "px";
    dot.style.top = event.pageY - board.offsetTop + "px";
    board.appendChild(dot);
  }
});
