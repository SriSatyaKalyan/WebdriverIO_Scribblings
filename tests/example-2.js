import {short, medium, long} from '../lib/timeouts'
import {mobile, tablet, desktop} from '../lib/device-emulations'

describe('More steps with WebdriverIO', () => {
    it('Change browser Viewport', () => {
        browser.url('https://devexpress.github.io/testcafe/example')

        //making the browser size small
        browser.setWindowSize(1650, 1050)
    })
    
    it('Save Screenshot', () => {  
        browser.saveScreenshot('dev-express.png')
    })

    it('Timoeout Helpers', () => {   //Pausing by importing from other file called 'timeouts.js'
        browser.pause(short)
    })

    it('Mobile Device Emulation', () => {
        browser.setWindowSize(mobile[0], mobile[1])
        browser.pause(short)
    })

    it('Tablet Device Emulation', () => {
        browser.setWindowSize(tablet[0], tablet[1])
        browser.pause(medium)
    })

    it('Desktop Device Emulation', () => {
        browser.setWindowSize(desktop[0], desktop[1])
        browser.pause(short)
    })
})