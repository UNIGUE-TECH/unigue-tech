declare module 'nodemailer' {
  interface Transporter {
    sendMail(mailOptions: {
      from: string
      to: string
      replyTo?: string
      subject: string
      text?: string
      html?: string
    }): Promise<unknown>
  }

  function createTransport(options: {
    service: string
    auth: {
      user: string
      pass: string
    }
  }): Transporter

  const nodemailer: {
    createTransport: typeof createTransport
  }

  export default nodemailer
}
