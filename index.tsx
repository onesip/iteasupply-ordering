import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import { analyticsScreenshotDataUrl, membershipScreenshotDataUrl } from './src/screenshotData';

const membershipScreenshotEnSvg = `
<svg xmlns="http://www.w3.org/2000/svg" width="2048" height="310" viewBox="0 0 2048 310">
  <rect width="2048" height="310" fill="#f6f8fa"/>
  <rect x="12" y="12" width="2024" height="118" rx="10" fill="#ffffff" stroke="#e8edf1"/>
  <text x="28" y="42" font-family="Inter,Arial,sans-serif" font-size="19" font-weight="700" fill="#101828">Quick Access</text>
  <g font-family="Inter,Arial,sans-serif" font-size="14" fill="#344054" text-anchor="middle">
    <g transform="translate(160 65)"><rect x="-22" y="0" width="44" height="44" rx="11" fill="#e8f4ff"/><circle cx="0" cy="22" r="8" fill="#2997e8"/><text x="0" y="76">Customer Management</text></g>
    <g transform="translate(445 65)"><rect x="-22" y="0" width="44" height="44" rx="11" fill="#ffecef"/><rect x="-9" y="12" width="18" height="20" rx="3" fill="#ff405b"/><text x="0" y="76">Gift Cards</text></g>
    <g transform="translate(730 65)"><rect x="-22" y="0" width="44" height="44" rx="11" fill="#eaf4ff"/><path d="M-10 15h20M-6 22h16M-10 29h20" stroke="#2698ea" stroke-width="4" stroke-linecap="round"/><text x="0" y="76">Benefit Management</text></g>
    <g transform="translate(1015 65)"><rect x="-22" y="0" width="44" height="44" rx="11" fill="#e9fbf2"/><path d="M-10 28h20l-2-15-8 7-8-7z" fill="#10c98f"/><text x="0" y="76">Payment Packages</text></g>
    <g transform="translate(1300 65)"><rect x="-22" y="0" width="44" height="44" rx="11" fill="#fff0f3"/><path d="M-11 14h15l8 8-14 14-9-9z" fill="#ff415c"/><text x="0" y="76">Promotional Activities</text></g>
    <g transform="translate(1585 65)"><rect x="-22" y="0" width="44" height="44" rx="11" fill="#fff3df"/><path d="M-10 18h20v17h-20zM-12 15h24v6h-24z" fill="#ff9c12"/><text x="0" y="76">Marketing Activities</text></g>
    <g transform="translate(1870 65)"><rect x="-22" y="0" width="44" height="44" rx="11" fill="#fff0f3"/><path d="M-11 15h22v21h-22z" fill="#ff405b"/><circle cx="0" cy="25" r="4" fill="#fff"/><text x="0" y="76">Discounts</text></g>
  </g>
  <rect x="12" y="142" width="2024" height="156" rx="10" fill="#ffffff" stroke="#e8edf1"/>
  <text x="28" y="174" font-family="Inter,Arial,sans-serif" font-size="19" font-weight="700" fill="#101828">Popular Marketing</text>
  <g font-family="Inter,Arial,sans-serif" font-size="16" font-weight="600">
    <g><rect x="28" y="194" width="310" height="82" rx="9" fill="#ddfae9"/><text x="46" y="226" fill="#087443">Free Coupons</text><path d="M274 223h38v34h-38zM270 217h46v9h-46z" fill="#bff1d3"/></g>
    <g><rect x="353" y="194" width="310" height="82" rx="9" fill="#e3f4ff"/><text x="371" y="226" fill="#0d5fa8">Birthday Rewards</text><circle cx="620" cy="235" r="22" fill="#cbeafb"/></g>
    <g><rect x="678" y="194" width="310" height="82" rx="9" fill="#ece9ff"/><text x="696" y="226" fill="#3f28b5">Review Rewards</text><circle cx="947" cy="235" r="22" fill="#ddd7fb"/></g>
    <g><rect x="1003" y="194" width="310" height="82" rx="9" fill="#efebff"/><text x="1021" y="226" fill="#4422a5">Spin to Win</text><circle cx="1270" cy="235" r="24" fill="#ddd6fb"/></g>
    <g><rect x="1328" y="194" width="310" height="82" rx="9" fill="#ebe9ff"/><text x="1346" y="226" fill="#3b2ca4">Check-in Rewards</text><rect x="1582" y="214" width="40" height="40" rx="8" fill="#dcd8fb"/></g>
    <g><rect x="1653" y="194" width="367" height="82" rx="9" fill="#e4f5ff"/><text x="1671" y="226" fill="#0d5fa8">Card Activation Gifts</text><rect x="1965" y="216" width="37" height="29" rx="5" fill="#c7e9fb"/></g>
  </g>
</svg>`;

const analyticsScreenshotEnSvg = `
<svg xmlns="http://www.w3.org/2000/svg" width="2048" height="561" viewBox="0 0 2048 561">
  <rect width="2048" height="561" fill="#f6f8fa"/>
  <rect x="12" y="12" width="2024" height="132" rx="10" fill="#ffffff" stroke="#e8edf1"/>
  <text x="28" y="44" font-family="Inter,Arial,sans-serif" font-size="20" font-weight="700" fill="#101828">Quick Access</text>
  <g font-family="Inter,Arial,sans-serif" font-size="14" fill="#344054" text-anchor="middle">
    <g transform="translate(155 63)"><rect x="-22" y="0" width="44" height="44" rx="11" fill="#e8f4ff"/><path d="M-9 33v-9h5v9M-1 33V17h5v16M7 33V11h5v22" fill="#2997e8"/><text x="0" y="77">Sales Overview</text></g>
    <g transform="translate(405 63)"><rect x="-22" y="0" width="44" height="44" rx="11" fill="#eaf5ff"/><rect x="-10" y="10" width="20" height="25" rx="3" fill="#2d9ce8"/><text x="0" y="77">Order Details</text></g>
    <g transform="translate(655 63)"><rect x="-22" y="0" width="44" height="44" rx="11" fill="#e6faee"/><path d="M-11 19h22v17h-22z" fill="#10c98f"/><text x="0" y="77">Payment Summary</text></g>
    <g transform="translate(905 63)"><rect x="-22" y="0" width="44" height="44" rx="11" fill="#fff2df"/><path d="M-11 23h22v13h-22zM-7 14h14l4 7h-22z" fill="#ff9c12"/><text x="0" y="77">Product Sales</text></g>
    <g transform="translate(1155 63)"><rect x="-22" y="0" width="44" height="44" rx="11" fill="#fff0f3"/><path d="M-11 14h14l9 9-14 14-9-9z" fill="#ff405b"/><text x="0" y="77">Coupon Summary</text></g>
    <g transform="translate(1405 63)"><rect x="-22" y="0" width="44" height="44" rx="11" fill="#e8f4ff"/><rect x="-9" y="10" width="18" height="25" rx="3" fill="#2997e8"/><text x="0" y="77">Third-Party Transactions</text></g>
    <g transform="translate(1655 63)"><rect x="-22" y="0" width="44" height="44" rx="11" fill="#e6faee"/><rect x="-9" y="10" width="18" height="25" rx="3" fill="#10c98f"/><text x="0" y="77">Payment Details</text></g>
    <g transform="translate(1900 63)"><rect x="-22" y="0" width="44" height="44" rx="11" fill="#fff2df"/><path d="M-10 29h20l-3-14-7 7-7-7z" fill="#ff9c12"/><text x="0" y="77">Member Value Analysis</text></g>
  </g>
  <rect x="12" y="156" width="2024" height="393" rx="10" fill="#ffffff" stroke="#e8edf1"/>
  <text x="28" y="190" font-family="Inter,Arial,sans-serif" font-size="20" font-weight="700" fill="#101828">Sales Trend</text>
  <circle cx="34" cy="217" r="6" fill="#4b8df8"/><text x="49" y="222" font-family="Inter,Arial,sans-serif" font-size="13" fill="#667085">Actual Payment</text>
  <circle cx="174" cy="217" r="6" fill="#42c996"/><text x="189" y="222" font-family="Inter,Arial,sans-serif" font-size="13" fill="#667085">Comparison</text>
  <g stroke="#e7ebef" stroke-width="1"><line x1="76" y1="260" x2="1990" y2="260"/><line x1="76" y1="315" x2="1990" y2="315"/><line x1="76" y1="370" x2="1990" y2="370"/><line x1="76" y1="425" x2="1990" y2="425"/><line x1="76" y1="480" x2="1990" y2="480"/></g>
  <g font-family="Inter,Arial,sans-serif" font-size="12" fill="#98a2b3" text-anchor="end"><text x="62" y="264">1250</text><text x="62" y="319">1000</text><text x="62" y="374">750</text><text x="62" y="429">500</text><text x="62" y="484">250</text><text x="62" y="533">0</text></g>
  <g>
    <rect x="930" y="455" width="12" height="65" rx="2" fill="#4b8df8"/><rect x="947" y="486" width="12" height="34" rx="2" fill="#42c996"/>
    <rect x="1012" y="390" width="12" height="130" rx="2" fill="#4b8df8"/><rect x="1029" y="412" width="12" height="108" rx="2" fill="#42c996"/>
    <rect x="1094" y="344" width="12" height="176" rx="2" fill="#4b8df8"/><rect x="1111" y="320" width="12" height="200" rx="2" fill="#42c996"/>
    <rect x="1176" y="355" width="12" height="165" rx="2" fill="#4b8df8"/><rect x="1193" y="311" width="12" height="209" rx="2" fill="#42c996"/>
    <rect x="1258" y="293" width="12" height="227" rx="2" fill="#4b8df8"/><rect x="1275" y="269" width="12" height="251" rx="2" fill="#42c996"/>
    <rect x="1340" y="260" width="12" height="260" rx="2" fill="#4b8df8"/><rect x="1357" y="282" width="12" height="238" rx="2" fill="#42c996"/>
    <rect x="1422" y="286" width="12" height="234" rx="2" fill="#4b8df8"/><rect x="1439" y="279" width="12" height="241" rx="2" fill="#42c996"/>
    <rect x="1504" y="366" width="12" height="154" rx="2" fill="#4b8df8"/><rect x="1521" y="339" width="12" height="181" rx="2" fill="#42c996"/>
    <rect x="1586" y="484" width="12" height="36" rx="2" fill="#4b8df8"/><rect x="1603" y="490" width="12" height="30" rx="2" fill="#42c996"/>
  </g>
  <g font-family="Inter,Arial,sans-serif" font-size="11" fill="#98a2b3" text-anchor="middle"><text x="110" y="542">09-01</text><text x="320" y="542">09-04</text><text x="530" y="542">09-07</text><text x="740" y="542">09-10</text><text x="950" y="542">09-13</text><text x="1160" y="542">09-16</text><text x="1370" y="542">09-18</text><text x="1580" y="542">09-20</text><text x="1790" y="542">09-23</text></g>
</svg>`;

const toSvgDataUrl = (svg: string) => `url("data:image/svg+xml,${encodeURIComponent(svg)}")`;

document.documentElement.style.setProperty('--membership-screenshot-zh', `url("${membershipScreenshotDataUrl}")`);
document.documentElement.style.setProperty('--analytics-screenshot-zh', `url("${analyticsScreenshotDataUrl}")`);
document.documentElement.style.setProperty('--membership-screenshot-en', toSvgDataUrl(membershipScreenshotEnSvg));
document.documentElement.style.setProperty('--analytics-screenshot-en', toSvgDataUrl(analyticsScreenshotEnSvg));

const rootElement = document.getElementById('root');
if (!rootElement) {
  throw new Error("Could not find root element to mount to");
}

const root = ReactDOM.createRoot(rootElement);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);