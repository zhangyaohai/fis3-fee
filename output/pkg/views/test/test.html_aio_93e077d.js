define("modules/widget/header/header",function(e){"use strict";e("modules/js/app");var d=0;$(document).on("click","#header",function(){$("#msg").html("<p>测试组件 - "+ ++d+"</p>")})});
define("views/test/test.es",function(s){"use strict";var e=s("modules/js/app"),t=e.api;console.log("test scss"),console.log(t)});
define("modules/js/storage",function(e,t,n){"use strict";var r=window.JSON,o=window.localStorage,s=window.sessionStorage,i={getItem:function(e){var t=o.getItem(e);return(/^\{.*\}$/.test(t)||/^\[.*\]$/.test(t))&&(t=r.parse(t)),t},setItem:function(e,t){return typeof t==typeof{}&&(t=r.stringify(t)),o.setItem(e,t)},removeItem:function(e){return o.removeItem(e)}},m={getItem:function(e){var t=s.getItem(e);return(/^\{.*\}$/.test(t)||/^\[.*\]$/.test(t))&&(t=r.parse(t)),t},setItem:function(e,t){return typeof t==typeof{}&&(t=r.stringify(t)),s.setItem(e,t)},removeItem:function(e){return s.removeItem(e)}};n.exports={local:i,session:m}});
define("views/test/test2.es",function(t){"use strict";var e=t("modules/js/storage"),s=e.session,i=$("#pre");$(document).on("click","#set",function(){var t=$("#ipt").val();t?(s.setItem("data",{val:t}),i.html("##set "+JSON.stringify({val:t}))):i.html("input 不能为空啊 ")}),$(document).on("click","#get",function(){var t=s.getItem("data");i.html("@@get "+JSON.stringify(t))})});