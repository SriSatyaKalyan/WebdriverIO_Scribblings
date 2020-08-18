import {short, medium, long} from '../lib/timeouts'

describe('E2E -Feedback', () => {
    it('Should load feedback form', () => {
        browser.url('http://zero.webappsecurity.com/index.html')
        const feedbackButton = $('#feedback')
        feedbackButton.waitForExist()
        feedbackButton.click()
        // browser.pause(short)    

        const feedbackTitle = $('//h3[@id = "feedback-title"]')
        feedbackTitle.waitForExist()
        expect(feedbackTitle).toHaveTextContaining('Feedback')    
    })

    it('Fill and submit feedback form', () => {
        const nameField = $('//input[@id = "name"]')
        nameField.waitForExist()
        nameField.setValue('Bruce')
        
        const passwordField = $('//input[@id = "email"]')
        passwordField.waitForExist()
        passwordField.setValue('bruce@gotham.com')

        const subjectField = $('//input[@id = "subject"]')
        subjectField.waitForExist()
        subjectField.setValue('I want Justice')
        
        const commentField = $('//textarea[@id = "comment"]')
        commentField.waitForExist()
        commentField.setValue('I have incurred money in Savings deposit account. I want Justice!')

        const sendButton = $('input[name = "submit"]')
        sendButton.click()

        browser.pause(short)

        expect(browser).toHaveUrl('http://zero.webappsecurity.com/sendFeedback.html')
        // const feedbackText = $('#text')
        // expect(feedbackText).toHaveTextContaining('Thank you for your comments')
    })
})