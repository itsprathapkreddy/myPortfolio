import axios from 'axios';

const emailJsUrl = 'https://api.emailjs.com/api/v1.0/email/send';

const serviceId = process.env.REACT_APP_EMAIL_JS_SERVICE_ID;
const templateId = process.env.REACT_APP_EMAIL_JS_TEMPLATE_ID;
const userId = process.env.REACT_APP_EMAIL_JS_USER_ID;

export default async function sendEmailToEmailJs(templateParams) {
    const template_params = {
        message: templateParams.message,
        from_email: templateParams.fromEmail,
        to_name: 'Prathap',
        from_name: templateParams.fromName,
        from_site: 'prathapkreddy.com'
    };

    const data = {
        service_id: serviceId,
        template_id: templateId,
        user_id: userId,
        template_params: template_params
    };

    try {
        return await axios({
            method: 'post',
            url: emailJsUrl,
            contentType: 'application/json',
            data
        });
    } catch (error) {
        console.error(error);
    }
}
