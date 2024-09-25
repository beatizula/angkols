console.log("Hello from main.js!");
document.querySelectorAll("tr").forEach((row) => {
  row.addEventListener("click", () => {
    console.log("You clicked a table row!");
  });
});
