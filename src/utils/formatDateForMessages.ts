import dayjs from 'dayjs';

export const formatDateForMessages = (
    date: any,
    shorten = false,
    showTimeIfToday = false
) => {
    date = date instanceof Date ? date : new Date(date);
    const yesterday = ((d) => new Date(d.setDate(d.getDate() - 1)))(new Date());

    let text = '';

    if (new Date().getDate() === date.getDate()) {
        text = showTimeIfToday
            ? date.toTimeString().substring(0, 5)
            : 'Сегодня';
    } else if (dayjs(yesterday).isSame(dayjs(date), 'day')) {
        text = 'Вчера';
    } else {
        let monthText = monthsLocale[date.getMonth()];

        if (shorten) {
            monthText = monthText.slice(0, 2);
        }

        text = `${date.getDate()} ${monthText}`;
    }

    return text;
};

const monthsLocale = [
    'Января',
    'Февраля',
    'Марта',
    'Апреля',
    'Мая',
    'Июня',
    'Июля',
    'Августа',
    'Сентября',
    'Октября',
    'Ноября',
    'Декабря',
];
