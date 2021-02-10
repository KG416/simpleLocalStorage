//--------------------VARIABLES--------------------//
const userText = document.getElementById("user-text");

const saveBtn = document.getElementById("save-btn");
const getBtn = document.getElementById("get-btn");
const clearBtn = document.getElementById("clear-btn");
const refreshBtn = document.getElementById("refresh-btn");

//--------------------FUNCTIONS--------------------//

//----------SAVE TO LOCAL STORAGE----------//
saveBtn.addEventListener("click", () => {
    localStorage.setItem("userText", userText.innerHTML);
})

//When clicking Save button the user text is saved to local storage
//*localStorage = A built in storage in your browser
//*setItem = ADDS to local storage.
//*setItem takes 2 arguments. First the name (key) and then the source (value)

//----------GET SOMETHING FROM LOCAL STORAGE----------//
getBtn.addEventListener("click", () => {
    return userText.innerHTML = localStorage.getItem("userText");
})

//----------CLEAR LOCAL STORAGE + REFRESH----------//
clearBtn.addEventListener("click", () => {
    //Clear
    localStorage.clear();
    //Refresh
    document.location.reload();
})

//----------REFRESH----------//
refreshBtn.addEventListener("click", () => {
    document.location.reload();
})

