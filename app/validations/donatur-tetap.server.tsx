import { isValidPhoneNumber } from 'libphonenumber-js';

export default function validate(formData: FormData) {
    const name = String(formData.get("name"));
    const display_name = String(formData.get("display_name"));
    const phone = String(formData.get("phone"));
    const bank_name = String(formData.get("bank_name"));
    const bank_account_name = String(formData.get("bank_account_name"));
    const period_commitment = String(formData.get("period_commitment"));
    const reminder_at_dayname = String(formData.get("reminder_at_dayname"));
    const reminder_at_date = String(formData.get("reminder_at_date"));
    const nominal_commitment = formData.get("nominal_commitment");

  
    // const errors = {};
    if (!name) {
      return "Nama wajib diisi";
    } else if (!phone) {
        return "No. WA wajib diisi";
    } else if (!isValidPhoneNumber(phone, 'ID') ) {
        return "No. WA tidak valid";
    } else if (!bank_name) {
        return "Nama Bank wajib diisi";
    } else if (!bank_account_name) {
        return "Atas Nama wajib diisi";
    } else if (!period_commitment) {
        return "Periode donasi wajib diisi";
    } else if (period_commitment === 'weekly' && !reminder_at_dayname) {
        return "Diingatkan Hari wajib diisi";
    } else if (period_commitment === 'monthly' && !reminder_at_date) {
        return "Diingatkan Tanggal wajib diisi";
    } else if (!nominal_commitment) {
        return "Nominal wajib diisi";
    }
    return null;
    
    // if (!validateEmail(email)) {
    //   errors.email = "Email tidak valid";
    // } if (!password) {
    //   errors.password = "Password wajib diisi";
    // }
    // return Object.keys(errors).length > 0 ? errors : null;
}