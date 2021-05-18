//モーダル
const elm = document.getElementById("wrapper");
MicroModal.init({
  onShow: function () {
    scrollLock.disablePageScroll(elm);
  },
  onClose: function (modal, element, event) {
    event.preventDefault();
    event.stopPropagation();
    scrollLock.enablePageScroll(elm);
  }
});

//アドレスバー・タブバーを除いた高さの取得
function setHeight() {
  let vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty("--vh", `${vh}px`);
}
setHeight();
window.addEventListener("resize", setHeight);
