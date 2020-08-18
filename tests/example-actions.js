import {short, medium, long} from '../lib/timeouts'

describe('Browser Actions', () => {
     it('Inputs - set value', () => {
        browser.url('https://devexpress.github.io/testcafe/example')
        const input = $('#developer-name')
        input.waitForExist() 
        input.setValue('Bruce')
        browser.pause(short)
     })

     it('Inputs - add value', () => {
        const input = $('#developer-name')
        input.addValue(' Wayne')
        browser.pause(short)
     })

     it('Inputs - clear value', () => {
         const input = $('#developer-name')
         input.clearValue()
         browser.pause(short)
     })
})