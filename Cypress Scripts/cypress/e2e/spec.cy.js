/// <reference types="Cypress" />
import PlotSize from "../PageObjects/PlotSize";

describe('UI Test Cases', () => {
  beforeEach(()=>{
    cy.visit('http://127.0.0.1:5500/index.html');
  })

  it('1. Verify Application Title', () => {
    cy.title().should('contain', 'Lander');
  });

  // it('2. Verify Navigation Links', () => {
  //   // Write test steps to click on each link and verify navigation to respective pages
  // });

  it('3. Verify User Project Information', () => {
    cy.fixture('example.json').then((projName)=>{
      const projectName = projName.Projectname
      PlotSize.getProjectName().invoke('text').then((text)=>{
        expect(text).to.equal(projectName)
      })
    })  
  })

  it('4. Check the dropdown', () => {
    cy.fixture('example.json').then((dropDown)=>{
      const dropDownProfile = dropDown.DropDownMyProfile
      PlotSize.getMyProfileLink().invoke('text').then((text)=>{
        expect(text).to.eq(dropDownProfile)
      })
    })
  });

  it('4.1 Check the dropdown', ()=>{
    cy.fixture('example.json').then((dropDown)=>{
      const dropDownLogout = dropDown.DropDownLogout
      PlotSize.getLogoutLink().invoke('text').then((text)=>{
        expect(text).to.eq(dropDownLogout)
      })
    })
  })

  it('5. Verify User Initials Icon', () => {
    cy.fixture("example.json").then((avatarFixtureInitial)=>{
      const avatarInitial = avatarFixtureInitial.AvatarInitial
      PlotSize.getAvatarInitial().invoke('text').then((text)=>{
        expect(text).to.eq(avatarInitial)
      })
    })
  });

  it('6. Verify Project Details', () => {
    cy.fixture("example.json").then((projectSizeFixture)=>{
      const projectSize = projectSizeFixture.ProjectSize
      PlotSize.getProjectSize().invoke('text').then((text)=>{
        expect(text).to.eq(projectSize)
      })
    })
  });

//   it('7. Verify Edit Project and Send to Sponsor Buttons', () => {
//     // Write test steps to test the functionality of the edit project and send to sponsor buttons
//   });

  it('8.1 Verify My Plot Name', () => {
    cy.fixture('example.json').then((plotData)=>{
      const plotName = plotData.PlotName

      PlotSize.getPlotName().invoke('text').then((text)=>{
        const plotNameEle = text.split(':')[1].trim()
        cy.log("This is ele name", plotNameEle)
        expect(plotNameEle).to.eq(plotName)
      })
    })
  });

  it('8.2 Verify My Plot size', () => {
    cy.fixture('example.json').then((plotData)=>{
      const plotSize = plotData.PlotSize
      
      PlotSize.getPlotSize().eq(0).invoke('text').then((text)=>{
        const plotSizeEle = text.split(':')[1].trim()
        expect(plotSizeEle).to.eq(plotSize)
      })
    })
  });

  it('8.3 Verify My Plot Type', () => {
    cy.fixture('example.json').then((plotData)=>{
      const plotType = plotData.PlotType

      PlotSize.getPlotType().eq(0).invoke('attr', 'alt').then((text)=>{
        expect(text).to.eq(plotType)
      })
    })
  });

  it('8.4 Verify My Plot data completion', () => {
    cy.fixture('example.json').then((plotData)=>{
      const dataCompletion = plotData.DataComplete

      PlotSize.getDataCompletion().eq(2).invoke('text').then((text)=>{
        const plotSizeEle = text.split(':')[1].trim()
        expect(plotSizeEle).to.eq(dataCompletion)
      })
    })
  });


//   it('9. Verify Add Plot Button', () => {
//     // Write test steps to click on the '+Add Plot' button and verify the form/modal
//   });

//   it('10. Verify Footer Links', () => {
//     // Write test steps to click on each footer link and verify navigation to respective pages
//   });

//   it('11. Empty Project Name', () => {
//     // Write test steps to test the behavior when the project name is empty
//   });

//   it('12. Long Project Name', () => {
//     // Write test steps to test the behavior with a very long project name
//   });

//   it('13. No Land types Available', () => {
//     // Write test steps to test the behavior when no land types are available to display
//   });

//   it('14. No Plots Available', () => {
//     // Write test steps to test the behavior when no plots are available for the selected project
//   });

//   it('15. Maximum Rows in My Plot', () => {
//     // Write test steps to test the behavior with a large number of rows in the 'My Plot' section
//   });
//   it('16. Invalid Login Credentials', () => {
//     // Write test steps to test the behavior with invalid login credentials
//   });

//   it('17. Unauthorized Access', () => {
//     // Write test steps to test unauthorized access to pages or functionalities
//   });

//   it('18. Incorrect Data Input', () => {
//     // Write test steps to test the behavior with incorrect data input for '+Add Plot' functionality
//   });

//   it('19. Incorrect URL Navigation', () => {
//     // Write test steps to test the behavior with incorrect URL navigation attempts
//   });
});
