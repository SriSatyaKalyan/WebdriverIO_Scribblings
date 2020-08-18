import {short, medium, long} from '../lib/timeouts'

describe('E2E Tests - Login/Logout Flow', () => {
    it('Should not login with invalid credentials', () => {
        browser.url('http://zero.webappsecurity.com/index.html')
        const signInButton = $('#signin_button')
        signInButton.waitForExist()
        signInButton.click()
        // browser.pause(short)

        const loginForm = $('#user_login')
        loginForm.waitForExist()
        loginForm.setValue('invalid')
        // browser.pause(short)

        const passwordForm = $('#user_password')
        passwordForm.waitForExist()
        passwordForm.setValue('invalid')
        // browser.pause(short)

        const submitButton = $("input[type='submit']")
        submitButton.waitForExist()
        submitButton.click()
        // browser.pause(short)

        const errorText = $('.alert')
        errorText.waitForExist()
        expect(errorText).toHaveTextContaining('Login and/or password')
    })
    
    it('Should login with valid credentials', () => {
        browser.url('http://zero.webappsecurity.com/index.html')
        const signInButton = $('#signin_button')
        signInButton.waitForExist()
        signInButton.click()
        // browser.pause(short)

        const loginForm = $('#user_login')
        loginForm.waitForExist()
        loginForm.setValue('username')
        // browser.pause(short)

        const passwordForm = $('#user_password')
        passwordForm.waitForExist()
        passwordForm.setValue('password')
        // browser.pause(short)

        const submitButton = $("input[type='submit']")
        submitButton.waitForExist()
        submitButton.click()
        // browser.pause(short)

        const navBar = $('.nav.nav-tabs')
        navBar.waitForExist()
        expect(navBar).toExist()
    })

    it('should logout from application', () => {
        const iconButton = $('.icon-user')
        iconButton.waitForExist
        iconButton.click()

        const logout = $('#logout_link')
        logout.waitForExist()
        logout.click()

        const brandName = $('.brand')
        brandName.waitForExist()
        expect(brandName).toExist()
        browser.pause(short)
    })
})