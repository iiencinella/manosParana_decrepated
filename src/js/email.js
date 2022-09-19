export const sendEmail = (inscription) => {
  const serviceID = 'service_jtht89i';
  const templateID = 'template_zbdmmij';
  const publicKey = '0mu8cYBoPY6eRfSi8'

  emailjs.init(publicKey)
  
  let data = {
    from_name: inscription.email,
    to_name: "Ezequiel",
    message: `${inscription.name},
      ${inscription.email},
      ${inscription.phone},
      ${inscription.whois}`
  }
  
  emailjs.send(serviceID, templateID, data)
  .then(() => {
    console.log('Sent!');
  }, (err) => {
    console.log(JSON.stringify(err));
  });
}


