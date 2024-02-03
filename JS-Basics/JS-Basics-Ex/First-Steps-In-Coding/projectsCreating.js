function projectcreations (input){

    let name = (input[0])
    let numberOfProjects = (input[1])
    let hours = numberOfProjects * 3;

    console.log(`The architect ${name} will need ${hours} hours to complete ${numberOfProjects} project/s.`)
}
projectcreations(["George ",
"4 "]);