var bodyEl = document.getElementsByTagName('body')[0];

var backgroundControl = document.getElementById('background-icon');
var tileControl = document.getElementById('tile-icon');
var thumbsControl = document.getElementById('thumbs-icon');

var wrapperBlock = document.getElementById('wrapper');

var fileInput = document.getElementById('file-input');
var uploadButton = document.getElementById('upload');

backgroundControl.addEventListener('click', function() {
  if (bodyEl.classList.contains('dark')) {
    bodyEl.classList.remove('dark');
  } else {
    bodyEl.classList.add('dark');
  }
});

tileControl.addEventListener('click', function() {
  tileControl.classList.add('active');
  thumbsControl.classList.remove('active');
  wrapperBlock.classList.add('tiles');
});

thumbsControl.addEventListener('click', function() {
  tileControl.classList.remove('active');
  thumbsControl.classList.add('active');
  wrapperBlock.classList.remove('tiles');
});

uploadButton.addEventListener('click', function() {
  fileInput.click();
});

function addPictureToLibrary(name, picture) {
  var divElem = document.createElement('div');
  divElem.classList.add("image");
  divElem.innerHTML = '<div class="image-name">' + name + '</div>'
    + '<img src="' + picture + '" alt="' + name + '" />';
  wrapperBlock.append(divElem);
};

fileInput.addEventListener('change', function(e) {
  var files = fileInput.files;
  if (files && files.length > 0) {
    Object.keys(files).forEach(function(key) {
      var file = files[key];
      if (file.type.startsWith('image/')) {
        var reader = new FileReader();
        reader.onload = function(event) {
          addPictureToLibrary(file.name, event.target.result);
        };
        reader.readAsDataURL(file);
      }
    });
  }
  e.target.value = null;
});