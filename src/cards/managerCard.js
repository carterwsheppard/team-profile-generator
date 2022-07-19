//manager template

function createManagerCard(manager) {
    return `
        <div class="card">
            <div class="card-header bg-primary">
                <h4 class="card-title">${manager.name}</h4>
                <h5 class="card-subtitle">${manager.getRole()}</h4>
            </div>
            <div class="card-body">
                <h6 class="card-text">ID: ${manager.id}</h6>
                <h6 class="card-text">Email: <a href="mailto:${manager.email}">${manager.email}</a></h6>
                <h6 class="card-text">Office Number: ${manager.officeNumber}</h6>
            </div>
        </div>`
}

module.exports = createManagerCard;