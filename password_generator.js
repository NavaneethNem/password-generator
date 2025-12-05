            function validate(){
                document.getElementById("output").value=""
                 document.getElementById("chooseone").innerText=""
                 document.getElementById("leng").innerText=""
                let k=1
                let len=document.getElementById("len").value.trim()
                if (len=="")
                {
                    k=0
                    document.getElementById("leng").innerText="Enter desired Password Length!"
                }
                else if(len<3){
                    k=0
                    document.getElementById("leng").innerText="Password length can not be less than 3!"
                }
                let uc=document.getElementById("uc")
                let lc=document.getElementById("lc")
                let numb=document.getElementById("num")
                let sc=document.getElementById("spec")
                if (!(uc.checked || lc.checked || numb.checked || sc.checked)){
                    k=0
                    document.getElementById("chooseone").innerText="Choose atleast one type of Characterset to include!"
                }
                return k
            }
            function copyToClipboard() {
            let copyText = document.getElementById("output")
            navigator.clipboard.writeText(copyText.value)
            alert("Copied the text: " + copyText.value)
            }
            function generatePassword(){
                if (validate()==1){
                   let dom1="ABCDEFGHIJKLMNOPQRSTUVWXYZ"
                   let dom2="abcdefghijklmnopqrstuvwxyz"
                   let dom3="1234567890"
                   let dom4="~!@#$%^&*+=?<>"

                let uc=document.getElementById("uc")
                let lc=document.getElementById("lc")
                let numb=document.getElementById("num")
                let sc=document.getElementById("spec")
                
                let domain=""
                if(uc.checked){
                    domain+=dom1
                }
                if(lc.checked){
                    domain+=dom2
                }
                if(numb.checked){
                    domain+=dom3
                }
                if(sc.checked){
                    domain+=dom4
                }
                 let len=document.getElementById("len").value.trim()
                 let pass=""
                 for (let i=1;i<=len;i++){
                    let randomIndex=Math.floor(Math.random()*(domain.length))
                    pass+=domain[randomIndex]
                 }
                 document.getElementById("output").value=pass
                }
            }