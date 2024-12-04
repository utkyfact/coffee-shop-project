const dropdowns= document.querySelectorAll('.custom-dropdown')




dropdowns.forEach((dropdown,i) => {
    
    dropdown.addEventListener('click',function(e){
        const toggleDiv = this.children[1]
        toggleDiv.classList.toggle('hidden')

        const icon = this.children[0].children[1]
        icon.classList.toggle('rotate-180')
        
        

        dropdowns.forEach((e,l) =>{
            if(i != l){
                e.children[1].classList.add('hidden')
                e.children[0].children[1].classList.remove('rotate-180')
            }
        })
          
    })
});
