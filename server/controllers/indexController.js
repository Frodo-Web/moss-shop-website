const axios = require('axios');
const container = require('../../lib/logger');
const runtime = container.get('runtime');
const connections = container.get('connections');

exports.order_POST = async (req, res, next) => {
    try {
        const { countryCode, phone, order, name, wishes } = req.body;
        runtime.info(`order_POST: provided values: ${countryCode} ${phone} ${order} ${name} ${wishes}`);
        if (!(countryCode && phone)) {
            runtime.error(`order_POST: Country code && phone are required, provided country code: ${countryCode}, provided phone: ${phone}`);
            res.status(400).json({ error: 'Phone number is required' });
        }

        axios.get(`https://api.telegram.org/bot5748081196:AAEBRXwAQWwehwXD7Mnkz88jzNw11vS4kxk/sendMessage?chat_id=-1001661063232&text=Поступил%20заказ%20с%20номера:%20➡️%20%2b${countryCode}%20${phone}%20⬅️,%20клиента%20заинтересовал%20продукт:➡️%20${order}%20⬅️,%20клиент%20представился%20как%20➡️%20${name}%20⬅️и%20написал%20следующие%20пожелания:%20➡️%20${wishes}%20⬅️`).then(resp => {
            runtime.info(`order_POST -> axios.get: Telegram notification is successfull ${JSON.stringify(resp.data)}`)
	    res.status(200).json({ success: 'Ordered successfully' });
    }).catch(error => {
	    runtime.error(`order_POST -> axios.get: ${error}`)
	    res.status(400).json({ error: 'Order: something went wrong!' });
    });
    } catch (err) {
        runtime.error(`order_POST: ${err}`)
        return next(err);
    }
};
