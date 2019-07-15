import React, { useState } from 'react'

const ContactForm = () => {
  const [fields, setField] = useState({
    name: '',
    email: '',
    message: '',
  })
  function updateField(field, value) {
    setField({ [field]: value });
  }
  function logFormDataToConsole(event) {
    console.log('Form Values', fields);
  }

  return (
    <div>
      {/* Name field */}
      <input
        label="Name"
        onChange={(event) => updateField('name', event.target.value)}
        value={fields.name}
        type="text"
      />
      {/* Email field */}
      <input
        label="Email"
        onChange={(event) => updateField('email', event.target.value)}
        value={fields.email}
        type="email"
      />
      {/* Message textarea */}
      <input
        label="Message"
        onChange={(event) => updateField('message', event.target.value)}
        /* This should be written like 'textarea' */
        type= 'textarea' 
        textarea={true}
        value={fields.message}
      />
      {/* Submit button */}
      <button
        email="tombonaventure@protonmail.com"
        formValues={fields}
        type= 'textarea' 
        // disabled={this.state.isClicked}
        onClick={logFormDataToConsole}
      >Submit
      </button>
      {/* <Button
        email="tombonaventure@protonmail.com"
        formValues={fields}
      /> */}
    </div>
  );
}

export default ContactForm