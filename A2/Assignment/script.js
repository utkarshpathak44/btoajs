//goals
//make the profile dropdown
//make the profile page, not a new page, just update the dom, toggle it
//make it so that user can add documents, ie dynamically add table rows





//logic for opening and closing upload dialog
const addButton = document.querySelector('.uploadFile');
const closeButton = document.querySelector('.uploadClose');
const fileUploadDiv = document.querySelector('.centeredPopUp');
addButton.addEventListener('click', () => {
  if (fileUploadDiv.style.display === 'none') {
    fileUploadDiv.style.display = 'grid';
    console.log("clicked")
  }
  console.log("clicked")
});
closeButton.addEventListener('click', () => {
  fileUploadDiv.style.display = 'none';
});












function signDocument(id){

}

function clickUserDropDown(){
    document.getElementById("userDropdown").classList.toggle("show");
}



const tableHeader=`
<div class="item-attributes-row top-heading">
    <div class="att-itemh cb"><input type="checkbox" /><img></div>
    <div class="att-itemh h"><b>Document name</b></div>
    <div class="att-itemh st"><b>Status</b></div>
    <div class="att-itemh lm"><b>Last modified</b></div>
</div>
`

let proxyData=[
  {
      docTitle:"this document",
      docStatus:{
          status:"needs signing",
          wait:2
      },
      lastModified:new Date(),
      todo:"Sign now"
  },
]

let allDocuments=[]

function reRenderTable(){
  fileUploadDiv.style.display = 'none';
    // allDocuments=JSON.parse(localStorage.getItem("allDocuments"));
    console.log(allDocuments)
    const table=document.querySelector('.itemsContainer')
    let documentString=""
    allDocuments.forEach((document,index)=>{
      let status=""
      if(parseInt(document.docStatus.status)===1){
        status="Needs Signing"
      }else if(parseInt(document.docStatus.status)===2){
        status="Pending"
      }
      else{
        status="Completed"
      }
        documentString+=`
          <div class="item item-attributes-row" id=${document.docTitle}>
            <div class="att-item checkbox">
              <input type="checkbox" />
            </div>
            <div class="att-item document-name"><b>${document.docTitle}</b></div>
            <div class="att-item status">
              <button>${status}</button>
              <div>${document.docStatus.wait>0?"Waiting for "+document.docStatus.wait+" people":""}</div>
            </div>
            <div class="att-item last-modified">
              <div class="date-container">
                <date>${document.lastModified}</date>
                <time datetime="">2:01 PM</time>
              </div>
              <button>${document.todo}</button>
              <img class="more-items" src="assets/more.svg" alt="" />
            </div>
          </div>
        `
    })
    documentString=tableHeader+documentString
    table.innerHTML=documentString
    addMoreItemsEventListeners()
}

function addMoreItemsEventListeners() {
  const moreItemsButtons = document.querySelectorAll('.more-items');
  moreItemsButtons.forEach((button, index) => {
    button.addEventListener('click', () => {
      // Remove the document from allDocuments and localStorage
      allDocuments.splice(index, 1);
      localStorage.setItem("allDocuments", JSON.stringify(allDocuments));
      console.log(`Document at index ${index} deleted.`);
      
      // Re-render the table
      reRenderTable();
    });
  });
}


const dropArea = document.querySelector('.dropArea');
const fileInput = document.getElementById('fileInput');
const fileNameInput = document.getElementById('fileName');
const fileStatusInput = document.getElementById('fileStatus');
const filewaitInput = document.getElementById('fileWait');
const lastModifiedInput = document.getElementById('lastModified');
const fileForm = document.getElementById('fileForm');


dropArea.addEventListener('dragover', (event) => {
  event.preventDefault();
  dropArea.classList.add('dragover');
});
dropArea.addEventListener('dragleave', () => {
  dropArea.classList.remove('dragover');
});


dropArea.addEventListener('drop', (event) => {
  event.preventDefault();
  dropArea.classList.remove('dragover');
  const file = event.dataTransfer.files[0];
  if (file) {
    populateForm(file);
  }
});

fileInput.addEventListener('change', (event) => {
  const file = event.target.files[0];
  if (file) {
    populateForm(file);
  }
});

function populateForm(file) {
  fileNameInput.value = file.name;
  fileStatusInput.value = "Waiting"; 
  filewaitInput.value = 0;
  lastModifiedInput.value = new Date(file.lastModified).toLocaleString();
}

function addDocument(document){
  allDocuments.push(document)
  console.log("all document are as follows")
  console.log(allDocuments)
  reRenderTable();
  localStorage.setItem("allDocuments", JSON.stringify(allDocuments));
}

fileForm.addEventListener('submit', (event) => {
  event.preventDefault(); 

  const fileName = fileNameInput.value.trim();
  const fileStatus = fileStatusInput.value.trim();
  const lastModified = lastModifiedInput.value.trim();
  const wait = filewaitInput.value.trim();

  if (!fileName || !fileStatus || !lastModified) {
    alert('Please fill out all fields before submitting.');
    return;
  }

  const fileDetails = { docTitle:fileName, docStatus:{status:fileStatus,wait:wait}, lastModified, todo:"sign now" };
  console.log("this document is now being added >")
  console.log(fileDetails)
  addDocument(fileDetails);

  fileNameInput.value = '';
  fileStatusInput.value = '';
  filewaitInput.value = '';
  lastModifiedInput.value = '';
  fileInput.value = '';
});

const profileDropDown=document.querySelector(".DDbutton")

allDocuments=JSON.parse(localStorage.getItem("allDocuments"));
reRenderTable()

const leftPane = document.querySelector('.left-pane');
const toggleBtn = document.querySelector('.floating-button');


toggleBtn.addEventListener('click', () => {
  leftPane.classList.toggle('collapsed');
  const image = document.querySelector('.collapseImage');

  if (image.style.transform === 'scaleX(1)') {
    image.style.transform = 'scaleX(-1)';  // Flip it back to original
  } else {
    image.style.transform = 'scaleX(1)'; // Mirror the image
  }
});



document.querySelector('.DDButton').addEventListener('click', function() {
  const flexContainer = document.querySelector('.dropDownItems');
  
  // Toggle between 'flex' and 'none' for display property
  if (flexContainer.style.display === 'none') {
    flexContainer.style.display = 'flex';
  } else {
    flexContainer.style.display = 'none';
  }

  // if (flexContainer.style.opacity === '0' || !flexContainer.style.opacity) {
  //   flexContainer.style.opacity = '1';
  //   flexContainer.style.maxHeight = '300px';
  //   flexContainer.style.display = 'flex';
  // } else {
  //   flexContainer.style.opacity = '0';
  //   flexContainer.style.maxHeight = '0';
  //   setTimeout(() => {
  //     flexContainer.style.display = 'none';
  //   }, 100);
  // }
});


//we have two options to add a profile page
//either we can add a new absolute position component and toggle the display of the same
//or we can manipulate the dom by deleting the components

//logic for opening and closing the  profile 
const openProfile = document.querySelector('.openProfile');
const profileClose = document.querySelector('.closeButton');
const profilePage = document.querySelector('.profilePage');

openProfile.addEventListener('click', () => {
  profilePage.classList.add('visible'); // Add a class
  console.log("opening profile");
});

profileClose.addEventListener('click', () => {
  profilePage.classList.remove('visible'); // Remove the class
});

document.getElementById('profileImage').addEventListener('change', function(event) {
  const file = event.target.files[0];
  const imagePreview = document.getElementById('imagePreview');

  if (file) {
    const reader = new FileReader();

    reader.onloadend = function() {
      imagePreview.src = reader.result;
      imagePreview.style.display = 'block'
    };

    reader.readAsDataURL(file);
  } else {
    imagePreview.style.display = 'none'; 
  }
});

// Handle form submission
document.getElementById('profileForm').addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent the default form submission

  // Get form data
  const formData = new FormData(event.target);

  // For demonstration, let's log the form data
  console.log('Form Data:', Object.fromEntries(formData));

  // Here you can make an AJAX request to submit the data to the server
  alert('Profile updated successfully!');
});
