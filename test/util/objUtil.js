import File from '../util/file.js'
import reporter from './reporter.js';

class objUtil {

    /**
     * @function clickObject | @author ralayan
     * @description click object 
     * @param {Object} objElement   Object to be clicked
     * @returns <none>
     */

    async   clickObject(objElement) {
        // await File.appendTxtFile(global.strPath, 'Started Function: clickObject');
        await reporter.addLog('Started Function: clickObject')
        await objElement.waitForExist();
        await objElement.click();
        const strXpath = await objElement.selector;
        await File.appendTxtFile(global.strPath, `Completed Function: clickObject - Successfully clicked [${strXpath}]`);
    }
    /**
     * @function setObjectValue | @author ralayan
     * @description set object value 
     * @param {Object} objElement   Object to be set
     * @param {String} strText  Value to be set
     * @returns <none>
     */

    async   setObjectValue(objElement, strText) {
        await File.appendTxtFile(global.strPath, 'Executing Function: setObjectValue');
        await objElement.waitForExist();
        const strText1 = await objElement.setValue(strText);
        await File.appendTxtFile(global.strPath, `Completed Function: getObjectText - Text [${strText1}]`);
    }
    /**
     * @function getObjectText | @author ralayan
     * @description will get object text
     * @param {Object} objElement   Object to be clicked
     * @returns {String} Object Text
     */
    async   getObjectText(objElement) {
        await File.appendTxtFile(global.strPath, 'Executing Function: getObjectText');
        await objElement.waitForExist();
        const strText = objElement.getText();
        const strXpath = await objElement.selector;
        await File.appendTxtFile(global.strPath, `Completed Function: getObjectText - Object [${strXpath}] Text [${strText}]`);
        return strText
    }
    /**
     * @function getObjValue | @author ralayan
     * @description will get object value
     * @param {Object} objElement   Object to be clicked
     * @returns {String} Object value
     */
    async   getObjValue(objElement) {
        await objElement.waitForExist();
        await objElement.getValue()
    }
    

}

export default new objUtil()