// console.log("Hello Guys We make cv maker app with the help of javascript:-")
let userObject={};

function subMit(){
    let name = document.getElementById("name").value;
    let prof = document.getElementById("prof").value;
    let mail = document.getElementById("mail").value;
    let number = document.getElementById("number").value;
    let web = document.getElementById("web").value;
    let career = document.getElementById("career").value;
    let skill = document.getElementById("skill").value;
    let proj = document.getElementById("proj").value;
    let uname = document.getElementById("uname").value;
    let cname = document.getElementById("cname").value;
    let pyear = document.getElementById("pyear").value;
    let hobb = document.getElementById("hobb").value;

    console.log(name,prof,mail,number,web,career,skill,proj,uname,cname,pyear,hobb);

    if (validateTextFields(name,prof,mail,number,web,career,skill,proj,uname,cname,pyear,hobb) === true) {

        userObject={
            uName:name,
            uProf:prof,
            uMail:mail,
            uNumber:number,
            uWeb:web,
            uCareer:career,
            uSkill:skill,
            uProj:proj,
            uUname:uname,
            uCname:cname,
            uPyear:pyear,
            uHobb:hobb
        }
        FetchTheValuesOnUI();
 }

} 
function validateTextFields(name,prof,mail,number,web,career,skill,proj,uname,cname,pyear,hobb) {
    if(name.trim()==""){
        alert("plz fill the text area of name");
        return false;
    } else if(prof.trim()==""){
        alert("plz fill the text area of prof");
        return false;
    } else if(mail.trim()==""){
        alert("plz fill the text area of mail");
        return false;
    } else if(number.trim()==""){
        alert("plz fill the text area of number");
        return false;
    } else if(web.trim()==""){
        alert("plz fill the text area of web");
        return false;
    } else if(career.trim()==""){
        alert("plz fill the text area of career");
        return false;
    } else if(skill.trim()==""){
        alert("plz fill the text area of skill");
        return false;
    } else if(proj.trim()==""){
        alert("plz fill the text area of proj");
        return false;
    } else if(uname.trim()==""){
        alert("plz fill the text area of uname");
        return false;
    }else if(cname.trim()==""){
        alert("plz fill the text area of cname");
        return false;
    }else if(pyear.trim()==""){
        alert("plz fill the text area of pyear");
        return false;
    }else if(hobb.trim()==""){
        alert("plz fill the text area of hobb");
        return false;
    }
    return true;
}

function FetchTheValuesOnUI(){
        document.getElementById("main").innerHTML = `
        <h1>`+userObject.uName+`</h1>
        <small>`+userObject.uProf+`</small>
        <div class="row mt-3">
                <div class="col-md-4">
                <a> <i class="mr-3 fa fa-phone"></i> `+ userObject.uMail +`</a>
                </div>

                <div class="col-md-4">
                <a><i class="mr-3 fa fa-envelope"></i>`+ userObject.uNumber +`</a>
                </div>

                <div class="col-md-4">
                <a href="`+ userObject.uWeb +`"><i class="mr-3 fa fa-globe"></i>`+ userObject.uWeb +` </a>
                </div>
        </div>

        <hr>

        <h3>Career Objective</h3>
        <p>`+ userObject.uCareer +`</p>
        <hr>

        <div class="skills">
        <h3>Skills</h3>`+ splitTheValues(userObject.uSkill) +`
        </div>

        <hr>
    <div class="projects">
    <h3>Projects </h3>
    `+ splitTheValues(userObject.uProj) +`
    </div>

    <hr>
    <div class="education">
    <h3>Education</h3>
      <h4>`+ userObject.uUname +`</h4>
      <small>`+ userObject.uPyear +` </small> <br>
      <p>`+ userObject.uCname +` </p>
      <h2>`+userObject.uHobb+`</h2>
    </div>
        `;
}


function splitTheValues(val) {
    let split = val.split(',');
    let elements = "<ul style='padding: 0px;'>";
    split.forEach((el) => {
        elements += "<li> <i class='fa fa-code'></i> "+ el +" </li>";
    });
    elements += "<ul>"
    return elements;
}
