# loopback-validators
Validators for loopback projects not using a persistent datasource e.g. a REST datasource (without access to built-in validation methods). Validation done against model schemas contained in `model.json` files.

## Example usage

Trivial example validating form data.

    function submitForm(data) {
        var model = 'submit-form';
        var isValid = validator.validate(data, model);
        if (!isValid.valid) {
            throw new Error(isValid.message);
        }
        else {
            // save the form data
        }
    }

## Tests

Tests are written using mocha and assertions done using shouldjs. To run the tests for this example simply clone this repository. Then, from the root of the project, run `npm install` to install dependencies. 

When the dependencies are installed, run `npm test` from the root of the repository.
