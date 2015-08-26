var validator = require('../validator.js');

describe('validator', function() {

    it('should return an object with validation status true and an empty errors object if no errors', function() {
        var data = {
                addressID: undefined,
                buildingName: undefined,
                buildingNumber: '1',
                emailAddress: 's@b.com',
                enquiryField: 'Test',
                firstname: 'S',
                landline: '8737834783478',
                mobile: '783478347834',
                postcode: 'N1 8DF',
                streetName: 'PRINCESS ROAD',
                surname: 'B',
                title: 'Mr',
                townCity: 'LONDON',
                unit: 'FLAT 1'    
            },
            model = 'submit-form';

        var validatedData = validator.validate(data, model);
        validatedData.should.be.an.Object;
        validatedData.should.have.property('valid', true);
        validatedData.should.have.property('errors', {});
    });

    it('should return an error, status code and message if the enquiry field is empty', function() {
        var data = {
                addressID: undefined,
                buildingName: undefined,
                buildingNumber: '1',
                emailAddress: 's@b.com',
                enquiryField: '',
                firstname: 'S',
                landline: '8737834783478',
                mobile: '783478347834',
                postcode: 'N1 8DF',
                streetName: 'PRINCESS ROAD',
                surname: 'B',
                title: 'Mr',
                townCity: 'LONDON',
                unit: 'FLAT 1'    
            },
            model = 'submit-form';

        var validatedData = validator.validate(data, model);
        validatedData.should.have.property('valid', false);
        validatedData.should.have.property('errors');
        validatedData.errors.should.be.an.Object;
        validatedData.errors.enquiryField.should.have.property('status', 400);
        validatedData.errors.enquiryField.should.have.property('message', 'Empty enquiry field');
    });

    it('should return an error, status code and message if the enquiry field is too long', function() {
        var data = {
                addressID: undefined,
                buildingName: undefined,
                buildingNumber: '1',
                emailAddress: 's@b.com',
                enquiryField: 'uytfeqwd uyiduwyv dsuyvdsuhy ds uygvdsu dsuygvdsuhb cd ucduhvbcd uhijnas isdaubh sdbc dsihbcisb dshu udsyv udsh suhysu iusdbvcuhsbdiuh  sdiubcdis bi uytfeqwd uyiduwyv dsuyvdsuhy ds uygvdsu dsuygvdsuhb cd ucduhvbcd uhijnas isdaubh sdbc dsihbcisb dshu udsyv udsh suhysu iusdbvcuhsbdiuh  sdiubcdis biuytfeqwd uyiduwyv dsuyvdsuhy ds uygvdsu dsuygvdsuhb cd ucduhvbcd uhijnas isdaubh sdbc dsihbcisb dshu udsyv udsh suhysu iusdbvcuhsbdiuh  sdiubcdis biuytfeqwd uyiduwyv dsuyvdsuhy ds uygvdsu dsuygvdsuhb cd ucduhvbcd uhijnas isdaubh sdbc dsihbcisb dshu udsyv udsh suhysu iusdbvcuhsbdiuh  sdiubcdis biuytfeqwd uyiduwyv dsuyvdsuhy ds uygvdsu dsuygvdsuhb cd ucduhvbcd uhijnas isdaubh sdbc dsihbcisb dshu udsyv udsh suhysu iusdbvcuhsbdiuh  sdiubcdis biuytfeqwd uyiduwyv dsuyvdsuhy ds uygvdsu dsuygvdsuhb cd ucduhvbcd uhijnas isdaubh sdbc dsihbcisb dshu udsyv udsh suhysu iusdbvcuhsbdiuh  sdiubcdis biuytfeqwd uyiduwyv dsuyvdsuhy ds uygvdsu dsuygvdsuhb cd ucduhvbcd uhijnas isdaubh sdbc dsihbcisb dshu udsyv udsh suhysu iusdbvcuhsbdiuh  sdiubcdis biuytfeqwd uyiduwyv dsuyvdsuhy ds uygvdsu dsuygvdsuhb cd ucduhvbcd uhijnas isdaubh sdbc dsihbcisb dshu udsyv udsh suhysu iusdbvcuhsbdiuh  sdiubcdis biuytfeqwd uyiduwyv dsuyvdsuhy ds uygvdsu dsuygvdsuhb cd ucduhvbcd uhijnas isdaubh sdbc dsihbcisb dshu udsyv udsh suhysu iusdbvcuhsbdiuh  sdiubcdis biuytfeqwd uyiduwyv dsuyvdsuhy ds uygvdsu dsuygvdsuhb cd ucduhvbcd uhijnas isdaubh sdbc dsihbcisb dshu udsyv udsh suhysu iusdbvcuhsbdiuh  sdiubcdis uytfeqwd uyiduwyv dsuyvdsuhy ds uygvdsu',
                firstname: 'S',
                landline: '8737834783478',
                mobile: '783478347834',
                postcode: 'N1 8DF',
                streetName: 'PRINCESS ROAD',
                surname: 'B',
                title: 'Mr',
                townCity: 'LONDON',
                unit: 'FLAT 1'    
            },
            model = 'submit-form';

        var validatedData = validator.validate(data, model);
        validatedData.should.have.property('valid', false);
        validatedData.should.have.property('errors');
        validatedData.errors.should.be.an.Object;
        validatedData.errors.enquiryField.should.have.property('status', 400);
        validatedData.errors.enquiryField.should.have.property('message', 'Enquiry field exceeded maximum length');
    });

    it('should return an error, status code and message if the first name field is empty', function() {
        var data = {
                addressID: undefined,
                buildingName: undefined,
                buildingNumber: '1',
                emailAddress: 's@b.com',
                enquiryField: 'Test',
                firstname: '',
                landline: '8737834783478',
                mobile: '783478347834',
                postcode: 'N1 8DF',
                streetName: 'PRINCESS ROAD',
                surname: 'B',
                title: 'Mr',
                townCity: 'LONDON',
                unit: 'FLAT 1'    
            },
            model = 'submit-form';

        var validatedData = validator.validate(data, model);
        validatedData.should.have.property('valid', false);
        validatedData.should.have.property('errors');
        validatedData.errors.should.be.an.Object;
        validatedData.errors.firstname.should.have.property('status', 400);
        validatedData.errors.firstname.should.have.property('message', 'Empty first name field');
    
    });

    it('should return an error, status code and message if the surname field is empty', function() {
        var data = {
                addressID: undefined,
                buildingName: undefined,
                buildingNumber: '1',
                emailAddress: 's@b.com',
                enquiryField: 'Test',
                firstname: 'S',
                landline: '8737834783478',
                mobile: '783478347834',
                postcode: 'N1 8DF',
                streetName: 'PRINCESS ROAD',
                surname: '',
                title: 'Mr',
                townCity: 'LONDON',
                unit: 'FLAT 1'    
            },
            model = 'submit-form';

        var validatedData = validator.validate(data, model);
        validatedData.should.have.property('valid', false);
        validatedData.should.have.property('errors');
        validatedData.errors.should.be.an.Object;
        validatedData.errors.surname.should.have.property('status', 400);
        validatedData.errors.surname.should.have.property('message', 'Empty surname field');
    
    });

    it('should return an error, status code and message if the email field is not a valid email', function() {
        var data = {
                addressID: undefined,
                buildingName: undefined,
                buildingNumber: '1',
                emailAddress: 'sb.com',
                enquiryField: 'Test',
                firstname: 'S',
                landline: '8737834783478',
                mobile: '783478347834',
                postcode: 'N1 8DF',
                streetName: 'PRINCESS ROAD',
                surname: 'B',
                title: 'Mr',
                townCity: 'LONDON',
                unit: 'FLAT 1'    
            },
            model = 'submit-form';

        var validatedData = validator.validate(data, model);
        validatedData.should.have.property('valid', false);
        validatedData.should.have.property('errors');
        validatedData.errors.should.be.an.Object;
        validatedData.errors.emailAddress.should.have.property('status', 400);
        validatedData.errors.emailAddress.should.have.property('message', 'Email address invalid');
    });

    it('should return an error, status code and message if the email field is empty', function() {
        var data = {
                addressID: undefined,
                buildingName: undefined,
                buildingNumber: '1',
                emailAddress: '',
                enquiryField: 'Test',
                firstname: 'S',
                landline: '8737834783478',
                mobile: '783478347834',
                postcode: 'N1 8DF',
                streetName: 'PRINCESS ROAD',
                surname: 'B',
                title: 'Mr',
                townCity: 'LONDON',
                unit: 'FLAT 1'    
            },
            model = 'submit-form';

        var validatedData = validator.validate(data, model);
        validatedData.should.have.property('valid', false);
        validatedData.should.have.property('errors');
        validatedData.errors.should.be.an.Object;
        validatedData.errors.emailAddress.should.have.property('status', 400);
        validatedData.errors.emailAddress.should.have.property('message', 'Empty email field');
    });

    it('should return an error, status code and message if any fields are undefined', function() {
        var data = {
                addressID: undefined,
                buildingName: undefined,
                buildingNumber: '1',
                emailAddress: undefined,
                enquiryField: undefined,
                firstname: 'S',
                landline: '8737834783478',
                mobile: '783478347834',
                postcode: 'N1 8DF',
                streetName: 'PRINCESS ROAD',
                surname: 'B',
                title: 'Mr',
                townCity: 'LONDON',
                unit: 'FLAT 1'    
            },
            model = 'submit-form';

        var validatedData = validator.validate(data, model);
        validatedData.should.have.property('valid', false);
        validatedData.should.have.property('errors');
        validatedData.errors.should.be.an.Object;
        validatedData.errors.should.have.keys('emailAddress', 'enquiryField');
    });

    it('should return multiple errors if more than one field fails validation', function() {
        var data = {
                addressID: undefined,
                buildingName: undefined,
                buildingNumber: '1',
                emailAddress: '',
                enquiryField: '',
                firstname: '',
                landline: '8737834783478',
                mobile: '783478347834',
                postcode: 'N1 8DF',
                streetName: 'PRINCESS ROAD',
                surname: '',
                title: 'Mr',
                townCity: 'LONDON',
                unit: 'FLAT 1'    
            },
            model = 'submit-form';

        var validatedData = validator.validate(data, model);
        validatedData.should.have.property('valid', false);
        validatedData.should.have.property('errors');
        validatedData.errors.should.be.an.Object;
        validatedData.errors.should.have.keys('emailAddress', 'enquiryField', 'firstname', 'surname');
    });

});
