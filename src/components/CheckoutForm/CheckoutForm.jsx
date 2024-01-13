import { useState } from "react"
import PropTypes from 'prop-types';
import { useTranslation } from "react-i18next";
import '../CheckoutForm/CheckoutForm.css'

const CheckoutForm = ({onConfirm}) => {
  const { t } = useTranslation();
  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const [email, setEmail] = useState('')

  const handleConfirm = (event) => {
    event.preventDefault()
    
    const userData = {
      name, phone, email
    }
    onConfirm(userData)
  }
  return (
    <>
    <form className="form" onSubmit={handleConfirm}>
  <header>
    Checkout
  </header>
  <label>
    <span>{t('checkout.form.name')}</span>
    <input 
      placeholder={t('checkout.form.name')} 
      className="input" 
      type="text" 
      required=""
      value={name}
      onChange ={({ target }) => setName(target.value)}
      />
  </label>
  <label>
    <span>{t('checkout.form.phone')}</span>
    <input 
      placeholder="+56 9 1234-5678" 
      className="input" 
      type="tel" 
      required=""
      pattern="(\+56\s?)?9\s?[0-9]{8}"
      value={phone}
      onChange ={({ target }) => setPhone(target.value)}
      />
  </label>
  <label>
    <span>{t('checkout.form.email')}</span>
    <input 
      placeholder={t('checkout.form.email')}
      className="input" 
      type="Email"
      required=""
      value={email}
      onChange ={({ target }) => setEmail(target.value)}
      />
  </label>
  <div className="submitCard">
    <button type="submit">{t('checkout.form.completePayment')}</button>
  </div>
</form>
    </>
    

    
  )
}

CheckoutForm.propTypes = {
  onConfirm: PropTypes.func.isRequired,
};

export default CheckoutForm