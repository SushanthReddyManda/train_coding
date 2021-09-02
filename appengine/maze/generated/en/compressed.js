// Automatically generated file.  Do not edit!
'use strict';
// defined
var MAX_LEVEL = 7;


var b, h = {
    g: {}
};
h.g.D = function(a) {
    this.mF = a
};
h.g.D.prototype.toString = function() {
    return this.mF
};
h.g.D.yp = new h.g.D("animate");
h.g.D.wu = new h.g.D("circle");
h.g.D.xu = new h.g.D("clipPath");
h.g.D.Eu = new h.g.D("defs");
h.g.D.Np = new h.g.D("feComposite");
h.g.D.Xz = new h.g.D("feComponentTransfer");
h.g.D.Yz = new h.g.D("feFlood");
h.g.D.Zz = new h.g.D("feFuncA");
h.g.D.$z = new h.g.D("feGaussianBlur");
h.g.D.aA = new h.g.D("fePointLight");
h.g.D.bA = new h.g.D("feSpecularLighting");
h.g.D.Lu = new h.g.D("filter");
h.g.D.CG = new h.g.D("foreignObject");
h.g.D.Sc = new h.g.D("g");
h.g.D.Ek = new h.g.D("image");
h.g.D.Ik = new h.g.D("line");
h.g.D.Je = new h.g.D("path");
h.g.D.vv = new h.g.D("pattern");
h.g.D.XA = new h.g.D("polygon");
h.g.D.Mb = new h.g.D("rect");
h.g.D.jj = new h.g.D("svg");
h.g.D.Gv = new h.g.D("text");
h.g.D.Iv = new h.g.D("tspan");
h.g.global = function() {
    return "object" === typeof self ? self : "object" === typeof window ? window : "object" === typeof global ? global : this
}();
h.g.userAgent = {};
(function(a) {
    function c(e) {
        return -1 != d.indexOf(e.toUpperCase())
    }
    h.g.userAgent.raw = a;
    var d = h.g.userAgent.raw.toUpperCase();
    h.g.userAgent.$d = c("Trident") || c("MSIE");
    h.g.userAgent.Eh = c("Edge");
    h.g.userAgent.zA = c("JavaFX");
    h.g.userAgent.RF = (c("Chrome") || c("CriOS")) && !h.g.userAgent.Eh;
    h.g.userAgent.Nv = c("WebKit") && !h.g.userAgent.Eh;
    h.g.userAgent.lA = c("Gecko") && !h.g.userAgent.Nv && !h.g.userAgent.$d && !h.g.userAgent.Eh;
    h.g.userAgent.Sm = c("Android");
    a = h.g.global.navigator && h.g.global.navigator.maxTouchPoints;
    h.g.userAgent.Fk =
        c("iPad") || c("Macintosh") && 0 < a;
    h.g.userAgent.Xu = c("iPod");
    h.g.userAgent.Wu = c("iPhone") && !h.g.userAgent.Fk && !h.g.userAgent.Xu;
    h.g.userAgent.EA = c("Macintosh");
    h.g.userAgent.qB = h.g.userAgent.Fk || h.g.userAgent.Sm && !c("Mobile") || c("Silk");
    h.g.userAgent.wH = !h.g.userAgent.qB && (h.g.userAgent.Xu || h.g.userAgent.Wu || h.g.userAgent.Sm || c("IEMobile"))
})(h.g.global.navigator && h.g.global.navigator.userAgent || "");
h.g.j = {};
h.g.j.An = "http://www.w3.org/2000/svg";
h.g.j.Sp = "http://www.w3.org/1999/xhtml";
h.g.j.ld = "http://www.w3.org/1999/xlink";
h.g.j.sg = {
    ELEMENT_NODE: 1,
    TEXT_NODE: 3,
    COMMENT_NODE: 8,
    DOCUMENT_POSITION_CONTAINED_BY: 16
};
h.g.j.ge = null;
h.g.j.Tq = 0;
h.g.j.Nn = null;
h.g.j.J = function(a, c, d) {
    a = document.createElementNS(h.g.j.An, String(a));
    for (var e in c) a.setAttribute(e, c[e]);
    document.body.runtimeStyle && (a.runtimeStyle = a.currentStyle = a.style);
    d && d.appendChild(a);
    return a
};
h.g.j.Nb = function(a, c) {
    var d = a.getAttribute("class") || ""; - 1 == (" " + d + " ").indexOf(" " + c + " ") && (d && (d += " "), a.setAttribute("class", d + c))
};
h.g.j.kK = function(a, c) {
    c = c.split(" ");
    for (var d = 0; d < c.length; d++) h.g.j.fd(a, c[d])
};
h.g.j.fd = function(a, c) {
    var d = a.getAttribute("class");
    if (-1 != (" " + d + " ").indexOf(" " + c + " ")) {
        d = d.split(/\s+/);
        for (var e = 0; e < d.length; e++) d[e] && d[e] != c || (d.splice(e, 1), e--);
        d.length ? a.setAttribute("class", d.join(" ")) : a.removeAttribute("class")
    }
};
h.g.j.ks = function(a, c) {
    return -1 != (" " + a.getAttribute("class") + " ").indexOf(" " + c + " ")
};
h.g.j.removeNode = function(a) {
    return a && a.parentNode ? a.parentNode.removeChild(a) : null
};
h.g.j.Qj = function(a, c) {
    var d = c.nextSibling;
    c = c.parentNode;
    if (!c) throw Error("Reference node has no parent.");
    d ? c.insertBefore(a, d) : c.appendChild(a)
};
h.g.j.containsNode = function(a, c) {
    return !!(a.compareDocumentPosition(c) & h.g.j.sg.DOCUMENT_POSITION_CONTAINED_BY)
};
h.g.j.qm = function(a, c) {
    a.style.transform = c;
    a.style["-webkit-transform"] = c
};
h.g.j.zm = function() {
    h.g.j.Tq++;
    h.g.j.ge || (h.g.j.ge = Object.create(null))
};
h.g.j.Am = function() {
    h.g.j.Tq--;
    h.g.j.Tq || (h.g.j.ge = null)
};
h.g.j.QJ = function(a) {
    var c = a.textContent + "\n" + a.className.baseVal,
        d;
    if (h.g.j.ge && (d = h.g.j.ge[c])) return d;
    try {
        d = h.g.userAgent.$d || h.g.userAgent.Eh ? a.getBBox().width : a.getComputedTextLength()
    } catch (e) {
        return 8 * a.textContent.length
    }
    h.g.j.ge && (h.g.j.ge[c] = d);
    return d
};
h.g.j.Yr = function(a, c, d, e) {
    return h.g.j.fD(a, c + "pt", d, e)
};
h.g.j.fD = function(a, c, d, e) {
    var f = a.textContent;
    a = f + "\n" + a.className.baseVal;
    var g;
    if (h.g.j.ge && (g = h.g.j.ge[a])) return g;
    h.g.j.Nn || (g = document.createElement("canvas"), g.className = "blocklyComputeCanvas", document.body.appendChild(g), h.g.j.Nn = g.getContext("2d"));
    h.g.j.Nn.font = d + " " + c + " " + e;
    g = h.g.j.Nn.measureText(f).width;
    h.g.j.ge && (h.g.j.ge[a] = g);
    return g
};
h.g.j.TD = function(a, c, d) {
    var e = document.createElement("span");
    e.style.font = c + " " + a + " " + d;
    e.textContent = "Hg";
    a = document.createElement("div");
    a.style.width = "1px";
    a.style.height = "0px";
    c = document.createElement("div");
    c.setAttribute("style", "position: fixed; top: 0; left: 0; display: flex;");
    c.appendChild(e);
    c.appendChild(a);
    document.body.appendChild(c);
    try {
        d = {}, c.style.alignItems = "baseline", d.fe = a.offsetTop - e.offsetTop, c.style.alignItems = "flex-end", d.height = a.offsetTop - e.offsetTop
    } finally {
        document.body.removeChild(c)
    }
    return d
};
h.g.Ld = {};
h.g.Ld.Yt = function(a) {
    return a * Math.PI / 180
};
h.g.Ld.pF = function(a) {
    return 180 * a / Math.PI
};
h.g.Ld.al = function(a, c, d) {
    if (d < a) {
        var e = d;
        d = a;
        a = e
    }
    return Math.max(a, Math.min(c, d))
};
h.g.Rect = function(a, c, d, e) {
    this.top = a;
    this.bottom = c;
    this.left = d;
    this.right = e
};
h.g.Rect.prototype.contains = function(a, c) {
    return a >= this.left && a <= this.right && c >= this.top && c <= this.bottom
};
h.g.T = function(a, c) {
    this.x = a;
    this.y = c
};
h.g.T.Nf = function(a, c) {
    return a == c ? !0 : a && c ? a.x == c.x && a.y == c.y : !1
};
h.g.T.Br = function(a, c) {
    var d = a.x - c.x;
    a = a.y - c.y;
    return Math.sqrt(d * d + a * a)
};
h.g.T.RD = function(a) {
    return Math.sqrt(a.x * a.x + a.y * a.y)
};
h.g.T.ql = function(a, c) {
    return new h.g.T(a.x - c.x, a.y - c.y)
};
h.g.T.sum = function(a, c) {
    return new h.g.T(a.x + c.x, a.y + c.y)
};
h.g.T.prototype.clone = function() {
    return new h.g.T(this.x, this.y)
};
h.g.T.prototype.scale = function(a) {
    this.x *= a;
    this.y *= a;
    return this
};
h.g.T.prototype.translate = function(a, c) {
    this.x += a;
    this.y += c;
    return this
};
h.g.Uc = function(a, c) {
    this.width = a;
    this.height = c
};
h.g.Uc.Nf = function(a, c) {
    return a == c ? !0 : a && c ? a.width == c.width && a.height == c.height : !1
};
h.g.style = {};
h.g.style.Pf = function(a) {
    if ("none" != h.g.style.kx(a, "display")) return h.g.style.ix(a);
    var c = a.style,
        d = c.display,
        e = c.visibility,
        f = c.position;
    c.visibility = "hidden";
    c.position = "absolute";
    c.display = "inline";
    var g = a.offsetWidth;
    a = a.offsetHeight;
    c.display = d;
    c.position = f;
    c.visibility = e;
    return new h.g.Uc(g, a)
};
h.g.style.ix = function(a) {
    return new h.g.Uc(a.offsetWidth, a.offsetHeight)
};
h.g.style.kx = function(a, c) {
    return h.g.style.getComputedStyle(a, c) || h.g.style.YC(a, c) || a.style && a.style[c]
};
h.g.style.getComputedStyle = function(a, c) {
    return document.defaultView && document.defaultView.getComputedStyle && (a = document.defaultView.getComputedStyle(a, null)) ? a[c] || a.getPropertyValue(c) || "" : ""
};
h.g.style.YC = function(a, c) {
    return a.currentStyle ? a.currentStyle[c] : null
};
h.g.style.bi = function(a) {
    var c = new h.g.T(0, 0);
    a = a.getBoundingClientRect();
    var d = document.documentElement;
    d = new h.g.T(window.pageXOffset || d.scrollLeft, window.pageYOffset || d.scrollTop);
    c.x = a.left + d.x;
    c.y = a.top + d.y;
    return c
};
h.g.style.nD = function() {
    var a = document.body,
        c = document.documentElement;
    return new h.g.T(a.scrollLeft || c.scrollLeft, a.scrollTop || c.scrollTop)
};
h.g.style.tK = function(a, c) {
    a.style.display = c ? "" : "none"
};
h.g.style.ZJ = function(a) {
    return "rtl" == h.g.style.kx(a, "direction")
};
h.g.style.VC = function(a) {
    var c = h.g.style.getComputedStyle(a, "borderLeftWidth"),
        d = h.g.style.getComputedStyle(a, "borderRightWidth"),
        e = h.g.style.getComputedStyle(a, "borderTopWidth");
    a = h.g.style.getComputedStyle(a, "borderBottomWidth");
    return {
        top: parseFloat(e),
        right: parseFloat(d),
        bottom: parseFloat(a),
        left: parseFloat(c)
    }
};
h.g.style.XE = function(a, c) {
    a = h.g.style.aD(a, c);
    c.scrollLeft = a.x;
    c.scrollTop = a.y
};
h.g.style.aD = function(a, c) {
    var d = h.g.style.bi(a),
        e = h.g.style.bi(c),
        f = h.g.style.VC(c),
        g = d.x - e.x - f.left;
    d = d.y - e.y - f.top;
    a = h.g.style.ix(a);
    e = c.clientHeight - a.height;
    f = c.scrollLeft;
    var k = c.scrollTop;
    f += Math.min(g, Math.max(g - (c.clientWidth - a.width), 0));
    k += Math.min(d, Math.max(d - e, 0));
    return new h.g.T(f, k)
};
h.C = function() {};
h.C.Qq = null;
h.C.Pd = null;
h.C.wy = null;
h.C.Um = 16;
h.C.tu = 1;
h.C.ou = 12;
h.C.tv = 16;
h.C.zp = .25;
h.C.Iq = null;
h.C.Di = null;
h.C.ue = "";
h.C.ze = "";
h.C.Va = function() {
    if (!h.C.Ee) {
        var a = document.createElement("div");
        a.className = "blocklyDropDownDiv";
        (h.ap || document.body).appendChild(a);
        h.C.Ee = a;
        var c = document.createElement("div");
        c.className = "blocklyDropDownContent";
        a.appendChild(c);
        h.C.Jf = c;
        c = document.createElement("div");
        c.className = "blocklyDropDownArrow";
        a.appendChild(c);
        h.C.Bd = c;
        h.C.Ee.style.opacity = 0;
        h.C.Ee.style.transition = "transform " + h.C.zp + "s, opacity " + h.C.zp + "s";
        a.addEventListener("focusin", function() {
            h.g.j.Nb(a, "blocklyFocused")
        });
        a.addEventListener("focusout",
            function() {
                h.g.j.fd(a, "blocklyFocused")
            })
    }
};
h.C.YE = function(a) {
    h.C.Qq = a
};
h.C.bD = function() {
    return h.C.Jf
};
h.C.eC = function() {
    h.C.Jf.textContent = "";
    h.C.Jf.style.width = ""
};
h.C.ve = function(a, c) {
    h.C.Ee.style.backgroundColor = a;
    h.C.Ee.style.borderColor = c
};
h.C.wK = function(a, c, d, e) {
    return h.C.Iy(h.C.ex(c), a, d, e)
};
h.C.dF = function(a, c) {
    h.C.wy = !0;
    h.C.Iy(h.C.gx(a), a, c, void 0)
};
h.C.ex = function(a) {
    var c = a.oa(),
        d = c.getBBox(),
        e = a.B.scale;
    a = d.height * e;
    d = d.width * e;
    c = h.g.style.bi(c);
    return new h.g.Rect(c.y, c.y + a, c.x, c.x + d)
};
h.C.gx = function(a) {
    if (a.Pb) c = a.Pb.getBoundingClientRect(), a = h.g.style.bi(a.Pb), e = c.width, c = c.height;
    else {
        var c = r(a.L);
        var d = a.L.B.scale;
        a = h.g.style.bi(aa(a));
        var e = c.width * d;
        c = c.height * d;
        h.g.userAgent.lA ? (a.x += 1.5 * d, a.y += 1.5 * d) : h.g.userAgent.Eh || h.g.userAgent.$d || (a.x -= .5 * d, a.y -= .5 * d);
        e += 1 * d;
        c += 1 * d
    }
    d = new h.g.Rect(a.y, a.y + c, a.x, a.x + e);
    return new h.g.Rect(d.top, d.bottom, d.left, d.right)
};
h.C.Iy = function(a, c, d, e) {
    var f = a.left + (a.right - a.left) / 2,
        g = a.bottom;
    a = a.top;
    e && (a += e);
    e = c.$();
    for (var k = e.B; k.options.ed;) k = k.options.ed;
    h.C.YE(t(k).parentNode);
    return h.C.show(c, e.I, f, g, f, a, d)
};
h.C.show = function(a, c, d, e, f, g, k) {
    h.C.Pd = a;
    h.C.Di = k || null;
    a = h.C.Ee;
    a.style.direction = c ? "rtl" : "ltr";
    c = h.Lg();
    h.C.ue = c.mb.me();
    h.C.ze = c.Qf().me();
    h.g.j.Nb(a, h.C.ue);
    h.g.j.Nb(a, h.C.ze);
    return h.C.im(d, e, f, g)
};
h.C.WC = function() {
    var a = h.g.style.bi(h.C.Qq),
        c = h.g.style.Pf(h.C.Qq);
    return {
        left: a.x,
        right: a.x + c.width,
        top: a.y,
        bottom: a.y + c.height,
        width: c.width,
        height: c.height
    }
};
h.C.gD = function(a, c, d, e) {
    var f = h.C.WC(),
        g = h.g.style.Pf(h.C.Ee);
    return c + g.height < f.bottom ? h.C.bx(a, c, f, g) : e - g.height > f.top ? h.C.ax(d, e, f, g) : c + g.height < document.documentElement.clientHeight ? h.C.bx(a, c, f, g) : e - g.height > document.documentElement.clientTop ? h.C.ax(d, e, f, g) : h.C.hD(a, f, g)
};
h.C.bx = function(a, c, d, e) {
    a = h.C.ds(a, d.left, d.right, e.width);
    return {
        qs: a.Ej,
        rs: c,
        Or: a.Ej,
        Pr: c + h.C.tv,
        qj: a.qj,
        Kq: -(h.C.Um / 2 + h.C.tu),
        Kn: !0,
        Jq: !0
    }
};
h.C.ax = function(a, c, d, e) {
    a = h.C.ds(a, d.left, d.right, e.width);
    return {
        qs: a.Ej,
        rs: c - e.height,
        Or: a.Ej,
        Pr: c - e.height - h.C.tv,
        qj: a.qj,
        Kq: e.height - 2 * h.C.tu - h.C.Um / 2,
        Kn: !1,
        Jq: !0
    }
};
h.C.hD = function(a, c, d) {
    a = h.C.ds(a, c.left, c.right, d.width);
    return {
        qs: a.Ej,
        rs: 0,
        Or: a.Ej,
        Pr: 0,
        Kn: null,
        qj: null,
        Kq: null,
        Jq: !1
    }
};
h.C.ds = function(a, c, d, e) {
    var f = a;
    a = h.g.Ld.al(c, a - e / 2, d - e);
    f -= h.C.Um / 2;
    c = h.g.Ld.al(h.C.ou, f - a, e - h.C.ou - h.C.Um);
    return {
        qj: c,
        Ej: a
    }
};
h.C.isVisible = function() {
    return !!h.C.Pd
};
h.C.Ll = function(a, c) {
    h.C.Pd === a && (c ? h.C.uo() : h.C.$a())
};
h.C.$a = function() {
    var a = h.C.Ee;
    a.style.transform = "translate(0, 0)";
    a.style.opacity = 0;
    h.C.Iq = setTimeout(function() {
        h.C.uo()
    }, 1E3 * h.C.zp);
    h.C.Di && (h.C.Di(), h.C.Di = null)
};
h.C.uo = function() {
    if (h.C.isVisible()) {
        h.C.Iq && clearTimeout(h.C.Iq);
        var a = h.C.Ee;
        a.style.transform = "";
        a.style.left = "";
        a.style.top = "";
        a.style.opacity = 0;
        a.style.display = "none";
        a.style.backgroundColor = "";
        a.style.borderColor = "";
        h.C.Di && (h.C.Di(), h.C.Di = null);
        h.C.eC();
        h.C.Pd = null;
        h.C.ue && (h.g.j.fd(a, h.C.ue), h.C.ue = "");
        h.C.ze && (h.g.j.fd(a, h.C.ze), h.C.ze = "");
        ba(h.Lg())
    }
};
h.C.im = function(a, c, d, e) {
    a = h.C.gD(a, c, d, e);
    a.Jq ? (h.C.Bd.style.display = "", h.C.Bd.style.transform = "translate(" + a.qj + "px," + a.Kq + "px) rotate(45deg)", h.C.Bd.setAttribute("class", a.Kn ? "blocklyDropDownArrow blocklyArrowTop" : "blocklyDropDownArrow blocklyArrowBottom")) : h.C.Bd.style.display = "none";
    c = Math.floor(a.qs);
    d = Math.floor(a.rs);
    e = Math.floor(a.Or);
    var f = Math.floor(a.Pr),
        g = h.C.Ee;
    g.style.left = c + "px";
    g.style.top = d + "px";
    g.style.display = "block";
    g.style.opacity = 1;
    g.style.transform = "translate(" + (e - c) + "px," +
        (f - d) + "px)";
    return !!a.Kn
};
h.C.mK = function() {
    if (h.C.Pd) {
        var a = h.C.Pd,
            c = a.$();
        a = h.C.wy ? h.C.gx(a) : h.C.ex(c);
        c = a.left + (a.right - a.left) / 2;
        h.C.im(c, a.bottom, c, a.top)
    } else h.C.$a()
};
h.X = {
    Zb: 1,
    Tc: 2,
    $b: 3,
    kd: 4
};
h.kb = {};
h.$u = 40;
h.uv = 125;
h.Lz = 5;
h.hA = 10;
h.oc = 28;
h.Au = h.oc;
h.zz = 8;
h.Cp = 250;
h.Dp = 10;
h.vz = 30;
h.DA = 750;
h.kB = 100;
h.Mz = !0;
h.qA = .45;
h.rA = .65;
h.hj = {
    width: 96,
    height: 124,
    url: "sprites.png"
};
h.kb.Xd = {
    Hb: -1,
    Ym: 0,
    Gc: 1
};
h.dG = 0;
h.eG = 1;
h.bG = 1;
h.cG = 2;
h.ej = [];
h.ej[h.X.Zb] = h.X.Tc;
h.ej[h.X.Tc] = h.X.Zb;
h.ej[h.X.$b] = h.X.kd;
h.ej[h.X.kd] = h.X.$b;
h.Ph = "VARIABLE";
h.vB = "VARIABLE_DYNAMIC";
h.jq = "PROCEDURE";
h.DI = "RENAME_VARIABLE_ID";
h.ZF = "DELETE_VARIABLE_ID";
h.kb.$m = "_TEMP_COLLAPSED_INPUT";
h.kb.Zm = "_TEMP_COLLAPSED_FIELD";
h.M = {};
h.g.global.Blockly || (h.g.global.Blockly = {});
h.g.global.Blockly.Msg || (h.g.global.Blockly.Msg = h.M);
h.g.sb = {};
h.g.sb.parse = function(a) {
    a = String(a).toLowerCase().trim();
    var c = h.g.sb.names[a];
    if (c) return c;
    c = "0x" == a.substring(0, 2) ? "#" + a.substring(2) : a;
    c = "#" == c[0] ? c : "#" + c;
    if (/^#[0-9a-f]{6}$/.test(c)) return c;
    if (/^#[0-9a-f]{3}$/.test(c)) return ["#", c[1], c[1], c[2], c[2], c[3], c[3]].join("");
    var d = a.match(/^(?:rgb)?\s*\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*\)$/);
    return d && (a = Number(d[1]), c = Number(d[2]), d = Number(d[3]), 0 <= a && 256 > a && 0 <= c && 256 > c && 0 <= d && 256 > d) ? h.g.sb.Gt(a, c, d) : null
};
h.g.sb.Gt = function(a, c, d) {
    c = a << 16 | c << 8 | d;
    return 16 > a ? "#" + (16777216 | c).toString(16).substr(1) : "#" + c.toString(16)
};
h.g.sb.ux = function(a) {
    a = h.g.sb.parse(a);
    if (!a) return [0, 0, 0];
    a = parseInt(a.substr(1), 16);
    return [a >> 16, a >> 8 & 255, a & 255]
};
h.g.sb.zx = function(a) {
    var c = h.qA,
        d = 255 * h.rA,
        e = 0,
        f = 0,
        g = 0;
    if (0 == c) g = f = e = d;
    else {
        var k = Math.floor(a / 60),
            l = a / 60 - k;
        a = d * (1 - c);
        var m = d * (1 - c * l);
        c = d * (1 - c * (1 - l));
        switch (k) {
            case 1:
                e = m;
                f = d;
                g = a;
                break;
            case 2:
                e = a;
                f = d;
                g = c;
                break;
            case 3:
                e = a;
                f = m;
                g = d;
                break;
            case 4:
                e = c;
                f = a;
                g = d;
                break;
            case 5:
                e = d;
                f = a;
                g = m;
                break;
            case 6:
            case 0:
                e = d, f = c, g = a
        }
    }
    return h.g.sb.Gt(Math.floor(e), Math.floor(f), Math.floor(g))
};
h.g.sb.Mq = function(a, c, d) {
    a = h.g.sb.parse(a);
    if (!a) return null;
    c = h.g.sb.parse(c);
    if (!c) return null;
    a = h.g.sb.ux(a);
    c = h.g.sb.ux(c);
    return h.g.sb.Gt(Math.round(c[0] + d * (a[0] - c[0])), Math.round(c[1] + d * (a[1] - c[1])), Math.round(c[2] + d * (a[2] - c[2])))
};
h.g.sb.names = {
    aqua: "#00ffff",
    black: "#000000",
    blue: "#0000ff",
    fuchsia: "#ff00ff",
    gray: "#808080",
    green: "#008000",
    lime: "#00ff00",
    maroon: "#800000",
    navy: "#000080",
    olive: "#808000",
    purple: "#800080",
    red: "#ff0000",
    silver: "#c0c0c0",
    teal: "#008080",
    white: "#ffffff",
    yellow: "#ffff00"
};
h.g.Qa = {};
h.g.Qa.startsWith = function(a, c) {
    return 0 == a.lastIndexOf(c, 0)
};
h.g.Qa.Qt = function(a) {
    return a.length ? a.reduce(function(c, d) {
        return c.length < d.length ? c : d
    }).length : 0
};
h.g.Qa.kw = function(a, c) {
    if (!a.length) return 0;
    if (1 == a.length) return a[0].length;
    var d = 0;
    c = c || h.g.Qa.Qt(a);
    for (var e = 0; e < c; e++) {
        for (var f = a[0][e], g = 1; g < a.length; g++)
            if (f != a[g][e]) return d;
        " " == f && (d = e + 1)
    }
    for (g = 1; g < a.length; g++)
        if ((f = a[g][e]) && " " != f) return d;
    return c
};
h.g.Qa.lw = function(a, c) {
    if (!a.length) return 0;
    if (1 == a.length) return a[0].length;
    var d = 0;
    c = c || h.g.Qa.Qt(a);
    for (var e = 0; e < c; e++) {
        for (var f = a[0].substr(-e - 1, 1), g = 1; g < a.length; g++)
            if (f != a[g].substr(-e - 1, 1)) return d;
        " " == f && (d = e + 1)
    }
    for (g = 1; g < a.length; g++)
        if ((f = a[g].charAt(a[g].length - e - 1)) && " " != f) return d;
    return c
};
h.g.Qa.ez = function(a, c) {
    a = a.split("\n");
    for (var d = 0; d < a.length; d++) a[d] = h.g.Qa.BF(a[d], c);
    return a.join("\n")
};
h.g.Qa.BF = function(a, c) {
    if (a.length <= c) return a;
    for (var d = a.trim().split(/\s+/), e = 0; e < d.length; e++) d[e].length > c && (c = d[e].length);
    e = -Infinity;
    var f = 1;
    do {
        var g = e;
        var k = a;
        a = [];
        var l = d.length / f,
            m = 1;
        for (e = 0; e < d.length - 1; e++) m < (e + 1.5) / l ? (m++, a[e] = !0) : a[e] = !1;
        a = h.g.Qa.fz(d, a, c);
        e = h.g.Qa.ju(d, a, c);
        a = h.g.Qa.CF(d, a);
        f++
    } while (e > g);
    return k
};
h.g.Qa.ju = function(a, c, d) {
    for (var e = [0], f = [], g = 0; g < a.length; g++) e[e.length - 1] += a[g].length, !0 === c[g] ? (e.push(0), f.push(a[g].charAt(a[g].length - 1))) : !1 === c[g] && e[e.length - 1]++;
    a = Math.max.apply(Math, e);
    for (g = c = 0; g < e.length; g++) c -= 2 * Math.pow(Math.abs(d - e[g]), 1.5), c -= Math.pow(a - e[g], 1.5), -1 != ".?!".indexOf(f[g]) ? c += d / 3 : -1 != ",;)]}".indexOf(f[g]) && (c += d / 4);
    1 < e.length && e[e.length - 1] <= e[e.length - 2] && (c += .5);
    return c
};
h.g.Qa.fz = function(a, c, d) {
    for (var e = h.g.Qa.ju(a, c, d), f, g = 0; g < c.length - 1; g++)
        if (c[g] != c[g + 1]) {
            var k = [].concat(c);
            k[g] = !k[g];
            k[g + 1] = !k[g + 1];
            var l = h.g.Qa.ju(a, k, d);
            l > e && (e = l, f = k)
        } return f ? h.g.Qa.fz(a, f, d) : c
};
h.g.Qa.CF = function(a, c) {
    for (var d = [], e = 0; e < a.length; e++) d.push(a[e]), void 0 !== c[e] && d.push(c[e] ? "\n" : " ");
    return d.join("")
};
h.g.eE = function(a) {
    a.preventDefault();
    a.stopPropagation()
};
h.g.Fo = function(a) {
    return "textarea" == a.target.type || "text" == a.target.type || "number" == a.target.type || "email" == a.target.type || "password" == a.target.type || "search" == a.target.type || "tel" == a.target.type || "url" == a.target.type || a.target.isContentEditable || a.target.dataset && "true" == a.target.dataset.aK
};
h.g.pe = function(a) {
    var c = new h.g.T(0, 0),
        d = a.getAttribute("x");
    d && (c.x = parseInt(d, 10));
    if (d = a.getAttribute("y")) c.y = parseInt(d, 10);
    if (d = (d = a.getAttribute("transform")) && d.match(h.g.pe.wB)) c.x += Number(d[1]), d[3] && (c.y += Number(d[3]));
    (a = a.getAttribute("style")) && -1 < a.indexOf("translate") && (a = a.match(h.g.pe.xB)) && (c.x += Number(a[1]), a[3] && (c.y += Number(a[3])));
    return c
};
h.g.Fl = function(a) {
    for (var c = 0, d = 0; a;) {
        var e = h.g.pe(a);
        c += e.x;
        d += e.y;
        if (-1 != (" " + (a.getAttribute("class") || "") + " ").indexOf(" injectionDiv ")) break;
        a = a.parentNode
    }
    return new h.g.T(c, d)
};
h.g.pe.wB = /translate\(\s*([-+\d.e]+)([ ,]\s*([-+\d.e]+)\s*)?/;
h.g.pe.xB = /transform:\s*translate(?:3d)?\(\s*([-+\d.e]+)\s*px([ ,]\s*([-+\d.e]+)\s*px)?/;
h.g.Tl = function(a) {
    return a.ctrlKey && h.g.userAgent.EA ? !0 : 2 == a.button
};
h.g.bm = function(a, c, d) {
    var e = c.createSVGPoint();
    e.x = a.clientX;
    e.y = a.clientY;
    d || (d = c.getScreenCTM().inverse());
    return e.matrixTransform(d)
};
h.g.hx = function(a) {
    switch (a.deltaMode) {
        default:
            return {
                x: a.deltaX, y: a.deltaY
            };
        case 1:
            return {
                x: a.deltaX * h.$u, y: a.deltaY * h.$u
            };
        case 2:
            return {
                x: a.deltaX * h.uv, y: a.deltaY * h.uv
            }
    }
};
h.g.qF = function(a) {
    return h.g.Zt(a, !0)
};
h.g.gd = function(a) {
    if ("string" != typeof a) return a;
    a = h.g.Zt(a, !1);
    return a.length ? String(a[0]) : ""
};
h.g.fw = function(a) {
    for (var c = h.M, d = a.match(/%{BKY_[A-Z]\w*}/ig), e = 0; e < d.length; e++) void 0 == c[d[e].toUpperCase().slice(6, -1)] && console.warn("No message string for " + d[e] + " in " + a)
};
h.g.Zt = function(a, c) {
    var d = [],
        e = a.split("");
    e.push("");
    var f = 0;
    a = [];
    for (var g = null, k = 0; k < e.length; k++) {
        var l = e[k];
        0 == f ? "%" == l ? ((l = a.join("")) && d.push(l), a.length = 0, f = 1) : a.push(l) : 1 == f ? "%" == l ? (a.push(l), f = 0) : c && "0" <= l && "9" >= l ? (f = 2, g = l, (l = a.join("")) && d.push(l), a.length = 0) : "{" == l ? f = 3 : (a.push("%", l), f = 0) : 2 == f ? "0" <= l && "9" >= l ? g += l : (d.push(parseInt(g, 10)), k--, f = 0) : 3 == f && ("" == l ? (a.splice(0, 0, "%{"), k--, f = 0) : "}" != l ? a.push(l) : (f = a.join(""), /[A-Z]\w*/i.test(f) ? (l = f.toUpperCase(), (l = h.g.Qa.startsWith(l, "BKY_") ?
            l.substring(4) : null) && l in h.M ? (f = h.M[l], "string" == typeof f ? Array.prototype.push.apply(d, h.g.Zt(f, c)) : c ? d.push(String(f)) : d.push(f)) : d.push("%{" + f + "}")) : d.push("%{" + f + "}"), f = a.length = 0))
    }(l = a.join("")) && d.push(l);
    c = [];
    for (k = a.length = 0; k < d.length; ++k) "string" == typeof d[k] ? a.push(d[k]) : ((l = a.join("")) && c.push(l), a.length = 0, c.push(d[k]));
    (l = a.join("")) && c.push(l);
    a.length = 0;
    return c
};
h.g.Xe = function() {
    for (var a = h.g.Xe.Jy.length, c = [], d = 0; 20 > d; d++) c[d] = h.g.Xe.Jy.charAt(Math.random() * a);
    return c.join("")
};
h.g.Xe.Jy = "!#$%()*+,-./:;=?@[]^_`{|}~ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
h.g.li = function() {
    if (void 0 !== h.g.li.Wq) return h.g.li.Wq;
    if (!h.g.global.getComputedStyle) return !1;
    var a = document.createElement("p"),
        c = "none",
        d = {
            webkitTransform: "-webkit-transform",
            OTransform: "-o-transform",
            msTransform: "-ms-transform",
            MozTransform: "-moz-transform",
            transform: "transform"
        };
    document.body.insertBefore(a, null);
    for (var e in d)
        if (void 0 !== a.style[e]) {
            a.style[e] = "translate3d(1px,1px,1px)";
            c = h.g.global.getComputedStyle(a);
            if (!c) return document.body.removeChild(a), !1;
            c = c.getPropertyValue(d[e])
        } document.body.removeChild(a);
    h.g.li.Wq = "none" !== c;
    return h.g.li.Wq
};
h.g.Dy = function(a) {
    if ("object" != typeof document) throw Error("Blockly.utils.runAfterPageLoad() requires browser document.");
    if ("complete" == document.readyState) a();
    else var c = setInterval(function() {
        "complete" == document.readyState && (clearInterval(c), a())
    }, 10)
};
h.g.mD = function() {
    var a = h.g.style.nD();
    return new h.g.Rect(a.y, document.documentElement.clientHeight + a.y, a.x, document.documentElement.clientWidth + a.x)
};
h.g.Xk = function(a, c) {
    c = a.indexOf(c);
    if (-1 == c) return !1;
    a.splice(c, 1);
    return !0
};
h.g.eD = function() {
    var a = document.documentElement,
        c = window;
    return h.g.userAgent.$d && c.pageYOffset != a.scrollTop ? new h.g.T(a.scrollLeft, a.scrollTop) : new h.g.T(c.pageXOffset || a.scrollLeft, c.pageYOffset || a.scrollTop)
};
h.g.Tr = function(a, c) {
    var d = Object.create(null),
        e = v(a, !0);
    c && (a = w(a)) && (a = e.indexOf(a), e.splice(a, e.length - a));
    for (a = 0; c = e[a]; a++) d[c.type] ? d[c.type]++ : d[c.type] = 1;
    return d
};
h.g.qK = function(a, c) {
    var d = c.x;
    c = c.y;
    var e = ca(a).getBoundingClientRect();
    d = new h.g.T(d - e.left, c - e.top);
    c = h.g.Fl(a.xb);
    return h.g.T.ql(d, c).scale(1 / a.scale)
};
h.g.bp = function(a) {
    var c = "string" == typeof a ? h.g.gd(a) : a,
        d = Number(c);
    if (!isNaN(d) && 0 <= d && 360 >= d) return {
        yD: d,
        Kl: h.g.sb.zx(d)
    };
    if (d = h.g.sb.parse(c)) return {
        yD: null,
        Kl: d
    };
    d = 'Invalid colour: "' + c + '"';
    a != c && (d += ' (from "' + a + '")');
    throw Error(d);
};
h.Touch = {};
h.Touch.Hv = "ontouchstart" in h.g.global || !!(h.g.global.document && document.documentElement && "ontouchstart" in document.documentElement) || !(!h.g.global.navigator || !h.g.global.navigator.maxTouchPoints && !h.g.global.navigator.msMaxTouchPoints);
h.Touch.Im = null;
h.Touch.Ke = {};
h.g.global.PointerEvent ? h.Touch.Ke = {
    mousedown: ["pointerdown"],
    mouseenter: ["pointerenter"],
    mouseleave: ["pointerleave"],
    mousemove: ["pointermove"],
    mouseout: ["pointerout"],
    mouseover: ["pointerover"],
    mouseup: ["pointerup", "pointercancel"],
    touchend: ["pointerup"],
    touchcancel: ["pointercancel"]
} : h.Touch.Hv && (h.Touch.Ke = {
    mousedown: ["touchstart"],
    mousemove: ["touchmove"],
    mouseup: ["touchend", "touchcancel"]
});
h.Lo = 0;
h.QD = function(a, c) {
    h.Yg();
    a.changedTouches && 1 != a.changedTouches.length || (h.Lo = setTimeout(function() {
        a.changedTouches && (a.button = 2, a.clientX = a.changedTouches[0].clientX, a.clientY = a.changedTouches[0].clientY);
        c && da(c, a)
    }, h.DA))
};
h.Yg = function() {
    h.Lo && (clearTimeout(h.Lo), h.Lo = 0)
};
h.Touch.Qn = function() {
    h.Touch.Im = null
};
h.Touch.St = function(a) {
    return !h.Touch.JD(a) || h.Touch.dC(a)
};
h.Touch.qo = function(a) {
    return void 0 != a.pointerId ? a.pointerId : a.changedTouches && a.changedTouches[0] && void 0 !== a.changedTouches[0].identifier && null !== a.changedTouches[0].identifier ? a.changedTouches[0].identifier : "mouse"
};
h.Touch.dC = function(a) {
    var c = h.Touch.qo(a);
    return void 0 !== h.Touch.Im && null !== h.Touch.Im ? h.Touch.Im == c : "mousedown" == a.type || "touchstart" == a.type || "pointerdown" == a.type ? (h.Touch.Im = c, !0) : !1
};
h.Touch.ZE = function(a) {
    if (h.g.Qa.startsWith(a.type, "touch")) {
        var c = a.changedTouches[0];
        a.clientX = c.clientX;
        a.clientY = c.clientY
    }
};
h.Touch.JD = function(a) {
    return h.g.Qa.startsWith(a.type, "touch") || h.g.Qa.startsWith(a.type, "mouse") || h.g.Qa.startsWith(a.type, "pointer")
};
h.Touch.Ho = function(a) {
    return h.g.Qa.startsWith(a.type, "touch") || h.g.Qa.startsWith(a.type, "pointer")
};
h.Touch.gF = function(a) {
    var c = [];
    if (a.changedTouches)
        for (var d = 0; d < a.changedTouches.length; d++) c[d] = {
            type: a.type,
            changedTouches: [a.changedTouches[d]],
            target: a.target,
            stopPropagation: function() {
                a.stopPropagation()
            },
            preventDefault: function() {
                a.preventDefault()
            }
        };
    else c.push(a);
    return c
};
h.N = {};
h.N.Aa = function(a, c, d, e, f, g) {
    function k(u) {
        var H = !f;
        u = h.Touch.gF(u);
        for (var L = 0, I; I = u[L]; L++)
            if (!H || h.Touch.St(I)) h.Touch.ZE(I), d ? e.call(d, I) : e(I), l = !0
    }
    var l = !1,
        m = [];
    if (h.g.global.PointerEvent && c in h.Touch.Ke)
        for (var n = 0, q; q = h.Touch.Ke[c][n]; n++) a.addEventListener(q, k, !1), m.push([a, q, k]);
    else if (a.addEventListener(c, k, !1), m.push([a, c, k]), c in h.Touch.Ke) {
        var p = function(u) {
            k(u);
            var H = !g;
            l && H && u.preventDefault()
        };
        for (n = 0; q = h.Touch.Ke[c][n]; n++) a.addEventListener(q, p, !1), m.push([a, q, p])
    }
    return m
};
h.N.bind = function(a, c, d, e) {
    function f(n) {
        d ? e.call(d, n) : e(n)
    }
    var g = [];
    if (h.g.global.PointerEvent && c in h.Touch.Ke)
        for (var k = 0, l; l = h.Touch.Ke[c][k]; k++) a.addEventListener(l, f, !1), g.push([a, l, f]);
    else if (a.addEventListener(c, f, !1), g.push([a, c, f]), c in h.Touch.Ke) {
        var m = function(n) {
            if (n.changedTouches && 1 == n.changedTouches.length) {
                var q = n.changedTouches[0];
                n.clientX = q.clientX;
                n.clientY = q.clientY
            }
            f(n);
            n.preventDefault()
        };
        for (k = 0; l = h.Touch.Ke[c][k]; k++) a.addEventListener(l, m, !1), g.push([a, l, m])
    }
    return g
};
h.N.yb = function(a) {
    for (; a.length;) {
        var c = a.pop(),
            d = c[2];
        c[0].removeEventListener(c[1], d, !1)
    }
    return d
};
h.u = {};
h.u.lk = Object.create(null);
h.u.Zi = "default";
h.u.R = function(a) {
    this.cm = a
};
h.u.R.prototype.toString = function() {
    return this.cm
};
h.u.R.Bu = new h.u.R("connectionChecker");
h.u.R.xk = new h.u.R("cursor");
h.u.R.Gb = new h.u.R("event");
h.u.R.Dc = new h.u.R("field");
h.u.R.RENDERER = new h.u.R("renderer");
h.u.R.rB = new h.u.R("toolbox");
h.u.R.vq = new h.u.R("theme");
h.u.R.XI = new h.u.R("toolboxItem");
h.u.R.Rp = new h.u.R("flyoutsVerticalToolbox");
h.u.R.Mu = new h.u.R("flyoutsHorizontalToolbox");
h.u.R.fv = new h.u.R("metricsManager");
h.u.R.su = new h.u.R("blockDragger");
h.u.register = function(a, c, d, e) {
    if (!(a instanceof h.u.R) && "string" != typeof a || "" == String(a).trim()) throw Error('Invalid type "' + a + '". The type must be a non-empty string or a Blockly.registry.Type.');
    a = String(a).toLowerCase();
    if ("string" != typeof c || "" == c.trim()) throw Error('Invalid name "' + c + '". The name must be a non-empty string.');
    c = c.toLowerCase();
    if (!d) throw Error("Can not register a null value");
    var f = h.u.lk[a];
    f || (f = h.u.lk[a] = Object.create(null));
    h.u.yF(a, d);
    if (!e && f[c]) throw Error('Name "' +
        c + '" with type "' + a + '" already registered.');
    f[c] = d
};
h.u.yF = function(a, c) {
    switch (a) {
        case String(h.u.R.Dc):
            if ("function" != typeof c.ba) throw Error('Type "' + a + '" must have a fromJson function');
    }
};
h.u.unregister = function(a, c) {
    a = String(a).toLowerCase();
    c = c.toLowerCase();
    var d = h.u.lk[a];
    d && d[c] ? delete h.u.lk[a][c] : console.warn("Unable to unregister [" + c + "][" + a + "] from the registry.")
};
h.u.Zw = function(a, c, d) {
    a = String(a).toLowerCase();
    c = c.toLowerCase();
    var e = h.u.lk[a];
    if (!e || !e[c]) {
        c = "Unable to find [" + c + "][" + a + "] in the registry.";
        if (d) throw Error(c + " You must require or register a " + a + " plugin.");
        console.warn(c);
        return null
    }
    return e[c]
};
h.u.RJ = function(a, c) {
    a = String(a).toLowerCase();
    c = c.toLowerCase();
    return (a = h.u.lk[a]) ? !!a[c] : !1
};
h.u.Vr = function(a, c, d) {
    return h.u.Zw(a, c, d)
};
h.u.bs = function(a, c) {
    return h.u.Zw(a, c, void 0)
};
h.u.Of = function(a, c, d) {
    c = c.plugins[a.toString()] || h.u.Zi;
    return "function" == typeof c ? c : h.u.Vr(a, c, d)
};
h.h = {};
h.h.ox = "";
h.h.Na = !0;
h.h.xr = 0;
h.h.wk = "create";
h.h.xh = h.h.wk;
h.h.Dh = "delete";
h.h.Ap = h.h.Dh;
h.h.rk = "change";
h.h.wh = h.h.rk;
h.h.Kk = "move";
h.h.yh = h.h.Kk;
h.h.Rk = "var_create";
h.h.En = "var_delete";
h.h.Cq = "var_rename";
h.h.Aq = "ui";
h.h.Vm = "drag";
h.h.gj = "selected";
h.h.tk = "click";
h.h.aq = "marker_move";
h.h.uu = "bubble_open";
h.h.yq = "trashcan_open";
h.h.YI = "toolbox_item_select";
h.h.wq = "theme_change";
h.h.Sk = "viewport_change";
h.h.an = "comment_create";
h.h.zu = "comment_delete";
h.h.yu = "comment_change";
h.h.vk = "comment_move";
h.h.Qp = "finished_loading";
h.h.uz = [h.h.xh, h.h.yh, h.h.an, h.h.vk];
h.h.Bk = [];
h.h.Ga = function(a) {
    h.h.isEnabled() && (h.h.Bk.length || setTimeout(h.h.PC, 0), h.h.Bk.push(a))
};
h.h.PC = function() {
    for (var a = h.h.filter(h.h.Bk, !0), c = h.h.Bk.length = 0, d; d = a[c]; c++)
        if (d.Yb) {
            var e = h.qb.Cl(d.Yb);
            if (e) {
                var f = d;
                if (f.Na)
                    for (e.Pi.push(f), e.mm.length = 0; e.Pi.length > e.dv && 0 <= e.dv;) e.Pi.shift();
                for (var g = 0; d = e.Nc[g]; g++) d(f)
            }
        }
};
h.h.filter = function(a, c) {
    a = a.slice();
    c || a.reverse();
    for (var d = [], e = Object.create(null), f = 0, g; g = a[f]; f++)
        if (!g.Vj()) {
            var k = [g.xs ? h.h.Aq : g.type, g.gb, g.Yb].join(" "),
                l = e[k],
                m = l ? l.event : null;
            if (!l) e[k] = {
                event: g,
                index: f
            }, d.push(g);
            else if (g.type == h.h.Kk && l.index == f - 1) m.Bi = g.Bi, m.Ai = g.Ai, m.ah = g.ah, l.index = f;
            else if (g.type == h.h.rk && g.element == m.element && g.name == m.name) m.newValue = g.newValue;
            else if (g.type == h.h.Sk) m.Wd = g.Wd, m.Vd = g.Vd, m.scale = g.scale, m.dm = g.dm;
            else if (g.type != h.h.tk || m.type != h.h.uu) e[k] = {
                event: g,
                index: f
            }, d.push(g)
        } a = d.filter(function(n) {
        return !n.Vj()
    });
    c || a.reverse();
    for (f = 1; g = a[f]; f++) g.type == h.h.rk && "mutation" == g.element && a.unshift(a.splice(f, 1)[0]);
    return a
};
h.h.fC = function() {
    for (var a = 0, c; c = h.h.Bk[a]; a++) c.Na = !1
};
h.h.disable = function() {
    h.h.xr++
};
h.h.enable = function() {
    h.h.xr--
};
h.h.isEnabled = function() {
    return 0 == h.h.xr
};
h.h.Wb = function() {
    return h.h.ox
};
h.h.ta = function(a) {
    h.h.ox = "boolean" == typeof a ? a ? h.g.Xe() : "" : a
};
h.h.Ww = function(a) {
    var c = [];
    a = v(a, !1);
    for (var d = 0, e; e = a[d]; d++) c[d] = e.id;
    return c
};
h.h.ba = function(a) {
    var c = h.h.get(a.type);
    if (!c) throw Error("Unknown event type.");
    c = new c;
    c.ba(a);
    c.Yb = (void 0).id;
    return c
};
h.h.get = function(a) {
    return h.u.Vr(h.u.R.Gb, a)
};
h.h.DJ = function(a) {
    if ((a.type == h.h.Kk || a.type == h.h.wk) && a.Yb) {
        var c = h.qb.Cl(a.Yb),
            d = c.Lc(a.gb);
        if (d) {
            a = h.h.Na;
            try {
                h.h.Na = !1;
                var e = d.getParent();
                if (e && e.isEnabled()) {
                    var f = v(d, !1);
                    c = 0;
                    for (var g; g = f[c]; c++) g.jf(!0)
                } else if ((d.S || d.aa) && !c.bd()) {
                    do d.jf(!1), d = w(d); while (d)
                }
            } finally {
                h.h.Na = a
            }
        }
    }
};
h.h.Abstract = function() {
    this.qd = null;
    this.Yb = void 0;
    this.group = h.h.Wb();
    this.Na = h.h.Na
};
b = h.h.Abstract.prototype;
b.xs = !1;
b.qa = function() {
    var a = {
        type: this.type
    };
    this.group && (a.group = this.group);
    return a
};
b.ba = function(a) {
    this.qd = !1;
    this.group = a.group
};
b.Vj = function() {
    return !1
};
b.run = function() {};

function x(a) {
    if (a.Yb) var c = h.qb.Cl(a.Yb);
    if (!c) throw Error("Workspace is null. Event must have been generated from real Blockly events.");
    return c
};
h.g.object = {};
h.g.object.V = function(a, c) {
    a.v = c.prototype;
    a.prototype = Object.create(c.prototype);
    a.prototype.constructor = a
};
h.g.object.$g = function(a, c) {
    for (var d in c) a[d] = c[d]
};
h.g.object.Bj = function(a, c) {
    for (var d in c) a[d] = null != c[d] && "object" === typeof c[d] ? h.g.object.Bj(a[d] || Object.create(null), c[d]) : c[d];
    return a
};
h.g.object.values = function(a) {
    return Object.values ? Object.values(a) : Object.keys(a).map(function(c) {
        return a[c]
    })
};
h.g.xml = {};
h.g.xml.MA = "https://developers.google.com/blockly/xml";
h.g.xml.document = function() {
    return document
};
h.g.xml.createElement = function(a) {
    return h.g.xml.document().createElementNS(h.g.xml.MA, a)
};
h.g.xml.createTextNode = function(a) {
    return h.g.xml.document().createTextNode(a)
};
h.g.xml.nF = function(a) {
    return (new DOMParser).parseFromString(a, "text/xml")
};
h.g.xml.Gd = function(a) {
    return (new XMLSerializer).serializeToString(a)
};
h.Ha = {
    Me: h.X.Zb,
    pc: h.X.$b,
    Fe: 5
};
h.K = {};
h.K.dz = function(a) {
    var c = y,
        d = h.g.xml.createElement("xml"),
        e = h.K.zF(h.ma.Gq(c));
    e.hasChildNodes() && d.appendChild(e);
    var f = [].concat(c.rp);
    1 < f.length && (c.kf.offset = Math.sin(h.g.Ld.Yt(h.qb.yv)), c.I && (c.kf.offset *= -1), f.sort(c.kf));
    e = 0;
    for (var g; g = f[e]; e++) d.appendChild(g.Qy(a));
    c = c.ub(!0);
    for (e = 0; f = c[e]; e++) d.appendChild(h.K.Oq(f, a));
    return d
};
h.K.zF = function(a) {
    for (var c = h.g.xml.createElement("variables"), d = 0, e; e = a[d]; d++) {
        var f = h.g.xml.createElement("variable");
        f.appendChild(h.g.xml.createTextNode(e.name));
        e.type && f.setAttribute("type", e.type);
        f.id = e.hc();
        c.appendChild(f)
    }
    return c
};
h.K.Oq = function(a, c) {
    if (a.rd() && (a = z(a, !1)[0], !a)) return new DocumentFragment;
    var d;
    a.B.I && (d = a.B.Hl());
    c = h.K.Df(a, c);
    var e = a.Za();
    c.setAttribute("x", Math.round(a.B.I ? d - e.x : e.x));
    c.setAttribute("y", Math.round(e.y));
    return c
};
h.K.NC = function(a) {
    var c = !1;
    a.name && (a.zv ? c = !0 : a.yk && (console.warn("Detected an editable field that was not serializable. Please define SERIALIZABLE property as true on all editable custom fields. Proceeding with serialization."), c = !0));
    return c ? (c = h.g.xml.createElement("field"), c.setAttribute("name", a.name || ""), c.textContent = a.getValue(), c) : null
};
h.K.FB = function(a, c) {
    for (var d = 0, e; e = a.U[d]; d++)
        for (var f = 0, g; g = e.eb[f]; f++)(g = h.K.NC(g)) && c.appendChild(g)
};
h.K.Df = function(a, c) {
    if (a.rd()) return (a = z(a, !1)[0]) ? h.K.Df(a) : new DocumentFragment;
    var d = h.g.xml.createElement(a.La ? "shadow" : "block");
    d.setAttribute("type", a.type);
    c || d.setAttribute("id", a.id);
    if (a.Nd) {
        var e = a.Nd();
        e && (e.hasChildNodes() || e.hasAttributes()) && d.appendChild(e)
    }
    h.K.FB(a, d);
    if (e = a.ie.text) {
        var f = a.ie.size,
            g = a.ie.py,
            k = h.g.xml.createElement("comment");
        k.appendChild(h.g.xml.createTextNode(e));
        k.setAttribute("pinned", g);
        k.setAttribute("h", f.height);
        k.setAttribute("w", f.width);
        d.appendChild(k)
    }
    a.data &&
        (e = h.g.xml.createElement("data"), e.appendChild(h.g.xml.createTextNode(a.data)), d.appendChild(e));
    for (e = 0; f = a.U[e]; e++) {
        var l;
        g = !0;
        if (f.type != h.Ha.Fe) {
            var m = f.connection.ra();
            f.type == h.Ha.Me ? l = h.g.xml.createElement("value") : f.type == h.Ha.pc && (l = h.g.xml.createElement("statement"));
            k = f.connection.Kj();
            !k || m && m.La || l.appendChild(h.K.jw(k, c));
            m && (k = h.K.Df(m, c), k.nodeType == h.g.j.sg.ELEMENT_NODE && (l.appendChild(k), g = !1));
            l.setAttribute("name", f.name);
            g || d.appendChild(l)
        }
    }
    void 0 != a.Rf && a.Rf != a.FD && d.setAttribute("inline",
        a.Rf);
    a.isCollapsed() && d.setAttribute("collapsed", !0);
    a.isEnabled() || d.setAttribute("disabled", !0);
    a.cf() || a.La || d.setAttribute("deletable", !1);
    a.wc() || a.La || d.setAttribute("movable", !1);
    a.Kd() || d.setAttribute("editable", !1);
    if (e = w(a)) k = h.K.Df(e, c), k.nodeType == h.g.j.sg.ELEMENT_NODE && (l = h.g.xml.createElement("next"), l.appendChild(k), d.appendChild(l));
    k = a.ca && a.ca.Kj();
    !k || e && e.La || l.appendChild(h.K.jw(k, c));
    return d
};
h.K.jw = function(a, c) {
    for (var d = a = a.cloneNode(!0), e; d;)
        if (c && "shadow" == d.nodeName && d.removeAttribute("id"), d.firstChild) d = d.firstChild;
        else {
            for (; d && !d.nextSibling;) e = d, d = d.parentNode, e.nodeType == h.g.j.sg.TEXT_NODE && "" == e.data.trim() && d.firstChild != e && h.g.j.removeNode(e);
            d && (e = d, d = d.nextSibling, e.nodeType == h.g.j.sg.TEXT_NODE && "" == e.data.trim() && h.g.j.removeNode(e))
        } return a
};
h.K.Gd = function(a) {
    return h.g.xml.Gd(a).replace(/<(\w+)([^<]*)\/>/g, "<$1$2></$1>")
};
h.K.EJ = function(a) {
    a = h.K.Gd(a).split("<");
    for (var c = "", d = 1; d < a.length; d++) {
        var e = a[d];
        "/" == e[0] && (c = c.substring(2));
        a[d] = c + "<" + e;
        "/" != e[0] && "/>" != e.slice(-2) && (c += "  ")
    }
    a = a.join("\n");
    a = a.replace(/(<(\w+)\b[^>]*>[^\n]*)\n *<\/\2>/g, "$1</$2>");
    return a.replace(/^\n/, "")
};
h.K.ye = function(a) {
    var c = h.g.xml.nF(a);
    if (!c || !c.documentElement || c.getElementsByTagName("parsererror").length) throw Error("textToDom was unable to parse: " + a);
    return c.documentElement
};
h.K.sJ = function(a, c) {
    c.ac(!1);
    c.clear();
    a = h.K.Xh(a, c);
    c.ac(!0);
    return a
};
h.K.Xh = function(a, c) {
    if (a instanceof h.qb) {
        var d = a;
        a = c;
        c = d;
        console.warn("Deprecated call to Blockly.Xml.domToWorkspace, swap the arguments.")
    }
    var e;
    c.I && (e = c.Hl());
    d = [];
    h.g.j.zm();
    var f = h.h.Wb();
    f || h.h.ta(!0);
    c.ac && c.ac(!1);
    var g = !0;
    try {
        for (var k = 0, l; l = a.childNodes[k]; k++) {
            var m = l.nodeName.toLowerCase(),
                n = l;
            if ("block" == m || "shadow" == m && !h.h.Na) {
                var q = h.K.Fj(n, c);
                d.push(q.id);
                var p = n.hasAttribute("x") ? parseInt(n.getAttribute("x"), 10) : 10,
                    u = n.hasAttribute("y") ? parseInt(n.getAttribute("y"), 10) : 10;
                isNaN(p) ||
                    isNaN(u) || q.moveBy(c.I ? e - p : p, u);
                g = !1
            } else {
                if ("shadow" == m) throw TypeError("Shadow block cannot be a top-level block.");
                if ("comment" == m) c.ua ? h.oj ? h.oj.Al(n) : console.warn("Missing require for Blockly.WorkspaceCommentSvg, ignoring workspace comment.") : h.Rv ? h.Rv.Al(n) : console.warn("Missing require for Blockly.WorkspaceComment, ignoring workspace comment.");
                else if ("variables" == m) {
                    if (g) h.K.FC(n, c);
                    else throw Error("'variables' tag must exist once before block and shadow tag elements in the workspace XML, but it was found in another location.");
                    g = !1
                }
            }
        }
    } finally {
        f || h.h.ta(!1), h.g.j.Am()
    }
    c.ac && c.ac(!0);
    h.h.Ga(new(h.h.get(h.h.Qp))(c));
    return d
};
h.K.kJ = function(a, c) {
    var d;
    Object.prototype.hasOwnProperty.call(c, "scale") && (d = ea(c));
    a = h.K.Xh(a, c);
    if (d && d.top != d.bottom) {
        var e = d.bottom;
        var f = c.I ? d.right : d.left;
        var g = Infinity,
            k = -Infinity,
            l = Infinity;
        for (d = 0; d < a.length; d++) {
            var m = c.Lc(a[d]).Za();
            m.y < l && (l = m.y);
            m.x < g && (g = m.x);
            m.x > k && (k = m.x)
        }
        e = e - l + 10;
        f = c.I ? f - k : f - g;
        for (d = 0; d < a.length; d++) c.Lc(a[d]).moveBy(f, e)
    }
    return a
};
h.K.Fj = function(a, c) {
    if (a instanceof h.qb) {
        var d = a;
        a = c;
        c = d;
        console.warn("Deprecated call to Blockly.Xml.domToBlock, swap the arguments.")
    }
    h.h.disable();
    d = c.$h();
    try {
        var e = h.K.Dr(a, c),
            f = v(e, !1);
        if (c.ua) {
            fa(e, !1);
            for (var g = f.length - 1; 0 <= g; g--) f[g].Pj();
            for (g = f.length - 1; 0 <= g; g--) f[g].Ja(!1);
            setTimeout(function() {
                e.Te || fa(e, !0)
            }, 1);
            ha(e);
            ia(c)
        } else
            for (g = f.length - 1; 0 <= g; g--);
    } finally {
        h.h.enable()
    }
    if (h.h.isEnabled()) {
        a = h.ma.Sw(c, d);
        for (g = 0; g < a.length; g++) c = a[g], h.h.Ga(new(h.h.get(h.h.Rk))(c));
        h.h.Ga(new(h.h.get(h.h.wk))(e))
    }
    return e
};
h.K.FC = function(a, c) {
    for (var d = 0, e; e = a.childNodes[d]; d++)
        if (e.nodeType == h.g.j.sg.ELEMENT_NODE) {
            var f = e.getAttribute("type"),
                g = e.getAttribute("id");
            c.je(e.textContent, f, g)
        }
};
h.K.SD = function(a) {
    for (var c = {
            Ux: [],
            Uh: [],
            data: [],
            Hj: [],
            input: [],
            next: []
        }, d = 0, e; e = a.childNodes[d]; d++)
        if (e.nodeType != h.g.j.sg.TEXT_NODE) switch (e.nodeName.toLowerCase()) {
            case "mutation":
                c.Ux.push(e);
                break;
            case "comment":
                if (!h.Comment) {
                    console.warn("Missing require for Blockly.Comment, ignoring block comment.");
                    break
                }
                c.Uh.push(e);
                break;
            case "data":
                c.data.push(e);
                break;
            case "title":
            case "field":
                c.Hj.push(e);
                break;
            case "value":
            case "statement":
                c.input.push(e);
                break;
            case "next":
                c.next.push(e);
                break;
            default:
                console.warn("Ignoring unknown tag: " +
                    e.nodeName)
        }
    return c
};
h.K.KB = function(a, c) {
    for (var d = !1, e = 0, f; f = a[e]; e++) c.Lf && (c.Lf(f), c.Pj && (d = !0));
    return d
};
h.K.GB = function(a, c) {
    for (var d = 0, e; e = a[d]; d++) {
        var f = e.textContent,
            g = "true" == e.getAttribute("pinned"),
            k = parseInt(e.getAttribute("w"), 10);
        e = parseInt(e.getAttribute("h"), 10);
        c.ck(f);
        c.ie.py = g;
        isNaN(k) || isNaN(e) || (c.ie.size = new h.g.Uc(k, e));
        g && c.ZC && !c.cd && setTimeout(function() {
            c.Ed.Jb(!0)
        }, 1)
    }
};
h.K.HB = function(a, c) {
    for (var d = 0, e; e = a[d]; d++) c.data = e.textContent
};
h.K.IB = function(a, c) {
    for (var d = 0, e; e = a[d]; d++) {
        var f = e.getAttribute("name");
        h.K.EC(c, f, e)
    }
};
h.K.Nw = function(a) {
    for (var c = {
            Zk: null,
            $k: null
        }, d = 0, e; e = a.childNodes[d]; d++) e.nodeType == h.g.j.sg.ELEMENT_NODE && ("block" == e.nodeName.toLowerCase() ? c.Zk = e : "shadow" == e.nodeName.toLowerCase() && (c.$k = e));
    return c
};
h.K.JB = function(a, c, d, e) {
    for (var f = 0, g; g = a[f]; f++) {
        var k = g.getAttribute("name"),
            l = ja(d, k);
        if (!l) {
            console.warn("Ignoring non-existent input " + k + " in block " + e);
            break
        }
        g = h.K.Nw(g);
        if (g.Zk) {
            if (!l.connection) throw TypeError("Input connection does not exist.");
            h.K.Dr(g.Zk, c, l.connection, !1)
        }
        g.$k && l.connection.sm(g.$k)
    }
};
h.K.LB = function(a, c, d) {
    for (var e = 0, f; f = a[e]; e++) {
        f = h.K.Nw(f);
        if (f.Zk) {
            if (!d.ca) throw TypeError("Next statement does not exist.");
            if (d.ca.isConnected()) throw TypeError("Next statement is already connected.");
            h.K.Dr(f.Zk, c, d.ca, !0)
        }
        f.$k && d.ca && d.ca.sm(f.$k)
    }
};
h.K.Dr = function(a, c, d, e) {
    var f = a.getAttribute("type");
    if (!f) throw TypeError("Block type unspecified: " + a.outerHTML);
    var g = a.getAttribute("id");
    g = c.Rs(f, g);
    var k = h.K.SD(a),
        l = h.K.KB(k.Ux, g);
    h.K.GB(k.Uh, g);
    h.K.HB(k.data, g);
    if (d)
        if (e)
            if (g.aa) d.connect(g.aa);
            else throw TypeError("Next block does not have previous statement.");
    else if (g.S) d.connect(g.S);
    else if (g.aa) d.connect(g.aa);
    else throw TypeError("Child block does not have output or previous statement.");
    h.K.IB(k.Hj, g);
    h.K.JB(k.input, c, g, f);
    h.K.LB(k.next,
        c, g);
    l && g.Pj();
    (c = a.getAttribute("inline")) && g.Ji("true" == c);
    (c = a.getAttribute("disabled")) && g.jf("true" != c && "disabled" != c);
    if (c = a.getAttribute("deletable")) g.Cw = "true" == c;
    (c = a.getAttribute("movable")) && g.Lt("true" == c);
    (c = a.getAttribute("editable")) && g.Kt("true" == c);
    (c = a.getAttribute("collapsed")) && g.Hi("true" == c);
    if ("shadow" == a.nodeName.toLowerCase()) {
        a = z(g, !1);
        for (c = 0; d = a[c]; c++)
            if (!d.La) throw TypeError("Shadow block not allowed non-shadow child.");
        if (ka(g).length) throw TypeError("Shadow blocks cannot have variable references.");
        g.Ot(!0)
    }
    return g
};
h.K.EC = function(a, c, d) {
    var e = la(a, c);
    e ? e.Al(d) : console.warn("Ignoring non-existent field " + c + " in block " + a.type)
};
h.K.yC = function(a) {
    for (var c = 0, d; d = a.childNodes[c]; c++)
        if ("next" == d.nodeName.toLowerCase()) {
            a.removeChild(d);
            break
        }
};
h.h.Ce = function(a) {
    h.h.Ce.v.constructor.call(this);
    this.gb = (this.qd = "undefined" == typeof a) ? "" : a.id;
    this.Yb = this.qd ? "" : a.B.id
};
h.g.object.V(h.h.Ce, h.h.Abstract);
h.h.Ce.prototype.qa = function() {
    var a = h.h.Ce.v.qa.call(this);
    a.blockId = this.gb;
    return a
};
h.h.Ce.prototype.ba = function(a) {
    h.h.Ce.v.ba.call(this, a);
    this.gb = a.blockId
};
h.h.Ah = function(a, c, d, e, f) {
    h.h.Ez.v.constructor.call(this, a);
    a && (this.element = "undefined" == typeof c ? "" : c, this.name = "undefined" == typeof d ? "" : d, this.oldValue = "undefined" == typeof e ? "" : e, this.newValue = "undefined" == typeof f ? "" : f)
};
h.g.object.V(h.h.Ah, h.h.Ce);
h.h.Ez = h.h.Ah;
b = h.h.Ah.prototype;
b.type = h.h.rk;
b.qa = function() {
    var a = h.h.Ah.v.qa.call(this);
    a.element = this.element;
    this.name && (a.name = this.name);
    a.oldValue = this.oldValue;
    a.newValue = this.newValue;
    return a
};
b.ba = function(a) {
    h.h.Ah.v.ba.call(this, a);
    this.element = a.element;
    this.name = a.name;
    this.oldValue = a.oldValue;
    this.newValue = a.newValue
};
b.Vj = function() {
    return this.oldValue == this.newValue
};
b.run = function(a) {
    var c = x(this).Lc(this.gb);
    if (c) switch (c.te && c.te.Jb(!1), a = a ? this.newValue : this.oldValue, this.element) {
        case "field":
            (c = la(c, this.name)) ? c.setValue(a): console.warn("Can't set non-existent field: " + this.name);
            break;
        case "comment":
            c.ck(a || null);
            break;
        case "collapsed":
            c.Hi(!!a);
            break;
        case "disabled":
            c.jf(!a);
            break;
        case "inline":
            c.Ji(!!a);
            break;
        case "mutation":
            var d = "";
            c.Nd && (d = (d = c.Nd()) && h.K.Gd(d));
            if (c.Lf) {
                var e = h.K.ye(a || "<mutation/>");
                c.Lf(e)
            }
            h.h.Ga(new h.h.Ah(c, "mutation", null, d,
                a));
            break;
        default:
            console.warn("Unknown change type: " + this.element)
    } else console.warn("Can't change non-existent block: " + this.gb)
};
h.h.De = function(a) {
    h.h.De.v.constructor.call(this, a);
    a && (a.La && (this.Na = !1), this.xml = a.B.ua ? h.K.Oq(a) : h.K.Df(a), this.ji = h.h.Ww(a))
};
h.g.object.V(h.h.De, h.h.Ce);
h.h.LF = h.h.De;
h.h.De.prototype.type = h.h.wk;
h.h.De.prototype.qa = function() {
    var a = h.h.De.v.qa.call(this);
    a.xml = h.K.Gd(this.xml);
    a.ids = this.ji;
    this.Na || (a.recordUndo = this.Na);
    return a
};
h.h.De.prototype.ba = function(a) {
    h.h.De.v.ba.call(this, a);
    this.xml = h.K.ye(a.xml);
    this.ji = a.ids;
    void 0 !== a.recordUndo && (this.Na = a.recordUndo)
};
h.h.De.prototype.run = function(a) {
    var c = x(this);
    if (a) a = h.g.xml.createElement("xml"), a.appendChild(this.xml), h.K.Xh(a, c);
    else {
        a = 0;
        for (var d; d = this.ji[a]; a++) {
            var e = c.Lc(d);
            e ? e.H(!1) : d == this.gb && console.warn("Can't uncreate non-existent block: " + d)
        }
    }
};
h.h.Ge = function(a) {
    h.h.Ge.v.constructor.call(this, a);
    if (a) {
        if (a.getParent()) throw Error("Connected blocks cannot be deleted.");
        a.La && (this.Na = !1);
        this.Yj = a.B.ua ? h.K.Oq(a) : h.K.Df(a);
        this.ji = h.h.Ww(a)
    }
};
h.g.object.V(h.h.Ge, h.h.Ce);
h.h.MF = h.h.Ge;
h.h.Ge.prototype.type = h.h.Dh;
h.h.Ge.prototype.qa = function() {
    var a = h.h.Ge.v.qa.call(this);
    a.oldXml = h.K.Gd(this.Yj);
    a.ids = this.ji;
    this.Na || (a.recordUndo = this.Na);
    return a
};
h.h.Ge.prototype.ba = function(a) {
    h.h.Ge.v.ba.call(this, a);
    this.Yj = h.K.ye(a.oldXml);
    this.ji = a.ids;
    void 0 !== a.recordUndo && (this.Na = a.recordUndo)
};
h.h.Ge.prototype.run = function(a) {
    var c = x(this);
    if (a) {
        a = 0;
        for (var d; d = this.ji[a]; a++) {
            var e = c.Lc(d);
            e ? e.H(!1) : d == this.gb && console.warn("Can't delete non-existent block: " + d)
        }
    } else a = h.g.xml.createElement("xml"), a.appendChild(this.Yj), h.K.Xh(a, c)
};
h.h.Jh = function(a) {
    h.h.Jh.v.constructor.call(this, a);
    a && (a.La && (this.Na = !1), a = ma(this), this.by = a.ly, this.Zx = a.Bx, this.Vs = a.xw)
};
h.g.object.V(h.h.Jh, h.h.Ce);
h.h.NF = h.h.Jh;
b = h.h.Jh.prototype;
b.type = h.h.Kk;
b.qa = function() {
    var a = h.h.Jh.v.qa.call(this);
    this.Bi && (a.newParentId = this.Bi);
    this.Ai && (a.newInputName = this.Ai);
    this.ah && (a.newCoordinate = Math.round(this.ah.x) + "," + Math.round(this.ah.y));
    this.Na || (a.recordUndo = this.Na);
    return a
};
b.ba = function(a) {
    h.h.Jh.v.ba.call(this, a);
    this.Bi = a.newParentId;
    this.Ai = a.newInputName;
    if (a.newCoordinate) {
        var c = a.newCoordinate.split(",");
        this.ah = new h.g.T(Number(c[0]), Number(c[1]))
    }
    void 0 !== a.recordUndo && (this.Na = a.recordUndo)
};
b.Ei = function() {
    var a = ma(this);
    this.Bi = a.ly;
    this.Ai = a.Bx;
    this.ah = a.xw
};

function ma(a) {
    var c = x(a).Lc(a.gb);
    a = {};
    var d = c.getParent();
    if (d) {
        if (a.ly = d.id, c = na(d, c)) a.Bx = c.name
    } else a.xw = c.Za();
    return a
}
b.Vj = function() {
    return this.by == this.Bi && this.Zx == this.Ai && h.g.T.Nf(this.Vs, this.ah)
};
b.run = function(a) {
    var c = x(this),
        d = c.Lc(this.gb);
    if (d) {
        var e = a ? this.Bi : this.by,
            f = a ? this.Ai : this.Zx,
            g = a ? this.ah : this.Vs;
        a = null;
        if (e && (a = c.Lc(e), !a)) {
            console.warn("Can't connect to non-existent block: " + e);
            return
        }
        d.getParent() && A(d);
        if (g) f = d.Za(), d.moveBy(g.x - f.x, g.y - f.y);
        else {
            d = d.S || d.aa;
            c = d.type;
            if (f) {
                if (a = ja(a, f)) var k = a.connection
            } else c == h.X.kd && (k = a.ca);
            k ? d.connect(k) : console.warn("Can't connect to non-existent input: " + f)
        }
    } else console.warn("Can't move non-existent block: " + this.gb)
};
h.u.register(h.u.R.Gb, h.h.wk, h.h.De);
h.u.register(h.u.R.Gb, h.h.Dh, h.h.Ge);
h.u.register(h.u.R.Gb, h.h.rk, h.h.Ah);
h.u.register(h.u.R.Gb, h.h.Kk, h.h.Jh);
h.bb = {};
h.bb.zr = 0;
h.bb.co = null;
h.bb.CC = function(a) {
    var c = a.B,
        d = a.oa();
    c.Yc.play("delete");
    a = oa(c, d);
    d = d.cloneNode(!0);
    d.tF = a.x;
    d.uF = a.y;
    d.setAttribute("transform", "translate(" + a.x + "," + a.y + ")");
    t(c).appendChild(d);
    d.$v = d.getBBox();
    h.bb.Iw(d, c.I, new Date, c.scale)
};
h.bb.Iw = function(a, c, d, e) {
    var f = (new Date - d) / 150;
    1 < f ? h.g.j.removeNode(a) : (a.setAttribute("transform", "translate(" + (a.tF + (c ? -1 : 1) * a.$v.width * e / 2 * f) + "," + (a.uF + a.$v.height * e * f) + ") scale(" + (1 - f) * e + ")"), setTimeout(h.bb.Iw, 10, a, c, d, e))
};
h.bb.nC = function(a) {
    var c = a.B,
        d = c.scale;
    c.Yc.play("click");
    if (!(1 > d)) {
        var e = oa(c, a.oa());
        a.S ? (e.x += (a.I ? 3 : -3) * d, e.y += 13 * d) : a.aa && (e.x += (a.I ? -23 : 23) * d, e.y += 3 * d);
        a = h.g.j.J(h.g.D.wu, {
            cx: e.x,
            cy: e.y,
            r: 0,
            fill: "none",
            stroke: "#888",
            "stroke-width": 10
        }, t(c));
        h.bb.rw(a, new Date, d)
    }
};
h.bb.rw = function(a, c, d) {
    var e = (new Date - c) / 150;
    1 < e ? h.g.j.removeNode(a) : (a.setAttribute("r", 25 * e * d), a.style.opacity = 1 - e, h.bb.zr = setTimeout(h.bb.rw, 10, a, c, d))
};
h.bb.BC = function(a) {
    a.B.Yc.play("disconnect");
    if (!(1 > a.B.scale)) {
        var c = r(a).height;
        c = Math.atan(10 / c) / Math.PI * 180;
        a.I || (c *= -1);
        h.bb.Hw(a.oa(), c, new Date)
    }
};
h.bb.Hw = function(a, c, d) {
    var e = (new Date - d) / 200;
    1 < e ? a.xm = "" : (a.xm = "skewX(" + Math.round(Math.sin(e * Math.PI * 3) * (1 - e) * c) + ")", h.bb.co = a, h.bb.zr = setTimeout(h.bb.Hw, 10, a, c, d));
    a.setAttribute("transform", a.Jm + a.xm)
};
h.bb.Ar = function() {
    if (h.bb.co) {
        clearTimeout(h.bb.zr);
        var a = h.bb.co;
        a.xm = "";
        a.setAttribute("transform", a.Jm);
        h.bb.co = null
    }
};
h.h.ee = function(a) {
    h.h.ee.v.constructor.call(this);
    this.qd = "undefined" == typeof a;
    this.Yb = a ? a : "";
    this.Na = !1
};
h.g.object.V(h.h.ee, h.h.Abstract);
h.h.ee.prototype.xs = !0;
h.h.yg = function(a, c, d, e) {
    h.h.yg.v.constructor.call(this, a ? a.B.id : void 0);
    this.gb = a ? a.id : null;
    this.element = "undefined" == typeof c ? "" : c;
    this.oldValue = "undefined" == typeof d ? "" : d;
    this.newValue = "undefined" == typeof e ? "" : e
};
h.g.object.V(h.h.yg, h.h.ee);
h.h.yg.prototype.type = h.h.Aq;
h.h.yg.prototype.qa = function() {
    var a = h.h.yg.v.qa.call(this);
    a.element = this.element;
    void 0 !== this.newValue && (a.newValue = this.newValue);
    this.gb && (a.blockId = this.gb);
    return a
};
h.h.yg.prototype.ba = function(a) {
    h.h.yg.v.ba.call(this, a);
    this.element = a.element;
    this.newValue = a.newValue;
    this.gb = a.blockId
};
h.u.register(h.u.R.Gb, h.h.Aq, h.h.yg);
h.h.fg = function(a, c, d) {
    h.h.fg.v.constructor.call(this, a ? a.B.id : void 0);
    this.gb = a ? a.id : null;
    this.Hx = c;
    this.aw = d
};
h.g.object.V(h.h.fg, h.h.ee);
h.h.fg.prototype.type = h.h.Vm;
h.h.fg.prototype.qa = function() {
    var a = h.h.fg.v.qa.call(this);
    a.isStart = this.Hx;
    a.blockId = this.gb;
    a.blocks = this.aw;
    return a
};
h.h.fg.prototype.ba = function(a) {
    h.h.fg.v.ba.call(this, a);
    this.Hx = a.isStart;
    this.gb = a.blockId;
    this.aw = a.blocks
};
h.u.register(h.u.R.Gb, h.h.Vm, h.h.fg);
h.OG = function() {};
h.Fb = function() {
    this.Eg = Object.create(null);
    this.uj = Object.create(null)
};

function pa(a, c) {
    var d = c.bl.id;
    if (a.Eg[d]) throw Error('Plugin "' + d + '" with capabilities "' + a.Eg[d].Cg + '" already added.');
    a.Eg[d] = c;
    for (var e = [], f = 0; f < c.Cg.length; f++) {
        var g = String(c.Cg[f]).toLowerCase();
        e.push(g);
        void 0 === a.uj[g] ? a.uj[g] = [d] : a.uj[g].push(d)
    }
    a.Eg[d].Cg = e
}

function qa(a, c) {
    var d = a.Eg[c];
    if (d) {
        for (var e = 0; e < d.Cg.length; e++) {
            var f = String(d.Cg[e]).toLowerCase();
            a.uj[f].splice(a.uj[f].indexOf(c), 1)
        }
        delete a.Eg[c]
    }
}

function ra(a, c) {
    var d = h.Fb.Tb.Jp;
    d = String(d).toLowerCase();
    return -1 !== a.Eg[c].Cg.indexOf(d)
}

function sa(a, c) {
    c = String(c).toLowerCase();
    c = a.uj[c];
    if (!c) return [];
    var d = [],
        e = [],
        f = a.Eg;
    c.forEach(function(g) {
        e.push(f[g])
    });
    e.sort(function(g, k) {
        return g.weight - k.weight
    });
    e.forEach(function(g) {
        d.push(g.bl)
    });
    return d
}
h.Fb.Tb = function(a) {
    this.cm = a
};
h.Fb.Tb.prototype.toString = function() {
    return this.cm
};
h.Fb.Tb.wv = new h.Fb.Tb("positionable");
h.Fb.Tb.Mp = new h.Fb.Tb("drag_target");
h.Fb.Tb.Jp = new h.Fb.Tb("delete_area");
h.Fb.Tb.pu = new h.Fb.Tb("autohideable");
h.Ec = function(a) {
    this.rh = h.selected = a;
    this.m = a.B;
    this.Wg = this.ys = null;
    this.yl = ta(this, this.rh);
    this.xc = this.Bb = null;
    this.Ae = !1;
    this.wl = this.os = this.wi = null;
    this.Ln = ua(this)
};
h.Ec.fj = {
    Up: 0,
    vA: 1,
    xv: 2
};
h.Ec.Gu = "The insertion marker manager tried to create a marker but the result is missing %1. If you are using a mutator, make sure your domToMutation method is properly defined.";
h.Ec.prototype.H = function() {
    this.Ln.length = 0;
    h.h.disable();
    try {
        this.yl && this.yl.H(), this.Wg && this.Wg.H()
    } finally {
        h.h.enable()
    }
};
h.Ec.prototype.update = function(a, c) {
    var d = this.Bb && this.xc ? h.Au : h.oc;
    for (var e = null, f = null, g = 0; g < this.Ln.length; g++) {
        var k = this.Ln[g],
            l = k.closest(d, a);
        l.connection && (e = l.connection, f = k, d = l.gp)
    }
    d = {
        closest: e,
        local: f,
        gp: d
    };
    if ((this.Ae = this.Rt(d, c)) || va(this, d, a)) {
        h.h.disable();
        d.closest ? (a = this.Bb != d.closest, c = this.xc != d.local, this.Bb && this.xc && (a || c || this.Ae) && wa(this)) : wa(this);
        this.xc = this.Bb = this.wi = null;
        if (!this.Ae && (a = d.closest, c = d.local, a))
            if (a == this.Bb || a.$().rd()) console.log("Trying to connect to an insertion marker");
            else {
                this.Bb = a;
                this.xc = c;
                a = this.Bb;
                c = this.xc;
                d = this.rh;
                c.type == h.X.Tc || c.type == h.X.kd ? ((e = !a.isConnected()) || (e = a.ra(), e = !!h.va.Vw(d, c.type === h.X.Tc ? e.S : e.aa)), c = e ? h.Ec.fj.Up : h.Ec.fj.xv) : c = h.Ec.fj.Up;
                switch (c) {
                    case h.Ec.fj.vA:
                        this.os = this.Bb.$();
                        break;
                    case h.Ec.fj.Up:
                        e = this.xc;
                        c = this.Bb;
                        d = this.ys && e == this.ys ? this.Wg : this.yl;
                        e = d.Zr(e.$(), e);
                        if (e == this.wi) throw Error("Made it to showInsertionMarker_ even though the marker isn't changing");
                        d.Ja();
                        d.ua = !0;
                        d.oa().setAttribute("visibility", "visible");
                        e &&
                            c && (e.type != h.X.$b && e.type != h.X.Zb || d.moveBy(c.x - e.x, c.y - e.y));
                        c && e.connect(c);
                        this.wi = e;
                        break;
                    case h.Ec.fj.xv:
                        this.wl = this.Bb.ra(), B(this.wl.wb, "blocklyReplaceable", !0)
                }
                a && (d = a.L.B.mb.ga(), c = xa(d, a), a.type == h.X.Zb || a.type == h.X.Tc ? (d = d.lj, c = h.g.A.moveBy(0, -d) + h.g.A.Y("v", d) + c.Qd + h.g.A.Y("v", d)) : (d = d.Nk - d.pb, c = h.g.A.moveBy(-d, 0) + h.g.A.Y("h", d) + c.hh + h.g.A.Y("h", d)), d = a.L.Za(), h.va.xx = h.g.j.J(h.g.D.Je, {
                    "class": "blocklyHighlightedConnectionPath",
                    d: c,
                    transform: "translate(" + (a.x - d.x) + "," + (a.y - d.y) + ")" +
                        (a.L.I ? " scale(-1 1)" : "")
                }, a.L.oa()))
            } h.h.enable()
    }
};

function ta(a, c) {
    var d = c.type;
    h.h.disable();
    try {
        var e = a.m.Rs(d);
        e.Gy(!0);
        if (c.Nd) {
            var f = c.Nd();
            f && e.Lf(f)
        }
        for (a = 0; a < c.U.length; a++) {
            var g = c.U[a];
            if (g.name != h.kb.$m) {
                var k = e.U[a];
                if (!k) throw Error(h.Ec.Gu.replace("%1", "an input"));
                for (d = 0; d < g.eb.length; d++) {
                    var l = g.eb[d],
                        m = k.eb[d];
                    if (!m) throw Error(h.Ec.Gu.replace("%1", "a field"));
                    m.setValue(l.getValue())
                }
            }
        }
        e.Hi(c.isCollapsed());
        e.Ji(ya(c));
        e.Pj();
        e.oa().setAttribute("visibility", "hidden")
    } finally {
        h.h.enable()
    }
    return e
}

function ua(a) {
    var c = a.rh.ne(!1),
        d = a.rh.Io(!0);
    if (d && d != a.rh.ca) {
        c.push(d);
        a.ys = d;
        if (a.Wg) {
            h.h.disable();
            try {
                a.Wg.H()
            } finally {
                h.h.enable()
            }
        }
        a.Wg = ta(a, d.$())
    }
    return c
}

function va(a, c, d) {
    var e = c.local,
        f = c.closest;
    c = c.gp;
    if (e && f) {
        if (a.xc && a.Bb) {
            if (a.Bb == f && a.xc == e) return !1;
            e = a.xc.x + d.x - a.Bb.x;
            a = a.xc.y + d.y - a.Bb.y;
            a = Math.sqrt(e * e + a * a);
            return !(f && c > a - h.zz)
        }
        if (a.xc || a.Bb) console.error("Only one of localConnection_ and closestConnection_ was set.");
        else return !0
    } else return !(!a.xc || !a.Bb);
    console.error("Returning true from shouldUpdatePreviews, but it's not clear why.");
    return !0
}
h.Ec.prototype.Rt = function(a, c) {
    return c && ra(this.m.Hf, c.id) ? za(c, this.rh, a && !!a.closest) : !1
};

function wa(a) {
    a.Bb && a.Bb.ra() && (h.g.j.removeNode(h.va.xx), delete h.va.xx);
    if (a.wl) B(a.wl.wb, "blocklyReplaceable", !1), a.wl = null;
    else if (a.os) a.os = null;
    else if (a.wi)
        if (a.wi) {
            var c = a.wi,
                d = c.$(),
                e = d.ca,
                f = d.aa,
                g = d.S;
            g = c.type == h.X.Zb && !(g && g.xa);
            !(c != e || f && f.xa) || g ? A(c.ra(), !1) : c.type == h.X.$b && c != e ? (e = c.xa, A(e.$(), !1), f = f ? f.xa : null, A(d, !0), f && f.connect(e)) : A(d, !0);
            if (c.xa) throw Error("markerConnection_ still connected at the end of disconnectInsertionMarker");
            a.wi = null;
            (a = d.oa()) && a.setAttribute("visibility",
                "hidden")
        } else console.log("No insertion marker connection to disconnect")
}
h.Ec.prototype.Ij = function() {
    var a = [];
    this.yl && a.push(this.yl);
    this.Wg && a.push(this.Wg);
    return a
};
h.pk = function(a, c) {
    this.lb = a;
    this.m = c;
    this.Ve = new h.Ec(this.lb);
    this.fc = null;
    this.Ae = !1;
    this.lf = this.lb.Za();
    this.jo = h.pk.CD(a)
};
h.pk.prototype.H = function() {
    this.jo.length = 0;
    this.Ve && this.Ve.H()
};
h.pk.CD = function(a) {
    var c = [];
    a = v(a, !1);
    for (var d = 0, e; e = a[d]; d++) {
        e = Aa(e);
        for (var f = 0; f < e.length; f++) {
            var g = {
                location: e[f].MJ(),
                icon: e[f]
            };
            c.push(g)
        }
    }
    return c
};
b = h.pk.prototype;
b.ym = function(a, c) {
    h.h.Wb() || h.h.ta(!0);
    var d = new(h.h.get(h.h.Vm))(this.lb, !0, v(this.lb, !1));
    h.h.Ga(d);
    this.m.Eo && Ba(this.lb);
    h.g.j.zm();
    this.m.ac(!1);
    h.bb.Ar();
    if (this.lb.getParent() || c && this.lb.ca && this.lb.ca.ra()) A(this.lb, c), a = this.Zj(a), a = h.g.T.sum(this.lf, a), this.lb.translate(a.x, a.y), h.bb.BC(this.lb), a = this.Ve, a.Ln = ua(a);
    this.lb.mh(!0);
    a = this.lb;
    a.Om && (c = a.Za(), a.oa().removeAttribute("transform"), a.B.md.Oi(c.x, c.y), (c = a.oa()) && Ca(a.B.md, c))
};
b.Mf = function(a, c) {
    c = this.Zj(c);
    var d = h.g.T.sum(this.lf, c);
    this.lb.Qs(d);
    for (d = 0; d < this.jo.length; d++) {
        var e = this.jo[d];
        e.icon.uK(h.g.T.sum(e.location, c))
    }
    d = this.fc;
    this.fc = Da(this.m, a);
    this.Ve.update(c, this.fc);
    a = this.Ae;
    this.Ae = this.Ve.Ae;
    a != this.Ae && this.lb.Jt(this.Ae);
    this.fc !== d && d && d.Ys();
    this.fc && this.fc.Zs()
};
b.ul = function(a, c) {
    this.Mf(a, c);
    this.jo = [];
    a = new(h.h.get(h.h.Vm))(this.lb, !1, v(this.lb, !1));
    h.h.Ga(a);
    h.g.j.Am();
    h.bb.Ar();
    c = this.Zj(c);
    a = h.g.T.sum(this.lf, c);
    var d = this.lb;
    d.Om && (d.translate(a.x, a.y), d.B.md.Pn(d.B.xb));
    this.fc && this.fc.$s();
    this.Ae ? (this.xl(), this.lb.H(!1, !0), h.Gj = [], a = !0) : a = !1;
    a || (this.lb.mh(!1), c ? (Ea(this.lb, c.x, c.y), this.xl(), this.Ve.Bb ? (c = this.Ve, c.Bb && (h.h.disable(), wa(c), h.h.enable(), c.xc.connect(c.Bb), c.rh.ua && (h.bb.nC((Fa(c.xc) ? c.Bb : c.xc).$()), Ba(c.rh.qe())))) : this.lb.Ja(),
        Ga(this.lb)) : h.Sq(this.lb.B, this.m.dd.ci(!0), this.lb));
    this.m.ac(!0);
    h.h.ta(!1)
};
b.xl = function() {
    var a = new(h.h.get(h.h.yh))(this.lb);
    a.Vs = this.lf;
    a.Ei();
    h.h.Ga(a)
};
b.Zj = function(a) {
    a = new h.g.T(a.x / this.m.scale, a.y / this.m.scale);
    this.m.Eo && a.scale(1 / this.m.options.ed.scale);
    return a
};
b.Ij = function() {
    return this.Ve && this.Ve.Ij ? this.Ve.Ij() : []
};
h.u.register(h.u.R.su, h.u.Zi, h.pk);
h.UG = function() {};
h.WG = function() {};
h.ZG = function() {};
h.QG = function() {};
h.g.xH = function() {};
h.uq = function(a, c, d, e, f) {
    this.m = a;
    c = void 0 === c ? !0 : c;
    d = void 0 === d ? !0 : d;
    var g = c && d;
    c && (this.ib = new h.Ka(a, !0, g, e, f));
    d && (this.Ua = new h.Ka(a, !1, g, e, f));
    g && (this.il = h.g.j.J(h.g.D.Mb, {
        height: h.Ka.jc,
        width: h.Ka.jc,
        "class": "blocklyScrollbarBackground"
    }, null), h.g.j.Qj(this.il, a.$f));
    this.Wa = null
};
b = h.uq.prototype;
b.H = function() {
    h.g.j.removeNode(this.il);
    this.Wa = this.m = this.il = null;
    this.ib && (this.ib.H(), this.ib = null);
    this.Ua && (this.Ua.H(), this.Ua = null)
};
b.resize = function() {
    var a = this.m.oe();
    if (a) {
        var c = !1,
            d = !1;
        this.Wa && this.Wa.Bc == a.Bc && this.Wa.Qc == a.Qc && this.Wa.Xc == a.Xc && this.Wa.Ic == a.Ic ? (this.Wa && this.Wa.scrollWidth == a.scrollWidth && this.Wa.Vd == a.Vd && this.Wa.scrollLeft == a.scrollLeft || (c = !0), this.Wa && this.Wa.scrollHeight == a.scrollHeight && this.Wa.Wd == a.Wd && this.Wa.scrollTop == a.scrollTop || (d = !0)) : d = c = !0;
        if (c || d) {
            try {
                h.h.disable(), this.ib && c && this.ib.resize(a), this.Ua && d && this.Ua.resize(a)
            } finally {
                h.h.enable()
            }
            Ha(this.m)
        }
        this.ib && this.Ua && (this.Wa &&
            this.Wa.Bc == a.Bc && this.Wa.Ic == a.Ic || this.il.setAttribute("x", this.Ua.position.x), this.Wa && this.Wa.Qc == a.Qc && this.Wa.Xc == a.Xc || this.il.setAttribute("y", this.ib.position.y));
        this.Wa = a
    }
};
b.jp = function(a, c) {
    this.ib && this.ib.jp(a, c);
    this.Ua && this.Ua.jp(a, c)
};
b.set = function(a, c, d) {
    this.ib && this.ib.set(a, !1);
    this.Ua && this.Ua.set(c, !1);
    if (d || void 0 === d) a = {}, this.ib && (a.x = Ia(this.ib)), this.Ua && (a.y = Ia(this.Ua)), this.m.rm(a)
};
b.Ii = function(a) {
    this.ib && this.ib.Ii(a);
    this.Ua && this.Ua.Ii(a)
};
b.isVisible = function() {
    var a = !1;
    this.ib && (a = this.ib.isVisible());
    this.Ua && (a = a || this.Ua.isVisible());
    return a
};
h.Ka = function(a, c, d, e, f) {
    this.m = a;
    this.gh = d || !1;
    this.ii = c;
    this.ui = void 0 !== f ? f : h.Ka.Iz;
    this.ratio = this.Wa = null;
    this.jl(e);
    this.position = new h.g.T(0, 0);
    a = h.Ka.jc;
    c ? (this.kc.setAttribute("height", a), this.ff.setAttribute("height", a), this.vd.setAttribute("height", a - 5), this.vd.setAttribute("y", 2.5), this.Ko = "width", this.qy = "x") : (this.kc.setAttribute("width", a), this.ff.setAttribute("width", a), this.vd.setAttribute("width", a - 5), this.vd.setAttribute("x", 2.5), this.Ko = "height", this.qy = "y");
    this.iy = h.N.Aa(this.kc,
        "mousedown", this, this.hE);
    this.jy = h.N.Aa(this.vd, "mousedown", this, this.iE)
};
b = h.Ka.prototype;
b.gt = new h.g.T(0, 0);
b.My = 0;
b.Sd = 0;
b.Og = 0;
b.Il = 0;
b.Uf = !0;
b.Vh = !0;
h.Ka.jc = 15;
h.Touch.Hv && (h.Ka.jc = 25);
h.Ka.Iz = .5;
h.Ka.UD = function(a, c) {
    return a.Bc == c.Bc && a.Qc == c.Qc && a.Vd == c.Vd && a.Wd == c.Wd && a.Xc == c.Xc && a.Ic == c.Ic && a.scrollWidth == c.scrollWidth && a.scrollHeight == c.scrollHeight && a.scrollLeft == c.scrollLeft && a.scrollTop == c.scrollTop
};
b = h.Ka.prototype;
b.H = function() {
    Ja();
    h.N.yb(this.iy);
    this.iy = null;
    h.N.yb(this.jy);
    this.jy = null;
    h.g.j.removeNode(this.ff);
    this.kc = this.O = this.ff = null;
    this.vd && (this.m.mc.unsubscribe(this.vd), this.vd = null);
    this.m = null
};

function Ka(a, c) {
    return c = 0 >= c || isNaN(c) ? 0 : Math.min(c, a.Sd)
}

function La(a, c) {
    a.Og = c;
    a.vd.setAttribute(a.Ko, a.Og)
}

function Ma(a, c) {
    return c = 0 >= c || isNaN(c) ? 0 : Math.min(c, a.Sd - a.Og)
}

function Na(a, c) {
    a.Il = c;
    a.vd.setAttribute(a.qy, a.Il)
}

function Oa(a, c) {
    a.Sd = c;
    a.ff.setAttribute(a.Ko, a.Sd);
    a.kc.setAttribute(a.Ko, a.Sd)
}
b.setPosition = function(a, c) {
    this.position.x = a;
    this.position.y = c;
    h.g.j.qm(this.ff, "translate(" + (this.position.x + this.gt.x) + "px," + (this.position.y + this.gt.y) + "px)")
};
b.resize = function(a) {
    if (!a && (a = this.m.oe(), !a)) return;
    if (!this.Wa || !h.Ka.UD(a, this.Wa)) {
        if (this.ii) {
            var c = a;
            Pa(this, c) ? Qa(this, c) : Ra(this, c)
        } else c = a, Pa(this, c) ? Sa(this, c) : Ta(this, c);
        this.Wa = a;
        Ua(this)
    }
};

function Pa(a, c) {
    return a.Wa ? a.Wa.Bc !== c.Bc || a.Wa.Qc !== c.Qc || a.Wa.Ic !== c.Ic || a.Wa.Xc !== c.Xc : !0
}

function Qa(a, c) {
    var d = c.Bc - 2 * a.ui;
    a.gh && (d -= h.Ka.jc);
    Oa(a, Math.max(0, d));
    d = c.Ic + a.ui;
    a.gh && a.m.I && (d += h.Ka.jc);
    a.setPosition(d, c.Xc + c.Qc - h.Ka.jc - a.ui);
    Ra(a, c)
}

function Ra(a, c) {
    if (c.Bc >= c.scrollWidth) La(a, a.Sd), Na(a, 0), a.gh || a.Jb(!1);
    else {
        a.gh || a.Jb(!0);
        var d = a.Sd * c.Bc / c.scrollWidth;
        d = Ka(a, d);
        La(a, d);
        d = c.scrollWidth - c.Bc;
        var e = a.Sd - a.Og;
        c = (c.Vd - c.scrollLeft) / d * e;
        c = Ma(a, c);
        Na(a, c);
        a.ratio = e / d
    }
}

function Sa(a, c) {
    var d = c.Qc - 2 * a.ui;
    a.gh && (d -= h.Ka.jc);
    Oa(a, Math.max(0, d));
    a.setPosition(a.m.I ? c.Ic + a.ui : c.Ic + c.Bc - h.Ka.jc - a.ui, c.Xc + a.ui);
    Ta(a, c)
}

function Ta(a, c) {
    if (c.Qc >= c.scrollHeight) La(a, a.Sd), Na(a, 0), a.gh || a.Jb(!1);
    else {
        a.gh || a.Jb(!0);
        var d = a.Sd * c.Qc / c.scrollHeight;
        d = Ka(a, d);
        La(a, d);
        d = c.scrollHeight - c.Qc;
        var e = a.Sd - a.Og;
        c = (c.Wd - c.scrollTop) / d * e;
        c = Ma(a, c);
        Na(a, c);
        a.ratio = e / d
    }
}
b.jl = function(a) {
    var c = "blocklyScrollbar" + (this.ii ? "Horizontal" : "Vertical");
    a && (c += " " + a);
    this.ff = h.g.j.J(h.g.D.jj, {
        "class": c
    }, null);
    this.O = h.g.j.J(h.g.D.Sc, {}, this.ff);
    this.kc = h.g.j.J(h.g.D.Mb, {
        "class": "blocklyScrollbarBackground"
    }, this.O);
    a = Math.floor((h.Ka.jc - 5) / 2);
    this.vd = h.g.j.J(h.g.D.Mb, {
        "class": "blocklyScrollbarHandle",
        rx: a,
        ry: a
    }, this.O);
    this.m.mc.subscribe(this.vd, "scrollbarColour", "fill");
    this.m.mc.subscribe(this.vd, "scrollbarOpacity", "fill-opacity");
    h.g.j.Qj(this.ff, t(this.m))
};
b.isVisible = function() {
    return this.Uf
};
b.Ii = function(a) {
    var c = a != this.Vh;
    this.Vh = a;
    c && this.Lm()
};
b.Jb = function(a) {
    var c = a != this.isVisible();
    if (this.gh) throw Error("Unable to toggle visibility of paired scrollbars.");
    this.Uf = a;
    c && this.Lm()
};
b.Lm = function() {
    this.Vh && this.isVisible() ? this.ff.setAttribute("display", "block") : this.ff.setAttribute("display", "none")
};
b.hE = function(a) {
    ba(this.m);
    h.Touch.Qn();
    Ja();
    if (h.g.Tl(a)) a.stopPropagation();
    else {
        var c = h.g.bm(a, t(this.m), Va(this.m));
        c = this.ii ? c.x : c.y;
        var d = h.g.Fl(this.vd);
        d = this.ii ? d.x : d.y;
        var e = this.Il,
            f = .95 * this.Og;
        c <= d ? e -= f : c >= d + this.Og && (e += f);
        Na(this, Ma(this, e));
        Ua(this);
        a.stopPropagation();
        a.preventDefault()
    }
};
b.iE = function(a) {
    ba(this.m);
    Ja();
    h.g.Tl(a) ? a.stopPropagation() : (this.hF = this.Il, Wa(this.m), this.My = this.ii ? a.clientX : a.clientY, h.Ka.eh = h.N.Aa(document, "mouseup", this, this.mE), h.Ka.dh = h.N.Aa(document, "mousemove", this, this.jE), a.stopPropagation(), a.preventDefault())
};
b.jE = function(a) {
    Na(this, Ma(this, this.hF + ((this.ii ? a.clientX : a.clientY) - this.My)));
    Ua(this)
};
b.mE = function() {
    Xa(this.m);
    h.Touch.Qn();
    Ja()
};

function Ja() {
    h.ic(!0);
    h.Ka.eh && (h.N.yb(h.Ka.eh), h.Ka.eh = null);
    h.Ka.dh && (h.N.yb(h.Ka.dh), h.Ka.dh = null)
}

function Ia(a) {
    a = a.Il / (a.Sd - a.Og);
    isNaN(a) && (a = 0);
    return a
}

function Ua(a) {
    var c = Ia(a),
        d = {};
    a.ii ? d.x = c : d.y = c;
    a.m.rm(d)
}
b.set = function(a, c) {
    Na(this, Ma(this, a * this.ratio));
    (c || void 0 === c) && Ua(this)
};
b.jp = function(a, c) {
    this.gt = new h.g.T(a, c)
};
h.KG = function() {};
h.LG = function() {};
h.MG = function() {};
h.aH = function() {};
h.g.Dj = {};
h.g.Dj.warn = function(a, c, d, e) {
    a = a + " was deprecated on " + c + " and will be deleted on " + d + ".";
    e && (a += "\nUse " + e + " instead.");
    console.warn(a)
};
h.va = function(a, c) {
    this.L = a;
    this.type = c
};
h.va.Xm = 0;
h.va.cB = 1;
h.va.fB = 2;
h.va.eB = 3;
h.va.$A = 4;
h.va.aB = 5;
h.va.dB = 6;
h.va.bB = 7;
b = h.va.prototype;
b.xa = null;
b.Te = !1;
b.vj = null;
b.mp = null;
b.x = 0;
b.y = 0;
b.Un = function(a) {
    var c = this.$(),
        d = a.$();
    a.isConnected() && a.disconnect();
    if (this.isConnected()) {
        var e = this.Kj(!0);
        this.mp = null;
        var f = this.ra();
        if (f.La) f.H(!1);
        else {
            this.disconnect();
            var g = f
        }
        this.mp = e
    }
    var k;
    h.h.isEnabled() && (k = new(h.h.get(h.h.yh))(d));
    h.va.mC(this, a);
    d.kp(c);
    k && (k.Ei(), h.h.Ga(k));
    g && (a = this.type === h.X.Zb ? g.S : g.aa, (d = h.va.Vw(d, a)) ? a.connect(d) : a.at(this))
};
b.H = function() {
    if (this.isConnected()) {
        this.sm(null);
        var a = this.ra();
        a && A(a)
    }
    this.Te = !0
};
b.$ = function() {
    return this.L
};

function Fa(a) {
    return a.type == h.X.Zb || a.type == h.X.$b
}
b.isConnected = function() {
    return !!this.xa
};
b.Xq = function(a) {
    h.g.Dj.warn("Connection.prototype.canConnectWithReason", "July 2020", "July 2021", "the workspace's connection checker");
    return this.L.B.If.Xq(this, a, !1)
};
b.at = function() {};
b.connect = function(a) {
    if (this.xa != a && Ya(this.L.B.If, this, a, !1)) {
        var c = h.h.Wb();
        c || h.h.ta(!0);
        Fa(this) ? this.Un(a) : a.Un(this);
        c || h.h.ta(!1)
    }
};
h.va.mC = function(a, c) {
    if (!a || !c) throw Error("Cannot connect null connections.");
    a.xa = c;
    c.xa = a
};
h.va.jD = function(a, c) {
    var d = null;
    c = c.S;
    for (var e = c.L.B.If, f = 0, g; g = a.U[f]; f++)
        if ((g = g.connection) && Ya(e, c, g, !1)) {
            if (d) return null;
            d = g
        } return d
};
h.va.$C = function(a, c) {
    for (var d; d = h.va.jD(a, c);)
        if (a = d.ra(), !a || a.La) return d;
    return null
};
h.va.Vw = function(a, c) {
    if (c.type === h.X.Tc) return h.va.$C(a, c.$());
    a = a.Io(!0);
    var d = c.L.B.If;
    return a && Ya(d, c, a, !1) ? a : null
};
b = h.va.prototype;
b.disconnect = function() {
    var a = this.xa;
    if (!a) throw Error("Source connection not connected.");
    if (a.xa != this) throw Error("Target connection not connected to source connection.");
    if (Fa(this)) {
        var c = this.L;
        var d = a.$();
        a = this
    } else c = a.$(), d = this.L;
    var e = h.h.Wb();
    e || h.h.ta(!0);
    this.yr(c, d);
    d.La || a.om();
    e || h.h.ta(!1)
};
b.yr = function(a, c) {
    var d;
    h.h.isEnabled() && (d = new(h.h.get(h.h.yh))(c));
    this.xa = this.xa.xa = null;
    c.kp(null);
    d && (d.Ei(), h.h.Ga(d))
};
b.om = function() {
    var a = this.$(),
        c = this.Kj();
    if (a.B && c)
        if (a = h.K.Fj(c, a.B), a.S) this.connect(a.S);
        else if (a.aa) this.connect(a.aa);
    else throw Error("Child block does not have output or previous statement.");
};
b.ra = function() {
    return this.isConnected() ? this.xa.$() : null
};
b.gy = function() {
    !this.isConnected() || this.xa && Ya(this.L.B.If, this, this.xa, !1) || A(Fa(this) ? this.ra() : this.L)
};
b.bk = function(a) {
    a ? (Array.isArray(a) || (a = [a]), this.vj = a, this.gy()) : this.vj = null
};
b.sm = function(a) {
    this.mp = a;
    a = this.ra();
    a ? a.La && (a.H(!1), this.om()) : this.om()
};
b.Kj = function(a) {
    return a && this.ra().La ? h.K.Df(this.ra()) : this.mp
};
b.Vx = function() {
    return []
};
b.Ye = function() {
    for (var a = null, c = this.L.U, d = 0; d < c.length; d++)
        if (c[d].connection === this) {
            a = c[d];
            break
        } return a
};
b.toString = function() {
    var a = this.L;
    if (!a) return "Orphan Connection";
    if (a.S == this) var c = "Output Connection of ";
    else if (a.aa == this) c = "Previous Connection of ";
    else if (a.ca == this) c = "Next Connection of ";
    else {
        c = null;
        for (var d = 0, e; e = a.U[d]; d++)
            if (e.connection == this) {
                c = e;
                break
            } if (c) c = 'Input "' + c.name + '" connection on ';
        else return console.warn("Connection not actually connected to sourceBlock_"), "Orphan Connection"
    }
    d = a.type ? '"' + a.type + '" block' : "Block";
    a.id && (d += ' (id="' + a.id + '")');
    return c + d
};
h.TG = function() {};
h.Du = function() {};

function Ya(a, c, d, e, f) {
    return a.Xq(c, d, e, f) == h.va.Xm
}
h.Du.prototype.Xq = function(a, c, d, e) {
    if (a && c) {
        if (Fa(a)) {
            var f = a.$();
            var g = c.$()
        } else g = a.$(), f = c.$();
        f = f == g ? h.va.cB : c.type != h.ej[a.type] ? h.va.fB : f.B !== g.B ? h.va.aB : f.La && !g.La ? h.va.dB : h.va.Xm
    } else f = h.va.eB;
    if (f != h.va.Xm) a = f;
    else {
        a: if (f = a.vj, g = c.vj, f && g) {
            for (var k = 0; k < f.length; k++)
                if (-1 != g.indexOf(f[k])) {
                    f = !0;
                    break a
                } f = !1
        } else f = !0;a = f ? d && !Za(a, c, e || 0) ? h.va.bB : h.va.Xm : h.va.$A
    }
    return a
};

function Za(a, c, d) {
    if ($a(a, c) > d || c.$().rd()) return !1;
    switch (c.type) {
        case h.X.kd:
            return a.xa || -1 != h.Gj.indexOf(c) ? a = !1 : c.xa ? (a = c.ra(), a = a.rd() ? !(a.aa && a.aa.ra()) : !1) : a = !0, a;
        case h.X.Tc:
            if (c.isConnected() && !c.ra().rd() || a.isConnected()) return !1;
            break;
        case h.X.Zb:
            if (c.isConnected() && !c.ra().wc() && !c.ra().La) return !1;
            break;
        case h.X.$b:
            if (c.isConnected() && !a.$().ca && !c.ra().La && c.ra().ca) return !1;
            break;
        default:
            return !1
    }
    return -1 != h.Gj.indexOf(c) ? !1 : !0
}
h.u.register(h.u.R.Bu, h.u.Zi, h.Du);
h.Nh = function(a, c, d, e) {
    this.name = a;
    this.Ag = c || Object.create(null);
    this.Yq = d || Object.create(null);
    this.mw = e || Object.create(null);
    this.fontStyle = Object.create(null);
    this.Ut = null;
    h.u.register(h.u.R.vq, a, this)
};
h.Nh.prototype.me = function() {
    return this.name + "-theme"
};

function ab(a, c) {
    return (c = a.mw[c]) && "string" == typeof c && ab(a, c) ? ab(a, c) : c ? String(c) : null
}
h.Nh.xC = function(a, c) {
    var d = new h.Nh(a),
        e = c.base;
    e && ("string" == typeof e && (e = h.u.bs(h.u.R.vq, e)), e instanceof h.Nh && (h.g.object.Bj(d, e), d.name = a));
    h.g.object.Bj(d.Ag, c.blockStyles);
    h.g.object.Bj(d.Yq, c.categoryStyles);
    h.g.object.Bj(d.mw, c.componentStyles);
    h.g.object.Bj(d.fontStyle, c.fontStyle);
    null != c.startHats && (d.Ut = c.startHats);
    return d
};
h.xf = {};
h.xf.gg = {};
h.xf.gg.wC = {
    colour_blocks: {
        colourPrimary: "20"
    },
    list_blocks: {
        colourPrimary: "260"
    },
    logic_blocks: {
        colourPrimary: "210"
    },
    loop_blocks: {
        colourPrimary: "120"
    },
    math_blocks: {
        colourPrimary: "230"
    },
    procedure_blocks: {
        colourPrimary: "290"
    },
    text_blocks: {
        colourPrimary: "160"
    },
    variable_blocks: {
        colourPrimary: "330"
    },
    variable_dynamic_blocks: {
        colourPrimary: "310"
    },
    hat_blocks: {
        colourPrimary: "330",
        hat: "cap"
    }
};
h.xf.gg.Yq = {
    colour_category: {
        colour: "20"
    },
    list_category: {
        colour: "260"
    },
    logic_category: {
        colour: "210"
    },
    loop_category: {
        colour: "120"
    },
    math_category: {
        colour: "230"
    },
    procedure_category: {
        colour: "290"
    },
    text_category: {
        colour: "160"
    },
    variable_category: {
        colour: "330"
    },
    variable_dynamic_category: {
        colour: "310"
    }
};
h.xf.gg = new h.Nh("classic", h.xf.gg.wC, h.xf.gg.Yq);
h.g.Gk = {};
h.g.Gk.dE = 0;
h.g.Gk.$w = function() {
    return "blockly-" + (h.g.Gk.dE++).toString(36)
};
h.g.W = {};
h.g.W.Fp = "categoryToolbox";
h.g.W.Nu = "flyoutToolbox";
h.g.W.Pa = {
    ce: 0,
    eg: 1,
    Hb: 2,
    Gc: 3
};
h.g.W.ww = function(a) {
    if (!a) return null;
    if (a instanceof Element || "string" == typeof a) a = h.g.W.mt(a), a = h.g.W.pC(a);
    h.g.W.xF(a);
    return a
};
h.g.W.xF = function(a) {
    var c = a.kind;
    a = a.contents;
    if (c && c != h.g.W.Nu && c != h.g.W.Fp) throw Error("Invalid toolbox kind " + c + ". Please supply either " + h.g.W.Nu + " or " + h.g.W.Fp);
    if (!a) throw Error("Toolbox must have a contents attribute.");
};
h.g.W.vw = function(a) {
    return a ? a.contents ? a.contents : Array.isArray(a) && 0 < a.length && !a[0].nodeType ? a : h.g.W.ku(a) : []
};
h.g.W.Jl = function(a) {
    if (!a) return !1;
    var c = a.kind;
    return c ? c == h.g.W.Fp : !!a.contents.filter(function(d) {
        return "CATEGORY" == d.kind.toUpperCase()
    }).length
};
h.g.W.TJ = function(a) {
    return a && a.contents ? !!a.contents.filter(function(c) {
        return "CATEGORY" == c.kind.toUpperCase()
    }).length : !1
};
h.g.W.pC = function(a) {
    var c = {
        contents: h.g.W.ku(a)
    };
    a instanceof Node && h.g.W.Vv(a, c);
    return c
};
h.g.W.ku = function(a) {
    var c = [],
        d = a.childNodes;
    d || (d = a);
    a = 0;
    for (var e; e = d[a]; a++)
        if (e.tagName) {
            var f = {},
                g = e.tagName.toUpperCase();
            f.kind = g;
            "BLOCK" == g ? f.blockxml = e : e.childNodes && 0 < e.childNodes.length && (f.contents = h.g.W.ku(e));
            h.g.W.Vv(e, f);
            c.push(f)
        } return c
};
h.g.W.Vv = function(a, c) {
    for (var d = 0; d < a.attributes.length; d++) {
        var e = a.attributes[d]; - 1 < e.nodeName.indexOf("css-") ? (c.cssconfig = c.cssconfig || {}, c.cssconfig[e.nodeName.replace("css-", "")] = e.value) : c[e.nodeName] = e.value
    }
};
h.g.W.mt = function(a) {
    if (a) {
        if ("string" != typeof a && (h.g.userAgent.$d && a.outerHTML ? a = a.outerHTML : a instanceof Element || (a = null)), "string" == typeof a && (a = h.K.ye(a), "xml" != a.nodeName.toLowerCase())) throw TypeError("Toolbox should be an <xml> document.");
    } else a = null;
    return a
};
h.jd = function(a) {
    var c = !!a.readOnly;
    if (c) var d = null,
        e = !1,
        f = !1,
        g = !1,
        k = !1,
        l = !1,
        m = !1;
    else {
        d = h.g.W.ww(a.toolbox);
        e = h.g.W.Jl(d);
        f = a.trashcan;
        void 0 === f && (f = e);
        var n = a.maxTrashcanContents;
        f ? void 0 === n && (n = 32) : n = 0;
        g = a.collapse;
        void 0 === g && (g = e);
        k = a.comments;
        void 0 === k && (k = e);
        l = a.disable;
        void 0 === l && (l = e);
        m = a.sounds;
        void 0 === m && (m = !0)
    }
    var q = !!a.rtl,
        p = a.horizontalLayout;
    void 0 === p && (p = !1);
    var u = a.toolboxPosition;
    u = "end" !== u;
    u = p ? u ? h.g.W.Pa.ce : h.g.W.Pa.eg : u == q ? h.g.W.Pa.Gc : h.g.W.Pa.Hb;
    var H = a.css;
    void 0 === H &&
        (H = !0);
    var L = "https://blockly-demo.appspot.com/static/media/";
    a.media ? L = a.media : a.path && (L = a.path + "media/");
    var I = void 0 === a.oneBasedIndex ? !0 : !!a.oneBasedIndex,
        Ib = a.renderer || "geras",
        re = a.plugins || {};
    this.I = q;
    this.$o = I;
    this.collapse = g;
    this.hC = k;
    this.disable = l;
    this.readOnly = c;
    this.Ns = a.maxBlocks || Infinity;
    this.Po = a.maxInstances;
    this.fp = L;
    this.Jl = e;
    this.yc = h.jd.pE(a, e);
    this.sx = f;
    this.Qo = n;
    this.xD = m;
    this.vD = H;
    this.Jd = p;
    this.si = d;
    this.nx = h.jd.oE(a);
    this.zb = h.jd.rE(a);
    this.Pc = u;
    this.oF = h.jd.qE(a);
    this.Ct =
        Ib;
    this.Dt = a.rendererOverrides;
    this.js = null;
    this.ed = a.parentWorkspace;
    this.plugins = re
};
h.OF = function() {};
h.jd.pE = function(a, c) {
    var d = a.move || {},
        e = {};
    void 0 === d.scrollbars && void 0 === a.scrollbars ? e.scrollbars = c : "object" == typeof d.scrollbars ? (e.scrollbars = {}, e.scrollbars.Nl = !!d.scrollbars.horizontal, e.scrollbars.vertical = !!d.scrollbars.vertical, e.scrollbars.Nl && e.scrollbars.vertical ? e.scrollbars = !0 : e.scrollbars.Nl || e.scrollbars.vertical || (e.scrollbars = !1)) : e.scrollbars = !!d.scrollbars || !!a.scrollbars;
    e.mk = e.scrollbars && void 0 !== d.wheel ? !!d.wheel : "object" == typeof e.scrollbars;
    e.Mf = e.scrollbars ? void 0 === d.drag ?
        !0 : !!d.drag : !1;
    return e
};
h.jd.rE = function(a) {
    a = a.zoom || {};
    var c = {};
    c.controls = void 0 === a.controls ? !1 : !!a.controls;
    c.mk = void 0 === a.wheel ? !1 : !!a.wheel;
    c.jF = void 0 === a.startScale ? 1 : Number(a.startScale);
    c.Zl = void 0 === a.maxScale ? 3 : Number(a.maxScale);
    c.am = void 0 === a.minScale ? .3 : Number(a.minScale);
    c.WE = void 0 === a.scaleSpeed ? 1.2 : Number(a.scaleSpeed);
    c.oy = void 0 === a.pinch ? c.mk || c.controls : !!a.pinch;
    return c
};
h.jd.oE = function(a) {
    a = a.grid || {};
    var c = {};
    c.spacing = Number(a.spacing) || 0;
    c.sb = a.colour || "#888";
    c.length = void 0 === a.length ? 1 : Number(a.length);
    c.xK = 0 < c.spacing && !!a.snap;
    return c
};
h.jd.qE = function(a) {
    a = a.theme || h.xf.gg;
    return "string" == typeof a ? h.u.bs(h.u.R.vq, a) : a instanceof h.Nh ? a : h.Nh.xC(a.name || "builtin" + h.g.Gk.$w(), a)
};
h.jd.mt = function(a) {
    h.g.Dj.warn("Blockly.Options.parseToolboxTree", "September 2020", "September 2021", "Blockly.utils.toolbox.parseToolboxTree");
    return h.g.W.mt(a)
};
h.h.yf = function(a) {
    h.h.yf.v.constructor.call(this);
    this.sh = (this.qd = "undefined" == typeof a) ? "" : a.hc();
    this.Yb = this.qd ? "" : a.B.id
};
h.g.object.V(h.h.yf, h.h.Abstract);
h.h.yf.prototype.qa = function() {
    var a = h.h.yf.v.qa.call(this);
    a.varId = this.sh;
    return a
};
h.h.yf.prototype.ba = function(a) {
    h.h.yf.v.qa.call(this);
    this.sh = a.varId
};
h.h.zf = function(a) {
    h.h.zf.v.constructor.call(this, a);
    a && (this.Ri = a.type, this.Qi = a.name)
};
h.g.object.V(h.h.zf, h.h.yf);
h.h.zf.prototype.type = h.h.Rk;
h.h.zf.prototype.qa = function() {
    var a = h.h.zf.v.qa.call(this);
    a.varType = this.Ri;
    a.varName = this.Qi;
    return a
};
h.h.zf.prototype.ba = function(a) {
    h.h.zf.v.ba.call(this, a);
    this.Ri = a.varType;
    this.Qi = a.varName
};
h.h.zf.prototype.run = function(a) {
    var c = x(this);
    a ? c.je(this.Qi, this.Ri, this.sh) : c.Cj(this.sh)
};
h.h.Af = function(a) {
    h.h.Af.v.constructor.call(this, a);
    a && (this.Ri = a.type, this.Qi = a.name)
};
h.g.object.V(h.h.Af, h.h.yf);
h.h.Af.prototype.type = h.h.En;
h.h.Af.prototype.qa = function() {
    var a = h.h.Af.v.qa.call(this);
    a.varType = this.Ri;
    a.varName = this.Qi;
    return a
};
h.h.Af.prototype.ba = function(a) {
    h.h.Af.v.ba.call(this, a);
    this.Ri = a.varType;
    this.Qi = a.varName
};
h.h.Af.prototype.run = function(a) {
    var c = x(this);
    a ? c.Cj(this.sh) : c.je(this.Qi, this.Ri, this.sh)
};
h.h.Bf = function(a, c) {
    h.h.Bf.v.constructor.call(this, a);
    a && (this.Ws = a.name, this.Ss = "undefined" == typeof c ? "" : c)
};
h.g.object.V(h.h.Bf, h.h.yf);
h.h.Bf.prototype.type = h.h.Cq;
h.h.Bf.prototype.qa = function() {
    var a = h.h.Bf.v.qa.call(this);
    a.oldName = this.Ws;
    a.newName = this.Ss;
    return a
};
h.h.Bf.prototype.ba = function(a) {
    h.h.Bf.v.ba.call(this, a);
    this.Ws = a.oldName;
    this.Ss = a.newName
};
h.h.Bf.prototype.run = function(a) {
    var c = x(this);
    a ? c.Fi(this.sh, this.Ss) : c.Fi(this.sh, this.Ws)
};
h.u.register(h.u.R.Gb, h.h.Rk, h.h.zf);
h.u.register(h.u.R.Gb, h.h.En, h.h.Af);
h.u.register(h.u.R.Gb, h.h.Cq, h.h.Bf);
h.Dq = function(a) {
    this.Oa = Object.create(null);
    this.B = a
};
b = h.Dq.prototype;
b.clear = function() {
    this.Oa = Object.create(null)
};
b.zy = function(a, c) {
    var d = this.Mg(c, a.type),
        e = C(this.B, !1);
    h.h.ta(!0);
    try {
        if (d && d.hc() != a.hc()) {
            var f = a.type;
            c != d.name && bb(d, c, e);
            for (c = 0; c < e.length; c++) {
                d = void 0;
                for (var g = 0; d = e[c].U[g]; g++)
                    for (var k = 0; d.eb[k]; k++);
            }
            h.h.Ga(new(h.h.get(h.h.En))(a));
            this.Oa[f].splice(this.so(f).indexOf(a), 1)
        } else bb(a, c, e)
    } finally {
        h.h.ta(!1)
    }
};
b.Fi = function(a, c) {
    var d = this.Ng(a);
    if (!d) throw Error("Tried to rename a variable that didn't exist. ID: " + a);
    this.zy(d, c)
};

function bb(a, c, d) {
    h.h.Ga(new(h.h.get(h.h.Cq))(a, c));
    a.name = c;
    for (a = 0; a < d.length; a++)
        for (var e = d[a], f = 0; c = e.U[f]; f++)
            for (var g = 0; c.eb[g]; g++);
}
b.je = function(a, c, d) {
    var e = this.Mg(a, c);
    if (e) {
        if (d && e.hc() != d) throw Error('Variable "' + a + '" is already in use and its id is "' + e.hc() + '" which conflicts with the passed in id, "' + d + '".');
        return e
    }
    if (d && this.Ng(d)) throw Error('Variable id, "' + d + '", is already in use.');
    e = d || h.g.Xe();
    c = c || "";
    e = new h.Fn(this.B, a, c, e);
    a = this.Oa[c] || [];
    a.push(e);
    delete this.Oa[c];
    this.Oa[c] = a;
    return e
};
b.Cj = function(a) {
    var c = this.Ng(a);
    if (c) {
        var d = c.name,
            e = this.hs(a);
        a = 0;
        for (var f; f = e[a]; a++)
            if ("procedures_defnoreturn" == f.type || "procedures_defreturn" == f.type) {
                a = cb(f, "NAME");
                d = h.M.CANNOT_DELETE_VARIABLE_PROCEDURE.replace("%1", d).replace("%2", a);
                h.alert(d);
                return
            } var g = this;
        1 < e.length ? (d = h.M.DELETE_VARIABLE_CONFIRMATION.replace("%1", String(e.length)).replace("%2", d), h.confirm(d, function(k) {
            k && c && db(g, c, e)
        })) : db(g, c, e)
    } else console.warn("Can't delete non-existent variable: " + a)
};

function db(a, c, d) {
    var e = h.h.Wb();
    e || h.h.ta(!0);
    try {
        for (var f = 0; f < d.length; f++) d[f].H(!0);
        var g = a.Oa[c.type];
        a = 0;
        for (var k; k = g[a]; a++)
            if (k.hc() == c.hc()) {
                g.splice(a, 1);
                h.h.Ga(new(h.h.get(h.h.En))(c));
                break
            }
    } finally {
        e || h.h.ta(!1)
    }
}
b.Mg = function(a, c) {
    if (c = this.Oa[c || ""])
        for (var d = 0, e; e = c[d]; d++)
            if (h.Ad.Nf(e.name, a)) return e;
    return null
};
b.Ng = function(a) {
    for (var c = Object.keys(this.Oa), d = 0; d < c.length; d++)
        for (var e = c[d], f = 0, g; g = this.Oa[e][f]; f++)
            if (g.hc() == a) return g;
    return null
};
b.so = function(a) {
    return (a = this.Oa[a || ""]) ? a.slice() : []
};
b.$h = function() {
    var a = [],
        c;
    for (c in this.Oa) a = a.concat(this.Oa[c]);
    return a
};
b.Sr = function() {
    var a = [],
        c;
    for (c in this.Oa)
        for (var d = this.Oa[c], e = 0, f; f = d[e]; e++) a.push(f.name);
    return a
};
b.hs = function(a) {
    for (var c = [], d = C(this.B, !1), e = 0; e < d.length; e++) {
        var f = ka(d[e]);
        if (f)
            for (var g = 0; g < f.length; g++) f[g].hc() == a && c.push(d[e])
    }
    return c
};
h.qb = function(a) {
    this.id = h.g.Xe();
    h.qb.Uk[this.id] = this;
    this.options = a || new h.jd({});
    this.I = !!this.options.I;
    this.Jd = !!this.options.Jd;
    this.Pc = this.options.Pc;
    this.If = new(h.u.Of(h.u.R.Bu, this.options, !0))(this);
    this.Gm = [];
    this.rp = [];
    this.Tn = Object.create(null);
    this.Nc = [];
    this.Pi = [];
    this.mm = [];
    this.Nq = Object.create(null);
    this.dg = Object.create(null);
    this.Oa = new h.Dq(this);
    this.$j = null
};
b = h.qb.prototype;
b.ua = !1;
b.vs = !1;
b.dv = 1024;
b.Wn = null;
b.H = function() {
    this.Nc.length = 0;
    this.clear();
    delete h.qb.Uk[this.id]
};
h.qb.yv = 3;
b = h.qb.prototype;
b.kf = function(a, c) {
    a = a.Za();
    c = c.Za();
    return a.y + h.qb.prototype.kf.offset * a.x - (c.y + h.qb.prototype.kf.offset * c.x)
};
b.In = function(a) {
    this.Gm.push(a)
};
b.hp = function(a) {
    if (!h.g.Xk(this.Gm, a)) throw Error("Block not present in workspace's list of top-most blocks.");
};
b.ub = function(a) {
    var c = [].concat(this.Gm);
    a && 1 < c.length && (this.kf.offset = Math.sin(h.g.Ld.Yt(h.qb.yv)), this.I && (this.kf.offset *= -1), c.sort(this.kf));
    return c
};

function eb(a, c) {
    return a.dg[c] ? a.dg[c].slice(0) : []
}

function C(a, c) {
    if (c) {
        a = a.ub(!0);
        c = [];
        for (var d = 0; d < a.length; d++) c.push.apply(c, v(a[d], !0))
    } else
        for (c = a.ub(!1), d = 0; d < c.length; d++) c.push.apply(c, z(c[d], !1));
    return c.filter(function(e) {
        return !e.rd()
    })
}
b.clear = function() {
    this.vs = !0;
    try {
        var a = h.h.Wb();
        for (a || h.h.ta(!0); this.Gm.length;) this.Gm[0].H(!1);
        for (; this.rp.length;) this.rp[this.rp.length - 1].H(!1);
        a || h.h.ta(!1);
        this.Oa.clear();
        this.$j && this.$j.clear()
    } finally {
        this.vs = !1
    }
};
b.Fi = function(a, c) {
    this.Oa.Fi(a, c)
};
b.je = function(a, c, d) {
    return this.Oa.je(a, c, d)
};
b.hs = function(a) {
    return this.Oa.hs(a)
};
b.Cj = function(a) {
    this.Oa.Cj(a)
};
b.Mg = function(a, c) {
    return this.Oa.Mg(a, c)
};
b.Ng = function(a) {
    return this.Oa.Ng(a)
};
b.so = function(a) {
    return this.Oa.so(a)
};
b.$h = function() {
    return this.Oa.$h()
};
b.Sr = function() {
    return this.Oa.Sr()
};
b.Hl = function() {
    return 0
};
b.Rs = function(a, c) {
    return new h.Vi(this, a, c)
};

function fb(a) {
    return isNaN(a.options.Ns) ? Infinity : a.options.Ns - C(a, !1).length
}

function gb(a, c) {
    if (!hb(a)) return !0;
    var d = 0,
        e;
    for (e in c) {
        if (c[e] > (a.options.Po ? (void 0 !== a.options.Po[e] ? a.options.Po[e] : Infinity) - eb(a, e).length : Infinity)) return !1;
        d += c[e]
    }
    return d > fb(a) ? !1 : !0
}

function hb(a) {
    return Infinity != a.options.Ns || !!a.options.Po
}

function ib(a, c) {
    var d = c ? a.mm : a.Pi;
    a = c ? a.Pi : a.mm;
    var e = d.pop();
    if (e) {
        for (var f = [e]; d.length && e.group && e.group == d[d.length - 1].group;) f.push(d.pop());
        for (d = 0; e = f[d]; d++) a.push(e);
        f = h.h.filter(f, c);
        h.h.Na = !1;
        try {
            for (d = 0; e = f[d]; d++) e.run(c)
        } finally {
            h.h.Na = !0
        }
    }
}

function D(a, c) {
    a.Nc.push(c)
}

function jb(a, c) {
    h.g.Xk(a.Nc, c)
}
b.Lc = function(a) {
    return this.Nq[a] || null
};
b.Pt = function(a) {
    this.Oa = a
};
h.qb.Uk = Object.create(null);
h.qb.Cl = function(a) {
    return h.qb.Uk[a] || null
};
h.qb.getAll = function() {
    var a = [],
        c;
    for (c in h.qb.Uk) a.push(h.qb.Uk[c]);
    return a
};
h.wa = function(a, c, d, e, f, g) {
    this.m = a;
    this.Jf = c;
    this.cF = d;
    this.dt = this.ct = this.Tx = this.Cy = null;
    this.Te = !1;
    d = h.wa.nz;
    this.m.I && (d = -d);
    this.NB = h.g.Ld.Yt(d);
    a.$f.appendChild(this.jl(c, !(!f || !g)));
    this.Ob = e;
    this.Ay && kb(this);
    f && g || (a = this.Jf.getBBox(), f = a.width + 2 * h.wa.Be, g = a.height + 2 * h.wa.Be);
    lb(this, f, g);
    kb(this);
    mb(this);
    this.Ay = !0
};
h.wa.Be = 6;
h.wa.oz = 5;
h.wa.nz = 20;
h.wa.nu = 4;
h.wa.kz = 8;
h.wa.eh = null;
h.wa.dh = null;
h.wa.bu = function() {
    h.wa.eh && (h.N.yb(h.wa.eh), h.wa.eh = null);
    h.wa.dh && (h.N.yb(h.wa.dh), h.wa.dh = null)
};
h.wa.TB = function() {
    h.Touch.Qn();
    h.wa.bu()
};
b = h.wa.prototype;
b.Ay = !1;
b.Ob = null;
b.hf = 0;
b.kh = 0;
b.jb = 0;
b.vc = 0;
b.Lq = !0;
b.jl = function(a, c) {
    this.Cd = h.g.j.J(h.g.D.Sc, {}, null);
    var d = {
        filter: "url(#" + this.m.mb.ga().lo + ")"
    };
    h.g.userAgent.zA && (d = {});
    d = h.g.j.J(h.g.D.Sc, d, this.Cd);
    this.bw = h.g.j.J(h.g.D.Je, {}, d);
    this.Mn = h.g.j.J(h.g.D.Mb, {
        "class": "blocklyDraggable",
        x: 0,
        y: 0,
        rx: h.wa.Be,
        ry: h.wa.Be
    }, d);
    c ? (this.Yf = h.g.j.J(h.g.D.Sc, {
        "class": this.m.I ? "blocklyResizeSW" : "blocklyResizeSE"
    }, this.Cd), c = 2 * h.wa.Be, h.g.j.J(h.g.D.XA, {
        points: "0,x x,x x,0".replace(/x/g, c.toString())
    }, this.Yf), h.g.j.J(h.g.D.Ik, {
        "class": "blocklyResizeLine",
        x1: c /
            3,
        y1: c - 1,
        x2: c - 1,
        y2: c / 3
    }, this.Yf), h.g.j.J(h.g.D.Ik, {
        "class": "blocklyResizeLine",
        x1: 2 * c / 3,
        y1: c - 1,
        x2: c - 1,
        y2: 2 * c / 3
    }, this.Yf)) : this.Yf = null;
    this.m.options.readOnly || (this.ct = h.N.Aa(this.Mn, "mousedown", this, this.SB), this.Yf && (this.dt = h.N.Aa(this.Yf, "mousedown", this, this.RE)));
    this.Cd.appendChild(a);
    return this.Cd
};
b.oa = function() {
    return this.Cd
};
b.SB = function(a) {
    var c = this.m.Kg(a);
    if (c) {
        if (c.ei) throw Error("Tried to call gesture.handleBubbleStart, but the gesture had already been started.");
        c.ud || (c.ud = this);
        c.Md = a
    }
};
b.um = function() {};
b.cf = function() {
    return !1
};
b.Jt = function() {};
b.RE = function(a) {
    var c = this.Cd.parentNode;
    c.lastChild !== this.Cd && c.appendChild(this.Cd);
    h.wa.bu();
    h.g.Tl(a) || (this.m.ym(a, new h.g.T(this.m.I ? -this.jb : this.jb, this.vc)), h.wa.eh = h.N.Aa(document, "mouseup", this, h.wa.TB), h.wa.dh = h.N.Aa(document, "mousemove", this, this.SE), h.ic());
    a.stopPropagation()
};
b.SE = function(a) {
    this.Lq = !1;
    var c = this.m;
    a = h.g.bm(a, t(c), Va(c));
    a.x /= c.scale;
    a.y /= c.scale;
    c = h.g.T.sum(c.Jw, a);
    lb(this, this.m.I ? -c.x : c.x, c.y);
    this.m.I && kb(this)
};

function nb(a, c, d) {
    var e = a.m.I ? a.Ob.x - c.x - a.jb : c.x + a.Ob.x;
    c = c.y + a.Ob.y;
    return Math.max(0, Math.min(1, (Math.min(e + a.jb, d.left + d.width) - Math.max(e, d.left)) * (Math.min(c + a.vc, d.top + d.height) - Math.max(c, d.top)) / (a.jb * a.vc)))
}

function kb(a) {
    var c = a.Ob.x;
    c = a.m.I ? c - (a.hf + a.jb) : c + a.hf;
    a.moveTo(c, a.kh + a.Ob.y)
}
b.moveTo = function(a, c) {
    this.Cd.setAttribute("transform", "translate(" + a + "," + c + ")")
};
b.mh = function(a) {
    !a && this.Tx && this.Tx()
};

function lb(a, c, d) {
    var e = 2 * h.wa.Be;
    c = Math.max(c, e + 45);
    d = Math.max(d, e + 20);
    a.jb = c;
    a.vc = d;
    a.Mn.setAttribute("width", c);
    a.Mn.setAttribute("height", d);
    a.Yf && (a.m.I ? a.Yf.setAttribute("transform", "translate(" + 2 * h.wa.Be + "," + (d - e) + ") scale(-1 1)") : a.Yf.setAttribute("transform", "translate(" + (c - e) + "," + (d - e) + ")"));
    if (a.Lq) {
        c = ob(a.m.dd, !0);
        d = -a.jb / 4;
        if (!(a.jb > c.width)) {
            if (a.m.I) {
                e = a.Ob.x - d;
                var f = e - a.jb;
                var g = c.left + c.width,
                    k = c.left + h.Ka.jc / a.m.scale
            } else f = d + a.Ob.x, e = f + a.jb, k = c.left, g = c.left + c.width - h.Ka.jc / a.m.scale;
            a.m.I ? f < k ? d = -(k - a.Ob.x + a.jb) : e > g && (d = -(g - a.Ob.x)) : f < k ? d = k - a.Ob.x : e > g && (d = g - a.Ob.x - a.jb)
        }
        f = d;
        d = -a.vc / 4;
        if (!(a.vc > c.height)) {
            e = a.Ob.y + d;
            g = e + a.vc;
            k = c.top;
            var l = c.top + c.height - h.Ka.jc / a.m.scale,
                m = a.Ob.y;
            e < k ? d = k - m : g > l && (d = l - m - a.vc)
        }
        k = d;
        g = a.cF.getBBox();
        d = {
            x: f,
            y: -a.vc - a.m.mb.ga().Jk
        };
        e = {
            x: -a.jb - 30,
            y: k
        };
        k = {
            x: g.width,
            y: k
        };
        l = {
            x: f,
            y: g.height
        };
        f = g.width < g.height ? k : l;
        g = g.width < g.height ? l : k;
        k = nb(a, d, c);
        l = nb(a, e, c);
        m = nb(a, f, c);
        c = Math.max(k, l, m, nb(a, g, c));
        k == c ? (a.hf = d.x, a.kh = d.y) : l == c ? (a.hf = e.x, a.kh = e.y) : m == c ? (a.hf =
            f.x, a.kh = f.y) : (a.hf = g.x, a.kh = g.y)
    }
    kb(a);
    mb(a);
    a.Cy && a.Cy()
}

function mb(a) {
    var c = [],
        d = a.jb / 2,
        e = a.vc / 2,
        f = -a.hf,
        g = -a.kh;
    if (d == f && e == g) c.push("M " + d + "," + e);
    else {
        g -= e;
        f -= d;
        a.m.I && (f *= -1);
        var k = Math.sqrt(g * g + f * f),
            l = Math.acos(f / k);
        0 > g && (l = 2 * Math.PI - l);
        var m = l + Math.PI / 2;
        m > 2 * Math.PI && (m -= 2 * Math.PI);
        var n = Math.sin(m),
            q = Math.cos(m),
            p = new h.g.Uc(a.jb, a.vc);
        m = (p.width + p.height) / h.wa.oz;
        m = Math.min(m, p.width, p.height) / 4;
        p = 1 - h.wa.kz / k;
        f = d + p * f;
        g = e + p * g;
        p = d + m * q;
        var u = e + m * n;
        d -= m * q;
        e -= m * n;
        n = l + a.NB;
        n > 2 * Math.PI && (n -= 2 * Math.PI);
        l = Math.sin(n) * k / h.wa.nu;
        k = Math.cos(n) * k / h.wa.nu;
        c.push("M" +
            p + "," + u);
        c.push("C" + (p + k) + "," + (u + l) + " " + f + "," + g + " " + f + "," + g);
        c.push("C" + f + "," + g + " " + (d + k) + "," + (e + l) + " " + d + "," + e)
    }
    c.push("z");
    a.bw.setAttribute("d", c.join(" "))
}
b.ve = function(a) {
    this.Mn.setAttribute("fill", a);
    this.bw.setAttribute("fill", a)
};
b.H = function() {
    this.ct && h.N.yb(this.ct);
    this.dt && h.N.yb(this.dt);
    h.wa.bu();
    h.g.j.removeNode(this.Cd);
    this.Te = !0
};
b.Qs = function(a, c) {
    a ? a.Oi(c.x, c.y) : this.moveTo(c.x, c.y);
    this.hf = this.m.I ? this.Ob.x - c.x - this.jb : c.x - this.Ob.x;
    this.kh = c.y - this.Ob.y;
    mb(this)
};
b.Za = function() {
    return new h.g.T(this.m.I ? -this.hf + this.Ob.x - this.jb : this.Ob.x + this.hf, this.Ob.y + this.kh)
};
h.wa.ye = function(a) {
    var c = h.g.j.J(h.g.D.Gv, {
        "class": "blocklyText blocklyBubbleText blocklyNoPointerEvents",
        y: h.wa.Be
    }, null);
    a = a.split("\n");
    for (var d = 0; d < a.length; d++) {
        var e = h.g.j.J(h.g.D.Iv, {
                dy: "1em",
                x: h.wa.Be
            }, c),
            f = document.createTextNode(a[d]);
        e.appendChild(f)
    }
    return c
};
h.wa.AJ = function(a, c, d) {
    d = new h.wa(c.B, a, c.wb.Eb, d, null, null);
    d.Cd.dataset && (d.Cd.dataset.blockId = c.id);
    if (c.I) {
        c = a.getBBox().width;
        for (var e = 0, f; f = a.childNodes[e]; e++) f.setAttribute("text-anchor", "end"), f.setAttribute("x", c + h.wa.Be)
    }
    return d
};
h.h.qf = function(a) {
    this.Oe = (this.qd = "undefined" == typeof a) ? "" : a.id;
    this.Yb = this.qd ? "" : a.B.id;
    this.group = h.h.Wb();
    this.Na = h.h.Na
};
h.g.object.V(h.h.qf, h.h.Abstract);
h.h.qf.prototype.qa = function() {
    var a = h.h.qf.v.qa.call(this);
    this.Oe && (a.commentId = this.Oe);
    return a
};
h.h.qf.prototype.ba = function(a) {
    h.h.qf.v.ba.call(this, a);
    this.Oe = a.commentId
};
h.h.Wi = function(a, c, d) {
    h.h.Wi.v.constructor.call(this, a);
    a && (this.Wo = "undefined" == typeof c ? "" : c, this.Vo = "undefined" == typeof d ? "" : d)
};
h.g.object.V(h.h.Wi, h.h.qf);
b = h.h.Wi.prototype;
b.type = h.h.yu;
b.qa = function() {
    var a = h.h.Wi.v.qa.call(this);
    a.oldContents = this.Wo;
    a.newContents = this.Vo;
    return a
};
b.ba = function(a) {
    h.h.Wi.v.ba.call(this, a);
    this.Wo = a.oldContents;
    this.Vo = a.newContents
};
b.Vj = function() {
    return this.Wo == this.Vo
};
b.run = function(a) {
    var c;
    (c = x(this).Tn[this.Oe] || null) ? c.sK(a ? this.Vo : this.Wo): console.warn("Can't change non-existent comment: " + this.Oe)
};
h.h.rf = function(a) {
    h.h.rf.v.constructor.call(this, a);
    a && (this.xml = a.Qy())
};
h.g.object.V(h.h.rf, h.h.qf);
h.h.rf.prototype.type = h.h.an;
h.h.rf.prototype.qa = function() {
    var a = h.h.rf.v.qa.call(this);
    a.xml = h.K.Gd(this.xml);
    return a
};
h.h.rf.prototype.ba = function(a) {
    h.h.rf.v.ba.call(this, a);
    this.xml = h.K.ye(a.xml)
};
h.h.rf.prototype.run = function(a) {
    h.h.Cu(this, a)
};
h.h.Cu = function(a, c) {
    var d = x(a);
    c ? (c = h.g.xml.createElement("xml"), c.appendChild(a.xml), h.K.Xh(c, d)) : (d = d.Tn[a.Oe] || null) ? d.H(!1, !1) : console.warn("Can't uncreate non-existent comment: " + a.Oe)
};
h.h.sf = function(a) {
    h.h.sf.v.constructor.call(this, a);
    a && (this.xml = a.Qy())
};
h.g.object.V(h.h.sf, h.h.qf);
h.h.sf.prototype.type = h.h.zu;
h.h.sf.prototype.qa = function() {
    return h.h.sf.v.qa.call(this)
};
h.h.sf.prototype.ba = function(a) {
    h.h.sf.v.ba.call(this, a)
};
h.h.sf.prototype.run = function(a) {
    h.h.Cu(this, !a)
};
h.h.Xi = function(a) {
    h.h.Xi.v.constructor.call(this, a);
    a && (this.er = a, this.Ci = a.mx(), this.zi = null)
};
h.g.object.V(h.h.Xi, h.h.qf);
b = h.h.Xi.prototype;
b.Ei = function() {
    if (!this.er) throw Error("Tried to record the new position of a comment on the same event twice.");
    this.zi = this.er.mx();
    this.er = null
};
b.type = h.h.vk;
b.qa = function() {
    var a = h.h.Xi.v.qa.call(this);
    this.Ci && (a.oldCoordinate = Math.round(this.Ci.x) + "," + Math.round(this.Ci.y));
    this.zi && (a.newCoordinate = Math.round(this.zi.x) + "," + Math.round(this.zi.y));
    return a
};
b.ba = function(a) {
    h.h.Xi.v.ba.call(this, a);
    if (a.oldCoordinate) {
        var c = a.oldCoordinate.split(",");
        this.Ci = new h.g.T(Number(c[0]), Number(c[1]))
    }
    a.newCoordinate && (c = a.newCoordinate.split(","), this.zi = new h.g.T(Number(c[0]), Number(c[1])))
};
b.Vj = function() {
    return h.g.T.Nf(this.Ci, this.zi)
};
b.run = function(a) {
    var c;
    if (c = x(this).Tn[this.Oe] || null) {
        a = a ? this.zi : this.Ci;
        var d = c.mx();
        c.moveBy(a.x - d.x, a.y - d.y)
    } else console.warn("Can't move non-existent comment: " + this.Oe)
};
h.u.register(h.u.R.Gb, h.h.an, h.h.rf);
h.u.register(h.u.R.Gb, h.h.yu, h.h.Wi);
h.u.register(h.u.R.Gb, h.h.vk, h.h.Xi);
h.u.register(h.u.R.Gb, h.h.zu, h.h.sf);
h.qk = function(a, c) {
    this.uc = a;
    this.m = c;
    this.fc = null;
    this.Pm = !1;
    this.lf = this.uc.Za();
    this.Yh = h.g.li() && c.md ? c.md : null
};
h.qk.prototype.H = function() {
    this.Yh = this.m = this.uc = null
};

function pb(a, c, d) {
    d = a.Zj(d);
    d = h.g.T.sum(a.lf, d);
    a.uc.Qs(a.Yh, d);
    d = a.fc;
    a.fc = Da(a.m, c);
    c = a.Pm;
    a.Pm = a.Rt(a.fc);
    c != a.Pm && a.uc.Jt(a.Pm);
    a.fc !== d && d && d.Ys();
    a.fc && a.fc.Zs()
}
h.qk.prototype.Rt = function(a) {
    return a && ra(this.m.Hf, a.id) ? za(a, this.uc, !1) : !1
};

function qb(a, c, d) {
    pb(a, c, d);
    c = a.Zj(d);
    c = h.g.T.sum(a.lf, c);
    a.uc.moveTo(c.x, c.y);
    a.fc && a.fc.$s();
    a.Pm ? (a.xl(), a.uc.H(!1, !0)) : (a.Yh && a.Yh.Pn(a.m.$f), a.uc.mh && a.uc.mh(!1), a.xl());
    a.m.ac(!0);
    h.h.ta(!1)
}
h.qk.prototype.xl = function() {
    if (this.uc.UJ) {
        var a = new(h.h.get(h.h.vk))(this.uc);
        a.Ci = this.lf;
        a.Ei();
        h.h.Ga(a)
    }
};
h.qk.prototype.Zj = function(a) {
    a = new h.g.T(a.x / this.m.scale, a.y / this.m.scale);
    this.m.Eo && a.scale(1 / this.m.options.ed.scale);
    return a
};
h.h.hg = function(a, c, d) {
    h.h.hg.v.constructor.call(this, a ? a.B.id : c);
    this.gb = a ? a.id : null;
    this.Oy = d
};
h.g.object.V(h.h.hg, h.h.ee);
h.h.hg.prototype.type = h.h.tk;
h.h.hg.prototype.qa = function() {
    var a = h.h.hg.v.qa.call(this);
    a.targetType = this.Oy;
    this.gb && (a.blockId = this.gb);
    return a
};
h.h.hg.prototype.ba = function(a) {
    h.h.hg.v.ba.call(this, a);
    this.Oy = a.targetType;
    this.gb = a.blockId
};
h.u.register(h.u.R.Gb, h.h.tk, h.h.hg);
h.G = {};
h.G.visible = !1;
h.G.tj = !1;
h.G.BA = 50;
h.G.Rx = 0;
h.G.wm = 0;
h.G.As = 0;
h.G.Bs = 0;
h.G.cb = null;
h.G.hm = null;
h.G.hv = 0;
h.G.jv = 10;
h.G.ZA = 10;
h.G.pA = 750;
h.G.$p = 5;
h.G.ab = null;
h.G.lD = function() {
    var a = h.G.lx(h.G.cb);
    if (a) {
        for (a = a.Ud;
            "function" == typeof a;) a = a();
        if ("string" != typeof a) throw Error("Tooltip function must return a string.");
        return a
    }
    return ""
};
h.G.lx = function(a) {
    for (; a && a.Ud;) {
        if ("string" == typeof a.Ud || "function" == typeof a.Ud) return a;
        a = a.Ud
    }
    return null
};
h.G.Va = function() {
    h.G.ab || (h.G.ab = document.createElement("div"), h.G.ab.className = "blocklyTooltipDiv", (h.ap || document.body).appendChild(h.G.ab))
};
h.G.sj = function(a) {
    a.XD = h.N.bind(a, "mouseover", null, h.G.lE);
    a.VD = h.N.bind(a, "mouseout", null, h.G.kE);
    a.addEventListener("mousemove", h.G.ky, !1)
};
h.G.cu = function(a) {
    a && (h.N.yb(a.XD), h.N.yb(a.VD), a.removeEventListener("mousemove", h.G.ky))
};
h.G.lE = function(a) {
    h.G.tj || (a = h.G.lx(a.currentTarget), h.G.cb != a && (h.G.$a(), h.G.hm = null, h.G.cb = a), clearTimeout(h.G.Rx))
};
h.G.kE = function() {
    h.G.tj || (h.G.Rx = setTimeout(function() {
        h.G.cb = null;
        h.G.hm = null;
        h.G.$a()
    }, 1), clearTimeout(h.G.wm))
};
h.G.ky = function(a) {
    if (h.G.cb && h.G.cb.Ud && !h.G.tj)
        if (h.G.visible) {
            var c = h.G.As - a.pageX;
            a = h.G.Bs - a.pageY;
            Math.sqrt(c * c + a * a) > h.G.ZA && h.G.$a()
        } else h.G.hm != h.G.cb && (clearTimeout(h.G.wm), h.G.As = a.pageX, h.G.Bs = a.pageY, h.G.wm = setTimeout(h.G.eF, h.G.pA))
};
h.G.H = function() {
    h.G.cb = null;
    h.G.hm = null;
    h.G.$a()
};
h.G.$a = function() {
    h.G.visible && (h.G.visible = !1, h.G.ab && (h.G.ab.style.display = "none"));
    h.G.wm && clearTimeout(h.G.wm)
};
h.G.block = function() {
    h.G.$a();
    h.G.tj = !0
};
h.G.wF = function() {
    h.G.tj = !1
};
h.G.eF = function() {
    if (!h.G.tj && (h.G.hm = h.G.cb, h.G.ab)) {
        h.G.ab.textContent = "";
        var a = h.G.lD();
        a = h.g.Qa.ez(a, h.G.BA);
        a = a.split("\n");
        for (var c = 0; c < a.length; c++) {
            var d = document.createElement("div");
            d.appendChild(document.createTextNode(a[c]));
            h.G.ab.appendChild(d)
        }
        a = h.G.cb.I;
        c = document.documentElement.clientWidth;
        d = document.documentElement.clientHeight;
        h.G.ab.style.direction = a ? "rtl" : "ltr";
        h.G.ab.style.display = "block";
        h.G.visible = !0;
        var e = h.G.As;
        e = a ? e - (h.G.hv + h.G.ab.offsetWidth) : e + h.G.hv;
        var f = h.G.Bs + h.G.jv;
        f + h.G.ab.offsetHeight > d + window.scrollY && (f -= h.G.ab.offsetHeight + 2 * h.G.jv);
        a ? e = Math.max(h.G.$p - window.scrollX, e) : e + h.G.ab.offsetWidth > c + window.scrollX - 2 * h.G.$p && (e = c - h.G.ab.offsetWidth - 2 * h.G.$p);
        h.G.ab.style.top = f + "px";
        h.G.ab.style.left = e + "px"
    }
};
h.Vk = function(a) {
    this.m = a;
    this.yx = rb(this.m);
    this.az = sb(this.m);
    this.kF = new h.g.T(a.scrollX, a.scrollY)
};
h.Vk.prototype.H = function() {
    this.m = null
};
h.Vk.prototype.ym = function() {
    h.selected && tb(h.selected);
    Wa(this.m)
};
h.Vk.prototype.ul = function(a) {
    this.Mf(a);
    Xa(this.m)
};
h.Vk.prototype.Mf = function(a) {
    a = h.g.T.sum(this.kF, a);
    if (this.yx && this.az) this.m.scroll(a.x, a.y);
    else if (this.yx) this.m.scroll(a.x, this.m.scrollY);
    else if (this.az) this.m.scroll(this.m.scrollX, a.y);
    else throw new TypeError("Invalid state.");
};
h.He = function(a, c) {
    this.Qx = null;
    this.Jc = new h.g.T(0, 0);
    this.Kb = this.lc = this.gk = this.hk = this.ud = null;
    this.jr = c;
    this.Pl = this.ni = this.Ql = this.di = !1;
    this.Md = a;
    this.ya = this.Ti = this.Ne = this.Bg = this.Zo = this.Yo = null;
    this.Ao = this.ei = this.dw = !1;
    this.tx = !h.Mz
};
b = h.He.prototype;
b.H = function() {
    h.Touch.Qn();
    h.G.wF();
    this.jr.tc = null;
    this.Yo && h.N.yb(this.Yo);
    this.Zo && h.N.yb(this.Zo);
    this.Ne && this.Ne.H();
    this.Ti && this.Ti.H();
    this.Bg && this.Bg.H()
};

function ub(a, c) {
    a.Jc = h.g.T.ql(new h.g.T(c.clientX, c.clientY), a.Qx);
    if (a.di) var d = !1;
    else a.di = h.g.T.RD(a.Jc) > (a.ya ? h.hA : h.Lz), d = a.di;
    if (d) {
        if (a.dw) throw Error("updateIsDragging_ should only be called once per gesture.");
        a.dw = !0;
        a.ud ? (a.Pl = !0, a.Bg = new h.qk(a.ud, a.Kb), d = a.Bg, h.h.Wb() || h.h.ta(!0), d.m.ac(!1), d.uc.Lq = !1, d.Yh && (d.uc.moveTo(0, 0), d.Yh.Oi(d.lf.x, d.lf.y), Ca(d.Yh, d.uc.oa())), d.uc.mh && d.uc.mh(!0), pb(a.Bg, a.Md, a.Jc), d = !0) : d = !1;
        if (!d) {
            if (a.lc) {
                if (a.ya) {
                    if (a.lc && a.lc.isEnabled()) {
                        if (!(d = !vb(a.ya))) {
                            d =
                                a.Jc;
                            d = Math.atan2(d.y, d.x) / Math.PI * 180;
                            var e = a.ya.GC;
                            d = d < e && d > -e || d < -180 + e || d > 180 - e ? !0 : !1
                        }
                        d ? (a.Kb = a.ya.Da, wb(a.Kb), h.h.Wb() || h.h.ta(!0), a.gk = null, a.lc = xb(a.ya, a.lc), a.lc.select(), d = !0) : d = !1
                    } else d = !1;
                    a.ni = d
                } else a.lc.wc() && (a.ni = !0);
                a.ni ? (a.Ne = new(h.u.Of(h.u.R.su, a.jr.options, !0))(a.lc, a.Kb), a.Ne.ym(a.Jc, a.tx), a.Ne.Mf(a.Md, a.Jc), d = !0) : d = !1
            } else d = !1;
            if (d = !d)
                if (a.ya) d = vb(a.ya);
                else if (d = a.Kb) d = a.Kb, d = d.options.yc && d.options.yc.Mf;
            d && (a.Ti = new h.Vk(a.Kb), a.Ql = !0, a.Ti.ym())
        }
        h.Yg()
    }
    a.Md = c
}
b.Cr = function(a) {
    h.g.Fo(a) ? this.cancel() : (this.ei = !0, h.bb.Ar(), wb(this.Kb), this.Kb.Eo && this.Kb.resize(), h.ic(!!this.ya), ba(this.Kb), this.Md = a, h.G.block(), this.lc && this.lc.select(), h.g.Tl(a) ? da(this, a) : ("touchstart" != a.type.toLowerCase() && "pointerdown" != a.type.toLowerCase() || "mouse" == a.pointerType || h.QD(a, this), this.Qx = new h.g.T(a.clientX, a.clientY), this.tx = a.altKey || a.ctrlKey || a.metaKey, this.sj(a)))
};
b.sj = function(a) {
    this.Yo = h.N.Aa(document, "mousemove", null, this.Mj.bind(this));
    this.Zo = h.N.Aa(document, "mouseup", null, this.to.bind(this));
    a.preventDefault();
    a.stopPropagation()
};
b.Mj = function(a) {
    ub(this, a);
    this.Ql ? this.Ti.Mf(this.Jc) : this.ni ? this.Ne.Mf(this.Md, this.Jc) : this.Pl && pb(this.Bg, this.Md, this.Jc);
    a.preventDefault();
    a.stopPropagation()
};
b.to = function(a) {
    ub(this, a);
    h.Yg();
    if (this.Ao) console.log("Trying to end a gesture recursively.");
    else {
        this.Ao = !0;
        if (this.Pl) qb(this.Bg, a, this.Jc);
        else if (this.ni) this.Ne.ul(a, this.Jc);
        else if (this.Ql) this.Ti.ul(this.Jc);
        else if (this.ud && !this.di) this.ud.$E && this.ud.$E(), this.ud.select && this.ud.select();
        else if (yb(this)) {
            var c = this.hk,
                d = this.Md;
            zb(c) && c.np(d);
            Ab(this)
        } else !this.gk || this.di || yb(this) ? this.gk || this.ud || this.hk || this.di || (c = this.jr, h.selected && tb(h.selected), c = this.Kb || c, h.h.Ga(new(h.h.get(h.h.tk))(null,
            c.id, "workspace"))) : (this.ya && this.ya.Qh ? this.lc.isEnabled() && (h.h.Wb() || h.h.ta(!0), Ga(xb(this.ya, this.lc))) : (c = new(h.h.get(h.h.tk))(this.gk, this.Kb.id, "block"), h.h.Ga(c)), Ab(this), h.h.ta(!1));
        a.preventDefault();
        a.stopPropagation();
        this.H()
    }
};
b.cancel = function() {
    this.Ao || (h.Yg(), this.Pl ? qb(this.Bg, this.Md, this.Jc) : this.ni ? this.Ne.ul(this.Md, this.Jc) : this.Ql && this.Ti.ul(this.Jc), this.H())
};

function da(a, c) {
    a.lc ? (Ab(a), h.ic(!!a.ya), a.lc.um(c)) : a.ud ? a.ud.um(c) : a.Kb && !a.ya && (h.ic(), a.Kb.um(c));
    c.preventDefault();
    c.stopPropagation();
    a.H()
}

function Bb(a, c, d) {
    if (a.ei) throw Error("Tried to call gesture.handleWsStart, but the gesture had already been started.");
    a.Kb || (a.Kb = d);
    a.Md = c;
    a.Cr(c)
}

function Cb(a, c, d) {
    if (a.ei) throw Error("Tried to call gesture.handleFlyoutStart, but the gesture had already been started.");
    a.ya || (a.ya = d);
    Bb(a, c, d.m)
}

function Ab(a) {
    a.lc && !a.ya && Ba(a.lc)
}

function Db(a, c) {
    a.gk || a.ud || (a.gk = c, c.cd && c != c.qe() ? Eb(a, c.qe()) : Eb(a, c))
}

function Eb(a, c) {
    c.La ? Eb(a, c.getParent()) : a.lc = c
}

function yb(a) {
    return (a.hk ? zb(a.hk) : !1) && !a.di && (!a.ya || !a.ya.Qh)
}
b.bd = function() {
    return this.Ql || this.ni || this.Pl
};
b.Ij = function() {
    return this.Ne ? this.Ne.Ij() : []
};
h.He.ki = function() {
    for (var a = h.qb.getAll(), c = 0, d; d = a[c]; c++)
        if (d.tc) return !0;
    return !1
};
h.hH = function() {};
h.F = function(a, c, d) {
    if (!c) throw Error("Cannot create a node without a location.");
    this.Km = a;
    this.Ca = c;
    this.hz = null;
    (a = d || null) && a.gz && (this.hz = a.gz)
};
h.F.types = {
    Dc: "field",
    Sb: "block",
    yd: "input",
    Kh: "output",
    rg: "next",
    tg: "previous",
    Mh: "stack",
    Wc: "workspace"
};
h.F.qg = !1;
h.F.Hz = -20;
h.F.VJ = function(a) {
    switch (a) {
        case h.F.types.tg:
        case h.F.types.rg:
        case h.F.types.yd:
        case h.F.types.Kh:
            return !0
    }
    return !1
};
h.F.kl = function(a) {
    return a ? new h.F(h.F.types.Dc, a) : null
};
h.F.Ig = function(a) {
    if (!a) return null;
    var c = a.type;
    return c == h.X.Zb || c == h.X.$b && a.Ye() ? h.F.Wh(a.Ye()) : c == h.X.$b ? new h.F(h.F.types.rg, a) : c == h.X.Tc ? new h.F(h.F.types.Kh, a) : c == h.X.kd ? new h.F(h.F.types.tg, a) : null
};
h.F.Wh = function(a) {
    return a && a.connection ? new h.F(h.F.types.yd, a.connection) : null
};
h.F.Hg = function(a) {
    return a ? new h.F(h.F.types.Sb, a) : null
};
h.F.Yn = function(a) {
    return a ? new h.F(h.F.types.Mh, a) : null
};
h.F.uC = function(a, c) {
    return c && a ? new h.F(h.F.types.Wc, a, {
        gz: c
    }) : null
};
h.F.BJ = function(a) {
    var c = a.aa || a.S;
    return c ? h.F.Ig(c) : h.F.Hg(a)
};
b = h.F.prototype;
b.vb = function() {
    return this.Km
};

function Fb(a, c) {
    a = a.Ca;
    a instanceof h.Vi || (a = a.$());
    if (!a || !a.B) return null;
    var d = a.qe();
    a = d.B.ub(!0);
    for (var e = 0, f; f = a[e]; e++)
        if (d.id == f.id) return c = e + (c ? 1 : -1), -1 == c || c == a.length ? null : h.F.Yn(a[c]);
    throw Error("Couldn't find " + (c ? "next" : "previous") + " stack?!");
}

function Gb(a) {
    if (!a) return null;
    do var c = a.aa && a.aa.ra(); while (c && w(c) == a && (a = c));
    return (c = a.aa || a.S) && c.xa && c.xa.Ye() ? h.F.Wh(c.xa.Ye()) : h.F.Yn(a)
}
b.$ = function() {
    return this.vb() === h.F.types.Sb ? this.Ca : this.vb() === h.F.types.Mh ? this.Ca : this.vb() === h.F.types.Wc ? null : this.Ca.$()
};
b.next = function() {
    switch (this.Km) {
        case h.F.types.Mh:
            return Fb(this, !0);
        case h.F.types.Kh:
            var a = this.Ca;
            return h.F.Hg(a.$());
        case h.F.types.Dc:
            a: {
                var c = this.Ca,
                    d = c.Ye();a = c.$();c = d.eb.indexOf(c) + 1;d = a.U.indexOf(d);
                for (var e; e = a.U[d]; d++) {
                    for (var f = e.eb; c < f.length;) {
                        if (zb(f[c]) || h.F.qg) {
                            a = h.F.kl(f[c]);
                            break a
                        }
                        c++
                    }
                    c = 0;
                    if (e.connection) {
                        a = h.F.Wh(e);
                        break a
                    }
                }
                a = null
            }
            return a;
        case h.F.types.yd:
            a: {
                c = this.Ca.Ye();a = c.$();
                for (c = a.U.indexOf(c) + 1; d = a.U[c]; c++) {
                    e = d.eb;
                    f = 0;
                    for (var g; g = e[f]; f++)
                        if (zb(g) || h.F.qg) {
                            a =
                                h.F.kl(g);
                            break a
                        } if (d.connection) {
                        a = h.F.Wh(d);
                        break a
                    }
                }
                a = null
            }
            return a;
        case h.F.types.Sb:
            return h.F.Ig(this.Ca.ca);
        case h.F.types.tg:
            return a = this.Ca, h.F.Hg(a.$());
        case h.F.types.rg:
            return a = this.Ca, h.F.Ig(a.xa)
    }
    return null
};
b.Qg = function() {
    switch (this.Km) {
        case h.F.types.Wc:
            var a = this.Ca.ub(!0);
            if (0 < a.length) return h.F.Yn(a[0]);
            break;
        case h.F.types.Mh:
            a = this.Ca;
            var c = a.aa || a.S;
            return c ? h.F.Ig(c) : h.F.Hg(a);
        case h.F.types.Sb:
            a = this.Ca;
            a: {
                a = a.U;c = 0;
                for (var d; d = a[c]; c++) {
                    for (var e = d.eb, f = 0, g; g = e[f]; f++)
                        if (zb(g) || h.F.qg) {
                            a = h.F.kl(g);
                            break a
                        } if (d.connection) {
                        a = h.F.Wh(d);
                        break a
                    }
                }
                a = null
            }
            return a;
        case h.F.types.yd:
            return h.F.Ig(this.Ca.xa)
    }
    return null
};
b.ih = function() {
    switch (this.Km) {
        case h.F.types.Mh:
            return Fb(this, !1);
        case h.F.types.Dc:
            a: {
                var a = this.Ca;
                var c = a.Ye();
                var d = a.$();a = c.eb.indexOf(a) - 1;
                for (var e = d.U.indexOf(c), f; f = d.U[e]; e--) {
                    if (f.connection && f !== c) {
                        c = h.F.Wh(f);
                        break a
                    }
                    for (f = f.eb; - 1 < a;) {
                        if (zb(f[a]) || h.F.qg) {
                            c = h.F.kl(f[a]);
                            break a
                        }
                        a--
                    }
                    0 <= e - 1 && (a = d.U[e - 1].eb.length - 1)
                }
                c = null
            }
            return c;
        case h.F.types.yd:
            a: {
                c = this.Ca.Ye();d = c.$();
                for (a = d.U.indexOf(c); e = d.U[a]; a--) {
                    if (e.connection && e !== c) {
                        c = h.F.Wh(e);
                        break a
                    }
                    e = e.eb;
                    f = e.length - 1;
                    for (var g; g =
                        e[f]; f--)
                        if (zb(g) || h.F.qg) {
                            c = h.F.kl(g);
                            break a
                        }
                }
                c = null
            }
            return c;
        case h.F.types.Sb:
            return c = this.Ca, h.F.Ig(c.aa || c.S);
        case h.F.types.tg:
            c = this.Ca;
            if ((c = c.xa) && !c.Ye()) return h.F.Ig(c);
            break;
        case h.F.types.rg:
            return c = this.Ca, h.F.Hg(c.$())
    }
    return null
};
b.fh = function() {
    switch (this.Km) {
        case h.F.types.Mh:
            var a = this.Ca,
                c = a.Za();
            return h.F.uC(a.B, new h.g.T(c.x, c.y + h.F.Hz));
        case h.F.types.Kh:
            return a = this.Ca, (c = a.xa) ? h.F.Ig(c) : h.F.Yn(a.$());
        case h.F.types.Dc:
            return h.F.Hg(this.Ca.$());
        case h.F.types.yd:
            return a = this.Ca, h.F.Hg(a.$());
        case h.F.types.Sb:
            return a = this.Ca, Gb(a);
        case h.F.types.tg:
            return a = this.Ca, Gb(a.$());
        case h.F.types.rg:
            return a = this.Ca, Gb(a.$())
    }
    return null
};
h.qn = function() {
    this.Hd = this.ke = this.sb = null;
    this.type = "marker"
};

function Hb(a, c) {
    var d = a.ke;
    a.ke = c;
    a.Hd && a.Hd.draw(d, a.ke)
}
h.qn.prototype.draw = function() {
    this.Hd && this.Hd.draw(this.ke, this.ke)
};
h.qn.prototype.$a = function() {
    this.Hd && this.Hd.$a()
};
h.qn.prototype.H = function() {
    this.Hd && this.Hd.H()
};
h.jg = function() {
    h.jg.v.constructor.call(this);
    this.type = "cursor"
};
h.g.object.V(h.jg, h.qn);
h.jg.prototype.next = function() {
    var a = this.ke;
    if (!a) return null;
    for (a = a.next(); a && a.next() && (a.vb() == h.F.types.rg || a.vb() == h.F.types.Sb);) a = a.next();
    a && Hb(this, a);
    return a
};
h.jg.prototype.Qg = function() {
    var a = this.ke;
    if (!a) return null;
    if (a.vb() == h.F.types.tg || a.vb() == h.F.types.Kh) a = a.next();
    (a = a.Qg()) && Hb(this, a);
    return a
};
h.jg.prototype.ih = function() {
    var a = this.ke;
    if (!a) return null;
    for (a = a.ih(); a && a.ih() && (a.vb() == h.F.types.rg || a.vb() == h.F.types.Sb);) a = a.ih();
    a && Hb(this, a);
    return a
};
h.jg.prototype.fh = function() {
    var a = this.ke;
    if (!a) return null;
    (a = a.fh()) && a.vb() == h.F.types.Sb && (a = a.ih() || a);
    a && Hb(this, a);
    return a
};
h.u.register(h.u.R.xk, h.u.Zi, h.jg);
h.Lk = function(a) {
    this.Kf = this.Fd = null;
    this.Yl = Object.create(null);
    this.m = a
};
h.Lk.av = "local_marker_1";
b = h.Lk.prototype;
b.Dl = function() {
    return this.Fd
};
b.Gl = function(a) {
    return this.Yl[a] || null
};
b.Zf = function(a) {
    a ? (this.m.xb.appendChild(a), this.Kf = a) : this.Kf = null
};
b.nh = function(a) {
    a ? this.m.xb && (this.Kf ? this.m.xb.insertBefore(a, this.Kf) : this.m.xb.appendChild(a)) : this.Wf = null
};
b.H = function() {
    for (var a = Object.keys(this.Yl), c = 0, d; d = a[c]; c++) {
        var e = this.Yl[d];
        if (e) e.H(), delete this.Yl[d];
        else throw Error("Marker with ID " + d + " does not exist. Can only unregister markers that exist.");
    }
    this.Yl = null;
    this.Fd && (this.Fd.H(), this.Fd = null)
};
h.Z = {};
h.Z.Pd = null;
h.Z.ho = null;
h.Z.ue = "";
h.Z.ze = "";
h.Z.Va = function() {
    h.Z.ab || (h.Z.ab = document.createElement("div"), h.Z.ab.className = "blocklyWidgetDiv", (h.ap || document.body).appendChild(h.Z.ab))
};
h.Z.show = function(a, c, d) {
    h.Z.$a();
    h.Z.Pd = a;
    h.Z.ho = d;
    a = h.Z.ab;
    a.style.direction = c ? "rtl" : "ltr";
    a.style.display = "block";
    c = h.Lg();
    h.Z.ue = c.mb.me();
    h.Z.ze = c.Qf().me();
    h.g.j.Nb(a, h.Z.ue);
    h.g.j.Nb(a, h.Z.ze)
};
h.Z.$a = function() {
    if (h.Z.isVisible()) {
        h.Z.Pd = null;
        var a = h.Z.ab;
        a.style.display = "none";
        a.style.left = "";
        a.style.top = "";
        h.Z.ho && h.Z.ho();
        h.Z.ho = null;
        a.textContent = "";
        h.Z.ue && (h.g.j.fd(a, h.Z.ue), h.Z.ue = "");
        h.Z.ze && (h.g.j.fd(a, h.Z.ze), h.Z.ze = "");
        ba(h.Lg())
    }
};
h.Z.isVisible = function() {
    return !!h.Z.Pd
};
h.Z.Ll = function(a) {
    h.Z.Pd == a && h.Z.$a()
};
h.Z.im = function(a, c, d) {
    h.Z.ab.style.left = a + "px";
    h.Z.ab.style.top = c + "px";
    h.Z.ab.style.height = d + "px"
};
h.Z.tE = function(a, c, d, e) {
    var f = h.Z.ZB(a, c, d);
    a = h.Z.YB(a, c, d, e);
    0 > f ? h.Z.im(a, 0, d.height + f) : h.Z.im(a, f, d.height)
};
h.Z.YB = function(a, c, d, e) {
    if (e) return c = Math.max(c.right - d.width, a.left), Math.min(c, a.right - d.width);
    c = Math.min(c.left, a.right - d.width);
    return Math.max(c, a.left)
};
h.Z.ZB = function(a, c, d) {
    return c.bottom + d.height >= a.bottom ? c.top - d.height : c.bottom
};
h.xd = function(a, c, d) {
    this.pf = this.Ip;
    this.Ty = this.Zy = null;
    this.zc = new h.g.Uc(0, 0);
    this.s = this.Ps = this.Ni = this.Ac = this.Pb = this.$c = this.Wf = this.Kf = null;
    d && this.cl(d);
    this.setValue(a);
    c && (this.Zy = c)
};
b = h.xd.prototype;
b.Ip = null;
b.name = void 0;
b.Te = !1;
b.Px = 50;
b.L = null;
b.Sg = !0;
b.uh = !0;
b.iw = null;
h.xd.gv = "\u00a0";
b = h.xd.prototype;
b.yk = !0;
b.zv = !1;
b.cl = function(a) {
    var c = a.tooltip;
    "string" == typeof c && (c = h.g.gd(a.tooltip));
    c && this.xe(c)
};
b.ga = function() {
    !this.s && this.L && this.L.B && this.L.B.ua && (this.s = this.L.B.mb.ga());
    return this.s
};
b.$ = function() {
    return this.L
};
b.Ba = function() {
    this.$c || (this.$c = h.g.j.J(h.g.D.Sc, {}, null), this.isVisible() || (this.$c.style.display = "none"), this.L.oa().appendChild(this.$c), this.vo(), Jb(this), this.xe(this.Ty), h.G.sj(aa(this)), this.Ps = h.N.Aa(aa(this), "mousedown", this, this.bh))
};
b.vo = function() {
    Kb(this);
    Lb(this)
};

function Kb(a) {
    a.Pb = h.g.j.J(h.g.D.Mb, {
        rx: a.ga().kn,
        ry: a.ga().kn,
        x: 0,
        y: 0,
        height: a.zc.height,
        width: a.zc.width,
        "class": "blocklyFieldRect"
    }, a.$c)
}

function Lb(a) {
    a.Ac = h.g.j.J(h.g.D.Gv, {
        "class": "blocklyText"
    }, a.$c);
    a.ga().Pp && a.Ac.setAttribute("dominant-baseline", "central");
    a.Ni = document.createTextNode("");
    a.Ac.appendChild(a.Ni)
}
b.Al = function(a) {
    this.setValue(a.textContent)
};
b.H = function() {
    h.C.Ll(this);
    h.Z.Ll(this);
    h.G.cu(aa(this));
    this.Ps && h.N.yb(this.Ps);
    h.g.j.removeNode(this.$c);
    this.Te = !0
};

function Jb(a) {
    var c = a.$c;
    a.yk && c && (a.L.Kd() ? (h.g.j.Nb(c, "blocklyEditableText"), h.g.j.fd(c, "blocklyNonEditableText"), c.style.cursor = a.xk) : (h.g.j.Nb(c, "blocklyNonEditableText"), h.g.j.fd(c, "blocklyEditableText"), c.style.cursor = ""))
}

function zb(a) {
    return !!a.L && a.L.Kd() && !!a.np && "function" === typeof a.np
}
b.isVisible = function() {
    return this.uh
};
b.Jb = function(a) {
    if (this.uh != a) {
        this.uh = a;
        var c = this.oa();
        c && (c.style.display = a ? "block" : "none")
    }
};
b.oa = function() {
    return this.$c
};
b.ec = function() {};
b.Bt = function() {
    this.Ni && (this.Ni.nodeValue = Mb(this));
    this.Xy()
};
b.Xy = function() {
    var a = this.ga(),
        c = this.Pb ? this.ga().zk : 0,
        d = 2 * c,
        e = a.ln,
        f = 0;
    this.Ac && (f = h.g.j.Yr(this.Ac, a.Fh, a.lg, a.kg), d += f);
    this.Pb && (e = Math.max(e, a.Iu));
    this.zc.height = e;
    this.zc.width = d;
    Nb(this, c, f);
    Ob(this)
};

function Nb(a, c, d) {
    if (a.Ac) {
        var e = a.ga(),
            f = a.zc.height / 2;
        a.Ac.setAttribute("x", a.L.I ? a.zc.width - d - c : c);
        a.Ac.setAttribute("y", e.Pp ? f : f - e.ln / 2 + e.Op)
    }
}

function Ob(a) {
    a.Pb && (a.Pb.setAttribute("width", a.zc.width), a.Pb.setAttribute("height", a.zc.height), a.Pb.setAttribute("rx", a.ga().kn), a.Pb.setAttribute("ry", a.ga().kn))
}
b.Pf = function() {
    if (!this.isVisible()) return new h.g.Uc(0, 0);
    this.Sg ? (this.Bt(), this.Sg = !1) : this.uh && 0 == this.zc.width && (console.warn("Deprecated use of setting size_.width to 0 to rerender a field. Set field.isDirty_ to true instead."), this.Bt());
    return this.zc
};

function Mb(a) {
    var c = Pb(a);
    if (!c) return h.xd.gv;
    c.length > a.Px && (c = c.substring(0, a.Px - 2) + "\u2026");
    c = c.replace(/\s/g, h.xd.gv);
    a.L && a.L.I && (c += "\u200f");
    return c
}

function Pb(a) {
    if (a.gs) {
        var c = a.gs.call(a);
        if (null !== c) return String(c)
    }
    return String(a.getValue())
}
b.Xl = function() {
    this.Sg = !0;
    this.s = null
};

function Qb(a) {
    a.Sg = !0;
    a.L && a.L.ua && (a.L.Ja(), a.L.Zc(), a.fu())
}
b.setValue = function(a) {
    if (null !== a) {
        var c = this.io(a);
        a = Rb(this, a, c);
        if (!(a instanceof Error)) {
            if (c = this.Zy)
                if (c = c.call(this, a), a = Rb(this, a, c), a instanceof Error) return;
            c = this.L;
            if (!c || !c.Te) {
                var d = this.getValue();
                d === a ? this.rl(a) : (c && h.h.isEnabled() && h.h.Ga(new(h.h.get(h.h.wh))(c, "field", this.name || null, d, a)), this.rl(a), this.Sg && Qb(this))
            }
        }
    }
};

function Rb(a, c, d) {
    if (null === d) return a.Sg && Qb(a), Error();
    void 0 !== d && (c = d);
    return c
}
b.getValue = function() {
    return this.pf
};
b.io = function(a) {
    return null === a || void 0 === a ? null : a
};
b.rl = function(a) {
    this.pf = a;
    this.Sg = !0
};
b.bh = function(a) {
    if (this.L && this.L.B && (a = this.L.B.Kg(a))) {
        if (a.ei) throw Error("Tried to call gesture.setStartField, but the gesture had already been started.");
        a.hk || (a.hk = this)
    }
};
b.xe = function(a) {
    a || "" === a || (a = this.L);
    var c = aa(this);
    c ? c.Ud = a : this.Ty = a
};

function aa(a) {
    return a.iw || a.oa()
}
b.Ye = function() {
    for (var a = null, c = this.L, d = c.U, e = 0; e < c.U.length; e++)
        for (var f = d[e], g = f.eb, k = 0; k < g.length; k++)
            if (g[k] === this) {
                a = f;
                break
            } return a
};
b.Yw = function() {
    return !1
};
b.Zf = function(a) {
    a ? (this.$c.appendChild(a), this.Kf = a) : this.Kf = null
};
b.nh = function(a) {
    a ? (this.$c.appendChild(a), this.Wf = a) : this.Wf = null
};
b.fu = function() {
    var a = this.L.B;
    a.Ul && this.Kf && a.Dl().draw();
    a.Ul && this.Wf && a.Gl(h.Lk.av).draw()
};
h.Jg = {};
h.Jg.register = function(a, c) {
    h.u.register(h.u.R.Dc, a, c)
};
h.Jg.unregister = function(a) {
    h.u.unregister(h.u.R.Dc, a)
};
h.Jg.ba = function(a) {
    var c = h.u.bs(h.u.R.Dc, a.type);
    return c ? c.ba(a) : (console.warn("Blockly could not create a field of type " + a.type + ". The field is probably not being registered. This could be because the file is not loaded, the field does not register itself (Issue #1584), or the registration is not being reached."), null)
};
h.g.Ab = {};
h.g.Ab.mz = "aria-";
h.g.Ab.hB = "role";
h.g.Ab.vn = {
    EG: "grid",
    FG: "gridcell",
    GG: "group",
    CA: "listbox",
    IA: "menu",
    JA: "menuitem",
    vH: "menuitemcheckbox",
    QA: "option",
    zI: "presentation",
    pq: "row",
    ZI: "tree",
    $I: "treeitem"
};
h.g.Ab.State = {
    jz: "activedescendant",
    TF: "colcount",
    Kz: "disabled",
    iG: "expanded",
    eH: "invalid",
    AA: "label",
    lH: "labelledby",
    oH: "level",
    sI: "orientation",
    yI: "posinset",
    FI: "rowcount",
    gj: "selected",
    JI: "setsize",
    cJ: "valuemax",
    dJ: "valuemin"
};
h.g.Ab.oh = function(a, c) {
    a.setAttribute(h.g.Ab.hB, c)
};
h.g.Ab.lp = function(a, c, d) {
    Array.isArray(d) && (d = d.join(" "));
    a.setAttribute(h.g.Ab.mz + c, d)
};
h.g.ka = {
    iJ: 0,
    qH: 3,
    pz: 8,
    QI: 9,
    BH: 12,
    Tz: 13,
    xn: 16,
    Ch: 17,
    Ui: 18,
    uI: 19,
    PF: 20,
    Uz: 27,
    lB: 32,
    VA: 33,
    UA: 34,
    Sz: 35,
    oA: 36,
    Hb: 37,
    Dn: 38,
    Gc: 39,
    Lp: 40,
    xI: 43,
    AI: 44,
    dH: 45,
    Dh: 46,
    ZERO: 48,
    ONE: 49,
    aJ: 50,
    RI: 51,
    DG: 52,
    BG: 53,
    MI: 54,
    KI: 55,
    gG: 56,
    zH: 57,
    zG: 59,
    xG: 61,
    wG: 173,
    yG: 163,
    BI: 63,
    IF: 64,
    DF: 65,
    JF: 66,
    Ep: 67,
    XF: 68,
    E: 69,
    jG: 70,
    Sc: 71,
    HG: 72,
    JG: 73,
    iH: 74,
    jH: 75,
    kH: 76,
    pH: 77,
    yH: 78,
    RH: 79,
    tI: 80,
    Q: 81,
    CI: 82,
    GI: 83,
    OI: 84,
    bJ: 85,
    Bq: 86,
    fJ: 87,
    Eq: 88,
    yB: 89,
    pj: 90,
    cj: 91,
    jJ: 92,
    WF: 93,
    QH: 96,
    JH: 97,
    PH: 98,
    OH: 99,
    FH: 100,
    EH: 101,
    NH: 102,
    MH: 103,
    DH: 104,
    IH: 105,
    HH: 106,
    LH: 107,
    GH: 109,
    KH: 110,
    CH: 111,
    kG: 112,
    oG: 113,
    pG: 114,
    qG: 115,
    rG: 116,
    sG: 117,
    tG: 118,
    uG: 119,
    vG: 120,
    lG: 121,
    mG: 122,
    nG: 123,
    AH: 144,
    HI: 145,
    AG: 166,
    mH: 183,
    II: 186,
    YF: 189,
    hG: 187,
    VF: 188,
    vI: 190,
    NI: 191,
    HF: 192,
    SI: 192,
    LI: 222,
    SH: 219,
    KF: 220,
    SF: 221,
    hJ: 224,
    rH: 224,
    sH: 91,
    tH: 93,
    gJ: 229,
    eJ: 252,
    wI: 255
};
h.bq = function() {
    this.se = [];
    this.Gi = this.cb = this.Xo = this.To = this.So = this.Gf = this.Uo = this.gi = this.ft = null
};
b = h.bq.prototype;
b.Ja = function(a) {
    var c = document.createElement("div");
    c.className = "blocklyMenu goog-menu blocklyNonSelectable";
    c.tabIndex = 0;
    this.Gi && h.g.Ab.oh(c, this.Gi);
    this.cb = c;
    for (var d = 0, e; e = this.se[d]; d++) c.appendChild(e.Va());
    this.Uo = h.N.Aa(c, "mouseover", this, this.tD, !0);
    this.Gf = h.N.Aa(c, "click", this, this.oD, !0);
    this.So = h.N.Aa(c, "mouseenter", this, this.rD, !0);
    this.To = h.N.Aa(c, "mouseleave", this, this.sD, !0);
    this.Xo = h.N.Aa(c, "keydown", this, this.pD);
    a.appendChild(c)
};
b.focus = function() {
    var a = this.cb;
    a && (a.focus({
        preventScroll: !0
    }), h.g.j.Nb(a, "blocklyFocused"))
};
b.oh = function(a) {
    this.Gi = a
};
b.H = function() {
    this.Uo && (h.N.yb(this.Uo), this.Uo = null);
    this.Gf && (h.N.yb(this.Gf), this.Gf = null);
    this.So && (h.N.yb(this.So), this.So = null);
    this.To && (h.N.yb(this.To), this.To = null);
    this.Xo && (h.N.yb(this.Xo), this.Xo = null);
    for (var a = 0, c; c = this.se[a]; a++) c.H();
    this.cb = null
};

function Sb(a, c) {
    for (var d = a.cb; c && c != d;) {
        if (h.g.j.ks(c, "blocklyMenuItem"))
            for (var e = 0, f; f = a.se[e]; e++)
                if (f.cb == c) return f;
        c = c.parentElement
    }
    return null
}
b.we = function(a) {
    var c = this.gi;
    c && (c.we(!1), this.gi = null);
    a && (a.we(!0), this.gi = a, c = this.cb, h.g.style.XE(a.cb, c), h.g.Ab.lp(c, h.g.Ab.State.jz, a.hc()))
};

function Tb(a, c, d) {
    c += d;
    for (var e; e = a.se[c];) {
        if (e.isEnabled()) {
            a.we(e);
            break
        }
        c += d
    }
}
b.tD = function(a) {
    (a = Sb(this, a.target)) && (a.isEnabled() ? this.gi != a && this.we(a) : this.we(null))
};
b.oD = function(a) {
    var c = this.ft;
    this.ft = null;
    c && "number" == typeof a.clientX && 1 > h.g.T.Br(c, new h.g.T(a.clientX, a.clientY)) || (a = Sb(this, a.target)) && a.isEnabled() && a.Wk && a.Wk(a)
};
b.rD = function() {
    this.focus()
};
b.sD = function() {
    if (this.cb) {
        var a = this.cb;
        a && (a.blur(), h.g.j.fd(a, "blocklyFocused"));
        this.we(null)
    }
};
b.pD = function(a) {
    if (this.se.length && !(a.shiftKey || a.ctrlKey || a.metaKey || a.altKey)) {
        var c = this.gi;
        switch (a.keyCode) {
            case h.g.ka.Tz:
            case h.g.ka.lB:
                c && c.isEnabled() && c.Wk && c.Wk(c);
                break;
            case h.g.ka.Dn:
                c = this.se.indexOf(this.gi);
                Tb(this, 0 > c ? this.se.length : c, -1);
                break;
            case h.g.ka.Lp:
                Tb(this, this.se.indexOf(this.gi), 1);
                break;
            case h.g.ka.VA:
            case h.g.ka.oA:
                Tb(this, -1, 1);
                break;
            case h.g.ka.UA:
            case h.g.ka.Sz:
                Tb(this, this.se.length, -1);
                break;
            default:
                return
        }
        a.preventDefault();
        a.stopPropagation()
    }
};
b.Pf = function() {
    var a = this.cb,
        c = h.g.style.Pf(a);
    c.height = a.scrollHeight;
    return c
};
h.cq = function(a, c) {
    this.Jf = a;
    this.pf = c;
    this.mo = !0;
    this.cb = null;
    this.Ht = !1;
    this.Gi = null;
    this.wx = this.$q = this.Zq = !1;
    this.Wk = null
};
b = h.cq.prototype;
b.Va = function() {
    var a = document.createElement("div");
    a.id = h.g.Gk.$w();
    this.cb = a;
    a.className = "blocklyMenuItem goog-menuitem " + (this.mo ? "" : "blocklyMenuItemDisabled goog-menuitem-disabled ") + (this.$q ? "blocklyMenuItemSelected goog-option-selected " : "") + (this.wx ? "blocklyMenuItemHighlight goog-menuitem-highlight " : "") + (this.Ht ? "blocklyMenuItemRtl goog-menuitem-rtl " : "");
    var c = document.createElement("div");
    c.className = "blocklyMenuItemContent goog-menuitem-content";
    if (this.Zq) {
        var d = document.createElement("div");
        d.className = "blocklyMenuItemCheckbox goog-menuitem-checkbox";
        c.appendChild(d)
    }
    d = this.Jf;
    "string" == typeof this.Jf && (d = document.createTextNode(this.Jf));
    c.appendChild(d);
    a.appendChild(c);
    this.Gi && h.g.Ab.oh(a, this.Gi);
    h.g.Ab.lp(a, h.g.Ab.State.gj, this.Zq && this.$q || !1);
    h.g.Ab.lp(a, h.g.Ab.State.Kz, !this.mo);
    return a
};
b.H = function() {
    this.cb = null
};
b.hc = function() {
    return this.cb.id
};
b.getValue = function() {
    return this.pf
};
b.oh = function(a) {
    this.Gi = a
};
b.we = function(a) {
    this.wx = a;
    var c = this.cb;
    c && this.isEnabled() && (a ? (h.g.j.Nb(c, "blocklyMenuItemHighlight"), h.g.j.Nb(c, "goog-menuitem-highlight")) : (h.g.j.fd(c, "blocklyMenuItemHighlight"), h.g.j.fd(c, "goog-menuitem-highlight")))
};
b.isEnabled = function() {
    return this.mo
};
b.jf = function(a) {
    this.mo = a
};

function Ub(a, c, d) {
    a.Wk = c.bind(d)
};
h.Ya = function(a, c, d) {
    "function" != typeof a && h.Ya.Yy(a);
    this.$l = a;
    this.Vt = this.st = this.oo = null;
    a = this.$l;
    if (Array.isArray(a)) {
        for (var e = !1, f = 0; f < a.length; f++) {
            var g = a[f][0];
            "string" == typeof g ? a[f][0] = h.g.gd(g) : (null != g.alt && (a[f][0].alt = h.g.gd(g.alt)), e = !0)
        }
        if (!(e || 2 > a.length)) {
            e = [];
            for (f = 0; f < a.length; f++) e.push(a[f][0]);
            f = h.g.Qa.Qt(e);
            g = h.g.Qa.kw(e, f);
            var k = h.g.Qa.lw(e, f);
            !g && !k || f <= g + k || (g && (this.st = e[0].substring(0, g - 1)), k && (this.Vt = e[0].substr(1 - k)), this.$l = h.Ya.MB(a, g, k))
        }
    }
    this.ak = this.getOptions(!1)[0];
    h.Ya.v.constructor.call(this, this.ak[1], c, d);
    this.ik = this.Bd = this.Mc = this.Oc = this.pm = null
};
h.g.object.V(h.Ya, h.xd);
h.Ya.ba = function(a) {
    return new h.Ya(a.options, void 0, a)
};
h.Ya.prototype.Al = function(a) {
    Vb(this) && this.getOptions(!1);
    this.setValue(a.textContent)
};
h.Ya.prototype.zv = !0;
h.Ya.QF = 25;
h.Ya.uH = .45;
h.Ya.sA = 5;
h.Ya.tA = 2 * h.Ya.sA;
h.Ya.Tm = h.g.userAgent.Sm ? "\u25bc" : "\u25be";
b = h.Ya.prototype;
b.xk = "default";
b.vo = function() {
    !this.ga().Ku || this.ga().Ku && !this.L.La ? Kb(this) : this.iw = this.L.oa();
    Lb(this);
    this.Mc = h.g.j.J(h.g.D.Ek, {}, this.$c);
    this.ga().eA ? (this.ik = h.g.j.J(h.g.D.Ek, {
        height: this.ga().Ak + "px",
        width: this.ga().Ak + "px"
    }, this.$c), this.ik.setAttributeNS(h.g.j.ld, "xlink:href", this.ga().fA)) : (this.Bd = h.g.j.J(h.g.D.Iv, {}, this.Ac), this.Bd.appendChild(document.createTextNode(this.L.I ? h.Ya.Tm + " " : " " + h.Ya.Tm)), this.L.I ? this.Ac.insertBefore(this.Bd, this.Ni) : this.Ac.appendChild(this.Bd));
    this.Pb && h.g.j.Nb(this.Pb,
        "blocklyDropdownRect")
};
b.np = function(a) {
    var c = new h.bq;
    c.oh(h.g.Ab.vn.CA);
    this.Oc = c;
    var d = this.getOptions(!1);
    this.pm = null;
    for (var e = 0; e < d.length; e++) {
        var f = d[e][0],
            g = d[e][1];
        if ("object" == typeof f) {
            var k = new Image(f.width, f.height);
            k.src = f.src;
            k.alt = f.alt || "";
            f = k
        }
        f = new h.cq(f, g);
        f.oh(h.g.Ab.vn.QA);
        f.Ht = this.L.I;
        f.Zq = !0;
        c.se.push(f);
        f.$q = g == this.pf;
        g == this.pf && (this.pm = f);
        Ub(f, this.qD, this)
    }
    this.Oc.ft = a && "number" === typeof a.clientX ? new h.g.T(a.clientX, a.clientY) : null;
    this.Oc.Ja(h.C.bD());
    h.g.j.Nb(this.Oc.cb, "blocklyDropdownMenu");
    this.ga().dA && (a = this.L.La ? this.L.getParent().Wr() : this.L.Wr(), c = this.L.La ? this.L.getParent().style.xj : this.L.style.xj, h.C.ve(a, c));
    h.C.dF(this, this.HC.bind(this));
    this.Oc.focus();
    this.pm && this.Oc.we(this.pm);
    this.ec()
};
b.HC = function() {
    this.Oc && this.Oc.H();
    this.pm = this.Oc = null;
    this.ec()
};
b.qD = function(a) {
    h.C.Ll(this, !0);
    this.setValue(a.getValue())
};
h.Ya.MB = function(a, c, d) {
    for (var e = [], f = 0; f < a.length; f++) {
        var g = a[f][0],
            k = a[f][1];
        g = g.substring(c, g.length - d);
        e[f] = [g, k]
    }
    return e
};

function Vb(a) {
    return "function" == typeof a.$l
}
b = h.Ya.prototype;
b.getOptions = function(a) {
    return Vb(this) ? (this.oo && a || (this.oo = this.$l.call(this), h.Ya.Yy(this.oo)), this.oo) : this.$l
};
b.io = function(a) {
    for (var c = !1, d = this.getOptions(!0), e = 0, f; f = d[e]; e++)
        if (f[1] == a) {
            c = !0;
            break
        } return c ? a : (this.L && console.warn("Cannot set the dropdown's value to an unavailable option. Block type: " + this.L.type + ", Field name: " + this.name + ", Value: " + a), null)
};
b.rl = function(a) {
    h.Ya.v.rl.call(this, a);
    a = this.getOptions(!0);
    for (var c = 0, d; d = a[c]; c++) d[1] == this.pf && (this.ak = d)
};
b.ec = function() {
    this.Pb && (this.Pb.setAttribute("stroke", this.L.style.xj), this.Oc ? this.Pb.setAttribute("fill", this.L.style.xj) : this.Pb.setAttribute("fill", "transparent"));
    this.L && this.Bd && (this.Bd.style.fill = this.L.La ? this.L.style.Sn : this.L.style.Th)
};
b.Bt = function() {
    this.Ni.nodeValue = "";
    this.Mc.style.display = "none";
    var a = this.ak && this.ak[0];
    if (a && "object" == typeof a) {
        this.Mc.style.display = "";
        this.Mc.setAttributeNS(h.g.j.ld, "xlink:href", a.src);
        this.Mc.setAttribute("height", a.height);
        this.Mc.setAttribute("width", a.width);
        var c = Number(a.height);
        a = Number(a.width);
        var d = !!this.Pb,
            e = Math.max(d ? this.ga().Ju : 0, c + h.Ya.tA);
        d = d ? this.ga().zk : 0;
        var f = this.ik ? Wb(this, a + d, e / 2 - this.ga().Ak / 2) : h.g.j.Yr(this.Bd, this.ga().Fh, this.ga().lg, this.ga().kg);
        this.zc.width =
            a + f + 2 * d;
        this.zc.height = e;
        var g = 0;
        this.L.I ? this.Mc.setAttribute("x", d + f) : (g = a + f, this.Ac.setAttribute("text-anchor", "end"), this.Mc.setAttribute("x", d));
        this.Mc.setAttribute("y", e / 2 - c / 2);
        Nb(this, g + d, a + f)
    } else this.Ni.nodeValue = Mb(this), h.g.j.Nb(this.Ac, "blocklyDropdownText"), this.Ac.setAttribute("text-anchor", "start"), e = !!this.Pb, c = Math.max(e ? this.ga().Ju : 0, this.ga().ln), a = h.g.j.Yr(this.Ac, this.ga().Fh, this.ga().lg, this.ga().kg), e = e ? this.ga().zk : 0, d = 0, this.ik && (d = Wb(this, a + e, c / 2 - this.ga().Ak / 2)), this.zc.width =
        a + d + 2 * e, this.zc.height = c, Nb(this, e, a);
    Ob(this)
};

function Wb(a, c, d) {
    if (!a.ik) return 0;
    var e = a.Pb ? a.ga().zk : 0,
        f = a.ga().gA,
        g = a.ga().Ak;
    a.ik.setAttribute("transform", "translate(" + (a.L.I ? e : c + f) + "," + d + ")");
    return g + f
}
b.gs = function() {
    if (!this.ak) return null;
    var a = this.ak[0];
    return "object" == typeof a ? a.alt : a
};
h.Ya.Yy = function(a) {
    if (!Array.isArray(a)) throw TypeError("FieldDropdown options must be an array.");
    if (!a.length) throw TypeError("FieldDropdown options must not be an empty array.");
    for (var c = !1, d = 0; d < a.length; ++d) {
        var e = a[d];
        Array.isArray(e) ? "string" != typeof e[1] ? (c = !0, console.error("Invalid option[" + d + "]: Each FieldDropdown option id must be a string. Found " + e[1] + " in: ", e)) : e[0] && "string" != typeof e[0] && "string" != typeof e[0].src && (c = !0, console.error("Invalid option[" + d + "]: Each FieldDropdown option must have a string label or image description. Found" +
            e[0] + " in: ", e)) : (c = !0, console.error("Invalid option[" + d + "]: Each FieldDropdown option must be an array. Found: ", e))
    }
    if (c) throw TypeError("Found invalid FieldDropdown options.");
};
h.Jg.register("field_dropdown", h.Ya);
h.nc = Object.create(null);
h.za = {};
h.za.nk = Object.create(null);
h.za.register = function(a, c) {
    if ("string" != typeof a || "" == a.trim()) throw Error('Error: Invalid extension name "' + a + '"');
    if (h.za.nk[a]) throw Error('Error: Extension "' + a + '" is already registered.');
    if ("function" != typeof c) throw Error('Error: Extension "' + a + '" must be a function');
    h.za.nk[a] = c
};
h.za.hK = function(a, c) {
    if (!c || "object" != typeof c) throw Error('Error: Mixin "' + a + '" must be a object');
    h.za.register(a, function() {
        this.$g(c)
    })
};
h.za.iK = function(a, c, d, e) {
    var f = 'Error when registering mutator "' + a + '": ';
    h.za.ew(f, c.Lf, "domToMutation");
    h.za.ew(f, c.Nd, "mutationToDom");
    var g = h.za.gw(c, f);
    if (d && "function" != typeof d) throw Error('Extension "' + a + '" is not a function');
    h.za.register(a, function() {
        if (g) {
            if (!h.LA) throw Error(f + "Missing require for Blockly.Mutator");
            this.Hy(new h.LA(e || []))
        }
        this.$g(c);
        d && d.apply(this)
    })
};
h.za.unregister = function(a) {
    h.za.nk[a] ? delete h.za.nk[a] : console.warn('No extension mapping for name "' + a + '" found to unregister')
};
h.za.apply = function(a, c, d) {
    var e = h.za.nk[a];
    if ("function" != typeof e) throw Error('Error: Extension "' + a + '" not found.');
    if (d) h.za.cC(a, c);
    else var f = h.za.$r(c);
    e.apply(c);
    if (d) h.za.aC('Error after applying mutator "' + a + '": ', c);
    else if (!h.za.aE(f, c)) throw Error('Error when applying extension "' + a + '": mutation properties changed when applying a non-mutator extension.');
};
h.za.ew = function(a, c, d) {
    if (!c) throw Error(a + 'missing required property "' + d + '"');
    if ("function" != typeof c) throw Error(a + '" required property "' + d + '" must be a function');
};
h.za.cC = function(a, c) {
    if (h.za.$r(c).length) throw Error('Error: tried to apply mutation "' + a + '" to a block that already has mutator functions.  Block id: ' + c.id);
};
h.za.gw = function(a, c) {
    var d = void 0 !== a.gr,
        e = void 0 !== a.lr;
    if (d && e) {
        if ("function" != typeof a.gr) throw Error(c + "compose must be a function.");
        if ("function" != typeof a.lr) throw Error(c + "decompose must be a function.");
        return !0
    }
    if (!d && !e) return !1;
    throw Error(c + 'Must have both or neither of "compose" and "decompose"');
};
h.za.aC = function(a, c) {
    if ("function" != typeof c.Lf) throw Error(a + 'Applying a mutator didn\'t add "domToMutation"');
    if ("function" != typeof c.Nd) throw Error(a + 'Applying a mutator didn\'t add "mutationToDom"');
    h.za.gw(c, a)
};
h.za.$r = function(a) {
    var c = [];
    void 0 !== a.Lf && c.push(a.Lf);
    void 0 !== a.Nd && c.push(a.Nd);
    void 0 !== a.gr && c.push(a.gr);
    void 0 !== a.lr && c.push(a.lr);
    return c
};
h.za.aE = function(a, c) {
    c = h.za.$r(c);
    if (c.length != a.length) return !1;
    for (var d = 0; d < c.length; d++)
        if (a[d] != c[d]) return !1;
    return !0
};
h.za.oJ = function(a, c) {
    var d = [];
    "object" == typeof document && h.g.Dy(function() {
        for (var e in c) h.g.fw(c[e])
    });
    return function() {
        this.type && -1 == d.indexOf(this.type) && (h.za.bC(this, a, c), d.push(this.type));
        this.xe(function() {
            var e = String(cb(this, a)),
                f = c[e];
            null == f ? -1 == d.indexOf(this.type) && (e = "No tooltip mapping for value " + e + " of field " + a, null != this.type && (e += " of block type " + this.type), console.warn(e + ".")) : f = h.g.gd(f);
            return f
        }.bind(this))
    }
};
h.za.bC = function(a, c, d) {
    var e = la(a, c);
    if (!Vb(e)) {
        e = e.getOptions();
        for (var f = 0; f < e.length; ++f) {
            var g = e[f][1];
            null == d[g] && console.warn("No tooltip mapping for value " + g + " of field " + c + " of block type " + a.type)
        }
    }
};
h.za.pJ = function(a, c) {
    "object" == typeof document && h.g.Dy(function() {
        h.g.fw(a)
    });
    return function() {
        this.xe(function() {
            var d = la(this, c);
            return h.g.gd(a).replace("%1", d ? Pb(d) : "")
        }.bind(this))
    }
};
h.za.LC = function() {
    this.rF = this.Ud;
    this.xe(function() {
        var a = this.getParent();
        return a && ya(a) && a.Ud || this.rF
    }.bind(this))
};
h.za.register("parent_tooltip_when_inline", h.za.LC);
h.hd = function(a, c, d) {
    this.On = null;
    h.hd.v.constructor.call(this, a, null, d);
    d || (this.On = c || null)
};
h.g.object.V(h.hd, h.xd);
h.hd.prototype.Ip = "";
h.hd.ba = function(a) {
    var c = h.g.gd(a.text);
    return new h.hd(c, void 0, a)
};
h.hd.prototype.yk = !1;
h.hd.prototype.cl = function(a) {
    h.hd.v.cl.call(this, a);
    this.On = a["class"]
};
h.hd.prototype.vo = function() {
    Lb(this);
    this.On && h.g.j.Nb(this.Ac, this.On)
};
h.hd.prototype.io = function(a) {
    return null === a || void 0 === a ? null : String(a)
};
h.Jg.register("field_label", h.hd);
h.Yu = function(a, c, d, e) {
    if (a != h.Ha.Fe && !c) throw Error("Value inputs and statement inputs must have non-empty name.");
    this.type = a;
    this.name = c;
    this.L = d;
    this.connection = e;
    this.eb = []
};
b = h.Yu.prototype;
b.align = h.kb.Xd.Hb;
b.uh = !0;
b.$ = function() {
    return this.L
};

function E(a, c, d) {
    Xb(a, a.eb.length, c, d);
    return a
}

function Xb(a, c, d, e) {
    if (0 > c || c > a.eb.length) throw Error("index " + c + " out of bounds.");
    if (!(d || "" == d && e)) return c;
    "string" == typeof d && (d = h.Jg.ba({
        type: "field_label",
        text: d
    }));
    if (d.L) throw Error("Field already bound to a block.");
    d.L = a.L;
    a.L.ua && (d.Ba(), d.ec());
    d.name = e;
    d.Jb(a.isVisible());
    d.st && (c = Xb(a, c, d.st));
    a.eb.splice(c, 0, d);
    ++c;
    d.Vt && (c = Xb(a, c, d.Vt));
    a.L.ua && (a.L = a.L, a.L.Ja(), a.L.Zc());
    return c
}
b.isVisible = function() {
    return this.uh
};
b.Jb = function(a) {
    if (this.uh != a) {
        this.uh = a;
        for (var c = 0, d; d = this.eb[c]; c++) d.Jb(a);
        if (this.connection) {
            this.connection = this.connection;
            if (a) Yb(this.connection);
            else if (c = this.connection, Zb(c, !1), c.xa)
                for (c = v(c.ra(), !1), d = 0; d < c.length; d++) {
                    for (var e = c[d], f = e.ne(!0), g = 0; g < f.length; g++) Zb(f[g], !1);
                    e = Aa(e);
                    for (g = 0; g < e.length; g++) e[g].Jb(!1)
                }
            if (c = this.connection.ra()) c.oa().style.display = a ? "block" : "none"
        }
    }
};
b.Xl = function() {
    for (var a = 0, c; c = this.eb[a]; a++) c.Xl()
};
b.bk = function(a) {
    if (!this.connection) throw Error("This input does not have a connection.");
    this.connection.bk(a)
};
b.sm = function(a) {
    if (!this.connection) throw Error("This input does not have a connection.");
    this.connection.sm(a)
};
b.Kj = function() {
    if (!this.connection) throw Error("This input does not have a connection.");
    return this.connection.Kj()
};
b.Ba = function() {
    if (this.L.B.ua)
        for (var a = 0; a < this.eb.length; a++) this.eb[a].Ba()
};
b.H = function() {
    for (var a = 0, c; c = this.eb[a]; a++) c.H();
    this.connection && this.connection.H();
    this.L = null
};
h.Vi = function(a, c, d) {
    if (h.Generator && "undefined" != typeof h.Generator.prototype[c]) throw Error('Block prototypeName "' + c + '" conflicts with Blockly.Generator members.');
    this.id = d && !a.Lc(d) ? d : h.g.Xe();
    a.Nq[this.id] = this;
    this.aa = this.ca = this.S = null;
    this.U = [];
    this.Rf = void 0;
    this.disabled = !1;
    this.Ud = "";
    this.contextMenu = !0;
    this.gf = null;
    this.Ff = [];
    this.Lw = this.Sx = this.Cw = !0;
    this.Sh = this.La = !1;
    this.Uh = null;
    this.ie = {
        text: null,
        py: !1,
        size: new h.g.Uc(160, 80)
    };
    this.iz = new h.g.T(0, 0);
    this.B = a;
    this.cd = a.Sf;
    this.I =
        a.I;
    this.Uj = !1;
    this.Ze = void 0;
    this.ua = null;
    if (c) {
        this.type = c;
        d = h.nc[c];
        if (!d || "object" != typeof d) throw TypeError("Unknown block type: " + c);
        h.g.object.$g(this, d)
    }
    a.In(this);
    a.dg[this.type] || (a.dg[this.type] = []);
    a.dg[this.type].push(this);
    (a = h.h.Wb()) || h.h.ta(!0);
    c = h.h.Na;
    try {
        "function" == typeof this.Ba && (h.h.Na = !1, this.Ba(), h.h.Na = c), h.h.isEnabled() && h.h.Ga(new(h.h.get(h.h.xh))(this))
    } finally {
        a || h.h.ta(!1), h.h.Na = c
    }
    this.FD = this.Rf;
    if ("function" == typeof this.onchange) {
        if ((a = this.onchange) && "function" !=
            typeof a) throw Error("onchange must be a function.");
        this.em && jb(this.B, this.em);
        if (this.onchange = a) this.em = a.bind(this), D(this.B, this.em)
    }
};
h.Vi.$m = h.kb.$m;
h.Vi.Zm = h.kb.Zm;
b = h.Vi.prototype;
b.data = null;
b.Te = !1;
b.Dd = "#000000";
b.Bm = "";
b.H = function(a) {
    if (this.B) {
        this.em && jb(this.B, this.em);
        A(this, a);
        h.h.isEnabled() && h.h.Ga(new(h.h.get(h.h.Ap))(this));
        h.h.disable();
        try {
            if (this.B) {
                this.B.hp(this);
                var c = this.B;
                c.dg[this.type].splice(c.dg[this.type].indexOf(this), 1);
                c.dg[this.type].length || delete c.dg[this.type];
                delete this.B.Nq[this.id];
                this.B = null
            }
            h.selected == this && (h.selected = null);
            for (var d = this.Ff.length - 1; 0 <= d; d--) this.Ff[d].H(!1);
            d = 0;
            for (var e; e = this.U[d]; d++) e.H();
            this.U.length = 0;
            var f = this.ne(!0);
            d = 0;
            for (var g; g = f[d]; d++) g.H()
        } finally {
            h.h.enable(),
                this.Te = !0
        }
    }
};

function A(a, c) {
    if (a.S) {
        var d = null;
        a.S.isConnected() && (d = a.S.xa, a.S.disconnect());
        if (d && c) {
            a: {
                c = null;
                for (var e = 0; e < a.U.length; e++) {
                    var f = a.U[e].connection;
                    if (f && f.type == h.X.Zb && f.xa) {
                        if (c) {
                            c = null;
                            break a
                        }
                        c = f
                    }
                }
            }
            c && c.isConnected() && !c.ra().La && (c = c.xa, c.disconnect(), Ya(a.B.If, c, d, !1) ? d.connect(c) : c.at(d))
        }
    } else a.aa && (d = null, a.aa.isConnected() && (d = a.aa.xa, a.aa.disconnect()), e = w(a), c && e && !e.La && (c = a.ca.xa, c.disconnect(), d && Ya(a.B.If, d, c, !1) && d.connect(c)))
}
b.ne = function() {
    var a = [];
    this.S && a.push(this.S);
    this.aa && a.push(this.aa);
    this.ca && a.push(this.ca);
    for (var c = 0, d; d = this.U[c]; c++) d.connection && a.push(d.connection);
    return a
};
b.Io = function(a) {
    for (var c = this.ca; c;) {
        var d = c.ra();
        if (!d || a && d.La) return c;
        c = d.ca
    }
    return null
};
b.Zc = function() {};
b.getParent = function() {
    return this.gf
};

function na(a, c) {
    for (var d = 0, e; e = a.U[d]; d++)
        if (e.connection && e.connection.ra() == c) return e;
    return null
}

function $b(a) {
    do {
        var c = a;
        a = a.getParent();
        if (!a) return null
    } while (w(a) == c);
    return a
}

function w(a) {
    return a.ca && a.ca.ra()
}
b.qe = function() {
    var a = this;
    do {
        var c = a;
        a = c.gf
    } while (a);
    return c
};

function z(a, c) {
    if (!c) return a.Ff;
    c = [];
    for (var d = 0, e; e = a.U[d]; d++) e.connection && (e = e.connection.ra()) && c.push(e);
    (a = w(a)) && c.push(a);
    return c
}
b.kp = function(a) {
    if (a != this.gf) {
        if (this.gf) {
            h.g.Xk(this.gf.Ff, this);
            if (this.aa && this.aa.isConnected()) throw Error("Still connected to previous block.");
            if (this.S && this.S.isConnected()) throw Error("Still connected to parent block.");
            this.gf = null
        } else this.B.hp(this);
        (this.gf = a) ? a.Ff.push(this): this.B.In(this)
    }
};

function v(a, c) {
    var d = [a];
    a = z(a, c);
    for (var e, f = 0; e = a[f]; f++) d.push.apply(d, v(e, c));
    return d
}
b.cf = function() {
    return this.Cw && !this.La && !(this.B && this.B.options.readOnly)
};
b.wc = function() {
    return this.Sx && !this.La && !(this.B && this.B.options.readOnly)
};
b.Lt = function(a) {
    this.Sx = a
};
b.Ot = function(a) {
    this.La = a
};
b.rd = function() {
    return this.Uj
};
b.Gy = function(a) {
    this.Uj = a
};
b.Kd = function() {
    return this.Lw && !(this.B && this.B.options.readOnly)
};
b.Kt = function(a) {
    this.Lw = a;
    a = 0;
    for (var c; c = this.U[a]; a++)
        for (var d = 0, e; e = c.eb[d]; d++) Jb(e)
};
b.Zr = function(a, c) {
    var d = this.ne(!0);
    a = a.ne(!0);
    if (d.length != a.length) throw Error("Connection lists did not match in length.");
    for (var e = 0; e < a.length; e++)
        if (a[e] == c) return d[e];
    return null
};
b.xe = function(a) {
    this.Ud = a
};
b.Wr = function() {
    return this.Dd
};
b.ve = function(a) {
    this.Dd = h.g.bp(a).Kl
};
b.Li = function(a) {
    this.Bm = a
};

function la(a, c) {
    if ("string" !== typeof c) throw TypeError("Blockly.Block.prototype.getField expects a string with the field name but received " + (void 0 === c ? "nothing" : c + " of type " + typeof c) + " instead");
    for (var d = 0, e; e = a.U[d]; d++)
        for (var f = 0, g; g = e.eb[f]; f++)
            if (g.name === c) return g;
    return null
}

function ka(a) {
    for (var c = 0, d; d = a.U[c]; c++)
        for (var e = 0; d.eb[e]; e++);
    return []
}

function cb(a, c) {
    return (a = la(a, c)) ? a.getValue() : null
}
b.Ki = function(a, c) {
    if (a) {
        void 0 === c && (c = null);
        if (!this.aa) {
            if (this.S) throw Error("Remove output connection prior to adding previous connection.");
            this.aa = this.Wl(h.X.kd)
        }
        this.aa.bk(c)
    } else if (this.aa) {
        if (this.aa.isConnected()) throw Error("Must disconnect previous statement before removing connection.");
        this.aa.H();
        this.aa = null
    }
};
b.ek = function(a, c) {
    if (a) void 0 === c && (c = null), this.ca || (this.ca = this.Wl(h.X.$b)), this.ca.bk(c);
    else if (this.ca) {
        if (this.ca.isConnected()) throw Error("Must disconnect next statement before removing connection.");
        this.ca.H();
        this.ca = null
    }
};
b.Mt = function(a, c) {
    if (a) {
        void 0 === c && (c = null);
        if (!this.S) {
            if (this.aa) throw Error("Remove previous connection prior to adding output connection.");
            this.S = this.Wl(h.X.Tc)
        }
        this.S.bk(c)
    } else if (this.S) {
        if (this.S.isConnected()) throw Error("Must disconnect output value before removing connection.");
        this.S.H();
        this.S = null
    }
};
b.Ji = function(a) {
    this.Rf != a && (h.h.Ga(new(h.h.get(h.h.wh))(this, "inline", null, this.Rf, a)), this.Rf = a)
};

function ya(a) {
    if (void 0 != a.Rf) return a.Rf;
    for (var c = 1; c < a.U.length; c++)
        if (a.U[c - 1].type == h.Ha.Fe && a.U[c].type == h.Ha.Fe) return !1;
    for (c = 1; c < a.U.length; c++)
        if (a.U[c - 1].type == h.Ha.Me && a.U[c].type == h.Ha.Fe) return !0;
    return !1
}
b.isEnabled = function() {
    return !this.disabled
};
b.jf = function(a) {
    this.isEnabled() != a && (h.h.Ga(new(h.h.get(h.h.wh))(this, "disabled", null, this.disabled, !a)), this.disabled = !a)
};

function ac(a) {
    for (a = $b(a); a;) {
        if (a.disabled) return !0;
        a = $b(a)
    }
    return !1
}
b.isCollapsed = function() {
    return this.Sh
};
b.Hi = function(a) {
    this.Sh != a && (h.h.Ga(new(h.h.get(h.h.wh))(this, "collapsed", null, this.Sh, a)), this.Sh = a)
};
b.toString = function(a, c) {
    function d(n) {
        var q = n.vj;
        !q && n.xa && (q = n.xa.vj);
        return !!q && (-1 != q.indexOf("Boolean") || -1 != q.indexOf("Number"))
    }

    function e() {
        k && k.vb() == l.vb() && k.Ca == l.Ca && (k = null)
    }
    var f = [];
    c = c || "?";
    var g = h.F.qg;
    h.F.qg = !0;
    for (var k = h.F.Hg(this), l = k; k;) {
        switch (k.vb()) {
            case h.F.types.yd:
                var m = k.Ca;
                k.Qg() ? d(m) && f.push("(") : f.push(c);
                break;
            case h.F.types.Dc:
                m = k.Ca, m.name != h.kb.Zm && f.push(Pb(m))
        }
        m = k;
        k = m.Qg() || m.next();
        if (!k) {
            k = m.fh();
            for (e(); k && !k.next();) k = k.fh(), e(), k && k.vb() == h.F.types.yd && d(k.Ca) &&
                f.push(")");
            k && (k = k.next())
        }
    }
    h.F.qg = g;
    for (c = 2; c < f.length; c++) "(" == f[c - 2] && ")" == f[c] && (f[c - 2] = f[c - 1], f.splice(c - 1, 2));
    f = f.reduce(function(n, q) {
        return n + ("(" == n.substr(-1) || ")" == q ? "" : " ") + q
    }, "");
    f = f.trim() || "???";
    a && f.length > a && (f = f.substring(0, a - 3) + "...");
    return f
};

function bc(a, c) {
    return a.Cf(h.Ha.Fe, c || "")
}

function cc(a, c) {
    var d = c.type ? 'Block "' + c.type + '": ' : "";
    if (c.output && c.previousStatement) throw Error(d + "Must not have both an output and a previousStatement.");
    c.style && c.style.Ze && (a.Ze = c.style.Ze, c.style = null);
    if (c.style && c.colour) throw Error(d + "Must not have both a colour and a style.");
    if (c.style) {
        var e = c.style;
        try {
            a.Li(e)
        } catch (Ib) {
            console.warn(d + "Style does not exist: ", e)
        }
    } else if ("colour" in c)
        if (void 0 === c.colour) console.warn(d + "Undefined colour value.");
        else {
            e = c.colour;
            try {
                a.ve(e)
            } catch (Ib) {
                console.warn(d +
                    "Illegal colour value: ", e)
            }
        } for (e = 0; void 0 !== c["message" + e];) {
        var f = a,
            g = c["args" + e] || [],
            k = c["lastDummyAlign" + e],
            l = d,
            m = h.g.qF(c["message" + e]);
        var n = f;
        for (var q = m, p = g.length, u = [], H = 0, L = 0; L < q.length; L++) {
            var I = q[L];
            if ("number" == typeof I) {
                if (1 > I || I > p) throw Error('Block "' + n.type + '": Message index %' + I + " out of range.");
                if (u[I]) throw Error('Block "' + n.type + '": Message index %' + I + " duplicated.");
                u[I] = !0;
                H++
            }
        }
        if (H != p) throw Error('Block "' + n.type + '": Message does not reference all ' + p + " arg(s).");
        n = g;
        g = [];
        for (q = 0; q < m.length; q++) {
            p = m[q];
            "number" == typeof p && (p = n[p - 1]);
            if ("string" == typeof p && (p = dc(p), !p)) continue;
            g.push(p)
        }(m = g.length) && !ec(g[m - 1].type) && (m = {
            type: "input_dummy"
        }, k && (m.align = k), g.push(m));
        k = g;
        g = [];
        for (m = 0; n = k[m]; m++)
            if (ec(n.type)) {
                q = f;
                p = n;
                u = l;
                H = {
                    LEFT: h.kb.Xd.Hb,
                    RIGHT: h.kb.Xd.Gc,
                    CENTRE: h.kb.Xd.Ym,
                    CENTER: h.kb.Xd.Ym
                };
                n = null;
                switch (p.type) {
                    case "input_value":
                        n = q.Cf(h.Ha.Me, p.name);
                        break;
                    case "input_statement":
                        n = q.Cf(h.Ha.pc, p.name);
                        break;
                    case "input_dummy":
                        n = bc(q, p.name)
                }
                n ? (p.check && n.bk(p.check),
                    p.align && (q = H[p.align.toUpperCase()], void 0 === q ? console.warn(u + "Illegal align value: ", p.align) : (p = n, p.align = q, p.L.ua && (p.L = p.L, p.L.Ja())))) : n = null;
                if (n) {
                    for (q = 0; p = g[q]; q++) E(n, p[0], p[1]);
                    g.length = 0
                }
            } else(q = fc(f, n)) && g.push([q, n.name]);
        e++
    }
    void 0 !== c.inputsInline && a.Ji(c.inputsInline);
    void 0 !== c.output && a.Mt(!0, c.output);
    void 0 !== c.previousStatement && a.Ki(!0, c.previousStatement);
    void 0 !== c.nextStatement && a.ek(!0, c.nextStatement);
    void 0 !== c.tooltip && (e = c.tooltip, e = h.g.gd(e), a.xe(e));
    void 0 !== c.enableContextMenu &&
        (e = c.enableContextMenu, a.contextMenu = !!e);
    void 0 !== c.helpUrl && (e = c.helpUrl, e = h.g.gd(e), a.Oj = e);
    "string" == typeof c.extensions && (console.warn(d + "JSON attribute 'extensions' should be an array of strings. Found raw string in JSON for '" + c.type + "' block."), c.extensions = [c.extensions]);
    void 0 !== c.mutator && h.za.apply(c.mutator, a, !0);
    c = c.extensions;
    if (Array.isArray(c))
        for (d = 0; d < c.length; ++d) h.za.apply(c[d], a, !1)
}
b.$g = function(a, c) {
    if (void 0 !== c && "boolean" != typeof c) throw Error("opt_disableCheck must be a boolean if provided");
    if (!c) {
        c = [];
        for (var d in a) void 0 !== this[d] && c.push(d);
        if (c.length) throw Error("Mixin will overwrite block members: " + JSON.stringify(c));
    }
    h.g.object.$g(this, a)
};

function fc(a, c) {
    var d = h.Jg.ba(c);
    return !d && c.alt ? "string" == typeof c.alt ? (c = dc(c.alt)) ? fc(a, c) : null : fc(a, c.alt) : d
}

function ec(a) {
    return "input_value" == a || "input_statement" == a || "input_dummy" == a
}

function dc(a) {
    return (a = a.trim()) ? {
        type: "field_label",
        text: a
    } : null
}
b.Cf = function(a, c) {
    var d = null;
    if (a == h.Ha.Me || a == h.Ha.pc) d = this.Wl(a);
    a = new h.Yu(a, c, this, d);
    this.U.push(a);
    return a
};
b.zt = function(a, c) {
    for (var d = 0, e; e = this.U[d]; d++)
        if (e.name == a) return e.H(), this.U.splice(d, 1), !0;
    if (c) return !1;
    throw Error("Input not found: " + a);
};

function ja(a, c) {
    for (var d = 0, e; e = a.U[d]; d++)
        if (e.name == c) return e;
    return null
}

function gc(a, c) {
    return (a = ja(a, c)) && a.connection && a.connection.ra()
}
b.ck = function(a) {
    this.ie.text != a && (h.h.Ga(new(h.h.get(h.h.wh))(this, "comment", null, this.ie.text, a)), this.Uh = this.ie.text = a)
};
b.Hy = function() {};
b.Za = function() {
    return this.iz
};
b.moveBy = function(a, c) {
    if (this.gf) throw Error("Block has parent.");
    var d = new(h.h.get(h.h.yh))(this);
    this.iz.translate(a, c);
    d.Ei();
    h.h.Ga(d)
};
b.Wl = function(a) {
    return new h.va(this, a)
};
h.i = {};
h.i.fH = function() {};
h.Ra = {};
h.Ra.Zn = null;
h.Ra.Oc = null;
h.Ra.show = function(a, c, d) {
    h.Z.show(h.Ra, d, h.Ra.H);
    if (c.length) {
        var e = h.Ra.sE(c, d);
        h.Ra.Oc = e;
        h.Ra.uE(e, a, d);
        setTimeout(function() {
            e.focus()
        }, 1);
        h.Ra.Zn = null
    } else h.Ra.$a()
};
h.Ra.sE = function(a, c) {
    var d = new h.bq;
    d.oh(h.g.Ab.vn.IA);
    for (var e = 0, f; f = a[e]; e++) {
        var g = new h.cq(f.text);
        g.Ht = c;
        g.oh(h.g.Ab.vn.JA);
        d.se.push(g);
        g.jf(f.enabled);
        f.enabled && Ub(g, function() {
            h.Ra.$a();
            this.hb(this.scope)
        }, f)
    }
    return d
};
h.Ra.uE = function(a, c, d) {
    var e = h.g.mD();
    c = new h.g.Rect(c.clientY + e.top, c.clientY + e.top, c.clientX + e.left, c.clientX + e.left);
    h.Ra.tC(a);
    var f = a.Pf();
    d && (c.left += f.width, c.right += f.width, e.left += f.width, e.right += f.width);
    h.Z.tE(e, c, f, d);
    a.focus()
};
h.Ra.tC = function(a) {
    a.Ja(h.Z.ab);
    var c = a.cb;
    h.g.j.Nb(c, "blocklyContextMenu");
    h.N.Aa(c, "contextmenu", null, h.g.eE);
    a.focus()
};
h.Ra.$a = function() {
    h.Z.Ll(h.Ra);
    h.Ra.Zn = null
};
h.Ra.H = function() {
    h.Ra.Oc && (h.Ra.Oc.H(), h.Ra.Oc = null)
};
h.Ra.rJ = function(a, c) {
    return function() {
        h.h.disable();
        try {
            var d = h.K.Fj(c, a.B),
                e = a.Za();
            e.x = a.I ? e.x - h.oc : e.x + h.oc;
            e.y += 2 * h.oc;
            d.moveBy(e.x, e.y)
        } finally {
            h.h.enable()
        }
        h.h.isEnabled() && !d.La && h.h.Ga(new(h.h.get(h.h.xh))(d));
        d.select()
    }
};
h.Ra.uJ = function(a) {
    return {
        text: h.M.REMOVE_COMMENT,
        enabled: !0,
        hb: function() {
            h.h.ta(!0);
            a.H(!0, !0);
            h.h.ta(!1)
        }
    }
};
h.Ra.vJ = function(a) {
    return {
        text: h.M.DUPLICATE_COMMENT,
        enabled: !0,
        hb: function() {
            h.duplicate(a)
        }
    }
};
h.Ra.HK = function(a, c) {
    if (!h.oj) throw Error("Missing require for Blockly.WorkspaceCommentSvg");
    var d = {
        enabled: !h.g.userAgent.$d
    };
    d.text = h.M.ADD_COMMENT;
    d.hb = function() {
        var e = new h.oj(a, h.M.WORKSPACE_COMMENT_DEFAULT_TEXT, h.oj.Jz, h.oj.Jz),
            f = ca(a).getBoundingClientRect();
        f = new h.g.T(c.clientX - f.left, c.clientY - f.top);
        var g = h.g.Fl(a.xb);
        f = h.g.T.ql(f, g);
        f.scale(1 / a.scale);
        e.moveBy(f.x, f.y);
        a.ua && (e.Pj(), e.Ja(), e.select())
    };
    return d
};
h.Ea = function() {
    h.Ea.u = this;
    this.Rd = Object.create(null)
};
h.Ea.Hc = {
    Sb: "block",
    Wc: "workspace"
};
h.Ea.u = null;
h.Ea.prototype.register = function(a) {
    if (this.Rd[a.id]) throw Error('Menu item with ID "' + a.id + '" is already registered.');
    this.Rd[a.id] = a
};
h.Ea.prototype.unregister = function(a) {
    if (!this.Rd[a]) throw Error('Menu item with ID "' + a + '" not found.');
    delete this.Rd[a]
};
h.Ea.prototype.getItem = function(a) {
    return this.Rd[a] || null
};

function hc(a, c) {
    var d = [],
        e = h.Ea.u.Rd;
    Object.keys(e).forEach(function(f) {
        f = e[f];
        if (a == f.td) {
            var g = f.Db(c);
            "hidden" != g && (f = {
                text: "function" == typeof f.Kc ? f.Kc(c) : f.Kc,
                enabled: "enabled" == g,
                hb: f.hb,
                scope: c,
                weight: f.weight
            }, d.push(f))
        }
    });
    d.sort(function(f, g) {
        return f.weight - g.weight
    });
    return d
}
new h.Ea;
h.h.ug = function(a, c, d) {
    h.h.ug.v.constructor.call(this, d);
    this.Yx = a;
    this.Wx = c
};
h.g.object.V(h.h.ug, h.h.ee);
h.h.ug.prototype.type = h.h.gj;
h.h.ug.prototype.qa = function() {
    var a = h.h.ug.v.qa.call(this);
    a.oldElementId = this.Yx;
    a.newElementId = this.Wx;
    return a
};
h.h.ug.prototype.ba = function(a) {
    h.h.ug.v.ba.call(this, a);
    this.Yx = a.oldElementId;
    this.Wx = a.newElementId
};
h.u.register(h.u.R.Gb, h.h.gj, h.h.ug);
h.PG = function() {};
h.VG = function() {};
h.Ib = function(a, c) {
    h.Ib.v.constructor.call(this, a, c);
    this.Se = a.B.Wn[c];
    this.zw = a.B.Wn[h.ej[c]];
    this.Xf = new h.g.T(0, 0);
    this.cg = h.Ib.Le.Ov;
    this.xa = null
};
h.g.object.V(h.Ib, h.va);
h.Ib.Le = {
    Ov: -1,
    Kv: 0,
    mj: 1
};
b = h.Ib.prototype;
b.H = function() {
    h.Ib.v.H.call(this);
    this.cg == h.Ib.Le.mj && ic(this.Se, this, this.y)
};
b.$ = function() {
    return h.Ib.v.$.call(this)
};
b.ra = function() {
    return h.Ib.v.ra.call(this)
};

function $a(a, c) {
    var d = a.x - c.x;
    a = a.y - c.y;
    return Math.sqrt(d * d + a * a)
}

function jc(a, c) {
    if (!a.L.B.bd()) {
        var d = a.L.qe();
        if (!d.cd) {
            var e = !1;
            if (!d.wc()) {
                d = c.$().qe();
                if (!d.wc()) return;
                c = a;
                e = !0
            }
            var f = h.selected == d;
            f || d.Hn();
            var g = c.x + h.oc + Math.floor(Math.random() * h.Dp) - a.x,
                k = c.y + h.oc + Math.floor(Math.random() * h.Dp) - a.y;
            e && (k = -k);
            d.I && (g = c.x - h.oc - Math.floor(Math.random() * h.Dp) - a.x);
            d.moveBy(g, k);
            f || d.nm()
        }
    }
}
b.moveTo = function(a, c) {
    if (this.cg == h.Ib.Le.Ov) {
        var d = this.Se;
        d.Cb.splice(kc(d, c), 0, this);
        this.cg = h.Ib.Le.mj
    } else this.cg == h.Ib.Le.mj && (ic(this.Se, this, this.y), d = this.Se, d.Cb.splice(kc(d, c), 0, this));
    this.x = a;
    this.y = c
};
b.moveBy = function(a, c) {
    this.moveTo(this.x + a, this.y + c)
};

function lc(a, c) {
    a.moveTo(c.x + a.Xf.x, c.y + a.Xf.y)
}

function F(a, c, d) {
    a.Xf.x = c;
    a.Xf.y = d
}

function mc(a) {
    var c = a.xa.x - a.x,
        d = a.xa.y - a.y;
    if (0 != c || 0 != d) {
        a = a.ra();
        var e = a.oa();
        if (!e) throw Error("block is not rendered.");
        e = h.g.pe(e);
        a.oa().setAttribute("transform", "translate(" + (e.x - c) + "," + (e.y - d) + ")");
        Ea(a, -c, -d)
    }
}
b.closest = function(a, c) {
    var d = this.zw;
    if (d.Cb.length) {
        var e = this.y,
            f = this.x;
        this.x = f + c.x;
        this.y = e + c.y;
        var g = kc(d, this.y);
        c = null;
        for (var k = a, l, m = g - 1; 0 <= m && Math.abs(d.Cb[m].y - this.y) <= a;) l = d.Cb[m], Ya(d.qw, this, l, !0, k) && (c = l, k = $a(l, this)), m--;
        for (; g < d.Cb.length && Math.abs(d.Cb[g].y - this.y) <= a;) l = d.Cb[g], Ya(d.qw, this, l, !0, k) && (c = l, k = $a(l, this)), g++;
        this.x = f;
        this.y = e;
        a = {
            connection: c,
            gp: k
        }
    } else a = {
        connection: null,
        gp: a
    };
    return a
};

function Zb(a, c) {
    c && a.cg == h.Ib.Le.mj || !c && a.cg == h.Ib.Le.Kv || a.L.cd || (c ? (c = a.Se, c.Cb.splice(kc(c, a.y), 0, a), a.cg = h.Ib.Le.mj) : (a.cg == h.Ib.Le.mj && ic(a.Se, a, a.y), a.cg = h.Ib.Le.Kv))
}

function Yb(a) {
    Zb(a, !0);
    var c = [];
    if (a.type != h.X.Zb && a.type != h.X.$b) return c;
    if (a = a.ra()) {
        if (a.isCollapsed()) {
            var d = [];
            a.S && d.push(a.S);
            a.ca && d.push(a.ca);
            a.aa && d.push(a.aa)
        } else d = a.ne(!0);
        for (var e = 0; e < d.length; e++) c.push.apply(c, Yb(d[e]));
        c.length || (c[0] = a)
    }
    return c
}
b.at = function(a) {
    var c = this.$();
    if (h.h.Na) {
        var d = h.h.Wb();
        setTimeout(function() {
            c.Te || c.getParent() || (h.h.ta(d), jc(this, a), h.h.ta(!1))
        }.bind(this), h.Cp)
    }
};
b.yr = function(a, c) {
    h.Ib.v.yr.call(this, a, c);
    a.ua && a.Ja();
    c.ua && (ha(c), c.Ja(), c.oa().style.display = "block")
};
b.om = function() {
    h.Ib.v.om.call(this);
    var a = this.ra();
    a && (a.Pj(), a.Ja(!1), a = this.$(), a.ua && a.Ja())
};
b.Vx = function(a) {
    return nc(this.zw, this, a)
};
b.Un = function(a) {
    h.Ib.v.Un.call(this, a);
    var c = this.$();
    a = a.$();
    var d = c.ua,
        e = a.ua;
    d && ha(c);
    e && ha(a);
    d && e && (this.type == h.X.$b || this.type == h.X.kd ? a.Ja() : c.Ja());
    if (c = na(c, a)) c = c.isVisible(), a.oa().style.display = c ? "block" : "none"
};
b.gy = function() {
    !this.isConnected() || this.xa && Ya(this.L.B.If, this, this.xa, !1) || (A(Fa(this) ? this.ra() : this.L), this.L.Zc())
};
h.zh = function() {
    h.zh.v.constructor.call(this)
};
h.g.object.V(h.zh, h.jg);
h.zh.PE = "basicCursor";
b = h.zh.prototype;
b.next = function() {
    var a = this.ke;
    if (!a) return null;
    (a = oc(this, a, this.gu)) && Hb(this, a);
    return a
};
b.Qg = function() {
    return this.next()
};
b.ih = function() {
    var a = this.ke;
    if (!a) return null;
    (a = pc(this, a, this.gu)) && Hb(this, a);
    return a
};
b.fh = function() {
    return this.ih()
};

function oc(a, c, d) {
    if (!c) return null;
    var e = c.Qg() || c.next();
    if (d(e)) return e;
    if (e) return oc(a, e, d);
    c = qc(a, c.fh());
    return d(c) ? c : c ? oc(a, c, d) : null
}

function pc(a, c, d) {
    if (!c) return null;
    var e = c.ih();
    e = e ? rc(a, e) : c.fh();
    return d(e) ? e : e ? pc(a, e, d) : null
}
b.gu = function(a) {
    var c = !1;
    a = a && a.vb();
    if (a == h.F.types.Kh || a == h.F.types.yd || a == h.F.types.Dc || a == h.F.types.rg || a == h.F.types.tg || a == h.F.types.Wc) c = !0;
    return c
};

function qc(a, c) {
    if (!c) return null;
    var d = c.next();
    return d ? d : qc(a, c.fh())
}

function rc(a, c) {
    if (!c.Qg()) return c;
    for (c = c.Qg(); c.next();) c = c.next();
    return rc(a, c)
}
h.u.register(h.u.R.xk, h.zh.PE, h.zh);
h.zq = function() {
    h.zq.v.constructor.call(this)
};
h.g.object.V(h.zq, h.zh);
h.zq.prototype.gu = function(a) {
    a && a.vb();
    return !1
};
h.Xa = function(a, c, d) {
    this.O = h.g.j.J(h.g.D.Sc, {}, null);
    this.O.Jm = "";
    this.style = sc(a.mb.ga(), null);
    this.wb = a.mb.Nx(this.O, this.style);
    this.At = this.ua = !1;
    this.B = a;
    this.aa = this.ca = this.S = null;
    this.Om = h.g.li() && !!a.md;
    var e = this.wb.Eb;
    e.Ud = this;
    h.G.sj(e);
    h.Xa.v.constructor.call(this, a, c, d);
    this.O.dataset ? this.O.dataset.id = this.id : h.g.userAgent.$d && this.O.setAttribute("data-id", this.id)
};
h.g.object.V(h.Xa, h.Vi);
h.Xa.prototype.height = 0;
h.Xa.prototype.width = 0;
h.Xa.prototype.wp = null;
h.Xa.cH = -1;
h.Xa.UF = "TEMP_COLLAPSED_WARNING_";
b = h.Xa.prototype;
b.Pj = function() {
    if (!this.B.ua) throw TypeError("Workspace is headless.");
    for (var a = 0, c; c = this.U[a]; a++) c.Ba();
    c = Aa(this);
    for (a = 0; a < c.length; a++) c[a].qC();
    this.ec();
    B(this.wb, "blocklyDraggable", this.wc());
    a = this.oa();
    this.B.options.readOnly || this.KC || !a || h.N.Aa(a, "mousedown", this, this.bh);
    this.KC = !0;
    a.parentNode || this.B.xb.appendChild(a)
};
b.select = function() {
    if (this.La && this.getParent()) this.getParent().select();
    else if (h.selected != this) {
        var a = null;
        if (h.selected) {
            a = h.selected.id;
            h.h.disable();
            try {
                tb(h.selected)
            } finally {
                h.h.enable()
            }
        }
        a = new(h.h.get(h.h.gj))(a, this.id, this.B.id);
        h.h.Ga(a);
        h.selected = this;
        this.Hn()
    }
};

function tb(a) {
    if (h.selected == a) {
        var c = new(h.h.get(h.h.gj))(a.id, null, a.B.id);
        c.Yb = a.B.id;
        h.h.Ga(c);
        h.selected = null;
        a.nm()
    }
}
b.te = null;
b.Uh = null;
b.Ed = null;
b.cz = null;

function Aa(a) {
    var c = [];
    a.te && c.push(a.te);
    a.Ed && c.push(a.Ed);
    a.cz && c.push(a.cz);
    return c
}
b.kp = function(a) {
    var c = this.gf;
    if (a != c) {
        h.g.j.zm();
        h.Xa.v.kp.call(this, a);
        h.g.j.Am();
        var d = this.oa();
        if (!this.B.vs && d) {
            var e = this.Za();
            a ? (a.oa().appendChild(d), a = this.Za(), Ea(this, a.x - e.x, a.y - e.y)) : c && (this.B.xb.appendChild(d), this.translate(e.x, e.y));
            this.ec()
        }
    }
};
b.Za = function() {
    var a = 0,
        c = 0,
        d = this.Om ? this.B.md.Wb() : null,
        e = this.oa();
    if (e) {
        do {
            var f = h.g.pe(e);
            a += f.x;
            c += f.y;
            this.Om && this.B.md.Ue.firstChild == e && (f = this.B.md.fs(), a += f.x, c += f.y);
            e = e.parentNode
        } while (e && e != this.B.xb && e != d)
    }
    return new h.g.T(a, c)
};
b.moveBy = function(a, c) {
    if (this.gf) throw Error("Block has parent.");
    var d = h.h.isEnabled();
    if (d) var e = new(h.h.get(h.h.yh))(this);
    var f = this.Za();
    this.translate(f.x + a, f.y + c);
    Ea(this, a, c);
    d && (e.Ei(), h.h.Ga(e));
    ia(this.B)
};
b.translate = function(a, c) {
    this.oa().setAttribute("transform", "translate(" + a + "," + c + ")")
};
b.moveTo = function(a) {
    var c = this.Za();
    this.moveBy(a.x - c.x, a.y - c.y)
};
b.Qs = function(a) {
    this.Om ? this.B.md.Oi(a.x, a.y) : (this.O.Jm = "translate(" + a.x + "," + a.y + ")", this.O.setAttribute("transform", this.O.Jm + this.O.xm))
};

function tc(a) {
    if (a.B && !a.B.bd() && !a.getParent() && !a.cd) {
        var c = a.B.Id;
        if (c && c.fF) {
            var d = c.Tt,
                e = d / 2,
                f = a.Za();
            c = Math.round((f.x - e) / d) * d + e - f.x;
            d = Math.round((f.y - e) / d) * d + e - f.y;
            c = Math.round(c);
            d = Math.round(d);
            0 == c && 0 == d || a.moveBy(c, d)
        }
    }
}
b.Bl = function() {
    var a = this.Za(),
        c = r(this);
    if (this.I) {
        var d = a.x - c.width;
        var e = a.x
    } else d = a.x, e = a.x + c.width;
    return new h.g.Rect(a.y, a.y + c.height, d, e)
};
b.Xl = function() {
    this.wb.kb = this.B.mb.ga();
    for (var a = 0, c; c = this.U[a]; a++) c.Xl()
};
b.Hi = function(a) {
    this.Sh != a && (h.Xa.v.Hi.call(this, a), a ? this.ua && this.Ja() : uc(this))
};

function uc(a) {
    for (var c = a.isCollapsed(), d = h.kb.$m, e = h.kb.Zm, f = 0, g; g = a.U[f]; f++) g.name != d && g.Jb(!c);
    if (c) {
        g = Aa(a);
        for (f = 0; c = g[f]; f++) c.Jb(!1);
        f = a.toString(h.vz);
        (g = la(a, e)) ? g.setValue(f): (g = ja(a, d) || bc(a, d), E(g, new h.hd(f), e))
    } else ha(a), a.zt(d)
}
b.bh = function(a) {
    var c = this.B && this.B.Kg(a);
    if (c) {
        if (c.ei) throw Error("Tried to call gesture.handleBlockStart, but the gesture had already been started.");
        Db(c, this);
        c.Md = a
    }
};
b.showHelp = function() {
    var a = "function" == typeof this.Oj ? this.Oj() : this.Oj;
    a && window.open(a)
};
b.um = function(a) {
    if (this.B.options.readOnly || !this.contextMenu) var c = null;
    else c = hc(h.Ea.Hc.Sb, {
        block: this
    }), this.vC && this.vC(c);
    c && c.length && (h.Ra.show(a, c, this.I), h.Ra.Zn = this)
};

function Ea(a, c, d) {
    if (a.ua) {
        for (var e = a.ne(!1), f = 0; f < e.length; f++) e[f].moveBy(c, d);
        e = Aa(a);
        for (f = 0; f < e.length; f++) e[f].jC();
        for (f = 0; f < a.Ff.length; f++) Ea(a.Ff[f], c, d)
    }
}
b.mh = function(a) {
    if (a) {
        var c = this.oa();
        c.Jm = "";
        c.xm = "";
        h.Gj = h.Gj.concat(this.ne(!0));
        h.g.j.Nb(this.O, "blocklyDragging")
    } else h.Gj = [], h.g.j.fd(this.O, "blocklyDragging");
    for (c = 0; c < this.Ff.length; c++) this.Ff[c].mh(a)
};
b.Lt = function(a) {
    h.Xa.v.Lt.call(this, a);
    B(this.wb, "blocklyDraggable", a)
};
b.Kt = function(a) {
    h.Xa.v.Kt.call(this, a);
    a = Aa(this);
    for (var c = 0; c < a.length; c++) Jb(a[c])
};
b.Ot = function(a) {
    h.Xa.v.Ot.call(this, a);
    this.ec()
};
b.Gy = function(a) {
    this.Uj != a && (this.Uj = a) && (this.ve(this.B.mb.ga().Vp), B(this.wb, "blocklyInsertionMarker", !0))
};
b.oa = function() {
    return this.O
};
b.H = function(a, c) {
    if (this.B) {
        h.G.H();
        h.G.cu(this.wb.Eb);
        h.g.j.zm();
        var d = this.B;
        h.selected == this && (tb(this), vc(this.B));
        h.Ra.Zn == this && h.Ra.$a();
        c && this.ua && (A(this, a), h.bb.CC(this));
        this.ua = !1;
        if (this.wp) {
            for (var e in this.wp) clearTimeout(this.wp[e]);
            this.wp = null
        }
        c = Aa(this);
        for (e = 0; e < c.length; e++) c[e].H();
        h.Xa.v.H.call(this, !!a);
        h.g.j.removeNode(this.O);
        ia(d);
        this.O = null;
        h.g.j.Am()
    }
};
b.ec = function() {
    this.wb.ec(this);
    for (var a = Aa(this), c = 0; c < a.length; c++) a[c].ec();
    for (a = 0; c = this.U[a]; a++)
        for (var d = 0, e; e = c.eb[d]; d++) e.ec()
};

function ha(a) {
    var c = z(a, !1);
    a.ec();
    if (!a.isCollapsed()) {
        a = 0;
        for (var d; d = c[a]; a++) d.ua && ha(d)
    }
}
b.ZC = function() {
    return this.Ed
};
b.ck = function(a) {
    if (!h.Comment) throw Error("Missing require for Blockly.Comment");
    this.ie.text != a && (h.Xa.v.ck.call(this, a), a = null != a, !!this.Ed == a ? this.Ed.GK() : (a ? this.Uh = this.Ed = new h.Comment(this) : (this.Ed.H(), this.Uh = this.Ed = null), this.ua && (this.Ja(), this.Zc())))
};
b.Hy = function(a) {
    this.te && this.te !== a && this.te.H();
    a && (a.rK(this), this.te = a, a.qC());
    this.ua && (this.Ja(), this.Zc())
};
b.jf = function(a) {
    this.isEnabled() != a && (h.Xa.v.jf.call(this, a), this.ua && !ac(this) && ha(this))
};
b.we = function(a) {
    this.ua && this.wb.Uy(a)
};
b.Hn = function() {
    B(this.wb, "blocklySelected", !0)
};
b.nm = function() {
    B(this.wb, "blocklySelected", !1)
};
b.Jt = function(a) {
    B(this.wb, "blocklyDraggingDelete", a)
};
b.Wr = function() {
    return this.style.Th
};
b.ve = function(a) {
    h.Xa.v.ve.call(this, a);
    a = wc(this.B.mb.ga(), this.Dd);
    this.wb.Li(a.style);
    this.style = a.style;
    this.Bm = a.name;
    this.ec()
};
b.Li = function(a) {
    var c = sc(this.B.mb.ga(), a);
    this.Bm = a;
    if (c) this.Ze = c.Ze, this.wb.Li(c), this.Dd = c.Th, this.style = c, this.ec();
    else throw Error("Invalid style name: " + a);
};

function Ba(a) {
    do {
        var c = a.oa(),
            d = c.parentNode,
            e = d.childNodes;
        e[e.length - 1] !== c && d.appendChild(c);
        a = a.getParent()
    } while (a)
}
b.Ki = function(a, c) {
    h.Xa.v.Ki.call(this, a, c);
    this.ua && (this.Ja(), this.Zc())
};
b.ek = function(a, c) {
    h.Xa.v.ek.call(this, a, c);
    this.ua && (this.Ja(), this.Zc())
};
b.Mt = function(a, c) {
    h.Xa.v.Mt.call(this, a, c);
    this.ua && (this.Ja(), this.Zc())
};
b.Ji = function(a) {
    h.Xa.v.Ji.call(this, a);
    this.ua && (this.Ja(), this.Zc())
};
b.zt = function(a, c) {
    a = h.Xa.v.zt.call(this, a, c);
    this.ua && (this.Ja(), this.Zc());
    return a
};
b.Cf = function(a, c) {
    a = h.Xa.v.Cf.call(this, a, c);
    this.ua && (this.Ja(), this.Zc());
    return a
};

function fa(a, c) {
    a.aa && Zb(a.aa, c);
    a.S && Zb(a.S, c);
    if (a.ca) {
        Zb(a.ca, c);
        var d = a.ca.ra();
        d && fa(d, c)
    }
    if (!a.Sh)
        for (d = 0; d < a.U.length; d++) {
            var e = a.U[d].connection;
            e && (Zb(e, c), (e = e.ra()) && fa(e, c))
        }
}
b.ne = function(a) {
    var c = [];
    if (a || this.ua)
        if (this.S && c.push(this.S), this.aa && c.push(this.aa), this.ca && c.push(this.ca), a || !this.Sh) {
            a = 0;
            for (var d; d = this.U[a]; a++) d.connection && c.push(d.connection)
        } return c
};
b.Io = function(a) {
    return h.Xa.v.Io.call(this, a)
};
b.Zr = function(a, c) {
    return h.Xa.v.Zr.call(this, a, c)
};
b.Wl = function(a) {
    return new h.Ib(this, a)
};
b.Zc = function() {
    if (this.B && !this.B.bd()) {
        var a = this.qe();
        if (!a.cd)
            for (var c = this.ne(!1), d = 0, e; e = c[d]; d++) {
                e.isConnected() && Fa(e) && e.ra().Zc();
                for (var f = e.Vx(h.oc), g = 0, k; k = f[g]; g++) e.isConnected() && k.isConnected() || k.$().qe() != a && (Fa(e) ? jc(k, e) : jc(e, k))
            }
    }
};

function Ga(a) {
    var c = h.h.Wb();
    setTimeout(function() {
        h.h.ta(c);
        tc(a);
        h.h.ta(!1)
    }, h.Cp / 2);
    setTimeout(function() {
        h.h.ta(c);
        a.Zc();
        h.h.ta(!1)
    }, h.Cp)
}
b.getParent = function() {
    return h.Xa.v.getParent.call(this)
};
b.qe = function() {
    return h.Xa.v.qe.call(this)
};
b.Ja = function(a) {
    if (!this.At) {
        this.At = !0;
        try {
            this.ua = !0;
            h.g.j.zm();
            this.isCollapsed() && uc(this);
            this.B.mb.Ja(this);
            var c = this.Za();
            this.aa && lc(this.aa, c);
            this.S && lc(this.S, c);
            for (var d = 0; d < this.U.length; d++) {
                var e = this.U[d].connection;
                e && (lc(e, c), e.isConnected() && mc(e))
            }
            this.ca && (lc(this.ca, c), this.ca.isConnected() && mc(this.ca));
            if (!1 !== a) {
                var f = this.getParent();
                f ? f.Ja(!0) : ia(this.B)
            }
            h.g.j.Am();
            this.fu()
        } finally {
            this.At = !1
        }
    }
};
b.fu = function() {
    this.B.Ul && this.wb.ml && this.B.Dl().draw();
    this.B.Ul && this.wb.Ls && this.B.Gl(h.Lk.av).draw()
};
b.Zf = function(a) {
    this.wb.Zf(a)
};
b.nh = function(a) {
    this.wb.nh(a)
};

function r(a) {
    var c = a.height,
        d = a.width,
        e = w(a);
    e && (e = r(e), a = a.B.mb.ga().fq, c += e.height - a, d = Math.max(d, e.width));
    return {
        height: c,
        width: d
    }
};
h.SG = function() {};
h.YG = function() {};
h.hn = function() {};
h.hn.prototype.Zs = function() {};
h.hn.prototype.Ys = function() {};
h.hn.prototype.$s = function() {};
h.XG = function() {};
h.gn = function() {
    h.gn.v.constructor.call(this);
    this.xp = !1
};
h.g.object.V(h.gn, h.hn);

function za(a, c, d) {
    c instanceof h.Xa ? (c = !c.getParent() && c.cf(), a.xp = c && !d) : a.xp = c.cf();
    return a.xp
};
h.h.xg = function(a, c) {
    h.h.xg.v.constructor.call(this, c);
    this.ws = a
};
h.g.object.V(h.h.xg, h.h.ee);
h.h.xg.prototype.type = h.h.yq;
h.h.xg.prototype.qa = function() {
    var a = h.h.xg.v.qa.call(this);
    a.isOpen = this.ws;
    return a
};
h.h.xg.prototype.ba = function(a) {
    h.h.xg.v.ba.call(this, a);
    this.ws = a.isOpen
};
h.u.register(h.u.R.Gb, h.h.yq, h.h.xg);
h.NG = function() {};
h.gH = function() {};
h.Xb = {};
h.Xb.vp = {
    ce: 0,
    eg: 1
};
h.Xb.ps = {
    Hb: 0,
    Gc: 1
};
h.Xb.Rq = {
    Dn: 0,
    Lp: 1
};
h.Xb.kD = function(a, c, d, e, f, g) {
    var k = g.Ta && !!g.Ta.Ua;
    a.Nl === h.Xb.ps.Hb ? (d = f.Gn.left + d, k && g.I && (d += h.Ka.jc)) : (d = f.Gn.left + f.bz.width - c.width - d, k && !g.I && (d -= h.Ka.jc));
    a.vertical === h.Xb.vp.ce ? a = f.Gn.top + e : (a = f.Gn.top + f.bz.height - c.height - e, g.Ta && g.Ta.ib && (a -= h.Ka.jc));
    return new h.g.Rect(a, a + c.height, d, d + c.width)
};
h.Xb.cD = function(a, c) {
    return {
        Nl: c.Sy.position === h.g.W.Pa.Hb || a.Jd && !a.I ? h.Xb.ps.Gc : h.Xb.ps.Hb,
        vertical: c.Sy.position === h.g.W.Pa.eg ? h.Xb.vp.ce : h.Xb.vp.eg
    }
};
h.Xb.VB = function(a, c, d, e) {
    for (var f = a.left, g = a.right - a.left, k = a.bottom - a.top, l = 0, m; m = e[l]; l++) a.left > m.right || a.right < m.left || a.top > m.bottom || a.bottom < m.top || (a = d === h.Xb.Rq.Dn ? m.top - k - c : m.bottom + c, a = new h.g.Rect(a, a + k, f, f + g), l = -1);
    return a
};
h.Vb = function(a) {
    h.Vb.v.constructor.call(this);
    this.m = a;
    this.id = "trashcan";
    this.Gg = [];
    this.We = null;
    0 >= this.m.options.Qo || (a = new h.jd({
        scrollbars: !0,
        parentWorkspace: this.m,
        rtl: this.m.I,
        oneBasedIndex: this.m.options.$o,
        renderer: this.m.options.Ct,
        rendererOverrides: this.m.options.Dt,
        move: {
            scrollbars: !0
        }
    }), this.m.Jd ? (a.Pc = this.m.Pc == h.g.W.Pa.ce ? h.g.W.Pa.eg : h.g.W.Pa.ce, this.We = new(h.u.Of(h.u.R.Mu, this.m.options, !0))(a)) : (a.Pc = this.m.Pc == h.g.W.Pa.Gc ? h.g.W.Pa.Hb : h.g.W.Pa.Gc, this.We = new(h.u.Of(h.u.R.Rp, this.m.options,
        !0))(a)), D(this.m, this.gE.bind(this)))
};
h.g.object.V(h.Vb, h.gn);
b = h.Vb.prototype;
b.nj = 47;
b.Wm = 44;
b.bj = 16;
b.bv = 20;
b.FA = 20;
b.on = 10;
b.rq = 0;
b.tq = 32;
b.mA = .1;
h.Vb.lz = 80;
h.Vb.mu = 4;
h.Vb.kv = .4;
h.Vb.PA = .8;
h.Vb.cv = 45;
b = h.Vb.prototype;
b.Co = !1;
b.Os = 0;
b.O = null;
b.qp = null;
b.Cs = 0;
b.Xg = 0;
b.Jo = 0;
b.sp = 0;
b.Ax = !1;
b.Va = function() {
    this.O = h.g.j.J(h.g.D.Sc, {
        "class": "blocklyTrash"
    }, null);
    var a = String(Math.random()).substring(2);
    var c = h.g.j.J(h.g.D.xu, {
        id: "blocklyTrashBodyClipPath" + a
    }, this.O);
    h.g.j.J(h.g.D.Mb, {
        width: this.nj,
        height: this.Wm,
        y: this.bj
    }, c);
    var d = h.g.j.J(h.g.D.Ek, {
        width: h.hj.width,
        x: -this.rq,
        height: h.hj.height,
        y: -this.tq,
        "clip-path": "url(#blocklyTrashBodyClipPath" + a + ")"
    }, this.O);
    d.setAttributeNS(h.g.j.ld, "xlink:href", this.m.options.fp + h.hj.url);
    c = h.g.j.J(h.g.D.xu, {
        id: "blocklyTrashLidClipPath" + a
    }, this.O);
    h.g.j.J(h.g.D.Mb, {
        width: this.nj,
        height: this.bj
    }, c);
    this.qp = h.g.j.J(h.g.D.Ek, {
        width: h.hj.width,
        x: -this.rq,
        height: h.hj.height,
        y: -this.tq,
        "clip-path": "url(#blocklyTrashLidClipPath" + a + ")"
    }, this.O);
    this.qp.setAttributeNS(h.g.j.ld, "xlink:href", this.m.options.fp + h.hj.url);
    h.N.bind(this.O, "mousedown", this, this.QB);
    h.N.bind(this.O, "mouseup", this, this.click);
    h.N.bind(d, "mouseover", this, this.YD);
    h.N.bind(d, "mouseout", this, this.WD);
    this.Hq();
    return this.O
};
b.Ba = function() {
    0 < this.m.options.Qo && (h.g.j.Qj(this.We.Va(h.g.D.jj), t(this.m)), this.We.Ba(this.m));
    pa(this.m.Hf, {
        bl: this,
        weight: 1,
        Cg: [h.Fb.Tb.pu, h.Fb.Tb.Jp, h.Fb.Tb.Mp, h.Fb.Tb.wv]
    });
    this.Ax = !0;
    this.dk(!1)
};
b.H = function() {
    qa(this.m.Hf, "trashcan");
    this.O && (h.g.j.removeNode(this.O), this.O = null);
    this.m = this.qp = null;
    clearTimeout(this.Cs)
};
b.position = function(a, c) {
    if (this.Ax) {
        var d = h.Xb.cD(this.m, a);
        a = h.Xb.kD(d, new h.g.Uc(this.nj, this.Wm + this.bj), this.FA, this.bv, a, this.m);
        c = h.Xb.VB(a, this.bv, d.vertical === h.Xb.vp.ce ? h.Xb.Rq.Lp : h.Xb.Rq.Dn, c);
        this.sp = c.top;
        this.Jo = c.left;
        this.O.setAttribute("transform", "translate(" + this.Jo + "," + this.sp + ")")
    }
};
b.Bl = function() {
    return new h.g.Rect(this.sp, this.sp + this.Wm + this.bj, this.Jo, this.Jo + this.nj)
};
b.Uw = function() {
    if (!this.O) return null;
    var a = this.O.getBoundingClientRect(),
        c = a.top + this.tq - this.on;
    a = a.left + this.rq - this.on;
    return new h.g.Rect(c, c + this.bj + this.Wm + 2 * this.on, a, a + this.nj + 2 * this.on)
};
b.Zs = function() {
    this.dk(this.xp)
};
b.Ys = function() {
    this.dk(!1)
};
b.$s = function() {
    setTimeout(this.dk.bind(this, !1), 100)
};
b.dk = function(a) {
    this.Co != a && (clearTimeout(this.Cs), this.Co = a, this.Hq())
};
b.Hq = function() {
    var a = 1 / (h.Vb.mu + 1);
    this.Xg += this.Co ? a : -a;
    this.Xg = Math.min(Math.max(this.Xg, this.Os), 1);
    xc(this, this.Xg * h.Vb.cv);
    this.O.style.opacity = h.Vb.kv + this.Xg * (h.Vb.PA - h.Vb.kv);
    this.Xg > this.Os && 1 > this.Xg && (this.Cs = setTimeout(this.Hq.bind(this), h.Vb.lz / h.Vb.mu))
};

function xc(a, c) {
    var d = a.m.Pc == h.g.W.Pa.Gc || a.m.Jd && a.m.I;
    a.qp.setAttribute("transform", "rotate(" + (d ? -c : c) + "," + (d ? 4 : a.nj - 4) + "," + (a.bj - 2) + ")")
}
b.click = function() {
    if (this.Gg.length && !this.We.isVisible()) {
        var a = this.Gg.map(h.K.ye);
        this.We.show(a);
        yc(this, !0)
    }
};

function yc(a, c) {
    a = new(h.h.get(h.h.yq))(c, a.m.id);
    h.h.Ga(a)
}
b.QB = function(a) {
    !this.We.isVisible() && this.Gg.length && a.stopPropagation()
};
b.YD = function() {
    this.Gg.length && this.dk(!0)
};
b.WD = function() {
    this.dk(!1)
};
b.gE = function(a) {
    if (!(0 >= this.m.options.Qo) && a.type == h.h.Ap && a.Yj.tagName && "shadow" != a.Yj.tagName.toLowerCase()) {
        for (var c = a = a.Yj.cloneNode(!0); c;) {
            c.removeAttribute && (c.removeAttribute("x"), c.removeAttribute("y"), c.removeAttribute("id"), c.removeAttribute("disabled"), "comment" == c.nodeName && (c.removeAttribute("h"), c.removeAttribute("w"), c.removeAttribute("pinned")));
            var d = c.firstChild || c.nextSibling;
            if (!d)
                for (d = c.parentNode; d;) {
                    if (d.nextSibling) {
                        d = d.nextSibling;
                        break
                    }
                    d = d.parentNode
                }
            c = d
        }
        a = h.K.Gd(a);
        if (-1 == this.Gg.indexOf(a)) {
            for (this.Gg.unshift(a); this.Gg.length > this.m.options.Qo;) this.Gg.pop();
            this.Os = a = this.mA;
            this.Co || xc(this, a * h.Vb.cv)
        }
    }
};
h.i.Nm = !1;
h.i.register = function(a, c) {
    h.u.register(h.u.R.RENDERER, a, c)
};
h.i.unregister = function(a) {
    h.u.unregister(h.u.R.RENDERER, a)
};
h.i.yK = function() {
    h.i.Nm = !0
};
h.i.zK = function() {
    h.i.Nm = !1
};
h.i.Ba = function(a, c, d) {
    a = new(h.u.Vr(h.u.R.RENDERER, a))(a);
    a.Ba(c, d);
    return a
};
h.bH = function() {};
h.Mk = function(a) {
    this.m = a
};

function zc(a) {
    var c = 0,
        d = 0;
    a && (c = a.Hl(), d = a.vc);
    return new h.g.Uc(c, d)
}

function Ac(a) {
    var c = zc(Bc(a.m, !0));
    return {
        width: c.width,
        height: c.height,
        position: a.m.Pc
    }
}

function Cc(a) {
    var c = zc(a.m.ob);
    return {
        width: c.width,
        height: c.height,
        position: a.m.Pc
    }
}

function Dc(a) {
    var c = 0,
        d = Cc(a),
        e = Ac(a),
        f = !!a.m.ob;
    a = !!Bc(a.m, !0);
    var g = f ? d.position : e.position,
        k = g == h.g.W.Pa.Hb;
    g = g == h.g.W.Pa.ce;
    f && k ? c = d.width : a && k && (c = e.width);
    k = 0;
    f && g ? k = d.height : a && g && (k = e.height);
    return {
        top: k,
        left: c
    }
}

function ob(a, c) {
    c = c ? a.m.scale : 1;
    var d = Ec(a.m),
        e = Cc(a),
        f = Ac(a),
        g = a.m.ob ? e.position : f.position;
    if (a.m.ob)
        if (g == h.g.W.Pa.ce || g == h.g.W.Pa.eg) d.height -= e.height;
        else {
            if (g == h.g.W.Pa.Hb || g == h.g.W.Pa.Gc) d.width -= e.width
        }
    else if (Bc(a.m, !0))
        if (g == h.g.W.Pa.ce || g == h.g.W.Pa.eg) d.height -= f.height;
        else if (g == h.g.W.Pa.Hb || g == h.g.W.Pa.Gc) d.width -= f.width;
    return {
        height: d.height / c,
        width: d.width / c,
        top: -a.m.scrollY / c,
        left: -a.m.scrollX / c
    }
}
h.Mk.prototype.po = function() {
    var a = this.m.scale,
        c = ea(this.m);
    return {
        height: (c.bottom - c.top) * a,
        width: (c.right - c.left) * a,
        top: c.top * a,
        left: c.left * a
    }
};
h.Mk.prototype.ci = function(a, c, d) {
    a = a ? this.m.scale : 1;
    var e = c || ob(this, !1);
    d = d || this.po();
    if (rb(this.m) && sb(this.m)) c = {};
    else {
        c = rb(this.m);
        var f = sb(this.m),
            g = e || ob(this, !1);
        var k = {};
        f || (k.top = g.top, k.bottom = g.top + g.height);
        c || (k.left = g.left, k.right = g.left + g.width);
        c = k
    }
    k = d.top + d.height;
    f = d.left + d.width;
    g = e.width;
    var l = e.height;
    var m = g / 2,
        n = l / 2;
    e = Math.min(d.top - n, k - l);
    k = Math.max(k + n, d.top + l);
    l = Math.min(d.left - m, f - g);
    d = Math.max(f + m, d.left + g);
    e = void 0 !== c.top ? c.top : e;
    f = void 0 !== c.left ? c.left : l;
    return {
        top: e /
            a,
        left: f / a,
        width: ((void 0 !== c.right ? c.right : d) - f) / a,
        height: ((void 0 !== c.bottom ? c.bottom : k) - e) / a
    }
};
h.Mk.prototype.oe = function() {
    var a = Cc(this),
        c = Ac(this),
        d = Ec(this.m),
        e = Dc(this),
        f = ob(this),
        g = this.po(),
        k = this.ci(!1, f, g);
    return {
        wJ: g.height,
        zJ: g.width,
        yJ: g.top,
        xJ: g.left,
        scrollHeight: k.height,
        scrollWidth: k.width,
        scrollTop: k.top,
        scrollLeft: k.left,
        Qc: f.height,
        Bc: f.width,
        Wd: f.top,
        Vd: f.left,
        Xc: e.top,
        Ic: e.left,
        AK: d.height,
        CK: d.width,
        EK: a.width,
        DK: a.height,
        Pc: a.position,
        HJ: c.width,
        GJ: c.height
    }
};
h.u.register(h.u.R.fv, h.u.Zi, h.Mk);
h.Dk = function(a, c) {
    this.ya = c;
    h.Dk.v.constructor.call(this, a)
};
h.g.object.V(h.Dk, h.Mk);
h.Dk.prototype.po = function() {
    try {
        var a = this.m.xb.getBBox()
    } catch (d) {
        a = {
            height: 0,
            y: 0,
            width: 0,
            x: 0
        }
    }
    var c = this.m.scale;
    return {
        height: a.height * c,
        width: a.width * c,
        top: a.y * c,
        left: a.x * c
    }
};
h.Dk.prototype.ci = function(a, c, d) {
    c = d || this.po();
    d = this.ya.Ih * this.m.scale;
    a = a ? this.m.scale : 1;
    return {
        height: (c.height + 2 * d) / a,
        width: (c.width + c.left + d) / a,
        top: 0,
        left: 0
    }
};
h.$G = function() {};
h.Yi = function(a) {
    this.Cb = [];
    this.qw = a
};

function Fc(a, c, d) {
    if (!a.Cb.length) return -1;
    var e = kc(a, d);
    if (e >= a.Cb.length) return -1;
    d = c.y;
    for (var f = e; 0 <= f && a.Cb[f].y == d;) {
        if (a.Cb[f] == c) return f;
        f--
    }
    for (f = e; f < a.Cb.length && a.Cb[f].y == d;) {
        if (a.Cb[f] == c) return f;
        f++
    }
    return -1
}

function kc(a, c) {
    if (!a.Cb.length) return 0;
    for (var d = 0, e = a.Cb.length; d < e;) {
        var f = Math.floor((d + e) / 2);
        if (a.Cb[f].y < c) d = f + 1;
        else if (a.Cb[f].y > c) e = f;
        else {
            d = f;
            break
        }
    }
    return d
}

function ic(a, c, d) {
    c = Fc(a, c, d);
    if (-1 == c) throw Error("Unable to find connection in connectionDB.");
    a.Cb.splice(c, 1)
}

function nc(a, c, d) {
    function e(n) {
        var q = g - f[n].x,
            p = k - f[n].y;
        Math.sqrt(q * q + p * p) <= d && m.push(f[n]);
        return p < d
    }
    var f = a.Cb,
        g = c.x,
        k = c.y;
    a = 0;
    for (var l = c = f.length - 2; a < l;) f[l].y < k ? a = l : c = l, l = Math.floor((a + c) / 2);
    var m = [];
    c = a = l;
    if (f.length) {
        for (; 0 <= a && e(a);) a--;
        do c++; while (c < f.length && e(c))
    }
    return m
}
h.Yi.Ba = function(a) {
    var c = [];
    c[h.X.Zb] = new h.Yi(a);
    c[h.X.Tc] = new h.Yi(a);
    c[h.X.$b] = new h.Yi(a);
    c[h.X.kd] = new h.Yi(a);
    return c
};
h.h.wg = function(a, c) {
    h.h.wg.v.constructor.call(this, c);
    this.Py = a
};
h.g.object.V(h.h.wg, h.h.ee);
h.h.wg.prototype.type = h.h.wq;
h.h.wg.prototype.qa = function() {
    var a = h.h.wg.v.qa.call(this);
    a.themeName = this.Py;
    return a
};
h.h.wg.prototype.ba = function(a) {
    h.h.wg.v.ba.call(this, a);
    this.Py = a.themeName
};
h.u.register(h.u.R.Gb, h.h.wq, h.h.wg);
h.h.zg = function(a, c, d, e, f) {
    h.h.zg.v.constructor.call(this, e);
    this.Wd = a;
    this.Vd = c;
    this.scale = d;
    this.dm = f
};
h.g.object.V(h.h.zg, h.h.ee);
h.h.zg.prototype.type = h.h.Sk;
h.h.zg.prototype.qa = function() {
    var a = h.h.zg.v.qa.call(this);
    a.viewTop = this.Wd;
    a.viewLeft = this.Vd;
    a.scale = this.scale;
    a.oldScale = this.dm;
    return a
};
h.h.zg.prototype.ba = function(a) {
    h.h.zg.v.ba.call(this, a);
    this.Wd = a.viewTop;
    this.Vd = a.viewLeft;
    this.scale = a.scale;
    this.dm = a.oldScale
};
h.u.register(h.u.R.Gb, h.h.Sk, h.h.zg);
h.Hh = function(a, c) {
    this.Lj = a;
    this.Tt = c.spacing;
    this.Lx = c.length;
    this.OD = (this.Ds = a.firstChild) && this.Ds.nextSibling;
    this.fF = c.snap
};
h.Hh.prototype.lh = 1;
h.Hh.prototype.H = function() {
    this.Lj = null
};
h.Hh.prototype.update = function(a) {
    this.lh = a;
    var c = this.Tt * a || 100;
    this.Lj.setAttribute("width", c);
    this.Lj.setAttribute("height", c);
    c = Math.floor(this.Tt / 2) + .5;
    var d = c - this.Lx / 2,
        e = c + this.Lx / 2;
    c *= a;
    d *= a;
    e *= a;
    Gc(this.Ds, a, d, e, c, c);
    Gc(this.OD, a, c, c, d, e)
};

function Gc(a, c, d, e, f, g) {
    a && (a.setAttribute("stroke-width", c), a.setAttribute("x1", d), a.setAttribute("y1", f), a.setAttribute("x2", e), a.setAttribute("y2", g))
}
h.Hh.prototype.moveTo = function(a, c) {
    this.Lj.setAttribute("x", a);
    this.Lj.setAttribute("y", c);
    (h.g.userAgent.$d || h.g.userAgent.Eh) && this.update(this.lh)
};
h.Hh.Va = function(a, c, d) {
    a = h.g.j.J(h.g.D.vv, {
        id: "blocklyGridPattern" + a,
        patternUnits: "userSpaceOnUse"
    }, d);
    0 < c.length && 0 < c.spacing ? (h.g.j.J(h.g.D.Ik, {
        stroke: c.colour
    }, a), 1 < c.length && h.g.j.J(h.g.D.Ik, {
        stroke: c.colour
    }, a)) : h.g.j.J(h.g.D.Ik, {}, a);
    return a
};
h.Jv = function(a, c) {
    this.m = a;
    this.ag = c;
    this.Cm = [];
    this.Pe = Object.create(null)
};
b = h.Jv.prototype;
b.Qf = function() {
    return this.ag
};
b.tm = function(a) {
    var c = this.ag;
    this.ag = a;
    if (a = ca(this.m)) c && h.g.j.fd(a, c.me()), h.g.j.Nb(a, this.ag.me());
    for (c = 0; a = this.Cm[c]; c++) Hc(a);
    c = 0;
    a = Object.keys(this.Pe);
    for (var d; d = a[c]; c++)
        for (var e = 0, f; f = this.Pe[d][e]; e++) f.element.style[f.propertyName] = this.ag && ab(this.ag, d) || "";
    h.ic()
};
b.subscribe = function(a, c, d) {
    this.Pe[c] || (this.Pe[c] = []);
    this.Pe[c].push({
        element: a,
        propertyName: d
    });
    a.style[d] = this.ag && ab(this.ag, c) || ""
};
b.unsubscribe = function(a) {
    if (a)
        for (var c = Object.keys(this.Pe), d = 0, e; e = c[d]; d++) {
            for (var f = this.Pe[e], g = f.length - 1; 0 <= g; g--) f[g].element === a && f.splice(g, 1);
            this.Pe[e].length || delete this.Pe[e]
        }
};
b.H = function() {
    this.Pe = this.Cm = this.ag = this.Pd = null
};
h.Vc = function(a, c) {
    h.Vc.v.constructor.call(this, a, c);
    this.Do = !1;
    this.nd = Object.create(null);
    this.Ly = this.jm = 0;
    this.Fx = this.et = null
};
h.g.object.V(h.Vc, h.He);
h.Vc.AB = 5;
h.Vc.BB = 6;
b = h.Vc.prototype;
b.Cr = function(a) {
    this.Fx = this.Kb.options.zb && this.Kb.options.zb.oy;
    h.Vc.v.Cr.call(this, a);
    !this.Ao && h.Touch.Ho(a) && Ic(this, a)
};
b.sj = function(a) {
    this.et = h.N.Aa(document, "mousedown", null, this.uD.bind(this), !0);
    this.Yo = h.N.Aa(document, "mousemove", null, this.Mj.bind(this), !0);
    this.Zo = h.N.Aa(document, "mouseup", null, this.to.bind(this), !0);
    a.preventDefault();
    a.stopPropagation()
};
b.uD = function(a) {
    !this.bd() && h.Touch.Ho(a) && (Ic(this, a), this.Do && h.Yg())
};
b.Mj = function(a) {
    if (this.bd()) h.Touch.St(a) && h.Vc.v.Mj.call(this, a);
    else if (this.Do) {
        if (h.Touch.Ho(a)) {
            this.nd[h.Touch.qo(a)] = Jc(this, a);
            var c = Object.keys(this.nd);
            if (this.Fx && 2 === c.length) {
                c = Object.keys(this.nd);
                c = h.g.T.Br(this.nd[c[0]], this.nd[c[1]]) / this.Ly;
                if (0 < this.jm && Infinity > this.jm) {
                    var d = c - this.jm;
                    d = 0 < d ? d * h.Vc.AB : d * h.Vc.BB;
                    var e = this.Kb,
                        f = h.g.bm(a, t(e), Va(e));
                    e.zoom(f.x, f.y, d)
                }
                this.jm = c;
                a.preventDefault()
            } else h.Vc.v.Mj.call(this, a)
        }
        h.Yg()
    } else h.Vc.v.Mj.call(this, a)
};
b.to = function(a) {
    if (h.Touch.Ho(a) && !this.bd()) {
        var c = h.Touch.qo(a);
        this.nd[c] && delete this.nd[c];
        2 > Object.keys(this.nd).length && (this.nd = Object.create(null), this.jm = 0)
    }!this.Do || this.bd() ? h.Touch.St(a) && h.Vc.v.to.call(this, a) : (a.preventDefault(), a.stopPropagation(), this.H())
};
b.H = function() {
    h.Vc.v.H.call(this);
    this.et && h.N.yb(this.et)
};

function Ic(a, c) {
    a.nd[h.Touch.qo(c)] = Jc(a, c);
    var d = Object.keys(a.nd);
    2 == d.length && (a.Ly = h.g.T.Br(a.nd[d[0]], a.nd[d[1]]), a.Do = !0, c.preventDefault())
}

function Jc(a, c) {
    return a.Kb ? new h.g.T(c.pageX ? c.pageX : c.changedTouches[0].pageX, c.pageY ? c.pageY : c.changedTouches[0].pageY) : null
};
h.Qv = function(a) {
    this.kt = a;
    this.Pk = Object.create(null)
};
b = h.Qv.prototype;
b.zs = null;
b.H = function() {
    this.Pk = this.kt = null
};
b.load = function(a, c) {
    if (a.length) {
        try {
            var d = new h.g.global.Audio
        } catch (l) {
            return
        }
        for (var e, f = 0; f < a.length; f++) {
            var g = a[f],
                k = g.match(/\.(\w+)$/);
            if (k && d.canPlayType("audio/" + k[1])) {
                e = new h.g.global.Audio(g);
                break
            }
        }
        e && e.play && (this.Pk[c] = e)
    }
};
b.preload = function() {
    for (var a in this.Pk) {
        var c = this.Pk[a];
        c.volume = .01;
        var d = c.play();
        void 0 !== d ? d.then(c.pause).catch(function() {}) : c.pause();
        if (h.g.userAgent.Fk || h.g.userAgent.Wu) break
    }
};
b.play = function(a, c) {
    var d = this.Pk[a];
    d ? (a = new Date, null != this.zs && a - this.zs < h.kB || (this.zs = a, d = h.g.userAgent.Fk || h.g.userAgent.Sm ? d : d.cloneNode(), d.volume = void 0 === c ? 1 : c, d.play())) : this.kt && this.kt.Yc.play(a, c)
};
h.Sv = function(a) {
    this.hl = a;
    this.Va()
};
b = h.Sv.prototype;
b.fb = null;
b.hl = null;
b.Va = function() {
    this.fb || (this.fb = h.g.j.J(h.g.D.jj, {
        xmlns: h.g.j.An,
        "xmlns:html": h.g.j.Sp,
        "xmlns:xlink": h.g.j.ld,
        version: "1.1",
        "class": "blocklyWsDragSurface blocklyOverflowVisible"
    }, null), this.hl.appendChild(this.fb))
};
b.Oi = function(a, c) {
    a = a.toFixed(0);
    c = c.toFixed(0);
    this.fb.style.display = "block";
    h.g.j.qm(this.fb, "translate3d(" + a + "px, " + c + "px, 0px)")
};
b.fs = function() {
    return h.g.pe(this.fb)
};
b.Pn = function(a) {
    if (!a) throw Error("Couldn't clear and hide the drag surface: missing new surface.");
    var c = this.fb.childNodes[0],
        d = this.fb.childNodes[1];
    if (!(c && d && h.g.j.ks(c, "blocklyBlockCanvas") && h.g.j.ks(d, "blocklyBubbleCanvas"))) throw Error("Couldn't clear and hide the drag surface. A node was missing.");
    null != this.tt ? h.g.j.Qj(c, this.tt) : a.insertBefore(c, a.firstChild);
    h.g.j.Qj(d, c);
    this.fb.style.display = "none";
    if (this.fb.childNodes.length) throw Error("Drag surface was not cleared.");
    h.g.j.qm(this.fb,
        "");
    this.tt = null
};
h.dc = function(a, c, d) {
    h.dc.v.constructor.call(this, a);
    this.dd = new(h.u.Of(h.u.R.fv, a, !0))(this);
    this.oe = a.oe || this.dd.oe.bind(this.dd);
    this.rm = a.rm || h.dc.bF;
    this.Hf = new h.Fb;
    this.Wn = h.Yi.Ba(this.If);
    c && (this.md = c);
    d && (this.Si = d);
    this.up = !!this.Si && h.g.li();
    this.Ml = [];
    this.Yc = new h.Qv(a.ed);
    this.Id = this.options.js ? new h.Hh(this.options.js, a.nx) : null;
    this.re = new h.Lk(this);
    this.$t = Object.create(null);
    this.Ow = Object.create(null);
    h.ma && h.ma.Zh && Kc(this, h.Ph, h.ma.Zh);
    h.Mv && h.Mv.Zh && Kc(this, h.vB, h.Mv.Zh);
    h.Sa && h.Sa.Zh && (Kc(this, h.jq, h.Sa.Zh), D(this, h.Sa.$D));
    this.mc = this.options.ed ? this.options.ed.mc : new h.Jv(this, this.options.oF || h.xf.gg);
    this.mc.Cm.push(this);
    this.mb = h.i.Ba(this.options.Ct || "geras", this.Qf(), this.options.Dt);
    this.Vq = null;
    this.Ul = !1;
    this.Hm = [];
    this.Er = [];
    this.Uq = new h.g.Uc(0, 0)
};
h.g.object.V(h.dc, h.qb);
b = h.dc.prototype;
b.ip = null;
b.ua = !0;
b.Uf = !0;
b.Sf = !1;
b.Eo = !1;
b.Ft = !0;
b.scrollX = 0;
b.scrollY = 0;
b.Jw = null;
b.scale = 1;
b.Xs = 1;
b.ey = 0;
b.$x = 0;
b.kk = null;
b.Ta = null;
b.ya = null;
b.ob = null;
b.tc = null;
b.md = null;
b.Si = null;
b.up = !1;
b.zo = !1;
b.ts = null;
b.Kx = null;
b.Da = null;
b.Dx = null;
b.us = !0;
b.Zf = function(a) {
    this.re.Zf(a)
};
b.nh = function(a) {
    this.re.nh(a)
};
b.Gl = function(a) {
    return this.re ? this.re.Gl(a) : null
};
b.Dl = function() {
    return this.re ? this.re.Dl() : null
};
b.Qf = function() {
    return this.mc.Qf()
};
b.tm = function(a) {
    a || (a = h.xf.gg);
    this.mc.tm(a)
};

function Hc(a) {
    a.O && a.mb.vt(a.O, a.Qf());
    Lc(C(a, !1).filter(function(c) {
        return !!c.Bm
    }));
    Mc(a);
    a.ob && Hc(a.ob);
    a.isVisible() && a.Jb(!0);
    a = new(h.h.get(h.h.wq))(a.Qf().name, a.id);
    h.h.Ga(a)
}

function Lc(a) {
    for (var c = 0, d; d = a[c]; c++) {
        var e = d.Bm;
        e && (d.Li(e), d.te && d.te.FK())
    }
}

function Va(a) {
    if (a.us) {
        var c = t(a).getScreenCTM();
        c && (a.Dx = c.inverse(), a.us = !1)
    }
    return a.Dx
}
b.Mm = function() {
    this.us = !0
};
b.isVisible = function() {
    return this.Uf
};

function oa(a, c) {
    var d = 0,
        e = 0,
        f = 1;
    if (h.g.j.containsNode(a.xb, c) || h.g.j.containsNode(a.$f, c)) f = a.scale;
    do {
        var g = h.g.pe(c);
        if (c == a.xb || c == a.$f) f = 1;
        d += g.x * f;
        e += g.y * f;
        c = c.parentNode
    } while (c && c != t(a));
    return new h.g.T(d, e)
}

function Ec(a) {
    a = a.Uq;
    return new h.g.Uc(a.width, a.height)
}

function ca(a) {
    if (!a.ts)
        for (var c = a.O; c;) {
            if (-1 != (" " + (c.getAttribute("class") || "") + " ").indexOf(" injectionDiv ")) {
                a.ts = c;
                break
            }
            c = c.parentNode
        }
    return a.ts
}
b.Va = function(a) {
    this.O = h.g.j.J(h.g.D.Sc, {
        "class": "blocklyWorkspace"
    }, null);
    a && (this.kc = h.g.j.J(h.g.D.Mb, {
        height: "100%",
        width: "100%",
        "class": a
    }, this.O), "blocklyMainBackground" == a && this.Id ? this.kc.style.fill = "url(#" + this.Id.Lj.id + ")" : this.mc.subscribe(this.kc, "workspaceBackgroundColour", "fill"));
    this.xb = h.g.j.J(h.g.D.Sc, {
        "class": "blocklyBlockCanvas"
    }, this.O);
    this.$f = h.g.j.J(h.g.D.Sc, {
        "class": "blocklyBubbleCanvas"
    }, this.O);
    this.Sf || (h.N.Aa(this.O, "mousedown", this, this.bh, !1, !0), h.N.Aa(this.O, "wheel",
        this, this.nE));
    this.options.Jl && (this.ob = new(h.u.Of(h.u.R.rB, this.options, !0))(this));
    this.Id && this.Id.update(this.scale);
    Nc(this);
    var c = h.u.Of(h.u.R.xk, this.options);
    c && (a = this.re, c = new c, a.Fd && a.Fd.Hd && a.Fd.Hd.H(), a.Fd = c, a.Fd && (c = a.Fd, c = new h.i.og(a.m, a.m.mb.ga(), c), a.Fd.Hd = c, a.Zf(a.Fd.Hd.Va())));
    this.mb.Va(this.O, this.Qf());
    return this.O
};
b.H = function() {
    this.ua = !1;
    this.tc && this.tc.cancel();
    this.O && (h.g.j.removeNode(this.O), this.O = null);
    this.$f = this.xb = null;
    this.ob && (this.ob.H(), this.ob = null);
    this.ya && (this.ya.H(), this.ya = null);
    this.kk && (this.kk.H(), this.kk = null);
    this.Ta && (this.Ta.H(), this.Ta = null);
    this.Qm && (this.Qm.H(), this.Qm = null);
    this.Yc && (this.Yc.H(), this.Yc = null);
    this.Id && (this.Id.H(), this.Id = null);
    this.mb.H();
    this.re && (this.re.H(), this.re = null);
    h.dc.v.H.call(this);
    if (this.mc) {
        var a = this.mc,
            c = a.Cm.indexOf(this);
        if (0 > c) throw Error("Cannot unsubscribe a workspace that hasn't been subscribed.");
        a.Cm.splice(c, 1);
        this.mc.unsubscribe(this.kc);
        this.options.ed || (this.mc.H(), this.mc = null)
    }
    this.Ow = this.$t = this.Wn = null;
    this.options.ed || (a = t(this)) && a.parentNode && h.g.j.removeNode(a.parentNode);
    this.ip && (h.N.yb(this.ip), this.ip = null)
};
b.Rs = function(a, c) {
    return new h.Xa(this, a, c)
};

function Bc(a, c) {
    return a.ya || c ? a.ya : a.ob ? Bc(a.ob) : null
}

function ia(a) {
    a.Ft && a.ua && (a.Ta && a.Ta.resize(), a.Mm())
}
b.resize = function() {
    this.ob && this.ob.position();
    this.ya && this.ya.position();
    var a = sa(this.Hf, h.Fb.Tb.wv);
    var c = this.dd;
    c = {
        bz: ob(c),
        Gn: Dc(c),
        Sy: Cc(c)
    };
    for (var d = [], e = 0, f; f = a[e]; e++) f.position(c, d), (f = f.Bl()) && d.push(f);
    this.Ta && this.Ta.resize();
    this.Mm();
    Nc(this)
};

function wb(a) {
    var c = h.g.eD();
    h.g.T.Nf(a.Kx, c) || (a.Kx = c, a.Mm(), Nc(a))
}

function Oc(a, c, d) {
    var e = t(a);
    c && (a.Uq.width = c, e.XB = c);
    d && (a.Uq.height = d, e.WB = d)
}

function t(a) {
    if (!a.Vq)
        for (var c = a.O; c;) {
            if ("svg" == c.tagName) {
                a.Vq = c;
                break
            }
            c = c.parentNode
        }
    return a.Vq
}

function Ha(a) {
    if (h.h.isEnabled()) {
        var c = a.scale,
            d = -a.scrollY,
            e = -a.scrollX;
        if (!(c == a.Xs && 1 > Math.abs(d - a.ey) && 1 > Math.abs(e - a.$x))) {
            var f = new(h.h.get(h.h.Sk))(d, e, c, a.id, a.Xs);
            a.Xs = c;
            a.ey = d;
            a.$x = e;
            h.h.Ga(f)
        }
    }
}
b.translate = function(a, c) {
    if (this.up && this.zo) this.Si.Oi(a, c);
    else {
        var d = "translate(" + a + "," + c + ") scale(" + this.scale + ")";
        this.xb.setAttribute("transform", d);
        this.$f.setAttribute("transform", d)
    }
    if (this.md) {
        d = this.md;
        var e = this.scale;
        d.lh = e;
        var f = a.toFixed(0),
            g = c.toFixed(0);
        d.hw.x = parseInt(f, 10);
        d.hw.y = parseInt(g, 10);
        d.Ue.setAttribute("transform", "translate(" + f + "," + g + ") scale(" + e + ")")
    }
    this.Id && this.Id.moveTo(a, c);
    Ha(this)
};

function Xa(a) {
    if (a.up) {
        a.zo = !1;
        var c = a.Si.fs();
        a.Si.Pn(a.O);
        c = "translate(" + c.x + "," + c.y + ") scale(" + a.scale + ")";
        a.xb.setAttribute("transform", c);
        a.$f.setAttribute("transform", c)
    }
}

function Wa(a) {
    if (a.up && !a.zo) {
        a.zo = !0;
        var c = a.xb.previousSibling,
            d = parseInt(t(a).getAttribute("width"), 10),
            e = parseInt(t(a).getAttribute("height"), 10),
            f = h.g.pe(a.xb),
            g = a.Si,
            k = a.xb,
            l = a.$f,
            m = a.scale;
        if (g.fb.childNodes.length) throw Error("Already dragging a block.");
        g.tt = c;
        k.setAttribute("transform", "translate(0, 0) scale(" + m + ")");
        l.setAttribute("transform", "translate(0, 0) scale(" + m + ")");
        g.fb.setAttribute("width", d);
        g.fb.setAttribute("height", e);
        g.fb.appendChild(k);
        g.fb.appendChild(l);
        g.fb.style.display =
            "block";
        a.Si.Oi(f.x, f.y)
    }
}
b.Hl = function() {
    var a = this.oe();
    return a ? a.Bc / this.scale : 0
};
b.Jb = function(a) {
    this.Uf = a;
    if (this.O)
        if (this.Ta && this.Ta.Ii(a), Bc(this) && Bc(this).Ii(a), t(this).style.display = a ? "block" : "none", this.ob && this.ob.Jb(a), a) {
            a = C(this, !1);
            for (var c = a.length - 1; 0 <= c; c--) a[c].Xl();
            this.Ja();
            this.ob && this.ob.position()
        } else h.ic(!0)
};
b.Ja = function() {
    for (var a = C(this, !1), c = a.length - 1; 0 <= c; c--) a[c].Ja(!1);
    if (this.tc)
        for (a = this.tc.Ij(), c = 0; c < a.length; c++) a[c].Ja(!1);
    c = this.re;
    c.m.Ul && c.Kf && c.m.Dl().draw()
};

function Pc(a, c) {
    var d = y;
    if (void 0 === c) {
        for (var e = 0, f; f = d.Ml[e]; e++) f.we(!1);
        d.Ml.length = 0
    }
    if (f = a ? d.Lc(a) : null)(a = void 0 === c || c) ? -1 == d.Ml.indexOf(f) && d.Ml.push(f) : h.g.Xk(d.Ml, f), f.we(a)
}
b.cp = function(a) {
    if (this.ua && a.tagName && !(a.getElementsByTagName("block").length >= fb(this)))
        if (this.tc && this.tc.cancel(), "comment" == a.tagName.toLowerCase()) {
            h.h.disable();
            try {
                var c = h.oj.Al(a),
                    d = parseInt(a.getAttribute("x"), 10),
                    e = parseInt(a.getAttribute("y"), 10);
                isNaN(d) || isNaN(e) || (this.I && (d = -d), c.moveBy(d + 50, e + 50))
            } finally {
                h.h.enable()
            }
            h.h.isEnabled() && h.Rv.FJ(c);
            c.select()
        } else {
            h.h.disable();
            try {
                var f = h.K.Fj(a, this),
                    g = parseInt(a.getAttribute("x"), 10),
                    k = parseInt(a.getAttribute("y"), 10);
                if (!isNaN(g) &&
                    !isNaN(k)) {
                    this.I && (g = -g);
                    do {
                        a = !1;
                        var l = C(this, !1);
                        c = 0;
                        for (var m; m = l[c]; c++) {
                            var n = m.Za();
                            if (1 >= Math.abs(g - n.x) && 1 >= Math.abs(k - n.y)) {
                                a = !0;
                                break
                            }
                        }
                        if (!a) {
                            var q = f.ne(!1);
                            c = 0;
                            for (var p; p = q[c]; c++)
                                if (p.closest(h.oc, new h.g.T(g, k)).connection) {
                                    a = !0;
                                    break
                                }
                        }
                        a && (g = this.I ? g - h.oc : g + h.oc, k += 2 * h.oc)
                    } while (a);
                    f.moveBy(g, k)
                }
            } finally {
                h.h.enable()
            }
            h.h.isEnabled() && !f.La && h.h.Ga(new(h.h.get(h.h.xh))(f));
            f.select()
        }
};

function Mc(a) {
    (a = a.Sf ? a.Da : a) && !a.tc && a.ob && Bc(a.ob) && a.ob.gK()
}
b.Fi = function(a, c) {
    h.dc.v.Fi.call(this, a, c);
    Mc(this)
};
b.Cj = function(a) {
    h.dc.v.Cj.call(this, a);
    Mc(this)
};
b.je = function(a, c, d) {
    a = h.dc.v.je.call(this, a, c, d);
    Mc(this);
    return a
};

function Nc(a) {
    var c = sa(a.Hf, h.Fb.Tb.Mp);
    a.Er = [];
    for (var d = 0, e; e = c[d]; d++) {
        var f = e.Uw();
        f && a.Er.push({
            bl: e,
            gC: f
        })
    }
}

function Da(a, c) {
    for (var d = 0, e; e = a.Er[d]; d++)
        if (e.gC.contains(c.clientX, c.clientY)) return e.bl;
    return null
}
b.bh = function(a) {
    var c = this.Kg(a);
    c && Bb(c, a, this)
};
b.ym = function(a, c) {
    a = h.g.bm(a, t(this), Va(this));
    a.x /= this.scale;
    a.y /= this.scale;
    this.Jw = h.g.T.ql(c, a)
};
b.bd = function() {
    return null != this.tc && this.tc.bd()
};
b.wc = function() {
    return this.options.yc && !!this.options.yc.scrollbars || this.options.yc && this.options.yc.mk || this.options.yc && this.options.yc.Mf || this.options.zb && this.options.zb.mk || this.options.zb && this.options.zb.oy
};

function rb(a) {
    var c = !!a.Ta;
    return a.wc() && (!c || c && !!a.Ta.ib)
}

function sb(a) {
    var c = !!a.Ta;
    return a.wc() && (!c || c && !!a.Ta.Ua)
}
b.nE = function(a) {
    if (h.He.ki()) a.preventDefault(), a.stopPropagation();
    else {
        var c = this.options.zb && this.options.zb.mk,
            d = this.options.yc && this.options.yc.mk;
        if (c || d) {
            var e = h.g.hx(a);
            !c || !a.ctrlKey && d ? (c = this.scrollX - e.x, d = this.scrollY - e.y, a.shiftKey && !e.x && (c = this.scrollX - e.y, d = this.scrollY), this.scroll(c, d)) : (e = -e.y / 50, c = h.g.bm(a, t(this), Va(this)), this.zoom(c.x, c.y, e));
            a.preventDefault()
        }
    }
};

function ea(a) {
    a = [].concat(a.Hm);
    if (!a.length) return new h.g.Rect(0, 0, 0, 0);
    for (var c = a[0].Bl(), d = 1; d < a.length; d++) {
        var e = a[d];
        e.rd && e.rd() || (e = e.Bl(), e.top < c.top && (c.top = e.top), e.bottom > c.bottom && (c.bottom = e.bottom), e.left < c.left && (c.left = e.left), e.right > c.right && (c.right = e.right))
    }
    return c
}
b.um = function(a) {
    if (!this.options.readOnly && !this.Sf) {
        var c = hc(h.Ea.Hc.Wc, {
            B: this
        });
        this.kC && this.kC(c, a);
        h.Ra.show(a, c, this.I)
    }
};

function ba(a) {
    if (a.options.ed) ba(a.options.ed);
    else {
        h.Vl = a;
        document.activeElement && document.activeElement.blur && document.activeElement.blur();
        try {
            t(a).focus({
                preventScroll: !0
            })
        } catch (c) {
            try {
                t(a).parentNode.setActive()
            } catch (d) {
                t(a).parentNode.focus({
                    preventScroll: !0
                })
            }
        }
    }
}
b.zoom = function(a, c, d) {
    d = Math.pow(this.options.zb.WE, d);
    var e = this.scale * d;
    if (this.scale != e) {
        e > this.options.zb.Zl ? d = this.options.zb.Zl / this.scale : e < this.options.zb.am && (d = this.options.zb.am / this.scale);
        var f = this.xb.getCTM(),
            g = t(this).createSVGPoint();
        g.x = a;
        g.y = c;
        g = g.matrixTransform(f.inverse());
        a = g.x;
        c = g.y;
        f = f.translate(a * (1 - d), c * (1 - d)).scale(d);
        this.scrollX = f.e;
        this.scrollY = f.f;
        this.setScale(e)
    }
};
b.setScale = function(a) {
    this.options.zb.Zl && a > this.options.zb.Zl ? a = this.options.zb.Zl : this.options.zb.am && a < this.options.zb.am && (a = this.options.zb.am);
    this.scale = a;
    h.ic(!1);
    this.ya && (this.ya.ut(), Nc(this));
    this.Id && this.Id.update(this.scale);
    a = this.oe();
    this.scrollX -= a.Ic;
    this.scrollY -= a.Xc;
    a.Vd += a.Ic;
    a.Wd += a.Xc;
    this.scroll(this.scrollX, this.scrollY);
    if (this.Ta)
        if (this.ya) {
            var c = this.Ta;
            c.ib && Qa(c.ib, a);
            c.Ua && Sa(c.Ua, a)
        } else c = this.Ta, c.ib && Ra(c.ib, a), c.Ua && Ta(c.Ua, a)
};
b.scroll = function(a, c) {
    h.ic(!0);
    var d = this.oe();
    a = Math.min(a, -d.scrollLeft);
    c = Math.min(c, -d.scrollTop);
    var e = d.scrollTop + Math.max(0, d.scrollHeight - d.Qc);
    a = Math.max(a, -(d.scrollLeft + Math.max(0, d.scrollWidth - d.Bc)));
    c = Math.max(c, -e);
    this.scrollX = a;
    this.scrollY = c;
    this.Ta && this.Ta.set(-(a + d.scrollLeft), -(c + d.scrollTop), !1);
    a += d.Ic;
    c += d.Xc;
    this.translate(a, c)
};
h.dc.bF = function(a) {
    var c = this.oe();
    "number" == typeof a.x && (this.scrollX = -(c.scrollLeft + (c.scrollWidth - c.Bc) * a.x));
    "number" == typeof a.y && (this.scrollY = -(c.scrollTop + (c.scrollHeight - c.Qc) * a.y));
    this.translate(this.scrollX + c.Ic, this.scrollY + c.Xc)
};
b = h.dc.prototype;
b.Lc = function(a) {
    return h.dc.v.Lc.call(this, a)
};
b.ub = function(a) {
    return h.dc.v.ub.call(this, a)
};
b.In = function(a) {
    this.Hm.push(a);
    h.dc.v.In.call(this, a)
};
b.hp = function(a) {
    h.g.Xk(this.Hm, a);
    h.dc.v.hp.call(this, a)
};
b.ac = function(a) {
    var c = !this.Ft && a;
    this.Ft = a;
    c && ia(this)
};
b.clear = function() {
    this.ac(!1);
    h.dc.v.clear.call(this);
    this.Hm = [];
    this.ac(!0)
};

function Qc(a, c) {
    if ("function" != typeof c) throw TypeError("Button callbacks must be functions.");
    a.Ow.CREATE_VARIABLE = c
}

function Kc(a, c, d) {
    if ("function" != typeof d) throw TypeError("Toolbox category callbacks must be functions.");
    a.$t[c] = d
}
b.Kg = function(a) {
    var c = "mousedown" == a.type || "touchstart" == a.type || "pointerdown" == a.type,
        d = this.tc;
    return d ? c && d.ei ? (console.warn("Tried to start the same gesture twice."), d.cancel(), null) : d : c ? this.tc = new h.Vc(a, this) : null
};

function vc(a) {
    a.tc && a.tc.cancel()
};
h.Gh = function(a) {
    h.Gh.v.constructor.call(this);
    a.rm = this.aF.bind(this);
    var c = this.m = new h.dc(a),
        d = new h.Dk(this.m, this);
    c.dd = d;
    c.oe = c.dd.oe.bind(c.dd);
    this.m.Sf = !0;
    this.m.Jb(this.Uf);
    this.id = h.g.Xe();
    this.I = !!a.I;
    this.Jd = !1;
    this.qh = a.Pc;
    this.Mr = [];
    this.Oo = [];
    this.Yk = [];
    this.Nc = [];
    this.qt = [];
    this.jk = this.m.mb.ga().Cn;
    this.Da = null
};
h.g.object.V(h.Gh, h.gn);
b = h.Gh.prototype;
b.Qh = !0;
b.Uf = !1;
b.Vh = !0;
b.pb = 8;
b.Ih = h.Gh.prototype.pb;
b.jA = 3 * h.Gh.prototype.Ih;
b.kA = 3 * h.Gh.prototype.Ih;
b.iB = 2.5;
b.jb = 0;
b.vc = 0;
b.GC = 70;
b.Va = function(a) {
    this.O = h.g.j.J(a, {
        "class": "blocklyFlyout",
        style: "display: none"
    }, null);
    this.kc = h.g.j.J(h.g.D.Je, {
        "class": "blocklyFlyoutBackground"
    }, this.O);
    this.O.appendChild(this.m.Va());
    this.m.mc.subscribe(this.kc, "flyoutBackgroundColour", "fill");
    this.m.mc.subscribe(this.kc, "flyoutOpacity", "fill-opacity");
    return this.O
};
b.Ba = function(a) {
    this.Da = a;
    this.m.Da = a;
    this.m.Ta = new h.uq(this.m, this.Jd, !this.Jd, "blocklyFlyoutScrollbar", this.iB);
    this.$a();
    Array.prototype.push.apply(this.Mr, h.N.Aa(this.O, "wheel", this, this.AF));
    this.Qh || (this.no = this.Nr.bind(this), D(this.Da, this.no));
    Array.prototype.push.apply(this.Mr, h.N.Aa(this.kc, "mousedown", this, this.bh));
    this.m.Kg = this.Da.Kg.bind(this.Da);
    this.m.Pt(this.Da.Oa);
    var c = this.m;
    c.$j = new h.Dq(c);
    pa(a.Hf, {
        bl: this,
        weight: 1,
        Cg: [h.Fb.Tb.Jp, h.Fb.Tb.Mp]
    })
};
b.H = function() {
    this.$a();
    qa(this.m.Hf, this.id);
    h.N.yb(this.Mr);
    this.no && (jb(this.Da, this.no), this.no = null);
    this.m && (this.m.mc.unsubscribe(this.kc), this.m.Da = null, this.m.H(), this.m = null);
    this.O && (h.g.j.removeNode(this.O), this.O = null);
    this.Da = this.kc = null
};
b.Hl = function() {
    return this.jb
};
b.isVisible = function() {
    return this.Uf
};
b.Jb = function(a) {
    var c = a != this.isVisible();
    this.Uf = a;
    c && (this.Qh || Nc(this.m), this.Lm())
};
b.Ii = function(a) {
    var c = a != this.Vh;
    this.Vh = a;
    c && this.Lm()
};
b.Lm = function() {
    var a = this.Vh ? this.isVisible() : !1;
    this.O.style.display = a ? "block" : "none";
    this.m.Ta.Ii(a)
};
b.$a = function() {
    if (this.isVisible()) {
        this.Jb(!1);
        for (var a = 0, c; c = this.Nc[a]; a++) h.N.yb(c);
        this.Nc.length = 0;
        this.jh && (jb(this.m, this.jh), this.jh = null)
    }
};
b.show = function(a) {
    this.m.ac(!1);
    this.$a();
    Rc(this);
    "string" == typeof a && (a = Sc(this, a));
    this.Jb(!0);
    a = h.g.W.vw(a);
    a = Tc(this, a);
    Uc(this, a.oC, a.TC);
    this.Nc.push(h.N.Aa(this.kc, "mouseover", this, function() {
        for (var c = this.m.ub(!1), d = 0, e; e = c[d]; d++) e.nm()
    }));
    this.Jd ? this.vc = 0 : this.jb = 0;
    this.m.ac(!0);
    this.ut();
    this.Nr();
    this.position();
    this.jh = this.ut.bind(this);
    D(this.m, this.jh)
};

function Tc(a, c) {
    var d = [],
        e = [];
    a.qt.length = 0;
    for (var f = a.Jd ? a.jA : a.kA, g = 0, k; k = c[g]; g++) {
        if (k.custom) {
            var l = Sc(a, k.custom);
            l = h.g.W.vw(l);
            c.splice.apply(c, [g, 1].concat(l));
            k = c[g]
        }
        switch (k.kind.toUpperCase()) {
            case "BLOCK":
                l = k;
                var m = l;
                k = null;
                var n = m.blockxml;
                n && "string" != typeof n ? k = n : n && "string" == typeof n ? (k = h.K.ye(n), m.blockxml = k) : m.type && (k = h.g.xml.createElement("xml"), k.setAttribute("type", m.type), k.setAttribute("disabled", m.disabled), m.blockxml = k);
                if (!k) throw Error("Error: Invalid block definition. Block definition must have blockxml or type.");
                m = k;
                k = a;
                n = h.K.Fj(m, k.m);
                n.isEnabled() || k.qt.push(n);
                k = n;
                l = parseInt(l.gap || m.getAttribute("gap"), 10);
                e.push(isNaN(l) ? f : l);
                d.push({
                    type: "block",
                    block: k
                });
                break;
            case "SEP":
                l = e;
                m = f;
                k = parseInt(k.gap, 10);
                !isNaN(k) && 0 < l.length ? l[l.length - 1] = k : l.push(m);
                break;
            case "LABEL":
                l = Vc(a, k, !0);
                d.push({
                    type: "button",
                    button: l
                });
                e.push(f);
                break;
            case "BUTTON":
                l = Vc(a, k, !1), d.push({
                    type: "button",
                    button: l
                }), e.push(f)
        }
    }
    return {
        oC: d,
        TC: e
    }
}

function Sc(a, c) {
    c = a.m.Da.$t[c] || null;
    if ("function" != typeof c) throw TypeError("Couldn't find a callback function when opening a toolbox category.");
    a = c(a.m.Da);
    if (!Array.isArray(a)) throw new TypeError("Result of toolbox category callback must be an array.");
    return a
}

function Vc(a, c, d) {
    if (!h.iA) throw Error("Missing require for Blockly.FlyoutButton");
    return new h.iA(a.m, a.Da, c, d)
}

function Rc(a) {
    for (var c = a.m.ub(!1), d = 0, e; e = c[d]; d++) e.B == a.m && e.H(!1, !1);
    for (d = 0; d < a.Oo.length; d++)
        if (c = a.Oo[d]) h.G.cu(c), h.g.j.removeNode(c);
    for (d = a.Oo.length = 0; c = a.Yk[d]; d++) c.H();
    a.Yk.length = 0;
    a.m.$j.clear()
}

function Wc(a, c) {
    return function(d) {
        var e = a.Da.Kg(d);
        e && (Db(e, c), Cb(e, d, a))
    }
}
b.bh = function(a) {
    var c = this.Da.Kg(a);
    c && Cb(c, a, this)
};

function xb(a, c) {
    var d = null;
    h.h.disable();
    var e = a.Da.$h();
    a.Da.ac(!1);
    try {
        var f = a.Da;
        if (!c.oa()) throw Error("oldBlock is not rendered.");
        var g = h.K.Df(c, !0);
        f.ac(!1);
        var k = h.K.Fj(g, f);
        if (!k.oa()) throw Error("block is not rendered.");
        var l = h.g.Fl(f.xb),
            m = h.g.Fl(a.m.xb),
            n = c.Za();
        n.scale(a.m.scale);
        var q = h.g.T.sum(m, n),
            p = h.g.T.ql(q, l);
        p.scale(1 / f.scale);
        k.moveBy(p.x, p.y);
        d = k
    } finally {
        h.h.enable()
    }
    h.ic();
    c = h.ma.Sw(a.Da, e);
    if (h.h.isEnabled()) {
        h.h.ta(!0);
        for (e = 0; e < c.length; e++) f = c[e], h.h.Ga(new(h.h.get(h.h.Rk))(f));
        h.h.Ga(new(h.h.get(h.h.xh))(d))
    }
    a.Qh ? a.$a() : a.Nr();
    return d
}
b.Nr = function() {
    for (var a = this.m.ub(!1), c = 0, d; d = a[c]; c++)
        if (-1 == this.qt.indexOf(d))
            for (var e = gb(this.Da, h.g.Tr(d)); d;) d.jf(e), d = w(d)
};
b.ut = function() {
    this.jh && jb(this.m, this.jh);
    this.m.scale = this.Da.scale;
    for (var a = 0, c = this.m.ub(!1), d = 0, e; e = c[d]; d++) {
        var f = r(e).width;
        e.S && (f -= this.jk);
        a = Math.max(a, f)
    }
    for (d = 0; e = this.Yk[d]; d++) a = Math.max(a, e.width);
    a += 1.5 * this.Ih + this.jk;
    a *= this.m.scale;
    a += h.Ka.jc;
    if (this.jb != a) {
        for (d = 0; e = c[d]; d++) {
            if (this.I) {
                f = e.Za().x;
                var g = a / this.m.scale - this.Ih;
                e.S || (g -= this.jk);
                e.moveBy(g - f, 0)
            }
            e.Pw && (f = e.Pw, g = e, e = r(g), f.setAttribute("width", e.width), f.setAttribute("height", e.height), g = g.Za(), f.setAttribute("y",
                g.y), f.setAttribute("x", this.I ? g.x - e.width : g.x))
        }
        if (this.I)
            for (d = 0; e = this.Yk[d]; d++) c = e.OJ().y, e.moveTo(a / this.m.scale - e.width - this.Ih - this.jk, c);
        this.Da.Pc != this.qh || this.qh != h.g.W.Pa.Hb || this.Da.ob || this.Da.translate(this.Da.scrollX + a, this.Da.scrollY);
        this.jb = a;
        this.position();
        Nc(this.Da)
    }
    this.jh && D(this.m, this.jh)
};

function vb(a) {
    return a.m.Ta ? a.m.Ta.isVisible() : !1
};
h.Tk = function(a) {
    h.Tk.v.constructor.call(this, a)
};
h.g.object.V(h.Tk, h.Gh);
h.Tk.jK = "verticalFlyout";
b = h.Tk.prototype;
b.aF = function(a) {
    if (this.isVisible()) {
        var c = this.m.dd,
            d = c.ci(),
            e = ob(c);
        c = Dc(c);
        "number" == typeof a.y && (this.m.scrollY = -(d.top + (d.height - e.height) * a.y));
        this.m.translate(this.m.scrollX + c.left, this.m.scrollY + c.top)
    }
};
b.position = function() {
    if (this.isVisible() && this.Da.isVisible()) {
        var a = ob(this.Da.dd);
        this.vc = a.height;
        var c = this.jb - this.pb;
        a = a.height - 2 * this.pb;
        var d = this.qh == h.g.W.Pa.Gc,
            e = c + this.pb;
        e = ["M " + (d ? e : 0) + ",0"];
        e.push("h", d ? -c : c);
        e.push("a", this.pb, this.pb, 0, 0, d ? 0 : 1, d ? -this.pb : this.pb, this.pb);
        e.push("v", Math.max(0, a));
        e.push("a", this.pb, this.pb, 0, 0, d ? 0 : 1, d ? this.pb : -this.pb, this.pb);
        e.push("h", d ? c : -c);
        e.push("z");
        this.kc.setAttribute("d", e.join(" "));
        this.isVisible() ? (d = this.Da.dd, c = Dc(d), a = ob(d), d = Cc(d),
            d = this.Da.Pc == this.qh ? this.Da.ob ? this.qh == h.g.W.Pa.Hb ? d.width : a.width - this.jb : this.qh == h.g.W.Pa.Hb ? 0 : a.width : this.qh == h.g.W.Pa.Hb ? 0 : a.width + c.left - this.jb) : d = 0;
        c = this.jb;
        a = this.vc;
        this.O.setAttribute("width", c);
        this.O.setAttribute("height", a);
        Oc(this.m, c, a);
        "svg" == this.O.tagName ? h.g.j.qm(this.O, "translate(" + d + "px,0px)") : this.O.setAttribute("transform", "translate(" + d + ",0)");
        if (c = this.m.Ta) c.jp(d, 0), c.resize(), c.ib && c.ib.setPosition(c.ib.position.x, c.ib.position.y), c.Ua && c.Ua.setPosition(c.Ua.position.x,
            c.Ua.position.y)
    }
};
b.Ey = function() {
    var a = this.m.Ta;
    a.Ua && a.Ua.set(0, !0)
};
b.AF = function(a) {
    var c = h.g.hx(a);
    if (c.y) {
        var d = this.m.dd,
            e = d.ci();
        c = ob(d).top - e.top + c.y;
        d = this.m.Ta;
        d.Ua && d.Ua.set(c, !0);
        h.Z.$a();
        h.C.uo()
    }
    a.preventDefault();
    a.stopPropagation()
};

function Uc(a, c, d) {
    a.m.scale = a.Da.scale;
    for (var e = a.Ih, f = a.I ? e : e + a.jk, g = 0, k; k = c[g]; g++)
        if ("block" == k.type) {
            k = k.block;
            for (var l = v(k, !1), m = 0, n; n = l[m]; m++) n.cd = !0;
            k.Ja();
            n = k.oa();
            l = r(k);
            m = k.S ? f - a.jk : f;
            k.moveBy(m, e);
            var q = a,
                p = k,
                u = g;
            m = h.g.j.J(h.g.D.Mb, {
                "fill-opacity": 0,
                x: a.I ? m - l.width : m,
                y: e,
                height: l.height,
                width: l.width
            }, null);
            m.Ud = p;
            h.G.sj(m);
            q.m.xb.insertBefore(m, p.oa());
            p.Pw = m;
            q.Oo[u] = m;
            q = a;
            q.Nc.push(h.N.Aa(n, "mousedown", null, Wc(q, k)));
            q.Nc.push(h.N.Aa(m, "mousedown", null, Wc(q, k)));
            q.Nc.push(h.N.bind(n,
                "mouseenter", k, k.Hn));
            q.Nc.push(h.N.bind(n, "mouseleave", k, k.nm));
            q.Nc.push(h.N.bind(m, "mouseenter", k, k.Hn));
            q.Nc.push(h.N.bind(m, "mouseleave", k, k.nm));
            e += l.height + d[g]
        } else "button" == k.type && (l = a, m = k.button, n = f, q = e, p = m.Va(), m.moveTo(n, q), m.show(), l.Nc.push(h.N.Aa(p, "mousedown", l, l.bh)), l.Yk.push(m), e += k.button.height + d[g])
}
b.Uw = function() {
    if (!this.O || this.Qh || !this.isVisible()) return null;
    var a = this.O.getBoundingClientRect(),
        c = a.left;
    return this.qh == h.g.W.Pa.Hb ? new h.g.Rect(-1E9, 1E9, -1E9, c + a.width) : new h.g.Rect(-1E9, 1E9, c, 1E9)
};
h.u.register(h.u.R.Rp, h.u.Zi, h.Tk);
h.h.Ck = function(a) {
    this.qd = "undefined" == typeof a;
    this.Yb = a ? a.id : "";
    this.group = h.h.Wb();
    this.Na = !1
};
h.g.object.V(h.h.Ck, h.h.Abstract);
h.h.Ck.prototype.type = h.h.Qp;
h.h.Ck.prototype.qa = function() {
    var a = {
        type: this.type
    };
    this.group && (a.group = this.group);
    this.Yb && (a.workspaceId = this.Yb);
    return a
};
h.h.Ck.prototype.ba = function(a) {
    this.qd = !1;
    this.Yb = a.workspaceId;
    this.group = a.group
};
h.u.register(h.u.R.Gb, h.h.Qp, h.h.Ck);
h.vu = function(a) {
    this.hl = a;
    this.Va()
};
b = h.vu.prototype;
b.fb = null;
b.Ue = null;
b.hl = null;
b.lh = 1;
b.Dm = null;
b.hw = new h.g.T(0, 0);
b.Va = function() {
    this.fb || (this.fb = h.g.j.J(h.g.D.jj, {
        xmlns: h.g.j.An,
        "xmlns:html": h.g.j.Sp,
        "xmlns:xlink": h.g.j.ld,
        version: "1.1",
        "class": "blocklyBlockDragSurface"
    }, this.hl), this.Ue = h.g.j.J(h.g.D.Sc, {}, this.fb))
};

function Ca(a, c) {
    if (a.Ue.childNodes.length) throw Error("Already dragging a block.");
    a.Ue.appendChild(c);
    a.fb.style.display = "block";
    a.Dm = new h.g.T(0, 0)
}
b.Oi = function(a, c) {
    this.Dm = new h.g.T(a * this.lh, c * this.lh);
    a = this.Dm.x;
    c = this.Dm.y;
    a = a.toFixed(0);
    c = c.toFixed(0);
    this.fb.style.display = "block";
    h.g.j.qm(this.fb, "translate3d(" + a + "px, " + c + "px, 0px)")
};
b.fs = function() {
    var a = h.g.pe(this.fb);
    return new h.g.T(a.x / this.lh, a.y / this.lh)
};
b.Wb = function() {
    return this.Ue
};
b.oa = function() {
    return this.fb
};
b.Pn = function(a) {
    a ? a.appendChild(this.Ue.firstChild) : this.Ue.removeChild(this.Ue.firstChild);
    this.fb.style.display = "none";
    if (this.Ue.childNodes.length) throw Error("Drag group was not cleared.");
    this.Dm = null
};
h.Yd = {};
h.Yd.ss = !1;
h.Yd.register = function(a) {
    if (h.Yd.ss) throw Error("CSS already injected");
    Array.prototype.push.apply(h.Yd.Gp, a);
    a.length = 0
};
h.Yd.Rg = function(a, c) {
    if (!h.Yd.ss) {
        h.Yd.ss = !0;
        var d = h.Yd.Gp.join("\n");
        h.Yd.Gp.length = 0;
        a && (a = c.replace(/[\\/]$/, ""), d = d.replace(/<<<PATH>>>/g, a), a = document.createElement("style"), a.id = "blockly-common-style", d = document.createTextNode(d), a.appendChild(d), document.head.insertBefore(a, document.head.firstChild))
    }
};
h.Yd.Gp = [".blocklySvg {", "background-color: #fff;", "outline: none;", "overflow: hidden;", "position: absolute;", "display: block;", "}", ".blocklyWidgetDiv {", "display: none;", "position: absolute;", "z-index: 99999;", "}", ".injectionDiv {", "height: 100%;", "position: relative;", "overflow: hidden;", "touch-action: none;", "}", ".blocklyNonSelectable {", "user-select: none;", "-ms-user-select: none;", "-webkit-user-select: none;", "}", ".blocklyWsDragSurface {", "display: none;", "position: absolute;", "top: 0;", "left: 0;",
    "}", ".blocklyWsDragSurface.blocklyOverflowVisible {", "overflow: visible;", "}", ".blocklyBlockDragSurface {", "display: none;", "position: absolute;", "top: 0;", "left: 0;", "right: 0;", "bottom: 0;", "overflow: visible !important;", "z-index: 50;", "}", ".blocklyBlockCanvas.blocklyCanvasTransitioning,", ".blocklyBubbleCanvas.blocklyCanvasTransitioning {", "transition: transform .5s;", "}", ".blocklyTooltipDiv {", "background-color: #ffffc7;", "border: 1px solid #ddc;", "box-shadow: 4px 4px 20px 1px rgba(0,0,0,.15);",
    "color: #000;", "display: none;", "font: 9pt sans-serif;", "opacity: .9;", "padding: 2px;", "position: absolute;", "z-index: 100000;", "}", ".blocklyDropDownDiv {", "position: absolute;", "left: 0;", "top: 0;", "z-index: 1000;", "display: none;", "border: 1px solid;", "border-color: #dadce0;", "background-color: #fff;", "border-radius: 2px;", "padding: 4px;", "box-shadow: 0 0 3px 1px rgba(0,0,0,.3);", "}", ".blocklyDropDownDiv.blocklyFocused {", "box-shadow: 0 0 6px 1px rgba(0,0,0,.3);", "}", ".blocklyDropDownContent {",
    "max-height: 300px;", "overflow: auto;", "overflow-x: hidden;", "position: relative;", "}", ".blocklyDropDownArrow {", "position: absolute;", "left: 0;", "top: 0;", "width: 16px;", "height: 16px;", "z-index: -1;", "background-color: inherit;", "border-color: inherit;", "}", ".blocklyDropDownButton {", "display: inline-block;", "float: left;", "padding: 0;", "margin: 4px;", "border-radius: 4px;", "outline: none;", "border: 1px solid;", "transition: box-shadow .1s;", "cursor: pointer;", "}", ".blocklyArrowTop {", "border-top: 1px solid;",
    "border-left: 1px solid;", "border-top-left-radius: 4px;", "border-color: inherit;", "}", ".blocklyArrowBottom {", "border-bottom: 1px solid;", "border-right: 1px solid;", "border-bottom-right-radius: 4px;", "border-color: inherit;", "}", ".blocklyResizeSE {", "cursor: se-resize;", "fill: #aaa;", "}", ".blocklyResizeSW {", "cursor: sw-resize;", "fill: #aaa;", "}", ".blocklyResizeLine {", "stroke: #515A5A;", "stroke-width: 1;", "}", ".blocklyHighlightedConnectionPath {", "fill: none;", "stroke: #fc3;", "stroke-width: 4px;",
    "}", ".blocklyPathLight {", "fill: none;", "stroke-linecap: round;", "stroke-width: 1;", "}", ".blocklySelected>.blocklyPathLight {", "display: none;", "}", ".blocklyDraggable {", 'cursor: url("<<<PATH>>>/handopen.cur"), auto;', "cursor: grab;", "cursor: -webkit-grab;", "}", ".blocklyDragging {", 'cursor: url("<<<PATH>>>/handclosed.cur"), auto;', "cursor: grabbing;", "cursor: -webkit-grabbing;", "}", ".blocklyDraggable:active {", 'cursor: url("<<<PATH>>>/handclosed.cur"), auto;', "cursor: grabbing;", "cursor: -webkit-grabbing;",
    "}", ".blocklyBlockDragSurface .blocklyDraggable {", 'cursor: url("<<<PATH>>>/handclosed.cur"), auto;', "cursor: grabbing;", "cursor: -webkit-grabbing;", "}", ".blocklyDragging.blocklyDraggingDelete {", 'cursor: url("<<<PATH>>>/handdelete.cur"), auto;', "}", ".blocklyDragging>.blocklyPath,", ".blocklyDragging>.blocklyPathLight {", "fill-opacity: .8;", "stroke-opacity: .8;", "}", ".blocklyDragging>.blocklyPathDark {", "display: none;", "}", ".blocklyDisabled>.blocklyPath {", "fill-opacity: .5;", "stroke-opacity: .5;",
    "}", ".blocklyDisabled>.blocklyPathLight,", ".blocklyDisabled>.blocklyPathDark {", "display: none;", "}", ".blocklyInsertionMarker>.blocklyPath,", ".blocklyInsertionMarker>.blocklyPathLight,", ".blocklyInsertionMarker>.blocklyPathDark {", "fill-opacity: .2;", "stroke: none;", "}", ".blocklyMultilineText {", "font-family: monospace;", "}", ".blocklyNonEditableText>text {", "pointer-events: none;", "}", ".blocklyFlyout {", "position: absolute;", "z-index: 20;", "}", ".blocklyText text {", "cursor: default;", "}", ".blocklySvg text,",
    ".blocklyBlockDragSurface text {", "user-select: none;", "-ms-user-select: none;", "-webkit-user-select: none;", "cursor: inherit;", "}", ".blocklyHidden {", "display: none;", "}", ".blocklyFieldDropdown:not(.blocklyHidden) {", "display: block;", "}", ".blocklyIconGroup {", "cursor: default;", "}", ".blocklyIconGroup:not(:hover),", ".blocklyIconGroupReadonly {", "opacity: .6;", "}", ".blocklyIconShape {", "fill: #00f;", "stroke: #fff;", "stroke-width: 1px;", "}", ".blocklyIconSymbol {", "fill: #fff;", "}", ".blocklyMinimalBody {",
    "margin: 0;", "padding: 0;", "}", ".blocklyHtmlInput {", "border: none;", "border-radius: 4px;", "height: 100%;", "margin: 0;", "outline: none;", "padding: 0;", "width: 100%;", "text-align: center;", "display: block;", "box-sizing: border-box;", "}", ".blocklyHtmlInput::-ms-clear {", "display: none;", "}", ".blocklyMainBackground {", "stroke-width: 1;", "stroke: #c6c6c6;", "}", ".blocklyMutatorBackground {", "fill: #fff;", "stroke: #ddd;", "stroke-width: 1;", "}", ".blocklyFlyoutBackground {", "fill: #ddd;", "fill-opacity: .8;",
    "}", ".blocklyMainWorkspaceScrollbar {", "z-index: 20;", "}", ".blocklyFlyoutScrollbar {", "z-index: 30;", "}", ".blocklyScrollbarHorizontal,", ".blocklyScrollbarVertical {", "position: absolute;", "outline: none;", "}", ".blocklyScrollbarBackground {", "opacity: 0;", "}", ".blocklyScrollbarHandle {", "fill: #ccc;", "}", ".blocklyScrollbarBackground:hover+.blocklyScrollbarHandle,", ".blocklyScrollbarHandle:hover {", "fill: #bbb;", "}", ".blocklyFlyout .blocklyScrollbarHandle {", "fill: #bbb;", "}", ".blocklyFlyout .blocklyScrollbarBackground:hover+.blocklyScrollbarHandle,",
    ".blocklyFlyout .blocklyScrollbarHandle:hover {", "fill: #aaa;", "}", ".blocklyInvalidInput {", "background: #faa;", "}", ".blocklyVerticalMarker {", "stroke-width: 3px;", "fill: rgba(255,255,255,.5);", "pointer-events: none;", "}", ".blocklyComputeCanvas {", "position: absolute;", "width: 0;", "height: 0;", "}", ".blocklyNoPointerEvents {", "pointer-events: none;", "}", ".blocklyContextMenu {", "border-radius: 4px;", "max-height: 100%;", "}", ".blocklyDropdownMenu {", "border-radius: 2px;", "padding: 0 !important;", "}",
    ".blocklyDropdownMenu .blocklyMenuItem {", "padding-left: 28px;", "}", ".blocklyDropdownMenu .blocklyMenuItemRtl {", "padding-left: 5px;", "padding-right: 28px;", "}", ".blocklyWidgetDiv .blocklyMenu {", "background: #fff;", "border: 1px solid transparent;", "box-shadow: 0 0 3px 1px rgba(0,0,0,.3);", "font: normal 13px Arial, sans-serif;", "margin: 0;", "outline: none;", "padding: 4px 0;", "position: absolute;", "overflow-y: auto;", "overflow-x: hidden;", "max-height: 100%;", "z-index: 20000;", "}", ".blocklyWidgetDiv .blocklyMenu.blocklyFocused {",
    "box-shadow: 0 0 6px 1px rgba(0,0,0,.3);", "}", ".blocklyDropDownDiv .blocklyMenu {", "background: inherit;", "border: inherit;", 'font: normal 13px "Helvetica Neue", Helvetica, sans-serif;', "outline: none;", "position: relative;", "z-index: 20000;", "}", ".blocklyMenuItem {", "border: none;", "color: #000;", "cursor: pointer;", "list-style: none;", "margin: 0;", "min-width: 7em;", "padding: 6px 15px;", "white-space: nowrap;", "}", ".blocklyMenuItemDisabled {", "color: #ccc;", "cursor: inherit;", "}", ".blocklyMenuItemHighlight {",
    "background-color: rgba(0,0,0,.1);", "}", ".blocklyMenuItemCheckbox {", "height: 16px;", "position: absolute;", "width: 16px;", "}", ".blocklyMenuItemSelected .blocklyMenuItemCheckbox {", "background: url(<<<PATH>>>/sprites.png) no-repeat -48px -16px;", "float: left;", "margin-left: -24px;", "position: static;", "}", ".blocklyMenuItemRtl .blocklyMenuItemCheckbox {", "float: right;", "margin-right: -24px;", "}"
];
h.Rg = function(a, c) {
    h.$B();
    "string" == typeof a && (a = document.getElementById(a) || document.querySelector(a));
    if (!a || !h.g.j.containsNode(document, a)) throw Error("Error: container is not in current document.");
    c = new h.jd(c || {});
    var d = document.createElement("div");
    d.className = "injectionDiv";
    d.tabIndex = 0;
    h.g.Ab.lp(d, h.g.Ab.State.AA, h.M.WORKSPACE_ARIA_LABEL);
    a.appendChild(d);
    a = h.jl(d, c);
    var e = new h.vu(d),
        f = new h.Sv(d),
        g = h.rC(a, c, e, f);
    h.DD(g);
    h.Vl = g;
    h.Fm(g);
    d.addEventListener("focusin", function() {
        h.Vl = g
    });
    return g
};
h.jl = function(a, c) {
    a.setAttribute("dir", "LTR");
    h.Yd.Rg(c.vD, c.fp);
    a = h.g.j.J(h.g.D.jj, {
        xmlns: h.g.j.An,
        "xmlns:html": h.g.j.Sp,
        "xmlns:xlink": h.g.j.ld,
        version: "1.1",
        "class": "blocklySvg",
        tabindex: "0"
    }, a);
    var d = h.g.j.J(h.g.D.Eu, {}, a);
    c.js = h.Hh.Va(String(Math.random()).substring(2), c.nx, d);
    return a
};
h.rC = function(a, c, d, e) {
    c.ed = null;
    c = new h.dc(c, d, e);
    d = c.options;
    c.scale = d.zb.jF;
    a.appendChild(c.Va("blocklyMainBackground"));
    h.g.j.Nb(ca(c), c.mb.me());
    h.g.j.Nb(ca(c), c.Qf().me());
    if (!d.Jl && d.si) {
        e = h.g.D.jj;
        var f = new h.jd({
            parentWorkspace: c,
            rtl: c.I,
            oneBasedIndex: c.options.$o,
            horizontalLayout: c.Jd,
            renderer: c.options.Ct,
            rendererOverrides: c.options.Dt,
            move: {
                scrollbars: !0
            }
        });
        f.Pc = c.options.Pc;
        c.ya = c.Jd ? new(h.u.Of(h.u.R.Mu, c.options, !0))(f) : new(h.u.Of(h.u.R.Rp, c.options, !0))(f);
        c.ya.Qh = !1;
        c.ya.m.Jb(!0);
        e = c.ya.Va(e);
        h.g.j.Qj(e, a)
    }
    if (d.sx) {
        if (!h.Vb) throw Error("Missing require for Blockly.Trashcan");
        c.kk = new h.Vb(c);
        e = c.kk.Va();
        c.O.insertBefore(e, c.xb)
    }
    if (d.zb && d.zb.controls) {
        if (!h.CB) throw Error("Missing require for Blockly.ZoomControls");
        c.Qm = new h.CB(c);
        d = c.Qm.Va();
        c.O.appendChild(d)
    }
    c.mc.subscribe(a, "workspaceBackgroundColour", "background-color");
    c.translate(0, 0);
    D(c, h.UB(c));
    h.Fm(c);
    h.Z.Va();
    h.C.Va();
    h.G.Va();
    return c
};
h.MC = function(a, c) {
    var d = null;
    switch (c.type) {
        case h.h.xh:
        case h.h.yh:
            (d = a.Lc(c.gb)) && (d = d.qe());
            break;
        case h.h.an:
        case h.h.vk:
            d = a.Tn[c.Oe] || null
    }
    return d
};
h.cw = function(a) {
    var c = a.dd;
    if (!(rb(c.m) && sb(c.m) || a.bd())) {
        c = c.ci(!0);
        for (var d = [].concat(a.Hm), e = 0, f; f = d[e]; e++) h.Sq(a, c, f)
    }
};
h.UB = function(a) {
    return function(c) {
        var d = a.dd;
        if (!(rb(d.m) && sb(d.m) || a.bd()))
            if (-1 !== h.h.uz.indexOf(c.type)) {
                d = d.ci(!0);
                var e = h.MC(a, c);
                if (e) {
                    var f = h.h.Wb();
                    h.h.ta(c.group);
                    h.Sq(a, d, e) && !c.group && console.warn("Moved object in bounds but there was no event group. This may break undo.");
                    null !== f && h.h.ta(f)
                }
            } else c.type === h.h.Sk && c.scale > c.dm && h.cw(a)
    }
};
h.Sq = function(a, c, d) {
    var e = d.Bl(),
        f = h.g.Ld.al(c.top, e.top, c.top + c.height - (e.bottom - e.top)) - e.top,
        g = c.left;
    c = c.left + c.width - (e.right - e.left);
    a.I ? g = Math.min(c, g) : c = Math.max(g, c);
    return (a = h.g.Ld.al(g, e.left, c) - e.left) || f ? (d.moveBy(a, f), !0) : !1
};
h.DD = function(a) {
    var c = a.options,
        d = t(a);
    h.N.Aa(d.parentNode, "contextmenu", null, function(f) {
        h.g.Fo(f) || f.preventDefault()
    });
    d = h.N.Aa(window, "resize", null, function() {
        h.ic(!0);
        h.Fm(a);
        h.cw(a)
    });
    a.ip = d;
    h.Rg.OB();
    if (c.si) {
        d = a.ob;
        var e = Bc(a, !0);
        d ? d.Ba() : e && (e.Ba(a), e.show(c.si), "function" == typeof e.Ey && e.Ey())
    }
    c.sx && a.kk.Ba();
    c.zb && c.zb.controls && a.Qm.Ba();
    c.yc && c.yc.scrollbars ? (a.Ta = new h.uq(a, !0 === c.yc.scrollbars || !!c.yc.scrollbars.Nl, !0 === c.yc.scrollbars || !!c.yc.scrollbars.vertical, "blocklyMainWorkspaceScrollbar"),
        a.Ta.resize()) : a.rm({
        x: .5,
        y: .5
    });
    c.xD && h.Rg.PD(c.fp, a)
};
h.Rg.OB = function() {
    h.DC || (h.N.Aa(document, "scroll", null, function() {
        for (var a = h.qb.getAll(), c = 0, d; d = a[c]; c++) d.Mm && d.Mm()
    }), h.N.Aa(document, "keydown", null, h.bt), h.N.bind(document, "touchend", null, h.Yg), h.N.bind(document, "touchcancel", null, h.Yg), h.g.userAgent.Fk && h.N.Aa(window, "orientationchange", document, function() {
        h.Fm(h.Lg())
    }));
    h.DC = !0
};
h.Rg.PD = function(a, c) {
    function d() {
        for (; f.length;) h.N.yb(f.pop());
        e.preload()
    }
    var e = c.Yc;
    e.load([a + "click.mp3", a + "click.wav", a + "click.ogg"], "click");
    e.load([a + "disconnect.wav", a + "disconnect.mp3", a + "disconnect.ogg"], "disconnect");
    e.load([a + "delete.mp3", a + "delete.ogg", a + "delete.wav"], "delete");
    var f = [];
    f.push(h.N.Aa(document, "mousemove", null, d, !0));
    f.push(h.N.Aa(document, "touchstart", null, d, !0))
};
h.Ad = function(a, c) {
    this.$y = c || "";
    this.By = Object.create(null);
    if (a)
        for (a = a.split(","), c = 0; c < a.length; c++) this.By[a[c]] = !0;
    this.reset()
};
h.Ad.Kp = "DEVELOPER_VARIABLE";
h.Ad.prototype.reset = function() {
    this.Se = Object.create(null);
    this.Aw = Object.create(null);
    this.Oa = null
};
h.Ad.prototype.Pt = function(a) {
    this.Oa = a
};

function Xc(a, c, d) {
    var e = c;
    d == h.Ph && (a.Oa ? c = (c = a.Oa.Ng(c)) ? c.name : null : (console.warn("Deprecated call to Blockly.Names.prototype.getName without defining a variable map. To fix, add the following code in your generator's init() function:\nBlockly.YourGeneratorName.nameDB_.setVariableMap(workspace.getVariableMap());"), c = null), c && (e = c));
    c = e.toLowerCase();
    var f = d == h.Ph || d == h.Ad.Kp ? a.$y : "";
    d in a.Se || (a.Se[d] = Object.create(null));
    var g = a.Se[d];
    if (c in g) return f + g[c];
    e ? (e = encodeURI(e.replace(/ /g, "_")).replace(/[^\w]/g,
        "_"), -1 != "0123456789".indexOf(e[0]) && (e = "my_" + e)) : e = h.M.UNNAMED_KEY || "unnamed";
    for (var k = ""; a.Aw[e + k] || e + k in a.By;) k = k ? k + 1 : 2;
    e += k;
    a.Aw[e] = !0;
    a = (d == h.Ph || d == h.Ad.Kp ? a.$y : "") + e;
    g[c] = a.substr(f.length);
    return a
}
h.Ad.Nf = function(a, c) {
    return a.toLowerCase() == c.toLowerCase()
};
h.Sa = {};
h.Sa.NA = h.jq;
h.Sa.Gz = "x";
h.Sa.Zv = function(a) {
    var c = eb(a, "procedures_defnoreturn").map(function(d) {
        return d.Jj()
    });
    a = eb(a, "procedures_defreturn").map(function(d) {
        return d.Jj()
    });
    c.sort(h.Sa.xy);
    a.sort(h.Sa.xy);
    return [c, a]
};
h.Sa.xy = function(a, c) {
    return a[0].localeCompare(c[0], void 0, {
        sensitivity: "base"
    })
};
h.Sa.OC = function(a, c) {
    if (c.cd) return a;
    for (a = a || h.M.UNNAMED_KEY || "unnamed"; !h.Sa.ID(a, c.B, c);) {
        var d = a.match(/^(.*?)(\d+)$/);
        a = d ? d[1] + (parseInt(d[2], 10) + 1) : a + "2"
    }
    return a
};
h.Sa.ID = function(a, c, d) {
    return !h.Sa.KD(a, c, d)
};
h.Sa.KD = function(a, c, d) {
    c = C(c, !1);
    for (var e = 0; e < c.length; e++)
        if (c[e] != d && c[e].Jj) {
            var f = c[e].Jj();
            if (h.Ad.Nf(f[0], a)) return !0
        } return !1
};
h.Sa.lK = function(a) {
    a = a.trim();
    var c = h.Sa.OC(a, this.$()),
        d = this.getValue();
    if (d != a && d != c) {
        a = C(this.$().B, !1);
        for (var e = 0; e < a.length; e++) a[e].QE && a[e].QE(d, c)
    }
    return c
};
h.Sa.Zh = function(a) {
    function c(g, k) {
        for (var l = 0; l < g.length; l++) {
            var m = g[l][0],
                n = g[l][1],
                q = h.g.xml.createElement("block");
            q.setAttribute("type", k);
            q.setAttribute("gap", 16);
            var p = h.g.xml.createElement("mutation");
            p.setAttribute("name", m);
            q.appendChild(p);
            for (m = 0; m < n.length; m++) {
                var u = h.g.xml.createElement("arg");
                u.setAttribute("name", n[m]);
                p.appendChild(u)
            }
            d.push(q)
        }
    }
    var d = [];
    if (h.nc.procedures_defnoreturn) {
        var e = h.g.xml.createElement("block");
        e.setAttribute("type", "procedures_defnoreturn");
        e.setAttribute("gap",
            16);
        var f = h.g.xml.createElement("field");
        f.setAttribute("name", "NAME");
        f.appendChild(h.g.xml.createTextNode(h.M.PROCEDURES_DEFNORETURN_PROCEDURE));
        e.appendChild(f);
        d.push(e)
    }
    h.nc.procedures_defreturn && (e = h.g.xml.createElement("block"), e.setAttribute("type", "procedures_defreturn"), e.setAttribute("gap", 16), f = h.g.xml.createElement("field"), f.setAttribute("name", "NAME"), f.appendChild(h.g.xml.createTextNode(h.M.PROCEDURES_DEFRETURN_PROCEDURE)), e.appendChild(f), d.push(e));
    h.nc.procedures_ifreturn && (e = h.g.xml.createElement("block"),
        e.setAttribute("type", "procedures_ifreturn"), e.setAttribute("gap", 16), d.push(e));
    d.length && d[d.length - 1].setAttribute("gap", 24);
    a = h.Sa.Zv(a);
    c(a[0], "procedures_callnoreturn");
    c(a[1], "procedures_callreturn");
    return d
};
h.Sa.Vy = function(a) {
    for (var c = [], d = eb(a, "procedures_mutatorarg"), e = 0, f; f = d[e]; e++) c.push(cb(f, "NAME"));
    d = h.g.xml.createElement("xml");
    e = h.g.xml.createElement("block");
    e.setAttribute("type", "procedures_mutatorarg");
    f = h.g.xml.createElement("field");
    f.setAttribute("name", "NAME");
    c = h.g.xml.createTextNode(h.ma.Rw(h.Sa.Gz, c));
    f.appendChild(c);
    e.appendChild(f);
    d.appendChild(e);
    if (c = h.g.W.ww(d)) {
        if (!a.options.si) throw Error("Existing toolbox is null.  Can't create new toolbox.");
        if (h.g.W.Jl(c)) {
            if (!a.ob) throw Error("Existing toolbox has no categories.  Can't change mode.");
            a.options.si = c;
            a.ob.Ja(c)
        } else {
            if (!a.ya) throw Error("Existing toolbox has categories.  Can't change mode.");
            a.options.si = c;
            a.ya.show(c)
        }
    } else if (a.options.si) throw Error("Can't nullify an existing toolbox.");
};
h.Sa.$D = function(a) {
    if (a.type == h.h.uu && "mutator" === a.nJ && a.ws) {
        a = h.qb.Cl(a.Yb).Lc(a.gb);
        var c = a.type;
        if ("procedures_defnoreturn" == c || "procedures_defreturn" == c) a = a.te.m, h.Sa.Vy(a), D(a, h.Sa.ZD)
    }
};
h.Sa.ZD = function(a) {
    a.type != h.h.xh && a.type != h.h.Ap && a.type != h.h.wh || h.Sa.Vy(h.qb.Cl(a.Yb))
};
h.Sa.XC = function(a, c) {
    var d = [];
    c = C(c, !1);
    for (var e = 0; e < c.length; e++)
        if (c[e].iD) {
            var f = c[e].iD();
            f && h.Ad.Nf(f, a) && d.push(c[e])
        } return d
};
h.Sa.dK = function(a) {
    var c = h.h.Na,
        d = a.Jj()[0],
        e = a.Nd(!0);
    a = h.Sa.XC(d, a.B);
    d = 0;
    for (var f; f = a[d]; d++) {
        var g = f.Nd();
        g = g && h.K.Gd(g);
        f.Lf(e);
        var k = f.Nd();
        k = k && h.K.Gd(k);
        g != k && (h.h.Na = !1, h.h.Ga(new(h.h.get(h.h.wh))(f, "mutation", null, g, k)), h.h.Na = c)
    }
};
h.Sa.KJ = function(a, c) {
    c = C(c, !1);
    for (var d = 0; d < c.length; d++)
        if (c[d].Jj) {
            var e = c[d].Jj();
            if (e && h.Ad.Nf(e[0], a)) return c[d]
        } return null
};
h.Ub = function() {
    h.Ub.u = this;
    this.Rd = Object.create(null);
    this.Xj = Object.create(null)
};
h.Ub.Ro = {
    Shift: h.g.ka.xn,
    Control: h.g.ka.Ch,
    Alt: h.g.ka.Ui,
    Meta: h.g.ka.cj
};
h.Ub.prototype.register = function(a, c) {
    if (this.Rd[a.name] && !c) throw Error('Shortcut with name "' + a.name + '" already exists.');
    this.Rd[a.name] = a
};
h.Ub.prototype.unregister = function(a) {
    if (!this.Rd[a]) return console.warn('Keyboard shortcut with name "' + a + '" not found.'), !1;
    for (var c in this.Xj) {
        var d = c,
            e = this.Xj[d],
            f = e.indexOf(a); - 1 < f && (e.splice(f, 1), 0 == e.length && delete this.Xj[d])
    }
    delete this.Rd[a];
    return !0
};

function G(a, c) {
    var d = h.Ub.u;
    a = String(a);
    var e = d.Xj[a];
    if (e) throw Error('Shortcut with name "' + c + '" collides with shortcuts ' + e.toString());
    d.Xj[a] = [c]
}
h.Ub.prototype.bt = function(a, c) {
    var d = "";
    for (e in h.Ub.Ro) c.getModifierState(e) && ("" != d && (d += "+"), d += e);
    "" != d && c.keyCode ? d = d + "+" + c.keyCode : c.keyCode && (d = c.keyCode.toString());
    d = this.Xj[d] || [];
    if (!d) return !1;
    var e = 0;
    for (var f; f = d[e]; e++)
        if (f = this.Rd[f], (!f.Db || f.Db(a)) && f.hb && f.hb(a, c, f)) return !0;
    return !1
};

function J(a, c) {
    var d = "";
    if (c) {
        for (var e = h.g.object.values(h.Ub.Ro), f = 0, g; g = c[f]; f++)
            if (0 > e.indexOf(g)) throw Error(g + " is not a valid modifier key.");
        for (var k in h.Ub.Ro) - 1 < c.indexOf(h.Ub.Ro[k]) && ("" != d && (d += "+"), d += k)
    }
    "" != d && a ? d = d + "+" + a : a && (d = a.toString());
    return d
}
new h.Ub;
h.Fn = function(a, c, d, e) {
    this.B = a;
    this.name = c;
    this.type = d || "";
    this.AD = e || h.g.Xe();
    h.h.Ga(new(h.h.get(h.h.Rk))(this))
};
h.Fn.prototype.hc = function() {
    return this.AD
};
h.Fn.iC = function(a, c) {
    return a.name.localeCompare(c.name, void 0, {
        sensitivity: "base"
    })
};
h.ma = {};
h.ma.NA = h.Ph;
h.ma.Gq = function(a) {
    var c = C(a, !1);
    a = Object.create(null);
    for (var d = 0; d < c.length; d++) {
        var e = ka(c[d]);
        if (e)
            for (var f = 0; f < e.length; f++) {
                var g = e[f],
                    k = g.hc();
                k && (a[k] = g)
            }
    }
    c = [];
    for (k in a) c.push(a[k]);
    return c
};
h.ma.lu = {};
h.ma.EB = function(a) {
    a = C(a, !1);
    for (var c = Object.create(null), d = 0, e; e = a[d]; d++) {
        var f = e.LJ;
        !f && e.dD && (f = e.dD, h.ma.lu[e.type] || (console.warn("Function getDeveloperVars() deprecated. Use getDeveloperVariables() (block type '" + e.type + "')"), h.ma.lu[e.type] = !0));
        if (f)
            for (e = f(), f = 0; f < e.length; f++) c[e[f]] = !0
    }
    return Object.keys(c)
};
h.ma.Zh = function(a) {
    var c = [],
        d = document.createElement("button");
    d.setAttribute("text", "%{BKY_NEW_VARIABLE}");
    d.setAttribute("callbackKey", "CREATE_VARIABLE");
    Qc(a, function(e) {
        h.ma.yw(e.PJ())
    });
    c.push(d);
    a = h.ma.RC(a);
    return c = c.concat(a)
};
h.ma.RC = function(a) {
    a = a.so("");
    var c = [];
    if (0 < a.length) {
        var d = a[a.length - 1];
        if (h.nc.variables_set) {
            var e = h.g.xml.createElement("block");
            e.setAttribute("type", "variables_set");
            e.setAttribute("gap", h.nc.math_change ? 8 : 24);
            e.appendChild(h.ma.Rr(d));
            c.push(e)
        }
        h.nc.math_change && (e = h.g.xml.createElement("block"), e.setAttribute("type", "math_change"), e.setAttribute("gap", h.nc.variables_get ? 20 : 8), e.appendChild(h.ma.Rr(d)), d = h.K.ye('<value name="DELTA"><shadow type="math_number"><field name="NUM">1</field></shadow></value>'),
            e.appendChild(d), c.push(e));
        if (h.nc.variables_get) {
            a.sort(h.Fn.iC);
            d = 0;
            for (var f; f = a[d]; d++) e = h.g.xml.createElement("block"), e.setAttribute("type", "variables_get"), e.setAttribute("gap", 8), e.appendChild(h.ma.Rr(f)), c.push(e)
        }
    }
    return c
};
h.ma.Lv = "ijkmnopqrstuvwxyzabcdefgh";
h.ma.UC = function(a) {
    return h.ma.Rw(h.ma.Lv.charAt(0), a.Sr())
};
h.ma.Rw = function(a, c) {
    if (!c.length) return a;
    for (var d = h.ma.Lv, e = "", f = d.indexOf(a);;) {
        for (var g = !1, k = 0; k < c.length; k++)
            if (c[k].toLowerCase() == a) {
                g = !0;
                break
            } if (!g) return a;
        f++;
        f == d.length && (f = 0, e = Number(e) + 1);
        a = d.charAt(f) + e
    }
};
h.ma.yw = function(a, c, d) {
    function e(g) {
        h.ma.yy(h.M.NEW_VARIABLE_TITLE, g, function(k) {
            if (k) {
                var l = h.ma.bE(k, a);
                if (l) {
                    if (l.type == f) var m = h.M.VARIABLE_ALREADY_EXISTS.replace("%1", l.name);
                    else m = h.M.VARIABLE_ALREADY_EXISTS_FOR_ANOTHER_TYPE, m = m.replace("%1", l.name).replace("%2", l.type);
                    h.alert(m, function() {
                        e(k)
                    })
                } else a.je(k, f), c && c(k)
            } else c && c(null)
        })
    }
    var f = d || "";
    e("")
};
h.ma.je = h.ma.yw;
h.ma.zy = function(a, c) {
    function d(e) {
        var f = h.M.RENAME_VARIABLE_TITLE.replace("%1", c.name);
        h.ma.yy(f, e, function(g) {
            if (g) {
                var k = h.ma.cE(g, c.type, a);
                k ? (k = h.M.VARIABLE_ALREADY_EXISTS_FOR_ANOTHER_TYPE.replace("%1", k.name).replace("%2", k.type), h.alert(k, function() {
                    d(g)
                })) : a.Fi(c.hc(), g)
            }
        })
    }
    d("")
};
h.ma.yy = function(a, c, d) {
    h.prompt(a, c, function(e) {
        e && (e = e.replace(/[\s\xa0]+/g, " ").trim(), e == h.M.RENAME_VARIABLE || e == h.M.NEW_VARIABLE) && (e = null);
        d(e)
    })
};
h.ma.cE = function(a, c, d) {
    d = d.Oa.$h();
    a = a.toLowerCase();
    for (var e = 0, f; f = d[e]; e++)
        if (f.name.toLowerCase() == a && f.type != c) return f;
    return null
};
h.ma.bE = function(a, c) {
    c = c.Oa.$h();
    a = a.toLowerCase();
    for (var d = 0, e; e = c[d]; d++)
        if (e.name.toLowerCase() == a) return e;
    return null
};
h.ma.Rr = function(a) {
    var c = h.g.xml.createElement("field");
    c.setAttribute("name", "VAR");
    c.setAttribute("id", a.hc());
    c.setAttribute("variabletype", a.type);
    a = h.g.xml.createTextNode(a.name);
    c.appendChild(a);
    return c
};
h.ma.NJ = function(a, c, d, e) {
    var f = h.ma.Mg(a, c, d, e);
    f || (f = h.ma.sC(a, c, d, e));
    return f
};
h.ma.Mg = function(a, c, d, e) {
    var f = a.$j,
        g = null;
    if (c && (g = a.Ng(c), !g && f && (g = f.Ng(c)), g)) return g;
    if (d) {
        if (void 0 == e) throw Error("Tried to look up a variable by name without a type");
        g = a.Mg(d, e);
        !g && f && (g = f.Mg(d, e))
    }
    return g
};
h.ma.sC = function(a, c, d, e) {
    var f = a.$j;
    d || (d = h.ma.UC(a.Sf ? a.Da : a));
    return f ? f.je(d, e, c) : a.je(d, e, c)
};
h.ma.Sw = function(a, c) {
    a = a.$h();
    var d = [];
    if (c.length != a.length)
        for (var e = 0; e < a.length; e++) {
            var f = a[e]; - 1 == c.indexOf(f) && d.push(f)
        }
    return d
};
h.VERSION = "uncompiled";
h.Vl = null;
h.selected = null;
h.Gj = [];
h.wj = null;
h.Rn = null;
h.cr = null;
h.qJ = null;
h.ap = null;
h.BK = function(a) {
    h.g.Dj.warn("Blockly.svgSize", "March 2021", "March 2022", "workspace.getCachedParentSvgSize");
    return new h.g.Uc(a.XB, a.WB)
};
h.nK = function(a) {
    ia(a)
};
h.Fm = function(a) {
    for (; a.options.ed;) a = a.options.ed;
    var c = t(a),
        d = Ec(a),
        e = c.parentNode;
    if (e) {
        var f = e.offsetWidth;
        e = e.offsetHeight;
        d.width != f && (c.setAttribute("width", f + "px"), Oc(a, f, null));
        d.height != e && (c.setAttribute("height", e + "px"), Oc(a, null, e));
        a.resize()
    }
};
h.bt = function(a) {
    var c = h.Vl;
    !c || h.g.Fo(a) || c.ua && !c.isVisible() || h.Ub.u.bt(c, a)
};
h.nr = function(a) {
    a.B.Sf || (h.h.ta(!0), h.ic(), a.S ? a.H(!1, !0) : a.H(!0, !0), h.h.ta(!1))
};
h.hr = function(a) {
    if (a.Uj) a = null;
    else {
        var c = h.K.Df(a, !0);
        h.K.yC(c);
        var d = a.Za();
        c.setAttribute("x", a.I ? -d.x : d.x);
        c.setAttribute("y", d.y);
        a = {
            xml: c,
            source: a.B,
            vF: h.g.Tr(a, !0)
        }
    }
    a && (h.wj = a.xml, h.Rn = a.source, h.cr = a.vF)
};
h.cp = function() {
    if (!h.wj) return !1;
    var a = h.Rn;
    a.Sf && (a = a.Da);
    return h.cr && gb(a, h.cr) ? (h.h.ta(!0), a.cp(h.wj), h.h.ta(!1), !0) : !1
};
h.duplicate = function(a) {
    var c = h.wj,
        d = h.Rn;
    h.hr(a);
    a.B.cp(h.wj);
    h.wj = c;
    h.Rn = d
};
h.eK = function(a) {
    h.g.Fo(a) || a.preventDefault()
};
h.ic = function(a) {
    h.G.$a();
    h.Z.$a();
    h.C.uo();
    var c = !!a;
    sa(h.Lg().Hf, h.Fb.Tb.pu).forEach(function(d) {
        !c && d.We && d.We.isVisible() && (d.We.$a(), yc(d, !1))
    })
};
h.Lg = function() {
    return h.Vl
};
h.alert = function(a, c) {
    alert(a);
    c && c()
};
h.confirm = function(a, c) {
    c(confirm(a))
};
h.prompt = function(a, c, d) {
    d(prompt(a, c))
};
h.ND = function(a) {
    return function() {
        cc(this, a)
    }
};
h.CJ = function(a) {
    for (var c = 0; c < a.length; c++) {
        var d = a[c];
        if (d) {
            var e = d.type;
            null == e || "" === e ? console.warn("Block definition #" + c + " in JSON array is missing a type attribute. Skipping.") : (h.nc[e] && console.warn("Block definition #" + c + ' in JSON array overwrites prior definition of "' + e + '".'), h.nc[e] = {
                Ba: h.ND(d)
            })
        } else console.warn("Block definition #" + c + " in JSON array is " + d + ". Skipping.")
    }
};
h.LD = function(a) {
    return /^\s*-?\d+(\.\d+)?\s*$/.test(a)
};
h.SJ = function(a) {
    return h.g.sb.zx(a)
};
h.$B = function() {
    h.qc("LOGIC_HUE", ["Blocks", "logic", "HUE"], void 0);
    h.qc("LOGIC_HUE", ["Constants", "Logic", "HUE"], 210);
    h.qc("LOOPS_HUE", ["Blocks", "loops", "HUE"], void 0);
    h.qc("LOOPS_HUE", ["Constants", "Loops", "HUE"], 120);
    h.qc("MATH_HUE", ["Blocks", "math", "HUE"], void 0);
    h.qc("MATH_HUE", ["Constants", "Math", "HUE"], 230);
    h.qc("TEXTS_HUE", ["Blocks", "texts", "HUE"], void 0);
    h.qc("TEXTS_HUE", ["Constants", "Text", "HUE"], 160);
    h.qc("LISTS_HUE", ["Blocks", "lists", "HUE"], void 0);
    h.qc("LISTS_HUE", ["Constants", "Lists", "HUE"],
        260);
    h.qc("COLOUR_HUE", ["Blocks", "colour", "HUE"], void 0);
    h.qc("COLOUR_HUE", ["Constants", "Colour", "HUE"], 20);
    h.qc("VARIABLES_HUE", ["Blocks", "variables", "HUE"], void 0);
    h.qc("VARIABLES_HUE", ["Constants", "Variables", "HUE"], 330);
    h.qc("VARIABLES_DYNAMIC_HUE", ["Constants", "VariablesDynamic", "HUE"], 310);
    h.qc("PROCEDURES_HUE", ["Blocks", "procedures", "HUE"], void 0)
};
h.qc = function(a, c, d) {
    for (var e = "Blockly", f = h, g = 0; g < c.length; ++g) e += "." + c[g], f && (f = f[c[g]]);
    f && f !== d && (a = (void 0 === d ? '%1 has been removed. Use Blockly.Msg["%2"].' : '%1 is deprecated and unused. Override Blockly.Msg["%2"].').replace("%1", e).replace("%2", a), console.warn(a))
};
h.vK = function(a) {
    h.ap = a
};
h.Rh = h.N.bind;
h.tp = h.N.yb;
h.mJ = h.N.Aa;
h.FF = h.kb.Xd.Hb;
h.EF = h.kb.Xd.Ym;
h.GF = h.kb.Xd.Gc;
h.Zb = h.X.Zb;
h.Tc = h.X.Tc;
h.$b = h.X.$b;
h.kd = h.X.kd;
h.fG = h.Ha.Fe;
h.WI = h.g.W.Pa.ce;
h.TI = h.g.W.Pa.eg;
h.UI = h.g.W.Pa.Hb;
h.VI = h.g.W.Pa.Gc;
var Yc = {
        ar: "\u0627\u0644\u0639\u0631\u0628\u064a\u0629",
        be: "\u0431\u0435\u043b\u0430\u0440\u0443\u0441\u043a\u0456",
        "be-tarask": "Tara\u0161kievica",
        bg: "\u0431\u044a\u043b\u0433\u0430\u0440\u0441\u043a\u0438 \u0435\u0437\u0438\u043a",
        bn: "\u09ac\u09be\u0982\u09b2\u09be",
        br: "Brezhoneg",
        cs: "\u010cesky",
        da: "Dansk",
        de: "Deutsch",
        el: "\u0395\u03bb\u03bb\u03b7\u03bd\u03b9\u03ba\u03ac",
        en: "English",
        eo: "Esperanto",
        es: "Espa\u00f1ol",
        eu: "Euskara",
        fa: "\u0641\u0627\u0631\u0633\u06cc",
        fi: "Suomi",
        fo: "F\u00f8royskt",
        fr: "Fran\u00e7ais",
        gl: "Galego",
        ha: "Hausa",
        he: "\u05e2\u05d1\u05e8\u05d9\u05ea",
        hi: "\u0939\u093f\u0928\u094d\u0926\u0940",
        hu: "Magyar",
        hy: "\u0570\u0561\u0575\u0565\u0580\u0567\u0576",
        ia: "Interlingua",
        id: "Bahasa Indonesia",
        ig: "As\u1ee5s\u1ee5 Igbo",
        is: "\u00cdslenska",
        it: "Italiano",
        ja: "\u65e5\u672c\u8a9e",
        kab: "Taqbaylit",
        ko: "\ud55c\uad6d\uc5b4",
        lt: "Lietuvi\u0173",
        lv: "Latvie\u0161u",
        ms: "Bahasa Melayu",
        my: "\u1019\u103c\u1014\u103a\u1019\u102c\u1005\u102c",
        nb: "Norsk Bokm\u00e5l",
        nl: "Nederlands, Vlaams",
        pl: "Polski",
        pms: "Piemont\u00e8is",
        pt: "Portugu\u00eas",
        "pt-br": "Portugu\u00eas Brasileiro",
        ro: "Rom\u00e2n\u0103",
        ru: "\u0420\u0443\u0441\u0441\u043a\u0438\u0439",
        sc: "Sardu",
        sk: "Sloven\u010dina",
        sl: "Sloven\u0161\u010dina",
        sq: "Shqip",
        sr: "\u0421\u0440\u043f\u0441\u043a\u0438",
        sv: "Svenska",
        th: "\u0e20\u0e32\u0e29\u0e32\u0e44\u0e17\u0e22",
        ti: "\u1275\u130d\u122d\u129b",
        tr: "T\u00fcrk\u00e7e",
        uk: "\u0423\u043a\u0440\u0430\u0457\u043d\u0441\u044c\u043a\u0430",
        ur: "\u0627\u064f\u0631\u062f\u064f\u0648\u202c",
        vi: "Ti\u1ebfng Vi\u1ec7t",
        yo: "\u00c8d\u00e8 Yor\u00f9b\u00e1",
        "zh-hans": "\u7b80\u4f53\u4e2d\u6587",
        "zh-hant": "\u6b63\u9ad4\u4e2d\u6587"
    },
    Zc = "ace ar fa he mzn ps ur".split(" "),
    K = window.BlocklyGamesLang,
    $c = window.BlocklyGamesLanguages,
    ad = /\.html$/.test(window.location.pathname);

function bd(a, c, d) {
    var e = Number;
    a = (a = window.location.search.match(new RegExp("[?&]" + a + "=([^&]+)"))) ? decodeURIComponent(a[1].replace(/\+/g, "%20")) : "NaN";
    e = e(a);
    return isNaN(e) ? c : h.g.Ld.al(c, e, d)
}

function cd() {
    return -1 != Zc.indexOf(K)
}
var M = bd("level", 1, 10);

function dd() {
    document.title = document.getElementById("title").textContent;
    document.dir = cd() ? "rtl" : "ltr";
    document.head.parentElement.setAttribute("lang", K);
    var a = document.getElementById("languageMenu");
    if (a) {
        for (var c = [], d = 0; d < $c.length; d++) {
            var e = $c[d];
            c.push([Yc[e], e])
        }
        c.sort(function(g, k) {
            return g[0] > k[0] ? 1 : g[0] < k[0] ? -1 : 0
        });
        for (d = a.options.length = 0; d < c.length; d++) {
            var f = c[d];
            e = f[1];
            f = new Option(f[0], e);
            e == K && (f.selected = !0);
            a.options.add(f)
        }
        1 >= a.options.length && (a.style.display = "none")
    }
    for (d = 1; 10 >=
        d; d++) a = document.getElementById("level" + d), c = !!ed(d), a && c && (a.className += " level_done");
    (d = document.querySelector('meta[name="viewport"]')) && 725 > screen.availWidth && d.setAttribute("content", "width=725, initial-scale=.35, user-scalable=no");
    setTimeout(fd, 1)
}

function ed(a) {
    var c = gd;
    try {
        var d = window.localStorage[c + a]
    } catch (e) {}
    return d
}

function N(a) {
    var c;
    (c = document.getElementById(a)) ? (c = c.textContent, c = c.replace(/\\n/g, "\n")) : c = null;
    return null === c ? "[Unknown message: " + a + "]" : c
}

function hd(a, c) {
    if (!a) throw TypeError("Element not found: " + a);
    "string" == typeof a && (a = document.getElementById(a));
    a.addEventListener("click", c, !0);
    a.addEventListener("touchend", function(d) {
        d.preventDefault();
        c(d)
    }, !0)
}

function fd() {
    if (!ad) {
        window.GoogleAnalyticsObject = "GoogleAnalyticsFunction";
        var a = function(d) {
            (a.q = a.q || []).push(arguments)
        };
        window.GoogleAnalyticsFunction = a;
        a.l = 1 * new Date;
        var c = document.createElement("script");
        c.async = 1;
        c.src = "//www.google-analytics.com/analytics.js";
        document.head.appendChild(c);
        a("create", "UA-50448074-1", "auto");
        a("send", "pageview")
    }
};
h.na = {};
h.na.yt = function() {
    h.Ea.u.register({
        Kc: function() {
            return h.M.UNDO
        },
        Db: function(a) {
            return 0 < a.B.Pi.length ? "enabled" : "disabled"
        },
        hb: function(a) {
            ib(a.B, !1)
        },
        td: h.Ea.Hc.Wc,
        id: "undoWorkspace",
        weight: 1
    })
};
h.na.xt = function() {
    h.Ea.u.register({
        Kc: function() {
            return h.M.REDO
        },
        Db: function(a) {
            return 0 < a.B.mm.length ? "enabled" : "disabled"
        },
        hb: function(a) {
            ib(a.B, !0)
        },
        td: h.Ea.Hc.Wc,
        id: "redoWorkspace",
        weight: 2
    })
};
h.na.yE = function() {
    h.Ea.u.register({
        Kc: function() {
            return h.M.CLEAN_UP
        },
        Db: function(a) {
            return a.B.wc() ? 1 < a.B.ub(!1).length ? "enabled" : "disabled" : "hidden"
        },
        hb: function(a) {
            a = a.B;
            a.ac(!1);
            h.h.ta(!0);
            for (var c = a.ub(!0), d = 0, e = 0, f; f = c[e]; e++)
                if (f.wc()) {
                    var g = f.Za();
                    f.moveBy(-g.x, d - g.y);
                    tc(f);
                    d = f.Za().y + r(f).height + a.mb.ga().Jk
                } h.h.ta(!1);
            a.ac(!0)
        },
        td: h.Ea.Hc.Wc,
        id: "cleanWorkspace",
        weight: 3
    })
};
h.na.Ry = function(a, c) {
    for (var d = 0, e = 0; e < c.length; e++)
        for (var f = c[e]; f;) setTimeout(f.Hi.bind(f, a), d), f = w(f), d += 10
};
h.na.zE = function() {
    h.Ea.u.register({
        Kc: function() {
            return h.M.COLLAPSE_ALL
        },
        Db: function(a) {
            if (a.B.options.collapse) {
                a = a.B.ub(!1);
                for (var c = 0; c < a.length; c++)
                    for (var d = a[c]; d;) {
                        if (!d.isCollapsed()) return "enabled";
                        d = w(d)
                    }
                return "disabled"
            }
            return "hidden"
        },
        hb: function(a) {
            h.na.Ry(!0, a.B.ub(!0))
        },
        td: h.Ea.Hc.Wc,
        id: "collapseWorkspace",
        weight: 4
    })
};
h.na.KE = function() {
    h.Ea.u.register({
        Kc: function() {
            return h.M.EXPAND_ALL
        },
        Db: function(a) {
            if (a.B.options.collapse) {
                a = a.B.ub(!1);
                for (var c = 0; c < a.length; c++)
                    for (var d = a[c]; d;) {
                        if (d.isCollapsed()) return "enabled";
                        d = w(d)
                    }
                return "disabled"
            }
            return "hidden"
        },
        hb: function(a) {
            h.na.Ry(!1, a.B.ub(!0))
        },
        td: h.Ea.Hc.Wc,
        id: "expandWorkspace",
        weight: 5
    })
};
h.na.Wv = function(a, c) {
    if (a.cf()) Array.prototype.push.apply(c, v(a, !1));
    else {
        a = z(a, !1);
        for (var d = 0; d < a.length; d++) h.na.Wv(a[d], c)
    }
};
h.na.Xr = function(a) {
    var c = [];
    a = a.ub(!0);
    for (var d = 0; d < a.length; d++) h.na.Wv(a[d], c);
    return c
};
h.na.$n = function(a, c) {
    h.h.ta(c);
    var d = a.shift();
    d && (d.B ? (d.H(!1, !0), setTimeout(h.na.$n, 10, a, c)) : h.na.$n(a, c));
    h.h.ta(!1)
};
h.na.GE = function() {
    h.Ea.u.register({
        Kc: function(a) {
            if (a.B) return a = h.na.Xr(a.B).length, 1 == a ? h.M.DELETE_BLOCK : h.M.DELETE_X_BLOCKS.replace("%1", String(a))
        },
        Db: function(a) {
            if (a.B) return 0 < h.na.Xr(a.B).length ? "enabled" : "disabled"
        },
        hb: function(a) {
            if (a.B) {
                vc(a.B);
                var c = h.na.Xr(a.B),
                    d = h.g.Xe();
                2 > c.length ? h.na.$n(c, d) : h.confirm(h.M.DELETE_ALL_BLOCKS.replace("%1", c.length), function(e) {
                    e && h.na.$n(c, d)
                })
            }
        },
        td: h.Ea.Hc.Wc,
        id: "workspaceDelete",
        weight: 6
    })
};
h.na.OE = function() {
    h.na.yt();
    h.na.xt();
    h.na.yE();
    h.na.zE();
    h.na.KE();
    h.na.GE()
};
h.na.IE = function() {
    h.Ea.u.register({
        Kc: function() {
            return h.M.DUPLICATE_BLOCK
        },
        Db: function(a) {
            a = a.block;
            return !a.cd && a.cf() && a.wc() ? (hb(a.B) ? gb(a.B, h.g.Tr(a, !0)) : 1) ? "enabled" : "disabled" : "hidden"
        },
        hb: function(a) {
            a.block && h.duplicate(a.block)
        },
        td: h.Ea.Hc.Sb,
        id: "blockDuplicate",
        weight: 1
    })
};
h.na.BE = function() {
    h.Ea.u.register({
        Kc: function(a) {
            return a.block.Ed ? h.M.REMOVE_COMMENT : h.M.ADD_COMMENT
        },
        Db: function(a) {
            a = a.block;
            return h.g.userAgent.$d || a.cd || !a.B.options.hC || a.isCollapsed() || !a.Kd() ? "hidden" : "enabled"
        },
        hb: function(a) {
            a = a.block;
            a.Ed ? a.ck(null) : a.ck("")
        },
        td: h.Ea.Hc.Sb,
        id: "blockComment",
        weight: 2
    })
};
h.na.ME = function() {
    h.Ea.u.register({
        Kc: function(a) {
            return ya(a.block) ? h.M.EXTERNAL_INPUTS : h.M.INLINE_INPUTS
        },
        Db: function(a) {
            a = a.block;
            if (!a.cd && a.wc() && !a.isCollapsed())
                for (var c = 1; c < a.U.length; c++)
                    if (a.U[c - 1].type != h.Ha.pc && a.U[c].type != h.Ha.pc) return "enabled";
            return "hidden"
        },
        hb: function(a) {
            a.block.Ji(!ya(a.block))
        },
        td: h.Ea.Hc.Sb,
        id: "blockInline",
        weight: 3
    })
};
h.na.AE = function() {
    h.Ea.u.register({
        Kc: function(a) {
            return a.block.isCollapsed() ? h.M.EXPAND_BLOCK : h.M.COLLAPSE_BLOCK
        },
        Db: function(a) {
            a = a.block;
            return !a.cd && a.wc() && a.B.options.collapse ? "enabled" : "hidden"
        },
        hb: function(a) {
            a.block.Hi(!a.block.isCollapsed())
        },
        td: h.Ea.Hc.Sb,
        id: "blockCollapseExpand",
        weight: 4
    })
};
h.na.HE = function() {
    h.Ea.u.register({
        Kc: function(a) {
            return a.block.isEnabled() ? h.M.DISABLE_BLOCK : h.M.ENABLE_BLOCK
        },
        Db: function(a) {
            a = a.block;
            return !a.cd && a.B.options.disable && a.Kd() ? ac(a) ? "disabled" : "enabled" : "hidden"
        },
        hb: function(a) {
            a = a.block;
            var c = h.h.Wb();
            c || h.h.ta(!0);
            a.jf(!a.isEnabled());
            c || h.h.ta(!1)
        },
        td: h.Ea.Hc.Sb,
        id: "blockDisable",
        weight: 5
    })
};
h.na.wt = function() {
    h.Ea.u.register({
        Kc: function(a) {
            var c = a.block;
            a = v(c, !1).length;
            (c = w(c)) && (a -= v(c, !1).length);
            return 1 == a ? h.M.DELETE_BLOCK : h.M.DELETE_X_BLOCKS.replace("%1", String(a))
        },
        Db: function(a) {
            return !a.block.cd && a.block.cf() ? "enabled" : "hidden"
        },
        hb: function(a) {
            h.h.ta(!0);
            a.block && h.nr(a.block);
            h.h.ta(!1)
        },
        td: h.Ea.Hc.Sb,
        id: "blockDelete",
        weight: 6
    })
};
h.na.LE = function() {
    h.Ea.u.register({
        Kc: function() {
            return h.M.HELP
        },
        Db: function(a) {
            a = a.block;
            return ("function" == typeof a.Oj ? a.Oj() : a.Oj) ? "enabled" : "hidden"
        },
        hb: function(a) {
            a.block.showHelp()
        },
        td: h.Ea.Hc.Sb,
        id: "blockHelp",
        weight: 7
    })
};
h.na.xE = function() {
    h.na.IE();
    h.na.BE();
    h.na.ME();
    h.na.AE();
    h.na.HE();
    h.na.wt();
    h.na.LE()
};
h.na.EE = function() {
    h.na.OE();
    h.na.xE()
};
h.na.EE();
h.tb = {};
h.tb.names = {
    Vz: "escape",
    Dh: "delete",
    yz: "copy",
    Dz: "cut",
    WA: "paste",
    uB: "undo",
    gB: "redo"
};
h.tb.JE = function() {
    var a = {
        name: h.tb.names.Vz,
        Db: function(c) {
            return !c.options.readOnly
        },
        hb: function() {
            h.ic();
            return !0
        }
    };
    h.Ub.u.register(a);
    G(h.g.ka.Uz, a.name)
};
h.tb.wt = function() {
    var a = {
        name: h.tb.names.Dh,
        Db: function(c) {
            return !c.options.readOnly && h.selected && h.selected.cf()
        },
        hb: function(c, d) {
            d.preventDefault();
            if (h.He.ki()) return !1;
            h.nr(h.selected);
            return !0
        }
    };
    h.Ub.u.register(a);
    G(h.g.ka.Dh, a.name);
    G(h.g.ka.pz, a.name)
};
h.tb.CE = function() {
    var a = {
        name: h.tb.names.yz,
        Db: function(d) {
            return !d.options.readOnly && !h.He.ki() && h.selected && h.selected.cf() && h.selected.wc()
        },
        hb: function(d, e) {
            e.preventDefault();
            h.ic();
            h.hr(h.selected);
            return !0
        }
    };
    h.Ub.u.register(a);
    var c = J(h.g.ka.Ep, [h.g.ka.Ch]);
    G(c, a.name);
    c = J(h.g.ka.Ep, [h.g.ka.Ui]);
    G(c, a.name);
    c = J(h.g.ka.Ep, [h.g.ka.cj]);
    G(c, a.name)
};
h.tb.DE = function() {
    var a = {
        name: h.tb.names.Dz,
        Db: function(d) {
            return !d.options.readOnly && !h.He.ki() && h.selected && h.selected.cf() && h.selected.wc() && !h.selected.B.Sf
        },
        hb: function() {
            h.hr(h.selected);
            h.nr(h.selected);
            return !0
        }
    };
    h.Ub.u.register(a);
    var c = J(h.g.ka.Eq, [h.g.ka.Ch]);
    G(c, a.name);
    c = J(h.g.ka.Eq, [h.g.ka.Ui]);
    G(c, a.name);
    c = J(h.g.ka.Eq, [h.g.ka.cj]);
    G(c, a.name)
};
h.tb.NE = function() {
    var a = {
        name: h.tb.names.WA,
        Db: function(d) {
            return !d.options.readOnly && !h.He.ki()
        },
        hb: function() {
            return h.cp()
        }
    };
    h.Ub.u.register(a);
    var c = J(h.g.ka.Bq, [h.g.ka.Ch]);
    G(c, a.name);
    c = J(h.g.ka.Bq, [h.g.ka.Ui]);
    G(c, a.name);
    c = J(h.g.ka.Bq, [h.g.ka.cj]);
    G(c, a.name)
};
h.tb.yt = function() {
    var a = {
        name: h.tb.names.uB,
        Db: function(d) {
            return !d.options.readOnly && !h.He.ki()
        },
        hb: function(d) {
            h.ic();
            ib(d, !1);
            return !0
        }
    };
    h.Ub.u.register(a);
    var c = J(h.g.ka.pj, [h.g.ka.Ch]);
    G(c, a.name);
    c = J(h.g.ka.pj, [h.g.ka.Ui]);
    G(c, a.name);
    c = J(h.g.ka.pj, [h.g.ka.cj]);
    G(c, a.name)
};
h.tb.xt = function() {
    var a = {
        name: h.tb.names.gB,
        Db: function(d) {
            return !h.He.ki() && !d.options.readOnly
        },
        hb: function(d) {
            h.ic();
            ib(d, !0);
            return !0
        }
    };
    h.Ub.u.register(a);
    var c = J(h.g.ka.pj, [h.g.ka.xn, h.g.ka.Ch]);
    G(c, a.name);
    c = J(h.g.ka.pj, [h.g.ka.xn, h.g.ka.Ui]);
    G(c, a.name);
    c = J(h.g.ka.pj, [h.g.ka.xn, h.g.ka.cj]);
    G(c, a.name);
    c = J(h.g.ka.yB, [h.g.ka.Ch]);
    G(c, a.name)
};
h.tb.FE = function() {
    h.tb.JE();
    h.tb.wt();
    h.tb.CE();
    h.tb.DE();
    h.tb.NE();
    h.tb.yt();
    h.tb.xt()
};
h.tb.FE();
h.g.A = {};
h.g.A.Ia = function(a, c) {
    return " " + a + "," + c + " "
};
h.g.A.curve = function(a, c) {
    return " " + a + c.join("")
};
h.g.A.moveTo = function(a, c) {
    return " M " + a + "," + c + " "
};
h.g.A.moveBy = function(a, c) {
    return " m " + a + "," + c + " "
};
h.g.A.lineTo = function(a, c) {
    return " l " + a + "," + c + " "
};
h.g.A.line = function(a) {
    return " l" + a.join("")
};
h.g.A.Y = function(a, c) {
    return " " + a + " " + c + " "
};
h.g.A.arc = function(a, c, d, e) {
    return a + " " + d + " " + d + " " + c + e
};
h.i.tf = function() {
    this.Ie = 0;
    this.jB = 3;
    this.zd = 5;
    this.ev = 8;
    this.Fc = 10;
    this.Fv = this.zd;
    this.Qk = 15;
    this.lj = 5;
    this.Cn = 8;
    this.OA = 15;
    this.fq = 4;
    this.KA = 12;
    this.Oz = 16;
    this.Nz = this.Fu = this.Qk;
    this.pb = 8;
    this.pB = this.Nk = 15;
    this.Cv = 0;
    this.Ev = 20;
    this.qz = 4;
    this.sB = this.zd;
    this.tB = this.Fc;
    this.sz = this.zd;
    this.rz = this.Fc;
    this.Rm = !1;
    this.nB = 15;
    this.oB = 100;
    this.mB = 15;
    this.Jk = 24;
    this.Qz = 14.5;
    this.Pz = this.Qk + 11;
    this.Wz = 2;
    this.Rz = this.Jk;
    this.Bv = h.g.A.moveBy(0, 0);
    this.xA = 12;
    this.yA = 6;
    this.Fh = 11;
    this.lg = "normal";
    this.kg =
        "sans-serif";
    this.Op = this.ln = -1;
    this.kn = 4;
    this.Iu = 16;
    this.zk = 5;
    this.cA = "#fff";
    this.Pp = !h.g.userAgent.$d && !h.g.userAgent.Eh;
    this.Ju = this.Iu;
    this.eA = this.dA = this.Ku = !1;
    this.gA = this.zk;
    this.Ak = 12;
    this.fA = "data:image/svg+xml;base64,PHN2ZyBpZD0iTGF5ZXJfMSIgZGF0YS1uYW1lPSJMYXllciAxIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMi43MSIgaGVpZ2h0PSI4Ljc5IiB2aWV3Qm94PSIwIDAgMTIuNzEgOC43OSI+PHRpdGxlPmRyb3Bkb3duLWFycm93PC90aXRsZT48ZyBvcGFjaXR5PSIwLjEiPjxwYXRoIGQ9Ik0xMi43MSwyLjQ0QTIuNDEsMi40MSwwLDAsMSwxMiw0LjE2TDguMDgsOC4wOGEyLjQ1LDIuNDUsMCwwLDEtMy40NSwwTDAuNzIsNC4xNkEyLjQyLDIuNDIsMCwwLDEsMCwyLjQ0LDIuNDgsMi40OCwwLDAsMSwuNzEuNzFDMSwwLjQ3LDEuNDMsMCw2LjM2LDBTMTEuNzUsMC40NiwxMiwuNzFBMi40NCwyLjQ0LDAsMCwxLDEyLjcxLDIuNDRaIiBmaWxsPSIjMjMxZjIwIi8+PC9nPjxwYXRoIGQ9Ik02LjM2LDcuNzlhMS40MywxLjQzLDAsMCwxLTEtLjQyTDEuNDIsMy40NWExLjQ0LDEuNDQsMCwwLDEsMC0yYzAuNTYtLjU2LDkuMzEtMC41Niw5Ljg3LDBhMS40NCwxLjQ0LDAsMCwxLDAsMkw3LjM3LDcuMzdBMS40MywxLjQzLDAsMCwxLDYuMzYsNy43OVoiIGZpbGw9IiNmZmYiLz48L3N2Zz4=";
    this.lm = String(Math.random()).substring(2);
    this.lo = "";
    this.Lr = null;
    this.Gw = "";
    this.wr = null;
    this.Bw = "";
    this.ll = this.kr = null;
    this.cn = "#cc0a0a";
    this.pn = "#4286f4";
    this.fn = 100;
    this.Pv = 5;
    this.dn = 10;
    this.Az = 2;
    this.Cz = 4;
    this.Vp = "#000000";
    this.mn = .2;
    this.Av = {
        YA: 1,
        dj: 2
    }
};
b = h.i.tf.prototype;
b.Ba = function() {
    this.aj = this.Hs();
    this.dj = this.Is();
    this.ij = this.Ks();
    this.kq = this.Js();
    var a = this.pb,
        c = h.g.A.arc("a", "0 0,0", a, h.g.A.Ia(-a, a)),
        d = h.g.A.arc("a", "0 0,0", a, h.g.A.Ia(a, a));
    this.nn = {
        width: a,
        height: a,
        nt: c,
        ep: d
    };
    a = this.pb;
    c = h.g.A.moveBy(0, a) + h.g.A.arc("a", "0 0,1", a, h.g.A.Ia(a, -a));
    d = h.g.A.arc("a", "0 0,1", a, h.g.A.Ia(a, a));
    var e = h.g.A.arc("a", "0 0,1", a, h.g.A.Ia(-a, -a)),
        f = h.g.A.arc("a", "0 0,1", a, h.g.A.Ia(-a, a));
    this.Ok = {
        au: c,
        sF: d,
        RB: f,
        Pq: e,
        TE: a
    }
};
b.tm = function(a) {
    this.Ag = Object.create(null);
    var c = a.Ag,
        d;
    for (d in c) this.Ag[d] = id(c[d]);
    this.kg = a.fontStyle && void 0 != a.fontStyle.family ? a.fontStyle.family : this.kg;
    this.lg = a.fontStyle && void 0 != a.fontStyle.weight ? a.fontStyle.weight : this.lg;
    this.Fh = a.fontStyle && void 0 != a.fontStyle.size ? a.fontStyle.size : this.Fh;
    c = h.g.j.TD(this.Fh + "pt", this.lg, this.kg);
    this.ln = c.height;
    this.Op = c.fe;
    this.cn = ab(a, "cursorColour") || this.cn;
    this.pn = ab(a, "markerColour") || this.pn;
    this.Vp = ab(a, "insertionMarkerColour") || this.Vp;
    this.mn = Number(ab(a, "insertionMarkerOpacity")) || this.mn;
    this.Rm = null != a.Ut ? a.Ut : this.Rm
};

function wc(a, c) {
    var d = "auto_" + c;
    a.Ag[d] || (a.Ag[d] = id({
        colourPrimary: c
    }));
    return {
        style: a.Ag[d],
        name: d
    }
}

function sc(a, c) {
    return a.Ag[c || ""] || (c && 0 == c.indexOf("auto_") ? wc(a, c.substring(5)).style : id({
        colourPrimary: "#000000"
    }))
}

function id(a) {
    var c = {};
    a && h.g.object.$g(c, a);
    a = h.g.bp(c.colourPrimary || "#000");
    c.Th = a.Kl;
    c.colourSecondary ? a = h.g.bp(c.colourSecondary).Kl : (a = c.Th, a = h.g.sb.Mq("#fff", a, .6) || a);
    c.Sn = a;
    c.colourTertiary ? a = h.g.bp(c.colourTertiary).Kl : (a = c.Th, a = h.g.sb.Mq("#fff", a, .3) || a);
    c.xj = a;
    c.Ze = c.hat || "";
    return c
}
b.H = function() {
    this.Lr && h.g.j.removeNode(this.Lr);
    this.wr && h.g.j.removeNode(this.wr);
    this.kr && h.g.j.removeNode(this.kr);
    this.ll = null
};
b.Hs = function() {
    var a = this.xA,
        c = this.yA,
        d = h.g.A.line([h.g.A.Ia(c, a / 4), h.g.A.Ia(2 * -c, a / 2), h.g.A.Ia(c, a / 4)]);
    return {
        height: a,
        width: c,
        path: d
    }
};
b.Ks = function() {
    var a = this.nB,
        c = this.oB,
        d = h.g.A.curve("c", [h.g.A.Ia(30, -a), h.g.A.Ia(70, -a), h.g.A.Ia(c, 0)]);
    return {
        height: a,
        width: c,
        path: d
    }
};
b.Js = function() {
    function a(g) {
        g = g ? -1 : 1;
        var k = -g,
            l = d / 2,
            m = h.g.A.Ia(c, g * l);
        return h.g.A.curve("c", [h.g.A.Ia(0, g * (l + 2.5)), h.g.A.Ia(-c, k * (l + .5)), h.g.A.Ia(-c, g * l)]) + h.g.A.curve("s", [h.g.A.Ia(c, 2.5 * k), m])
    }
    var c = this.Cn,
        d = this.Qk,
        e = a(!0),
        f = a(!1);
    return {
        type: this.Av.YA,
        width: c,
        height: d,
        Qd: f,
        gm: e
    }
};
b.Is = function() {
    function a(k) {
        return h.g.A.line([h.g.A.Ia(k * e, d), h.g.A.Ia(3 * k, 0), h.g.A.Ia(k * e, -d)])
    }
    var c = this.OA,
        d = this.fq,
        e = (c - 3) / 2,
        f = a(1),
        g = a(-1);
    return {
        type: this.Av.dj,
        width: c,
        height: d,
        hh: f,
        ny: g
    }
};

function xa(a, c) {
    switch (c.type) {
        case h.X.Zb:
        case h.X.Tc:
            return a.kq;
        case h.X.kd:
        case h.X.$b:
            return a.dj;
        default:
            throw Error("Unknown connection type");
    }
}
b.Va = function(a, c, d) {
    d = this.Ur(d);
    c = "blockly-renderer-style-" + c;
    this.ll = document.getElementById(c);
    var e = d.join("\n");
    this.ll ? this.ll.firstChild.textContent = e : (d = document.createElement("style"), d.id = c, c = document.createTextNode(e), d.appendChild(c), document.head.insertBefore(d, document.head.firstChild), this.ll = d);
    a = h.g.j.J(h.g.D.Eu, {}, a);
    c = h.g.j.J(h.g.D.Lu, {
        id: "blocklyEmbossFilter" + this.lm
    }, a);
    h.g.j.J(h.g.D.$z, {
        "in": "SourceAlpha",
        stdDeviation: 1,
        result: "blur"
    }, c);
    d = h.g.j.J(h.g.D.bA, {
        "in": "blur",
        surfaceScale: 1,
        specularConstant: .5,
        specularExponent: 10,
        "lighting-color": "white",
        result: "specOut"
    }, c);
    h.g.j.J(h.g.D.aA, {
        x: -5E3,
        y: -1E4,
        z: 2E4
    }, d);
    h.g.j.J(h.g.D.Np, {
        "in": "specOut",
        in2: "SourceAlpha",
        operator: "in",
        result: "specOut"
    }, c);
    h.g.j.J(h.g.D.Np, {
        "in": "SourceGraphic",
        in2: "specOut",
        operator: "arithmetic",
        k1: 0,
        k2: 1,
        k3: 1,
        k4: 0
    }, c);
    this.lo = c.id;
    this.Lr = c;
    c = h.g.j.J(h.g.D.vv, {
        id: "blocklyDisabledPattern" + this.lm,
        patternUnits: "userSpaceOnUse",
        width: 10,
        height: 10
    }, a);
    h.g.j.J(h.g.D.Mb, {
        width: 10,
        height: 10,
        fill: "#aaa"
    }, c);
    h.g.j.J(h.g.D.Je, {
        d: "M 0 0 L 10 10 M 10 0 L 0 10",
        stroke: "#cc0"
    }, c);
    this.Gw = c.id;
    this.wr = c;
    h.i.Rc && (a = h.g.j.J(h.g.D.Lu, {
        id: "blocklyDebugFilter" + this.lm,
        height: "160%",
        width: "180%",
        y: "-30%",
        x: "-40%"
    }, a), c = h.g.j.J(h.g.D.Xz, {
        result: "outBlur"
    }, a), h.g.j.J(h.g.D.Zz, {
        type: "table",
        tableValues: "0 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1"
    }, c), h.g.j.J(h.g.D.Yz, {
        "flood-color": "#ff0000",
        "flood-opacity": .5,
        result: "outColor"
    }, a), h.g.j.J(h.g.D.Np, {
        "in": "outColor",
        in2: "outBlur",
        operator: "in",
        result: "outGlow"
    }, a), this.Bw = a.id, this.kr = a)
};
b.Ur = function(a) {
    return [a + " .blocklyText, ", a + " .blocklyFlyoutLabelText {", "font: " + this.lg + " " + this.Fh + "pt " + this.kg + ";", "}", a + " .blocklyText {", "fill: #fff;", "}", a + " .blocklyNonEditableText>rect,", a + " .blocklyEditableText>rect {", "fill: " + this.cA + ";", "fill-opacity: .6;", "stroke: none;", "}", a + " .blocklyNonEditableText>text,", a + " .blocklyEditableText>text {", "fill: #000;", "}", a + " .blocklyFlyoutLabelText {", "fill: #000;", "}", a + " .blocklyText.blocklyBubbleText {", "fill: #000;", "}", a + " .blocklyEditableText:not(.editing):hover>rect {",
        "stroke: #fff;", "stroke-width: 2;", "}", a + " .blocklyHtmlInput {", "font-family: " + this.kg + ";", "font-weight: " + this.lg + ";", "}", a + " .blocklySelected>.blocklyPath {", "stroke: #fc3;", "stroke-width: 3px;", "}", a + " .blocklyHighlightedConnectionPath {", "stroke: #fc3;", "}", a + " .blocklyReplaceable .blocklyPath {", "fill-opacity: .5;", "}", a + " .blocklyReplaceable .blocklyPathLight,", a + " .blocklyReplaceable .blocklyPathDark {", "display: none;", "}", a + " .blocklyInsertionMarker>.blocklyPath {", "fill-opacity: " + this.mn +
        ";", "stroke: none;", "}"
    ]
};
h.i.o = {
    NONE: 0,
    Dc: 1,
    Ou: 2,
    Ru: 4,
    qq: 8,
    qu: 16,
    Vu: 32,
    Hu: 64,
    yd: 128,
    Tu: 256,
    Dv: 512,
    xz: 1024,
    iq: 2048,
    eq: 4096,
    SA: 8192,
    Hp: 16384,
    Zp: 32768,
    Yp: 65536,
    oq: 131072,
    nq: 262144,
    Zu: 524288,
    pq: 1048576,
    xq: 2097152,
    Bp: 4194304,
    Uu: 8388608
};
h.i.o.nH = h.i.o.Zp | h.i.o.Yp;
h.i.o.EI = h.i.o.oq | h.i.o.nq;
h.i.o.Us = 16777216;
h.i.o.vb = function() {
    Object.prototype.hasOwnProperty.call(h.i.o, void 0) || (h.i.o[void 0] = h.i.o.Us, h.i.o.Us <<= 1);
    return h.i.o[void 0]
};
h.i.o.df = function(a) {
    return a.type & h.i.o.Dc
};
h.i.o.pi = function(a) {
    return a.type & h.i.o.Ou
};
h.i.o.Sj = function(a) {
    return a.type & h.i.o.Ru
};
h.i.o.sd = function(a) {
    return a.type & h.i.o.qq
};
h.i.o.XJ = function(a) {
    return a.type & h.i.o.Vu
};
h.i.o.Tf = function(a) {
    return a.type & h.i.o.yd
};
h.i.o.Rl = function(a) {
    return a.type & h.i.o.Hu
};
h.i.o.Tg = function(a) {
    return a.type & h.i.o.Tu
};
h.i.o.ri = function(a) {
    return a.type & h.i.o.Dv
};
h.i.o.Wj = function(a) {
    return a.type & h.i.o.iq
};
h.i.o.Vg = function(a) {
    return a.type & h.i.o.eq
};
h.i.o.MD = function(a) {
    return a.type & (h.i.o.iq | h.i.o.eq)
};
h.i.o.Ug = function(a) {
    return a.type & h.i.o.Yp
};
h.i.o.Gx = function(a) {
    return a.type & h.i.o.nq
};
h.i.o.Sl = function(a) {
    return a.type & h.i.o.Zp
};
h.i.o.YJ = function(a) {
    return a.type & h.i.o.oq
};
h.i.o.WJ = function(a) {
    return a.type & h.i.o.Hp
};
h.i.o.Ex = function(a) {
    return a.type & h.i.o.Zu
};
h.i.o.$J = function(a) {
    return a.type & h.i.o.pq
};
h.i.o.GD = function(a) {
    return a.type & h.i.o.qu
};
h.i.o.Go = function(a) {
    return a.type & h.i.o.xq
};
h.i.o.xo = function(a) {
    return a.type & h.i.o.Bp
};
h.i.o.Ix = function(a) {
    return a.type & (h.i.o.xq | h.i.o.Bp)
};
h.i.o.HD = function(a) {
    return a.type & h.i.o.Uu
};
h.i.pg = function(a) {
    this.height = this.width = 0;
    this.type = h.i.o.NONE;
    this.Dg = this.sa = 0;
    this.s = a;
    this.Od = this.s.Nk
};
h.i.va = function(a, c) {
    h.i.va.v.constructor.call(this, a);
    this.rc = c;
    this.shape = xa(this.s, c);
    this.oi = !!this.shape.isDynamic;
    this.type |= h.i.o.xz
};
h.g.object.V(h.i.va, h.i.pg);
h.i.hq = function(a, c) {
    h.i.hq.v.constructor.call(this, a, c);
    this.type |= h.i.o.SA;
    this.height = this.oi ? 0 : this.shape.height;
    this.Td = this.width = this.oi ? 0 : this.shape.width;
    this.od = this.s.lj;
    this.fl = 0
};
h.g.object.V(h.i.hq, h.i.va);
h.i.lq = function(a, c) {
    h.i.lq.v.constructor.call(this, a, c);
    this.type |= h.i.o.iq;
    this.height = this.shape.height;
    this.width = this.shape.width
};
h.g.object.V(h.i.lq, h.i.va);
h.i.gq = function(a, c) {
    h.i.gq.v.constructor.call(this, a, c);
    this.type |= h.i.o.eq;
    this.height = this.shape.height;
    this.width = this.shape.width
};
h.g.object.V(h.i.gq, h.i.va);
h.i.Hk = function(a, c) {
    h.i.Hk.v.constructor.call(this, a, c.connection);
    this.type |= h.i.o.yd;
    this.input = c;
    this.align = c.align;
    (this.Fg = c.connection && c.connection.ra() ? c.connection.ra() : null) ? (a = r(this.Fg), this.dl = a.width, this.Vn = a.height) : this.Vn = this.dl = 0;
    this.od = this.fl = 0
};
h.g.object.V(h.i.Hk, h.i.va);
h.i.mg = function(a, c) {
    h.i.mg.v.constructor.call(this, a, c);
    this.type |= h.i.o.Tu;
    this.Fg ? (this.width = this.dl, this.height = this.Vn) : (this.height = this.s.Pz, this.width = this.s.Qz);
    this.yj = this.oi ? this.shape.height(this.height) : this.shape.height;
    this.Re = this.oi ? this.shape.width(this.height) : this.shape.width;
    this.Fg || (this.width += this.Re * (this.oi ? 2 : 1));
    this.od = this.oi ? this.shape.od(this.yj) : this.s.lj;
    this.fl = this.oi ? this.shape.fl(this.Re) : 0
};
h.g.object.V(h.i.mg, h.i.Hk);
h.i.vg = function(a, c) {
    h.i.vg.v.constructor.call(this, a, c);
    this.type |= h.i.o.Dv;
    this.height = this.Fg ? this.Vn + this.s.Cv : this.s.Rz;
    this.width = this.s.pB + this.shape.width
};
h.g.object.V(h.i.vg, h.i.Hk);
h.i.jn = function(a, c) {
    h.i.jn.v.constructor.call(this, a, c);
    this.type |= h.i.o.Hu;
    this.height = this.Fg ? this.Vn - this.s.lj - this.s.zd : this.shape.height;
    this.width = this.shape.width + this.s.Wz;
    this.od = this.s.lj;
    this.yj = this.shape.height;
    this.Re = this.shape.width
};
h.g.object.V(h.i.jn, h.i.Hk);
h.i.Wp = function(a, c) {
    h.i.Wp.v.constructor.call(this, a);
    this.icon = c;
    this.isVisible = c.isVisible();
    this.type |= h.i.o.Ru;
    a = c.JJ();
    this.height = a.height;
    this.width = a.width
};
h.g.object.V(h.i.Wp, h.i.pg);
h.i.Xp = function(a) {
    h.i.Xp.v.constructor.call(this, a);
    this.type |= h.i.o.Zu;
    this.height = this.s.aj.height;
    this.width = this.s.aj.width
};
h.g.object.V(h.i.Xp, h.i.pg);
h.i.xd = function(a, c) {
    h.i.xd.v.constructor.call(this, a);
    this.Hj = c;
    this.Kd = c.yk;
    this.QC = c.Yw();
    this.type |= h.i.o.Dc;
    a = this.Hj.Pf();
    this.height = a.height;
    this.width = a.width
};
h.g.object.V(h.i.xd, h.i.pg);
h.i.Tp = function(a) {
    h.i.Tp.v.constructor.call(this, a);
    this.type |= h.i.o.Ou;
    this.height = this.s.ij.height;
    this.width = this.s.ij.width;
    this.rj = this.height
};
h.g.object.V(h.i.Tp, h.i.pg);
h.i.kj = function(a, c) {
    h.i.kj.v.constructor.call(this, a);
    this.type = (c && "left" != c ? h.i.o.oq : h.i.o.Zp) | h.i.o.Hp;
    this.width = this.height = this.s.Ie
};
h.g.object.V(h.i.kj, h.i.pg);
h.i.wn = function(a, c) {
    h.i.wn.v.constructor.call(this, a);
    this.type = (c && "left" != c ? h.i.o.nq : h.i.o.Yp) | h.i.o.Hp;
    this.width = this.s.pb;
    this.height = this.s.pb / 2
};
h.g.object.V(h.i.wn, h.i.pg);
h.i.uf = function(a, c) {
    h.i.uf.v.constructor.call(this, a);
    this.type = this.type | h.i.o.qq | h.i.o.Vu;
    this.width = c;
    this.height = this.s.mB
};
h.g.object.V(h.i.uf, h.i.pg);
h.i.Lh = function(a) {
    this.type = h.i.o.pq;
    this.elements = [];
    this.sa = this.Lb = this.wd = this.minWidth = this.minHeight = this.width = this.height = 0;
    this.px = this.Nj = this.ls = this.Qb = this.Pg = !1;
    this.s = a;
    this.Od = this.s.Nk;
    this.align = null
};
h.i.Lh.prototype.measure = function() {
    throw Error("Unexpected attempt to measure a base Row.");
};

function O(a) {
    for (var c = a.elements.length - 1, d; d = a.elements[c]; c--)
        if (h.i.o.Tf(d)) return d;
    return null
}
h.i.Lh.prototype.pp = function() {
    return !0
};
h.i.Lh.prototype.vl = function() {
    return !0
};
h.i.Oh = function(a) {
    h.i.Oh.v.constructor.call(this, a);
    this.type |= h.i.o.xq;
    this.rj = this.Ef = 0;
    this.wD = !1;
    this.connection = null
};
h.g.object.V(h.i.Oh, h.i.Lh);
h.i.Oh.prototype.ns = function(a) {
    var c = (a.Ze ? "cap" === a.Ze : this.s.Rm) && !a.S && !a.aa,
        d = a.aa && a.aa.ra();
    return !!a.S || c || (d ? w(d) == a : !1)
};
h.i.Oh.prototype.measure = function() {
    for (var a = 0, c = 0, d = 0, e = 0, f; f = this.elements[e]; e++) c += f.width, h.i.o.sd(f) || (h.i.o.pi(f) ? d = Math.max(d, f.rj) : a = Math.max(a, f.height));
    this.width = Math.max(this.minWidth, c);
    this.height = Math.max(this.minHeight, a) + d;
    this.Ef = this.rj = d;
    this.wd = this.width
};
h.i.Oh.prototype.pp = function() {
    return !1
};
h.i.Oh.prototype.vl = function() {
    return !1
};
h.i.Bh = function(a) {
    h.i.Bh.v.constructor.call(this, a);
    this.type |= h.i.o.Bp;
    this.qx = !1;
    this.connection = null;
    this.fe = this.ol = 0
};
h.g.object.V(h.i.Bh, h.i.Lh);
h.i.Bh.prototype.ns = function(a) {
    return !!a.S || !!w(a)
};
h.i.Bh.prototype.measure = function() {
    for (var a = 0, c = 0, d = 0, e = 0, f; f = this.elements[e]; e++) c += f.width, h.i.o.sd(f) || (h.i.o.Vg(f) ? d = Math.max(d, f.height) : a = Math.max(a, f.height));
    this.width = Math.max(this.minWidth, c);
    this.height = Math.max(this.minHeight, a) + d;
    this.ol = d;
    this.wd = this.width
};
h.i.Bh.prototype.pp = function() {
    return !1
};
h.i.Bh.prototype.vl = function() {
    return !1
};
h.i.Bn = function(a, c, d) {
    h.i.Bn.v.constructor.call(this, a);
    this.type = this.type | h.i.o.qq | h.i.o.qu;
    this.width = d;
    this.height = c;
    this.Qw = !1;
    this.wd = 0;
    this.elements = [new h.i.uf(this.s, d)]
};
h.g.object.V(h.i.Bn, h.i.Lh);
h.i.Bn.prototype.measure = function() {};
h.i.$i = function(a) {
    h.i.$i.v.constructor.call(this, a);
    this.type |= h.i.o.Uu;
    this.pw = 0
};
h.g.object.V(h.i.$i, h.i.Lh);
h.i.$i.prototype.measure = function() {
    this.width = this.minWidth;
    this.height = this.minHeight;
    for (var a = 0, c = 0, d; d = this.elements[c]; c++) this.width += d.width, h.i.o.Tf(d) && (h.i.o.ri(d) ? a += d.dl : h.i.o.Rl(d) && 0 != d.dl && (a += d.dl - d.Re)), h.i.o.sd(d) || (this.height = Math.max(this.height, d.height));
    this.pw = a;
    this.wd = this.width + a
};
h.i.$i.prototype.vl = function() {
    return !this.Pg && !this.Qb
};
h.i.ae = function(a, c) {
    this.Fa = c;
    this.mb = a;
    this.s = this.mb.ga();
    this.S = c.S ? new h.i.hq(this.s, c.S) : null;
    this.Tj = ya(c) && !c.isCollapsed();
    this.isCollapsed = c.isCollapsed();
    this.rd = c.rd();
    this.I = c.I;
    this.ph = this.width = this.vh = this.height = 0;
    this.rows = [];
    this.Cx = [];
    this.vx = [];
    this.Rb = new h.i.Oh(this.s);
    this.rb = new h.i.Bh(this.s);
    this.op = this.Td = 0
};
b = h.i.ae.prototype;
b.measure = function() {
    var a = !!this.Fa.aa,
        c = (this.Fa.Ze ? "cap" === this.Fa.Ze : this.s.Rm) && !this.S && !a,
        d = this.Rb.ns(this.Fa) ? h.i.kj : h.i.wn;
    this.Rb.elements.push(new d(this.s));
    c ? (a = new h.i.Tp(this.s), this.Rb.elements.push(a), this.Rb.Ef = a.rj) : a && (this.Rb.wD = !0, this.Rb.connection = new h.i.lq(this.s, this.Fa.aa), this.Rb.elements.push(this.Rb.connection));
    this.Fa.U.length && this.Fa.U[0].type == h.Ha.pc && !this.Fa.isCollapsed() ? this.Rb.minHeight = this.s.tB : this.Rb.minHeight = this.s.sB;
    d = h.i.kj;
    this.Rb.elements.push(new d(this.s,
        "right"));
    this.rows.push(this.Rb);
    a = new h.i.$i(this.s);
    this.Cx.push(a);
    d = Aa(this.Fa);
    c = 0;
    for (var e; e = d[c]; c++) {
        var f = new h.i.Wp(this.s, e);
        this.isCollapsed && e.tJ ? this.vx.push(f) : a.elements.push(f)
    }
    e = null;
    for (c = 0; d = this.Fa.U[c]; c++)
        if (d.isVisible()) {
            !e || d.type != h.Ha.pc && e.type != h.Ha.pc && (d.type != h.Ha.Me && d.type != h.Ha.Fe || this.Tj) || (this.rows.push(a), a = new h.i.$i(this.s), this.Cx.push(a));
            for (e = 0; f = d.eb[e]; e++) a.elements.push(new h.i.xd(this.s, f, d));
            this.Yv(d, a);
            e = d
        } this.isCollapsed && (a.px = !0, a.elements.push(new h.i.Xp(this.s)));
    (a.elements.length || a.Nj) && this.rows.push(a);
    this.rt();
    this.rows.push(this.rb);
    this.Xv();
    a = this.rows;
    this.rows = [];
    for (c = 0; c < a.length; c++)
        if (this.rows.push(a[c]), c != a.length - 1) {
            d = this.rows;
            e = d.push;
            f = a[c];
            var g = a[c + 1],
                k = new h.i.Bn(this.s, this.jx(f, g), this.width - this.Td);
            f.Qb && (k.Qw = !0);
            g.Qb && (k.fK = !0);
            e.call(d, k)
        } for (e = d = c = a = 0; f = this.rows[e]; e++) f.measure(), c = Math.max(c, f.width), f.Qb && (a = Math.max(a, f.width - O(f).width)), d = Math.max(d, f.wd);
    this.ph = a;
    this.width = c;
    for (e = 0; f = this.rows[e]; e++) f.Qb && (f.ph =
        this.ph);
    this.vh = Math.max(c, d);
    this.S && (this.Td = this.S.width, this.width += this.S.width, this.vh += this.S.width);
    this.Fq();
    this.Mw()
};
b.rt = function() {
    this.rb.qx = !!this.Fa.ca;
    this.rb.minHeight = this.Fa.U.length && this.Fa.U[this.Fa.U.length - 1].type == h.Ha.pc ? this.s.rz : this.s.sz;
    this.rb.ns(this.Fa) ? this.rb.elements.push(new h.i.kj(this.s)) : this.rb.elements.push(new h.i.wn(this.s));
    this.rb.qx && (this.rb.connection = new h.i.gq(this.s, this.Fa.ca), this.rb.elements.push(this.rb.connection));
    this.rb.elements.push(new h.i.kj(this.s, "right"))
};
b.Yv = function(a, c) {
    this.Tj && a.type == h.Ha.Me ? (c.elements.push(new h.i.mg(this.s, a)), c.ls = !0) : a.type == h.Ha.pc ? (c.elements.push(new h.i.vg(this.s, a)), c.Qb = !0) : a.type == h.Ha.Me ? (c.elements.push(new h.i.jn(this.s, a)), c.Pg = !0) : a.type == h.Ha.Fe && (c.minHeight = Math.max(c.minHeight, a.$() && a.$().La ? this.s.Nz : this.s.Fu), c.Nj = !0);
    null == c.align && (c.align = a.align)
};
b.Xv = function() {
    for (var a = 0, c; c = this.rows[a]; a++) {
        var d = c.elements;
        c.elements = [];
        c.pp() && c.elements.push(new h.i.uf(this.s, this.ai(null, d[0])));
        if (d.length) {
            for (var e = 0; e < d.length - 1; e++) c.elements.push(d[e]), c.elements.push(new h.i.uf(this.s, this.ai(d[e], d[e + 1])));
            c.elements.push(d[d.length - 1]);
            c.vl() && c.elements.push(new h.i.uf(this.s, this.ai(d[d.length - 1], null)))
        }
    }
};
b.ai = function(a, c) {
    if (!a && c && h.i.o.ri(c)) return this.s.Ev;
    if (a && h.i.o.Tf(a) && !c) {
        if (h.i.o.Rl(a)) return this.s.Ie;
        if (h.i.o.Tg(a)) return this.s.Fc;
        if (h.i.o.ri(a)) return this.s.Ie
    }
    return a && h.i.o.Sl(a) && c && (h.i.o.Wj(c) || h.i.o.Vg(c)) ? c.Od : a && h.i.o.Ug(a) && c && (h.i.o.Wj(c) || h.i.o.Vg(c)) ? c.Od - this.s.pb : this.s.zd
};
b.Fq = function() {
    for (var a = 0, c; c = this.rows[a]; a++)
        if (c.Qb) jd(this, c);
        else {
            var d = this.El(c) - c.width;
            0 < d && kd(c, d);
            h.i.o.Ix(c) && (c.wd = c.width)
        }
};
b.El = function() {
    return this.width - this.Td
};

function kd(a, c) {
    a: {
        var d = 0;
        for (var e; e = a.elements[d]; d++)
            if (h.i.o.sd(e)) {
                d = e;
                break a
            } d = null
    }
    a: {
        e = a.elements.length - 1;
        for (var f; f = a.elements[e]; e--)
            if (h.i.o.sd(f)) {
                e = f;
                break a
            } e = null
    }
    if (a.Pg || a.Qb) a.wd += c;a.align == h.kb.Xd.Hb ? e.width += c : a.align == h.kb.Xd.Ym ? (d.width += c / 2, e.width += c / 2) : a.align == h.kb.Xd.Gc ? d.width += c : e.width += c;a.width += c
}

function jd(a, c) {
    var d = O(c),
        e = c.width - d.width,
        f = a.ph;
    e = f - e;
    0 < e && kd(c, e);
    e = c.width;
    f = a.El(c);
    d.width += f - e;
    d.height = Math.max(d.height, c.height);
    c.width += f - e;
    c.wd = Math.max(c.width, a.ph + c.pw)
}
b.jx = function() {
    return this.s.zd
};
b.Xw = function(a, c) {
    return h.i.o.sd(c) ? a.Lb + c.height / 2 : h.i.o.xo(a) ? (a = a.Lb + a.height - a.ol, h.i.o.Vg(c) ? a + c.height / 2 : a - c.height / 2) : h.i.o.Go(a) ? h.i.o.pi(c) ? a.Ef - c.height / 2 : a.Ef + c.height / 2 : a.Lb + a.height / 2
};

function ld(a, c) {
    for (var d = c.sa, e = 0, f; f = c.elements[e]; e++) h.i.o.sd(f) && (f.height = c.height), f.sa = d, f.Dg = a.Xw(c, f), d += f.width
}
b.Mw = function() {
    for (var a = 0, c = 0, d = 0, e; e = this.rows[d]; d++) e.Lb = c, e.sa = this.Td, c += e.height, a = Math.max(a, e.wd), ld(this, e);
    this.S && this.Fa.ca && this.Fa.ca.isConnected() && (a = Math.max(a, r(this.Fa.ca.ra()).width));
    this.vh = a + this.Td;
    this.height = c;
    this.op = this.Rb.Ef;
    this.rb.fe = c - this.rb.ol
};
h.i.Rc = function(a) {
    this.le = [];
    this.nf = null;
    this.s = a
};
h.i.Rc.Qe = {
    VE: !0,
    IC: !0,
    rows: !0,
    JC: !0,
    sw: !0,
    PB: !0,
    ow: !0,
    Ja: !0
};

function md(a, c, d) {
    if (h.i.Rc.Qe.JC) {
        var e = c.sa;
        d && (e = -(e + c.width));
        d = c.Dg - c.height / 2;
        a.le.push(h.g.j.J(h.g.D.Mb, {
            "class": "rowRenderingRect blockRenderDebug",
            x: e,
            y: d,
            width: c.width,
            height: c.height,
            stroke: "black",
            fill: "none",
            "stroke-width": "1px"
        }, a.nf));
        h.i.o.df(c) && c.Hj instanceof h.hd && a.le.push(h.g.j.J(h.g.D.Mb, {
            "class": "rowRenderingRect blockRenderDebug",
            x: e,
            y: d + a.s.Op,
            width: c.width,
            height: "0.1px",
            stroke: "red",
            fill: "none",
            "stroke-width": "0.5px"
        }, a.nf))
    }
    h.i.o.Tf(c) && h.i.Rc.Qe.sw && nd(a, c.rc)
}

function nd(a, c) {
    if (h.i.Rc.Qe.sw) {
        if (c.type == h.X.Zb) {
            var d = 4;
            var e = "magenta";
            var f = "none"
        } else c.type == h.X.Tc ? (d = 2, f = e = "magenta") : c.type == h.X.$b ? (d = 4, e = "goldenrod", f = "none") : c.type == h.X.kd && (d = 2, f = e = "goldenrod");
        a.le.push(h.g.j.J(h.g.D.wu, {
            "class": "blockRenderDebug",
            cx: c.Xf.x,
            cy: c.Xf.y,
            r: d,
            fill: f,
            stroke: e
        }, a.nf))
    }
}

function od(a, c, d) {
    for (var e = 0, f; f = a.le[e]; e++) h.g.j.removeNode(f);
    a.le = [];
    a.nf = c.oa();
    a.wE = "#" + Math.floor(16777215 * Math.random()).toString(16);
    f = e = 0;
    for (var g; g = d.rows[f]; f++) {
        if (h.i.o.GD(g)) {
            var k = e;
            if (h.i.Rc.Qe.VE) {
                var l = Math.abs(g.height),
                    m = 0 > g.height;
                m && (k -= l);
                a.le.push(h.g.j.J(h.g.D.Mb, {
                    "class": "rowSpacerRect blockRenderDebug",
                    x: d.I ? -(g.sa + g.width) : g.sa,
                    y: k,
                    width: g.width,
                    height: l,
                    stroke: m ? "black" : "blue",
                    fill: "blue",
                    "fill-opacity": "0.5",
                    "stroke-width": "1px"
                }, a.nf))
            }
        } else {
            m = a;
            l = g;
            k = d.I;
            for (var n =
                    0, q = l.elements.length; n < q; n++) {
                var p = l.elements[n];
                if (p)
                    if (h.i.o.sd(p)) {
                        if (h.i.Rc.Qe.IC) {
                            var u = Math.abs(p.width),
                                H = 0 > p.width,
                                L = H ? p.sa - u : p.sa;
                            k && (L = -(L + u));
                            m.le.push(h.g.j.J(h.g.D.Mb, {
                                "class": "elemSpacerRect blockRenderDebug",
                                x: L,
                                y: p.Dg - p.height / 2,
                                width: u,
                                height: p.height,
                                stroke: "pink",
                                fill: H ? "black" : "pink",
                                "fill-opacity": "0.5",
                                "stroke-width": "1px"
                            }, m.nf))
                        }
                    } else md(m, p, k);
                else console.warn("A row has an undefined or null element.", l, p)
            }
            h.i.Rc.Qe.rows && (m.le.push(h.g.j.J(h.g.D.Mb, {
                "class": "elemRenderingRect blockRenderDebug",
                x: k ? -(l.sa + l.width) : l.sa,
                y: l.Lb,
                width: l.width,
                height: l.height,
                stroke: "red",
                fill: "none",
                "stroke-width": "1px"
            }, m.nf)), h.i.o.Ix(l) || h.i.Rc.Qe.ow && m.le.push(h.g.j.J(h.g.D.Mb, {
                "class": "connectedBlockWidth blockRenderDebug",
                x: k ? -(l.sa + l.wd) : l.sa,
                y: l.Lb,
                width: l.wd,
                height: l.height,
                stroke: m.wE,
                fill: "none",
                "stroke-width": "1px",
                "stroke-dasharray": "3,3"
            }, m.nf)))
        }
        e += g.height
    }
    c.aa && nd(a, c.aa);
    c.ca && nd(a, c.ca);
    c.S && nd(a, c.S);
    d.UE && md(a, d.UE, d.I);
    h.i.Rc.Qe.PB && (e = d.I ? -d.width : 0, a.le.push(h.g.j.J(h.g.D.Mb, {
        "class": "blockBoundingBox blockRenderDebug",
        x: e,
        y: 0,
        width: d.width,
        height: d.height,
        stroke: "black",
        fill: "none",
        "stroke-width": "1px",
        "stroke-dasharray": "5,5"
    }, a.nf)), h.i.Rc.Qe.ow && (e = d.I ? -d.vh : 0, a.le.push(h.g.j.J(h.g.D.Mb, {
        "class": "blockRenderDebug",
        x: e,
        y: 0,
        width: d.vh,
        height: d.height,
        stroke: "#DF57BC",
        fill: "none",
        "stroke-width": "1px",
        "stroke-dasharray": "3,3"
    }, a.nf))));
    pd(a, c.wb.Eb)
}

function pd(a, c) {
    h.i.Rc.Qe.Ja && (c.setAttribute("filter", "url(#" + a.s.Bw + ")"), setTimeout(function() {
        c.setAttribute("filter", "")
    }, 100))
};
h.i.Cc = function(a, c) {
    this.Fa = a;
    this.pa = c;
    a.Za();
    this.wo = this.Ma = "";
    this.s = c.mb.ga()
};
b = h.i.Cc.prototype;
b.draw = function() {
    qd(this);
    rd(this);
    sd(this);
    this.Fa.wb.Nt(this.Ma + "\n" + this.wo);
    this.pa.I && this.Fa.wb.Qr();
    h.i.Nm && od(this.Fa.Et, this.Fa, this.pa);
    td(this)
};

function td(a) {
    a.Fa.height = a.pa.height;
    a.Fa.width = a.pa.vh
}

function qd(a) {
    for (var c = 0, d; d = a.pa.vx[c]; c++) d.icon.zD.setAttribute("display", "none")
}

function rd(a) {
    a.Jr();
    for (var c = 1; c < a.pa.rows.length - 1; c++) {
        var d = a.pa.rows[c];
        d.px ? a.tl(d) : d.Qb ? a.Ir(d) : d.Pg ? a.Kr(d) : a.Kw(d)
    }
    a.Fr();
    a.Hr()
}
b.Jr = function() {
    var a = this.pa.Rb,
        c = a.elements,
        d = this.pa.Rb;
    if (d.connection) {
        var e = d.sa + d.Od;
        F(d.connection.rc, this.pa.I ? -e : e, 0)
    }
    this.Ma += h.g.A.moveBy(a.sa, this.pa.op);
    for (d = 0; e = c[d]; d++) h.i.o.Ug(e) ? this.Ma += this.s.Ok.au : h.i.o.Gx(e) ? this.Ma += this.s.Ok.sF : h.i.o.Wj(e) ? this.Ma += e.shape.hh : h.i.o.pi(e) ? this.Ma += this.s.ij.path : h.i.o.sd(e) && (this.Ma += h.g.A.Y("h", e.width));
    this.Ma += h.g.A.Y("v", a.height)
};
b.tl = function(a) {
    this.Ma += this.s.aj.path + h.g.A.Y("v", a.height - this.s.aj.height)
};
b.Kr = function(a) {
    var c = O(a);
    this.sy(a);
    var d = "function" == typeof c.shape.Qd ? c.shape.Qd(c.height) : c.shape.Qd;
    this.Ma += h.g.A.Y("H", c.sa + c.width) + d + h.g.A.Y("v", a.height - c.yj)
};
b.Ir = function(a) {
    var c = O(a);
    this.Ma += h.g.A.Y("H", c.sa + c.Od + c.shape.width) + (c.shape.ny + h.g.A.Y("h", -(c.Od - this.s.nn.width)) + this.s.nn.nt) + h.g.A.Y("v", a.height - 2 * this.s.nn.height) + this.s.nn.ep + h.g.A.Y("H", a.sa + a.width);
    this.vy(a)
};
b.Kw = function(a) {
    this.Ma += h.g.A.Y("V", a.Lb + a.height)
};
b.Fr = function() {
    var a = this.pa.rb,
        c = a.elements;
    this.uy();
    for (var d = 0, e = "", f = c.length - 1, g; g = c[f]; f--) h.i.o.Vg(g) ? e += g.shape.ny : h.i.o.Sl(g) ? e += h.g.A.Y("H", a.sa) : h.i.o.Ug(g) ? e += this.s.Ok.Pq : h.i.o.Gx(g) ? (e += this.s.Ok.RB, d = this.s.Ok.TE) : h.i.o.sd(g) && (e += h.g.A.Y("h", -1 * g.width));
    this.Ma += h.g.A.Y("V", a.fe - d);
    this.Ma += e
};
b.Hr = function() {
    var a = this.pa.S;
    if (this.pa.S) {
        var c = this.pa.Td + this.pa.S.fl;
        F(this.Fa.S, this.pa.I ? -c : c, this.pa.S.od)
    }
    a && (c = a.od + a.height, a = "function" == typeof a.shape.gm ? a.shape.gm(a.height) : a.shape.gm, this.Ma += h.g.A.Y("V", c) + a);
    this.Ma += "z"
};

function sd(a) {
    for (var c = 0, d; d = a.pa.rows[c]; c++)
        for (var e = 0, f; f = d.elements[e]; e++)
            if (h.i.o.Tg(f)) a.Gr(f);
            else if (h.i.o.Sj(f) || h.i.o.df(f)) {
        var g = a;
        if (h.i.o.df(f)) var k = f.Hj.oa();
        else h.i.o.Sj(f) && (k = f.icon.zD);
        var l = f.Dg - f.height / 2,
            m = f.sa,
            n = "";
        g.pa.I && (m = -(m + f.width), f.QC && (m += f.width, n = "scale(-1 1)"));
        h.i.o.Sj(f) ? (k.setAttribute("display", "block"), k.setAttribute("transform", "translate(" + m + "," + l + ")"), f.icon.jC()) : k.setAttribute("transform", "translate(" + m + "," + l + ")" + n);
        g.pa.rd && k.setAttribute("display",
            "none")
    }
}
b.Gr = function(a) {
    var c = a.width,
        d = a.height,
        e = a.od,
        f = a.yj + e;
    this.wo += h.g.A.moveTo(a.sa + a.Re, a.Dg - d / 2) + h.g.A.Y("v", e) + a.shape.Qd + h.g.A.Y("v", d - f) + h.g.A.Y("h", c - a.Re) + h.g.A.Y("v", -d) + "z";
    this.ty(a)
};
b.ty = function(a) {
    var c = a.Dg - a.height / 2;
    if (a.rc) {
        var d = a.sa + a.Re + a.fl;
        this.pa.I && (d *= -1);
        F(a.rc, d, c + a.od)
    }
};
b.vy = function(a) {
    var c = O(a);
    if (c.rc) {
        var d = a.sa + a.ph + c.Od;
        this.pa.I && (d *= -1);
        F(c.rc, d, a.Lb)
    }
};
b.sy = function(a) {
    var c = O(a);
    if (c.rc) {
        var d = a.sa + a.width;
        this.pa.I && (d *= -1);
        F(c.rc, d, a.Lb)
    }
};
b.uy = function() {
    var a = this.pa.rb;
    if (a.connection) {
        var c = a.connection,
            d = c.sa;
        F(c.rc, this.pa.I ? -d : d, a.fe)
    }
};
h.h.ng = function(a, c, d, e) {
    var f = a ? a.B.id : void 0;
    e && e.vb() == h.F.types.Wc && (f = e.Ca.id);
    h.h.ng.v.constructor.call(this, f);
    this.gb = a ? a.id : null;
    this.ay = d;
    this.Xx = e;
    this.bf = c
};
h.g.object.V(h.h.ng, h.h.ee);
h.h.ng.prototype.type = h.h.aq;
h.h.ng.prototype.qa = function() {
    var a = h.h.ng.v.qa.call(this);
    a.isCursor = this.bf;
    a.blockId = this.gb;
    a.oldNode = this.ay;
    a.newNode = this.Xx;
    return a
};
h.h.ng.prototype.ba = function(a) {
    h.h.ng.v.ba.call(this, a);
    this.bf = a.isCursor;
    this.gb = a.blockId;
    this.ay = a.oldNode;
    this.Xx = a.newNode
};
h.u.register(h.u.R.Gb, h.h.aq, h.h.ng);
h.i.og = function(a, c, d) {
    this.m = a;
    this.Ms = d;
    this.fm = null;
    this.s = c;
    this.Aj = null;
    a = this.bf() ? this.s.cn : this.s.pn;
    this.Dd = d.sb || a
};
h.i.og.Bz = "blocklyCursor";
h.i.og.GA = "blocklyMarker";
h.i.og.nA = .75;
b = h.i.og.prototype;
b.oa = function() {
    return this.O
};
b.Gl = function() {
    return this.Ms
};
b.bf = function() {
    return "cursor" == this.Ms.type
};
b.Va = function() {
    var a = this.bf() ? h.i.og.Bz : h.i.og.GA;
    this.O = h.g.j.J(h.g.D.Sc, {
        "class": a
    }, null);
    this.Wf = h.g.j.J(h.g.D.Sc, {
        width: this.s.fn,
        height: this.s.Pv
    }, this.O);
    this.Zg = h.g.j.J(h.g.D.Mb, {
        width: this.s.fn,
        height: this.s.Pv,
        style: "display: none"
    }, this.Wf);
    this.yi = h.g.j.J(h.g.D.Mb, {
        "class": "blocklyVerticalMarker",
        rx: 10,
        ry: 10,
        style: "display: none"
    }, this.Wf);
    this.xi = h.g.j.J(h.g.D.Je, {
        transform: "",
        style: "display: none"
    }, this.Wf);
    this.Vf = h.g.j.J(h.g.D.Je, {
            transform: "",
            style: "display: none",
            fill: "none",
            "stroke-width": this.s.Cz
        },
        this.Wf);
    this.bf() && (a = {
        attributeType: "XML",
        attributeName: "fill",
        dur: "1s",
        values: this.Dd + ";transparent;transparent;",
        repeatCount: "indefinite"
    }, h.g.j.J(h.g.D.yp, a, this.Zg), h.g.j.J(h.g.D.yp, a, this.xi), a.attributeName = "stroke", h.g.j.J(h.g.D.yp, a, this.Vf));
    return this.O
};

function ud(a, c) {
    a.bf() ? (a.fm && a.fm.Zf(null), c.Zf(a.oa())) : (a.fm && a.fm.nh(null), c.nh(a.oa()));
    a.fm = c
}
b.draw = function(a, c) {
    if (c) {
        this.s = this.m.mb.ga();
        var d = this.bf() ? this.s.cn : this.s.pn;
        this.Dd = this.Ms.sb || d;
        this.Zg.setAttribute("fill", this.Dd);
        this.yi.setAttribute("stroke", this.Dd);
        this.xi.setAttribute("fill", this.Dd);
        this.Vf.setAttribute("stroke", this.Dd);
        this.bf() && (d = this.Dd + ";transparent;transparent;", this.Zg.firstChild.setAttribute("values", d), this.xi.firstChild.setAttribute("values", d), this.Vf.firstChild.setAttribute("values", d));
        d = c.Ca.type;
        if (c.vb() == h.F.types.Sb) vd(this, c);
        else if (c.vb() ==
            h.F.types.Kh) vd(this, c);
        else if (d == h.X.Zb) {
            var e = c.Ca;
            d = e.$();
            var f = e.Xf.x,
                g = e.Xf.y;
            e = h.g.A.moveTo(0, 0) + xa(this.s, e).Qd;
            this.xi.setAttribute("d", e);
            this.xi.setAttribute("transform", "translate(" + f + "," + g + ")" + (this.m.I ? " scale(-1 1)" : ""));
            this.Aj = this.xi;
            ud(this, d);
            wd(this)
        } else if (d == h.X.$b) g = c.Ca, d = g.$(), f = 0, g = g.Xf.y, e = r(d).width, this.m.I && (f = -e), xd(this, f, g, e), ud(this, d), wd(this);
        else if (c.vb() == h.F.types.tg) vd(this, c);
        else if (c.vb() == h.F.types.Dc) d = c.Ca, f = d.Pf().width, g = d.Pf().height, yd(this, 0, 0,
            f, g), ud(this, d), wd(this);
        else if (c.vb() == h.F.types.Wc) f = c.hz, d = f.x, f = f.y, this.m.I && (d -= this.s.fn), xd(this, d, f, this.s.fn), ud(this, this.m), wd(this);
        else if (c.vb() == h.F.types.Mh) {
            d = c.Ca;
            g = r(d);
            f = g.width + this.s.dn;
            g = g.height + this.s.dn;
            var k = e = -this.s.dn / 2,
                l = -this.s.dn / 2;
            this.m.I && (k = -(f + e));
            yd(this, k, l, f, g);
            ud(this, d);
            wd(this)
        }
        d = c.$();
        a = new(h.h.get(h.h.aq))(d, this.bf(), a, c);
        h.h.Ga(a);
        a = this.Aj.childNodes[0];
        void 0 !== a && a.beginElement && a.beginElement()
    } else this.$a()
};

function vd(a, c) {
    c = c.$();
    var d = c.width,
        e = c.height,
        f = e * h.i.og.nA,
        g = a.s.Az;
    if (c.aa) {
        var k = xa(a.s, c.aa);
        e = k;
        d = h.g.A.moveBy(-g, f) + h.g.A.Y("V", -g) + h.g.A.Y("H", a.s.Nk) + e.hh + h.g.A.Y("H", d + 2 * g) + h.g.A.Y("V", f);
        a.Vf.setAttribute("d", d)
    } else c.S ? (f = k = xa(a.s, c.S), d = h.g.A.moveBy(d, 0) + h.g.A.Y("h", -(d - f.width)) + h.g.A.Y("v", a.s.lj) + f.Qd + h.g.A.Y("V", e) + h.g.A.Y("H", d), a.Vf.setAttribute("d", d)) : (d = h.g.A.moveBy(-g, f) + h.g.A.Y("V", -g) + h.g.A.Y("H", d + 2 * g) + h.g.A.Y("V", f), a.Vf.setAttribute("d", d));
    a.m.I && a.zl(a.Vf);
    a.Aj = a.Vf;
    ud(a, c);
    wd(a)
}

function wd(a) {
    a.$a();
    a.Aj.style.display = ""
}

function xd(a, c, d, e) {
    a.Zg.setAttribute("x", c);
    a.Zg.setAttribute("y", d);
    a.Zg.setAttribute("width", e);
    a.Aj = a.Zg
}

function yd(a, c, d, e, f) {
    a.yi.setAttribute("x", c);
    a.yi.setAttribute("y", d);
    a.yi.setAttribute("width", e);
    a.yi.setAttribute("height", f);
    a.Aj = a.yi
}
b.zl = function(a) {
    a.setAttribute("transform", "scale(-1 1)")
};
b.$a = function() {
    this.Zg.style.display = "none";
    this.yi.style.display = "none";
    this.xi.style.display = "none";
    this.Vf.style.display = "none"
};
b.H = function() {
    this.O && h.g.j.removeNode(this.O)
};
h.i.vf = function(a, c, d) {
    this.kb = d;
    this.mf = a;
    this.Eb = h.g.j.J(h.g.D.Je, {
        "class": "blocklyPath"
    }, this.mf);
    this.style = c;
    this.Ls = this.ml = null
};
b = h.i.vf.prototype;
b.Nt = function(a) {
    this.Eb.setAttribute("d", a)
};
b.Qr = function() {
    this.Eb.setAttribute("transform", "scale(-1 1)")
};
b.Zf = function(a) {
    a ? (this.mf.appendChild(a), this.ml = a) : this.ml = null
};
b.nh = function(a) {
    a ? (this.ml ? this.mf.insertBefore(a, this.ml) : this.mf.appendChild(a), this.Ls = a) : this.Ls = null
};
b.ec = function(a) {
    this.Eb.setAttribute("stroke", this.style.xj);
    this.Eb.setAttribute("fill", this.style.Th);
    this.Wy(a.La);
    this.du(!a.isEnabled() || ac(a))
};
b.Li = function(a) {
    this.style = a
};

function B(a, c, d) {
    d ? h.g.j.Nb(a.mf, c) : h.g.j.fd(a.mf, c)
}
b.Uy = function(a) {
    a ? this.Eb.setAttribute("filter", "url(#" + this.kb.lo + ")") : this.Eb.setAttribute("filter", "none")
};
b.Wy = function(a) {
    a && (this.Eb.setAttribute("stroke", "none"), this.Eb.setAttribute("fill", this.style.Sn))
};
b.du = function(a) {
    B(this, "blocklyDisabled", a);
    a && this.Eb.setAttribute("fill", "url(#" + this.kb.Gw + ")")
};
h.i.wf = function(a) {
    this.name = a;
    this.jt = this.s = null
};
b = h.i.wf.prototype;
b.me = function() {
    return this.name + "-renderer"
};
b.Ba = function(a, c) {
    this.s = this.Gs();
    c && (this.jt = c, h.g.object.$g(this.s, c));
    this.s.tm(a);
    this.s.Ba()
};
b.Va = function(a, c) {
    this.s.Va(a, this.name + "-" + c.name, "." + this.me() + "." + c.me())
};
b.vt = function(a, c) {
    var d = this.ga();
    d.H();
    this.s = this.Gs();
    this.jt && h.g.object.$g(this.s, this.jt);
    this.s.lm = d.lm;
    this.s.tm(c);
    this.s.Ba();
    this.Va(a, c)
};
b.H = function() {
    this.s && this.s.H()
};
b.Gs = function() {
    return new h.i.tf
};
b.Ox = function(a) {
    return new h.i.ae(this, a)
};
b.Mx = function(a, c) {
    return new h.i.Cc(a, c)
};
b.Nx = function(a, c) {
    return new h.i.vf(a, c, this.s)
};
b.ga = function() {
    return this.s
};
b.Ja = function(a) {
    if (h.i.Nm && !a.Et) {
        if (!h.i.Rc) throw Error("Missing require for Blockly.blockRendering.Debug");
        var c = new h.i.Rc(this.ga());
        a.Et = c
    }
    c = this.Ox(a);
    c.measure();
    this.Mx(a, c).draw()
};
h.ea = {};
h.ea.tf = function() {
    h.ea.tf.v.constructor.call(this);
    this.Pp = !1;
    this.bc = 1;
    this.HA = 30;
    this.Cv = -this.fq / 2
};
h.g.object.V(h.ea.tf, h.i.tf);
h.ea.tf.prototype.Ur = function(a) {
    return h.ea.tf.v.Ur.call(this, a).concat([a + " .blocklyInsertionMarker>.blocklyPathLight,", a + " .blocklyInsertionMarker>.blocklyPathDark {", "fill-opacity: " + this.mn + ";", "stroke: none;", "}"])
};
h.ea.Qu = function(a) {
    this.pa = a;
    this.Ol = this.la = "";
    this.cc = this.pa.I;
    a = a.mb;
    this.s = a.ga();
    this.pd = a.pd;
    this.ad = this.pd.OFFSET;
    this.ht = this.pd.TA;
    this.Rj = this.pd.wA;
    this.km = this.pd.kq;
    this.fE = this.pd.dj;
    this.iF = this.pd.ij;
    this.Jx = this.pd.aj
};
h.ea.Qu.prototype.tl = function(a) {
    this.pa.I && (this.la += this.Jx.hh + h.g.A.Y("v", a.height - this.Jx.height - this.ad))
};

function zd(a, c) {
    var d = c.sa + c.width - a.ad;
    c.Qw && (a.la += h.g.A.Y("H", d));
    a.cc && (a.la += h.g.A.Y("H", d), c.height > a.ad && (a.la += h.g.A.Y("V", c.Lb + c.height - a.ad)))
};
h.ea.mg = function(a, c) {
    h.ea.mg.v.constructor.call(this, a, c);
    this.Fg && (this.width += this.s.bc, this.height += this.s.bc)
};
h.g.object.V(h.ea.mg, h.i.mg);
h.ea.vg = function(a, c) {
    h.ea.vg.v.constructor.call(this, a, c);
    this.Fg && (this.height += this.s.bc)
};
h.g.object.V(h.ea.vg, h.i.vg);
h.ea.ae = function(a, c) {
    h.ea.ae.v.constructor.call(this, a, c)
};
h.g.object.V(h.ea.ae, h.i.ae);
b = h.ea.ae.prototype;
b.rt = function() {
    h.ea.ae.v.rt.call(this);
    this.Fa.U.length && this.Fa.U[this.Fa.U.length - 1].type == h.Ha.pc || (this.rb.minHeight = this.s.zd - this.s.bc)
};
b.Yv = function(a, c) {
    this.Tj && a.type == h.Ha.Me ? (c.elements.push(new h.ea.mg(this.s, a)), c.ls = !0) : a.type == h.Ha.pc ? (c.elements.push(new h.ea.vg(this.s, a)), c.Qb = !0) : a.type == h.Ha.Me ? (c.elements.push(new h.i.jn(this.s, a)), c.Pg = !0) : a.type == h.Ha.Fe && (c.minHeight = Math.max(c.minHeight, this.s.Fu), c.Nj = !0);
    this.Tj || null != c.align || (c.align = a.align)
};
b.Xv = function() {
    for (var a = !1, c = 0, d; d = this.rows[c]; c++) d.Pg && (a = !0);
    for (c = 0; d = this.rows[c]; c++) {
        var e = d.elements;
        d.elements = [];
        d.pp() && d.elements.push(new h.i.uf(this.s, this.ai(null, e[0])));
        if (e.length) {
            for (var f = 0; f < e.length - 1; f++) {
                d.elements.push(e[f]);
                var g = this.ai(e[f], e[f + 1]);
                d.elements.push(new h.i.uf(this.s, g))
            }
            d.elements.push(e[e.length - 1]);
            d.vl() && (g = this.ai(e[e.length - 1], null), a && d.Nj && (g += this.s.Cn), d.elements.push(new h.i.uf(this.s, g)))
        }
    }
};
b.ai = function(a, c) {
    if (!a) return c && h.i.o.df(c) && c.Kd ? this.s.zd : c && h.i.o.Tg(c) ? this.s.ev : c && h.i.o.ri(c) ? this.s.Ev : this.s.Fc;
    if (!h.i.o.Tf(a) && (!c || h.i.o.ri(c))) return h.i.o.df(a) && a.Kd ? this.s.zd : h.i.o.Sj(a) ? 2 * this.s.Fc + 1 : h.i.o.pi(a) ? this.s.Ie : h.i.o.MD(a) ? this.s.Fc : h.i.o.Ug(a) ? this.s.KA : h.i.o.Ex(a) ? this.s.Ie : this.s.Fc;
    if (h.i.o.Tf(a) && !c) {
        if (h.i.o.Rl(a)) return this.s.Ie;
        if (h.i.o.Tg(a)) return this.s.Fc;
        if (h.i.o.ri(a)) return this.s.Ie
    }
    if (!h.i.o.Tf(a) && c && h.i.o.Tf(c)) {
        if (h.i.o.df(a) && a.Kd) {
            if (h.i.o.Tg(c) ||
                h.i.o.Rl(c)) return this.s.jB
        } else {
            if (h.i.o.Tg(c) || h.i.o.Rl(c)) return this.s.ev;
            if (h.i.o.ri(c)) return this.s.Fc
        }
        return this.s.Fc - 1
    }
    if (h.i.o.Sj(a) && c && !h.i.o.Tf(c)) return this.s.Fc;
    if (h.i.o.Tg(a) && c && h.i.o.df(c)) return c.Kd ? this.s.zd : this.s.Fc;
    if (h.i.o.Sl(a) && c) {
        if (h.i.o.pi(c)) return this.s.Ie;
        if (h.i.o.Wj(c)) return c.Od;
        if (h.i.o.Vg(c)) return a = (this.I ? 1 : -1) * this.s.bc / 2, c.Od + a
    }
    if (h.i.o.Ug(a) && c) {
        if (h.i.o.Wj(c)) return c.Od - this.s.pb;
        if (h.i.o.Vg(c)) return a = (this.I ? 1 : -1) * this.s.bc / 2, c.Od - this.s.pb + a
    }
    return h.i.o.df(a) &&
        c && h.i.o.df(c) && a.Kd == c.Kd || c && h.i.o.Ex(c) ? this.s.Fc : this.s.zd
};
b.jx = function(a, c) {
    return h.i.o.Go(a) && h.i.o.xo(c) ? this.s.Oz : h.i.o.Go(a) || h.i.o.xo(c) ? this.s.Ie : a.Pg && c.Pg ? this.s.Fc : !a.Qb && c.Qb ? this.s.qz : a.Qb && c.Qb || !a.Qb && c.Nj || a.Nj ? this.s.Fc : this.s.zd
};
b.Xw = function(a, c) {
    if (h.i.o.sd(c)) return a.Lb + c.height / 2;
    if (h.i.o.xo(a)) return a = a.Lb + a.height - a.ol, h.i.o.Vg(c) ? a + c.height / 2 : a - c.height / 2;
    if (h.i.o.Go(a)) return h.i.o.pi(c) ? a.Ef - c.height / 2 : a.Ef + c.height / 2;
    var d = a.Lb;
    h.i.o.df(c) || h.i.o.Sj(c) ? (d += c.height / 2, (a.ls || a.Qb) && c.height + this.s.Fv <= a.height && (d += this.s.Fv)) : d = h.i.o.Tg(c) ? d + c.height / 2 : d + a.height / 2;
    return d
};
b.Fq = function() {
    if (this.Tj) {
        for (var a = 0, c = null, d = this.rows.length - 1, e; e = this.rows[d]; d--) e.Ts = a, h.i.o.HD(e) && (e.Qb && jd(this, e), c && c.Qb && e.width < c.width ? e.Ts = c.width : a = e.width, c = e);
        for (d = a = 0; e = this.rows[d]; d++) e.Qb ? a = this.El(e) : h.i.o.sd(e) ? e.width = Math.max(a, e.Ts) : (a = Math.max(a, e.Ts) - e.width, 0 < a && kd(e, a), a = e.width)
    } else h.ea.ae.v.Fq.call(this)
};
b.El = function(a) {
    return this.Tj && a.Qb ? this.ph + this.s.HA + this.Td : h.ea.ae.v.El.call(this, a)
};
b.Mw = function() {
    for (var a = 0, c = 0, d = 0, e; e = this.rows[d]; d++) {
        e.Lb = c;
        e.sa = this.Td;
        c += e.height;
        a = Math.max(a, e.wd);
        var f = c - this.Rb.rj;
        e == this.rb && f < this.s.Jk && (f = this.s.Jk - f, this.rb.height += f, c += f);
        ld(this, e)
    }
    this.S && this.Fa.ca && this.Fa.ca.isConnected() && (a = Math.max(a, r(this.Fa.ca.ra()).width - this.s.bc));
    this.rb.fe = c - this.rb.ol;
    this.vh = a + this.Td + this.s.bc;
    this.width += this.s.bc;
    this.height = c + this.s.bc;
    this.op = this.Rb.Ef
};
h.ea.Cc = function(a, c) {
    h.ea.Cc.v.constructor.call(this, a, c);
    this.af = new h.ea.Qu(c)
};
h.g.object.V(h.ea.Cc, h.i.Cc);
b = h.ea.Cc.prototype;
b.draw = function() {
    qd(this);
    rd(this);
    sd(this);
    var a = this.Fa.wb;
    a.Nt(this.Ma + "\n" + this.wo);
    var c = this.af;
    a.Mi.setAttribute("d", c.la + "\n" + c.Ol);
    this.pa.I && a.Qr();
    h.i.Nm && od(this.Fa.Et, this.Fa, this.pa);
    td(this)
};
b.Jr = function() {
    var a = this.af,
        c = this.pa.Rb;
    a.la += h.g.A.moveBy(c.sa, a.pa.op);
    for (var d = 0, e; e = c.elements[d]; d++) h.i.o.Sl(e) ? a.la += a.pd.Bv : h.i.o.Ug(e) ? a.la += a.ht.au(a.cc) : h.i.o.Wj(e) ? a.la += a.fE.hh : h.i.o.pi(e) ? a.la += a.iF.path(a.cc) : h.i.o.sd(e) && 0 != e.width && (a.la += h.g.A.Y("H", e.sa + e.width - a.ad));
    a.la += h.g.A.Y("H", c.sa + c.width - a.ad);
    zd(this.af, this.pa.Rb);
    h.ea.Cc.v.Jr.call(this)
};
b.tl = function(a) {
    this.af.tl(a);
    h.ea.Cc.v.tl.call(this, a)
};
b.Kr = function(a) {
    var c = this.af,
        d = O(a);
    if (c.cc) {
        var e = a.height - d.yj;
        c.la += h.g.A.moveTo(d.sa + d.width - c.ad, a.Lb) + c.km.Qd(c.cc) + h.g.A.Y("v", e)
    } else c.la += h.g.A.moveTo(d.sa + d.width, a.Lb) + c.km.Qd(c.cc);
    h.ea.Cc.v.Kr.call(this, a)
};
b.Ir = function(a) {
    var c = this.af,
        d = O(a);
    if (c.cc) {
        var e = a.height - 2 * c.Rj.height;
        c.la += h.g.A.moveTo(d.sa, a.Lb) + c.Rj.nt(c.cc) + h.g.A.Y("v", e) + c.Rj.ep(c.cc) + h.g.A.lineTo(a.width - d.sa - c.Rj.width, 0)
    } else c.la += h.g.A.moveTo(d.sa, a.Lb + a.height) + c.Rj.ep(c.cc) + h.g.A.lineTo(a.width - d.sa - c.Rj.width, 0);
    h.ea.Cc.v.Ir.call(this, a)
};
b.Kw = function(a) {
    zd(this.af, a);
    this.Ma += h.g.A.Y("H", a.sa + a.width) + h.g.A.Y("V", a.Lb + a.height)
};
b.Fr = function() {
    var a = this.af,
        c = this.pa.rb;
    if (a.cc) a.la += h.g.A.Y("V", c.fe - a.ad);
    else {
        var d = a.pa.rb.elements[0];
        h.i.o.Sl(d) ? a.la += h.g.A.moveTo(c.sa + a.ad, c.fe - a.ad) : h.i.o.Ug(d) && (a.la += h.g.A.moveTo(c.sa, c.fe), a.la += a.ht.Pq())
    }
    h.ea.Cc.v.Fr.call(this)
};
b.Hr = function() {
    var a = this.af,
        c = a.pa.S;
    c && (c = c.od + c.height, a.cc ? a.la += h.g.A.moveTo(a.pa.Td, c) : (a.la += h.g.A.moveTo(a.pa.Td + a.ad, a.pa.rb.fe - a.ad), a.la += h.g.A.Y("V", c)), a.la += a.km.gm(a.cc));
    a.cc || (c = a.pa.Rb, a.la = h.i.o.Ug(c.elements[0]) ? a.la + h.g.A.Y("V", a.ht.height) : a.la + h.g.A.Y("V", c.Ef + a.ad));
    h.ea.Cc.v.Hr.call(this)
};
b.Gr = function(a) {
    var c = this.af,
        d = c.ad,
        e = a.sa + a.Re,
        f = a.Dg - a.height / 2,
        g = a.width - a.Re,
        k = f + d;
    if (c.cc) {
        f = a.od - d;
        var l = a.height - (a.od + a.yj) + d;
        c.Ol += h.g.A.moveTo(e - d, k) + h.g.A.Y("v", f) + c.km.Qd(c.cc) + h.g.A.Y("v", l) + h.g.A.Y("h", g)
    } else c.Ol += h.g.A.moveTo(a.sa + a.width + d, k) + h.g.A.Y("v", a.height) + h.g.A.Y("h", -g) + h.g.A.moveTo(e, f + a.od) + c.km.Qd(c.cc);
    h.ea.Cc.v.Gr.call(this, a)
};
b.ty = function(a) {
    var c = a.Dg - a.height / 2;
    if (a.rc) {
        var d = a.sa + a.Re + this.s.bc;
        this.pa.I && (d *= -1);
        F(a.rc, d, c + a.od + this.s.bc)
    }
};
b.vy = function(a) {
    var c = O(a);
    if (c.rc) {
        var d = a.sa + a.ph + c.Od;
        d = this.pa.I ? -1 * d : d + this.s.bc;
        F(c.rc, d, a.Lb + this.s.bc)
    }
};
b.sy = function(a) {
    var c = O(a);
    if (c.rc) {
        var d = a.sa + a.width + this.s.bc;
        this.pa.I && (d *= -1);
        F(c.rc, d, a.Lb)
    }
};
b.uy = function() {
    var a = this.pa.rb;
    if (a.connection) {
        var c = a.connection,
            d = c.sa;
        F(c.rc, (this.pa.I ? -d : d) + this.s.bc / 2, a.fe + this.s.bc)
    }
};
h.ea.Pu = function(a) {
    this.zj = a;
    this.OFFSET = .5;
    this.Bv = h.g.A.moveBy(this.OFFSET, this.OFFSET)
};
b = h.ea.Pu.prototype;
b.Ba = function() {
    this.wA = Ad(this);
    this.TA = Bd(this);
    this.kq = this.Js();
    this.dj = this.Is();
    this.aj = this.Hs();
    this.ij = this.Ks()
};

function Ad(a) {
    var c = a.zj.pb;
    a = a.OFFSET;
    var d = (1 - Math.SQRT1_2) * (c + a) - a,
        e = h.g.A.moveBy(d, d) + h.g.A.arc("a", "0 0,0", c, h.g.A.Ia(-d - a, c - d)),
        f = h.g.A.arc("a", "0 0,0", c + a, h.g.A.Ia(c + a, c + a)),
        g = h.g.A.moveBy(d, -d) + h.g.A.arc("a", "0 0,0", c + a, h.g.A.Ia(c - d, d + a));
    return {
        width: c + a,
        height: c,
        nt: function(k) {
            return k ? e : ""
        },
        ep: function(k) {
            return k ? f : g
        }
    }
}

function Bd(a) {
    var c = a.zj.pb;
    a = a.OFFSET;
    var d = (1 - Math.SQRT1_2) * (c - a) + a,
        e = h.g.A.moveBy(d, d) + h.g.A.arc("a", "0 0,1", c - a, h.g.A.Ia(c - d, -d + a)),
        f = h.g.A.moveBy(a, c) + h.g.A.arc("a", "0 0,1", c - a, h.g.A.Ia(c, -c + a)),
        g = -d,
        k = h.g.A.moveBy(d, g) + h.g.A.arc("a", "0 0,1", c - a, h.g.A.Ia(-d + a, -g - c));
    return {
        height: c,
        au: function(l) {
            return l ? e : f
        },
        Pq: function() {
            return k
        }
    }
}
b.Js = function() {
    var a = this.zj.Cn,
        c = this.zj.Qk,
        d = h.g.A.moveBy(-2, -c + 3.4) + h.g.A.lineTo(-.45 * a, -2.1),
        e = h.g.A.Y("v", 2.5) + h.g.A.moveBy(.97 * -a, 2.5) + h.g.A.curve("q", [h.g.A.Ia(.05 * -a, 10), h.g.A.Ia(.3 * a, 9.5)]) + h.g.A.moveBy(.67 * a, -1.9) + h.g.A.Y("v", 2.5),
        f = h.g.A.Y("v", -1.5) + h.g.A.moveBy(-.92 * a, -.5) + h.g.A.curve("q", [h.g.A.Ia(-.19 * a, -5.5), h.g.A.Ia(0, -11)]) + h.g.A.moveBy(.92 * a, 1),
        g = h.g.A.moveBy(-5, c - .7) + h.g.A.lineTo(.46 * a, -2.1);
    return {
        width: a,
        height: c,
        gm: function(k) {
            return k ? d : f
        },
        Qd: function(k) {
            return k ? e : g
        }
    }
};
b.Is = function() {
    return {
        hh: h.g.A.Y("h", this.OFFSET) + this.zj.dj.hh
    }
};
b.Hs = function() {
    return {
        hh: h.g.A.lineTo(5.1, 2.6) + h.g.A.moveBy(-10.2, 6.8) + h.g.A.lineTo(5.1, 2.6),
        height: 12,
        width: 10.2
    }
};
b.Ks = function() {
    var a = this.zj.ij.height,
        c = h.g.A.moveBy(25, -8.7) + h.g.A.curve("c", [h.g.A.Ia(29.7, -6.2), h.g.A.Ia(57.2, -.5), h.g.A.Ia(75, 8.7)]),
        d = h.g.A.curve("c", [h.g.A.Ia(17.8, -9.2), h.g.A.Ia(45.3, -14.9), h.g.A.Ia(75, -8.7)]) + h.g.A.moveTo(100.5, a + .5);
    return {
        path: function(e) {
            return e ? c : d
        }
    }
};
h.ea.vf = function(a, c, d) {
    this.kb = d;
    this.mf = a;
    this.Em = h.g.j.J(h.g.D.Je, {
        "class": "blocklyPathDark",
        transform: "translate(1,1)"
    }, this.mf);
    this.Eb = h.g.j.J(h.g.D.Je, {
        "class": "blocklyPath"
    }, this.mf);
    this.Mi = h.g.j.J(h.g.D.Je, {
        "class": "blocklyPathLight"
    }, this.mf);
    this.dr = "#000000";
    this.style = c
};
h.g.object.V(h.ea.vf, h.i.vf);
b = h.ea.vf.prototype;
b.Nt = function(a) {
    this.Eb.setAttribute("d", a);
    this.Em.setAttribute("d", a)
};
b.Qr = function() {
    this.Eb.setAttribute("transform", "scale(-1 1)");
    this.Mi.setAttribute("transform", "scale(-1 1)");
    this.Em.setAttribute("transform", "translate(1,1) scale(-1 1)")
};
b.ec = function(a) {
    this.Mi.style.display = "";
    this.Em.style.display = "";
    this.Mi.setAttribute("stroke", this.style.xj);
    this.Em.setAttribute("fill", this.dr);
    h.ea.vf.v.ec.call(this, a);
    this.Eb.setAttribute("stroke", "none")
};
b.Li = function(a) {
    this.style = a;
    this.dr = h.g.sb.Mq("#000", this.style.Th, .2) || this.dr
};
b.Uy = function(a) {
    a ? (this.Eb.setAttribute("filter", "url(#" + this.kb.lo + ")"), this.Mi.style.display = "none") : (this.Eb.setAttribute("filter", "none"), this.Mi.style.display = "inline")
};
b.Wy = function(a) {
    a && (this.Mi.style.display = "none", this.Em.setAttribute("fill", this.style.Sn), this.Eb.setAttribute("stroke", "none"), this.Eb.setAttribute("fill", this.style.Sn))
};
b.du = function(a) {
    h.ea.vf.v.du.call(this, a);
    a && this.Eb.setAttribute("stroke", "none")
};
h.ea.wf = function(a) {
    h.ea.wf.v.constructor.call(this, a);
    this.pd = null
};
h.g.object.V(h.ea.wf, h.i.wf);
b = h.ea.wf.prototype;
b.Ba = function(a, c) {
    h.ea.wf.v.Ba.call(this, a, c);
    this.pd = new h.ea.Pu(this.ga());
    this.pd.Ba()
};
b.vt = function(a, c) {
    h.ea.wf.v.vt.call(this, a, c);
    this.pd.Ba()
};
b.Gs = function() {
    return new h.ea.tf
};
b.Ox = function(a) {
    return new h.ea.ae(this, a)
};
b.Mx = function(a, c) {
    return new h.ea.Cc(a, c)
};
b.Nx = function(a, c) {
    return new h.ea.vf(a, c, this.ga())
};
h.i.register("geras", h.ea.wf);
h.M.ADD_COMMENT = "Add Comment";
h.M.CANNOT_DELETE_VARIABLE_PROCEDURE = "Can't delete the variable '%1' because it's part of the definition of the function '%2'";
h.M.CLEAN_UP = "Clean up Blocks";
h.M.COLLAPSE_ALL = "Collapse Blocks";
h.M.COLLAPSE_BLOCK = "Collapse Block";
h.M.DELETE_ALL_BLOCKS = "Delete all %1 blocks?";
h.M.DELETE_BLOCK = "Delete Block";
h.M.DELETE_VARIABLE_CONFIRMATION = "Delete %1 uses of the '%2' variable?";
h.M.DELETE_X_BLOCKS = "Delete %1 Blocks";
h.M.DISABLE_BLOCK = "Disable Block";
h.M.DUPLICATE_BLOCK = "Duplicate";
h.M.DUPLICATE_COMMENT = "Duplicate Comment";
h.M.ENABLE_BLOCK = "Enable Block";
h.M.EXPAND_ALL = "Expand Blocks";
h.M.EXPAND_BLOCK = "Expand Block";
h.M.EXTERNAL_INPUTS = "External Inputs";
h.M.HELP = "Help";
h.M.INLINE_INPUTS = "Inline Inputs";
h.M.NEW_VARIABLE = "Create variable...";
h.M.NEW_VARIABLE_TITLE = "New variable name:";
h.M.PROCEDURES_DEFNORETURN_PROCEDURE = "do something";
h.M.REDO = "Redo";
h.M.REMOVE_COMMENT = "Remove Comment";
h.M.RENAME_VARIABLE = "Rename variable...";
h.M.RENAME_VARIABLE_TITLE = "Rename all '%1' variables to:";
h.M.UNDO = "Undo";
h.M.UNNAMED_KEY = "unnamed";
h.M.VARIABLE_ALREADY_EXISTS = "A variable named '%1' already exists.";
h.M.VARIABLE_ALREADY_EXISTS_FOR_ANOTHER_TYPE = "A variable named '%1' already exists for another type: '%2'.";
h.M.WORKSPACE_ARIA_LABEL = "Blockly Workspace";
h.M.WORKSPACE_COMMENT_DEFAULT_TEXT = "Say something...";
h.M.PROCEDURES_DEFRETURN_PROCEDURE = h.M.PROCEDURES_DEFNORETURN_PROCEDURE;
var BlocklyStorage = {},
    Cd = null,
    Dd = null,
    Ed = null;

function Fd() {
    var a = Cd();
    Gd("xml=" + encodeURIComponent(a), Hd)
}
var Id = {};

function Gd(a, c) {
    Id["/storage"] && Id["/storage"].abort();
    Id["/storage"] = new XMLHttpRequest;
    Id["/storage"].onload = function() {
        200 === this.status ? c && c.call(this) : Jd(N("Games_httpRequestError") + "\nXHR status: " + this.status);
        Id["/storage"] = null
    };
    Id["/storage"].open("POST", "/storage");
    Id["/storage"].setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    Id["/storage"].send(a)
}

function Hd() {
    window.location.hash = this.responseText.trim();
    Jd(N("Games_linkAlert").replace("%1", window.location.href));
    Ed = Cd()
}

function Kd() {
    var a = this.responseText.trim();
    a.length ? Dd(a) : Jd(N("Games_hashError").replace("%1", window.location.hash));
    Ed = Cd()
}

function Jd(a) {
    if ("object" === typeof P) {
        var c = document.getElementById("linkButton");
        P.lF(c, a)
    } else alert(a)
};
var y = null,
    Ld = "",
    Md = "";

function Nd() {
    dd();
    var a = document.getElementById("linkButton");
    a && (ad ? a.style.display = "none" : (Cd = Od, Dd = Pd, hd(a, Fd)));
    (a = document.getElementById("languageMenu")) && a.addEventListener("change", Qd, !0)
}

function Rd() {
    var a = '<xml><block movable="' + (1 != M) + '" type="maze_moveForward" x="70" y="70"></block></xml>';
    if (!ad && 1 < window.location.hash.length) Gd("key=" + encodeURIComponent(window.location.hash.substring(1)), Kd);
    else {
        var c = null;
        try {
            c = window.sessionStorage.Es
        } catch (e) {}
        c && delete window.sessionStorage.Es;
        var d = ed(M);
        (a = c || d || a) && Pd(a)
    }
}

function Pd(a) {
    a = h.K.ye(a);
    y.clear();
    h.K.Xh(a, y);
    a = y;
    a.Pi.length = 0;
    a.mm.length = 0;
    h.h.fC()
}

function Od() {
    var a = h.K.dz(!0);
    if (1 == y.ub(!1).length && a.querySelector) {
        var c = a.querySelector("block");
        c && (c.removeAttribute("x"), c.removeAttribute("y"))
    }
    return h.K.Gd(a)
}

function Sd() {
    "object" == typeof BlocklyStorage && null !== Ed && Ed != Od() && (window.location.hash = "", Ed = null)
}

function Td(a) {
    var c = document.getElementById("toolbox");
    c && (a.toolbox = c);
    a.media = "third-party/blockly/media/";
    a.oneBasedIndex = !1;
    y = h.Rg("blockly", a);
    D(y, Sd)
}

function Ud() {
    window.location = (ad ? "index.html" : "./") + "?lang=" + K
}

function Qd() {
    window.sessionStorage && (window.sessionStorage.Es = Od());
    var a = document.getElementById("languageMenu");
    a = encodeURIComponent(a.options[a.selectedIndex].value);
    var c = window.location.search;
    c = 1 >= c.length ? "?lang=" + a : /[?&]lang=[^&]*/.test(c) ? c.replace(/([?&]lang=)[^&]*/, "$1" + a) : c.replace(/\?/, "?lang=" + a + "&");
    window.location = window.location.protocol + "//" + window.location.host + window.location.pathname + c
}

function Vd() {
    10 > M ? window.location = window.location.protocol + "//" + window.location.host + window.location.pathname + "?lang=" + K + "&level=" + (M + 1) : Ud()
}

function Wd(a) {
    if (a) {
        var c = a.match(/^block_id_([^']+)$/);
        c && (a = c[1])
    }
    Pc(a, void 0)
}

function Xd(a) {
    a = a.replace(/(,\s*)?'block_id_[^']+'\)/g, ")");
    return a.replace(/\s+$/, "")
}

function Yd(a) {
    if ("click" == a.type && "touchend" == Zd && $d + 2E3 > Date.now() || Zd == a.type && $d + 400 > Date.now()) return a.preventDefault(), a.stopPropagation(), !0;
    Zd = a.type;
    $d = Date.now();
    return !1
}
var Zd = null,
    $d = 0;

function ae() {
    setTimeout(function() {
        var a = document.createElement("script");
        a.type = "text/javascript";
        a.src = "third-party/JS-Interpreter/compressed.js";
        document.head.appendChild(a)
    }, 1)
}

function be() {
    setTimeout(function() {
        var a = document.createElement("link");
        a.rel = "stylesheet";
        a.type = "text/css";
        a.href = "common/prettify.css";
        document.head.appendChild(a);
        a = document.createElement("script");
        a.type = "text/javascript";
        a.src = "common/prettify.js";
        document.head.appendChild(a)
    }, 1)
};
var P = {
    mi: !1,
    Dw: null,
    ao: null,
    vm: function(a, c, d, e, f, g) {
        function k() {
            if (P.mi) {
                l.style.visibility = "visible";
                l.style.zIndex = 10;
                m.style.visibility = "hidden";
                var q = a.getElementsByClassName("primary");
                q.length || (q = a.getElementsByClassName("secondary"), q.length || (q = a.getElementsByTagName("button")));
                q.length && q[0].focus()
            }
        }
        if (!a) throw TypeError("Content not found: " + a);
        P.mi && P.$e(!1);
        h.Lg() && h.ic(!0);
        P.mi = !0;
        P.Dw = c;
        P.ao = g;
        var l = document.getElementById("dialog");
        g = document.getElementById("dialogShadow");
        var m =
            document.getElementById("dialogBorder"),
            n;
        for (n in f) l.style[n] = f[n];
        e && (g.style.visibility = "visible", g.style.opacity = .3, g.style.zIndex = 9, e = document.createElement("div"), e.id = "dialogHeader", l.appendChild(e), P.pr = h.Rh(e, "mousedown", null, P.zC));
        f = a.getElementsByClassName("dialogOk");
        for (e = 0; e < f.length; e++) f[e].textContent = h.M.aG;
        f = a.getElementsByClassName("dialogCancel");
        for (e = 0; e < f.length; e++) f[e].textContent = h.M.$F;
        l.appendChild(a);
        a.className = a.className.replace("dialogHiddenContent", "");
        try {
            c.blur()
        } catch (q) {}
        d &&
            c ? (P.No(c, !1, .2), P.No(l, !0, .8), setTimeout(k, 175)) : k()
    },
    Ew: 0,
    Fw: 0,
    zC: function(a) {
        P.vr();
        if (!h.g.Tl(a)) {
            var c = document.getElementById("dialog");
            P.Ew = c.offsetLeft - a.clientX;
            P.Fw = c.offsetTop - a.clientY;
            P.rr = h.Rh(document, "mouseup", null, P.vr);
            P.qr = h.Rh(document, "mousemove", null, P.AC);
            a.stopPropagation()
        }
    },
    AC: function(a) {
        var c = document.getElementById("dialog"),
            d = P.Ew + a.clientX;
        a = P.Fw + a.clientY;
        a = Math.max(a, 0);
        a = Math.min(a, window.innerHeight - c.offsetHeight);
        d = Math.max(d, 0);
        d = Math.min(d, window.innerWidth -
            c.offsetWidth);
        c.style.left = d + "px";
        c.style.top = a + "px"
    },
    vr: function() {
        P.rr && (h.tp(P.rr), P.rr = null);
        P.qr && (h.tp(P.qr), P.qr = null)
    },
    $e: function(a) {
        function c() {
            e.style.zIndex = -1;
            e.style.visibility = "hidden";
            document.getElementById("dialogBorder").style.visibility = "hidden"
        }
        if (P.mi) {
            P.vr();
            P.pr && (h.tp(P.pr), P.pr = null);
            P.mi = !1;
            P.ao && P.ao();
            P.ao = null;
            var d = !1 === a ? null : P.Dw;
            a = document.getElementById("dialog");
            var e = document.getElementById("dialogShadow");
            e.style.opacity = 0;
            d && a ? (P.No(a, !1, .8), P.No(d, !0, .2),
                setTimeout(c, 175)) : c();
            a.style.visibility = "hidden";
            a.style.zIndex = -1;
            for ((d = document.getElementById("dialogHeader")) && d.parentNode.removeChild(d); a.firstChild;) d = a.firstChild, d.className += " dialogHiddenContent", document.body.appendChild(d)
        }
    },
    No: function(a, c, d) {
        function e() {
            f.style.width = g.width + "px";
            f.style.height = g.height + "px";
            f.style.left = g.x + "px";
            f.style.top = g.y + "px";
            f.style.opacity = d
        }
        if (a) {
            var f = document.getElementById("dialogBorder"),
                g = P.Tw(a);
            c ? (f.className = "dialogAnimate", setTimeout(e, 1)) :
                (f.className = "", e());
            f.style.visibility = "visible"
        }
    },
    Tw: function(a) {
        var c = h.g.style.bi(a);
        c = {
            x: c.x,
            y: c.y
        };
        a.getBBox ? (a = a.getBBox(), c.height = a.height, c.width = a.width) : (c.height = a.offsetHeight, c.width = a.offsetWidth);
        return c
    },
    lF: function(a, c) {
        var d = document.getElementById("containerStorage");
        d.textContent = "";
        c = c.split("\n");
        for (var e = 0; e < c.length; e++) {
            var f = document.createElement("p");
            f.appendChild(document.createTextNode(c[e]));
            d.appendChild(f)
        }
        d = document.getElementById("dialogStorage");
        P.vm(d, a, !0,
            !0, {
                width: "50%",
                left: "25%",
                top: "5em"
            }, P.Ny);
        P.Ky()
    },
    Uv: function() {
        if (!ed(M))
            if (P.mi || y.bd()) setTimeout(P.Uv, 15E3);
            else {
                var a = document.getElementById("dialogAbort"),
                    c = document.getElementById("abortCancel");
                c.addEventListener("click", P.$e, !0);
                c.addEventListener("touchend", P.$e, !0);
                c = document.getElementById("abortOk");
                c.addEventListener("click", Ud, !0);
                c.addEventListener("touchend", Ud, !0);
                P.vm(a, null, !1, !0, {
                    width: "40%",
                    left: "30%",
                    top: "3em"
                }, function() {
                    document.body.removeEventListener("keydown", P.Tv,
                        !0)
                });
                document.body.addEventListener("keydown", P.Tv, !0)
            }
    },
    lC: function() {
        var a = document.getElementById("dialogDone");
        if (y) {
            var c = document.getElementById("dialogLinesText");
            c.textContent = "";
            var d = Md;
            d = Xd(d);
            var e = d.replace(/\/\/[^\n]*/g, "");
            e = e.replace(/\/\*.*\*\//g, "");
            e = e.replace(/[ \t]+\n/g, "\n");
            e = e.replace(/\n+/g, "\n");
            e = e.trim();
            e = e.split("\n").length;
            var f = document.getElementById("containerCode");
            f.textContent = d;
            "function" == typeof prettyPrintOne && (d = f.innerHTML, d = prettyPrintOne(d, "js"), f.innerHTML =
                d);
            d = 1 == e ? N("Games_linesOfCode1") : N("Games_linesOfCode2").replace("%1", String(e));
            c.appendChild(document.createTextNode(d))
        }
        d = 10 > M ? N("Games_nextLevel").replace("%1", String(M + 1)) : N("Games_finalLevel");
        c = document.getElementById("doneCancel");
        c.addEventListener("click", P.$e, !0);
        c.addEventListener("touchend", P.$e, !0);
        c = document.getElementById("doneOk");
        c.addEventListener("click", Vd, !0);
        c.addEventListener("touchend", Vd, !0);
        P.vm(a, null, !1, !0, {
            width: "40%",
            left: "30%",
            top: "3em"
        }, function() {
            document.body.removeEventListener("keydown",
                P.nw, !0)
        });
        document.body.addEventListener("keydown", P.nw, !0);
        document.getElementById("dialogDoneText").textContent = d
    },
    bo: function(a) {
        !P.mi || 13 != a.keyCode && 27 != a.keyCode && 32 != a.keyCode || (P.$e(!0), a.stopPropagation(), a.preventDefault())
    },
    Ky: function() {
        document.body.addEventListener("keydown", P.bo, !0)
    },
    Ny: function() {
        document.body.removeEventListener("keydown", P.bo, !0)
    },
    nw: function(a) {
        P.bo(a);
        13 != a.keyCode && 32 != a.keyCode || Vd()
    },
    Tv: function(a) {
        P.bo(a);
        13 != a.keyCode && 32 != a.keyCode || Ud()
    }
};
window.BlocklyDialogs = P;
P.hideDialog = P.$e;
h.Generator = function(a) {
    this.cm = a
};
b = h.Generator.prototype;
b.Su = null;
b.yn = null;
b.zn = null;
b.uA = "  ";
b.wz = 60;
b.un = [];
b.Bo = null;

function ce(a, c) {
    return c + a.replace(/(?!\n$)\n/g, "\n" + c)
}

function de(a, c) {
    !1 === a.Bo && console.warn("Generator init was not called before blockToCode was called.");
    if (!c) return "";
    if (!c.isEnabled()) return de(a, w(c));
    if (c.rd()) return de(a, z(c, !1)[0]);
    var d = a[c.type];
    if ("function" != typeof d) throw Error('Language "' + a.cm + '" does not know how to generate code for block type "' + c.type + '".');
    d = d.call(c, c);
    if (Array.isArray(d)) {
        if (!c.S) throw TypeError("Expecting string from statement block: " + c.type);
        return [a.It(c, d[0], void 0), d[1]]
    }
    if ("string" == typeof d) return a.yn &&
        !c.Wt && (d = ee(a.yn, c) + d), a.zn && !c.Wt && (d += ee(a.zn, c)), a.It(c, d, void 0);
    if (null === d) return "";
    throw SyntaxError("Invalid code generated: " + d);
}

function fe(a, c, d, e) {
    if (isNaN(e)) throw TypeError("Expecting valid order from block: " + c.type);
    var f = gc(c, d);
    if (!f) return "";
    d = de(a, f);
    if ("" === d) return "";
    if (!Array.isArray(d)) throw TypeError("Expecting tuple from value block: " + f.type);
    c = d[0];
    d = d[1];
    if (isNaN(d)) throw TypeError("Expecting valid order from value block: " + f.type);
    if (!c) return "";
    f = !1;
    var g = Math.floor(e),
        k = Math.floor(d);
    if (g <= k && (g != k || 0 != g && 99 != g))
        for (f = !0, g = 0; g < a.un.length; g++)
            if (a.un[g][0] == e && a.un[g][1] == d) {
                f = !1;
                break
            } f && (c = "(" + c + ")");
    return c
}

function ge(a, c) {
    var d = h.P;
    a = gc(a, c);
    c = de(d, a);
    if ("string" != typeof c) throw TypeError("Expecting code from statement block: " + (a && a.type));
    c && (c = ce(c, d.uA));
    return c
}

function ee(a, c) {
    c = c.id.replace(/\$/g, "$$$$");
    return a.replace(/%1/g, "'" + c + "'")
}
b.mq = "";

function he(a, c) {
    a.mq += c + ","
}
Object.defineProperty(h.Generator.prototype, "variableDB_", {
    get: function() {
        h.g.Dj.warn("variableDB_", "May 2021", "May 2026", "nameDB_");
        return this.ef
    },
    set: function(a) {
        h.g.Dj.warn("variableDB_", "May 2021", "May 2026", "nameDB_");
        this.ef = a
    }
});
h.Generator.prototype.Ba = function() {
    this.mr = Object.create(null);
    this.SC = Object.create(null)
};
h.Generator.prototype.It = function(a, c) {
    return c
};
h.Generator.prototype.finish = function(a) {
    delete this.mr;
    delete this.SC;
    return a
};
h.Generator.prototype.Fy = function(a) {
    return a
};
h.P = new h.Generator("JavaScript");
he(h.P, "break,case,catch,class,const,continue,debugger,default,delete,do,else,export,extends,finally,for,function,if,import,in,instanceof,new,return,super,switch,this,throw,try,typeof,var,void,while,with,yield,enum,implements,interface,let,package,private,protected,public,static,await,null,true,false,arguments," + Object.getOwnPropertyNames(h.g.global).join(","));
h.P.VH = 0;
h.P.mI = 1.1;
h.P.tn = 1.2;
h.P.sn = 2;
h.P.jI = 3;
h.P.dI = 3;
h.P.YH = 4.1;
h.P.pI = 4.2;
h.P.rv = 4.3;
h.P.nv = 4.4;
h.P.oI = 4.5;
h.P.qI = 4.6;
h.P.eI = 4.7;
h.P.WH = 4.8;
h.P.hI = 5;
h.P.pv = 5.1;
h.P.fI = 5.2;
h.P.lI = 5.3;
h.P.qv = 6.1;
h.P.rn = 6.2;
h.P.$H = 7;
h.P.nI = 8;
h.P.iI = 8;
h.P.kI = 8;
h.P.gI = 9;
h.P.XH = 10;
h.P.aI = 11;
h.P.ZH = 12;
h.P.mv = 13;
h.P.ov = 14;
h.P.cI = 15;
h.P.UH = 16;
h.P.rI = 17;
h.P.bI = 18;
h.P.RA = 99;
h.P.un = [
    [h.P.sn, h.P.tn],
    [h.P.sn, h.P.sn],
    [h.P.tn, h.P.tn],
    [h.P.tn, h.P.sn],
    [h.P.nv, h.P.nv],
    [h.P.pv, h.P.pv],
    [h.P.rn, h.P.rn],
    [h.P.mv, h.P.mv],
    [h.P.ov, h.P.ov]
];
h.P.Bo = !1;
h.P.Ba = function(a) {
    Object.getPrototypeOf(this).Ba.call(this);
    this.ef ? this.ef.reset() : this.ef = new h.Ad(this.mq);
    this.ef.Pt(a.Oa);
    for (var c = this.ef, d = h.ma.Gq(a), e = 0; e < d.length; e++) Xc(c, d[e].hc(), h.Ph);
    c = this.ef;
    d = h.Sa.Zv(a);
    d = d[0].concat(d[1]);
    for (e = 0; e < d.length; e++) Xc(c, d[e][0], h.jq);
    c = [];
    e = h.ma.EB(a);
    for (d = 0; d < e.length; d++) c.push(Xc(this.ef, e[d], h.Ad.Kp));
    a = h.ma.Gq(a);
    for (d = 0; d < a.length; d++) c.push(Xc(this.ef, a[d].hc(), h.Ph));
    c.length && (this.mr.variables = "var " + c.join(", ") + ";");
    this.Bo = !0
};
h.P.finish = function(a) {
    var c = h.g.object.values(this.mr);
    a = Object.getPrototypeOf(this).finish.call(this, a);
    this.Bo = !1;
    this.ef.reset();
    return c.join("\n\n") + "\n\n\n" + a
};
h.P.Fy = function(a) {
    return a + ";\n"
};
h.P.vE = function(a) {
    a = a.replace(/\\/g, "\\\\").replace(/\n/g, "\\\n").replace(/'/g, "\\'");
    return "'" + a + "'"
};
h.P.cK = function(a) {
    return a.split(/\n/g).map(this.vE).join(" + '\\n' +\n")
};
h.P.It = function(a, c, d) {
    var e = "";
    if (!a.S || !a.S.xa) {
        var f = a.ie.text;
        f && (f = h.g.Qa.ez(f, this.wz - 3), e += ce(f + "\n", "// "));
        for (var g = 0; g < a.U.length; g++)
            if (a.U[g].type == h.Ha.Me) {
                var k = a.U[g].connection.ra();
                if (k) {
                    f = [];
                    k = v(k, !0);
                    for (var l = 0; l < k.length; l++) {
                        var m = k[l].ie.text;
                        m && f.push(m)
                    }
                    f.length && f.push("");
                    (f = f.join("\n")) && (e += ce(f, "// "))
                }
            }
    }
    a = a.ca && a.ca.ra();
    d = d ? "" : de(this, a);
    return e + c + d
};
h.P.IJ = function(a, c, d, e, f) {
    d = d || 0;
    f = f || this.RA;
    a.B.options.$o && d--;
    var g = a.B.options.$o ? "1" : "0";
    a = 0 < d ? fe(this, a, c, this.rn) || g : 0 > d ? fe(this, a, c, this.qv) || g : e ? fe(this, a, c, this.rv) || g : fe(this, a, c, f) || g;
    if (h.LD(a)) a = Number(a) + d, e && (a = -a);
    else {
        if (0 < d) {
            a = a + " + " + d;
            var k = this.rn
        } else 0 > d && (a = a + " - " + -d, k = this.qv);
        e && (a = d ? "-(" + a + ")" : "-" + a, k = this.rv);
        k = Math.floor(k);
        f = Math.floor(f);
        k && f >= k && (a = "(" + a + ")")
    }
    return a
};
h.Zd = function(a, c, d, e, f, g, k) {
    if (!a) throw Error("Src value of an image field is required");
    a = h.g.gd(a);
    d = Number(h.g.gd(d));
    c = Number(h.g.gd(c));
    if (isNaN(d) || isNaN(c)) throw Error("Height and width values of an image field must cast to numbers.");
    if (0 >= d || 0 >= c) throw Error("Height and width values of an image field must be greater than 0.");
    this.zl = !1;
    this.Jn = "";
    h.Zd.v.constructor.call(this, a, null, k);
    k || (this.zl = !!g, this.Jn = h.g.gd(e) || "");
    this.zc = new h.g.Uc(c, d + h.Zd.zB);
    this.BD = d;
    this.Gf = null;
    "function" ==
    typeof f && (this.Gf = f);
    this.Mc = null
};
h.g.object.V(h.Zd, h.xd);
h.Zd.prototype.Ip = "";
h.Zd.ba = function(a) {
    return new h.Zd(a.src, a.width, a.height, void 0, void 0, void 0, a)
};
h.Zd.zB = 1;
b = h.Zd.prototype;
b.yk = !1;
b.Sg = !1;
b.cl = function(a) {
    h.Zd.v.cl.call(this, a);
    this.zl = !!a.flipRtl;
    this.Jn = h.g.gd(a.alt) || ""
};
b.vo = function() {
    this.Mc = h.g.j.J(h.g.D.Ek, {
        height: this.BD + "px",
        width: this.zc.width + "px",
        alt: this.Jn
    }, this.$c);
    this.Mc.setAttributeNS(h.g.j.ld, "xlink:href", this.pf);
    this.Gf && (this.Mc.style.cursor = "pointer")
};
b.Xy = function() {};
b.io = function(a) {
    return "string" != typeof a ? null : a
};
b.rl = function(a) {
    this.pf = a;
    this.Mc && this.Mc.setAttributeNS(h.g.j.ld, "xlink:href", String(this.pf))
};
b.Yw = function() {
    return this.zl
};
b.np = function() {
    this.Gf && this.Gf(this)
};
b.gs = function() {
    return this.Jn
};
h.Jg.register("field_image", h.Zd);
var ie = {},
    Q, je, ke, R, S, T, le;
h.nc.maze_moveForward = {
    Ba: function() {
        cc(this, {
            message0: N("Maze_moveForward"),
            previousStatement: null,
            nextStatement: null,
            colour: 290,
            tooltip: N("Maze_moveForwardTooltip")
        })
    }
};
h.P.maze_moveForward = function(a) {
    return "moveForward('block_id_" + a.id + "');\n"
};
h.nc.maze_turn = {
    Ba: function() {
        var a = [
            [N("Maze_turnLeft"), "turnLeft"],
            [N("Maze_turnRight"), "turnRight"]
        ];
        a[0][0] += " \u21ba";
        a[1][0] += " \u21bb";
        this.ve(290);
        E(bc(this), new h.Ya(a), "DIR");
        this.Ki(!0);
        this.ek(!0);
        this.xe(N("Maze_turnTooltip"))
    }
};
h.P.maze_turn = function(a) {
    return cb(a, "DIR") + "('block_id_" + a.id + "');\n"
};
h.nc.maze_if = {
    Ba: function() {
        var a = [
            [N("Maze_pathAhead"), "isPathForward"],
            [N("Maze_pathLeft"), "isPathLeft"],
            [N("Maze_pathRight"), "isPathRight"]
        ];
        a[1][0] += " \u21ba";
        a[2][0] += " \u21bb";
        this.ve(210);
        E(bc(this), new h.Ya(a), "DIR");
        E(this.Cf(h.Ha.pc, "DO"), N("Maze_doCode"));
        this.xe(N("Maze_ifTooltip"));
        this.Ki(!0);
        this.ek(!0)
    }
};
h.P.maze_if = function(a) {
    var c = cb(a, "DIR") + "('block_id_" + a.id + "')";
    a = ge(a, "DO");
    return "if (" + c + ") {\n" + a + "}\n"
};
h.nc.maze_ifElse = {
    Ba: function() {
        var a = [
            [N("Maze_pathAhead"), "isPathForward"],
            [N("Maze_pathLeft"), "isPathLeft"],
            [N("Maze_pathRight"), "isPathRight"]
        ];
        a[1][0] += " \u21ba";
        a[2][0] += " \u21bb";
        this.ve(210);
        E(bc(this), new h.Ya(a), "DIR");
        E(this.Cf(h.Ha.pc, "DO"), N("Maze_doCode"));
        E(this.Cf(h.Ha.pc, "ELSE"), N("Maze_elseCode"));
        this.xe(N("Maze_ifelseTooltip"));
        this.Ki(!0);
        this.ek(!0)
    }
};
h.P.maze_ifElse = function(a) {
    var c = cb(a, "DIR") + "('block_id_" + a.id + "')",
        d = ge(a, "DO");
    a = ge(a, "ELSE");
    return "if (" + c + ") {\n" + d + "} else {\n" + a + "}\n"
};
h.nc.maze_forever = {
    Ba: function() {
        this.ve(120);
        E(E(bc(this), N("Maze_repeatUntil")), new h.Zd(U.Mo, 12, 16));
        E(this.Cf(h.Ha.pc, "DO"), N("Maze_doCode"));
        this.Ki(!0);
        this.xe(N("Maze_whileTooltip"))
    }
};
h.P.maze_forever = function(a) {
    var c = ge(a, "DO");
    h.P.Su && (c = h.P.Su.replace(/%1/g, "'block_id_" + a.id + "'") + c);
    return "while (notDone()) {\n" + c + "}\n"
};
var me = me || {};

function ne(a, c) {
    function d() {}
    d.prototype = c.prototype;
    a.v = c.prototype;
    a.prototype = new d;
    a.prototype.constructor = a;
    a.lJ = function(e, f, g) {
        return c.prototype[f].apply(e, Array.prototype.slice.call(arguments, 2))
    }
}
if (!oe) {
    var oe, pe = "";
    "undefined" !== typeof navigator && navigator && "string" == typeof navigator.userAgent && (pe = navigator.userAgent);
    var qe = 0 == pe.indexOf("Opera");
    oe = {
        bK: {
            IG: "ScriptEngine" in window
        },
        TH: qe,
        $d: !qe && -1 != pe.indexOf("MSIE"),
        Nv: !qe && -1 != pe.indexOf("WebKit")
    }
}
if (!se) var se = {};
if (!te) var te = {};
if (!ue) var ue = {};
if (!ve) var ve = {};
if (!we) var we = {};
if (!xe) var xe = {};
var ye = me.Fz ? {
        oK: !0
    } : {},
    ze = me.Fz ? {
        pK: !0
    } : {};

function Ae() {
    throw Error("Do not instantiate directly");
}
Ae.prototype.tw = null;
Ae.prototype.toString = function() {
    return this.content
};

function Be(a) {
    if (null != a) switch (a.tw) {
        case 1:
            return 1;
        case -1:
            return -1;
        case 0:
            return 0
    }
    return null
}

function Ce() {
    Ae.call(this)
}
ne(Ce, Ae);
Ce.prototype.uw = ye;

function V(a) {
    return null != a && a.uw === ye ? a : De(String(String(a)).replace(Ee, Fe), Be(a))
}
var De = function(a) {
        function c() {}
        c.prototype = a.prototype;
        return function(d, e) {
            var f = new c;
            f.content = String(d);
            void 0 !== e && (f.tw = e);
            return f
        }
    }(Ce),
    Ge = {
        "\x00": "&#0;",
        '"': "&quot;",
        "&": "&amp;",
        "'": "&#39;",
        "<": "&lt;",
        ">": "&gt;",
        "\t": "&#9;",
        "\n": "&#10;",
        "\x0B": "&#11;",
        "\f": "&#12;",
        "\r": "&#13;",
        " ": "&#32;",
        "-": "&#45;",
        "/": "&#47;",
        "=": "&#61;",
        "`": "&#96;",
        "\u0085": "&#133;",
        "\u00a0": "&#160;",
        "\u2028": "&#8232;",
        "\u2029": "&#8233;"
    };

function Fe(a) {
    return Ge[a]
}
var Ee = /[\x00\x22\x26\x27\x3c\x3e]/g;

function He() {
    return '<div class="farSide" style="padding: 1ex 3ex 0"><button class="secondary dialogOk" onclick="BlocklyDialogs.hideDialog(true)"></button></div>'
};

function Ie() {
    var a = "skin=" + V(Je),
        c = '<table width="100%"><tr><td><h1><span id="title">' + ((ad ? '<a href="">' : '<a href="">') + V("Maze") + "</span>");
    if (M) {
        a = "" + (a ? V(a) : "");
        for (var d = " &nbsp; ", e = 1; MAX_LEVEL+1 > e; e++) {
            var f = "?lang=" + V(K) + "&level=" + V(e) + (a ? "&" + V(a) : "");
            d += " " + (e == M ? '<span class="level_number level_done" id="level' + V(e) + '">' + V(e) + "</span>" : 10 == e ? '<a class="level_number" id="level' + V(e) + '" href="' + V(f) + '">' + V(e) + "</a>" : '<a class="level_dot" id="level' +
                V(e) + '" href="' + V(f) + '"></a>')
        }
        a = d
    } else a = "";
    return '<div style="display: none"><span id="Games_name">Blockly Games</span><span id="Games_puzzle">Puzzle</span><span id="Games_maze">Maze</span><span id="Games_bird">Bird</span><span id="Games_turtle">Turtle</span><span id="Games_movie">Movie</span><span id="Games_music">Music</span><span id="Games_pondTutor">Pond Tutor</span><span id="Games_pond">Pond</span><span id="Games_genetics">Genetics</span><span id="Games_linesOfCode1">You solved this level with 1 line of JavaScript:</span><span id="Games_linesOfCode2">You solved this level with %1 lines of JavaScript:</span><span id="Games_nextLevel">Are you ready for level %1?</span><span id="Games_finalLevel">Are you ready for the next challenge?</span><span id="Games_submitTitle">Title:</span><span id="Games_linkTooltip">Save and link to blocks.</span><span id="Games_runTooltip">Run the program you wrote.</span><span id="Games_runProgram">Run Program</span><span id="Games_resetTooltip">Stop the program and reset the level.</span><span id="Games_resetProgram">Reset</span><span id="Games_help">Help</span><span id="Games_catLogic">Logic</span><span id="Games_catLoops">Loops</span><span id="Games_catMath">Math</span><span id="Games_catText">Text</span><span id="Games_catLists">Lists</span><span id="Games_catColour">Colour</span><span id="Games_catVariables">Variables</span><span id="Games_catProcedures">Functions</span><span id="Games_httpRequestError">There was a problem with the request.</span><span id="Games_linkAlert">Share your blocks with this link:\\n\\n%1</span><span id="Games_hashError">Sorry, \'%1\' doesn\'t correspond with any saved program.</span><span id="Games_xmlError">Could not load your saved file. Perhaps it was created with a different version of Blockly?</span><span id="Games_submitted">Thank you for this program!  If our staff of trained monkeys like it, they will publish it to the gallery within a couple of days.</span><span id="Games_listVariable">list</span><span id="Games_textVariable">text</span><span id="Games_breakLink">Once you start editing JavaScript, you can\'t go back to editing blocks. Is this OK?</span><span id="Games_blocks">Blocks</div></div><div style="display: none"><span id="Maze_moveForward">move forward</span><span id="Maze_turnLeft">turn left</span><span id="Maze_turnRight">turn right</span><span id="Maze_doCode">do</span><span id="Maze_elseCode">else</span><span id="Maze_helpIfElse">If-else blocks will do one thing or the other.</span><span id="Maze_pathAhead">if path ahead</span><span id="Maze_pathLeft">if path to the left</span><span id="Maze_pathRight">if path to the right</span><span id="Maze_repeatUntil">repeat until</span><span id="Maze_moveForwardTooltip">Moves the player forward one space.</span><span id="Maze_turnTooltip">Turns the player left or right by 90 degrees.</span><span id="Maze_ifTooltip">If there is a path in the specified direction, then do some actions.</span><span id="Maze_ifelseTooltip">If there is a path in the specified direction, then do the first block of actions. Otherwise, do the second block of actions.</span><span id="Maze_whileTooltip">Repeat the enclosed actions until finish point is reached.</span><span id="Maze_capacity0">You have %0 blocks left.</span><span id="Maze_capacity1">You have %1 block left.</span><span id="Maze_capacity2">You have %2 blocks left.</span></div>' +
        (c + a + '</h1></td><td id="header_cta" class="farSide"><select id="languageMenu"></select>&nbsp;<button id="linkButton" title="Save and link to blocks."><img src="common/1x1.gif" class="link icon21"></button>&nbsp;' + ('<button id="pegmanButton"><img src="common/1x1.gif"><span id="pegmanButtonArrow"></span></button>'.uw === ze ? "zSoyz" : '<button id="pegmanButton"><img src="common/1x1.gif"><span id="pegmanButtonArrow"></span></button>') + '</td></tr></table><div id="visualization"><svg xmlns="http://www.w3.org/2000/svg" version="1.1" id="svgMaze" width="400px" height="400px"><g id="look"><path d="M 0,-15 a 15 15 0 0 1 15 15" /><path d="M 0,-35 a 35 35 0 0 1 35 35" /><path d="M 0,-55 a 55 55 0 0 1 55 55" /></g></svg><div id="capacityBubble"><div id="capacity"></div></div></div><table width="400"><tr><td style="width: 190px; text-align: center; vertical-align: top;"><td><button id="runButton" class="primary" title="Makes the player do what the blocks say."><img src="common/1x1.gif" class="run icon21"> Run Program</button><button id="resetButton" class="primary" style="display: none" title="Put the player back at the start of the maze."><img src="common/1x1.gif" class="stop icon21"> Reset</button></td></tr></table><xml id="toolbox" xmlns="https://developers.google.com/blockly/xml"><block type="maze_moveForward"></block><block type="maze_turn"><field name="DIR">turnLeft</field></block><block type="maze_turn"><field name="DIR">turnRight</field></block>') +
        ((2 < M ? '<block type="maze_forever"></block>' + (6 == M ? '<block type="maze_if"><field name="DIR">isPathLeft</field></block>' : 6 < M ? '<block type="maze_if"></block>' + (8 < M ? '<block type="maze_ifElse"></block>' : "") : "") : "") + '</xml><div id="blockly"></div><div id="pegmanMenu"></div><div id="dialogShadow" class="dialogAnimate"></div><div id="dialogBorder"></div><div id="dialog"></div><div id="dialogDone" class="dialogHiddenContent"><div style="font-size: large; margin: 1em;">Congratulations!</div><div id="dialogLinesText" style="font-size: large; margin: 1em;"></div><pre id="containerCode"></pre><div id="dialogDoneText" style="font-size: large; margin: 1em;"></div><div id="dialogDoneButtons" class="farSide" style="padding: 1ex 3ex 0"><button id="doneCancel" class="dialogCancel"></button><button id="doneOk" class="secondary dialogOk"></button></div></div><div id="dialogAbort" class="dialogHiddenContent">This level is extremely difficult. Would you like to skip it and go onto the next game? You can always come back later.<div class="farSide" style="padding: 1ex 3ex 0"><button id="abortCancel" class="dialogCancel"></button><button id="abortOk" class="secondary dialogOk"></button></div></div><div id="dialogStorage" class="dialogHiddenContent"><div id="containerStorage"></div>') +
        (He() + "</div>") + (1 == M ? '<div id="dialogHelpStack" class="dialogHiddenContent"><table><tr><td><img src="common/help.png"></td><td>&nbsp;</td><td>Stack a couple of \'move forward\' blocks together to help me reach the goal.</td><td valign="top"><img src="maze/help_stack.png" class="mirrorImg" height=63 width=136></td></tr></table></div><div id="dialogHelpOneTopBlock" class="dialogHiddenContent"><table><tr><td><img src="common/help.png"></td><td>&nbsp;</td><td>On this level, you need to stack together all of the blocks in the white workspace.<div id="sampleOneTopBlock" class="readonly"></div></td></tr></table></div><div id="dialogHelpRun" class="dialogHiddenContent"><table><tr><td>Run your program to see what happens.</td><td rowspan=2><img src="common/help.png"></td></tr><tr><td><div><img src="maze/help_run.png" class="mirrorImg" height=27 width=141></div></td></tr></table></div>' :
            2 == M ? '<div id="dialogHelpReset" class="dialogHiddenContent"><table><tr><td>Your program didn\'t solve the maze. Press \'Reset\' and try again.</td><td rowspan=2><img src="common/help.png"></td></tr><tr><td><div><img src="maze/help_run.png" class="mirrorImg" height=27 width=141></div></td></tr></table></div>' : 3 == M || 4 == M ? (3 == M ? '<div id="dialogHelpRepeat" class="dialogHiddenContent"><table><tr><td><img src="maze/help_up.png"></td><td>Reach the end of this path using only two blocks. Use \'repeat\' to run a block more than once.</td><td><img src="common/help.png"></td></tr></table></div>' :
                "") + '<div id="dialogHelpCapacity" class="dialogHiddenContent"><table><tr><td><img src="common/help.png"></td><td>&nbsp;</td><td>You have used up all the blocks for this level. To create a new block, you first need to delete an existing block.</td></tr></table></div><div id="dialogHelpRepeatMany" class="dialogHiddenContent"><table><tr><td><img src="maze/help_up.png"></td><td>You can fit more than one block inside a \'repeat\' block.</td><td><img src="common/help.png"></td></tr></table></div>' : 5 == M ?
            '<div id="dialogHelpSkins" class="dialogHiddenContent"><table><tr><td><img src="common/help.png"></td><td width="95%">Choose your favourite player from this menu.</td><td><img src="maze/help_up.png"></td></tr></table></div>' : 6 == M ? '<div id="dialogHelpIf" class="dialogHiddenContent"><table><tr><td><img src="maze/help_up.png"></td><td>An \'if\' block will do something only if the condition is true. Try turning left if there is a path to the left.</td><td><img src="common/help.png"></td></tr></table></div>' :
            7 == M ? '<div id="dialogHelpMenu" class="dialogHiddenContent"><table><tr><td><img src="maze/help_up.png"></td><td id="helpMenuText">Click on %1 in the \'if\' block to change its condition.</td><td><img src="common/help.png"></td></tr></table></div>' : 9 == M ? '<div id="dialogHelpIfElse" class="dialogHiddenContent"><table><tr><td><img src="maze/help_down.png"></td><td>If-else blocks will do one thing or the other.</td><td><img src="common/help.png"></td></tr></table></div>' : 10 == M ? '<div id="dialogHelpWallFollow" class="dialogHiddenContent"><table><tr><td><img src="common/help.png"></td><td>&nbsp;</td><td>Can you solve this complicated maze? Try following the left-hand wall. Advanced programmers only!' +
            He() + "</td></tr></table></div>" : "")
};
var gd = "maze";
Vd = function() {
    10 > M ? window.location = window.location.protocol + "//" + window.location.host + window.location.pathname + "?lang=" + K + "&level=" + (M + 1) + "&skin=" + Je : Ud()
};
var Ke = [void 0, Infinity, Infinity, Infinity, Infinity, Infinity, Infinity, Infinity][M],
    Le = [{
        fk: "maze/pegman.png",
        Xt: "maze/tiles_pegman.png",
        Mo: "maze/marker.png",
        background: !1,
        Fs: "#000",
        iu: ["maze/win.mp3", "maze/win.ogg"],
        ir: ["maze/fail_pegman.mp3", "maze/fail_pegman.ogg"],
        Xn: 1
    }, {
        fk: "maze/astro.png",
        Xt: "maze/tiles_astro.png",
        Mo: "maze/marker.png",
        background: "maze/bg_astro.jpg",
        Fs: "#fff",
        iu: ["maze/win.mp3", "maze/win.ogg"],
        ir: ["maze/fail_astro.mp3", "maze/fail_astro.ogg"],
        Xn: 2
    }, {
        fk: "maze/panda.png",
        Xt: "maze/tiles_panda.png",
        Mo: "maze/marker.png",
        background: "maze/bg_panda.jpg",
        Fs: "#000",
        iu: ["maze/win.mp3", "maze/win.ogg"],
        ir: ["maze/fail_panda.mp3", "maze/fail_panda.ogg"],
        Xn: 3
    }],
    Je = bd("skin", 0, Le.length),
    U = Le[Je],
    W = [void 0, [
            [0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 1, 3, 0, 0],
            [0, 0, 2, 1, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0]
        ],
        [
            [1, 1, 1, 1, 1, 0, 1, 3],
            [1, 1, 0, 1, 1, 1, 1, 1],
            [1, 0, 0, 0, 0, 0, 1, 0],
            [1, 1, 0, 0, 0, 0, 1, 1],
            [1, 1, 0, 0, 0, 0, 1, 1],
            [0, 1, 0, 0, 0, 0, 0, 1],
            [1, 1, 1, 1, 1, 0, 1, 1],
            [2, 1, 0, 1, 1, 1, 1, 1]
        ],
        [
            [1, 1, 1, 1, 1, 0, 1, 3],
            [1, 1, 0, 1, 1, 1, 1, 1],
            [1, 0, 0, 0, 0, 0, 1, 0],
            [1, 1, 0, 0, 0, 0, 1, 1],
            [1, 1, 0, 0, 0, 0, 1, 1],
            [0, 1, 0, 0, 0, 0, 0, 1],
            [1, 1, 1, 1, 1, 0, 1, 1],
            [2, 1, 0, 1, 1, 1, 1, 1]
        ],
        [
            [0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 2, 1, 1, 0, 0, 0, 0, 0],
            [0, 1, 0, 1, 0, 1, 1, 1, 0],
            [0, 1, 1, 1, 1, 1, 0, 1, 0],
            [0, 0, 0, 0, 0, 1, 1, 1, 0],
            [0, 1, 1, 3, 0, 1, 0, 0, 0],
            [0, 1, 0, 1, 0, 1, 0, 0, 0],
            [0, 1, 1, 1, 1, 1, 1, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0]
        ],
        [
            [0, 0, 0, 1, 1, 1, 1, 1],
            [0, 0, 1, 1, 0, 0, 0, 1],
            [1, 1, 1, 0, 1, 1, 1, 1],
            [1, 0, 0, 1, 1, 1, 0, 0],
            [1, 1, 0, 1, 0, 1, 1, 1],
            [3, 1, 0, 1, 1, 1, 0, 1],
            [0, 0, 0, 0, 0, 0, 0, 1],
            [2, 1, 1, 1, 1, 1, 1, 1]
        ],
        [
            [0, 0 , 0, 0, 1, 1, 1, 1, 3, 0, 0, 0 ,0],
            [0, 0 , 0, 0, 1, 0, 0, 0, 0, 0, 0, 0 ,0],
            [0, 0 , 0, 0, 1, 0, 1, 0, 0, 0, 0, 0 ,0],
            [0, 0 , 0, 0, 1, 1, 1, 1, 0, 0, 0, 0 ,0],
            [0, 0 , 0, 0, 0, 0, 1, 0, 0, 0, 0, 0 ,0],
            [0, 0 , 0, 0, 1, 1, 1, 1, 0, 0, 0, 0 ,0],
            [0, 0 , 0, 0, 1, 0, 1, 0, 0, 0, 0, 0 ,0],
            [0, 0 , 0, 0, 1, 0, 0, 0, 0, 0, 0, 0 ,0],
            [0, 0 , 0, 0, 1, 0, 1, 0, 0, 0, 0, 0 ,0],
            [0, 0 , 0, 0, 1, 1, 1, 1, 0, 0, 0, 0 ,0],
            [0, 0 , 0, 0, 1, 0, 2, 0, 0, 0, 0, 0 ,0],
        ],
        [
            [0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 3, 1, 0, 0, 0, 0],
            [0, 1, 1, 0, 1, 0, 1, 0, 0],
            [0, 1, 1, 0, 1, 1, 1, 0, 0],
            [0, 1, 0, 1, 0, 1, 0, 0, 0],
            [0, 1, 1, 1, 1, 1, 1, 0, 0],
            [0, 0, 0, 1, 0, 0, 1, 0, 0],
            [0, 2, 1, 1, 1, 0, 1, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0]
        ]
    ][M],
    Me = W.length,
    Ne = W[0].length,
    Oe = 50 * Ne,
    Pe = 50 * Me,
    X = 0,
    Y = [],
    Qe = {
        10010: [4, 0],
        10001: [3, 3],
        11E3: [0, 1],
        10100: [0, 2],
        11010: [4, 1],
        10101: [3, 2],
        10110: [0, 0],
        10011: [2, 0],
        11001: [4, 2],
        11100: [2, 3],
        11110: [1, 1],
        10111: [1, 0],
        11011: [2, 1],
        11101: [1, 2],
        11111: [2, 2],
        null0: [4, 3],
        null1: [3, 0],
        null2: [3, 1],
        null3: [0, 3],
        null4: [1, 3]
    };

function Re() {
    function a(m, n) {
        return 0 > m || m >= Ne || 0 > n || n >= Me ? "0" : 0 == W[n][m] ? "0" : "1"
    }
    var c = document.getElementById("svgMaze"),
        d = 50 * Math.max(Me, Ne);
    c.setAttribute("viewBox", "0 0 " + d + " " + d);
    h.g.j.J("rect", {
        height: Pe,
        width: Oe,
        fill: "#F1EEE7",
        "stroke-width": 1,
        stroke: "#CCB"
    }, c);
    if (U.background) {
        var e = h.g.j.J("image", {
            height: Pe,
            width: Oe,
            x: 0,
            y: 0
        }, c);
        e.setAttributeNS(h.g.j.ld, "xlink:href", U.background)
    }
    for (var f = d = 0; f < Me; f++)
        for (var g = 0; g < Ne; g++) {
            var k = a(g, f) + a(g, f - 1) + a(g + 1, f) + a(g, f + 1) + a(g - 1, f);
            Qe[k] || (k = "00000" ==
                k && .3 < Math.random() ? "null0" : "null" + Math.floor(1 + 4 * Math.random()));
            e = Qe[k][0];
            k = Qe[k][1];
            var l = h.g.j.J("clipPath", {
                id: "tileClipPath" + d
            }, c);
            h.g.j.J("rect", {
                height: 50,
                width: 50,
                x: 50 * g,
                y: 50 * f
            }, l);
            e = h.g.j.J("image", {
                height: 200,
                width: 250,
                "clip-path": "url(#tileClipPath" + d + ")",
                x: 50 * (g - e),
                y: 50 * (f - k)
            }, c);
            e.setAttributeNS(h.g.j.ld, "xlink:href", U.Xt);
            d++
        }
    h.g.j.J("image", {
        id: "finish",
        height: 34,
        width: 20
    }, c).setAttributeNS(h.g.j.ld, "xlink:href", U.Mo);
    d = h.g.j.J("clipPath", {
        id: "pegmanClipPath"
    }, c);
    h.g.j.J("rect", {
        id: "clipRect",
        height: 52,
        width: 49
    }, d);
    h.g.j.J("image", {
        id: "pegman",
        height: 52,
        width: 1029,
        "clip-path": "url(#pegmanClipPath)"
    }, c).setAttributeNS(h.g.j.ld, "xlink:href", U.fk)
}

function Se(a) {
    if (!(a && a.xs || y.bd() || 1 == X || ed(M))) {
        a = cd();
        var c = h.K.Gd(h.K.dz()),
            d = y.ya.m.ub(!0),
            e = null,
            f = null,
            g = null;
        if (1 == M) 2 > C(y).length ? (e = document.getElementById("dialogHelpStack"), g = {
            width: "370px",
            top: "130px"
        }, g[a ? "right" : "left"] = "215px", f = d[0].oa()) : (d = y.ub(!0), 1 < d.length ? (e = '<xml>;<block type="maze_moveForward" x="10" y="10">;<next>;<block type="maze_moveForward"></block>;</next>;</block>;</xml>'.split(";"), f = document.getElementById("sampleOneTopBlock"), f.firstChild || (f = h.Rg(f, {
                rtl: cd(),
                readOnly: !0
            }),
            "string" != typeof e && (e = e.join("")), h.K.Xh(h.K.ye(e), f)), e = document.getElementById("dialogHelpOneTopBlock"), g = {
            width: "360px",
            top: "120px"
        }, g[a ? "right" : "left"] = "225px", f = d[0].oa()) : 0 == X && (e = document.getElementById("dialogHelpRun"), g = {
            width: "360px",
            top: "410px"
        }, g[a ? "right" : "left"] = "400px", f = document.getElementById("runButton")));
        else if (2 == M) 0 != X && "none" == document.getElementById("runButton").style.display && (e = document.getElementById("dialogHelpReset"), g = {
                width: "360px",
                top: "410px"
            }, g[a ? "right" : "left"] =
            "400px", f = document.getElementById("resetButton"));
        else if (3 == M) - 1 == c.indexOf("maze_forever") && (0 == fb(y) ? (e = document.getElementById("dialogHelpCapacity"), g = {
            width: "430px",
            top: "310px"
        }, g[a ? "right" : "left"] = "50px", f = document.getElementById("capacityBubble")) : (e = document.getElementById("dialogHelpRepeat"), g = {
            width: "360px",
            top: "360px"
        }, g[a ? "right" : "left"] = "425px", f = d[3].oa()));
        else if (4 == M)
            if (0 == fb(y) && (-1 == c.indexOf("maze_forever") || 1 < y.ub(!1).length)) e = document.getElementById("dialogHelpCapacity"), g = {
                width: "430px",
                top: "310px"
            }, g[a ? "right" : "left"] = "50px", f = document.getElementById("capacityBubble");
            else {
                c = !0;
                for (var k = C(y), l = 0; l < k.length; l++) {
                    var m = k[l];
                    if ("maze_forever" == m.type) {
                        for (var n = 0; m;) m = z(m), m = m.length ? m[0] : null, n++;
                        if (2 < n) {
                            c = !1;
                            break
                        }
                    }
                }
                c && (e = document.getElementById("dialogHelpRepeatMany"), g = {
                    width: "360px",
                    top: "360px"
                }, g[a ? "right" : "left"] = "425px", f = d[3].oa())
            }
        else if (5 == M) 0 != Je || Te.DB || (e = document.getElementById("dialogHelpSkins"), g = {
                width: "360px",
                top: "60px"
            }, g[a ? "left" : "right"] = "20px",
            f = document.getElementById("pegmanButton"));
        else if (6 == M) - 1 == c.indexOf("maze_if") && (e = document.getElementById("dialogHelpIf"), g = {
            width: "360px",
            top: "430px"
        }, g[a ? "right" : "left"] = "425px", f = d[4].oa());
        else if (7 == M) {
            if (!Se.ED) {
                k = document.createElement("span");
                k.className = "helpMenuFake";
                l = [N("Maze_pathAhead"), N("Maze_pathLeft"), N("Maze_pathRight")];
                n = h.g.Qa.kw(l);
                m = h.g.Qa.lw(l);
                k.textContent = (m ? l[0].slice(n, -m) : l[0].substring(n)) + " " + h.Ya.Tm;
                n = document.getElementById("helpMenuText");
                l = n.textContent;
                n.textContent =
                    "";
                m = l.split(/%\d/);
                for (l = 0; l < m.length; l++) n.appendChild(document.createTextNode(m[l])), l != m.length - 1 && n.appendChild(k.cloneNode(!0));
                Se.ED = !0
            } - 1 == c.indexOf("isPathRight") && (e = document.getElementById("dialogHelpMenu"), g = {
                width: "360px",
                top: "430px"
            }, g[a ? "right" : "left"] = "425px", f = d[4].oa())
        } else 9 == M && -1 == c.indexOf("maze_ifElse") && (e = document.getElementById("dialogHelpIfElse"), g = {
            width: "360px",
            top: "305px"
        }, g[a ? "right" : "left"] = "425px", f = d[5].oa());
        e ? e.parentNode != document.getElementById("dialog") && P.vm(e,
            f, !0, !1, g, null) : P.$e(!1)
    }
}

function Te(a) {
    var c = document.getElementById("pegmanMenu");
    "block" == c.style.display ? Ue(a) : Yd(a) || (a = document.getElementById("pegmanButton"), a.classList.add("buttonHover"), c.style.top = a.offsetTop + a.offsetHeight + "px", c.style.left = a.offsetLeft + "px", c.style.display = "block", ie.ot = h.Rh(document.body, "mousedown", null, Ue), (c = document.getElementById("dialogHelpSkins")) && "dialogHiddenContent" != c.className && P.$e(!1), Te.DB = !0)
}

function Ue(a) {
    Yd(a) || (document.getElementById("pegmanMenu").style.display = "none", document.getElementById("pegmanButton").classList.remove("buttonHover"), ie.ot && (h.tp(ie.ot), delete ie.ot))
}

function Ve(a) {
    for (var c = 0; c < Y.length; c++) clearTimeout(Y[c]);
    Y = [];
    R = je.x;
    S = je.y;
    a ? (T = 2, We(!1), Y.push(setTimeout(function() {
        Q = 100;
        Xe([R, S, 4 * T - 4]);
        T++
    }, 5 * Q))) : (T = 1, Z(R, S, 4 * T));
    c = document.getElementById("finish");
    c.setAttribute("x", 50 * (ke.x + .5) - c.getAttribute("width") / 2);
    c.setAttribute("y", 50 * (ke.y + .6) - c.getAttribute("height"));
    c = document.getElementById("look");
    c.style.display = "none";
    c.parentNode.appendChild(c);
    a = c.getElementsByTagName("path");
    c = 0;
    for (var d; d = a[c]; c++) d.setAttribute("stroke", U.Fs)
}

function Ye(a) {
    if (!Yd(a))
        if (P.$e(!1), 1 == M && 1 < y.ub(!1).length && 1 != X && !ed(M)) Se();
        else {
            a = document.getElementById("runButton");
            var c = document.getElementById("resetButton");
            c.style.minWidth || (c.style.minWidth = a.offsetWidth + "px");
            a.style.display = "none";
            c.style.display = "inline";
            Ve(!1);
            Ze()
        }
}

function $e(a) {
    Yd(a) || (document.getElementById("runButton").style.display = "inline", document.getElementById("resetButton").style.display = "none", Pc(null), Ve(!1), Se())
}

function af(a, c) {
    var d = function(e) {
        bf(0, e)
    };
    a.setProperty(c, "moveForward", a.createNativeFunction(d));
    d = function(e) {
        bf(2, e)
    };
    a.setProperty(c, "moveBackward", a.createNativeFunction(d));
    d = function(e) {
        cf(0, e)
    };
    a.setProperty(c, "turnLeft", a.createNativeFunction(d));
    d = function(e) {
        cf(1, e)
    };
    a.setProperty(c, "turnRight", a.createNativeFunction(d));
    d = function(e) {
        return df(0, e)
    };
    a.setProperty(c, "isPathForward", a.createNativeFunction(d));
    d = function(e) {
        return df(1, e)
    };
    a.setProperty(c, "isPathRight", a.createNativeFunction(d));
    d = function(e) {
        return df(2, e)
    };
    a.setProperty(c, "isPathBackward", a.createNativeFunction(d));
    d = function(e) {
        return df(3, e)
    };
    a.setProperty(c, "isPathLeft", a.createNativeFunction(d));
    a.setProperty(c, "notDone", a.createNativeFunction(function() {
        return R != ke.x || S != ke.y
    }))
}

function Ze() {
    if ("Interpreter" in window) {
        le = [];
        h.selected && tb(h.selected);
        var a = h.P;
        var c = y;
        c || (console.warn("No workspace specified in workspaceToCode call.  Guessing."), c = h.Lg());
        var d = [];
        a.Ba(c);
        c = c.ub(!0);
        for (var e = 0, f; f = c[e]; e++) {
            var g = de(a, f);
            Array.isArray(g) && (g = g[0]);
            g && (f.S && (g = a.Fy(g), a.yn && !f.Wt && (g = ee(a.yn, f) + g), a.zn && !f.Wt && (g += ee(a.zn, f))), d.push(g))
        }
        d = d.join("\n");
        d = a.finish(d);
        d = d.replace(/^\s+\n/, "");
        d = d.replace(/\n\s+$/, "\n");
        Md = a = d = d.replace(/[ \t]+\n/g, "\n");
        Ld = Od();
        X = 0;
        a = new Interpreter(a,
            af);
        try {
            for (d = 1E4; a.step();)
                if (0 == d--) throw Infinity;
            X = R != ke.x || S != ke.y ? -1 : 1
        } catch (k) {
            Infinity === k ? X = 2 : !1 === k ? X = -2 : (X = -2, alert(k))
        }

        if (1 == X) {
            Q = 100;
            le.push(["finish", null]);

            console.log('Code:\n' + Xd(Md));
            console.log('Map:', M);
            console.log('Blocks Used:', C(y, !1).length);

            var payload = {'team': 'Pr0grammers',
                            'map': M,
                            'blocks': C(y, !1).length,
                            'code': Xd(Md)};

            $.ajax({
                  type: 'POST',
                  url: "http://localhost:8000/database/update/",
                  data: JSON.stringify(payload),
                  dataType: "json",
                  success: function(resultData) { console.log("Save Complete") }
            });
        }
        else {
            Q = 150;
        }
        Ve(!1);
        Y.push(setTimeout(ef, 100))
    } else setTimeout(Ze, 250)
}

function ef() {
    var a = le.shift();
    if (a) {
        Wd(a[1]);
        switch (a[0]) {
            case "north":
                Xe([R, S - 1, 4 * T]);
                S--;
                break;
            case "east":
                Xe([R + 1, S, 4 * T]);
                R++;
                break;
            case "south":
                Xe([R, S + 1, 4 * T]);
                S++;
                break;
            case "west":
                Xe([R - 1, S, 4 * T]);
                R--;
                break;
            case "look_north":
                ff(0);
                break;
            case "look_east":
                ff(1);
                break;
            case "look_south":
                ff(2);
                break;
            case "look_west":
                ff(3);
                break;
            case "fail_forward":
                gf(!0);
                break;
            case "fail_backward":
                gf(!1);
                break;
            case "left":
                Xe([R, S, 4 * T - 4]);
                T = hf(T - 1);
                break;
            case "right":
                Xe([R, S, 4 * T + 4]);
                T = hf(T + 1);
                break;
            case "finish":
                We(!0),
                    window.localStorage && (window.localStorage[gd + M] = Ld), setTimeout(P.lC, 1E3)
        }
        Y.push(setTimeout(ef, 5 * Q))
    } else Wd(null), Se()
}

function jf(a) {
    if ("dialogHiddenContent" != document.getElementById("dialogDone").className) {
        var c = document.getElementById("pegSpin"),
            d = P.Tw(c),
            e = a.clientX - (d.x + d.width / 2 - window.pageXOffset);
        a = h.g.Ld.pF(Math.atan((a.clientY - (d.y + d.height / 2 - window.pageYOffset)) / e));
        e = Math.round((0 < e ? a + 90 : a + 270) / 360 * 16);
        16 == e && (e = 15);
        c.style.backgroundPosition = 49 * -e + "px 0px"
    }
}

function Xe(a) {
    var c = [R, S, 4 * T],
        d = [(a[0] - c[0]) / 4, (a[1] - c[1]) / 4, (a[2] - c[2]) / 4];
    Z(c[0] + d[0], c[1] + d[1], kf(c[2] + d[2]));
    Y.push(setTimeout(function() {
        Z(c[0] + 2 * d[0], c[1] + 2 * d[1], kf(c[2] + 2 * d[2]))
    }, Q));
    Y.push(setTimeout(function() {
        Z(c[0] + 3 * d[0], c[1] + 3 * d[1], kf(c[2] + 3 * d[2]))
    }, 2 * Q));
    Y.push(setTimeout(function() {
        Z(a[0], a[1], kf(a[2]))
    }, 3 * Q))
}

function gf(a) {
    var c = 0,
        d = 0;
    switch (T) {
        case 0:
            d = -1;
            break;
        case 1:
            c = 1;
            break;
        case 2:
            d = 1;
            break;
        case 3:
            c = -1
    }
    a || (c = -c, d = -d);
    if (1 == U.Xn) {
        c /= 4;
        d /= 4;
        var e = kf(4 * T);
        Z(R + c, S + d, e);
        y.Yc.play("fail", .5);
        Y.push(setTimeout(function() {
            Z(R, S, e)
        }, Q));
        Y.push(setTimeout(function() {
            Z(R + c, S + d, e);
            y.Yc.play("fail", .5)
        }, 2 * Q));
        Y.push(setTimeout(function() {
            Z(R, S, e)
        }, 3 * Q))
    } else {
        var f = 10 * (Math.random() - .5),
            g = (Math.random() - .5) / 2;
        c += (Math.random() - .5) / 4;
        d += (Math.random() - .5) / 4;
        c /= 8;
        d /= 8;
        var k = 0;
        3 == U.Xn && (k = .01);
        Y.push(setTimeout(function() {
            y.Yc.play("fail",
                .5)
        }, 2 * Q));
        a = function(m) {
            return function() {
                Z(R + c * m, S + d * m, kf(4 * T + g * m), f * m);
                d += k
            }
        };
        for (var l = 1; 100 > l; l++) Y.push(setTimeout(a(l), Q * l / 2))
    }
}

function We(a) {
    var c = kf(4 * T);
    Z(R, S, 16);
    a && y.Yc.play("win", .5);
    Q = 150;
    Y.push(setTimeout(function() {
        Z(R, S, 18)
    }, Q));
    Y.push(setTimeout(function() {
        Z(R, S, 16)
    }, 2 * Q));
    Y.push(setTimeout(function() {
        Z(R, S, c)
    }, 3 * Q))
}

function Z(a, c, d, e) {
    var f = document.getElementById("pegman");
    f.setAttribute("x", 50 * a - 49 * d + 1);
    f.setAttribute("y", 50 * (c + .5) - 26 - 8);
    e ? f.setAttribute("transform", "rotate(" + e + ", " + (50 * a + 25) + ", " + (50 * c + 25) + ")") : f.setAttribute("transform", "rotate(0, 0, 0)");
    c = document.getElementById("clipRect");
    c.setAttribute("x", 50 * a + 1);
    c.setAttribute("y", f.getAttribute("y"))
}

function ff(a) {
    var c = R,
        d = S;
    switch (a) {
        case 0:
            c += .5;
            break;
        case 1:
            c += 1;
            d += .5;
            break;
        case 2:
            c += .5;
            d += 1;
            break;
        case 3:
            d += .5
    }
    c *= 50;
    d *= 50;
    var e = 90 * a - 45;
    a = document.getElementById("look");
    a.setAttribute("transform", "translate(" + c + ", " + d + ") rotate(" + e + " 0 0) scale(.4)");
    c = a.getElementsByTagName("path");
    a.style.display = "inline";
    for (d = 0; a = c[d]; d++) lf(a, Q * d)
}

function lf(a, c) {
    Y.push(setTimeout(function() {
        a.style.display = "inline";
        setTimeout(function() {
            a.style.display = "none"
        }, 2 * Q)
    }, c))
}

function hf(a) {
    a = Math.round(a) % 4;
    0 > a && (a += 4);
    return a
}

function kf(a) {
    a = Math.round(a) % 16;
    0 > a && (a += 16);
    return a
}

function bf(a, c) {
    if (!df(a, null)) throw le.push(["fail_" + (a ? "backward" : "forward"), c]), !1;
    switch (hf(T + a)) {
        case 0:
            S--;
            var d = "north";
            break;
        case 1:
            R++;
            d = "east";
            break;
        case 2:
            S++;
            d = "south";
            break;
        case 3:
            R--, d = "west"
    }
    le.push([d, c])
}

function cf(a, c) {
    a ? (T++, le.push(["right", c])) : (T--, le.push(["left", c]));
    T = hf(T)
}

function df(a, c) {
    switch (hf(T + a)) {
        case 0:
            var d = W[S - 1] && W[S - 1][R];
            var e = "look_north";
            break;
        case 1:
            d = W[S][R + 1];
            e = "look_east";
            break;
        case 2:
            d = W[S + 1] && W[S + 1][R];
            e = "look_south";
            break;
        case 3:
            d = W[S][R - 1], e = "look_west"
    }
    c && le.push([e, c]);
    return 0 !== d && void 0 !== d
}
window.addEventListener("load", function() {
    function a() {
        l.style.top = Math.max(10, m.offsetTop - window.pageYOffset) + "px";
        l.style.left = k ? "10px" : "420px";
        l.style.width = window.innerWidth - 440 + "px"
    }

    function c(n) {
        return function() {
            window.sessionStorage && (window.sessionStorage.Es = Od());
            location = location.protocol + "//" + location.host + location.pathname + "?lang=" + K + "&level=" + M + "&skin=" + n
        }
    }
    document.body.innerHTML = Ie();
    Nd();
    document.querySelector("#pegmanButton>img").style.backgroundImage = "url(" + U.fk + ")";
    for (var d = document.getElementById("pegmanMenu"),
            e = 0; e < Le.length; e++)
        if (e != Je) {
            var f = document.createElement("div"),
                g = document.createElement("img");
            g.src = "common/1x1.gif";
            g.style.backgroundImage = "url(" + Le[e].fk + ")";
            f.appendChild(g);
            d.appendChild(f);
            h.Rh(f, "mousedown", null, c(e))
        } h.Rh(window, "resize", null, Ue);
    d = document.getElementById("pegmanButton");
    h.Rh(d, "mousedown", null, Te);
    d = document.getElementById("pegmanButtonArrow");
    e = document.createTextNode(h.Ya.Tm);
    d.appendChild(e);
    var k = cd(),
        l = document.getElementById("blockly"),
        m = document.getElementById("visualization");
    window.addEventListener("scroll", function() {
        a(null);
        h.Fm(y)
    });
    window.addEventListener("resize", a);
    a(null);
    Td({
        maxBlocks: Ke,
        rtl: k,
        trashcan: !0,
        zoom: {
            startScale: 1 + (1 - M / 10) / 3
        }
    });
    y.Yc.load(U.iu, "win");
    y.Yc.load(U.ir, "fail");
    he(h.P, "moveForward,moveBackward,turnRight,turnLeft,isPathForward,isPathRight,isPathBackward,isPathLeft");
    Re();
    Rd();
    for (d = 0; d < Me; d++)
        for (e = 0; e < Ne; e++) 2 == W[d][e] ? je = {
            x: e,
            y: d
        } : 3 == W[d][e] && (ke = {
            x: e,
            y: d
        });
    Ve(!0);
    D(y, function() {
        var n = fb(y),
            q = document.getElementById("capacity");
        if (Infinity ==
            n) q.style.display = "none";
        else {
            q.style.display = "inline";
            q.innerHTML = "";
            n = Number(n);
            var p = document.createElement("span");
            p.className = "capacityNumber";
            p.appendChild(document.createTextNode(n));
            n = (0 == n ? N("Maze_capacity0") : 1 == n ? N("Maze_capacity1") : N("Maze_capacity2")).split(/%\d/);
            for (var u = 0; u < n.length; u++) q.appendChild(document.createTextNode(n[u])), u != n.length - 1 && q.appendChild(p.cloneNode(!0))
        }
    });
    document.body.addEventListener("mousemove", jf, !0);
    hd("runButton", Ye);
    hd("resetButton", $e);
    1 == M && (h.oc *=
        2, h.Au = h.oc);
    10 == M ? ed(M) || (d = document.getElementById("dialogHelpWallFollow"), P.vm(d, null, !1, !0, {
        width: "30%",
        left: "35%",
        top: "12em"
    }, P.Ny), P.Ky(), setTimeout(P.Uv, 3E5)) : setTimeout(function() {
        D(y, Se);
        Se()
    }, 5E3);
    d = document.getElementById("dialogDoneButtons");
    e = document.createElement("img");
    e.id = "pegSpin";
    e.src = "common/1x1.gif";
    e.style.backgroundImage = "url(" + U.fk + ")";
    d.parentNode.insertBefore(e, d);
    ae();
    be()
});