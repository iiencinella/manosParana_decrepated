export const sendEmail = (inscription) => {
  const serviceID = 'service_jtht89i';
  const templateID = 'template_zbdmmij';
  const publicKey = '2x0C3LS4oCHYmuG8S'

  emailjs.init(publicKey)
  
  let data = {
    to_name: "Manos a la Obra 🙌",
    from_email: inscription.email,
    from_name: inscription.name,
    from_phone: inscription.phone,
    from_description: inscription.whois
  }
  
  emailjs.send(serviceID, templateID, data)
  .then(() => {
    console.log('Sent!');
  }, (err) => {
    console.log(JSON.stringify(err));
  });
}


