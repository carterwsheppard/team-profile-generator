//intern template

function createInternCards(internsArray) {
    htmlInterns = [];
    for(let i = 0; i < internsArray.length; i++) {
        htmlInterns.push(`
        <div class="card">
            <div class="card-header bg-primary">
                <h4 class="card-title">${internsArray[i].name}</h4>
                <h6 class="card-text">${internsArray[i].getRole()}</h5>
            </div>
            <div class="card-body">
                <h6 class="card-text">ID: ${internsArray[i].id}</h6>
                <h6 class="card-text">Email: <a href="mailto:${internsArray[i].email}">${internsArray[i].email}</a></h6>
                <h6 class="card-text">School: ${internsArray[i].school}</h6>
            </div>
        </div>`)
    }

    return htmlInterns.toString();
}

module.exports = createInternCards;