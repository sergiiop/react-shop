import { useAssets } from '../../../assets'
import './SendEmail.scss'

const SendEmail = () => {
  const { useLogos, useIcons } = useAssets()
  const { LogoYardSale } = useLogos()
  const { Email } = useIcons()
  return (
    <div className='SendEmail'>
      <div className='form-container'>
        <img src={LogoYardSale} alt='logo' className='logo' />
        <h1 className='title'>Email has been sent!</h1>
        <p className='subtitle'>
          Please check your inbox for instructions on how to reset the password
        </p>
        <div className='email-image'>
          <img src={Email} alt='email' />
        </div>
        <button className='primary-button login-button'>Login</button>
        <p className='resend'>
          <span>Didn't receive the email?</span>
          <a href='/'>Resend</a>
        </p>
      </div>
    </div>
  )
}

export default SendEmail
