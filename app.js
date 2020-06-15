let suallar=[ 
    {
        sual: '1.<code>document.write(5%2)</code> ifadesinde ekrana ne yazilacaq? ',
        a:[2.5,2,1,"undefined"], cavab: "1"
    },
    {
        sual: '2.<code>let name=true</code> deyisenin tipi nedir?',
        a:["string","boolean","object","number"],cavab:"boolean"
    },
    {
        sual: '3.html-de hansi teqden horizontal xett cekmek ucun istifade edirler?',
        a:['br',"hr","p","h"],cavab: "hr"
    },
    {
        sual: '4.bunlardan hansi yazinin olcusunu boyutmek ucun istifade edilir',
        a:["font-size","font-family","text-transform","font-color"],cavab:"font-size"
    },
    {
        sual: '5.<code>arr=["azer","vaqif","vusal"] console.log(arr[1])</code>-yazdiqda konsolda hansi ad yazilacaq?',
        a:["azer","vaqif","vusal","hec biri"],cavab:"vaqif"
    },
    {
        sual: '6.yazi rengini deyismek ucun hansi istifade olunur?',
        a:["font-color","text-color","color","fontcolor"],cavab:"color"
    },
    {
        sual: '7.<code>#</code> isaresiyle asagidakilardan hansi secilir?',
        a:["class","tag","first","id"],cavab:"id"
    },
    {
        sual: '8.asagidakilardan hansi ile yazi shrifti deyismek olur?',
        a:["font-size","font-family","text-transform","font"],cavab:"font-family"
    },
    {
        sual: '9.asagidakilardan hansi metndeki sozler arasinda mesafe ucundu?',
        a:["letter-spacing","word-spacing","word-space","text-spacing"],cavab:"word-spacing"
    },
    {
        sual: '10.kenardan boslug vermek ucun hansi istifade edilir',
        a:["margin","padding","border","margin-width"],cavab: "margin"
    }
]
let users=[
    {
        username:'admin',
        password: 'admin',
        score:"siz adminsiniz"
        
    }
]

const container=document.querySelector(".container-fluid")  ///test containeri
let result=document.querySelector(".result")     //check etdikden sonra cixacaq block
let form=document.querySelector(".form")       //form
let formInput=document.querySelectorAll(".form-text")   //radio inputlar
let yoxla=document.querySelector(".yoxla")      //testdeki yoxla duymesi
let testTitle=document.querySelector(".title")     //test yazisi 
let regstrbtn=document.querySelector(".register")   //buuton register ucun
let form_r=document.querySelector(".form-r")      //register formu esas formun daxilindedi
let administrator=document.querySelector(".admin")  //admin yazdiqda acialacaq olan block
let back=document.querySelector(".back")      //admin blockundan geri qaytaran button



function basla(){       //basla duymesine basdigda testi yaratmaq ucun

                      
    for(let i=0;i<suallar.length;i++){
        const container=document.querySelector(".container-fluid")  //containeri secir
        console.log(container);
        let textP=document.createElement("p")     //p teqi yaaradir
        textP.innerHTML=suallar[i].sual          //p teqine text yazdirmaq
        textP.classList.add("question")           //p teqine clas vermek
        container.appendChild(textP)            //p-ni containere elave etmek

        for(let j=0;j<4;j++){
            let input=document.createElement("input")    //her p sual ucun 4 input yaradir
            input.type="radio"                        //  typni t=radio edir
            input.name=i                              
            input.classList.add("name")             //class elave edir

            let span=document.createElement("span")
            span.innerHTML=suallar[i].a[j]         //sual ve inputlari test seklinde yazmaq ucun
            input.value=suallar[i].a[j]
            span.appendChild(input)
            span.classList.add("span")
            container.appendChild(span)          //sonda containere elave edir
        }

        
    }
    
    form.style.display="none"
    yoxla.style.display="block"
}

function check(){     //secilmis radio buttonlari menim cavablarla qarsilasdirib duzgun oldugda xali artirir
    let count=0;
    let checkedInput =document.querySelectorAll(".name:checked")
    for(let i=0;i<checkedInput.length;i++){
        if(checkedInput[i].value==suallar[i].cavab){
            count++
        }
        

    }
    for(let i=1;i<users.length;i++){     //userlere yigdiglari bali elave etmekcun
        users[i].score=count*10
    }
    result.style.display="flex"
    let netice=document.createElement("p")
    result.innerHTML=`imtahandan yigdiginiz bal: ${count*10}`
    let cixis=document.createElement("button")
    cixis.style.display="block"
    cixis.innerHTML="cixis"
    cixis.classList.add("exit")
    result.appendChild(netice)
    result.appendChild(cixis)
    
    document.querySelector(".exit").addEventListener('click',function(){  //cixis etdikde yeniden form hisseye qayidir
        container.style.display="none"
        testTitle.style.display="none"
        result.style.display="none"
        yoxla.style.display="none"
        form.style.display="block"
        
    })
   
}


function getUsernamePassword(){
    let username=document.querySelector('.form-text').value;
    let password=document.querySelector('.form-password').value;
    return {
        username:username,
        password:password
    }
}

function login(){    //her sey dogrudursa basla duymesine basdigda test yuklenecek
    up=getUsernamePassword()
    checkLogin(up.username,up.password)
    if(up.username=='admin' && up.password=='admin'){
            administrator.style.display="block"
            container.style.display="none"
            testTitle.style.display="none"
            yoxla.style.display="none"
            admin()
    }
   
    
}






function checkLogin(username,password){
    let is_regigtered=false;
    let is_loggedIn=false;
    for(let i=0;i<users.length;i++){
        if(users[i].username==username){
            is_regigtered=true;
            if(users[i].password==password){
                is_loggedIn=true;
                break
            }
        }
    }
    

    if(is_regigtered){
        if(is_loggedIn){
            basla()
            
            
        }
        else{
            alert('password is in correct')
        }
    }
    else{
        alert('user not found')
    }

}
function getRegist(){  //qeydiyyat ucun 
    let reUser=document.querySelector(".reUser").value
    let rePassword=document.querySelector(".rePassword").value
    return {
        username:reUser,
        password:rePassword,
        
    }
}

function submit(){  //qeydiyati submit etdikde objecte yukleycek istifadecileri
    add=getRegist()
    users.push(add)
    form_r.style.display="none"
}

function cancel(){
    form_r.style.display="none"
}





function register(){  //register paneli acilacaq

    form_r.style.display="block" 
   
}










function admin(){  //admin yazdigda baslaya basdigda ul-li seklinde telebeleri gostercek
    let students=document.createElement("ul")
    for(let i=1;i<users.length;i++){
        let userItems=document.createElement("li")
        if(users[i].username.length>0 && users[i].password.length>0){
            userItems.innerHTML=`Username : ${users[i].username} Password : ${users[i].password} Score: ${users[i].score} `
        }
        
        
        students.appendChild(userItems)
        administrator.appendChild(students)

    }
}

function backToHome(){   
    administrator.style.display="none"
    form.style.display="block"
}




