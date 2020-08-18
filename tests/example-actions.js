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
        //This add value to the already existing values in the boxes
        input.addValue(' Wayne')
        browser.pause(short)
     })

     it('Inputs - clear value', () => {
         const input = $('#developer-name')
         input.clearValue()
         browser.pause(short)
     })

     it('Click on Populate Button', () => {
         const input = $('#developer-name')
         input.waitForExist() 
         input.setValue('Bruce Wayne')
         const populateButton = $('#populate')
         populateButton.click()
         browser.pause(short)
      })

   //   it('Close the Populate alert', () => {
   //       try {
   //          browser.alertAccept()
   //        } catch (e) {
   //          console.log('The alert found is', e)
   //       }
   //       browser.pause(short)
   //   })

      it('Checkbox and Radio Buttons', () => {
         const radio = $('#linux')
         radio.waitForExist()
         radio.click()
         browser.pause(short)
      })

      it('Select Box', () => {
         const select = $('#preferred-interface')
         select.$$('option')[1].click()
         browser.pause(short)
         select.selectByVisibleText()
      }) 
})