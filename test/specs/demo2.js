describe('My Login Application', () => {
    it('Fill Sample Form Wrong Captcha_TC002', async () => {

        await browser.url('https://ultimateqa.com/filling-out-forms/');
        await $('//div//input[@id= "et_pb_contact_name_1" ]').waitForExist({ timeout: 10000 });
        await $('//div//input[@id= "et_pb_contact_name_1" ]').setValue('Sample Test Contact Name');
        await $('//textarea[@name= "et_pb_contact_message_1" ]').setValue('Sample Test Message');
        await $('//input[@class= "input et_pb_contact_captcha" ]').setValue('0');
        await $('//div[@id= "et_pb_contact_form_1" ]//button[@type="submit"]').click();
        await $('//div[@class= "et-pb-contact-message" ]//ul/li').waitForExist({ timeout: 10000 });
        await expect($('//div[@class= "et-pb-contact-message" ]//ul/li')).toHaveText(
            expect.stringContaining('You entered the wrong number in captcha.'));
            
    })
})