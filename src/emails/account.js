const sgMail = require('@sendgrid/mail')

sgMail.setApiKey(process.env.SENDGRID_API_KEY)

const sendWelcomeEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'dhansky@hotmail.com',
        subject: 'Thanks joing in!',
        text: `Welcome to the app, ${name}. Let me know how you get along with the app.`,
        html: '<h1>testing html</h1>'
    })
}

const sendCancelEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'dhansky@hotmail.com',
        subject: 'Sorry to see you go!',
        html: `<h1>Task Manager</h1><br></br><p>Goodbye ${name}. I hope to see you come back sometime soon.`
    })
}

module.exports = {
    sendWelcomeEmail,
    sendCancelEmail
}