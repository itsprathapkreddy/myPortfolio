import axios from 'axios';

const emailJsUrl = 'https://api.emailjs.com/api/v1.0/email/send';

const serviceId = process.env.EMAIL_JS_SERVICE_ID;
const templateId = process.env.EMAIL_JS_TEMPLATE_ID;
const userId = process.env.EMAIL_JS_USER_ID;

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
        const emailResponse = await axios({
            method: 'post',
            url: emailJsUrl,
            contentType: 'application/json',
            data
        });
        console.log({ emailResponse });
    } catch (error) {
        console.error(error);
    }
}
