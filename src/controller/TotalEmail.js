const nodeMailer = require('nodemailer') ;

module.exports = {
    async store(req, res) {
        const data = req.body
        const keys = Object.keys(data)
    
        let transporter = nodeMailer.createTransport({
            host: 'trilhatecnologia.com',
            port: 465,
            secure: true,
            auth: {
                user: 'washington.f@trilhatecnologia.com',
                pass: 'E-Trilh@2021'
            }
        });

        let mailOptions = {
            from: '"Website Total Seguranca" <washington.f@trilhatecnologia.com>', // sender address
            to: "contato@totalseguranca.com", // list of receivers
            subject: "Lead Website Total Segurança", // Subject line
            // text: req.body, // plain text body
            html: `<div>
            
            <h1>Lead do site </h1>

            ${
                keys.map((item, index) => (
                    `<span key={index}>
                        ${item}

                        <span>
                            ${data[item]}
                        </span>
                    </span>`
                ))
        }
            
            </div>` // html body
        };

        transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
              res.sendStatus(500);
              return console.log(error);
            }
            console.log('Message %s sent: %s', info.messageId, info.response);
            res.sendStatus(200);
        });
   


    }
}