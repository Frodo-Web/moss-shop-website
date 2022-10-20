const axios = require('axios');

exports.order_POST = async (req, res, next) => {
    try {
        const { countryCode, phone, order, name, wishes } = req.body;
        if (!(countryCode && phone)) {
            res.status(400).json({ error: 'Phone number is required' });
        }

        axios.get(`https://api.telegram.org/bot5748081196:AAEBRXwAQWwehwXD7Mnkz88jzNw11vS4kxk/sendMessage?chat_id=-1001661063232&text=Поступил%20заказ%20с%20номера:%20➡️%20%2b${countryCode}%20${phone}%20⬅️,%20клиента%20заинтересовал%20продукт:➡️%20${order}%20⬅️,%20клиент%20представился%20как%20➡️%20${name}%20⬅️и%20написал%20следующие%20пожелания:%20➡️%20${wishes}%20⬅️`).then(resp => {
            console.log(resp.data);
    });
    } catch (err) {
        return next(err);
    }
};