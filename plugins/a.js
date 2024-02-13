import { execSync } from 'child_process';
import fs from 'fs';

let handler = async (m, { conn, text, isROwner }) => {
    if (!text) throw `Masukkan Link Repo Github Bot Ini`;
    if (global.conn.user.jid == conn.user.jid) {
        let repoUrl = 'https://github.com/bobiza2/bobizaa/';
        let stdout = execSync(`cd /path/to/your/project && git remote set-url origin ${repoUrl} && git pull origin master`);
        if (isROwner) fs.readdirSync('plugins').map(v => global.reload('', v));
        m.reply(stdout.toString());
    }
}

handler.help = ['update'];
handler.tags = ['host'];
handler.command = /^update$/i;
handler.owner = false;
handler.mods = false;
handler.premium = false;
handler.group = false;
handler.private = false;
handler.admin = false;
handler.botAdmin = false;
handler.fail = null;
handler.exp = 0;

export default handler;
