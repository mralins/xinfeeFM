var viewTimer = null
function viewPort (userAgent, pageWidth) {
  var oView = document.getElementById('viewport')
  if (oView) {
    document.head.removeChild(oView)
  }
  if (!pageWidth) {
    pageWidth = 750
  }
  var screenW = parseInt(window.screen.width)
  var scale = screenW / pageWidth
  if (/Android (\d+\.\d+)/.test(userAgent)) {
    var creatMeta = document.createElement('meta')
    creatMeta.name = 'viewport'
    creatMeta.id = 'viewport'
    var version = parseFloat(RegExp.$1)
    if (version > 2.3) {
      creatMeta.content = 'width=' + pageWidth + ', initial-scale = ' + scale + ',user-scalable=1, minimum-scale = ' + scale + ', maximum-scale = ' + scale + ', target-densitydpi=device-dpi'
    } else {
      creatMeta.content = '"width=' + pageWidth + ', target-densitydpi=device-dpi'
    }
    document.head.appendChild(creatMeta)
  } else {
    let creatMeta = document.createElement('meta')
    creatMeta.name = 'viewport'
    creatMeta.id = 'viewport'
    if (window.orientation === '-90' || window.orientation === '90') {
      scale = window.screen.height / pageWidth
      creatMeta.content = 'width=' + pageWidth + ', initial-scale = ' + scale + ' ,minimum-scale = ' + scale + ', maximum-scale = ' + scale + ', user-scalable=no, target-densitydpi=device-dpi'
    } else {
      creatMeta.content = 'width=' + pageWidth + ', initial-scale = ' + scale + ' ,minimum-scale = ' + scale + ', maximum-scale = ' + scale + ', user-scalable=no, target-densitydpi=device-dpi'
    }
    document.head.appendChild(creatMeta)
  }
}
viewPort(navigator.userAgent)

window.onresize = function () {
  clearTimeout(viewTimer)
  viewTimer = setTimeout(function () {
    viewPort(navigator.userAgent)
  }, 500)
}
