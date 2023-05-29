const progress = document.getElementById("progress");
const form = document.getElementById("form");

form.addEventListener("submit", function(event) {
    event.preventDefault();
  
    const fileInput = document.getElementById("file");
    const file = fileInput.files[0];
  
    if (file) {
      const xhr = new XMLHttpRequest();
  
      xhr.upload.addEventListener("progress", function(e) {
        if (e.lengthComputable) {
          const percentage = e.loaded / e.total;
          progress.value = percentage;
        }
      });
  
      xhr.upload.addEventListener("load", function() {
        progress.value = 1;
      });
  
      xhr.open("POST", form.action, true);
      xhr.send(new FormData(form));
    }
  });