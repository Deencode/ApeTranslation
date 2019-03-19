//welcome对象
let welcome = {
    content: "The foundation of knowledge must be laid by reading.",
    icon: "./ticon.png",
    mpegUrl: "http://news.iciba.com/admin/tts/2019-03-19-day.mp3",
    //获取最新版本
    new_version: function (event) {

    },
    //检查更新
    update: function (params) {

    },
    //获取服务器数据
    getServerData: function (event) {

    }
};
//使用vue数据绑定方便
var vue = new Vue({
    el: "#welcome",
    data: {
        content: welcome.content,
        icon: welcome.icon,
        mpegUrl: welcome.mpegUrl,
    }
});
const size = 0;

window.onload = function () {

}

//创建新窗口函数
const { BrowserWindow } = require('electron').remote
const path = require('path')
const PlayBtn = document.getElementById('Play')
PlayBtn.addEventListener('click', (event) => {
    //创建audio对象为下面播放🎵音乐作准备
    const audio = new Audio()
    audio.src = welcome.mpegUrl;
    audio.play()
});

const LearningBtn = document.getElementById("Learning")
LearningBtn.addEventListener('click', (event) => {
    const modalPath = path.join('file://', __dirname, '/view/main.html')
    let win = new BrowserWindow({ width: 860, height: 620 })
    win.on('close', () => { win = null })
    win.loadURL(modalPath)
    win.show()
    this.close()
});
