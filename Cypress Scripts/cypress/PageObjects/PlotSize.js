class PlotSize{
    getProjectName(){
        return cy.get("span[class=project-name]")
    }
    getMyProfileLink(){
        return cy.get('#my-profile-link')
    }
    getLogoutLink(){
        return cy.get('#logout-link')
    }
    getAvatarInitial(){
        return cy.get('div[class="avatar-circle"]')
    }
    getProjectSize(){
        return cy.get('div[class="project-size"]')
    }
    getPlotName(){
        return cy.get(':nth-child(1) > h3')
    }
    getPlotSize(){
        return cy.get("div[class='card'] p")
    }
    getPlotType(){
        return cy.get("p img")
    }
    getDataCompletion(){
        return cy.get('div[class="card"] p')
    }
}

export default new PlotSize();