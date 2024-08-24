const addproject = document.getElementById("addproject");
const form = document.getElementById("form");
const submit = document.getElementById("submit");
const title = document.getElementById("title");
const description = document.getElementById("description");
const maincontainer = document.getElementById("main-container");
maincontainer.style.justifyContent = "space-btween";

addproject.addEventListener("click", (e) => {
  form.style.display = "block";
});

submit.addEventListener("click", (e) => {
  e.preventDefault();

  const storage = {
    title: title.value,
    description: description.value,
  };
  const side = document.getElementById("side");
  side.style.display = "block";
  const h1 = document.createElement("h1");
  side.appendChild(h1);
  const p = document.createElement("p");
  side.appendChild(p);
  const project = document.createElement("div");

  side.appendChild(project);
  project.style.backgroundColor = "grey";
  project.style.height = "100px";
  project.style.width = "auto";
  project.appendChild(h1);
  project.appendChild(p);
  h1.textContent = storage.title;
  p.textContent = storage.description;
  title.value = "";
  description.value = "";
  project.addEventListener("click", (e) => {
    const dashboard = document.createElement("div");
    maincontainer.appendChild(dashboard);
    dashboard.style.backgroundColor = "orange";
    dashboard.style.marginRight = "20px";
    dashboard.style.width = "300px";
    dashboard.style.height = "300px";
    form.style.display = "none";
    const addtodo = document.createElement("button");
    dashboard.appendChild(addtodo);
    addtodo.textContent = "add to do ";
    addtodo.addEventListener("click", (e) => {
      const todocontainer = document.createElement("div");
      const titleone = document.createElement("input");
      const descriptiontwo = document.createElement("input");
      maincontainer.appendChild(todocontainer);
      todocontainer.appendChild(titleone);
      todocontainer.appendChild(descriptiontwo);
      todocontainer.style.backgroundColor = "orange";
      todocontainer.style.width = "auto";
      todocontainer.style.height = "300px";
      todocontainer.style.margin = "100px 100px";
      addtodo.addEventListener("click", (e) => {
        todocontainer.style.display = "none";
      });
    });

    project.addEventListener("click", (e) => {
      dashboard.style.display = "none";
    });
  });
});
