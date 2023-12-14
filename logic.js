console.log("Radhe Radhe")

arrow = document.querySelector(".arrow1")
project_1_expands = document.querySelector(".project_1_expands")

project_img = document.querySelectorAll(".project_img")

project_img_right = document.querySelector(".project_img_right")



arrow2 = document.querySelector(".arrow2")
project_2_expands = document.getElementsByClassName("project_2_expands")[0]

project_img_2 = document.querySelectorAll(".project_img_2")

project_img_2_right = document.querySelector(".project_img_2_right")


arrow3 = document.querySelector(".arrow3")
project_3_expands = document.querySelector(".project_3_expands")

project_img_3 = document.querySelectorAll(".project_img_3")

project_img_3_right = document.querySelector(".project_img_3_right")



// console.log(getComputedStyle(project_2_expands).display)
arrow.addEventListener("click", () => {
    if (getComputedStyle(project_2_expands).display == "none" && getComputedStyle(project_3_expands).display == "none") {
        project_img_right.classList.toggle("project_img_r")
        project_1_expands.classList.toggle("project_1_expands_anime")
        project_img.forEach(element => {
            element.classList.toggle("project_img_animation")
        });
        document.getElementsByClassName('project_1_expand')[0].scrollIntoView();
    }
    else {
        if (getComputedStyle(project_2_expands).display == "block") {
            project_2_expands.classList.toggle("project_1_expands_anime");
            project_img_right.classList.toggle("project_img_r")
            project_1_expands.classList.toggle("project_1_expands_anime")
            project_img.forEach(element => {
                element.classList.toggle("project_img_animation")
            })
            document.getElementsByClassName('project_1_expand')[0].scrollIntoView();

        } else {
            project_3_expands.classList.toggle("project_1_expands_anime");
            project_img_right.classList.toggle("project_img_r")
            project_1_expands.classList.toggle("project_1_expands_anime")
            project_img.forEach(element => {
                element.classList.toggle("project_img_animation")
            })
            document.getElementsByClassName('project_1_expand')[0].scrollIntoView();
        }

    }
})



// project-2

arrow2.addEventListener("click", () => {
    if (getComputedStyle(project_1_expands).display == "none" && getComputedStyle(project_3_expands).display == "none") {
        project_img_2_right.classList.toggle("project_img_r")
        project_2_expands.classList.toggle("project_1_expands_anime")
        project_img_2.forEach(element => {
            element.classList.toggle("project_img_animation")
        });
        document.getElementsByClassName('project_2_expand')[0].scrollIntoView();
    }
    else {
        if (getComputedStyle(project_1_expands).display == "block") {
            project_1_expands.classList.toggle("project_1_expands_anime");
            project_img_2_right.classList.toggle("project_img_r")
            project_2_expands.classList.toggle("project_1_expands_anime")
            project_img_2.forEach(element => {
                element.classList.toggle("project_img_animation")
            })
            document.getElementsByClassName('project_2_expand')[0].scrollIntoView();

        } else {
            project_3_expands.classList.toggle("project_1_expands_anime");
            project_img_2_right.classList.toggle("project_img_r")
            project_2_expands.classList.toggle("project_1_expands_anime")
            project_img_2.forEach(element => {
                element.classList.toggle("project_img_animation")
            })
            document.getElementsByClassName('project_2_expand')[0].scrollIntoView();
        }

    }
})

// project-3
arrow3.addEventListener("click", () => {
    if (getComputedStyle(project_2_expands).display == "none" && getComputedStyle(project_1_expands).display == "none") {
        project_img_3_right.classList.toggle("project_img_r")
        project_3_expands.classList.toggle("project_1_expands_anime")
        project_img_3.forEach(element => {
            element.classList.toggle("project_img_animation")
        });
        document.getElementsByClassName('project_3_expand')[0].scrollIntoView();
    }
    else {
        if (getComputedStyle(project_2_expands).display == "block") {
            project_2_expands.classList.toggle("project_1_expands_anime");
            project_img_3_right.classList.toggle("project_img_r")
            project_3_expands.classList.toggle("project_1_expands_anime")
            project_img_3.forEach(element => {
                element.classList.toggle("project_img_animation")
            })
            document.getElementsByClassName('project_3_expand')[0].scrollIntoView();
        } else {
            project_1_expands.classList.toggle("project_1_expands_anime");
            project_img_3_right.classList.toggle("project_img_r")
            project_3_expands.classList.toggle("project_1_expands_anime")
            project_img_3.forEach(element => {
                element.classList.toggle("project_img_animation")
            })
            document.getElementsByClassName('project_3_expand')[0].scrollIntoView();
        }

    }
})

// clients numbering
happy_clients = document.querySelectorAll(".happy_clients")[0]
completed_projects = document.querySelectorAll(".happy_clients")[1]
ongoing_projects = document.querySelectorAll(".happy_clients")[2]

a = 0
b = 0
function hc_incri() {
        setInterval(() => {
            a=a+1
            b=a*9+18
            if (a<10) {
                happy_clients.innerText =a+""+b+""+a+"+"
            }
        },100);
}

c=0 
d=0
function cp_incri() {
    setInterval(() => {
        c=c+1
        d=c*9+9
        if (c<10) {
            completed_projects.innerText =c+""+d+""+c+"+"
        }
    },100);
}

e=0 
f=0
function op_incri() {
    setInterval(() => {
        e=e+1
        // f=e+1
        if (e<26) {
            ongoing_projects.innerText =e+"+"
        }
    },100);
}

winh = window.innerHeight


r=0
addEventListener("scroll",()=>{
    hc = happy_clients.getBoundingClientRect().top;
        if (hc <= winh - 150 && r ==0) {
            for (let i = 0; i < 1; i++) {
                r=r+1
                hc_incri()
            }        
}


cp = completed_projects.getBoundingClientRect().top;
        if (cp <= winh - 150 && r ==1) {
            for (let j = 0; j < 1; j++) {
                r=r+1
                cp_incri()
            }        
}

op = ongoing_projects.getBoundingClientRect().top;
        if (op <= winh - 150 && r ==2) {
            for (let k = 0; k < 1; k++) {
                r=r+1
                op_incri()
            }        
}

})


// styling the burger
show_point = document.getElementsByClassName("show")[0]
console.log(show_point);
