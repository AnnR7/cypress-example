beforeEach(() => {
        cy.visit('/')
      })

describe('Проверка входа', () => {

  it('Нормальный вход', () => {
    cy.login('bropet@mail.ru', '123')
    cy.contains('Добро пожаловать bropet@mail.ru').should('be.visible')
  })

  it('Пустой email', () => {
    cy.login(null, '123')
    cy.get('#mail').then((elements) => {
       expect(elements[0].checkValidity()).to.be.false
       expect(elements[0].validationMessage).to.be.eql('Заполните это поле.')
    })
  })

  it('Пустой пароль', () => {
    cy.login('bropet@mail.ru', null)
    cy.get('#pass').then((elements) => {
      expect(elements[0].checkValidity()).to.be.false
      expect(elements[0].validationMessage).to.be.eql('Заполните это поле.')
   })
  })
})

describe('Проверка добавления и удаления из избранного, скачивания', () => {

beforeEach(() => {
    cy.loginAndAddInformBook('bropet@mail.ru', '123', 'Война и мир', 'о 1812 годе', 'Толстой Л.Н.')
    })

  it('Добавление книги и проверка её отображения', () => {
    cy.contains('Submit').click()
    cy.contains('Война и мир').should('be.visible')
    })

  it('Добавление книги в избранное и проверка отображения в избранном', () => {
     cy.get('#favorite').click()
     cy.contains('Submit').click()
     cy.contains('Война и мир').should('be.visible')
     cy.contains('Favorites').click()
     cy.contains('Война и мир').should('be.visible')
    })

  it('Удаление книги из избранного и проверка', () => {
     cy.get('#favorite').click()
     cy.contains('Submit').click()
     cy.contains('Война и мир').should('be.visible')
     cy.contains('Favorites').click()
     cy.contains('Война и мир').should('be.visible')
     cy.contains('Delete from favorite').click()
     cy.contains('Please add some book to favorit on home page!').should('be.visible')
     })

  it('Переход на страницу книги и скачивание', () => {
      cy.contains('Submit').click()
      cy.contains('Война и мир').should('be.visible')
      cy.contains('Война и мир').click()
      cy.contains('Война и мир').should('be.visible')
      cy.contains('о 1812 годе').should('be.visible')
      cy.contains('Толстой Л.Н.').should('be.visible')
      cy.contains('Dowload book').click()
    })
  })