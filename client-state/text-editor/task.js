const editor = document.getElementById("editor");
const clearBtn = document.getElementById("clear-btn");

editor.addEventListener("input", function() {
    localStorage.setItem("editorContent", editor.value);

    if (editor.value.trim() !== "") {
        clearBtn.style.display = "block";
    } else {
        clearBtn.style.display = "none";
    }
});

if (localStorage.getItem("editorContent")) {
    editor.value = localStorage.getItem("editorContent");
    clearBtn.style.display = "block";
} else {
    clearBtn.style.display = "none";
}

clearBtn.addEventListener("click", function() {
    editor.value = "";
    localStorage.removeItem("editorContent");
    clearBtn.style.display = "none";
});