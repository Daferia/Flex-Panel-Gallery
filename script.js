const panels = document.querySelectorAll('.panel');

function toggleOpen(){
    console.log('Hello');
    this.classList.toggle('open') // adds the clss open when toggle to panel
};

function toggleActive(e){
    console.log(e.propertyName);
    if(e.propertyName.includes('flex')){ // looking for word flex in CSS propert due to browser naming conventions on flex/flex-box
        this.classList.toggle('open-active'); // adds the .open-active class when toggled
    }
}

//loops through each panel and looks for click event and runs function
panels.forEach(panel => panel.addEventListener('click', toggleOpen));

//loops through each panel and looks for transitionend event and runs function
panels.forEach(panel => panel.addEventListener('transitionend', toggleActive));
