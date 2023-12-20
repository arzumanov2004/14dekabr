const formGroupExampleInput = document.getElementById("formGroupExampleInput")
const formGroupExampleInput1 = document.getElementById("formGroupExampleInput1")
const formGroupExampleInput2 = document.getElementById("formGroupExampleInput2")
const formGroupExampleInput3 = document.getElementById("formGroupExampleInput3")
const form = document.getElementById("form")

function axiosPost (e) {
    e.preventDefault();
        axios.post("https://65685f8d9927836bd974aa4c.mockapi.io/pradacts", {
            name: formGroupExampleInput.value,
            surname: formGroupExampleInput1.value,
            age: formGroupExampleInput2.value,  
            Email: formGroupExampleInput3.value,
            
        }).then(res => {
                console.log(res);
                form.reset()
            })
            }
            
            
            form.addEventListener('submit', axiosPost)