function change()
        {
            document.getElementById("btn").style.backgroundColor = "grey";
            document.getElementById("btn").style.color = 'white';
            
            const isValidEmail=validateEmail();
            if(!isValidEmail){
                document.getElementById("btn").disabled = false;
                alert("You have entered an invalid email address!")
                return
            }
            document.getElementById("btn").disabled = true;

        }

        function validateEmail() 
        {
            var email=document.getElementById("email").value;
            console.log(email)

            if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email))
            {
                return (true)
            }     
            return (false)
        }

        const form = document.getElementById('contact-form');

        form.addEventListener('submit', callbackFunction);
                            
        function callbackFunction(event) {
            event.preventDefault();
            const myFormData = new FormData(event.target);

            const formDataObj = {};
            myFormData.forEach((value, key) => (formDataObj[key] = value));
            console.log(formDataObj);
        };

        const debounce = (fn,delay)=>{
            let timer;            
            return function(...args){
                if(timer){
                    clearTimeout(timer);
                }
                timer=setTimeout(()=>{
                    fn(...args);

                },delay);
            };
            
        };
        document.getElementById("btn").addEventListener("click",debounce(e =>{
            console.log("clicked");
        },2000))

        
      

       