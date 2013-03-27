function encodeHTMLSource() {
    var encodeHTMLRules = { "&": "&#38;", "<": "&#60;", ">": "&#62;", '"': '&#34;', "'": '&#39;', "/": '&#47;', "\n": '<br>' },
        matchHTML = /&(?!#?\w+;)|<|>|"|'|\/\n/g;
    return function() {
        return this ? this.replace(matchHTML, function(m) {return encodeHTMLRules[m] || m;}) : this;
    };
}
String.prototype.encodeHTML = encodeHTMLSource();