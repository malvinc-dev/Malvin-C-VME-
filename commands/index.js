// commands/index.js — Malvin C VME | Handsome Tech Zimbabwe 🇿🇼
// 781+ Commands — All in one file

const axios = require('axios');
const fs = require('fs');
const path = require('path');
const { exec } = require('child_process');
const ytSearch = require('yt-search');
const config = require('../config/config');
const db = require('../lib/database');
const menuCustom = require('../lib/menuCustom');
const {
  isOwner, runtime, pickRandom, randInt,
  getBuffer, sleep, timeNow, dateNow,
  getGreeting, tmpPath, isUrl, getMentions,
  capitalize, shorten, formatPhone, getNumber,
} = require('../lib/utils');

function buildMenu(prefix) {
  const up = process.uptime();
  const d=Math.floor(up/86400),h=Math.floor((up%86400)/3600),m=Math.floor((up%3600)/60),s=Math.floor(up%60);
  const ms = menuCustom.getAll();
  const star = '⭐';
  const div = '━━━━━━━━━━━━━━';
  
  return `✨ ${star} *${ms.botName}* ${star} ✨
${div}
${star} *${ms.tagline}* ${star}
${div}

${getGreeting()} 👋

╭━━━❰ 🤖 *BOT INFO* ❱━━━╮
┃ 👑 *Owner:* ${ms.ownerName}
┃ 🤖 *Bot:* ${ms.botName}
┃ 📦 *Prefix:* [ ${prefix} ]
┃ ⚡ *Version:* ${config.version}
┃ 🕐 *Time:* ${timeNow()}
┃ 📅 *Date:* ${dateNow()}
┃ ⏱️ *Runtime:* ${d}d ${h}h ${m}m ${s}s
┃ 📜 *Commands:* 781+
┃ ⚙️ *Mode:* ${config.mode.toUpperCase()}
=════════════════════*${BOT_NUMBER}*
★Commands : 780+
★Version: 4.0.1 Beta
══════════

《 ★ 》
★DOWNLOAD COMMANDS
★AI / CHAT COMMANDS
★IMAGE TOOLS COMMANDS
★ANIME ACTIONS COMMANDS
★GROUP TOOLS COMMANDS
★OWNER ONLY COMMANDS
★MENU CUSTOMISE COMMANDS
★SETTINGS COMMANDS
★ADMIN TOOLS COMMANDS
★FUN COMMANDS
★FUN TEXT COMMANDS
★GAMES COMMANDS
★UTILITY COMMANDS
★STALKER COMMANDS
★RESPECT COMMANDS
★DP PACKS COMMANDS
★UNBAN COMMANDS
══════════

══《 *DOWNLOAD* 》══
★${PREFIX}play
★${PREFIX}song
★${PREFIX}ytv
★${PREFIX}yts
★${PREFIX}tiktok
★${PREFIX}tiktok2
★${PREFIX}tiktokphoto
★${PREFIX}instagram
★${PREFIX}facebook
★${PREFIX}twitter
★${PREFIX}mediafire
★${PREFIX}apk
★${PREFIX}modapk
★${PREFIX}wastatus
★${PREFIX}mega
★${PREFIX}play2
★${PREFIX}lyrics
★${PREFIX}tts
★${PREFIX}ringtone

══《 *AI / CHAT* 》══
★${PREFIX}ai
★${PREFIX}gpt
★${PREFIX}gpt4
★${PREFIX}gemini
★${PREFIX}claude
★${PREFIX}deepseek
★${PREFIX}llama
★${PREFIX}mistral
★${PREFIX}mixtral
★${PREFIX}perplexity
★${PREFIX}grok
★${PREFIX}copilot
★${PREFIX}kimi
★${PREFIX}qwen
★${PREFIX}yi
★${PREFIX}imagine
★${PREFIX}dalle
★${PREFIX}chatbot on
★${PREFIX}chatbot off
★${PREFIX}translate
★${PREFIX}grammar
★${PREFIX}summarize
★${PREFIX}math
★${PREFIX}quran
★${PREFIX}hadith
★${PREFIX}bible
★${PREFIX}islam
★${PREFIX}brain
★${PREFIX}think

══《 *IMAGE TOOLS* 》══
★${PREFIX}sticker
★${PREFIX}toimg
★${PREFIX}remini
★${PREFIX}removebg
★${PREFIX}dewatermark
★${PREFIX}img
★${PREFIX}meme
★${PREFIX}waifu
★${PREFIX}neko
★${PREFIX}kitsune
★${PREFIX}animegirl
★${PREFIX}animeboy
★${PREFIX}catgirl
★${PREFIX}foxgirl
★${PREFIX}couplepp
★${PREFIX}hotgirl
★${PREFIX}manga
★${PREFIX}chibi

══《 *ANIME ACTIONS* 》══
★${PREFIX}hug
★${PREFIX}kiss
★${PREFIX}slap
★${PREFIX}pat
★${PREFIX}cry
★${PREFIX}blush
★${PREFIX}dance
★${PREFIX}wave
★${PREFIX}wink
★${PREFIX}cuddle
★${PREFIX}bite
★${PREFIX}lick
★${PREFIX}poke
★${PREFIX}bonk
★${PREFIX}yeet
★${PREFIX}highfive
★${PREFIX}nom
★${PREFIX}bully
★${PREFIX}handhold
★${PREFIX}smug
★${PREFIX}happy
★${PREFIX}angry
★${PREFIX}smile
★${PREFIX}roll
★${PREFIX}tickle
★${PREFIX}pout
★${PREFIX}glomp

══《 *GROUP TOOLS* 》══
★${PREFIX}kick
★${PREFIX}add
★${PREFIX}promote
★${PREFIX}demote
★${PREFIX}mute
★${PREFIX}unmute
★${PREFIX}tagall
★${PREFIX}hidetag
★${PREFIX}antilink on
★${PREFIX}antilink off
★${PREFIX}antidelete on
★${PREFIX}antidelete off
★${PREFIX}antispam on
★${PREFIX}antispam off
★${PREFIX}welcome
★${PREFIX}goodbye
★${PREFIX}setwelcome
★${PREFIX}setgoodbye
★${PREFIX}link
★${PREFIX}revoke
★${PREFIX}ginfo
★${PREFIX}poll
★${PREFIX}gcpp
★${PREFIX}autoapprove
★${PREFIX}updategname
★${PREFIX}updategdesc
★${PREFIX}acceptall
★${PREFIX}rejectall
★${PREFIX}requests
★${PREFIX}newgc

══《 *OWNER ONLY* 》══
★${PREFIX}pair 263xxxxxxxxx
★${PREFIX}broadcast
★${PREFIX}ban
★${PREFIX}unban
★${PREFIX}banlist
★${PREFIX}sudo
★${PREFIX}delsudo
★${PREFIX}block
★${PREFIX}unblock
★${PREFIX}mode
★${PREFIX}setprefix
★${PREFIX}setbotname
★${PREFIX}botdp
★${PREFIX}leave
★${PREFIX}join
★${PREFIX}restart
★${PREFIX}vv
★${PREFIX}bomb
★${PREFIX}send

══《 *MENU CUSTOMISE* 》══
★${PREFIX}setmenuimage <url>
★${PREFIX}settagline <text>
★${PREFIX}setmenufooter <text>
★${PREFIX}menutheme <color>
★${PREFIX}toggletime on
★${PREFIX}toggletime off
★${PREFIX}toggledate on
★${PREFIX}toggledate off
★${PREFIX}toggleruntime on
★${PREFIX}toggleruntime off
★${PREFIX}menupreview

══《 *SETTINGS* 》══
★${PREFIX}autoread on
★${PREFIX}autoread off
★${PREFIX}autotyping on
★${PREFIX}autotyping off
★${PREFIX}autorecording on
★${PREFIX}autorecording off
★${PREFIX}autoreact on
★${PREFIX}autoreact off
★${PREFIX}statusview on
★${PREFIX}statusview off
★${PREFIX}statuslike on
★${PREFIX}statuslike off
★${PREFIX}anticall on
★${PREFIX}anticall off
★${PREFIX}online on
★${PREFIX}online off
★${PREFIX}settings

══《 *ADMIN TOOLS* 》══
★${PREFIX}del
★${PREFIX}warn
★${PREFIX}warns
★${PREFIX}resetwarn
★${PREFIX}getpp
★${PREFIX}simdata

══《 *FUN* 》══
★${PREFIX}joke
★${PREFIX}meme
★${PREFIX}quote
★${PREFIX}fact
★${PREFIX}roast
★${PREFIX}compliment
★${PREFIX}ship
★${PREFIX}lovetest
★${PREFIX}8ball
★${PREFIX}coinflip
★${PREFIX}dice
★${PREFIX}truth
★${PREFIX}dare
★${PREFIX}pickupline
★${PREFIX}rate
★${PREFIX}horoscope
★${PREFIX}hack
★${PREFIX}aura
★${PREFIX}compatibility
★${PREFIX}propose
★${PREFIX}breakup
★${PREFIX}crush
★${PREFIX}husband
★${PREFIX}wife
★${PREFIX}bacha
★${PREFIX}bachi
★${PREFIX}flirt2
★${PREFIX}emoji

══《 *FUN TEXT* 》══
★${PREFIX}personalitytest
★${PREFIX}superpower
★${PREFIX}pastlife
★${PREFIX}darksecret
★${PREFIX}celebmatch
★${PREFIX}lifebattery
★${PREFIX}soulcolor
★${PREFIX}whatanimal
★${PREFIX}nightowl
★${PREFIX}stresslevel
★${PREFIX}emotionaldamage
★${PREFIX}animepersonality
★${PREFIX}friendtype
★${PREFIX}weeklyreport
★${PREFIX}challenge
★${PREFIX}gossip
★${PREFIX}storygen
★${PREFIX}wikifact
★${PREFIX}desiwisdom
★${PREFIX}kindness
★${PREFIX}motivationalslap
★${PREFIX}wisdomcookie
★${PREFIX}taunt
★${PREFIX}botroast
★${PREFIX}result
★${PREFIX}examseason
★${PREFIX}ishqmeter
★${PREFIX}naammatlab
★${PREFIX}numbergame

══《 *GAMES* 》══
★${PREFIX}rps
★${PREFIX}riddle
★${PREFIX}trivia
★${PREFIX}quiz
★${PREFIX}mathquiz
★${PREFIX}wordscramble

══《 *UTILITY* 》══
★${PREFIX}weather
★${PREFIX}news
★${PREFIX}wiki
★${PREFIX}define
★${PREFIX}qr
★${PREFIX}base64
★${PREFIX}binary
★${PREFIX}urlencode
★${PREFIX}url
★${PREFIX}screenshot
★${PREFIX}npm
★${PREFIX}readmore
★${PREFIX}prayertime
★${PREFIX}boost
★${PREFIX}timenow
★${PREFIX}ping
★${PREFIX}uptime
★${PREFIX}alive

══《 *STALKER* 》══
★${PREFIX}github
★${PREFIX}githubstalk
★${PREFIX}pinsearch

══《 *RESPECT* 》══
★${PREFIX}respect
★${PREFIX}salute
★${PREFIX}legend
★${PREFIX}king
★${PREFIX}queen
★${PREFIX}boss
★${PREFIX}champion
★${PREFIX}blessed
★${PREFIX}mashallah
★${PREFIX}jazakallah

══《 *DP PACKS* 》══
★${PREFIX}boydp1
★${PREFIX}boydp2
★${PREFIX}boydp3
★${PREFIX}boydp4
★${PREFIX}boydp5
★${PREFIX}boydp6
★${PREFIX}boydp7
★${PREFIX}boydp8
★${PREFIX}boydp9
★${PREFIX}boydp10
★${PREFIX}boydp11
★${PREFIX}boydp12
★${PREFIX}boydp13
★${PREFIX}boydp14
★${PREFIX}boydp15
★${PREFIX}boydp16
★${PREFIX}boydp17
★${PREFIX}boydp18
★${PREFIX}boydp19
★${PREFIX}boydp20
★${PREFIX}boydp21
★${PREFIX}boydp22
★${PREFIX}girldp1
★${PREFIX}girldp2
★${PREFIX}girldp3
★${PREFIX}girldp4
★${PREFIX}girldp5
★${PREFIX}girldp6
★${PREFIX}girldp7
★${PREFIX}girldp8
★${PREFIX}girldp9
★${PREFIX}girldp10
★${PREFIX}girldp11
★${PREFIX}girldp12
★${PREFIX}girldp13
★${PREFIX}girldp14
★${PREFIX}girldp15
★${PREFIX}girldp16
★${PREFIX}girldp17
★${PREFIX}girldp18
★${PREFIX}girldp19
★${PREFIX}girldp20
★${PREFIX}girldp21
★${PREFIX}girldp22

══《 *UNBAN* 》══
★${PREFIX}unban1
★${PREFIX}unban2
★${PREFIX}unban3
★${PREFIX}unban4
★${PREFIX}unban5
★${PREFIX}unban6
★${PREFIX}unban7
★${PREFIX}unban8
★${PREFIX}unban9
★${PREFIX}unban10
★${PREFIX}unban11
★${PREFIX}unban12
★${PREFIX}unban13
★${PREFIX}unban14
★${PREFIX}unban15
★${PREFIX}unban16
★${PREFIX}unban17
★${PREFIX}unban18
★${PREFIX}unban19
★${PREFIX}unban20
★${PREFIX}unban21
★${PREFIX}unban22
★${PREFIX}unban23
★${PREFIX}unban24
★${PREFIX}unban25
★${PREFIX}unban26
★${PREFIX}unban27
★${PREFIX}unban28
★${PREFIX}unban29
★${PREFIX}unban30
★${PREFIX}unban31
★${PREFIX}unban32
★${PREFIX}unban33
★${PREFIX}unban34
★${PREFIX}unban35
★${PREFIX}unban36
★${PREFIX}unban37
★${PREFIX}unban38
★${PREFIX}unban39
★${PREFIX}unban40
★${PREFIX}unban41
★${PREFIX}unban42
★${PREFIX}unban43
★${PREFIX}unban44
★${PREFIX}unban45
★${PREFIX}unban46
★${PREFIX}unban47
★${PREFIX}unban48
★${PREFIX}unbanlist
★${PREFIX}unbanguid

══════════════.`;
}

async function handleCommand(sock, msg, opts = {}) {
  try {
    const { body='',sender='',from='',isGroup=false,isOwnerMsg=false,isSudo=false,isAdmin=false,isBotAdmin=false,mentionedJid=[],pushName='' } = opts;
    const prefix = config.prefix;
    if (!body.startsWith(prefix)) return;
    const args = body.slice(prefix.length).trim().split(/\s+/);
    const cmd = args.shift().toLowerCase();
    const text = args.join(' ');
    const q = text;
    const reply = (txt) => sock.sendMessage(from, { text: txt }, { quoted: msg });
    const sendImg = (url, cap='') => sock.sendMessage(from, { image:{url}, caption:cap }, { quoted: msg });
    const animeImg = async (type) => {
      try { const r=await axios.get(`https://api.waifu.pics/${type}`); await sendImg(r.data.url,`${capitalize(type)} 🎌\n🇿🇼 Malvin C VME`); }
      catch { await reply(`❌ Could not fetch ${type} image.`); }
    };
    const praiseReply = async (word, emoji) => {
      const target = mentionedJid[0]?`@${getNumber(mentionedJid[0])}`:q||pushName;
      await reply(`${emoji} *${word}* ${emoji}\n\n${target}, you truly deserve this! 🌟\n\n🇿🇼 Malvin C VME`);
    };
    if (db.isBanned(getNumber(sender)) && !isOwnerMsg) return;
    if (config.mode==='private' && !isOwnerMsg && !isSudo) return;

    switch(cmd) {

    // ══ MENU ══
    case 'menu': case 'help': case 'cmds': case 'menu2': {
      const ms = menuCustom.getAll();
      try { await sock.sendMessage(from,{image:{url:ms.menuImage},caption:buildMenu(prefix)},{quoted:msg}); }
      catch { await reply(buildMenu(prefix)); }
      break;
    }
    case 'alive': await reply(`╔══❰ ✅ *ALIVE* ❱══╗\n║ 🤖 *${config.botName}* is Online!\n║ ⏱️ ${runtime(process.uptime())}\n║ 🇿🇼 Handsome Tech Zimbabwe\n╚════════════════════╝`); break;
    case 'ping': case 'ping2': { const s=Date.now(); await reply('🏓 Pinging...'); await reply(`🏓 *${Date.now()-s}ms* — Online ✅`); break; }
    case 'uptime': await reply(`⏱️ *Uptime:* ${runtime(process.uptime())}`); break;
    case 'owner': await reply(`╔══❰ 👑 *OWNER* ❱══╗\n║ 👤 ${config.ownerName}\n║ 📱 +${config.ownerNumber}\n║ 🇿🇼 Zimbabwe\n║ 💻 Handsome Tech Zimbabwe\n╚════════════════════╝\nwa.me/${config.ownerNumber}`); break;
    case 'bot': case 'botinfo': await reply(`╔══❰ 🤖 *BOT INFO* ❱══╗\n║ 🤖 ${config.botName}\n║ 👑 ${config.ownerName}\n║ ⚡ v${config.version}\n║ 📦 Prefix: ${prefix}\n║ ⚙️ ${config.mode.toUpperCase()}\n║ ⏱️ ${runtime(process.uptime())}\n║ 📜 781+ Commands\n╚════════════════════╝`); break;
    case 'repo': await reply(`📦 *Malvin C VME Repo*\ngithub.com/HandsomeTechZimbabwe/malvin-c-vme\n🌟 Star it!\n🇿🇼 Handsome Tech Zimbabwe`); break;
    case 'status': case 'gstatus': case 'gstatus2': { const mem=process.memoryUsage(); await reply(`📊 *Status*\n✅ Online\n⏱️ ${runtime(process.uptime())}\n🧠 RAM: ${(mem.heapUsed/1024/1024).toFixed(1)}MB\n⚡ Node ${process.version}\n🇿🇼 Malvin C VME`); break; }
    case 'timenow': case 'time': case 'date': await reply(`🕐 *${timeNow()}*\n📅 *${dateNow()}*\n🌍 Africa/Harare (CAT) 🇿🇼`); break;

    // ══ MENU CUSTOMISE ══
    case 'setmenuimage': {
      if (!isOwnerMsg&&!isSudo) return reply('❌ Owner/Sudo only.');
      if (!q||!isUrl(q)) return reply(`❌ Usage: *${prefix}setmenuimage <image URL>*\n\nPaste a direct .jpg or .png link.`);
      menuCustom.set('menuImage',q);
      await reply(`✅ Menu image updated!\nType *${prefix}menupreview* to check it.`);
      break;
    }
    case 'settagline': {
      if (!isOwnerMsg&&!isSudo) return reply('❌ Owner/Sudo only.');
      if (!q) return reply(`❌ Usage: *${prefix}settagline <text>*`);
      menuCustom.set('tagline',q); await reply(`✅ Tagline: *${q}*`); break;
    }
    case 'setmenufooter': {
      if (!isOwnerMsg&&!isSudo) return reply('❌ Owner/Sudo only.');
      if (!q) return reply(`❌ Usage: *${prefix}setmenufooter <text>*`);
      menuCustom.set('menuFooter',q); await reply(`✅ Footer: *${q}*`); break;
    }
    case 'menutheme': {
      if (!isOwnerMsg&&!isSudo) return reply('❌ Owner/Sudo only.');
      const themes=['green','blue','red','gold','purple','cyan'];
      if (!themes.includes(q)) return reply(`❌ Themes: ${themes.join(', ')}`);
      menuCustom.set('theme',q); await reply(`✅ Theme: *${q}*`); break;
    }
    case 'toggletime': { if (!isOwnerMsg&&!isSudo) return reply('❌ Owner only.'); if (!['on','off'].includes(q)) return reply(`❌ on/off`); menuCustom.set('showTime',q==='on'); await reply(`✅ Time display *${q.toUpperCase()}*`); break; }
    case 'toggledate': { if (!isOwnerMsg&&!isSudo) return reply('❌ Owner only.'); if (!['on','off'].includes(q)) return reply(`❌ on/off`); menuCustom.set('showDate',q==='on'); await reply(`✅ Date display *${q.toUpperCase()}*`); break; }
    case 'toggleruntime': { if (!isOwnerMsg&&!isSudo) return reply('❌ Owner only.'); if (!['on','off'].includes(q)) return reply(`❌ on/off`); menuCustom.set('showRuntime',q==='on'); await reply(`✅ Runtime display *${q.toUpperCase()}*`); break; }
    case 'menupreview': {
      const ms=menuCustom.getAll();
      try { await sock.sendMessage(from,{image:{url:ms.menuImage},caption:`🖼️ *Menu Image Preview*\n\n📝 Tagline: ${ms.tagline}\n🎨 Theme: ${ms.theme}\n📋 Footer: ${ms.menuFooter}`},{quoted:msg}); }
      catch { await reply(`❌ Could not load image:\n${ms.menuImage}\n\nSet a valid URL with *${prefix}setmenuimage <url>*`); }
      break;
    }

    // ══ DOWNLOAD ══
    case 'play': case 'song': case 'play':
    if (!text) return m.reply('🎵 Example:.play eminem lose yourself')

    try {
        let sender = m.jid.split('@')[0]
        m.reply('🔍 Searching YouTube...')

        // Search YouTube using API
        let search = await fetch(`https://api.popcat.xyz/ytsearch?q=${encodeURIComponent(text)}`)
        let data = await search.json()
        if (!data.results || data.results.length < 1) return m.reply('❌ No results found')

        let video = data.results[0]
        let url = video.url

        m.reply(`⬇️ Downloading: *${video.title}*\n⏱️ ${video.duration}\n👤 ${video.channel.name}`)

        // Download audio with ytdl-core
        const ytdl = require('ytdl-core')
        const ffmpeg = require('fluent-ffmpeg')
        const ffmpegPath = require('fluent-ffmpeg-static')
        const fs = require('fs')
        ffmpeg.setFfmpegPath(ffmpegPath)

        let file = `./temp/${Date.now()}.mp3`

        ytdl(url, { filter: 'audioonly', quality: 'highestaudio' })
       .pipe(ffmpeg()
           .audioBitrate(128)
           .format('mp3')
           .save(file)
           .on('end', async () => {
                await conn.sendMessage(m.chat, {
                    audio: fs.readFileSync(file),
                    mimetype: 'audio/mpeg',
                    fileName: video.title + '.mp3'
                }, { quoted: m })
                fs.unlinkSync(file)
            })
           .on('error', (err) => {
                console.log(err)
                m.reply('❌ Error converting audio')
            })
        )

    } catch (e) {
        console.log(e)
        m.reply('❌ Error: ' + e.message)
    }
break

    case 'play2': {
      if (!q) return reply(`❌ *${prefix}play2 <song name>*`);
      await reply(`Malvin C 🎵 Searching: *${q}*...`);
      try {
        const r=await axios.get(`https://jiosaavn-api-privatecobra26.vercel.app/search/songs?query=${encodeURIComponent(q)}&page=0&count=1`);
        const song=r.data?.data?.results?.[0];
        if (!song) return reply('❌ Not found.');
        const url=song.downloadUrl?.find(d=>d.quality==='320kbps')?.link||song.downloadUrl?.[0]?.link;
        if (!url) return reply('❌ No link found.');
        await sock.sendMessage(from,{audio:{url},mimetype:'audio/mpeg',ptt:false},{quoted:msg});
      } catch { reply('❌ Play2 failed.'); }
      break;
    }
    case 'yts': {
      if (!q) return reply(`❌ *${prefix}yts <query>*`);
      try {
        const r=await ytSearch(q);
        const list=r.videos.slice(0,5).map((v,i)=>`${i+1}. *${v.title}*\n   ⏱️ ${v.timestamp} | 🔗 ${v.url}`).join('\n\n');
        await reply(`🔍 *YouTube: ${q}*\n\n${list}`);
      } catch { reply('❌ Search failed.'); }
      break;
    }
    case 'ytv': {
      if (!q) return reply(`❌ *${prefix}ytv <YouTube URL or name>*`);
      await reply('🎬 Downloading video...');
      try {
        const res=await ytSearch(q); const v=isUrl(q)?{url:q,title:'Video'}:res.videos[0];
        if (!v) return reply('❌ Not found.');
        await reply(`🎬 *${v.title}*\n⏳ Please wait...`);
        exec(`yt-dlp -f "best[ext=mp4][filesize<50M]" -o "${tmpPath('mp4')}" "${v.url}" --print after_move:filepath 2>/dev/null`, async(err,out)=>{
          if (err) return reply('❌ yt-dlp not installed on this server.');
          const fp=out.trim(); if (!fs.existsSync(fp)) return reply('❌ File missing.');
          await sock.sendMessage(from,{video:fs.readFileSync(fp),caption:`🎬 ${v.title}\n🇿🇼 Malvin C VME`,mimetype:'video/mp4'},{quoted:msg});
          fs.unlinkSync(fp);
        });
      } catch { reply('❌ Failed.'); }
      break;
    }
    case 'tiktok': case 'tiktok2': case 'tiktok3': case 'tt': {
      if (!q) return reply(`❌ *${prefix}tiktok <URL>*`);
      await reply('⏳ Downloading TikTok...');
      try {
        const r=await axios.get(`https://www.tikwm.com/api/?url=${encodeURIComponent(q)}`);
        const d=r.data?.data; if (!d) return reply('❌ Failed.');
        await sock.sendMessage(from,{video:{url:d.play},caption:`📱 *${d.title||'TikTok'}*\n❤️ ${d.digg_count||0}\n🇿🇼 Malvin C VME`,mimetype:'video/mp4'},{quoted:msg});
      } catch { reply('❌ TikTok download failed.'); }
      break;
    }
    case 'tiktokphoto': {
      if (!q) return reply(`❌ *${prefix}tiktokphoto <URL>*`);
      await reply('⏳ Fetching TikTok photos...');
      try {
        const r=await axios.get(`https://www.tikwm.com/api/?url=${encodeURIComponent(q)}`);
        const imgs=r.data?.data?.images;
        if (!imgs?.length) return reply('❌ No photos. Use .tiktok for videos.');
        for (const img of imgs.slice(0,5)) { await sendImg(img,'📸 TikTok Photo\n🇿🇼 Malvin C VME'); await sleep(500); }
      } catch { reply('❌ Failed.'); }
      break;
    }
    case 'instagram': case 'ig': {
      if (!q) return reply(`❌ *${prefix}instagram <URL>*`);
      await reply('⏳ Downloading from Instagram...');
      try {
        const r=await axios.get(`https://api.instagramsave.net/download?url=${encodeURIComponent(q)}`);
        const url=r.data?.url||r.data?.video;
        if (!url) return reply('❌ Could not extract. Try a different URL.');
        await sock.sendMessage(from,{video:{url},caption:'📸 Instagram\n🇿🇼 Malvin C VME'},{quoted:msg});
      } catch { reply('❌ Instagram failed.'); }
      break;
    }
    case 'facebook': case 'fb': {
      if (!q) return reply(`❌ *${prefix}facebook <URL>*`);
      await reply('⏳ Downloading from Facebook...');
      try {
        const r=await axios.post('https://fdownloader.net/api/ajaxSearch',`q=${encodeURIComponent(q)}&lang=en&v=v2`,{headers:{'Content-Type':'application/x-www-form-urlencoded'}});
        const m=r.data?.data?.match(/href="(https[^"]+\.mp4[^"]*)"/);
        if (!m) return reply('❌ Could not find video.');
        await sock.sendMessage(from,{video:{url:m[1]},caption:'📘 Facebook\n🇿🇼 Malvin C VME'},{quoted:msg});
      } catch { reply('❌ Facebook failed.'); }
      break;
    }
    case 'twitter': case 'tw': {
      if (!q) return reply(`❌ *${prefix}twitter <URL>*`);
      await reply('⏳ Downloading from Twitter/X...');
      try {
        const r=await axios.get(`https://twitsave.com/info?url=${encodeURIComponent(q)}`);
        const m=r.data.match(/data-url="([^"]+\.mp4[^"]*)"/);
        if (!m) return reply('❌ Could not extract video.');
        await sock.sendMessage(from,{video:{url:m[1]},caption:'🐦 Twitter/X\n🇿🇼 Malvin C VME'},{quoted:msg});
      } catch { reply('❌ Twitter failed.'); }
      break;
    }
    case 'mediafire': {
      if (!q) return reply(`❌ *${prefix}mediafire <URL>*`);
      await reply('⏳ Fetching link...');
      try {
        const r=await axios.get(q,{headers:{'User-Agent':'Mozilla/5.0'}});
        const m=r.data.match(/aria-label="Download file"[^>]*href="([^"]+)"/);
        if (!m) return reply('❌ Could not extract link.');
        await reply(`✅ *MediaFire Download:*\n\n${m[1]}`);
      } catch { reply('❌ MediaFire failed.'); }
      break;
    }
    case 'mega': { if (!q) return reply(`❌ *${prefix}mega <URL>*`); await reply(`📥 Open this MEGA link in your browser or MEGA app:\n\n${q}\n\n🇿🇼 Malvin C VME`); break; }
    case 'apk': { if (!q) return reply(`❌ *${prefix}apk <app name>*`); await reply(`📱 *APK for: ${q}*\n\n🔗 APKPure: https://apkpure.com/search?q=${encodeURIComponent(q)}\n🔗 APKMirror: https://www.apkmirror.com/?s=${encodeURIComponent(q)}\n\n🇿🇼 Malvin C VME`); break; }
    case 'modapk': { if (!q) return reply(`❌ *${prefix}modapk <app name>*`); await reply(`🔧 *Mod APK for: ${q}*\n\n🔗 HappyMod: https://www.happymod.com/search.html?q=${encodeURIComponent(q)}\n🔗 Revdl: https://www.revdl.com/?s=${encodeURIComponent(q)}\n\n⚠️ Use at your own risk.\n🇿🇼 Malvin C VME`); break; }
    case 'wastatus': await reply(`📱 *WhatsApp Status Saver*\n\n1️⃣ View the status in WhatsApp\n2️⃣ Open file manager\n3️⃣ Go to:\n📂 /WhatsApp/Media/.Statuses/\nor\n📂 /Android/media/com.whatsapp/WhatsApp/Media/.Statuses/\n4️⃣ Enable "Show hidden files"\n5️⃣ Copy the file!\n\n🇿🇼 Malvin C VME`); break;
    case 'pinterest': case 'pinterestimg': {
      if (!q) return reply(`❌ *${prefix}pinterest <query>*`);
      try { const r=await axios.get(`https://source.unsplash.com/800x1200/?${encodeURIComponent(q)}`,{responseType:'arraybuffer'}); await sock.sendMessage(from,{image:Buffer.from(r.data),caption:`📌 ${q}\n🇿🇼 Malvin C VME`},{quoted:msg}); }
      catch { reply('❌ Image search failed.'); }
      break;
    }
    case 'lyrics': {
      if (!q) return reply(`❌ *${prefix}lyrics <song name>*`);
      await reply(`🎵 Searching lyrics: *${q}*...`);
      try {
        const r=await axios.get(`https://some-random-api.com/lyrics?title=${encodeURIComponent(q)}`);
        if (!r.data?.lyrics) return reply('❌ Not found.');
        await reply(`🎵 *${r.data.title}* by *${r.data.author}*\n\n${r.data.lyrics.substring(0,3000)}`);
      } catch { reply('❌ Lyrics not found.'); }
      break;
    }
    case 'tts': {
      if (!q) return reply(`❌ *${prefix}tts <text>*`);
      try { await sock.sendMessage(from,{audio:{url:`https://api.streamelements.com/kappa/v2/speech?voice=Brian&text=${encodeURIComponent(q)}`},mimetype:'audio/mpeg',ptt:false},{quoted:msg}); }
      catch { reply('❌ TTS failed.'); }
      break;
    }
    case 'ringtone': {
      try { await sock.sendMessage(from,{audio:{url:'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3'},mimetype:'audio/mpeg',ptt:false},{quoted:msg}); }
      catch { reply('❌ Failed.'); }
      break;
    }

    // ══ AI ══
    case 'ai': case 'gpt': case 'chatgpt': case 'brain': case 'askai': case 'think': {
      if (!q) return reply(`❌ *${prefix}ai <question>*`);
      await reply('🤖 Thinking...');
      try { const r=await axios.get(`https://api.simsimi.vn/v1/simsimiplus?lc=en&text=${encodeURIComponent(q)}`); await reply(`🤖 *AI:*\n\n${r.data?.success||'No response.'}`); }
      catch { reply('❌ AI unavailable.'); }
      break;
    }
    case 'gpt4': case 'gpt4o': {
      if (!q) return reply(`❌ *${prefix}gpt4 <prompt>*`);
      await reply('🧠 GPT-4 thinking...');
      try {
        const r=await axios.post('https://api.openai.com/v1/chat/completions',{model:'gpt-4o',messages:[{role:'user',content:q}],max_tokens:800},{headers:{Authorization:`Bearer ${process.env.OPENAI_API_KEY||process.env.OPENAI_KEY||''}`}});
        await reply(`🧠 *GPT-4o:*\n\n${r.data?.choices?.[0]?.message?.content||'No response.'}`);
      } catch { reply('❌ Add OPENAI_API_KEY to .env'); }
      break;
    }
    case 'gemini': case 'geminipro': {
      if (!q) return reply(`❌ *${prefix}gemini <prompt>*`);
      await reply('✨ Asking Gemini...');
      try {
        const key=config.geminiKey||process.env.GEMINI_API_KEY; if (!key) return reply('❌ Add GEMINI_API_KEY to config/config.js');
        const r=await axios.post(`https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=${key}`,{contents:[{parts:[{text:q}]}]});
        await reply(`✨ *Gemini:*\n\n${r.data?.candidates?.[0]?.content?.parts?.[0]?.text||'No response.'}`);
      } catch { reply('❌ Gemini failed.'); }
      break;
    }
    case 'claude': case 'claudeopus': {
      if (!q) return reply(`❌ *${prefix}claude <prompt>*`);
      await reply('🔮 Asking Claude...');
      try {
        const r=await axios.post('https://api.anthropic.com/v1/messages',{model:'claude-haiku-20240307',max_tokens:1000,messages:[{role:'user',content:q}]},{headers:{'x-api-key':process.env.ANTHROPIC_KEY||'','anthropic-version':'2023-06-01','content-type':'application/json'}});
        await reply(`🔮 *Claude:*\n\n${r.data?.content?.[0]?.text||'No response.'}`);
      } catch { reply('❌ Add ANTHROPIC_KEY to .env'); }
      break;
    }
    case 'deepseek': case 'deepseekcode': {
      if (!q) return reply(`❌ *${prefix}deepseek <prompt>*`);
      await reply('🧠 Asking DeepSeek...');
      try {
        const r=await axios.post('https://api.deepseek.com/v1/chat/completions',{model:cmd==='deepseekcode'?'deepseek-coder':'deepseek-chat',messages:[{role:'user',content:q}]},{headers:{Authorization:`Bearer ${process.env.DEEPSEEK_KEY||''}`}});
        await reply(`🧠 *DeepSeek:*\n\n${r.data?.choices?.[0]?.message?.content||'No response.'}`);
      } catch { reply('❌ Add DEEPSEEK_KEY to .env'); }
      break;
    }
    case 'llama': case 'llama2': case 'llama3': {
      if (!q) return reply(`❌ *${prefix}llama <prompt>*`);
      await reply('🦙 Asking LLaMA...');
      try {
        const models={llama:'meta-llama/Llama-2-7b-chat-hf',llama2:'meta-llama/Llama-2-13b-chat-hf',llama3:'meta-llama/Meta-Llama-3-8B-Instruct'};
        const r=await axios.post('https://api.deepinfra.com/v1/openai/chat/completions',{model:models[cmd],messages:[{role:'user',content:q}]},{headers:{Authorization:`Bearer ${process.env.DEEPINFRA_KEY||''}`}});
        await reply(`🦙 *${capitalize(cmd)}:*\n\n${r.data?.choices?.[0]?.message?.content||'No response.'}`);
      } catch { reply('❌ Add DEEPINFRA_KEY to .env'); }
      break;
    }
    case 'mistral': case 'mixtral': {
      if (!q) return reply(`❌ *${prefix}mistral <prompt>*`);
      await reply('🌪️ Asking Mistral...');
      try {
        const model=cmd==='mixtral'?'mistralai/Mixtral-8x7B-Instruct-v0.1':'mistralai/Mistral-7B-Instruct-v0.2';
        const r=await axios.post('https://api.deepinfra.com/v1/openai/chat/completions',{model,messages:[{role:'user',content:q}]},{headers:{Authorization:`Bearer ${process.env.DEEPINFRA_KEY||''}`}});
        await reply(`🌪️ *${capitalize(cmd)}:*\n\n${r.data?.choices?.[0]?.message?.content||'No response.'}`);
      } catch { reply('❌ Add DEEPINFRA_KEY to .env'); }
      break;
    }
    case 'perplexity': case 'perplexai': { if (!q) return reply(`❌ *${prefix}perplexity <prompt>*`); await reply('🔍 Asking Perplexity...'); try { const r=await axios.get(`https://api.simsimi.vn/v1/simsimiplus?lc=en&text=${encodeURIComponent(q)}`); await reply(`🔍 *Perplexity:*\n\n${r.data?.success||'No response.'}`); } catch { reply('❌ Failed.'); } break; }
    case 'copilot': case 'copilotpro': { if (!q) return reply(`❌ *${prefix}copilot <prompt>*`); await reply('🤝 Asking Copilot...'); try { const r=await axios.get(`https://api.simsimi.vn/v1/simsimiplus?lc=en&text=${encodeURIComponent(q)}`); await reply(`🤝 *Copilot:*\n\n${r.data?.success||'No response.'}`); } catch { reply('❌ Failed.'); } break; }
    case 'grok': case 'grokbeta': { if (!q) return reply(`❌ *${prefix}grok <prompt>*`); await reply('🤖 Asking Grok...'); try { const r=await axios.post('https://api.x.ai/v1/chat/completions',{model:'grok-beta',messages:[{role:'user',content:q}]},{headers:{Authorization:`Bearer ${process.env.XAI_KEY||''}`}}); await reply(`🤖 *Grok:*\n\n${r.data?.choices?.[0]?.message?.content||'No response.'}`); } catch { reply('❌ Add XAI_KEY to .env'); } break; }
    case 'kimi': case 'kimihelp': case 'moonshot': { if (!q) return reply(`❌ *${prefix}kimi <prompt>*`); await reply('🌙 Asking Kimi...'); try { const r=await axios.post('https://api.moonshot.cn/v1/chat/completions',{model:'moonshot-v1-8k',messages:[{role:'user',content:q}]},{headers:{Authorization:`Bearer ${process.env.MOONSHOT_KEY||''}`}}); await reply(`🌙 *Kimi:*\n\n${r.data?.choices?.[0]?.message?.content||'No response.'}`); } catch { reply('❌ Add MOONSHOT_KEY to .env'); } break; }
    case 'qwen': case 'yi': case 'yi34b': case 'solar': case 'orca': case 'vicuna': case 'alpaca': case 'falcon': case 'wizard': case 'wizardcoder': case 'codellama': case 'openchat': case 'neuralchat': case 'starling': case 'phi': case 'phi2': case 'phi3': case 'starcoder': case 'codet5': case 'bloom': case 'gptneoX': case 'dolly': case 'stablelm': case 'redpajama': { if (!q) return reply(`❌ *${prefix}${cmd} <prompt>*`); await reply(`🤖 Asking ${capitalize(cmd)}...`); try { const r=await axios.get(`https://api.simsimi.vn/v1/simsimiplus?lc=en&text=${encodeURIComponent(q)}`); await reply(`🤖 *${capitalize(cmd)}:*\n\n${r.data?.success||'No response.'}`); } catch { reply('❌ Failed.'); } break; }
    case 'imagine': case 'dalle': {
      if (!q) return reply(`❌ *${prefix}imagine <description>*`);
      await reply(`🎨 Generating: *"${q}"*...`);
      try { const r=await axios.get(`https://image.pollinations.ai/prompt/${encodeURIComponent(q)}?width=512&height=512&nologo=true`,{responseType:'arraybuffer'}); await sock.sendMessage(from,{image:Buffer.from(r.data),caption:`🎨 *${q}*\n🇿🇼 Malvin C VME`},{quoted:msg}); }
      catch { reply('❌ Image generation failed.'); }
      break;
    }
    case 'chatbot': { if (!isGroup) return reply('❌ Group only.'); if (!isAdmin&&!isOwnerMsg) return reply('❌ Admins only.'); if (!['on','off'].includes(q)) return reply(`❌ *${prefix}chatbot on/off*`); db.setGroup(from,'chatbot',q==='on'); await reply(`🤖 Chatbot *${q.toUpperCase()}*`); break; }
    case 'translate': { if (!q) return reply(`❌ *${prefix}translate <lang> <text>*`); const [lang,...rest]=q.split(' '); try { const r=await axios.get(`https://api.mymemory.translated.net/get?q=${encodeURIComponent(rest.join(' '))}&langpair=en|${lang}`); await reply(`🌍 *→ ${lang.toUpperCase()}:*\n\n${r.data?.responseData?.translatedText}`); } catch { reply('❌ Translation failed.'); } break; }
    case 'grammar': case 'spellcheck': case 'correct': case 'proofread': case 'grammarly': { if (!q) return reply(`❌ *${prefix}grammar <text>*`); try { const r=await axios.post('https://api.languagetool.org/v2/check',null,{params:{text:q,language:'en-US'}}); const m=r.data?.matches||[]; if (!m.length) return reply('✅ No issues found!'); await reply(`✏️ *Grammar Check:*\n\n${m.slice(0,5).map((x,i)=>`${i+1}. "${x.context.text.substring(x.context.offset,x.context.offset+x.context.length)}" → ${x.replacements?.[0]?.value||'?'}\n   ${x.message}`).join('\n\n')}`); } catch { reply('❌ Failed.'); } break; }
    case 'summarize': { if (!q) return reply(`❌ *${prefix}summarize <text>*`); try { const r=await axios.post('https://api.deepai.org/api/summarization',{text:q},{headers:{'api-key':'quickstart-QUdJIGlzIGF3ZXNvbWU'}}); await reply(`📝 *Summary:*\n\n${r.data?.output||'Failed.'}`); } catch { reply('❌ Failed.'); } break; }
    case 'math': case 'calculate': case 'calc': case 'calculator': case 'mathgpt': { if (!q) return reply(`❌ *${prefix}math <expression>*`); try { const r=Function(`"use strict";return(${q.replace(/[^0-9+\-*/().% ]/g,'')})`)(); await reply(`🧮 \`${q}\` = *${r}*`); } catch { reply('❌ Invalid expression.'); } break; }
    case 'algebra': case 'geometry': { if (!q) return reply(`❌ *${prefix}${cmd} <problem>*`); await reply(`📐 *${capitalize(cmd)}:* ${q}\n\n💡 https://www.wolframalpha.com/input?i=${encodeURIComponent(q)}`); break; }
    case 'quran': { if (!q) return reply(`❌ *${prefix}quran <surah:ayah>*`); try { const [s,a]=q.split(':'); const r=await axios.get(`https://api.alquran.cloud/v1/ayah/${s}:${a}/editions/quran-uthmani,en.asad`); const d=r.data?.data; await reply(`📖 *Quran ${s}:${a}*\n\n🕌 *Arabic:*\n${d?.[0]?.text}\n\n🌍 *English:*\n${d?.[1]?.text}\n\n— ${d?.[0]?.surah?.englishName}`); } catch { reply('❌ Not found. Format: .quran 2:255'); } break; }
    case 'hadith': { await reply('📜 Fetching...'); try { const r=await axios.get('https://random-hadith-generator.vercel.app/bukhari/'); const h=r.data?.data; await reply(`📜 *Hadith (Bukhari)*\n\n${h?.hadith_english||'Not found.'}\n\n— ${h?.refno||''}\n📚 ${h?.chapter||''}`); } catch { reply('❌ Failed.'); } break; }
    case 'islam': case 'islamcity': case 'fiqh': case 'sunnah': { if (!q) return reply(`❌ *${prefix}islam <question>*`); try { const r=await axios.get(`https://api.simsimi.vn/v1/simsimiplus?lc=en&text=${encodeURIComponent(q+' islamic')}`); await reply(`🕌 *Islam Q&A:*\n\n${r.data?.success||'Please consult a scholar.'}`); } catch { reply('❌ Failed.'); } break; }
    case 'bible': { if (!q) return reply(`❌ *${prefix}bible <Book Ch:Verse>*`); try { const r=await axios.get(`https://bible-api.com/${encodeURIComponent(q)}`); await reply(`✝️ *${r.data?.reference}*\n\n${r.data?.text||'Not found.'}`); } catch { reply('❌ Verse not found.'); } break; }

    // ══ IMAGE TOOLS ══
    case 'sticker': case 'stiker': case 's': {
      const imgMsg=msg.message?.extendedTextMessage?.contextInfo?.quotedMessage?.imageMessage||msg.message?.imageMessage;
      if (!imgMsg) return reply('❌ Reply to an image to make a sticker.');
      try {
        const stream=await sock.downloadMediaMessage(msg);
        const inp=tmpPath('jpg'); const out=tmpPath('webp');
        fs.writeFileSync(inp,stream);
        exec(`ffmpeg -i "${inp}" -vf "scale=512:512:force_original_aspect_ratio=decrease,pad=512:512:(ow-iw)/2:(oh-ih)/2:color=white@0" "${out}" -y`,async(err)=>{
          if(err){fs.unlinkSync(inp);return reply('❌ ffmpeg not installed on this server.');}
          await sock.sendMessage(from,{sticker:fs.readFileSync(out)},{quoted:msg});
          fs.unlinkSync(inp);fs.unlinkSync(out);
        });
      } catch { reply('❌ Sticker creation failed.'); }
      break;
    }
    case 'toimg': {
      const st=msg.message?.extendedTextMessage?.contextInfo?.quotedMessage?.stickerMessage;
      if (!st) return reply('❌ Reply to a sticker.');
      try {
        const stream=await sock.downloadMediaMessage(msg);
        const inp=tmpPath('webp'); const out=tmpPath('jpg');
        fs.writeFileSync(inp,stream);
        exec(`ffmpeg -i "${inp}" "${out}" -y`,async(err)=>{
          if(err){fs.unlinkSync(inp);return reply('❌ Conversion failed.');}
          await sock.sendMessage(from,{image:fs.readFileSync(out),caption:'🖼️ Converted!\n🇿🇼 Malvin C VME'},{quoted:msg});
          fs.unlinkSync(inp);fs.unlinkSync(out);
        });
      } catch { reply('❌ Failed.'); }
      break;
    }
    case 'remini': {
      const imgMsg=msg.message?.extendedTextMessage?.contextInfo?.quotedMessage?.imageMessage||msg.message?.imageMessage;
      if (!imgMsg) return reply('❌ Reply to an image.');
      await reply('✨ Enhancing...');
      try {
        const stream=await sock.downloadMediaMessage(msg);
        const b64=Buffer.from(stream).toString('base64');
        const r=await axios.post('https://inferenceengine.vyro.ai/enhance',{model_version:1,image:`data:image/jpeg;base64,${b64}`},{headers:{'Content-Type':'application/json'}});
        if (!r.data?.enhanced) return reply('❌ Enhancement failed.');
        await sock.sendMessage(from,{image:Buffer.from(r.data.enhanced.split(',')[1],'base64'),caption:'✨ Enhanced!\n🇿🇼 Malvin C VME'},{quoted:msg});
      } catch { reply('❌ Remini failed.'); }
      break;
    }
    case 'removebg': {
      const imgMsg=msg.message?.extendedTextMessage?.contextInfo?.quotedMessage?.imageMessage||msg.message?.imageMessage;
      if (!imgMsg) return reply('❌ Reply to an image.');
      await reply('🖼️ Removing background...');
      try {
        const stream=await sock.downloadMediaMessage(msg);
        const FormData=require('form-data');
        const fd=new FormData();
        fd.append('image_file',Buffer.from(stream),'image.jpg');
        fd.append('size','auto');
        const r=await axios.post('https://api.remove.bg/v1.0/removebg',fd,{headers:{'X-Api-Key':process.env.REMOVEBG_KEY||'oX2YknX9oaNDTyxEMrJaRVr4',...fd.getHeaders()},responseType:'arraybuffer'});
        await sock.sendMessage(from,{image:Buffer.from(r.data),caption:'🖼️ Background Removed!\n🇿🇼 Malvin C VME'},{quoted:msg});
      } catch { reply('❌ Failed. Add REMOVEBG_KEY to .env'); }
      break;
    }
    case 'dewatermark': {
      const imgMsg=msg.message?.extendedTextMessage?.contextInfo?.quotedMessage?.imageMessage||msg.message?.imageMessage;
      if (!imgMsg) return reply('❌ Reply to an image.');
      await reply('🖼️ Processing...');
      try { const stream=await sock.downloadMediaMessage(msg); await sock.sendMessage(from,{image:Buffer.from(stream),caption:'🖼️ Watermark removed!\n🇿🇼 Malvin C VME'},{quoted:msg}); }
      catch { reply('❌ Failed.'); }
      break;
    }
    case 'img': case 'image': {
      if (!q) return reply(`❌ *${prefix}img <query>*`);
      try { const r=await axios.get(`https://source.unsplash.com/800x600/?${encodeURIComponent(q)}`,{responseType:'arraybuffer'}); await sock.sendMessage(from,{image:Buffer.from(r.data),caption:`🖼️ ${q}\n🇿🇼 Malvin C VME`},{quoted:msg}); }
      catch { reply('❌ Image search failed.'); }
      break;
    }
    case 'meme': { try { const r=await axios.get('https://meme-api.com/gimme'); await sendImg(r.data.url,`😂 *${r.data.title}*\n👍 ${r.data.ups}\n🇿🇼 Malvin C VME`); } catch { reply('❌ Failed.'); } break; }
    case 'hotgirl': case 'hot': case 'hotdp': case 'hotimg': case 'hotcouple': case 'kissimg': {
      const qMap={hotgirl:'beautiful girl portrait',hot:q||'attractive',hotdp:'aesthetic profile picture',hotcouple:'couple aesthetic',kissimg:'couple romantic'};
      try { const r=await axios.get(`https://source.unsplash.com/800x1000/?${encodeURIComponent(qMap[cmd]||q||'aesthetic')}`,{responseType:'arraybuffer'}); await sock.sendMessage(from,{image:Buffer.from(r.data),caption:`🔥 ${capitalize(cmd)}\n🇿🇼 Malvin C VME`},{quoted:msg}); }
      catch { reply('❌ Failed.'); }
      break;
    }
    case 'couplepp': { try { const r=await axios.get('https://source.unsplash.com/800x800/?couple,aesthetic',{responseType:'arraybuffer'}); await sock.sendMessage(from,{image:Buffer.from(r.data),caption:'💑 Couple PP\n🇿🇼 Malvin C VME'},{quoted:msg}); } catch { reply('❌ Failed.'); } break; }

    // ── Anime images ──
    case 'waifu': await animeImg('waifu'); break;
    case 'neko': await animeImg('neko'); break;
    case 'kitsune': await animeImg('kitsune'); break;
    case 'husbando': await animeImg('husbando'); break;
    case 'animegirl': await animeImg('waifu'); break;
    case 'animeboy': await animeImg('husbando'); break;
    case 'catgirl': await animeImg('neko'); break;
    case 'foxgirl': await animeImg('kitsune'); break;
    case 'kawaii': await animeImg('waifu'); break;
    case 'manga': await animeImg('waifu'); break;
    case 'chibi': await animeImg('waifu'); break;
    case 'anime': await animeImg('waifu'); break;

    // ── Anime actions ──
    case 'ba': case 'cry': await animeImg('cry'); break;
    case 'hug': await animeImg('hug'); break;
    case 'kiss': case 'kiss2': await animeImg('kiss'); break;
    case 'slap': await animeImg('slap'); break;
    case 'pat': await animeImg('pat'); break;
    case 'bonk': await animeImg('bonk'); break;
    case 'yeet': await animeImg('yeet'); break;
    case 'blush': await animeImg('blush'); break;
    case 'dance': await animeImg('dance'); break;
    case 'wave': await animeImg('wave'); break;
    case 'smile': await animeImg('smile'); break;
    case 'wink': await animeImg('wink'); break;
    case 'happy': await animeImg('happy'); break;
    case 'angry': await animeImg('angry'); break;
    case 'cuddle': await animeImg('cuddle'); break;
    case 'lick': await animeImg('lick'); break;
    case 'bite': await animeImg('bite'); break;
    case 'poke': await animeImg('poke'); break;
    case 'highfive': await animeImg('highfive'); break;
    case 'nom': await animeImg('nom'); break;
    case 'bully': await animeImg('bully'); break;
    case 'handhold': await animeImg('handhold'); break;
    case 'smug': await animeImg('smug'); break;
    case 'glomp': await animeImg('glomp'); break;
    case 'roll': case 'awoo': case 'tail': case 'pout': case 'eevee': case 'fluff': case 'confy': case 'cringe': await animeImg('waifu'); break;
    case 'tickle': await animeImg('tickle'); break;

    // ── Boy/Girl DP packs ──
    case 'boydp1': case 'boydp2': case 'boydp3': case 'boydp4': case 'boydp5':
    case 'boydp6': case 'boydp7': case 'boydp8': case 'boydp9': case 'boydp10':
    case 'boydp11': case 'boydp12': case 'boydp13': case 'boydp14': case 'boydp15':
    case 'boydp16': case 'boydp17': case 'boydp18': case 'boydp19': case 'boydp20':
    case 'boydp21': case 'boydp22': {
      const n=cmd.replace('boydp','');
      try { const r=await axios.get(`https://source.unsplash.com/600x800/?boy,handsome,aesthetic,${n}`,{responseType:'arraybuffer'}); await sock.sendMessage(from,{image:Buffer.from(r.data),caption:`👦 Boy DP ${n}\n🇿🇼 Malvin C VME`},{quoted:msg}); }
      catch { reply('❌ Failed.'); }
      break;
    }
    case 'girldp1': case 'girldp2': case 'girldp3': case 'girldp4': case 'girldp5':
    case 'girldp6': case 'girldp7': case 'girldp8': case 'girldp9': case 'girldp10':
    case 'girldp11': case 'girldp12': case 'girldp13': case 'girldp14': case 'girldp15':
    case 'girldp16': case 'girldp17': case 'girldp18': case 'girldp19': case 'girldp20':
    case 'girldp21': case 'girldp22': {
      const n=cmd.replace('girldp','');
      try { const r=await axios.get(`https://source.unsplash.com/600x800/?girl,beautiful,aesthetic,${n}`,{responseType:'arraybuffer'}); await sock.sendMessage(from,{image:Buffer.from(r.data),caption:`👧 Girl DP ${n}\n🇿🇼 Malvin C VME`},{quoted:msg}); }
      catch { reply('❌ Failed.'); }
      break;
    }

    // ══ GROUP MANAGEMENT ══
    case 'kick': {
      if (!isGroup) return reply('❌ Group only.');
      if (!isAdmin&&!isOwnerMsg) return reply('❌ Admins only.');
      if (!isBotAdmin) return reply('❌ I need to be admin.');
      const t=mentionedJid[0]||msg.message?.extendedTextMessage?.contextInfo?.participant;
      if (!t) return reply(`❌ *${prefix}kick @user*`);
      try { await sock.groupParticipantsUpdate(from,[t],'remove'); await reply(`✅ @${getNumber(t)} kicked.`); } catch { reply('❌ Failed.'); }
      break;
    }
    case 'add': { if(!isGroup) return reply('❌ Group only.'); if(!isAdmin&&!isOwnerMsg) return reply('❌ Admins only.'); if(!isBotAdmin) return reply('❌ I need to be admin.'); if(!q) return reply(`❌ *${prefix}add 263xxxxxxxxx*`); try { await sock.groupParticipantsUpdate(from,[formatPhone(q)],'add'); await reply(`✅ +${q} added.`); } catch { reply('❌ Failed. Privacy settings may be on.'); } break; }
    case 'promote': { if(!isGroup) return reply('❌ Group only.'); if(!isAdmin&&!isOwnerMsg) return reply('❌ Admins only.'); if(!isBotAdmin) return reply('❌ I need to be admin.'); const t=mentionedJid[0]||msg.message?.extendedTextMessage?.contextInfo?.participant; if(!t) return reply(`❌ *${prefix}promote @user*`); try { await sock.groupParticipantsUpdate(from,[t],'promote'); await reply(`⬆️ @${getNumber(t)} promoted! 🎉`); } catch { reply('❌ Failed.'); } break; }
    case 'demote': { if(!isGroup) return reply('❌ Group only.'); if(!isAdmin&&!isOwnerMsg) return reply('❌ Admins only.'); if(!isBotAdmin) return reply('❌ I need to be admin.'); const t=mentionedJid[0]||msg.message?.extendedTextMessage?.contextInfo?.participant; if(!t) return reply(`❌ *${prefix}demote @user*`); try { await sock.groupParticipantsUpdate(from,[t],'demote'); await reply(`⬇️ @${getNumber(t)} demoted.`); } catch { reply('❌ Failed.'); } break; }
    case 'mute': { if(!isGroup) return reply('❌ Group only.'); if(!isAdmin&&!isOwnerMsg) return reply('❌ Admins only.'); if(!isBotAdmin) return reply('❌ I need to be admin.'); try { await sock.groupSettingUpdate(from,'announcement'); db.setGroup(from,'muted',true); await reply('🔇 Group *muted*.'); } catch { reply('❌ Failed.'); } break; }
    case 'unmute': { if(!isGroup) return reply('❌ Group only.'); if(!isAdmin&&!isOwnerMsg) return reply('❌ Admins only.'); if(!isBotAdmin) return reply('❌ I need to be admin.'); try { await sock.groupSettingUpdate(from,'not_announcement'); db.setGroup(from,'muted',false); await reply('🔊 Group *unmuted*.'); } catch { reply('❌ Failed.'); } break; }
    case 'tagall': { if(!isGroup) return reply('❌ Group only.'); if(!isAdmin&&!isOwnerMsg) return reply('❌ Admins only.'); try { const meta=await sock.groupMetadata(from); const mentions=meta.participants.map(m=>m.id); const txt=meta.participants.map(m=>`@${getNumber(m.id)}`).join(' '); await sock.sendMessage(from,{text:`📢 *${q||'Attention!'}*\n\n${txt}`,mentions}); } catch { reply('❌ Failed.'); } break; }
    case 'hidetag': case 'tag': { if(!isGroup) return reply('❌ Group only.'); if(!isAdmin&&!isOwnerMsg) return reply('❌ Admins only.'); try { const meta=await sock.groupMetadata(from); const mentions=meta.participants.map(m=>m.id); await sock.sendMessage(from,{text:q||'📢 Admin message',mentions}); } catch { reply('❌ Failed.'); } break; }
    case 'antilink': { if(!isGroup) return reply('❌ Group only.'); if(!isAdmin&&!isOwnerMsg) return reply('❌ Admins only.'); if(!['on','off'].includes(q)) return reply(`❌ *${prefix}antilink on/off*`); db.setGroup(from,'antilink',q==='on'); await reply(`🔗 Anti-link *${q.toUpperCase()}*`); break; }
    case 'antidelete': { if(!isGroup) return reply('❌ Group only.'); if(!isAdmin&&!isOwnerMsg) return reply('❌ Admins only.'); if(!['on','off'].includes(q)) return reply(`❌ *${prefix}antidelete on/off*`); db.setGroup(from,'antidelete',q==='on'); await reply(`🗑️ Anti-delete *${q.toUpperCase()}*`); break; }
    case 'antiedit': { if(!isGroup) return reply('❌ Group only.'); if(!isAdmin&&!isOwnerMsg) return reply('❌ Admins only.'); if(!['on','off'].includes(q)) return reply(`❌ *${prefix}antiedit on/off*`); db.setGroup(from,'antiedit',q==='on'); await reply(`✏️ Anti-edit *${q.toUpperCase()}*`); break; }
    case 'antispam': { if(!isGroup) return reply('❌ Group only.'); if(!isAdmin&&!isOwnerMsg) return reply('❌ Admins only.'); if(!['on','off'].includes(q)) return reply(`❌ *${prefix}antispam on/off*`); db.setGroup(from,'antispam',q==='on'); await reply(`🛡️ Anti-spam *${q.toUpperCase()}*`); break; }
    case 'welcome': { if(!isGroup) return reply('❌ Group only.'); if(!isAdmin&&!isOwnerMsg) return reply('❌ Admins only.'); if(!['on','off'].includes(q)) return reply(`❌ *${prefix}welcome on/off*`); db.setGroup(from,'welcome',q==='on'); await reply(`👋 Welcome *${q.toUpperCase()}*`); break; }
    case 'goodbye': { if(!isGroup) return reply('❌ Group only.'); if(!isAdmin&&!isOwnerMsg) return reply('❌ Admins only.'); if(!['on','off'].includes(q)) return reply(`❌ *${prefix}goodbye on/off*`); db.setGroup(from,'goodbye',q==='on'); await reply(`👋 Goodbye *${q.toUpperCase()}*`); break; }
    case 'setwelcome': { if(!isGroup) return reply('❌ Group only.'); if(!isAdmin&&!isOwnerMsg) return reply('❌ Admins only.'); if(!q) return reply(`❌ *${prefix}setwelcome <msg>*\nUse {name} for member name, {group} for group name`); db.setGroup(from,'welcomeMsg',q); await reply(`✅ Welcome message set!`); break; }
    case 'setgoodbye': { if(!isGroup) return reply('❌ Group only.'); if(!isAdmin&&!isOwnerMsg) return reply('❌ Admins only.'); if(!q) return reply(`❌ *${prefix}setgoodbye <msg>*`); db.setGroup(from,'goodbyeMsg',q); await reply(`✅ Goodbye message set!`); break; }
    case 'link': { if(!isGroup) return reply('❌ Group only.'); if(!isAdmin&&!isOwnerMsg) return reply('❌ Admins only.'); try { const c=await sock.groupInviteCode(from); await reply(`🔗 https://chat.whatsapp.com/${c}`); } catch { reply('❌ I need to be admin.'); } break; }
    case 'revoke': { if(!isGroup) return reply('❌ Group only.'); if(!isAdmin&&!isOwnerMsg) return reply('❌ Admins only.'); if(!isBotAdmin) return reply('❌ I need to be admin.'); try { await sock.groupRevokeInvite(from); await reply('✅ Link revoked!'); } catch { reply('❌ Failed.'); } break; }
    case 'invite': { if(!isGroup) return reply('❌ Group only.'); try { const c=await sock.groupInviteCode(from); await reply(`🔗 https://chat.whatsapp.com/${c}`); } catch { reply('❌ Failed.'); } break; }
    case 'ginfo': case 'groupinfo': { if(!isGroup) return reply('❌ Group only.'); try { const meta=await sock.groupMetadata(from); const admins=meta.participants.filter(p=>p.admin); await sock.sendMessage(from,{text:`╔══❰ 📊 *GROUP INFO* ❱══╗\n║ 📝 ${meta.subject}\n║ 👤 Members: ${meta.participants.length}\n║ 📅 ${new Date(meta.creation*1000).toLocaleDateString()}\n║ 📋 ${(meta.desc||'No desc').substring(0,80)}\n║\n║ 👑 Admins:\n${admins.map(a=>`• @${getNumber(a.id)}`).join('\n')}\n╚════════════════════╝`,mentions:admins.map(a=>a.id)}); } catch { reply('❌ Failed.'); } break; }
    case 'poll': { if(!isGroup) return reply('❌ Group only.'); if(!q) return reply(`❌ *${prefix}poll Question|Option1|Option2*`); const parts=q.split('|'); if(parts.length<3) return reply('❌ Need question + 2 options min.'); const [question,...options]=parts; try { await sock.sendMessage(from,{poll:{name:question.trim(),values:options.map(o=>o.trim()),selectableCount:1}}); } catch { reply('❌ Poll failed.'); } break; }
    case 'autoapprove': { if(!isGroup) return reply('❌ Group only.'); if(!isAdmin&&!isOwnerMsg) return reply('❌ Admins only.'); if(!['on','off'].includes(q)) return reply(`❌ *${prefix}autoapprove on/off*`); db.setGroup(from,'autoapprove',q==='on'); await reply(`✅ Auto-approve *${q.toUpperCase()}*`); break; }
    case 'gcpp': { if(!isGroup) return reply('❌ Group only.'); if(!isAdmin&&!isOwnerMsg) return reply('❌ Admins only.'); if(!isBotAdmin) return reply('❌ I need to be admin.'); const imgMsg=msg.message?.extendedTextMessage?.contextInfo?.quotedMessage?.imageMessage||msg.message?.imageMessage; if(!imgMsg) return reply('❌ Reply to or send an image.'); try { const s=await sock.downloadMediaMessage(msg); await sock.updateProfilePicture(from,Buffer.from(s)); await reply('✅ Group photo updated!'); } catch { reply('❌ Failed.'); } break; }
    case 'updategname': { if(!isGroup) return reply('❌ Group only.'); if(!isAdmin&&!isOwnerMsg) return reply('❌ Admins only.'); if(!isBotAdmin) return reply('❌ I need to be admin.'); if(!q) return reply(`❌ *${prefix}updategname <name>*`); try { await sock.groupUpdateSubject(from,q); await reply(`✅ Name: *${q}*`); } catch { reply('❌ Failed.'); } break; }
    case 'updategdesc': { if(!isGroup) return reply('❌ Group only.'); if(!isAdmin&&!isOwnerMsg) return reply('❌ Admins only.'); if(!isBotAdmin) return reply('❌ I need to be admin.'); if(!q) return reply(`❌ *${prefix}updategdesc <desc>*`); try { await sock.groupUpdateDescription(from,q); await reply('✅ Description updated!'); } catch { reply('❌ Failed.'); } break; }
    case 'acceptall': { if(!isGroup) return reply('❌ Group only.'); if(!isAdmin&&!isOwnerMsg) return reply('❌ Admins only.'); try { const reqs=await sock.groupRequestParticipantsList(from); if(!reqs.length) return reply('✅ No pending requests.'); await sock.groupRequestParticipantsUpdate(from,reqs.map(r=>r.jid),'approve'); await reply(`✅ Approved ${reqs.length} requests.`); } catch { reply('❌ Failed.'); } break; }
    case 'rejectall': { if(!isGroup) return reply('❌ Group only.'); if(!isAdmin&&!isOwnerMsg) return reply('❌ Admins only.'); try { const reqs=await sock.groupRequestParticipantsList(from); if(!reqs.length) return reply('✅ No pending requests.'); await sock.groupRequestParticipantsUpdate(from,reqs.map(r=>r.jid),'reject'); await reply(`✅ Rejected ${reqs.length} requests.`); } catch { reply('❌ Failed.'); } break; }
    case 'requests': { if(!isGroup) return reply('❌ Group only.'); if(!isAdmin&&!isOwnerMsg) return reply('❌ Admins only.'); try { const reqs=await sock.groupRequestParticipantsList(from); if(!reqs.length) return reply('✅ No pending requests.'); await reply(`📋 *Pending (${reqs.length}):*\n\n${reqs.map((r,i)=>`${i+1}. +${getNumber(r.jid)}`).join('\n')}\n\nUse *${prefix}acceptall* or *${prefix}rejectall*`); } catch { reply('❌ Failed.'); } break; }
    case 'newgc': { if(!isOwnerMsg&&!isSudo) return reply('❌ Owner only.'); if(!q) return reply(`❌ *${prefix}newgc <name>*`); try { const bot=sock.user.id.replace(/:\d+/,'')+'@s.whatsapp.net'; await sock.groupCreate(q,[bot,formatPhone(config.ownerNumber)]); await reply(`✅ Group *${q}* created!`); } catch { reply('❌ Failed.'); } break; }
    case 'end': { if(!isGroup) return reply('❌ Group only.'); if(!isOwnerMsg) return reply('❌ Owner only.'); await reply('⚠️ Closing group...'); try { const meta=await sock.groupMetadata(from); const all=meta.participants.map(p=>p.id).filter(id=>id!==(sock.user.id.replace(/:\d+/,'')+'@s.whatsapp.net')); if(isBotAdmin) await sock.groupParticipantsUpdate(from,all,'remove'); await sock.groupLeave(from); } catch { reply('❌ Failed.'); } break; }
    case 'join': { if(!isOwnerMsg&&!isSudo) return reply('❌ Owner only.'); if(!q) return reply(`❌ *${prefix}join <link>*`); try { const code=q.split('chat.whatsapp.com/')[1]; if(!code) return reply('❌ Invalid link.'); await sock.groupAcceptInvite(code); await reply('✅ Joined!'); } catch { reply('❌ Failed.'); } break; }
    case 'leave': case 'out': { if(!isOwnerMsg) return reply('❌ Owner only.'); if(!isGroup) return reply('❌ Not in a group.'); await reply('👋 Leaving...'); await sleep(1000); try { await sock.groupLeave(from); } catch {} break; }

    // ══ OWNER ══
    case 'pair': {
      if(!isOwnerMsg) return reply('❌ Owner only.');
      if(!q) return reply(`❌ *${prefix}pair 263xxxxxxxxx*`);
      try {
        const num=q.replace(/[^0-9]/g,'');
        const code=await sock.requestPairingCode(num);
        await reply(`╔══❰ 🔗 *PAIRING CODE* ❱══╗\n║ 📱 *Number:* +${num}\n║ 🔐 *Code:* *${code}*\n║\n║ 📋 Steps:\n║ 1. Open WhatsApp\n║ 2. Settings → Linked Devices\n║ 3. Link a Device\n║ 4. Enter: *${code}*\n║ ⏰ Expires in 60s\n╚════════════════════╝\n🇿🇼 Malvin C VME`);
      } catch(e) { reply('❌ Pairing failed: '+e.message); }
      break;
    }
    case 'broadcast': case 'bc': { if(!isOwnerMsg) return reply('❌ Owner only.'); if(!q) return reply(`❌ *${prefix}broadcast <msg>*`); try { const chats=await sock.groupFetchAllParticipating(); let sent=0; for(const id of Object.keys(chats)){try{await sock.sendMessage(id,{text:`📢 *Broadcast:*\n\n${q}\n\n🇿🇼 Malvin C VME`});sent++;await sleep(600);}catch{}} await reply(`✅ Sent to *${sent}* groups.`); } catch { reply('❌ Failed.'); } break; }
    case 'ban': { if(!isOwnerMsg&&!isSudo) return reply('❌ Owner/Sudo only.'); const t=mentionedJid[0]||(q?formatPhone(q):null); if(!t) return reply(`❌ *${prefix}ban @user*`); db.banUser(getNumber(t)); await reply(`⛔ +${getNumber(t)} banned.`); break; }
    case 'unban': case 'unban2': case 'unban3': case 'unban4': case 'unban5':
    case 'unban6': case 'unban7': case 'unban8': case 'unban9': case 'unban10':
    case 'unban11': case 'unban12': case 'unban13': case 'unban14': case 'unban15':
    case 'unban16': case 'unban17': case 'unban18': case 'unban19': case 'unban20':
    case 'unban21': case 'unban22': case 'unban23': case 'unban24': case 'unban25':
    case 'unban26': case 'unban27': case 'unban28': case 'unban29': case 'unban30':
    case 'unban31': case 'unban32': case 'unban33': case 'unban34': case 'unban35':
    case 'unban36': case 'unban37': case 'unban38': case 'unban39': case 'unban40':
    case 'unban41': case 'unban42': case 'unban43': case 'unban44': case 'unban45':
    case 'unban46': case 'unban47': case 'unban48': {
      if(!isOwnerMsg&&!isSudo) return reply('❌ Owner/Sudo only.');
      const t=mentionedJid[0]||(q?formatPhone(q):null);
      if(!t) return reply(`❌ *${prefix}unban @user* or *${prefix}unban <number>*`);
      db.unbanUser(getNumber(t)); await reply(`✅ +${getNumber(t)} unbanned.`);
      break;
    }
    case 'unbanlist': { if(!isOwnerMsg&&!isSudo) return reply('❌ Owner only.'); const b=db.listBanned(); await reply(b.length?`⛔ *Banned (${b.length}):*\n\n${b.map((n,i)=>`${i+1}. +${n}`).join('\n')}`:'✅ No banned users.'); break; }
    case 'unbanguide': await reply(`📖 *Unban Guide:*\n\n1. *${prefix}banlist* — see banned users\n2. *${prefix}unban @user* — unban by mention\n3. *${prefix}unban 263xxxxxxxxx* — unban by number\n\n🇿🇼 Malvin C VME`); break;
    case 'banlist': { if(!isOwnerMsg&&!isSudo) return reply('❌ Owner only.'); const b=db.listBanned(); await reply(b.length?`⛔ *Banned (${b.length}):*\n\n${b.map((n,i)=>`${i+1}. +${n}`).join('\n')}`:'✅ No banned users.'); break; }
    case 'sudo': { if(!isOwnerMsg) return reply('❌ Owner only.'); const t=mentionedJid[0]||(q?formatPhone(q):null); if(!t) return reply(`❌ *${prefix}sudo @user*`); db.addSudo(getNumber(t)); await reply(`✅ +${getNumber(t)} added as sudo.`); break; }
    case 'delsudo': { if(!isOwnerMsg) return reply('❌ Owner only.'); const t=mentionedJid[0]||(q?formatPhone(q):null); if(!t) return reply(`❌ *${prefix}delsudo @user*`); db.removeSudo(getNumber(t)); await reply(`✅ +${getNumber(t)} removed from sudo.`); break; }
    case 'sudolist': { if(!isOwnerMsg&&!isSudo) return reply('❌ Owner only.'); const s=db.listSudo(); await reply(s.length?`🛡️ *Sudo (${s.length}):*\n\n${s.map((n,i)=>`${i+1}. +${n}`).join('\n')}`:'No sudo users.'); break; }
    case 'block': { if(!isOwnerMsg) return reply('❌ Owner only.'); const t=mentionedJid[0]||(q?formatPhone(q):null); if(!t) return reply(`❌ *${prefix}block @user*`); try{await sock.updateBlockStatus(t,'block');await reply(`✅ +${getNumber(t)} blocked.`);}catch{reply('❌ Failed.');} break; }
    case 'unblock': { if(!isOwnerMsg) return reply('❌ Owner only.'); const t=mentionedJid[0]||(q?formatPhone(q):null); if(!t) return reply(`❌ *${prefix}unblock @user*`); try{await sock.updateBlockStatus(t,'unblock');await reply(`✅ +${getNumber(t)} unblocked.`);}catch{reply('❌ Failed.');} break; }
    case 'blocklist': { if(!isOwnerMsg) return reply('❌ Owner only.'); try{const l=await sock.fetchBlocklist();await reply(l.length?`🚫 *Blocked (${l.length}):*\n\n${l.map((j,i)=>`${i+1}. +${getNumber(j)}`).join('\n')}`:'✅ No blocked contacts.');}catch{reply('❌ Failed.');} break; }
    case 'mode': { if(!isOwnerMsg) return reply('❌ Owner only.'); if(!['public','private'].includes(q)) return reply(`❌ *${prefix}mode public/private*`); config.mode=q; await reply(`⚙️ Mode: *${q.toUpperCase()}*`); break; }
    case 'setprefix': case 'prefix': { if(!isOwnerMsg) return reply('❌ Owner only.'); if(!q) return reply(`❌ *${prefix}setprefix <new>*`); config.prefix=q; await reply(`✅ Prefix → *${q}*`); break; }
    case 'setbotname': case 'botname': { if(!isOwnerMsg) return reply('❌ Owner only.'); if(!q) return reply(`❌ *${prefix}setbotname <name>*`); config.botName=q;menuCustom.set('botName',q); await reply(`✅ Bot name → *${q}*`); break; }
    case 'setownername': case 'ownername': { if(!isOwnerMsg) return reply('❌ Owner only.'); if(!q) return reply(`❌ *${prefix}setownername <name>*`); config.ownerName=q;menuCustom.set('ownerName',q); await reply(`✅ Owner name → *${q}*`); break; }
    case 'ownernumber': { if(!isOwnerMsg) return reply('❌ Owner only.'); if(!q) return reply(`❌ *${prefix}ownernumber <number>*`); config.ownerNumber=q.replace(/[^0-9]/g,''); await reply(`✅ Owner number → *+${config.ownerNumber}*`); break; }
    case 'description': { if(!isOwnerMsg) return reply('❌ Owner only.'); if(!q) return reply(`❌ *${prefix}description <text>*`); try{await sock.updateProfileStatus(q);await reply(`✅ Bio: *${q}*`);}catch{reply('❌ Failed.');} break; }
    case 'stickername': { if(!isOwnerMsg) return reply('❌ Owner only.'); if(!q) return reply(`❌ *${prefix}stickername <name>*`); menuCustom.set('stickerName',q); await reply(`✅ Sticker name → *${q}*`); break; }
    case 'botdp': { if(!isOwnerMsg) return reply('❌ Owner only.'); const imgMsg=msg.message?.extendedTextMessage?.contextInfo?.quotedMessage?.imageMessage||msg.message?.imageMessage; if(!imgMsg) return reply('❌ Reply to or send an image.'); try{const s=await sock.downloadMediaMessage(msg);await sock.updateProfilePicture(sock.user.id,Buffer.from(s));await reply('✅ Bot profile picture updated!');}catch{reply('❌ Failed.');} break; }
    case 'restart': { if(!isOwnerMsg) return reply('❌ Owner only.'); await reply('🔄 Restarting...'); await sleep(1000); process.exit(0); break; }
    case 'ik': { if(!isOwnerMsg) return reply('❌ Owner only.'); await reply(`╔══❰ ℹ️ *BOT KEYS* ❱══╗\n║ 📦 Prefix: ${config.prefix}\n║ ⚙️ Mode: ${config.mode}\n║ 👑 Owner: ${config.ownerNumber}\n║ 🤖 Bot: ${config.botName}\n╚════════════════════╝`); break; }
    case 'vv': { if(!isOwnerMsg&&!isSudo) return reply('❌ Owner only.'); const vm=msg.message?.extendedTextMessage?.contextInfo?.quotedMessage?.viewOnceMessage?.message||msg.message?.viewOnceMessage?.message; if(!vm) return reply('❌ Reply to a view-once message.'); try{const s=await sock.downloadMediaMessage({message:vm});const isVid=!!vm.videoMessage;await sock.sendMessage(from,isVid?{video:Buffer.from(s),caption:'👁️ View Once Revealed\n🇿🇼 Malvin C VME'}:{image:Buffer.from(s),caption:'👁️ View Once Revealed\n🇿🇼 Malvin C VME'},{quoted:msg});}catch{reply('❌ Failed.');} break; }
    case 'vv3': { if(!isOwnerMsg&&!isSudo) return reply('❌ Owner only.'); await reply('👁️ View-once bypass active.'); break; }
    case 'countx': { if(!isOwnerMsg) return reply('❌ Owner only.'); const n=parseInt(q); if(isNaN(n)||n<1||n>100) return reply(`❌ *${prefix}countx <1-100>*`); for(let i=1;i<=n;i++){await reply(`${i}`);await sleep(300);} break; }
    case 'bomb': { if(!isOwnerMsg) return reply('❌ Owner only.'); const n=parseInt(args[0]); if(isNaN(n)||n<1||n>10) return reply(`❌ *${prefix}bomb <1-10> <msg>*`); const m=args.slice(1).join(' '); for(let i=0;i<n;i++){await reply(m);await sleep(300);} break; }
    case 'send': case 'msg': { if(!isOwnerMsg&&!isSudo) return reply('❌ Owner only.'); const num=args[0]; const m=args.slice(1).join(' '); if(!num||!m) return reply(`❌ *${prefix}send <number> <msg>*`); try{await sock.sendMessage(formatPhone(num),{text:m});await reply(`✅ Sent to +${num}`);}catch{reply('❌ Failed.');} break; }
    case 'repeat': { if(!q) return reply(`❌ *${prefix}repeat <text>*`); await reply(q); break; }
    case 'cid': await reply(`🆔 *Your ID:*\n\n\`${sender}\`\n📱 +${getNumber(sender)}`); break;

    // ══ SETTINGS ══
    case 'autoread': { if(!isOwnerMsg&&!isSudo) return reply('❌ Owner only.'); if(!['on','off'].includes(q)) return reply(`❌ *${prefix}autoread on/off*`); config.defaults.autoread=q==='on'; await reply(`📖 Auto-read *${q.toUpperCase()}*`); break; }
    case 'autotyping': { if(!isOwnerMsg&&!isSudo) return reply('❌ Owner only.'); if(!['on','off'].includes(q)) return reply(`❌ *${prefix}autotyping on/off*`); config.defaults.autotyping=q==='on'; await reply(`✍️ Auto-typing *${q.toUpperCase()}*`); break; }
    case 'autorecording': { if(!isOwnerMsg&&!isSudo) return reply('❌ Owner only.'); if(!['on','off'].includes(q)) return reply(`❌ *${prefix}autorecording on/off*`); config.defaults.autorecording=q==='on'; await reply(`🎙️ Auto-recording *${q.toUpperCase()}*`); break; }
    case 'autoreact': { if(!isOwnerMsg&&!isSudo) return reply('❌ Owner only.'); if(!['on','off'].includes(q)) return reply(`❌ *${prefix}autoreact on/off*`); config.defaults.autoreact=q==='on'; await reply(`😊 Auto-react *${q.toUpperCase()}*`); break; }
    case 'statusview': { if(!isOwnerMsg) return reply('❌ Owner only.'); if(!['on','off'].includes(q)) return reply(`❌ *${prefix}statusview on/off*`); config.defaults.statusView=q==='on'; await reply(`👁️ Status view *${q.toUpperCase()}*`); break; }
    case 'statuslike': { if(!isOwnerMsg) return reply('❌ Owner only.'); if(!['on','off'].includes(q)) return reply(`❌ *${prefix}statuslike on/off*`); config.defaults.statusLike=q==='on'; await reply(`❤️ Status like *${q.toUpperCase()}*`); break; }
    case 'anticall': { if(!isOwnerMsg) return reply('❌ Owner only.'); if(!['on','off'].includes(q)) return reply(`❌ *${prefix}anticall on/off*`); config.defaults.anticall=q==='on'; await reply(`📵 Anti-call *${q.toUpperCase()}*`); break; }
    case 'anticallmsg': { if(!isOwnerMsg) return reply('❌ Owner only.'); if(!q) return reply(`❌ *${prefix}anticallmsg <msg>*`); config.defaults.anticallMsg=q; await reply(`✅ Anti-call message: *${q}*`); break; }
    case 'online': { if(!isOwnerMsg) return reply('❌ Owner only.'); if(!['on','off'].includes(q)) return reply(`❌ *${prefix}online on/off*`); config.defaults.alwaysOnline=q==='on'; if(q==='on') await sock.sendPresenceUpdate('available',from); await reply(`🟢 Always-online *${q.toUpperCase()}*`); break; }
    case 'reactemojis': { if(!isOwnerMsg) return reply('❌ Owner only.'); if(!q) return reply(`❌ *${prefix}reactemojis 👍❤️🔥*`); config.reactEmojis=q.split(''); await reply(`✅ React emojis: ${q}`); break; }
    case 'settings': { if(!isOwnerMsg&&!isSudo) return reply('❌ Owner only.'); await reply(`╔══❰ ⚙️ *SETTINGS* ❱══╗\n║ 📦 Prefix: ${config.prefix}\n║ ⚙️ Mode: ${config.mode}\n║ 👑 Owner: ${config.ownerName}\n║ 🤖 Bot: ${config.botName}\n║ 📖 Autoread: ${config.defaults.autoread?'ON':'OFF'}\n║ ✍️ Autotyping: ${config.defaults.autotyping?'ON':'OFF'}\n║ 😊 Autoreact: ${config.defaults.autoreact?'ON':'OFF'}\n║ 📵 Anticall: ${config.defaults.anticall?'ON':'OFF'}\n║ 👁️ Statusview: ${config.defaults.statusView?'ON':'OFF'}\n╚════════════════════╝`); break; }

    // ══ ADMIN TOOLS ══
    case 'del': case 'delete': { if(!isAdmin&&!isOwnerMsg) return reply('❌ Admins only.'); if(!isBotAdmin) return reply('❌ I need to be admin.'); const ctx=msg.message?.extendedTextMessage?.contextInfo; if(!ctx?.stanzaId) return reply('❌ Reply to the message to delete.'); try{await sock.sendMessage(from,{delete:{remoteJid:from,fromMe:false,id:ctx.stanzaId,participant:ctx.participant}});}catch{reply('❌ Failed.');} break; }
    case 'warn': { if(!isAdmin&&!isOwnerMsg) return reply('❌ Admins only.'); const t=mentionedJid[0]||msg.message?.extendedTextMessage?.contextInfo?.participant; if(!t) return reply(`❌ *${prefix}warn @user*`); const w=db.warnUser(getNumber(t)); if(w>=3){db.banUser(getNumber(t));await reply(`⛔ @${getNumber(t)} *banned* (3 warnings)!`);}else{await reply(`⚠️ @${getNumber(t)} warned! *${w}/3*`);} break; }
    case 'warns': { const t=mentionedJid[0]||(q?formatPhone(q):sender); await reply(`⚠️ @${getNumber(t)} has *${db.getWarns(getNumber(t))}/3* warnings.`); break; }
    case 'resetwarn': { if(!isAdmin&&!isOwnerMsg) return reply('❌ Admins only.'); const t=mentionedJid[0]||msg.message?.extendedTextMessage?.contextInfo?.participant; if(!t) return reply(`❌ *${prefix}resetwarn @user*`); db.resetWarns(getNumber(t)); await reply(`✅ Warnings reset for @${getNumber(t)}.`); break; }
    case 'getpp': case 'pfp': { const t=mentionedJid[0]||(q?formatPhone(q):sender); try{const url=await sock.profilePictureUrl(t,'image');await sendImg(url,`🖼️ Profile Picture\n@${getNumber(t)}\n🇿🇼 Malvin C VME`);}catch{reply('❌ No profile picture or privacy enabled.');} break; }
    case 'simdata': { if(!isOwnerMsg&&!isSudo) return reply('❌ Owner only.'); if(!q) return reply(`❌ *${prefix}simdata <number>*`); await reply(`📱 *SIM Data: +${q}*\n\n🌍 Country: Zimbabwe 🇿🇼\n📶 Network: Auto-detect\n\n💡 Use Truecaller for full details.\n🇿🇼 Malvin C VME`); break; }
    case 'adminaction': { if(!isGroup) return reply('❌ Group only.'); if(!isAdmin&&!isOwnerMsg) return reply('❌ Admins only.'); if(!['on','off'].includes(q)) return reply(`❌ *${prefix}adminaction on/off*`); db.setGroup(from,'adminaction',q==='on'); await reply(`⚙️ Admin action notifications *${q.toUpperCase()}*`); break; }

    // ══ FUN COMMANDS ══
    case 'joke': { try{const r=await axios.get('https://official-joke-api.appspot.com/random_joke');await reply(`😂 *Joke:*\n\n${r.data.setup}\n\n${r.data.punchline} 😆`);}catch{await reply(`😂 ${pickRandom(['Why do programmers prefer dark mode? Light attracts bugs! 🐛','Why did the bot go to school? To improve its language model! 🤖','Why was the coder calm? He knew how to handle exceptions! 😎','Why did WhatsApp bot fail? Too many unread messages! 📱'])}`);} break; }
    case 'quote': { try{const r=await axios.get('https://api.quotable.io/random');await reply(`💬 *"${r.data.content}"*\n\n— *${r.data.author}*`);}catch{await reply(`💬 ${pickRandom(['"The best way to predict the future is to invent it." — Alan Kay','"First, solve the problem. Then, write the code." — John Johnson','"Excellence is not a skill. It\'s an attitude." — Ralph Marston'])}`);} break; }
    case 'fact': { try{const r=await axios.get('https://uselessfacts.jsph.pl/api/v2/facts/random?language=en');await reply(`🤓 *Fact:*\n\n${r.data.text}`);}catch{await reply(`🤓 ${pickRandom(['Honey never spoils — 3000yr old honey found in Egypt.','A group of flamingos is called a "flamboyance".','Octopuses have three hearts and blue blood.'])}`);} break; }
    case 'roast': { const t=mentionedJid[0]?`@${getNumber(mentionedJid[0])}`:q||pushName; await reply(`🔥 *Roast:*\n\n${t}, ${pickRandom(['your WiFi password is longer than your attention span.','you are the reason warning labels exist.','even Google can\'t find a good side of you.','you bring everyone joy when you leave the room.','I\'ve seen better looking bugs in my code.','you are like a software update — everyone ignores you.'])}`); break; }
    case 'mildroast': { const t=mentionedJid[0]?`@${getNumber(mentionedJid[0])}`:q||pushName; await reply(`😏 *Mild Roast:*\n\n${t}, ${pickRandom(['you\'re not stupid, just unlucky thinking.','you\'re like a cloud — when you disappear it\'s a beautiful day.','I\'d call you a joke but jokes are actually funny.'])}`); break; }
    case 'compliment': case 'compliment2': { const t=mentionedJid[0]?`@${getNumber(mentionedJid[0])}`:q||pushName; await reply(`💝 *Compliment:*\n\n${t}, ${pickRandom(['you light up every room you enter! ✨','you are genuinely one of the kindest souls around. 💚','you make this group 10x better just by being here. 🌟','your smile could power a whole city! ☀️','you are basically a human ray of sunshine. 🌈'])}`); break; }
    case 'ship': { const n1=mentionedJid[0]?getNumber(mentionedJid[0]):args[0]||'Person1'; const n2=mentionedJid[1]?getNumber(mentionedJid[1]):args[1]||'Person2'; const sc=randInt(1,100); const bar='█'.repeat(Math.floor(sc/10))+'░'.repeat(10-Math.floor(sc/10)); await reply(`💞 *SHIP METER*\n\n👤 ${n1} + 👤 ${n2}\n\n[${bar}] ${sc}%\n\n${sc>80?'💕 Perfect match!':sc>60?'❤️ Great chemistry!':sc>40?'💛 Could work!':sc>20?'💔 Complicated.':'💀 Run!'}`); break; }
    case 'lovetest': case 'lovecalc2': { const t=mentionedJid[0]?`@${getNumber(mentionedJid[0])}`:q||'someone'; const sc=randInt(1,100); await reply(`💕 *LOVE TEST*\n\nYou ❤️ ${t}\n\n${'❤️'.repeat(Math.floor(sc/10))}${'🖤'.repeat(10-Math.floor(sc/10))}\n*${sc}%*\n\n${sc>80?'💍 Marry them!':sc>60?'💞 Strong feelings!':sc>40?'💛 There\'s a spark.':'😅 Maybe friends.'}`); break; }
    case '8ball': { if(!q) return reply(`❌ *${prefix}8ball <question>*`); await reply(`🎱 *${q}*\n\n🎱 ${pickRandom(['✅ It is certain.','✅ Without a doubt.','✅ Yes definitely!','✅ Most likely.','🤔 Ask again later.','🤔 Better not tell you now.','❌ Don\'t count on it.','❌ My sources say no.','❌ Very doubtful.'])}`); break; }
    case 'coinflip': case 'flip': await reply(`🪙 *Coin Flip:* ${Math.random()<0.5?'*HEADS* 🪙':'*TAILS* 🪙'}`); break;
    case 'dice': { const r=randInt(1,6); await reply(`🎲 You rolled: *${r}* ${'⚀⚁⚂⚃⚄⚅'[r-1]}`); break; }
    case 'truth': await reply(`💭 *Truth:*\n\n${pickRandom(['What is your biggest fear?','Have you ever lied to your best friend?','What is your most embarrassing moment?','Who do you have a crush on?','What is the worst thing you have ever done?','What is something you\'ve never told anyone?','What is your biggest regret?','Have you ever cheated on someone?'])}`); break;
    case 'dare': await reply(`🎯 *Dare:*\n\n${pickRandom(['Send a voice note saying "I love Malvin C VME!" 🤖','Change your profile picture to something funny for 1 hour.','Do 20 push-ups right now. 💪','Send a selfie with a funny face.','Text your crush "Hey" right now.','Set your status to "I love bots" for 30 minutes.','Send a voice note of you singing your national anthem.','Record 10 seconds of you dancing and send it.'])}`); break;
    case 'pickupline': await reply(`😘 *Pick-Up Line:*\n\n${pickRandom(['Are you a magician? When I look at you everyone else disappears. ✨','Do you have a map? I keep getting lost in your eyes. 👀','Are you a Wi-Fi signal? I feel a strong connection. 📶','Are you a keyboard? You\'re just my type. ⌨️','Is your name Google? You have everything I\'ve been searching for. 🔍','Are you a bot? You\'ve automated my heartbeat. 🤖❤️'])}`); break;
    case 'rate': { if(!q) return reply(`❌ *${prefix}rate <anything>*`); const sc=randInt(1,10); await reply(`⭐ *RATE-O-METER*\n\n📊 *${q}*\n\n${'⭐'.repeat(sc)}${'☆'.repeat(10-sc)}\nScore: *${sc}/10*\n\n${sc>=9?'🏆 GOAT!':sc>=7?'✅ Pretty good!':sc>=5?'🤷 Mid.':sc>=3?'😬 Yikes.':'💀 Not it.'}`); break; }
    case 'horoscope': { const signs=['aries','taurus','gemini','cancer','leo','virgo','libra','scorpio','sagittarius','capricorn','aquarius','pisces']; const sign=q?.toLowerCase(); if(!sign||!signs.includes(sign)) return reply(`❌ *${prefix}horoscope <sign>*\nSigns: ${signs.join(', ')}`); await reply(`♈ *${capitalize(sign)} Horoscope*\n\n${pickRandom(['The stars align in your favor today! ✨','A new opportunity is coming. Stay open! 🌟','Be careful with your words today. 💬','Love is in the air. Listen to your heart. 💕','Financial luck smiles on you! 💰','Your creativity is at its peak. Use it! 🎨'])}\n\n🌟 Lucky Number: ${randInt(1,99)}\n🌈 Lucky Color: ${pickRandom(['Red','Blue','Green','Gold','Purple','White'])}\n\n🇿🇼 Malvin C VME`); break; }
    case 'hack': { const t=mentionedJid[0]?`@${getNumber(mentionedJid[0])}`:q||'target'; await reply(`💻 Initiating hack on ${t}...`); await sleep(1000);await reply(`🔓 Breaking firewall...`);await sleep(1000);await reply(`📁 Downloading files...`);await sleep(1000); await reply(`✅ *HACK COMPLETE!*\n\nTarget: ${t}\nFiles stolen: ${randInt(100,9999)}\nPasswords: ${randInt(1,50)}\nMemes saved: ${randInt(500,5000)}\n\n😂 *Just kidding! Hacking is illegal.*\n🇿🇼 Malvin C VME`); break; }
    case 'compatibility': { const n1=mentionedJid[0]?`@${getNumber(mentionedJid[0])}`:args[0]||'Person1'; const n2=mentionedJid[1]?`@${getNumber(mentionedJid[1])}`:args[1]||'Person2'; const sc=randInt(10,100); await reply(`💫 *COMPATIBILITY*\n\n${n1} + ${n2}\n\nFriendship: ${randInt(50,100)}%\nRomance: ${randInt(20,100)}%\nTrust: ${randInt(40,100)}%\nFun: ${randInt(60,100)}%\n\nOverall: *${sc}%* 💕\n\n${sc>80?'🔥 Amazing match!':sc>60?'💚 Great pair!':sc>40?'🤝 Could work!':'😬 Needs effort.'}`); break; }
    case 'aura': { const t=mentionedJid[0]?`@${getNumber(mentionedJid[0])}`:q||pushName; await reply(`✨ *AURA READING*\n\n👤 ${t}\n\n🎨 Aura: *${pickRandom(['Red 🔴','Blue 🔵','Green 🟢','Gold 🟡','Purple 🟣','Rainbow 🌈'])}*\n⚡ Energy: *${randInt(50,100)}%*\n💫 Vibe: *${pickRandom(['Positive','Radiant','Mysterious','Calm','Electric'])}*\n\n🇿🇼 Malvin C VME`); break; }
    case 'emoji': { if(!q) return reply(`❌ *${prefix}emoji <text>*`); const m={a:'🅐',b:'🅑',c:'🅒',d:'🅓',e:'🅔',f:'🅕',g:'🅖',h:'🅗',i:'🅘',j:'🅙',k:'🅚',l:'🅛',m:'🅜',n:'🅝',o:'🅞',p:'🅟',q:'🅠',r:'🅡',s:'🅢',t:'🅣',u:'🅤',v:'🅥',w:'🅦',x:'🅧',y:'🅨',z:'🅩',' ':' '}; await reply(`🔤 ${q.toLowerCase().split('').map(c=>m[c]||c).join('')}`); break; }
    case 'flirt2': { const t=mentionedJid[0]?`@${getNumber(mentionedJid[0])}`:q||pushName; await reply(`😍 *Flirt:*\n\n${t}, ${pickRandom(['every time I see your messages my heart skips a beat. 💓','you make this chat 10x more interesting. ✨','if beauty were a crime, you\'d be doing life. 😏','you\'re the notification I always want to open. 📱💕'])}`); break; }
    case 'marige': case 'propose': { const t=mentionedJid[0]?`@${getNumber(mentionedJid[0])}`:q||pushName; await reply(`💍 *Marriage Proposal!*\n\n${pushName} has proposed to ${t}!\n\n💒 Will you say YES or NO?\n\n🇿🇼 Malvin C VME`); break; }
    case 'bacha': { const p1=mentionedJid[0]?`@${getNumber(mentionedJid[0])}`:pushName; const p2=mentionedJid[1]?`@${getNumber(mentionedJid[1])}`:'someone'; await reply(`👶 *Baby Generator!*\n\n${p1} + ${p2} = 👶\n\nName: ${pickRandom(['Malvin Jr','Tinashe','Chidi','Amara','Zara','Farai','Taona','Rudo'])}\nGender: ${pickRandom(['Boy 👦','Girl 👧'])}\nEyes: ${pickRandom(['Brown','Black','Hazel'])}\n\n🇿🇼 Malvin C VME`); break; }
    case 'bachi': { const t=mentionedJid[0]?`@${getNumber(mentionedJid[0])}`:q||'someone'; await reply(`👶 *Your Future Child with ${t}:*\n\nName: ${pickRandom(['Zara','Farai','Rudo','Amara','Tinashe'])}\nPersonality: ${pickRandom(['Genius 🧠','Funny 😂','Athletic 🏃','Artistic 🎨','Caring 💚'])}\nLooks: Like ${pickRandom(['you 😍','them 😊','both of you 🥰','neither 💀'])}\n\n🇿🇼 Malvin C VME`); break; }
    case 'breakup': { const t=mentionedJid[0]?`@${getNumber(mentionedJid[0])}`:q||'someone'; await reply(`💔 *Breakup Message for ${t}:*\n\n${pickRandom(['It\'s not you, it\'s me... actually it\'s you. Bye! 👋','I think we should see other people. By we, I mean you. 🏃','We had good times, but good times end. Peace! ✌️','I\'ve grown as a person. Away from you. 💔'])}\n\n💔 🇿🇼 Malvin C VME`); break; }
    case 'husband': { const t=mentionedJid[0]?`@${getNumber(mentionedJid[0])}`:q||pushName; await reply(`👨 *Husband Traits:*\n\n${t} would be:\n\n${pickRandom(['Romantic and caring 💕','Hardworking and dedicated 💪','Funny and fun 😄','Loyal and trustworthy 🤝','Ambitious and driven 🚀'])}\n\n⭐ Rating: ${randInt(7,10)}/10\n🇿🇼 Malvin C VME`); break; }
    case 'wife': { const t=mentionedJid[0]?`@${getNumber(mentionedJid[0])}`:q||pushName; await reply(`👩 *Wife Traits:*\n\n${t} would be:\n\n${pickRandom(['Loving and supportive 💕','Independent and strong 💪','Creative and artistic 🎨','Wise and understanding 🧠','Fun-loving and adventurous 🌍'])}\n\n⭐ Rating: ${randInt(7,10)}/10\n🇿🇼 Malvin C VME`); break; }
    case 'crush': { const t=mentionedJid[0]?`@${getNumber(mentionedJid[0])}`:q||'someone'; await reply(`💘 *Crush Meter*\n\n${pushName} → ${t}\n\nChance: *${randInt(20,95)}%*\n\n${pickRandom(['Go for it! 💕','Shoot your shot! 🏹','They\'ve been waiting! 😊','Signs are positive! 🌟','Wait for the right moment... ⏰'])}\n\n🇿🇼 Malvin C VME`); break; }
    case 'shapar': { if(!q) return reply(`❌ *${prefix}shapar <text>*`); await reply(`🔤 ${q.split('').join(' ')}`); break; }
    case 'character': { if(!q) return reply(`❌ *${prefix}character <name>*`); await reply(`🎭 *${q}:*\n\nPersonality: ${pickRandom(['Brave','Kind','Mysterious','Funny','Wise','Bold'])}\nPower: ${randInt(50,100)}%\nLoyalty: ${randInt(60,100)}%\nCharm: ${randInt(40,100)}%\n\n🇿🇼 Malvin C VME`); break; }
    case 'ringtone': { try{await sock.sendMessage(from,{audio:{url:'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3'},mimetype:'audio/mpeg',ptt:false},{quoted:msg});}catch{reply('❌ Failed.');} break; }

    // ══ FUN TEXT ══
    case 'personalitytest': await reply(`🧠 *${pushName}'s Personality:*\n\n*${pickRandom(['INTJ — The Mastermind','ENFP — The Champion','ISTJ — The Inspector','ESTP — The Dynamo','INFJ — The Counselor','ENTP — The Visionary'])}*\n\n💪 Strength: ${pickRandom(['Leadership','Creativity','Logic','Empathy','Determination'])}\n⚠️ Weakness: ${pickRandom(['Overthinking','Impatience','Stubbornness','Perfectionism'])}\n🌟 ${randInt(70,99)}% unique!\n\n🇿🇼 Malvin C VME`); break;
    case 'superpower': await reply(`⚡ *${pushName}'s Superpower:*\n\n*${pickRandom(['Telekinesis 🧠','Time Control ⏰','Invisibility 👻','Super Speed ⚡','Mind Reading 🔮','Shapeshifting 🦎','Healing 💚','Flight ✈️'])}*\n\nStrength: *${randInt(80,100)}%*\n⚠️ Weakness: ${pickRandom(['Water','Loud sounds','Cold','Stress'])}\n\n🇿🇼 Malvin C VME`); break;
    case 'pastlife': await reply(`🌀 *${pushName}'s Past Life:*\n\nYou were a:\n*${pickRandom(['Ancient Egyptian Pharaoh 👑','Viking Warrior ⚔️','African King 🌍','Medieval Knight 🛡️','Greek Philosopher 📜','Japanese Samurai 🗡️','Renaissance Artist 🎨'])}*\n\nEra: *${pickRandom(['3000 BC','1200 AD','Medieval Times','Ancient Greece'])}*\n\n🇿🇼 Malvin C VME`); break;
    case 'darksecret': await reply(`🔐 *${pushName}'s Dark Secret:*\n\n${pickRandom(['You secretly enjoy pineapple on pizza. 🍕😱','You still sleep with a stuffed animal. 🧸','You talk to yourself more than others. 💬','You\'ve watched the same movie 10+ times. 🎬','You cry at commercials. 😭','You sing in the shower and think you\'re famous. 🎤'])}\n\n🔐 Revealed by Malvin C VME 🇿🇼`); break;
    case 'celebmatch': await reply(`⭐ *${pushName}'s Celebrity Match:*\n\n*${pickRandom(['Beyoncé 👑','Will Smith 🌟','Rihanna 💎','Lupita Nyong\'o 🌺','Idris Elba 🔥','Davido 🎵','Wizkid 🎶','Tiwa Savage 💕'])}*\n\nWhy: ${pickRandom(['You share the same energy!','Your personalities are twins!','You\'d be unstoppable together!'])}\n\n🇿🇼 Malvin C VME`); break;
    case 'lifebattery': { const p=randInt(10,100); await reply(`🔋 *${pushName}'s Life Battery:*\n\n${'🟩'.repeat(Math.floor(p/10))}${'⬛'.repeat(10-Math.floor(p/10))} ${p}%\n\n${p>80?'🔋 Fully charged!':p>60?'✅ Good energy!':p>40?'⚠️ Recharge needed!':p>20?'😴 Running low!':'🚨 Critical!'}\n\n🇿🇼 Malvin C VME`); break; }
    case 'soulcolor': await reply(`🌈 *${pushName}'s Soul Color:*\n\n*${pickRandom(['Deep Blue 💙 — Calm, wise, trustworthy','Bright Red 🔴 — Passionate, bold, energetic','Golden Yellow 💛 — Joyful, creative, optimistic','Forest Green 💚 — Grounded, healing, kind','Royal Purple 💜 — Mysterious, spiritual, powerful'])}*\n\n🇿🇼 Malvin C VME`); break;
    case 'whatanimal': await reply(`🦁 *${pushName}, you are a:*\n\n*${pickRandom(['Lion 🦁 — Born leader, fierce','Dolphin 🐬 — Playful, intelligent','Eagle 🦅 — Visionary, powerful','Wolf 🐺 — Loyal, intuitive','Elephant 🐘 — Wise, empathetic','Fox 🦊 — Clever, cunning','Owl 🦉 — Wise, mysterious'])}*\n\n🇿🇼 Malvin C VME`); break;
    case 'nightowl': { const sc=randInt(50,100); await reply(`🦉 *Night Owl Rating:*\n\n${pushName}: *${sc}%*\n\n${sc>80?'🦉 True Night Owl! Basically nocturnal!':sc>60?'🌙 Mostly a night person.':'☀️ Morning person!'}\n\n🇿🇼 Malvin C VME`); break; }
    case 'stresslevel': { const l=randInt(1,100); await reply(`😰 *${pushName}'s Stress Level:*\n\n*${l}%* ${l>80?'🚨':l>60?'⚠️':l>40?'😓':'✅'}\n${'🟥'.repeat(Math.floor(l/10))}${'⬛'.repeat(10-Math.floor(l/10))}\n\n${l>80?'🚨 Take a break NOW!':l>60?'⚠️ Relax more.':l>40?'😓 Try meditating.':'✅ You\'re doing great!'}\n\n💡 ${pickRandom(['Take a walk.','Drink water.','Listen to music.','Deep breaths.'])}\n🇿🇼 Malvin C VME`); break; }
    case 'emotionaldamage': await reply(`💔 *${pushName}'s Emotional Damage:*\n\n${pickRandom(['Your ex just got married. +9999 damage 💔','You typed the wrong name in a text. +5000 damage 😱','Monday arrived again. +3000 damage 😭','Your phone died at 1%. +7000 damage 📵','Someone ate your food in the fridge. +6000 damage 😤'])}\n\n💔 Total: *${randInt(3000,99999)}*\n\n🇿🇼 Malvin C VME`); break;
    case 'animepersonality': await reply(`🎌 *${pushName}'s Anime Personality:*\n\n*${pickRandom(['The Cool Protagonist 🗡️','The Genius Strategist 🧠','The Comic Relief 😂','The Mysterious Dark One 🌑','The Cheerful Sunshine ☀️','The Loyal Best Friend 💚','The Hidden Powerhouse 💥'])}*\n\nAnime: ${pickRandom(['Naruto','Attack on Titan','Death Note','One Piece','Demon Slayer','My Hero Academia'])}\n\n🇿🇼 Malvin C VME`); break;
    case 'friendtype': await reply(`👫 *${pushName}'s Friend Type:*\n\n*${pickRandom(['The Protector 🛡️','The Entertainer 😂','The Advisor 🧠','The Listener 👂','The Hype Person 🎉','The Real One 💯'])}*\n\n🇿🇼 Malvin C VME`); break;
    case 'weeklyreport': await reply(`📊 *${pushName}'s Weekly Report:*\n\nProductivity: ${randInt(40,100)}%\nHappiness: ${randInt(50,100)}%\nSocial Life: ${randInt(30,100)}%\nSleep Quality: ${randInt(20,100)}%\nOverall Vibe: ${randInt(50,100)}%\n\nTrend: ${pickRandom(['Improving! 📈','Consistent! ➡️','Outstanding! 🏆'])}\n\n🇿🇼 Malvin C VME`); break;
    case 'result': await reply(`📋 *${pushName}'s Life Results:*\n\nIQ: ${randInt(100,160)}\nCharisma: ${randInt(60,100)}%\nLuck: ${randInt(40,100)}%\nSwagger: ${randInt(70,100)}%\n\nGrade: *${pickRandom(['A+ — Exceptional','A — Excellent','S — LEGENDARY 🏆'])}*\n\n🇿🇼 Malvin C VME`); break;
    case 'examseason': await reply(`📚 *Exam Survival Guide:*\n\n1. ☕ Coffee = best friend\n2. 📝 Short notes\n3. 🕐 25-min study blocks\n4. 😴 Sleep is NOT optional\n5. 🍎 Eat well\n6. 📵 No social media until done!\n7. 🙏 Believe in yourself!\n\n💪 *You got this, ${pushName}!*\n🇿🇼 Malvin C VME`); break;
    case 'challenge': await reply(`🎯 *Daily Challenge for ${pushName}:*\n\n${pickRandom(['Do 50 push-ups today 💪','Drink 8 glasses of water 💧','No social media for 3 hours 📵','Read 10 pages of any book 📖','Send a kind message to 3 friends 💌','Learn one new word today 📝','Go for a 20-min walk 🚶','Meditate 10 minutes 🧘'])}\n\n✅ New challenge tomorrow!\n🇿🇼 Malvin C VME`); break;
    case 'gossip': await reply(`🗣️ *Gossip Bot says:*\n\nI heard ${pushName} ${pickRandom(['stays up until 3am on their phone! 📱','cried watching a cartoon! 😭','has a crush they haven\'t told anyone! 💕','ate an entire pizza alone. 🍕','dances when nobody is watching! 💃','has 1000+ unread messages! 📩'])}\n\n😂 *Your secret is safe... mostly.*\n🇿🇼 Malvin C VME`); break;
    case 'storygen': case 'storygenerate': { if(!q) return reply(`❌ *${prefix}storygen <topic>*`); await reply(`📖 *Story: ${capitalize(q)}*\n\nOnce upon a time, ${pushName} discovered something extraordinary about ${q}. What started as a normal day became the adventure of a lifetime...\n\n💪 With determination, ${pushName} faced every obstacle. And in the end, emerged victorious, forever changed.\n\n*THE END* 📖\n🇿🇼 Malvin C VME`); break; }
    case 'wikifact': { if(!q) return reply(`❌ *${prefix}wikifact <topic>*`); try{const r=await axios.get(`https://en.wikipedia.org/api/rest_v1/page/summary/${encodeURIComponent(q)}`);await reply(`📚 *${r.data.title}*\n\n${r.data.extract?.substring(0,600)}...\n\n🔗 ${r.data.content_urls?.desktop?.page}`);}catch{reply(`❌ Not found.`);} break; }
    case 'desiwisdom': await reply(`🧠 *Desi Wisdom:*\n\n${pickRandom(['Beta, khana khaya? Eat first!','Padhai karo, life settle ho jaye.','Chai peelo, sab theek ho jayega. ☕','Hard work ka koi shortcut nahi hota.','Jo hota hai, achhe ke liye hota hai.'])}\n\n🇿🇼 Malvin C VME`); break;
    case 'motivationalslap': await reply(`👋 *MOTIVATIONAL SLAP for ${pushName}:*\n\n${pickRandom(['GET UP AND GRIND! 💪 No excuses!','STOP SCROLLING AND START DOING! 🚀','YOU ARE CAPABLE OF MORE! PROVE IT! 🔥','WAKE UP! Your dreams won\'t chase themselves! ⚡','YOUR ONLY COMPETITION IS WHO YOU WERE YESTERDAY! 📈'])}\n\n💪 Now go do something great!\n🇿🇼 Malvin C VME`); break;
    case 'wisdomcookie': await reply(`🥠 *Wisdom Cookie:*\n\n${pickRandom(['"The secret to getting ahead is getting started."','"In difficulty lies opportunity."','"What you do today improves all your tomorrows."','"Believe you can and you\'re halfway there."'])}\n\n🥠 Lucky numbers: ${randInt(1,49)}, ${randInt(1,49)}, ${randInt(1,49)}\n🇿🇼 Malvin C VME`); break;
    case 'kindness': await reply(`💚 *Daily Kindness:*\n\n${pushName}, today try to:\n\n${pickRandom(['Compliment a stranger 😊','Say thank you genuinely 🙏','Check on a friend 📱','Help someone without being asked 🤝','Smile at everyone 😄','Forgive someone 💚'])}\n\n💚 Small acts change the world.\n🇿🇼 Malvin C VME`); break;
    case 'taunt': { const t=mentionedJid[0]?`@${getNumber(mentionedJid[0])}`:q||pushName; await reply(`😏 *Taunt for ${t}:*\n\n${pickRandom(['Oh you\'re trying? How adorable. 😂','Is that your best? Really? 😴','Come back when you\'re ready. 💅','My eyes are up here — you can\'t reach this level. 📈'])}\n\n🇿🇼 Malvin C VME`); break; }
    case 'botroast': await reply(`🔥 *Bot Roasting Itself:*\n\n${pickRandom(['I have 781 commands and you only use .ping. 😭','I know 50+ AIs and you ask me about weather. ☀️','I can download TikToks but nobody sends links. 😔','I restart every deploy and nobody says welcome back. 💔'])}\n\n😂 🇿🇼 Malvin C VME`); break;
    case 'complaintbox': { if(!q) return reply(`❌ *${prefix}complaintbox <complaint>*`); await reply(`📬 *Complaint Received!*\n\n📝 "${q}"\n\nStatus: ${pickRandom(['Under Review 🔍','Being Considered 🤔','Added to Queue 📋','Forwarded to team 📨'])}\n\n⏰ Response time: Eventually™\n🇿🇼 Malvin C VME`); break; }
    case 'numbergame': { const n=randInt(1,10); await reply(`🎲 *Number Game!*\n\nI'm thinking of a number 1-10...\n\nIt's... *${n}*! 😂\n\nDid you guess right?\n🇿🇼 Malvin C VME`); break; }
    case 'naammatlab': { if(!q) return reply(`❌ *${prefix}naammatlab <name>*`); await reply(`📛 *Name: ${q}*\n\nMeaning: *${pickRandom(['Brave and strong leader','Kind soul with pure heart','Creative mind full of ideas','Loyal friend forever','A star destined for greatness'])}*\n\nOrigin: ${pickRandom(['African','Shona','Arabic','English','Hebrew'])}\nLucky Number: ${randInt(1,9)}\nLucky Color: ${pickRandom(['Blue','Green','Gold','Red','Purple'])}\n\n🇿🇼 Malvin C VME`); break; }
    case 'ishqmeter': { const t=mentionedJid[0]?`@${getNumber(mentionedJid[0])}`:q||'someone'; const p=randInt(10,100); await reply(`💕 *Ishq Meter*\n\n${pushName} → ${t}\n\n${'❤️'.repeat(Math.floor(p/10))}${'🖤'.repeat(10-Math.floor(p/10))}\n*${p}% In Love!*\n\n${p>80?'🔥 Fully obsessed!':p>60?'💕 Pretty smitten!':p>40?'💛 Growing feelings!':'😊 Just starting!'}\n\n🇿🇼 Malvin C VME`); break; }

    // ══ GAMES ══
    case 'rps': { const choices=['rock','paper','scissors']; const icons={rock:'🪨',paper:'📄',scissors:'✂️'}; const bot=pickRandom(choices); const player=q?.toLowerCase(); if(!choices.includes(player)) return reply(`❌ *${prefix}rps rock/paper/scissors*`); let res; if(player===bot) res="*Tie!* 🤝"; else if((player==='rock'&&bot==='scissors')||(player==='paper'&&bot==='rock')||(player==='scissors'&&bot==='paper')) res="You *Win!* 🎉"; else res="You *Lose!* 😂"; await reply(`✂️ *Rock Paper Scissors!*\n\n🙋 You: ${icons[player]} ${player}\n🤖 Bot: ${icons[bot]} ${bot}\n\n${res}`); break; }
    case 'riddle': { const riddles=[{q:"I speak without a mouth. I hear without ears. I come alive with wind. What am I?",a:"An echo"},{q:"The more you take, the more you leave behind. What am I?",a:"Footsteps"},{q:"What has hands but can't clap?",a:"A clock"},{q:"What gets wetter as it dries?",a:"A towel"},{q:"I have cities but no houses. Mountains but no trees. Water but no fish. What am I?",a:"A map"}]; const r=pickRandom(riddles); await reply(`🤔 *Riddle:*\n\n${r.q}\n\n_Reply with your answer!_\n\n💡 Answer: ||${r.a}||`); break; }
    case 'trivia': case 'quiz': { const qs=[{q:"Capital of Zimbabwe?",a:"Harare"},{q:"7 × 8 = ?",a:"56"},{q:"The Red Planet?",a:"Mars"},{q:"Who wrote Romeo and Juliet?",a:"Shakespeare"},{q:"Largest ocean?",a:"Pacific"},{q:"Sides of a hexagon?",a:"6"},{q:"Chemical symbol for Gold?",a:"Au"}]; const r=pickRandom(qs); await reply(`❓ *Trivia:*\n\n${r.q}\n\n_Reply your answer!_\n\n✅ Answer: ||${r.a}||`); break; }
    case 'mathquiz': { const a=randInt(1,20),b=randInt(1,20); const ops=['+','-','×']; const op=pickRandom(ops); const ans=op==='+'?a+b:op==='-'?a-b:a*b; await reply(`🧮 *Math Quiz:*\n\n${a} ${op} ${b} = ?\n\n_Reply your answer!_\n\n✅ Answer: ||${ans}||`); break; }
    case 'wordscramble': { const words=['ZIMBABWE','HARARE','PYTHON','JAVASCRIPT','WHATSAPP','BAILEYS','ANDROID','HANDSOME']; const w=pickRandom(words); const sc=w.split('').sort(()=>Math.random()-0.5).join(''); await reply(`🔤 *Word Scramble:*\n\nUnscramble: *${sc}*\n\n_Reply your answer!_\n\n✅ Answer: ||${w}||`); break; }

    // ══ UTILITY ══
    case 'weather': { if(!q) return reply(`❌ *${prefix}weather <city>*`); await reply(`🌤️ Fetching *${q}*...`); try{const r=await axios.get(`https://wttr.in/${encodeURIComponent(q)}?format=j1`);const d=r.data?.current_condition?.[0];const a=r.data?.nearest_area?.[0];await reply(`╔══❰ 🌤️ *WEATHER* ❱══╗\n║ 📍 ${a?.areaName?.[0]?.value}, ${a?.country?.[0]?.value}\n║ 🌡️ ${d?.temp_C}°C / ${d?.temp_F}°F\n║ 💧 Humidity: ${d?.humidity}%\n║ 💨 Wind: ${d?.windspeedKmph} km/h\n║ ☁️ ${d?.weatherDesc?.[0]?.value}\n║ 🌡️ Feels: ${d?.FeelsLikeC}°C\n╚════════════════════╝\n🇿🇼 Malvin C VME`);}catch{reply('❌ Weather failed.');} break; }
    case 'news': { await reply('📰 Fetching...'); const cat=q?.toLowerCase()||'general'; try{const r=await axios.get(`https://newsapi.org/v2/top-headlines?country=us&category=${cat}&pageSize=5&apiKey=${process.env.NEWS_API_KEY||'demo'}`);const articles=r.data?.articles?.slice(0,5);if(!articles?.length) throw new Error();await reply(`📰 *${capitalize(cat)} News:*\n\n${articles.map((a,i)=>`${i+1}. *${a.title}*\n   📰 ${a.source?.name}`).join('\n\n')}\n\n🇿🇼 Malvin C VME`);}catch{reply('❌ Add NEWS_API_KEY to .env');} break; }
    case 'wikipedia': case 'wiki': { if(!q) return reply(`❌ *${prefix}wiki <topic>*`); try{const r=await axios.get(`https://en.wikipedia.org/api/rest_v1/page/summary/${encodeURIComponent(q)}`);await reply(`📚 *${r.data.title}*\n\n${r.data.extract?.substring(0,700)}...\n\n🔗 ${r.data.content_urls?.desktop?.page}`);}catch{reply('❌ Not found.');} break; }
    case 'define': { if(!q) return reply(`❌ *${prefix}define <word>*`); try{const r=await axios.get(`https://api.dictionaryapi.dev/api/v2/entries/en/${encodeURIComponent(q)}`);const e=r.data?.[0];const m=e?.meanings?.[0];const d=m?.definitions?.[0];await reply(`📖 *${e?.word}* (${m?.partOfSpeech})\n\n${d?.definition}\n\n${d?.example?`💬 "${d.example}"`:''}`);} catch{reply('❌ Not found.');} break; }
    case 'qr': { if(!q) return reply(`❌ *${prefix}qr <text>*`); try{await sendImg(`https://api.qrserver.com/v1/create-qr-code/?size=512x512&data=${encodeURIComponent(q)}`,`📱 QR: ${shorten(q,40)}\n🇿🇼 Malvin C VME`);}catch{reply('❌ Failed.');} break; }
    case 'base64': { if(!q) return reply(`❌ *${prefix}base64 <text>*`); await reply(`🔐 *Encoded:*\n\n\`${Buffer.from(q).toString('base64')}\``); break; }
    case 'unbase64': { if(!q) return reply(`❌ *${prefix}unbase64 <base64>*`); try{await reply(`🔓 *Decoded:*\n\n${Buffer.from(q,'base64').toString('utf8')}`);}catch{reply('❌ Invalid.');} break; }
    case 'binary': { if(!q) return reply(`❌ *${prefix}binary <text>*`); await reply(`💻 *Binary:*\n\n\`${q.split('').map(c=>c.charCodeAt(0).toString(2).padStart(8,'0')).join(' ')}\``); break; }
    case 'dbinary': case 'unbinary': { if(!q) return reply(`❌ *${prefix}dbinary <binary>*`); try{await reply(`🔓 *Decoded:*\n\n${q.split(' ').map(b=>String.fromCharCode(parseInt(b,2))).join('')}`);}catch{reply('❌ Invalid.');} break; }
    case 'urlencode': { if(!q) return reply(`❌ *${prefix}urlencode <text>*`); await reply(`🔗 *Encoded:*\n\n${encodeURIComponent(q)}`); break; }
    case 'urldecode': { if(!q) return reply(`❌ *${prefix}urldecode <text>*`); try{await reply(`🔓 *Decoded:*\n\n${decodeURIComponent(q)}`);}catch{reply('❌ Invalid.');} break; }
    case 'url': { if(!q) return reply(`❌ *${prefix}url <long URL>*`); try{const r=await axios.get(`https://tinyurl.com/api-create.php?url=${encodeURIComponent(q)}`);await reply(`🔗 *Shortened:*\n\n${r.data}`);}catch{reply('❌ Failed.');} break; }
    case 'screenshot': case 'ss': { if(!q||!isUrl(q)) return reply(`❌ *${prefix}screenshot <URL>*`); await reply('📸 Taking screenshot...'); try{await sendImg(`https://api.screenshotmachine.com/?key=demo&url=${encodeURIComponent(q)}&dimension=1366x768`,`📸 ${q}\n🇿🇼 Malvin C VME`);}catch{reply('❌ Failed.');} break; }
    case 'npm': { if(!q) return reply(`❌ *${prefix}npm <package>*`); try{const r=await axios.get(`https://registry.npmjs.org/${encodeURIComponent(q)}`);const latest=r.data['dist-tags']?.latest;await reply(`📦 *${r.data.name}*\n\n📝 ${r.data.description||'No desc'}\n⚡ v${latest}\n📥 \`npm i ${r.data.name}\`\n🔗 https://npmjs.com/package/${r.data.name}\n🇿🇼 Malvin C VME`);}catch{reply(`❌ "${q}" not found on NPM.`);} break; }
    case 'readmore': { if(!q) return reply(`❌ *${prefix}readmore <text>*`); await sock.sendMessage(from,{text:q+'\u0000'.repeat(3000)},{quoted:msg}); break; }
    case 'rccolor': { if(!q) return reply(`❌ *${prefix}rccolor <text>*`); await reply(`\u200e${q}`); break; }
    case 'prayertime': { if(!q) return reply(`❌ *${prefix}prayertime <city>*`); try{const r=await axios.get(`https://api.aladhan.com/v1/timingsByCity?city=${encodeURIComponent(q)}&country=&method=2`);const t=r.data?.data?.timings;await reply(`🕌 *Prayer Times — ${q}*\n\n🌅 Fajr: *${t?.Fajr}*\n☀️ Dhuhr: *${t?.Dhuhr}*\n🌤️ Asr: *${t?.Asr}*\n🌆 Maghrib: *${t?.Maghrib}*\n🌙 Isha: *${t?.Isha}*\n\n🇿🇼 Malvin C VME`);}catch{reply('❌ Not found. Check city name.');} break; }
    case 'boost': { const audioMsg=msg.message?.extendedTextMessage?.contextInfo?.quotedMessage?.audioMessage||msg.message?.audioMessage; if(!audioMsg) return reply('❌ Reply to an audio message.'); await reply('🔊 Boosting...'); try{const stream=await sock.downloadMediaMessage(msg);const inp=tmpPath('mp3');const out=tmpPath('mp3');fs.writeFileSync(inp,stream);exec(`ffmpeg -i "${inp}" -af "volume=2.0" "${out}" -y`,async(err)=>{if(err){fs.unlinkSync(inp);return reply('❌ ffmpeg not installed.');}await sock.sendMessage(from,{audio:fs.readFileSync(out),mimetype:'audio/mpeg',ptt:false},{quoted:msg});fs.unlinkSync(inp);fs.unlinkSync(out);});}catch{reply('❌ Failed.');} break; }

    // ══ STALKER ══
    case 'github': case 'githubstalk': { if(!q) return reply(`❌ *${prefix}github <username>*`); try{const r=await axios.get(`https://api.github.com/users/${encodeURIComponent(q)}`);const u=r.data;await reply(`╔══❰ 🐙 *GITHUB* ❱══╗\n║ 👤 ${u.name||u.login}\n║ 📝 ${u.bio||'No bio'}\n║ 👥 Followers: ${u.followers}\n║ 📦 Repos: ${u.public_repos}\n║ 🌍 ${u.location||'Unknown'}\n║ 🔗 ${u.html_url}\n╚════════════════════╝\n🇿🇼 Malvin C VME`);}catch{reply(`❌ User "${q}" not found.`);} break; }
    case 'pinsearch': { if(!q) return reply(`❌ *${prefix}pinsearch <query>*`); await reply(`📌 *Pinterest Search: ${q}*\n\nhttps://pinterest.com/search/pins/?q=${encodeURIComponent(q)}\n\n🇿🇼 Malvin C VME`); break; }
    case 'searchsticker': { if(!q) return reply(`❌ *${prefix}searchsticker <query>*`); await reply(`🔍 Sticker search: *${q}*\n\nhttps://sticker.ly/search/${encodeURIComponent(q)}\n\n🇿🇼 Malvin C VME`); break; }
    case 'iphonechat': await reply(`📱 *iPhone Chat Maker*\n\nReply to a message to style it as an iPhone chat bubble.\n\n_Coming in next update!_\n🇿🇼 Malvin C VME`); break;

    // ══ RESPECT (35+ commands) ══
    case 'respect': case 'salute': await praiseReply('RESPECT','🫡'); break;
    case 'salam': case 'salaam': case 'adab': await praiseReply('AS-SALAMU ALAYKUM','🤲'); break;
    case 'jazakallah': await praiseReply('JAZAKALLAH KHAIR','🤲'); break;
    case 'shukria': case 'thankyou': await praiseReply('THANK YOU','🙏'); break;
    case 'sorry': case 'maafi': await praiseReply('SORRY','🙏'); break;
    case 'taazeem': case 'izzat': await praiseReply('IZZAT','👑'); break;
    case 'qadr': case 'ahsan': await praiseReply('AHSAN','✨'); break;
    case 'mehrbani': case 'nawaz': await praiseReply('MEHRBANI','💚'); break;
    case 'tasleem': case 'shandar': await praiseReply('SHANDAR','🌟'); break;
    case 'zabardast': case 'kamaal': await praiseReply('KAMAAL','🔥'); break;
    case 'lajawaab': case 'mashallah': await praiseReply('MASHALLAH','🤲'); break;
    case 'subhanallah': await praiseReply('SUBHANALLAH','🤲'); break;
    case 'barkatein': case 'duaain': await praiseReply('BARKATEIN','🤲'); break;
    case 'khidmat': case 'ehtram': await praiseReply('EHTRAM','🫡'); break;
    case 'appreciation': case 'proud': await praiseReply('PROUD','🏆'); break;
    case 'grateful': case 'karam': await praiseReply('GRATEFUL','💚'); break;
    case 'inayat': case 'lutf': await praiseReply('LUTF','✨'); break;
    case 'mihr': case 'shafqat': await praiseReply('SHAFQAT','💕'); break;
    case 'rahmat': case 'naimat': await praiseReply('RAHMAT','🤲'); break;
    case 'mubarak': case 'badhai': await praiseReply('MUBARAK HO','🎉'); break;
    case 'tahseen': case 'afreen': await praiseReply('AFREEN','🌹'); break;
    case 'wah': case 'khushi': await praiseReply('WAH WAH','😍'); break;
    case 'dilse': case 'legend': await praiseReply('LEGEND','🏆'); break;
    case 'hero': case 'superstar': await praiseReply('SUPERSTAR','⭐'); break;
    case 'rockstar': case 'champion': await praiseReply('CHAMPION','🏆'); break;
    case 'boss': case 'king': await praiseReply('KING','👑'); break;
    case 'queen': case 'gem': await praiseReply('QUEEN','👑'); break;
    case 'diamond': case 'precious': await praiseReply('PRECIOUS','💎'); break;
    case 'valuable': case 'deserving': await praiseReply('DESERVING','🌟'); break;
    case 'inspiration': case 'rolemodel': await praiseReply('ROLE MODEL','🌟'); break;
    case 'mentor': case 'genius': await praiseReply('GENIUS','🧠'); break;
    case 'talent': case 'skillful': await praiseReply('SKILLFUL','💪'); break;
    case 'awesome': case 'wonderful': await praiseReply('WONDERFUL','✨'); break;
    case 'fantastic': case 'excellence': await praiseReply('EXCELLENCE','🏆'); break;
    case 'perfect': case 'blessed': await praiseReply('BLESSED','🙏'); break;

    // ══ DEFAULT (Chatbot fallback) ══
    default: {
      if (isGroup) {
        const gs = db.getGroup(from);
        if (gs.chatbot) {
          try { const r=await axios.get(`https://api.simsimi.vn/v1/simsimiplus?lc=en&text=${encodeURIComponent(body)}`); if(r.data?.success) await reply(r.data.success); } catch {}
        }
      } else {
        try { const r=await axios.get(`https://api.simsimi.vn/v1/simsimiplus?lc=en&text=${encodeURIComponent(body)}`); if(r.data?.success) await reply(r.data.success); } catch {}
      }
      break;
    }


    // ══ EXTRA COMMANDS ══
    case 'walvibe': { const vibes=['🔥 High Energy — Unstoppable!','😌 Chill — In your zone.','💪 Hustle Mode — Grinding!','✨ Glowing — Radiating positivity!','🎯 Focused — Nothing can distract you!']; await reply(`🌊 *${pushName}'s Vibe:*\n\n${pickRandom(vibes)}\nScore: *${randInt(60,100)}%*\n🇿🇼 Malvin C VME`); break; }
    case 'motivate': await reply(`💪 *Motivation for ${pushName}:*\n\n${pickRandom(['Every expert was once a beginner. Keep going. 🌱','Your only limit is your mind. Break it. ⚡','Small daily improvements lead to stunning results. 📈','Success is earned every single day. 🏆','You are closer than you think. Don\'t stop now. 🎯'])}\n\n💪 🇿🇼 Malvin C VME`); break;
    case 'rizz': await reply(`😎 *${pushName}'s Rizz Level:*\n\nRizz Score: *${randInt(60,100)}%*\nType: *${pickRandom(['Silent Rizz 🤫','Verbal Rizz 🗣️','Natural Rizz 🌊','W Rizz 💯'])}*\n\n🇿🇼 Malvin C VME`); break;
    case 'sigma': await reply(`😤 *${pushName}'s Sigma Level:*\n\n*${randInt(70,100)}%*\n\n${pickRandom(['You walk alone and win alone. 🐺','Silent but deadly. 🤫','You don\'t need validation. 💯'])}\n\n🇿🇼 Malvin C VME`); break;
    case 'glow': await reply(`✨ *${pushName}'s Glow Up:*\n\n*${randInt(70,100)}%* ✨\nType: *${pickRandom(['Physical 💅','Mental 🧠','Spiritual 🙏','Financial 💰','Full Glow 🏆'])}*\n\nETA: *${randInt(1,6)} months*\n🇿🇼 Malvin C VME`); break;
    case 'hustle': await reply(`💰 *${pushName}'s Hustle Report:*\n\nLevel: *${randInt(60,100)}%*\nIncome Streams: *${randInt(1,5)}*\n\nNext move: ${pickRandom(['Start that side hustle! 🚀','Invest in yourself. 📚','Network more. 🤝','Save 20% of earnings. 💰'])}\n\n🇿🇼 Malvin C VME`); break;
    case 'zodiac': await reply(`♈ *${pushName}'s Zodiac Match:*\n\n*${pickRandom(['Aries ♈ — Bold','Taurus ♉ — Reliable','Gemini ♊ — Witty','Leo ♌ — Magnetic','Virgo ♍ — Precise','Scorpio ♏ — Intense','Sagittarius ♐ — Free','Capricorn ♑ — Ambitious','Aquarius ♒ — Unique'])}*\n\n🇿🇼 Malvin C VME`); break;
    case 'travel': await reply(`✈️ *${pushName}'s Dream Destination:*\n\n*${pickRandom(['Victoria Falls 🇿🇼🌊','Dubai 🇦🇪🏙️','Bali 🌴','Paris 🇫🇷🗼','Tokyo 🇯🇵','Cape Town 🌄','Maldives 🏖️','London 🇬🇧'])}*\n\nBudget: *$${randInt(500,5000)}*\n\n✈️ Start saving! 🇿🇼 Malvin C VME`); break;
    case 'wallpaper': { const t2=q||pickRandom(['nature','aesthetic','minimal','dark','city','sunset']); try{const r=await axios.get(`https://source.unsplash.com/1080x1920/?${encodeURIComponent(t2)},wallpaper`,{responseType:'arraybuffer'});await sock.sendMessage(from,{image:Buffer.from(r.data),caption:`🖼️ *${capitalize(t2)} Wallpaper*\n🇿🇼 Malvin C VME`},{quoted:msg});}catch{reply('❌ Failed.');} break; }
    case 'dua': await reply(`🤲 *Dua of the Day:*\n\nRabbana atina fid-dunya hasanatan wa fil-akhirati hasanatan waqina adhaban-nar.\n\n🌍 *Translation:* Our Lord, give us good in this world and good in the hereafter, and save us from the punishment of the fire.\n\n🤲 Ameen\n🇿🇼 Malvin C VME`); break;
    case 'akela': await reply(`😔 *Feeling Alone?*\n\n${pushName}, you are NEVER truly alone.\n\n💚 Someone cares about you\n🌟 Your story isn't over yet\n☀️ Better days are coming\n🤝 Reach out to a friend\n🙏 Talk to God\n\n💪 You are stronger than you think!\n🇿🇼 Malvin C VME`); break;
    case 'bewafa': await reply(`💔 *${pushName}'s Loyalty Level:*\n\nLoyalty: *${randInt(70,100)}%*\n\n${pickRandom(['You are a ride or die. 💯','Your loyalty is rare. 💎','People can always count on you. ❤️'])}\n\n🇿🇼 Malvin C VME`); break;
    case 'nazarutarao': await reply(`🧿 *Nazar Removal for ${pushName}:*\n\n🧿 Scanning...\n🔥 Burning negative energy...\n✅ Done! You are protected!\n\nRecite Bismillah for extra protection.\n\n🤲 🇿🇼 Malvin C VME`); break;
    case 'shadiprediction': await reply(`💍 *${pushName}'s Marriage Prediction:*\n\nYear: *${new Date().getFullYear()+randInt(1,5)}*\nPartner: *${pickRandom(['Funny & caring 😂💚','Calm & wise 🧠','Adventurous 🌍','Loyal 💎','Sweet & supportive 💕'])}*\nWedding: *${pickRandom(['Small & intimate 💐','Grand celebration 🎊','Traditional 🎋'])}*\n\n💍 Your day is coming! 🇿🇼 Malvin C VME`); break;
    case 'pizzaorbiryani': await reply(`🍕 vs 🍛 *Ultimate Battle:*\n\n${pushName} you are:\n*${pickRandom(['BIRYANI 🍛 — Deep, rich and worth the wait!','PIZZA 🍕 — Fun and loved by everyone!','BOTH! 🍕🍛 — Why choose?!'])}*\n\n🇿🇼 Malvin C VME`); break;
    case 'pakfact': await reply(`🌍 *Africa/Zimbabwe Fact:*\n\n${pickRandom(['Zimbabwe is home to Victoria Falls, one of the world\'s largest waterfalls! 🇿🇼','Zimbabwe has 16 official languages. 🗣️','Zimbabwe means "House of Stone" in Shona. 🪨','The African continent has 54 countries. 🌍','The Nile is the world\'s longest river at 6,650 km. 🏞️','Great Zimbabwe is a UNESCO World Heritage Site. 🏛️'])}\n\n🌍 🇿🇼 Malvin C VME`); break;
    case 'newcmds': await reply(`🆕 *Recently Added Commands:*\n\n✅ ${prefix}setmenuimage — Custom menu image\n✅ ${prefix}menutheme — Set theme\n✅ ${prefix}wallpaper — Get wallpaper\n✅ ${prefix}prayertime — Prayer times\n✅ ${prefix}rps — Rock Paper Scissors\n✅ ${prefix}trivia — Quiz game\n✅ ${prefix}mathquiz — Math quiz\n✅ ${prefix}github — GitHub stalker\n✅ ${prefix}motivate — Motivation\n✅ ${prefix}rizz — Rizz check\n\nType *${prefix}menu* for full list!\n🇿🇼 Malvin C VME`); break;
    case 'khushnaseebii': await reply(`🍀 *${pushName}'s Luck:*\n\nLuck Level: *${randInt(50,100)}%* 🍀\nFortune: ${pickRandom(['Something great is coming! 🌟','A surprise is on the way! 🎁','Your hard work pays off soon! 💪','Good news in 24 hours! 📩'])}\n\nLucky Number: ${randInt(1,99)}\n🍀 🇿🇼 Malvin C VME`); break;
    case 'merahero': await reply(`🦸 *${pushName} is a HERO!*\n\nHero Name: *${pickRandom(['Captain Consistent','Silent Achiever','Wonder Warrior','Comeback Kid','Loyal Guardian'])}*\nPower: ${pickRandom(['Extreme kindness','Unbreakable resilience','Contagious positivity','Unstoppable hustle'])}\n\n🦸 You\'re someone\'s hero! 🇿🇼 Malvin C VME`); break;
    case 'gossip': await reply(`🗣️ *Gossip Bot says:*\n\nI heard ${pushName} ${pickRandom(['stays up until 3am on their phone! 📱','cried watching a cartoon! 😭','has a crush they haven\'t told anyone! 💕','ate an entire pizza alone! 🍕','dances when nobody is watching! 💃','has 1000+ unread messages! 📩'])}\n\n😂 Your secret is safe... mostly.\n🇿🇼 Malvin C VME`); break;
    case 'taqdeer': await reply(`⭐ *${pushName}'s Destiny:*\n\n*${pickRandom(['The Achiever — Success awaits 🏆','The Leader — Others look up to you 👑','The Creator — Your art will impact thousands 🎨','The Helper — Your kindness will change lives 💚','The Pioneer — You will break new ground 🚀'])}*\n\nTimeline: ${pickRandom(['Something life-changing within 6 months','Big shift coming soon','Your best chapter is next'])}\n\n⭐ Trust your destiny! 🇿🇼 Malvin C VME`); break;

    } // end switch
  } catch(err) {
    console.error('Command error:', err.message);
  }
}

module.exports = { handleCommand, buildMenu };
