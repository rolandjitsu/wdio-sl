describe('next.js integration', () => {
  it('should work', async () => {
    await browser.url('/')
    const node = await $('.test')
    const text = await node.getText()
    expect(text).toBe('Test')
  })
})
