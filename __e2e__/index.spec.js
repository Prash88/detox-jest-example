describe('index', () => {
  it('should see welcome page with intro text', async () => {
    await expect(element(by.id('welcome'))).toBeVisible()
    await expect(element(by.text('To get started, edit App.js'))).toBeVisible()
  })
})
