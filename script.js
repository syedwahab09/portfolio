
// --------------------------------------script for about-------------------------------------

let tabLinks=document.getElementsByClassName("tab-links");
        let tabContents=document.getElementsByClassName("tab-contents");
        function opentab(tabname){
            for(tabLink of tabLinks){
                tabLink.classList.remove("active-link");

            }
            for(tabContent of tabContents){
                tabContent.classList.remove("active-tab");

            }
            event.currentTarget.classList.add("active-link")
            document.getElementById(tabname).classList.add("active-tab");
        }



        // ---------------------------------------script for side menu---------------------------------------------        

        var sidemeu=document.getElementById("sidemenu");
        function openmenu(){
            sidemeu.style.right="0";
        }

        function closemenu(){
            sidemeu.style.right="-200px";
        }


        // ---------------------------------------------------script for form-------------------------------------------------    

        const scriptURL = 'https://script.google.com/macros/s/AKfycbzo3qx5h2Art_VHVB6kyuniIECB8_nLV8NlyuUSaO0RQuRtJlUUp97aOZTjW00ZuZw/exec'
    const form = document.forms['submit-to-google-sheet']

    const msg=document.getElementById("msg");

  
    form.addEventListener('submit', e => {
      e.preventDefault()
      fetch(scriptURL, { method: 'POST', body: new FormData(form)})
        .then(response => {
            msg.innerHTML="Message sent successfully"
            setTimeout(function(){
                msg.innerHTML=""
            },5000)
            form.reset()
        })
        .catch(error => console.error('Error!', error.message))
    })