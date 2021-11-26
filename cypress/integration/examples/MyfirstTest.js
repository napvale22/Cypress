const { cyan } = require("colorette")

describe('MyTestSuite', function() {

    it('Verify Title of The Page!', () => {

      cy.visit('https://staging-finance.rabbitinternet.com/en/product/health-insurance/questions')
      cy.title().should('eq','Health Insurance Inquiry | Rabbit Care')
      cy.contains('IPD/OPD').click()
      cy.contains('I already have existing healthcare policy and I want to see top-up healthcare plans.').click()
      cy.contains('Individuals').click()
    
      
    })
  })
  