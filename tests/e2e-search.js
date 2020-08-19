import {short} from '../lib/timeouts'

describe('E2E - Search', () => {
    it('Should load homepage', () => {
        browser.url('http://zero.webappsecurity.com/index.html')
        const searchBox = $('#searchTerm')
        searchBox.waitForExist()
    })

    it('Submitting a value through Search functionality', () => {
        const searchBox = $('#searchTerm')
        searchBox.waitForExist()
        searchBox.setValue('Bank')
        browser.keys('Enter')

        const resultsTitle = $('//h2[contains(text(), "Search Results:")]')
        resultsTitle.waitForExist()
        expect(resultsTitle).toHaveTextContaining('Search Results:')
        browser.pause(short)
    })
})