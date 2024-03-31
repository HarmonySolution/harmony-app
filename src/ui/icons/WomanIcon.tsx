import { SvgXml } from 'react-native-svg';

export const WomanIcon = ({ color = '#000000' }) => {
    const xml = `
        <svg version="1.0" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" 
            width="24px" height="24px" viewBox="0 0 64 64" enable-background="new 0 0 64 64" xml:space="preserve">
            <g>
            <path fill="#231F20" d="M62.242,47.758l0.014-0.014c-3.239-2.634-6.865-4.874-10.839-6.644C50.502,38.229,50,35.175,50,32V16
                c0-8.837-7.163-16-16-16h-4c-8.837,0-16,7.163-16,16v16c0,3.173-0.501,6.226-1.415,9.096c-3.979,1.745-7.526,3.953-10.841,6.648
                l0.014,0.014C0.672,48.844,0,50.344,0,52v8c0,2.211,1.789,4,4,4h56c2.211,0,4-1.789,4-4v-8C64,50.344,63.328,48.844,62.242,47.758z
                    M20,19c0-2.209,1.791-4,4-4c2.088,0,3.926-1.068,5-2.687C30.074,13.932,31.912,15,34,15h4c3.313,0,6,2.687,6,6c0,0.188,0,0.5,0,1
                c0,12-7.469,18-12,18s-12-6-12-18C20,21.5,20,19,20,19z M25.677,39.439C27.76,41.084,29.99,42,32,42s4.24-0.916,6.323-2.561
                c2.743,0.378,5.399,1.018,7.966,1.857c-2.468,2.468-13.311,13.311-13.691,13.691c-0.43,0.43-0.748,0.447-1.183,0.013
                C31.03,54.616,20.18,43.766,17.711,41.297C20.277,40.457,22.934,39.817,25.677,39.439z"/>
            <path fill="#231F20" d="M25.882,22.467C25.91,22.419,26.18,22,26.998,22c0.808,0,1.096,0.436,1.111,0.458
                C28.287,22.803,28.637,23,28.999,23c0.154,0,0.311-0.035,0.457-0.111c0.491-0.253,0.684-0.856,0.431-1.347
                C29.592,20.969,28.651,20,26.998,20c-1.691,0-2.618,0.983-2.9,1.564c-0.233,0.482-0.034,1.045,0.439,1.298
                C25.012,23.117,25.61,22.931,25.882,22.467z"/>
            <path fill="#231F20" d="M34.539,22.862c0.475,0.255,1.073,0.068,1.345-0.396C35.912,22.419,36.182,22,37,22
                c0.808,0,1.096,0.436,1.111,0.458C38.289,22.803,38.639,23,39.001,23c0.154,0,0.311-0.035,0.457-0.111
                c0.491-0.253,0.684-0.856,0.431-1.347C39.594,20.969,38.653,20,37,20c-1.691,0-2.618,0.983-2.9,1.564
                C33.866,22.047,34.065,22.609,34.539,22.862z"/>
            </g>
        </svg>
    `;

    return <SvgXml xml={xml} />;
};
