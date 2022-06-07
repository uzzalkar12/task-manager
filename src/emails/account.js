const sgMail = require('@sendgrid/mail')


sgMail.setApiKey(process.env.SENDGRID_API_KEY)

const sendWelcomeEmail = async (email, name) => {
    await sgMail.send({
        to: email,
        from: 'uzzalkar12@gmail.com',
        subject: 'Thanks for joining in!',
        text: `Welcome to the app, ${name}.  Let me know how you get along with the app.`,
        html: '<strong>Task Manager App</strong>',
    })
}

const sendCancellationEmail = async (email, name) => {
    await sgMail.send({
        to: email,
        from: 'uzzalkar12@gmail.com',
        subject: 'Sorry to see you go!',
        text: `Goodbye, ${name}. I hope to see you back sometime soon.`,
        html: '<strong>Task Manager App</strong>',
    })
}

module.exports = {
    sendWelcomeEmail,
    sendCancellationEmail,
}