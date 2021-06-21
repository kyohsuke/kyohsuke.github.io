let target = '/' + location.hostname;
if (null != location.pathname.match(target)) {
  window.location.replace(location.origin + location.pathname.replace(target, '') + location.search);
}
else {
  // Remove UTM params on load
  window.addEventListener('load', function(e){
    if ((null != location.search.match('utm_')) && window.history.replaceState) {
      let params = window.location.search.substring(1).split('&').filter(function(param) { return !param.match(/^utm_/); }).join('&');
      window.history.replaceState(null, null, location.pathname + (params ? '?' + params : ''));
    }
  });
}
