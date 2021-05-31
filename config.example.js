module.exports = {
	// this option allows you to specify "expert" options for different modules
	"_": {
		// supported modules: csv-parse, nodemailer-express-handlebars, nodemailer-html-to-text

		// see https://csv.js.org/parse/options/
		"csv-parse": {
			"comment": "#"
		},

		// see https://github.com/yads/nodemailer-express-handlebars
		"nodemailer-express-handlebars": {
			// partials are in ./partials, layouts in ./layouts and templates in ./ by default
		},

		// see https://github.com/andris9/nodemailer-html-to-text
		"nodemailer-html-to-text": {

		},

		// see https://github.com/jonkemp/inline-css
		"inline-css": {
			// url defaults to '/'
		},
	},
	// SMTP connection options for nodemailer for DEV mode
	// you could use etheral or something similar here
	"dev_smtp": {
		// see https://nodemailer.com/smtp/
		"host": "sg2plvcpnl458406.prod.sin2.secureserver.net",
		/* "host": "smtp.gmail.com", */
		"port": 587,
		"auth": {
			/* "user": "devarth383@gmail.com", */
			"user": "testmail@athreva.com",
			"pass": "Athreva@2020"
		}
	},

	// SMTP connection options for nodemailer
	"smtp": {
		// see https://nodemailer.com/smtp/
		/* "host": "sg2plvcpnl458406.prod.sin2.secureserver.net", */
		"host": "smtp.gmail.com",
		"port": 587,
		"auth": {
			"user": "devarth383@gmail.com",
			/* "user": "testmail@athreva.com", */
			"pass": "Athreva@2020"
		}
	},

	// configures the mails to be sent
	"mail": {

		// all will be applied to all emails
		// see https://nodemailer.com/message/ for the options you can configure
		"all": {
			/* "from": "Dr. Sravya Sri Borra<sravya.b@athreva.com>",
			"subject": "Label/packaging assessment services for global markets", */
			"from": "Kush Mukherji<kush.m@athreva.com>",
			"subject": "Support for Biologics Regulatory and Submissions",
			"template": "mail-template"
		},

		// these options will be evaluated in context
		// string containing {{xzy}} will be replaced by the actual value but
		// make sure xyz is a valid header in your csv file
		//
		// CAVE: do not specify options here AND in 'all'
		//
		// see https://nodemailer.com/message/ for the options you can configure
		"each": {
			"to": "{{email}}"
			/* "attachments": [{
				"filename": "attachment.pdf",
				"path": "{{firstname}}_{{lastname}}.pdf"
			}, {
				"filename": "img.png",
				"path": "img.png",
				"cid": "cidimg.png",
				"contentDisposition": "inline"
			}] */
		}
	},

	// configures the processor
	"bulk": {
		// recipient list as csv file, containing a header row!
		"recipients": "recipients.csv",
	}
};
