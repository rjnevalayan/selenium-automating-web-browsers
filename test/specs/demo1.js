import pgUltimateQA from '../pageObject/pgUltimateQA.js';
import objUtill from '../util/objUtil.js';
import Reporter from '../util/reporter.js'

describe('My Login Application', () => {
    // it('Fill_Sample_Form_TC001', async () => {

        // await browser.url('https://ultimateqa.com/filling-out-forms/');
        // await $('//input[@id = "et_pb_contact_name_0" ]').waitForExist({ timeout: 3000 });
        // await $('//input[@id = "et_pb_contact_name_0" ]').setValue('This is my test contact name message');
        // await $('//textarea[@id = "et_pb_contact_message_0" ]').setValue('This is my test contact message');
        // await $('//button[@name = "et_builder_submit_button" ]').click();
        // await $('//div[@class= "et-pb-contact-message" ]//p').waitForExist({ timeout: 3000 });
        // await expect($('//div[@class= "et-pb-contact-message" ]//p')).toHaveText(
        //     expect.stringContaining('Thanks for contacting us'));

    // })
    it('Fill_Sample_Form_TC001_OOP', async () => {
        await Reporter.addLog('Step 1: Navigate to Ultimateqa website');
        await pgUltimateQA.navigate();
        await browser.takeScreenshot()

        await Reporter.addLog('Step 2: User fill contact name field');
        await objUtill.setObjectValue(pgUltimateQA.contactNameEdit, 'This is my test contact name');

        await Reporter.addLog('Step 3: User fill contact message field');
        await objUtill.setObjectValue(pgUltimateQA.contactMessageEdit, 'This is my test contact message');
        await browser.takeScreenshot()
        
        await Reporter.addLog('Step 4: User click submit');
        await objUtill.clickObject(pgUltimateQA.submitBtn);
        await expect(pgUltimateQA.successMsgElm).toHaveText('Thanks for contacting us');
        
    })
})