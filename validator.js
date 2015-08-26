var reduce = require('lodash.reduce'),
    trim = require('lodash.trim'),
    logger = require('./loggers/logger.js');

function validator() {

    function validate(data, model) {
        var modelToValidate = require('./common/models/' + model + '.json');

        var error = {}, 
            fieldName, 
            isValid;

        var validatedFields = reduce(modelToValidate.properties, function(result, value, key) {
            if (result.errors === undefined && result.valid === undefined) {
                result.errors = {};
                result.valid = true;
            }
            if (value.required === true) {
                isValid = validateIsRequired(data[key]);
                if (!isValid) {
                    result.valid = false;
                    result.errors[key] = value.error.empty; 
                }
            }
            if (key === 'emailAddress' && isValid) {
                isValid = validateEmail(data[key]);
                if (!isValid) {
                    result.valid = false;
                    result.errors[key] = value.error.invalid; 
                }
            }
            if (value.maxLength && isValid) {
                isValid = validateMaxLength(data[key], value.maxLength);
                if (!isValid) {
                    result.valid = false;
                    result.errors[key] = value.error.maxlength;
                }
            }

            return result;
        }, {});

        logger.error({err: validatedFields});
        return validatedFields;
    }

    function validateEmail(email) {
        var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
    }

    function validateIsRequired(inputField) {
        if (inputField !== null || inputField !== undefined) {
            return trim(inputField) !== '';
        }
        return false;
    }

    function validateMaxLength(enquiryField, maxLength) {
        return enquiryField.length <= maxLength;
    }

    return {
        validate: validate
    };
}

module.exports = validator();
