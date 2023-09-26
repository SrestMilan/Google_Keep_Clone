const addBtton = document.querySelector("#add");

// function to add note
const addNewNote = (text = "") => {
  const note = document.createElement("div");
  note.classList.add("note");

  const htmlData = `
  <div class="operation">
            <button class="edit"><i class="fas fa-edit"></i></button>
            <button class="delete"><i class="fas fa-trash-alt"></i></button>
        </div>
        <div class="main"></div>
    <textarea ></textarea> `;

  note.insertAdjacentHTML("afterbegin", htmlData);
  document.body.appendChild(note);
};

// fire event
addBtton.addEventListener("click", () => addNewNote());
