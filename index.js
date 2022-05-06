let theTitle = "Elzero",
    theDescription = "Elzero Web School",
    theDate = "25 / 10";
let markUp = `
    <h3>Hello ${theTitle}</h3>
    <p>${theDescription}</P>
    <span>${theDate}</span>
`
document.write(markUp.repeat(4))