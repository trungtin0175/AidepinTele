require("dotenv").config();
const TelegramBot = require("node-telegram-bot-api");

// Lấy token API từ biến môi trường
const token = process.env.TELEGRAM_BOT_TOKEN;

// Tạo một bot Telegram mới sử dụng polling để lấy các cập nhật mới
const bot = new TelegramBot(token, { polling: true });

// Đặt webhook
// bot.setWebHook('https://nonv1.vercel.app/api/bot.js');

// Lắng nghe khi có người dùng nhấn vào nút /start
bot.onText(/\/start/, (msg) => {
  const chatId = msg.chat.id;

  const options = {
    reply_markup: JSON.stringify({
      inline_keyboard: [
        [{ text: "Open Aide Website", url: "https://aidepin.co/" }],
        [{ text: "Open Aide App ", url: "t.me/AidepinBot/AidepinApp" }],
      ],
    }),
  };

  bot.sendMessage(
    chatId,
    "AIDE | The first master node on telegram  ",
    options
  );
});
