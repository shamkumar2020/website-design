console.log('welcome to notes is notes.js') 

//if user add a notes add it to the localstorage
let addbtn = document.getElementById('addbtn');
addbtn.addEventListener("click", function(e){
	
	let addtext = document.getElementById("addtxt");
	let notes = localStorage.getItem("notes");
	if(notes == null){
		notesObj = [];
	}
	 else{
		 notesObj = JSON.parse(notes);
	 }
	 notesObj.push(addtxt.value);  
	 localStorage.setItem("notes", JSON.stringify(notesObj));  
     addtxt.value="";	 
	 console.log(notesObj);
})