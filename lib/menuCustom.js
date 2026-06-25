// lib/menuCustom.js — Customisable Menu Image Settings
// Owner can change these via commands

const fs = require('fs');
const path = require('path');

const SETTINGS_FILE = path.join(__dirname, '../config/menuSettings.json');

const defaults = {
  menuImage: 'https://i.ibb.co/wMkk1QL/vme-banner.jpg', // default banner
  botName: 'Malvin C VME',
  ownerName: 'Malvin C',
  tagline: 'Handsome Tech Zimbabwe 🇿🇼',
  theme: 'green',   // green | blue | red | gold | purple
  showRuntime: true,
  showDate: true,
  showTime: true,
  menuFooter: '🇿🇼 Powered by Handsome Tech Zimbabwe',
};

function load() {
  try {
    if (fs.existsSync(SETTINGS_FILE)) {
      return { ...defaults, ...JSON.parse(fs.readFileSync(SETTINGS_FILE, 'utf8')) };
    }
  } catch {}
  return { ...defaults };
}

function save(settings) {
  try {
    fs.mkdirSync(path.dirname(SETTINGS_FILE), { recursive: true });
    fs.writeFileSync(SETTINGS_FILE, JSON.stringify(settings, null, 2));
  } catch {}
}

function get(key) {
  return load()[key];
}

function set(key, value) {
  const s = load();
  s[key] = value;
  save(s);
  return s;
}

function getAll() {
  return load();
}

module.exports = { get, set, getAll, defaults };
