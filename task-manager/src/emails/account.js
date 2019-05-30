const sgMail = require('@sendgrid/mail')

sgMail.setApiKey(process.env.SENDGRID_API_KEY)

const sendWelcomeEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'info@willingham.dev',
        subject: 'Welcome to Task App!',
        text: `Hi ${capitalizeName(name)}! Welcome to my app! I hope you enjoy it. Let me know if you have any issues!`
    })
}

const sendFarewell = (email) => {
    sgMail.send({
        to: email,
        from: 'info@willingham.dev',
        subject: 'Oh No!',
        text: `We're sorry to see you go! Please let us know what we could do better for you next time!`
    })
} 

const capitalizeName = (name) => {
    capitalized = ''
    names = name.split(' ')
    names.forEach(name => {
        capitalized += name.charAt(0).toUpperCase() + name.slice(1) +  ' '
    })
    return capitalized.trim()
}

module.exports = { sendWelcomeEmail, sendFarewell }
