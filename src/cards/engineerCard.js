function createEngineerCards(engineersArray) {
    htmlEngineers = [];
    for(let i = 0; i < engineersArray.length; i++) {
        htmlEngineers.push(`
        <div class="card">
            <div class="card-header bg-primary">
                <h4 class="card-title">${engineersArray[i].name}</h4>
                <h5 class="card-subtitle">${engineersArray[i].getRole()}</h5>
            </div>
            <div class="card-body">
                <h6 class="card-text">ID: ${engineersArray[i].id}</h6>
                <h6 class="card-text">Email: <a href="mailto:${engineersArray[i].email}">${engineersArray[i].email}</a></h6>
                <h6 class="card-text">Github: <a href="https://www.github.com/${engineersArray[i].github}" target="_blank">${engineersArray[i].github}</a></h6>
            </div>
        </div>`)
    }

    return htmlEngineers.toString();
}

module.exports = createEngineerCards;