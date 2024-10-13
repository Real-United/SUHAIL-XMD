const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/GlobalTechInfo/SUHAIL-XMD";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/bH1kbX0/a4c0b1af253197d4837ff6760d5b81c0.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "© GlobalTechInfo" 


global.devs = "" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "+254769323504";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "+254769323504";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "false" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "true"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://i.ibb.co/pXyNHj8/suhail.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "true"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923444844060,923xxxxxxxx";

global.api_smd = "https://api.kyuurzy.site/api/download/aio" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_18_28_10_13_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOCxcbiAgICAgICAgMTIyLFxuICAgICAgICA4LFxuICAgICAgICAzLFxuICAgICAgICA1OCxcbiAgICAgICAgMjM5LFxuICAgICAgICAyMyxcbiAgICAgICAgMTU3LFxuICAgICAgICAyNDUsXG4gICAgICAgIDI5LFxuICAgICAgICAyMTMsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMjE0LFxuICAgICAgICAyMDksXG4gICAgICAgIDMzLFxuICAgICAgICAxNjAsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMTQ2LFxuICAgICAgICAxMjAsXG4gICAgICAgIDQ2LFxuICAgICAgICAxODEsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMTU5LFxuICAgICAgICAxMjIsXG4gICAgICAgIDE4MixcbiAgICAgICAgMTEwLFxuICAgICAgICAxNzMsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMjQ5LFxuICAgICAgICAxMjgsXG4gICAgICAgIDEzMyxcbiAgICAgICAgOTdcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTQ3LFxuICAgICAgICA4MSxcbiAgICAgICAgMjUyLFxuICAgICAgICAxMzMsXG4gICAgICAgIDIwNixcbiAgICAgICAgMTIyLFxuICAgICAgICAyNTEsXG4gICAgICAgIDIzNixcbiAgICAgICAgMTc2LFxuICAgICAgICAxMzQsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMTIwLFxuICAgICAgICAxMSxcbiAgICAgICAgMTI3LFxuICAgICAgICA2MixcbiAgICAgICAgODEsXG4gICAgICAgIDcsXG4gICAgICAgIDQ4LFxuICAgICAgICAyNTAsXG4gICAgICAgIDY3LFxuICAgICAgICAxNzAsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMjQ2LFxuICAgICAgICAzMSxcbiAgICAgICAgODAsXG4gICAgICAgIDIwMSxcbiAgICAgICAgNDksXG4gICAgICAgIDE2NSxcbiAgICAgICAgMTg4LFxuICAgICAgICAxNTcsXG4gICAgICAgIDI0OCxcbiAgICAgICAgNzFcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE5MixcbiAgICAgICAgMTE5LFxuICAgICAgICA3NSxcbiAgICAgICAgMjA5LFxuICAgICAgICAxMjUsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMTk4LFxuICAgICAgICAxMDMsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMTUwLFxuICAgICAgICA0NCxcbiAgICAgICAgMTY5LFxuICAgICAgICAyNDQsXG4gICAgICAgIDkxLFxuICAgICAgICAyMDIsXG4gICAgICAgIDExMCxcbiAgICAgICAgMTA1LFxuICAgICAgICAzMCxcbiAgICAgICAgNjUsXG4gICAgICAgIDgsXG4gICAgICAgIDQxLFxuICAgICAgICAxMjUsXG4gICAgICAgIDkxLFxuICAgICAgICAyMTksXG4gICAgICAgIDI3LFxuICAgICAgICAyMTMsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMTYzLFxuICAgICAgICAyMDIsXG4gICAgICAgIDY2LFxuICAgICAgICAyMTAsXG4gICAgICAgIDc4XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEzNyxcbiAgICAgICAgMTY4LFxuICAgICAgICAyMDksXG4gICAgICAgIDI0MyxcbiAgICAgICAgMTg4LFxuICAgICAgICAxMTQsXG4gICAgICAgIDAsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMTY3LFxuICAgICAgICAyOCxcbiAgICAgICAgOSxcbiAgICAgICAgNjQsXG4gICAgICAgIDgxLFxuICAgICAgICAxNDMsXG4gICAgICAgIDI0MixcbiAgICAgICAgNDksXG4gICAgICAgIDIxNCxcbiAgICAgICAgMjIsXG4gICAgICAgIDI5LFxuICAgICAgICA1MyxcbiAgICAgICAgMzMsXG4gICAgICAgIDQ2LFxuICAgICAgICA3OSxcbiAgICAgICAgMTMsXG4gICAgICAgIDE5MixcbiAgICAgICAgMjM4LFxuICAgICAgICAyNixcbiAgICAgICAgMTk2LFxuICAgICAgICA5NyxcbiAgICAgICAgMjE0LFxuICAgICAgICAyNDcsXG4gICAgICAgIDEyMFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNjQsXG4gICAgICAgIDMzLFxuICAgICAgICA4OSxcbiAgICAgICAgODgsXG4gICAgICAgIDE2NixcbiAgICAgICAgMTI0LFxuICAgICAgICAyMDMsXG4gICAgICAgIDE2MixcbiAgICAgICAgMTAsXG4gICAgICAgIDYzLFxuICAgICAgICAyLFxuICAgICAgICA3NSxcbiAgICAgICAgMjEsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMjE1LFxuICAgICAgICA1MSxcbiAgICAgICAgNzksXG4gICAgICAgIDIxMyxcbiAgICAgICAgODMsXG4gICAgICAgIDU4LFxuICAgICAgICAxOSxcbiAgICAgICAgMjksXG4gICAgICAgIDEyNCxcbiAgICAgICAgMTY5LFxuICAgICAgICAyNDgsXG4gICAgICAgIDQxLFxuICAgICAgICA0NCxcbiAgICAgICAgNzcsXG4gICAgICAgIDI1MCxcbiAgICAgICAgODMsXG4gICAgICAgIDI4LFxuICAgICAgICAxMjJcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTYwLFxuICAgICAgICAxNixcbiAgICAgICAgNjksXG4gICAgICAgIDgsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMTUwLFxuICAgICAgICAyMSxcbiAgICAgICAgMTA1LFxuICAgICAgICA2MyxcbiAgICAgICAgMTIwLFxuICAgICAgICAyMjgsXG4gICAgICAgIDEwNixcbiAgICAgICAgMTM0LFxuICAgICAgICAxNjksXG4gICAgICAgIDIyOCxcbiAgICAgICAgMjQ2LFxuICAgICAgICAyNTQsXG4gICAgICAgIDE0NixcbiAgICAgICAgMTc0LFxuICAgICAgICAyMDYsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMzEsXG4gICAgICAgIDIyNCxcbiAgICAgICAgNzMsXG4gICAgICAgIDAsXG4gICAgICAgIDI0OSxcbiAgICAgICAgODcsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMjQ1LFxuICAgICAgICA1OCxcbiAgICAgICAgMTY2LFxuICAgICAgICAxMTRcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgOCxcbiAgICAgICAgICA2NixcbiAgICAgICAgICA1NCxcbiAgICAgICAgICA2MixcbiAgICAgICAgICAzNyxcbiAgICAgICAgICAyMDIsXG4gICAgICAgICAgMTAzLFxuICAgICAgICAgIDE5NyxcbiAgICAgICAgICAxODUsXG4gICAgICAgICAgMjE3LFxuICAgICAgICAgIDE3NCxcbiAgICAgICAgICAxODUsXG4gICAgICAgICAgOTYsXG4gICAgICAgICAgMTI5LFxuICAgICAgICAgIDEzMixcbiAgICAgICAgICAxMzksXG4gICAgICAgICAgMTg3LFxuICAgICAgICAgIDgyLFxuICAgICAgICAgIDkzLFxuICAgICAgICAgIDE5LFxuICAgICAgICAgIDE4NyxcbiAgICAgICAgICAxMTQsXG4gICAgICAgICAgMjIyLFxuICAgICAgICAgIDIwMSxcbiAgICAgICAgICA1NixcbiAgICAgICAgICAxNTMsXG4gICAgICAgICAgMjAzLFxuICAgICAgICAgIDE0LFxuICAgICAgICAgIDkxLFxuICAgICAgICAgIDYzLFxuICAgICAgICAgIDE4NyxcbiAgICAgICAgICAxMjFcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTE2LFxuICAgICAgICAgIDk4LFxuICAgICAgICAgIDM2LFxuICAgICAgICAgIDE3OCxcbiAgICAgICAgICAyMTksXG4gICAgICAgICAgNTksXG4gICAgICAgICAgMTYyLFxuICAgICAgICAgIDIxNyxcbiAgICAgICAgICAzMCxcbiAgICAgICAgICAxMjcsXG4gICAgICAgICAgMzQsXG4gICAgICAgICAgNjMsXG4gICAgICAgICAgMTg2LFxuICAgICAgICAgIDIxOCxcbiAgICAgICAgICAxNjIsXG4gICAgICAgICAgMjIyLFxuICAgICAgICAgIDE1LFxuICAgICAgICAgIDIxNSxcbiAgICAgICAgICAxNzIsXG4gICAgICAgICAgMTgsXG4gICAgICAgICAgMTc0LFxuICAgICAgICAgIDM3LFxuICAgICAgICAgIDExMSxcbiAgICAgICAgICAxLFxuICAgICAgICAgIDE3MixcbiAgICAgICAgICAxOTUsXG4gICAgICAgICAgMTQ0LFxuICAgICAgICAgIDEyMCxcbiAgICAgICAgICAyMjUsXG4gICAgICAgICAgMTA4LFxuICAgICAgICAgIDE3MCxcbiAgICAgICAgICA3XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjUxLFxuICAgICAgICAxMjAsXG4gICAgICAgIDU0LFxuICAgICAgICAxMjIsXG4gICAgICAgIDI0NixcbiAgICAgICAgNDIsXG4gICAgICAgIDEyMixcbiAgICAgICAgMjEzLFxuICAgICAgICAxNTEsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMTQ4LFxuICAgICAgICA5MyxcbiAgICAgICAgOTgsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMTA3LFxuICAgICAgICAyNSxcbiAgICAgICAgMjksXG4gICAgICAgIDIwOCxcbiAgICAgICAgMTY0LFxuICAgICAgICAxNDQsXG4gICAgICAgIDI0NCxcbiAgICAgICAgNzAsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMjMwLFxuICAgICAgICAxMTIsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMTk3LFxuICAgICAgICAyMixcbiAgICAgICAgMjM2LFxuICAgICAgICAxMzcsXG4gICAgICAgIDM2LFxuICAgICAgICAxMjcsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMjU0LFxuICAgICAgICA2LFxuICAgICAgICAxMzksXG4gICAgICAgIDg5LFxuICAgICAgICAyNTQsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMTkxLFxuICAgICAgICAxMzgsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMjQ1LFxuICAgICAgICAxNjgsXG4gICAgICAgIDE3NixcbiAgICAgICAgMTU4LFxuICAgICAgICAxNDAsXG4gICAgICAgIDcsXG4gICAgICAgIDk3LFxuICAgICAgICAxMjksXG4gICAgICAgIDk2LFxuICAgICAgICAyMTIsXG4gICAgICAgIDgwLFxuICAgICAgICA1OSxcbiAgICAgICAgMjUyLFxuICAgICAgICA1MyxcbiAgICAgICAgMTIsXG4gICAgICAgIDY0LFxuICAgICAgICAxMTEsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMTMyLFxuICAgICAgICAxMjQsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMTNcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDMwLFxuICBcImFkdlNlY3JldEtleVwiOiBcImc1cGRpU3NiTzQrdEFBRzNiaG1Wb3ZNdVBuL29zVDVxWHA3SFhVSGhseU09XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIlNrT3ZqVlREUlV1ZkIyaUpPZ2w2NndcIixcbiAgXCJwaG9uZUlkXCI6IFwiNWJhYzNiYTgtMWYwYy00NjZmLWE2ZGMtMGJhNmVmMDlkMDQzXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDY4LFxuICAgICAgMjAsXG4gICAgICAxNTAsXG4gICAgICAxNjIsXG4gICAgICAyMzksXG4gICAgICA2OSxcbiAgICAgIDE4OCxcbiAgICAgIDc5LFxuICAgICAgMTcxLFxuICAgICAgMTEwLFxuICAgICAgNjcsXG4gICAgICA5LFxuICAgICAgOCxcbiAgICAgIDE0NCxcbiAgICAgIDgwLFxuICAgICAgNzYsXG4gICAgICAyNixcbiAgICAgIDIxMyxcbiAgICAgIDgzLFxuICAgICAgODFcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjAsXG4gICAgICAxMTMsXG4gICAgICAxNixcbiAgICAgIDc2LFxuICAgICAgMjQ1LFxuICAgICAgMTcsXG4gICAgICA5NSxcbiAgICAgIDEyMyxcbiAgICAgIDgxLFxuICAgICAgMTY3LFxuICAgICAgMTA4LFxuICAgICAgNjYsXG4gICAgICA1MyxcbiAgICAgIDIwNCxcbiAgICAgIDE1NSxcbiAgICAgIDE2MixcbiAgICAgIDMyLFxuICAgICAgMTkwLFxuICAgICAgMjQ2LFxuICAgICAgMjIxXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIk5QNTlDOVpDXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyNTQ3NjkzMjM1MDQ6MzlAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjczNDAyODM2Nzg5NTY6MzlAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDSVRwaHVjREVMaWlzTGdHR0FRZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJXWHM1K3NjaU1EcUVrdGxkUndBVzJxNUdtZGhqVTgrVVN6Tnc3dFo0UVZJPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIkJzM3hPYXk1dms1SVRZeCs4bkNZZmh0S05ZY2JMeW9sQ0Y4RDlQby9pSVozV2JYWWoycklVd1FRRURFTERGaFpYc21XSGpHcjBtNHBpcHVseVJDTUFnPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIlgxSkZnejQrQTJHM3JCNVdoOERUL3dCTnlSbW03dkJIZVRVaW9xU25lMXdNS0lmVFVnMWgrQWxqNGJiQXhJWDE4WUhyS2FBNGJia21LZFErbVEyL0NnPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjI1NDc2OTMyMzUwNDozOUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDg5LFxuICAgICAgICAgIDEyMyxcbiAgICAgICAgICA1NyxcbiAgICAgICAgICAyNTAsXG4gICAgICAgICAgMTk5LFxuICAgICAgICAgIDM0LFxuICAgICAgICAgIDQ4LFxuICAgICAgICAgIDU4LFxuICAgICAgICAgIDEzMixcbiAgICAgICAgICAxNDYsXG4gICAgICAgICAgMjE3LFxuICAgICAgICAgIDkzLFxuICAgICAgICAgIDcxLFxuICAgICAgICAgIDAsXG4gICAgICAgICAgMjIsXG4gICAgICAgICAgMjE4LFxuICAgICAgICAgIDE3NCxcbiAgICAgICAgICA3MCxcbiAgICAgICAgICAxNTMsXG4gICAgICAgICAgMjE2LFxuICAgICAgICAgIDk5LFxuICAgICAgICAgIDgzLFxuICAgICAgICAgIDIwNyxcbiAgICAgICAgICAxNDgsXG4gICAgICAgICAgNzUsXG4gICAgICAgICAgNTEsXG4gICAgICAgICAgMTEyLFxuICAgICAgICAgIDIzOCxcbiAgICAgICAgICAyMTQsXG4gICAgICAgICAgMTIwLFxuICAgICAgICAgIDY1LFxuICAgICAgICAgIDgyXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3Mjg4NDQwOTIsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFHRDRcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUdENC5qc29uIjogIntcImtleURhdGFcIjpcIm81VmNxUEk3c2k3dFRtT3JRRGl1bmx0dVJmYkN6U2I4blhKYSs0TmtDTjg9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MTAyMTQyNDc3MSxcImN1cnJlbnRJbmRleFwiOjExLFwiZGV2aWNlSW5kZXhlc1wiOlswLDEsMTAsMTFdfSxcInRpbWVzdGFtcFwiOlwiMFwifSIKfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "MURANG'A SEAL 💛🖤",
  ownername:process.env.OWNER_NAME|| "BENCASTLE 🤍",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "yepeTQaFk7r9ymusihgXYvdN",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "0cdb1aed858329b9793413672094ce0d";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
