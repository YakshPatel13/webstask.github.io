import React from 'react'

const forgetpass = () => {
  return (
    <div>
      <div class="email-verification">
  <h2>Email Verification</h2>
  <p>We have sent a code to your email</p>
  <div class="Cinput">
    <input type="text" maxlength="1"/>
    <input type="text" maxlength="1"/>
    <input type="text" maxlength="1"/>
    <input type="text" maxlength="1"/>
  </div>
  <button>Verify Account</button>
  <p>Didn't receive code? <a href="#">Resend OTP</a></p>
</div>
    </div>
  )
}

export default forgetpass
