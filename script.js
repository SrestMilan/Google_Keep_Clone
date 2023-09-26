const addBtton = document.querySelector("#add");

const updateLocalStorageData = () => {
  const txtAreaData = document.querySelectorAll("textarea");
  const noteList = [];
  txtAreaData.forEach((note) => {
    return noteList.push(note.value);
  });
  localStorage.setItem("notes", JSON.stringify(noteList));
};

// function to add note
const addNewNote = (text = "") => {
  const note = document.createElement("div");
  note.classList.add("note");

  const htmlData = `
  <div class="operation">
            <button class="edit"><i class="fas fa-edit"></i></button>
            <button class="delete"><i class="fas fa-trash-alt"></i></button>
        </div>
        <div class="main ${text ? "" : "hidden"}"></div>
    <textarea class="${text ? "hidden" : ""}"   ></textarea> `;

  note.insertAdjacentHTML("afterbegin", htmlData);
  document.body.appendChild(note);

  const editBtn = note.querySelector(".edit");
  const deleteBtn = note.querySelector(".delete");
  const mainDiv = note.querySelector(".main");
  const txtArea = note.querySelector("textarea");

  deleteBtn.addEventListener("click", () => {
    note.remove();
    updateLocalStorageData();
  });

  editBtn.addEventListener("click", () => {
    mainDiv.classList.toggle("hidden");
    txtArea.classList.toggle("hidden");
  });

  txtArea.addEventListener("change", (event) => {
    const value = event.target.value;
    mainDiv.innerHTML = value;

    updateLocalStorageData();
  });
};

const notes = JSON.parse(localStorage.getItem("notes"));
if (notes) {
  notes.forEach((note) => addNewNote(note));
}
// fire event
addBtton.addEventListener("click", () => addNewNote());
