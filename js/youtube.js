(() => {
    function hi(l) {
        "use strict";
        function e() { }
        function n() { }
        var i = String.fromCharCode,
            t = {}.toString,
            r = t.call(l.SharedArrayBuffer),
            f = t(),
            s = l.Uint8Array,
            o = s || Array,
            a = s ? ArrayBuffer : o,
            u =
                a.isView ||
                function (g) {
                    return g && "length" in g;
                },
            T = t.call(a.prototype);
        a = n.prototype;
        var k = l.TextEncoder,
            m = new (s ? Uint16Array : o)(32);
        (e.prototype.decode = function (g) {
            if (!u(g)) {
                var L = t.call(g);
                if (L !== T && L !== r && L !== f)
                    throw TypeError(
                        "Failed to execute 'decode' on 'TextDecoder': The provided value is not of type '(ArrayBuffer or ArrayBufferView)'"
                    );
                g = s ? new o(g) : g || [];
            }
            for (
                var I = (L = ""),
                w = 0,
                W = g.length | 0,
                ie = (W - 32) | 0,
                U,
                x,
                j = 0,
                G = 0,
                V,
                S = 0,
                M = -1;
                w < W;

            ) {
                for (
                    U = w <= ie ? 32 : (W - w) | 0;
                    S < U;
                    w = (w + 1) | 0, S = (S + 1) | 0
                ) {
                    switch (((x = g[w] & 255), x >> 4)) {
                        case 15:
                            if (((V = g[(w = (w + 1) | 0)] & 255), V >> 6 !== 2 || 247 < x)) {
                                w = (w - 1) | 0;
                                break;
                            }
                            (j = ((x & 7) << 6) | (V & 63)), (G = 5), (x = 256);
                        case 14:
                            (V = g[(w = (w + 1) | 0)] & 255),
                                (j <<= 6),
                                (j |= ((x & 15) << 6) | (V & 63)),
                                (G = V >> 6 === 2 ? (G + 4) | 0 : 24),
                                (x = (x + 256) & 768);
                        case 13:
                        case 12:
                            (V = g[(w = (w + 1) | 0)] & 255),
                                (j <<= 6),
                                (j |= ((x & 31) << 6) | (V & 63)),
                                (G = (G + 7) | 0),
                                w < W && V >> 6 === 2 && j >> G && 1114112 > j
                                    ? ((x = j),
                                        (j = (j - 65536) | 0),
                                        0 <= j &&
                                        ((M = ((j >> 10) + 55296) | 0),
                                            (x = ((j & 1023) + 56320) | 0),
                                            31 > S
                                                ? ((m[S] = M), (S = (S + 1) | 0), (M = -1))
                                                : ((V = M), (M = x), (x = V))))
                                    : ((x >>= 8), (w = (w - x - 1) | 0), (x = 65533)),
                                (j = G = 0),
                                (U = w <= ie ? 32 : (W - w) | 0);
                        default:
                            m[S] = x;
                            continue;
                        case 11:
                        case 10:
                        case 9:
                        case 8:
                    }
                    m[S] = 65533;
                }
                if (
                    ((I += i(
                        m[0],
                        m[1],
                        m[2],
                        m[3],
                        m[4],
                        m[5],
                        m[6],
                        m[7],
                        m[8],
                        m[9],
                        m[10],
                        m[11],
                        m[12],
                        m[13],
                        m[14],
                        m[15],
                        m[16],
                        m[17],
                        m[18],
                        m[19],
                        m[20],
                        m[21],
                        m[22],
                        m[23],
                        m[24],
                        m[25],
                        m[26],
                        m[27],
                        m[28],
                        m[29],
                        m[30],
                        m[31]
                    )),
                        32 > S && (I = I.slice(0, (S - 32) | 0)),
                        w < W)
                ) {
                    if (((m[0] = M), (S = ~M >>> 31), (M = -1), I.length < L.length))
                        continue;
                } else M !== -1 && (I += i(M));
                (L += I), (I = "");
            }
            return L;
        }),
            (a.encode = function (g) {
                g = g === void 0 ? "" : "" + g;
                var L = g.length | 0,
                    I = new o(((L << 1) + 8) | 0),
                    w,
                    W = 0,
                    ie = !s;
                for (w = 0; w < L; w = (w + 1) | 0, W = (W + 1) | 0) {
                    var U = g.charCodeAt(w) | 0;
                    if (127 >= U) I[W] = U;
                    else {
                        if (2047 >= U) I[W] = 192 | (U >> 6);
                        else {
                            e: {
                                if (55296 <= U)
                                    if (56319 >= U) {
                                        var x = g.charCodeAt((w = (w + 1) | 0)) | 0;
                                        if (56320 <= x && 57343 >= x) {
                                            if (((U = ((U << 10) + x - 56613888) | 0), 65535 < U)) {
                                                (I[W] = 240 | (U >> 18)),
                                                    (I[(W = (W + 1) | 0)] = 128 | ((U >> 12) & 63)),
                                                    (I[(W = (W + 1) | 0)] = 128 | ((U >> 6) & 63)),
                                                    (I[(W = (W + 1) | 0)] = 128 | (U & 63));
                                                continue;
                                            }
                                            break e;
                                        }
                                        U = 65533;
                                    } else 57343 >= U && (U = 65533);
                                !ie &&
                                    w << 1 < W &&
                                    w << 1 < ((W - 7) | 0) &&
                                    ((ie = !0), (x = new o(3 * L)), x.set(I), (I = x));
                            }
                            (I[W] = 224 | (U >> 12)),
                                (I[(W = (W + 1) | 0)] = 128 | ((U >> 6) & 63));
                        }
                        I[(W = (W + 1) | 0)] = 128 | (U & 63);
                    }
                }
                return s ? I.subarray(0, W) : I.slice(0, W);
            }),
            (l.TextDecoder = e),
            (l.TextEncoder = n);
    }
    var B = hi(globalThis);
    var re = class {
        constructor(e, n) {
            (this.name = e || ""),
                (this.debug = n.debug || !1),
                e && this.log(`${e} Start`);
        }
        isQuanX() {
            return typeof $task != "undefined";
        }
        isSurge() {
            return (
                typeof $environment != "undefined" && $environment["surge-version"]
            );
        }
        isLoon() {
            return typeof $loon != "undefined";
        }
        isShadowrocket() {
            return typeof $rocket != "undefined";
        }
        isStash() {
            return (
                typeof $environment != "undefined" && $environment["stash-version"]
            );
        }
        getval(e) {
            let n = "";
            return (
                this.isSurge() || this.isLoon() || this.isStash()
                    ? (n = $persistentStore.read(e))
                    : this.isQuanX() && (n = $prefs.valueForKey(e)),
                n == null ? void 0 : n.replace(/\0/g, "")
            );
        }
        setval(e, n) {
            if (this.isSurge() || this.isLoon() || this.isStash())
                return $persistentStore.write(e, n);
            if (this.isQuanX()) return $prefs.setValueForKey(e, n);
        }
        getjson(e, n = {}) {
            let i = this.getval(e);
            return i ? JSON.parse(i) : n;
        }
        setjson(e, n) {
            this.setval(JSON.stringify(e), n);
        }
        msg(e = this.name, n = "", i = "", t) {
            let r = (f) => {
                if (!f) return f;
                if (typeof f == "string")
                    return this.isLoon()
                        ? f
                        : this.isQuanX()
                            ? { "open-url": f }
                            : this.isSurge() || this.isStash()
                                ? { url: f }
                                : void 0;
                if (typeof f == "object") {
                    if (this.isLoon()) {
                        let s = f.openUrl || f.url || f["open-url"],
                            o = f.mediaUrl || f["media-url"];
                        return { openUrl: s, mediaUrl: o };
                    } else if (this.isQuanX()) {
                        let s = f["open-url"] || f.url || f.openUrl,
                            o = f["media-url"] || f.mediaUrl,
                            a = f["update-pasteboard"] || f.updatePasteboard;
                        return { "open-url": s, "media-url": o, "update-pasteboard": a };
                    } else if (this.isSurge() || this.isStash())
                        return { url: f.url || f.openUrl || f["open-url"] };
                } else return;
            };
            this.isSurge() || this.isLoon() || this.isStash()
                ? $notification.post(e, n, i, r(t))
                : this.isQuanX() && $notify(e, n, i, r(t));
        }
        log(e) {
            this.debug &&
                (typeof e == "object" && (e = JSON.stringify(e)), console.log(e));
        }
        done(e = {}) {
            $done(e);
        }
    };
    var E = new re("YouTube", { debug: !1 });
    function le(l) {
        let e = typeof l;
        if (e == "object") {
            if (Array.isArray(l)) return "array";
            if (l === null) return "null";
        }
        return e;
    }
    function Ct(l) {
        return l !== null && typeof l == "object" && !Array.isArray(l);
    }
    var A =
        "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".split(
            ""
        ),
        fe = [];
    for (let l = 0; l < A.length; l++) fe[A[l].charCodeAt(0)] = l;
    fe["-".charCodeAt(0)] = A.indexOf("+");
    fe["_".charCodeAt(0)] = A.indexOf("/");
    function Jt(l) {
        let e = (l.length * 3) / 4;
        l[l.length - 2] == "=" ? (e -= 2) : l[l.length - 1] == "=" && (e -= 1);
        let n = new Uint8Array(e),
            i = 0,
            t = 0,
            r,
            f = 0;
        for (let s = 0; s < l.length; s++) {
            if (((r = fe[l.charCodeAt(s)]), r === void 0))
                switch (l[s]) {
                    case "=":
                        t = 0;
                    case `
`:
                    case "\r":
                    case "	":
                    case " ":
                        continue;
                    default:
                        throw Error("invalid base64 string.");
                }
            switch (t) {
                case 0:
                    (f = r), (t = 1);
                    break;
                case 1:
                    (n[i++] = (f << 2) | ((r & 48) >> 4)), (f = r), (t = 2);
                    break;
                case 2:
                    (n[i++] = ((f & 15) << 4) | ((r & 60) >> 2)), (f = r), (t = 3);
                    break;
                case 3:
                    (n[i++] = ((f & 3) << 6) | r), (t = 0);
                    break;
            }
        }
        if (t == 1) throw Error("invalid base64 string.");
        return n.subarray(0, i);
    }
    function vt(l) {
        let e = "",
            n = 0,
            i,
            t = 0;
        for (let r = 0; r < l.length; r++)
            switch (((i = l[r]), n)) {
                case 0:
                    (e += A[i >> 2]), (t = (i & 3) << 4), (n = 1);
                    break;
                case 1:
                    (e += A[t | (i >> 4)]), (t = (i & 15) << 2), (n = 2);
                    break;
                case 2:
                    (e += A[t | (i >> 6)]), (e += A[i & 63]), (n = 0);
                    break;
            }
        return n && ((e += A[t]), (e += "="), n == 1 && (e += "=")), e;
    }
    var c;
    (function (l) {
        (l.symbol = Symbol.for("protobuf-ts/unknown")),
            (l.onRead = (n, i, t, r, f) => {
                (e(i) ? i[l.symbol] : (i[l.symbol] = [])).push({
                    no: t,
                    wireType: r,
                    data: f,
                });
            }),
            (l.onWrite = (n, i, t) => {
                for (let { no: r, wireType: f, data: s } of l.list(i))
                    t.tag(r, f).raw(s);
            }),
            (l.list = (n, i) => {
                if (e(n)) {
                    let t = n[l.symbol];
                    return i ? t.filter((r) => r.no == i) : t;
                }
                return [];
            }),
            (l.last = (n, i) => l.list(n, i).slice(-1)[0]);
        let e = (n) => n && Array.isArray(n[l.symbol]);
    })(c || (c = {}));
    var h;
    (function (l) {
        (l[(l.Varint = 0)] = "Varint"),
            (l[(l.Bit64 = 1)] = "Bit64"),
            (l[(l.LengthDelimited = 2)] = "LengthDelimited"),
            (l[(l.StartGroup = 3)] = "StartGroup"),
            (l[(l.EndGroup = 4)] = "EndGroup"),
            (l[(l.Bit32 = 5)] = "Bit32");
    })(h || (h = {}));
    function _t() {
        let l = 0,
            e = 0;
        for (let i = 0; i < 28; i += 7) {
            let t = this.buf[this.pos++];
            if (((l |= (t & 127) << i), !(t & 128)))
                return this.assertBounds(), [l, e];
        }
        let n = this.buf[this.pos++];
        if (((l |= (n & 15) << 28), (e = (n & 112) >> 4), !(n & 128)))
            return this.assertBounds(), [l, e];
        for (let i = 3; i <= 31; i += 7) {
            let t = this.buf[this.pos++];
            if (((e |= (t & 127) << i), !(t & 128)))
                return this.assertBounds(), [l, e];
        }
        throw new Error("invalid varint");
    }
    function ce(l, e, n) {
        for (let r = 0; r < 28; r = r + 7) {
            let f = l >>> r,
                s = !(!(f >>> 7) && e == 0),
                o = (s ? f | 128 : f) & 255;
            if ((n.push(o), !s)) return;
        }
        let i = ((l >>> 28) & 15) | ((e & 7) << 4),
            t = !!(e >> 3);
        if ((n.push((t ? i | 128 : i) & 255), !!t)) {
            for (let r = 3; r < 31; r = r + 7) {
                let f = e >>> r,
                    s = !!(f >>> 7),
                    o = (s ? f | 128 : f) & 255;
                if ((n.push(o), !s)) return;
            }
            n.push((e >>> 31) & 1);
        }
    }
    var ue = (1 << 16) * (1 << 16);
    function xe(l) {
        let e = l[0] == "-";
        e && (l = l.slice(1));
        let n = 1e6,
            i = 0,
            t = 0;
        function r(f, s) {
            let o = Number(l.slice(f, s));
            (t *= n),
                (i = i * n + o),
                i >= ue && ((t = t + ((i / ue) | 0)), (i = i % ue));
        }
        return r(-24, -18), r(-18, -12), r(-12, -6), r(-6), [e, i, t];
    }
    function he(l, e) {
        if (e <= 2097151) return "" + (ue * e + (l >>> 0));
        let n = l & 16777215,
            i = (((l >>> 24) | (e << 8)) >>> 0) & 16777215,
            t = (e >> 16) & 65535,
            r = n + i * 6777216 + t * 6710656,
            f = i + t * 8147497,
            s = t * 2,
            o = 1e7;
        r >= o && ((f += Math.floor(r / o)), (r %= o)),
            f >= o && ((s += Math.floor(f / o)), (f %= o));
        function a(u, T) {
            let k = u ? String(u) : "";
            return T ? "0000000".slice(k.length) + k : k;
        }
        return a(s, 0) + a(f, s) + a(r, 1);
    }
    function Oe(l, e) {
        if (l >= 0) {
            for (; l > 127;) e.push((l & 127) | 128), (l = l >>> 7);
            e.push(l);
        } else {
            for (let n = 0; n < 9; n++) e.push((l & 127) | 128), (l = l >> 7);
            e.push(1);
        }
    }
    function Zt() {
        let l = this.buf[this.pos++],
            e = l & 127;
        if (!(l & 128)) return this.assertBounds(), e;
        if (((l = this.buf[this.pos++]), (e |= (l & 127) << 7), !(l & 128)))
            return this.assertBounds(), e;
        if (((l = this.buf[this.pos++]), (e |= (l & 127) << 14), !(l & 128)))
            return this.assertBounds(), e;
        if (((l = this.buf[this.pos++]), (e |= (l & 127) << 21), !(l & 128)))
            return this.assertBounds(), e;
        (l = this.buf[this.pos++]), (e |= (l & 15) << 28);
        for (let n = 5; l & 128 && n < 10; n++) l = this.buf[this.pos++];
        if (l & 128) throw new Error("invalid varint");
        return this.assertBounds(), e >>> 0;
    }
    function di() {
        let l = new DataView(new ArrayBuffer(8));
        return globalThis.BigInt !== void 0 &&
            typeof l.getBigInt64 == "function" &&
            typeof l.getBigUint64 == "function" &&
            typeof l.setBigInt64 == "function" &&
            typeof l.setBigUint64 == "function"
            ? {
                MIN: BigInt("-9223372036854775808"),
                MAX: BigInt("9223372036854775807"),
                UMIN: BigInt("0"),
                UMAX: BigInt("18446744073709551615"),
                C: BigInt,
                V: l,
            }
            : void 0;
    }
    var R = di();
    function Yt(l) {
        if (!l)
            throw new Error(
                "BigInt unavailable, see https://github.com/timostamm/protobuf-ts/blob/v1.0.8/MANUAL.md#bigint-support"
            );
    }
    var qt = /^-?[0-9]+$/,
        de = (1 << 16) * (1 << 16),
        Fe = class {
            constructor(e, n) {
                (this.lo = e | 0), (this.hi = n | 0);
            }
            isZero() {
                return this.lo == 0 && this.hi == 0;
            }
            toNumber() {
                let e = this.hi * de + (this.lo >>> 0);
                if (!Number.isSafeInteger(e))
                    throw new Error("cannot convert to safe number");
                return e;
            }
        },
        O = class extends Fe {
            static from(e) {
                if (R)
                    switch (typeof e) {
                        case "string":
                            if (e == "0") return this.ZERO;
                            if (e == "") throw new Error("string is no integer");
                            e = R.C(e);
                        case "number":
                            if (e === 0) return this.ZERO;
                            e = R.C(e);
                        case "bigint":
                            if (!e) return this.ZERO;
                            if (e < R.UMIN) throw new Error("signed value for ulong");
                            if (e > R.UMAX) throw new Error("ulong too large");
                            return (
                                R.V.setBigUint64(0, e, !0),
                                new O(R.V.getInt32(0, !0), R.V.getInt32(4, !0))
                            );
                    }
                else
                    switch (typeof e) {
                        case "string":
                            if (e == "0") return this.ZERO;
                            if (((e = e.trim()), !qt.test(e)))
                                throw new Error("string is no integer");
                            let [n, i, t] = xe(e);
                            if (n) throw new Error("signed value");
                            return new O(i, t);
                        case "number":
                            if (e == 0) return this.ZERO;
                            if (!Number.isSafeInteger(e))
                                throw new Error("number is no integer");
                            if (e < 0) throw new Error("signed value for ulong");
                            return new O(e, e / de);
                    }
                throw new Error("unknown value " + typeof e);
            }
            toString() {
                return R ? this.toBigInt().toString() : he(this.lo, this.hi);
            }
            toBigInt() {
                return (
                    Yt(R),
                    R.V.setInt32(0, this.lo, !0),
                    R.V.setInt32(4, this.hi, !0),
                    R.V.getBigUint64(0, !0)
                );
            }
        };
    O.ZERO = new O(0, 0);
    var N = class extends Fe {
        static from(e) {
            if (R)
                switch (typeof e) {
                    case "string":
                        if (e == "0") return this.ZERO;
                        if (e == "") throw new Error("string is no integer");
                        e = R.C(e);
                    case "number":
                        if (e === 0) return this.ZERO;
                        e = R.C(e);
                    case "bigint":
                        if (!e) return this.ZERO;
                        if (e < R.MIN) throw new Error("ulong too small");
                        if (e > R.MAX) throw new Error("ulong too large");
                        return (
                            R.V.setBigInt64(0, e, !0),
                            new N(R.V.getInt32(0, !0), R.V.getInt32(4, !0))
                        );
                }
            else
                switch (typeof e) {
                    case "string":
                        if (e == "0") return this.ZERO;
                        if (((e = e.trim()), !qt.test(e)))
                            throw new Error("string is no integer");
                        let [n, i, t] = xe(e),
                            r = new N(i, t);
                        return n ? r.negate() : r;
                    case "number":
                        if (e == 0) return this.ZERO;
                        if (!Number.isSafeInteger(e))
                            throw new Error("number is no integer");
                        return e > 0 ? new N(e, e / de) : new N(-e, -e / de).negate();
                }
            throw new Error("unknown value " + typeof e);
        }
        isNegative() {
            return (this.hi & 2147483648) !== 0;
        }
        negate() {
            let e = ~this.hi,
                n = this.lo;
            return n ? (n = ~n + 1) : (e += 1), new N(n, e);
        }
        toString() {
            if (R) return this.toBigInt().toString();
            if (this.isNegative()) {
                let e = this.negate();
                return "-" + he(e.lo, e.hi);
            }
            return he(this.lo, this.hi);
        }
        toBigInt() {
            return (
                Yt(R),
                R.V.setInt32(0, this.lo, !0),
                R.V.setInt32(4, this.hi, !0),
                R.V.getBigInt64(0, !0)
            );
        }
    };
    N.ZERO = new N(0, 0);
    var Qt = { readUnknownField: !0, readerFactory: (l) => new Ue(l) };
    function zt(l) {
        return l ? Object.assign(Object.assign({}, Qt), l) : Qt;
    }
    var Ue = class {
        constructor(e, n) {
            (this.varint64 = _t),
                (this.uint32 = Zt),
                (this.buf = e),
                (this.len = e.length),
                (this.pos = 0),
                (this.view = new DataView(e.buffer, e.byteOffset, e.byteLength)),
                (this.textDecoder =
                    n != null
                        ? n
                        : new TextDecoder("utf-8", { fatal: !0, ignoreBOM: !0 }));
        }
        tag() {
            let e = this.uint32(),
                n = e >>> 3,
                i = e & 7;
            if (n <= 0 || i < 0 || i > 5)
                throw new Error("illegal tag: field no " + n + " wire type " + i);
            return [n, i];
        }
        skip(e) {
            let n = this.pos;
            switch (e) {
                case h.Varint:
                    for (; this.buf[this.pos++] & 128;);
                    break;
                case h.Bit64:
                    this.pos += 4;
                case h.Bit32:
                    this.pos += 4;
                    break;
                case h.LengthDelimited:
                    let i = this.uint32();
                    this.pos += i;
                    break;
                case h.StartGroup:
                    let t;
                    for (; (t = this.tag()[1]) !== h.EndGroup;) this.skip(t);
                    break;
                default:
                    throw new Error("cant skip wire type " + e);
            }
            return this.assertBounds(), this.buf.subarray(n, this.pos);
        }
        assertBounds() {
            if (this.pos > this.len) throw new RangeError("premature EOF");
        }
        int32() {
            return this.uint32() | 0;
        }
        sint32() {
            let e = this.uint32();
            return (e >>> 1) ^ -(e & 1);
        }
        int64() {
            return new N(...this.varint64());
        }
        uint64() {
            return new O(...this.varint64());
        }
        sint64() {
            let [e, n] = this.varint64(),
                i = -(e & 1);
            return (
                (e = ((e >>> 1) | ((n & 1) << 31)) ^ i),
                (n = (n >>> 1) ^ i),
                new N(e, n)
            );
        }
        bool() {
            let [e, n] = this.varint64();
            return e !== 0 || n !== 0;
        }
        fixed32() {
            return this.view.getUint32((this.pos += 4) - 4, !0);
        }
        sfixed32() {
            return this.view.getInt32((this.pos += 4) - 4, !0);
        }
        fixed64() {
            return new O(this.sfixed32(), this.sfixed32());
        }
        sfixed64() {
            return new N(this.sfixed32(), this.sfixed32());
        }
        float() {
            return this.view.getFloat32((this.pos += 4) - 4, !0);
        }
        double() {
            return this.view.getFloat64((this.pos += 8) - 8, !0);
        }
        bytes() {
            let e = this.uint32(),
                n = this.pos;
            return (this.pos += e), this.assertBounds(), this.buf.subarray(n, n + e);
        }
        string() {
            return this.textDecoder.decode(this.bytes());
        }
    };
    function b(l, e) {
        if (!l) throw new Error(e);
    }
    var Fi = 34028234663852886e22,
        pi = -34028234663852886e22,
        yi = 4294967295,
        mi = 2147483647,
        wi = -2147483648;
    function X(l) {
        if (typeof l != "number") throw new Error("invalid int 32: " + typeof l);
        if (!Number.isInteger(l) || l > mi || l < wi)
            throw new Error("invalid int 32: " + l);
    }
    function C(l) {
        if (typeof l != "number") throw new Error("invalid uint 32: " + typeof l);
        if (!Number.isInteger(l) || l > yi || l < 0)
            throw new Error("invalid uint 32: " + l);
    }
    function v(l) {
        if (typeof l != "number") throw new Error("invalid float 32: " + typeof l);
        if (Number.isFinite(l) && (l > Fi || l < pi))
            throw new Error("invalid float 32: " + l);
    }
    var Ht = { writeUnknownFields: !0, writerFactory: () => new Ee() };
    function ei(l) {
        return l ? Object.assign(Object.assign({}, Ht), l) : Ht;
    }
    var Ee = class {
        constructor(e) {
            (this.stack = []),
                (this.textEncoder = e != null ? e : new TextEncoder()),
                (this.chunks = []),
                (this.buf = []);
        }
        finish() {
            this.chunks.push(new Uint8Array(this.buf));
            let e = 0;
            for (let t = 0; t < this.chunks.length; t++) e += this.chunks[t].length;
            let n = new Uint8Array(e),
                i = 0;
            for (let t = 0; t < this.chunks.length; t++)
                n.set(this.chunks[t], i), (i += this.chunks[t].length);
            return (this.chunks = []), n;
        }
        fork() {
            return (
                this.stack.push({ chunks: this.chunks, buf: this.buf }),
                (this.chunks = []),
                (this.buf = []),
                this
            );
        }
        join() {
            let e = this.finish(),
                n = this.stack.pop();
            if (!n) throw new Error("invalid state, fork stack empty");
            return (
                (this.chunks = n.chunks),
                (this.buf = n.buf),
                this.uint32(e.byteLength),
                this.raw(e)
            );
        }
        tag(e, n) {
            return this.uint32(((e << 3) | n) >>> 0);
        }
        raw(e) {
            return (
                this.buf.length &&
                (this.chunks.push(new Uint8Array(this.buf)), (this.buf = [])),
                this.chunks.push(e),
                this
            );
        }
        uint32(e) {
            for (C(e); e > 127;) this.buf.push((e & 127) | 128), (e = e >>> 7);
            return this.buf.push(e), this;
        }
        int32(e) {
            return X(e), Oe(e, this.buf), this;
        }
        bool(e) {
            return this.buf.push(e ? 1 : 0), this;
        }
        bytes(e) {
            return this.uint32(e.byteLength), this.raw(e);
        }
        string(e) {
            let n = this.textEncoder.encode(e);
            return this.uint32(n.byteLength), this.raw(n);
        }
        float(e) {
            v(e);
            let n = new Uint8Array(4);
            return new DataView(n.buffer).setFloat32(0, e, !0), this.raw(n);
        }
        double(e) {
            let n = new Uint8Array(8);
            return new DataView(n.buffer).setFloat64(0, e, !0), this.raw(n);
        }
        fixed32(e) {
            C(e);
            let n = new Uint8Array(4);
            return new DataView(n.buffer).setUint32(0, e, !0), this.raw(n);
        }
        sfixed32(e) {
            X(e);
            let n = new Uint8Array(4);
            return new DataView(n.buffer).setInt32(0, e, !0), this.raw(n);
        }
        sint32(e) {
            return X(e), (e = ((e << 1) ^ (e >> 31)) >>> 0), Oe(e, this.buf), this;
        }
        sfixed64(e) {
            let n = new Uint8Array(8),
                i = new DataView(n.buffer),
                t = N.from(e);
            return i.setInt32(0, t.lo, !0), i.setInt32(4, t.hi, !0), this.raw(n);
        }
        fixed64(e) {
            let n = new Uint8Array(8),
                i = new DataView(n.buffer),
                t = O.from(e);
            return i.setInt32(0, t.lo, !0), i.setInt32(4, t.hi, !0), this.raw(n);
        }
        int64(e) {
            let n = N.from(e);
            return ce(n.lo, n.hi, this.buf), this;
        }
        sint64(e) {
            let n = N.from(e),
                i = n.hi >> 31,
                t = (n.lo << 1) ^ i,
                r = ((n.hi << 1) | (n.lo >>> 31)) ^ i;
            return ce(t, r, this.buf), this;
        }
        uint64(e) {
            let n = O.from(e);
            return ce(n.lo, n.hi, this.buf), this;
        }
    };
    var ni = {
        emitDefaultValues: !1,
        enumAsInteger: !1,
        useProtoFieldName: !1,
        prettySpaces: 0,
    },
        ti = { ignoreUnknownFields: !1 };
    function ii(l) {
        return l ? Object.assign(Object.assign({}, ti), l) : ti;
    }
    function ri(l) {
        return l ? Object.assign(Object.assign({}, ni), l) : ni;
    }
    var p = Symbol.for("protobuf-ts/message-type");
    function Pe(l) {
        let e = !1,
            n = [];
        for (let i = 0; i < l.length; i++) {
            let t = l.charAt(i);
            t == "_"
                ? (e = !0)
                : /\d/.test(t)
                    ? (n.push(t), (e = !0))
                    : e
                        ? (n.push(t.toUpperCase()), (e = !1))
                        : i == 0
                            ? n.push(t.toLowerCase())
                            : n.push(t);
        }
        return n.join("");
    }
    var d;
    (function (l) {
        (l[(l.DOUBLE = 1)] = "DOUBLE"),
            (l[(l.FLOAT = 2)] = "FLOAT"),
            (l[(l.INT64 = 3)] = "INT64"),
            (l[(l.UINT64 = 4)] = "UINT64"),
            (l[(l.INT32 = 5)] = "INT32"),
            (l[(l.FIXED64 = 6)] = "FIXED64"),
            (l[(l.FIXED32 = 7)] = "FIXED32"),
            (l[(l.BOOL = 8)] = "BOOL"),
            (l[(l.STRING = 9)] = "STRING"),
            (l[(l.BYTES = 12)] = "BYTES"),
            (l[(l.UINT32 = 13)] = "UINT32"),
            (l[(l.SFIXED32 = 15)] = "SFIXED32"),
            (l[(l.SFIXED64 = 16)] = "SFIXED64"),
            (l[(l.SINT32 = 17)] = "SINT32"),
            (l[(l.SINT64 = 18)] = "SINT64");
    })(d || (d = {}));
    var P;
    (function (l) {
        (l[(l.BIGINT = 0)] = "BIGINT"),
            (l[(l.STRING = 1)] = "STRING"),
            (l[(l.NUMBER = 2)] = "NUMBER");
    })(P || (P = {}));
    var se;
    (function (l) {
        (l[(l.NO = 0)] = "NO"),
            (l[(l.PACKED = 1)] = "PACKED"),
            (l[(l.UNPACKED = 2)] = "UNPACKED");
    })(se || (se = {}));
    function si(l) {
        var e, n, i, t;
        return (
            (l.localName =
                (e = l.localName) !== null && e !== void 0 ? e : Pe(l.name)),
            (l.jsonName = (n = l.jsonName) !== null && n !== void 0 ? n : Pe(l.name)),
            (l.repeat = (i = l.repeat) !== null && i !== void 0 ? i : se.NO),
            (l.opt =
                (t = l.opt) !== null && t !== void 0
                    ? t
                    : l.repeat || l.oneof
                        ? !1
                        : l.kind == "message"),
            l
        );
    }
    function ai(l) {
        if (typeof l != "object" || l === null || !l.hasOwnProperty("oneofKind"))
            return !1;
        switch (typeof l.oneofKind) {
            case "string":
                return l[l.oneofKind] === void 0 ? !1 : Object.keys(l).length == 2;
            case "undefined":
                return Object.keys(l).length == 1;
            default:
                return !1;
        }
    }
    var pe = class {
        constructor(e) {
            var n;
            this.fields = (n = e.fields) !== null && n !== void 0 ? n : [];
        }
        prepare() {
            if (this.data) return;
            let e = [],
                n = [],
                i = [];
            for (let t of this.fields)
                if (t.oneof)
                    i.includes(t.oneof) ||
                        (i.push(t.oneof), e.push(t.oneof), n.push(t.oneof));
                else
                    switch ((n.push(t.localName), t.kind)) {
                        case "scalar":
                        case "enum":
                            (!t.opt || t.repeat) && e.push(t.localName);
                            break;
                        case "message":
                            t.repeat && e.push(t.localName);
                            break;
                        case "map":
                            e.push(t.localName);
                            break;
                    }
            this.data = { req: e, known: n, oneofs: Object.values(i) };
        }
        is(e, n, i = !1) {
            if (n < 0) return !0;
            if (e == null || typeof e != "object") return !1;
            this.prepare();
            let t = Object.keys(e),
                r = this.data;
            if (
                t.length < r.req.length ||
                r.req.some((f) => !t.includes(f)) ||
                (!i && t.some((f) => !r.known.includes(f)))
            )
                return !1;
            if (n < 1) return !0;
            for (let f of r.oneofs) {
                let s = e[f];
                if (!ai(s)) return !1;
                if (s.oneofKind === void 0) continue;
                let o = this.fields.find((a) => a.localName === s.oneofKind);
                if (!o || !this.field(s[s.oneofKind], o, i, n)) return !1;
            }
            for (let f of this.fields)
                if (f.oneof === void 0 && !this.field(e[f.localName], f, i, n))
                    return !1;
            return !0;
        }
        field(e, n, i, t) {
            let r = n.repeat;
            switch (n.kind) {
                case "scalar":
                    return e === void 0
                        ? n.opt
                        : r
                            ? this.scalars(e, n.T, t, n.L)
                            : this.scalar(e, n.T, n.L);
                case "enum":
                    return e === void 0
                        ? n.opt
                        : r
                            ? this.scalars(e, d.INT32, t)
                            : this.scalar(e, d.INT32);
                case "message":
                    return e === void 0
                        ? !0
                        : r
                            ? this.messages(e, n.T(), i, t)
                            : this.message(e, n.T(), i, t);
                case "map":
                    if (typeof e != "object" || e === null) return !1;
                    if (t < 2) return !0;
                    if (!this.mapKeys(e, n.K, t)) return !1;
                    switch (n.V.kind) {
                        case "scalar":
                            return this.scalars(Object.values(e), n.V.T, t, n.V.L);
                        case "enum":
                            return this.scalars(Object.values(e), d.INT32, t);
                        case "message":
                            return this.messages(Object.values(e), n.V.T(), i, t);
                    }
                    break;
            }
            return !0;
        }
        message(e, n, i, t) {
            return i ? n.isAssignable(e, t) : n.is(e, t);
        }
        messages(e, n, i, t) {
            if (!Array.isArray(e)) return !1;
            if (t < 2) return !0;
            if (i) {
                for (let r = 0; r < e.length && r < t; r++)
                    if (!n.isAssignable(e[r], t - 1)) return !1;
            } else
                for (let r = 0; r < e.length && r < t; r++)
                    if (!n.is(e[r], t - 1)) return !1;
            return !0;
        }
        scalar(e, n, i) {
            let t = typeof e;
            switch (n) {
                case d.UINT64:
                case d.FIXED64:
                case d.INT64:
                case d.SFIXED64:
                case d.SINT64:
                    switch (i) {
                        case P.BIGINT:
                            return t == "bigint";
                        case P.NUMBER:
                            return t == "number" && !isNaN(e);
                        default:
                            return t == "string";
                    }
                case d.BOOL:
                    return t == "boolean";
                case d.STRING:
                    return t == "string";
                case d.BYTES:
                    return e instanceof Uint8Array;
                case d.DOUBLE:
                case d.FLOAT:
                    return t == "number" && !isNaN(e);
                default:
                    return t == "number" && Number.isInteger(e);
            }
        }
        scalars(e, n, i, t) {
            if (!Array.isArray(e)) return !1;
            if (i < 2) return !0;
            if (Array.isArray(e)) {
                for (let r = 0; r < e.length && r < i; r++)
                    if (!this.scalar(e[r], n, t)) return !1;
            }
            return !0;
        }
        mapKeys(e, n, i) {
            let t = Object.keys(e);
            switch (n) {
                case d.INT32:
                case d.FIXED32:
                case d.SFIXED32:
                case d.SINT32:
                case d.UINT32:
                    return this.scalars(
                        t.slice(0, i).map((r) => parseInt(r)),
                        n,
                        i
                    );
                case d.BOOL:
                    return this.scalars(
                        t
                            .slice(0, i)
                            .map((r) => (r == "true" ? !0 : r == "false" ? !1 : r)),
                        n,
                        i
                    );
                default:
                    return this.scalars(t, n, i, P.STRING);
            }
        }
    };
    function D(l, e) {
        switch (e) {
            case P.BIGINT:
                return l.toBigInt();
            case P.NUMBER:
                return l.toNumber();
            default:
                return l.toString();
        }
    }
    var ye = class {
        constructor(e) {
            this.info = e;
        }
        prepare() {
            var e;
            if (this.fMap === void 0) {
                this.fMap = {};
                let n = (e = this.info.fields) !== null && e !== void 0 ? e : [];
                for (let i of n)
                    (this.fMap[i.name] = i),
                        (this.fMap[i.jsonName] = i),
                        (this.fMap[i.localName] = i);
            }
        }
        assert(e, n, i) {
            if (!e) {
                let t = le(i);
                throw (
                    ((t == "number" || t == "boolean") && (t = i.toString()),
                        new Error(`Cannot parse JSON ${t} for ${this.info.typeName}#${n}`))
                );
            }
        }
        read(e, n, i) {
            this.prepare();
            let t = [];
            for (let [r, f] of Object.entries(e)) {
                let s = this.fMap[r];
                if (!s) {
                    if (!i.ignoreUnknownFields)
                        throw new Error(
                            `Found unknown field while reading ${this.info.typeName} from JSON format. JSON key: ${r}`
                        );
                    continue;
                }
                let o = s.localName,
                    a;
                if (s.oneof) {
                    if (t.includes(s.oneof))
                        throw new Error(
                            `Multiple members of the oneof group "${s.oneof}" of ${this.info.typeName} are present in JSON.`
                        );
                    t.push(s.oneof), (a = n[s.oneof] = { oneofKind: o });
                } else a = n;
                if (s.kind == "map") {
                    if (f === null) continue;
                    this.assert(Ct(f), s.name, f);
                    let u = a[o];
                    for (let [T, k] of Object.entries(f)) {
                        this.assert(k !== null, s.name + " map value", null);
                        let m;
                        switch (s.V.kind) {
                            case "message":
                                m = s.V.T().internalJsonRead(k, i);
                                break;
                            case "enum":
                                if (
                                    ((m = this.enum(s.V.T(), k, s.name, i.ignoreUnknownFields)),
                                        m === !1)
                                )
                                    continue;
                                break;
                            case "scalar":
                                m = this.scalar(k, s.V.T, s.V.L, s.name);
                                break;
                        }
                        this.assert(m !== void 0, s.name + " map value", k);
                        let g = T;
                        s.K == d.BOOL && (g = g == "true" ? !0 : g == "false" ? !1 : g),
                            (g = this.scalar(g, s.K, P.STRING, s.name).toString()),
                            (u[g] = m);
                    }
                } else if (s.repeat) {
                    if (f === null) continue;
                    this.assert(Array.isArray(f), s.name, f);
                    let u = a[o];
                    for (let T of f) {
                        this.assert(T !== null, s.name, null);
                        let k;
                        switch (s.kind) {
                            case "message":
                                k = s.T().internalJsonRead(T, i);
                                break;
                            case "enum":
                                if (
                                    ((k = this.enum(s.T(), T, s.name, i.ignoreUnknownFields)),
                                        k === !1)
                                )
                                    continue;
                                break;
                            case "scalar":
                                k = this.scalar(T, s.T, s.L, s.name);
                                break;
                        }
                        this.assert(k !== void 0, s.name, f), u.push(k);
                    }
                } else
                    switch (s.kind) {
                        case "message":
                            if (f === null && s.T().typeName != "google.protobuf.Value") {
                                this.assert(
                                    s.oneof === void 0,
                                    s.name + " (oneof member)",
                                    null
                                );
                                continue;
                            }
                            a[o] = s.T().internalJsonRead(f, i, a[o]);
                            break;
                        case "enum":
                            let u = this.enum(s.T(), f, s.name, i.ignoreUnknownFields);
                            if (u === !1) continue;
                            a[o] = u;
                            break;
                        case "scalar":
                            a[o] = this.scalar(f, s.T, s.L, s.name);
                            break;
                    }
            }
        }
        enum(e, n, i, t) {
            if (
                (e[0] == "google.protobuf.NullValue" &&
                    b(
                        n === null,
                        `Unable to parse field ${this.info.typeName}#${i}, enum ${e[0]} only accepts null.`
                    ),
                    n === null)
            )
                return 0;
            switch (typeof n) {
                case "number":
                    return (
                        b(
                            Number.isInteger(n),
                            `Unable to parse field ${this.info.typeName}#${i}, enum can only be integral number, got ${n}.`
                        ),
                        n
                    );
                case "string":
                    let r = n;
                    e[2] &&
                        n.substring(0, e[2].length) === e[2] &&
                        (r = n.substring(e[2].length));
                    let f = e[1][r];
                    return typeof f == "undefined" && t
                        ? !1
                        : (b(
                            typeof f == "number",
                            `Unable to parse field ${this.info.typeName}#${i}, enum ${e[0]} has no value for "${n}".`
                        ),
                            f);
            }
            b(
                !1,
                `Unable to parse field ${this.info.typeName
                }#${i}, cannot parse enum value from ${typeof n}".`
            );
        }
        scalar(e, n, i, t) {
            let r;
            try {
                switch (n) {
                    case d.DOUBLE:
                    case d.FLOAT:
                        if (e === null) return 0;
                        if (e === "NaN") return Number.NaN;
                        if (e === "Infinity") return Number.POSITIVE_INFINITY;
                        if (e === "-Infinity") return Number.NEGATIVE_INFINITY;
                        if (e === "") {
                            r = "empty string";
                            break;
                        }
                        if (typeof e == "string" && e.trim().length !== e.length) {
                            r = "extra whitespace";
                            break;
                        }
                        if (typeof e != "string" && typeof e != "number") break;
                        let f = Number(e);
                        if (Number.isNaN(f)) {
                            r = "not a number";
                            break;
                        }
                        if (!Number.isFinite(f)) {
                            r = "too large or small";
                            break;
                        }
                        return n == d.FLOAT && v(f), f;
                    case d.INT32:
                    case d.FIXED32:
                    case d.SFIXED32:
                    case d.SINT32:
                    case d.UINT32:
                        if (e === null) return 0;
                        let s;
                        if (
                            (typeof e == "number"
                                ? (s = e)
                                : e === ""
                                    ? (r = "empty string")
                                    : typeof e == "string" &&
                                    (e.trim().length !== e.length
                                        ? (r = "extra whitespace")
                                        : (s = Number(e))),
                                s === void 0)
                        )
                            break;
                        return n == d.UINT32 ? C(s) : X(s), s;
                    case d.INT64:
                    case d.SFIXED64:
                    case d.SINT64:
                        if (e === null) return D(N.ZERO, i);
                        if (typeof e != "number" && typeof e != "string") break;
                        return D(N.from(e), i);
                    case d.FIXED64:
                    case d.UINT64:
                        if (e === null) return D(O.ZERO, i);
                        if (typeof e != "number" && typeof e != "string") break;
                        return D(O.from(e), i);
                    case d.BOOL:
                        if (e === null) return !1;
                        if (typeof e != "boolean") break;
                        return e;
                    case d.STRING:
                        if (e === null) return "";
                        if (typeof e != "string") {
                            r = "extra whitespace";
                            break;
                        }
                        try {
                            encodeURIComponent(e);
                        } catch (o) {
                            o = "invalid UTF8";
                            break;
                        }
                        return e;
                    case d.BYTES:
                        if (e === null || e === "") return new Uint8Array(0);
                        if (typeof e != "string") break;
                        return Jt(e);
                }
            } catch (f) {
                r = f.message;
            }
            this.assert(!1, t + (r ? " - " + r : ""), e);
        }
    };
    var me = class {
        constructor(e) {
            var n;
            this.fields = (n = e.fields) !== null && n !== void 0 ? n : [];
        }
        write(e, n) {
            let i = {},
                t = e;
            for (let r of this.fields) {
                if (!r.oneof) {
                    let a = this.field(r, t[r.localName], n);
                    a !== void 0 && (i[n.useProtoFieldName ? r.name : r.jsonName] = a);
                    continue;
                }
                let f = t[r.oneof];
                if (f.oneofKind !== r.localName) continue;
                let s =
                    r.kind == "scalar" || r.kind == "enum"
                        ? Object.assign(Object.assign({}, n), { emitDefaultValues: !0 })
                        : n,
                    o = this.field(r, f[r.localName], s);
                b(o !== void 0), (i[n.useProtoFieldName ? r.name : r.jsonName] = o);
            }
            return i;
        }
        field(e, n, i) {
            let t;
            if (e.kind == "map") {
                b(typeof n == "object" && n !== null);
                let r = {};
                switch (e.V.kind) {
                    case "scalar":
                        for (let [o, a] of Object.entries(n)) {
                            let u = this.scalar(e.V.T, a, e.name, !1, !0);
                            b(u !== void 0), (r[o.toString()] = u);
                        }
                        break;
                    case "message":
                        let f = e.V.T();
                        for (let [o, a] of Object.entries(n)) {
                            let u = this.message(f, a, e.name, i);
                            b(u !== void 0), (r[o.toString()] = u);
                        }
                        break;
                    case "enum":
                        let s = e.V.T();
                        for (let [o, a] of Object.entries(n)) {
                            b(a === void 0 || typeof a == "number");
                            let u = this.enum(s, a, e.name, !1, !0, i.enumAsInteger);
                            b(u !== void 0), (r[o.toString()] = u);
                        }
                        break;
                }
                (i.emitDefaultValues || Object.keys(r).length > 0) && (t = r);
            } else if (e.repeat) {
                b(Array.isArray(n));
                let r = [];
                switch (e.kind) {
                    case "scalar":
                        for (let o = 0; o < n.length; o++) {
                            let a = this.scalar(e.T, n[o], e.name, e.opt, !0);
                            b(a !== void 0), r.push(a);
                        }
                        break;
                    case "enum":
                        let f = e.T();
                        for (let o = 0; o < n.length; o++) {
                            b(n[o] === void 0 || typeof n[o] == "number");
                            let a = this.enum(f, n[o], e.name, e.opt, !0, i.enumAsInteger);
                            b(a !== void 0), r.push(a);
                        }
                        break;
                    case "message":
                        let s = e.T();
                        for (let o = 0; o < n.length; o++) {
                            let a = this.message(s, n[o], e.name, i);
                            b(a !== void 0), r.push(a);
                        }
                        break;
                }
                (i.emitDefaultValues || r.length > 0 || i.emitDefaultValues) && (t = r);
            } else
                switch (e.kind) {
                    case "scalar":
                        t = this.scalar(e.T, n, e.name, e.opt, i.emitDefaultValues);
                        break;
                    case "enum":
                        t = this.enum(
                            e.T(),
                            n,
                            e.name,
                            e.opt,
                            i.emitDefaultValues,
                            i.enumAsInteger
                        );
                        break;
                    case "message":
                        t = this.message(e.T(), n, e.name, i);
                        break;
                }
            return t;
        }
        enum(e, n, i, t, r, f) {
            if (e[0] == "google.protobuf.NullValue") return null;
            if (n === void 0) {
                b(t);
                return;
            }
            if (!(n === 0 && !r && !t))
                return (
                    b(typeof n == "number"),
                    b(Number.isInteger(n)),
                    f || !e[1].hasOwnProperty(n) ? n : e[2] ? e[2] + e[1][n] : e[1][n]
                );
        }
        message(e, n, i, t) {
            return n === void 0
                ? t.emitDefaultValues
                    ? null
                    : void 0
                : e.internalJsonWrite(n, t);
        }
        scalar(e, n, i, t, r) {
            if (n === void 0) {
                b(t);
                return;
            }
            let f = r || t;
            switch (e) {
                case d.INT32:
                case d.SFIXED32:
                case d.SINT32:
                    return n === 0 ? (f ? 0 : void 0) : (X(n), n);
                case d.FIXED32:
                case d.UINT32:
                    return n === 0 ? (f ? 0 : void 0) : (C(n), n);
                case d.FLOAT:
                    v(n);
                case d.DOUBLE:
                    return n === 0
                        ? f
                            ? 0
                            : void 0
                        : (b(typeof n == "number"),
                            Number.isNaN(n)
                                ? "NaN"
                                : n === Number.POSITIVE_INFINITY
                                    ? "Infinity"
                                    : n === Number.NEGATIVE_INFINITY
                                        ? "-Infinity"
                                        : n);
                case d.STRING:
                    return n === "" ? (f ? "" : void 0) : (b(typeof n == "string"), n);
                case d.BOOL:
                    return n === !1 ? (f ? !1 : void 0) : (b(typeof n == "boolean"), n);
                case d.UINT64:
                case d.FIXED64:
                    b(
                        typeof n == "number" || typeof n == "string" || typeof n == "bigint"
                    );
                    let s = O.from(n);
                    return s.isZero() && !f ? void 0 : s.toString();
                case d.INT64:
                case d.SFIXED64:
                case d.SINT64:
                    b(
                        typeof n == "number" || typeof n == "string" || typeof n == "bigint"
                    );
                    let o = N.from(n);
                    return o.isZero() && !f ? void 0 : o.toString();
                case d.BYTES:
                    return (
                        b(n instanceof Uint8Array), n.byteLength ? vt(n) : f ? "" : void 0
                    );
            }
        }
    };
    function ae(l, e = P.STRING) {
        switch (l) {
            case d.BOOL:
                return !1;
            case d.UINT64:
            case d.FIXED64:
                return D(O.ZERO, e);
            case d.INT64:
            case d.SFIXED64:
            case d.SINT64:
                return D(N.ZERO, e);
            case d.DOUBLE:
            case d.FLOAT:
                return 0;
            case d.BYTES:
                return new Uint8Array(0);
            case d.STRING:
                return "";
            default:
                return 0;
        }
    }
    var we = class {
        constructor(e) {
            this.info = e;
        }
        prepare() {
            var e;
            if (!this.fieldNoToField) {
                let n = (e = this.info.fields) !== null && e !== void 0 ? e : [];
                this.fieldNoToField = new Map(n.map((i) => [i.no, i]));
            }
        }
        read(e, n, i, t) {
            this.prepare();
            let r = t === void 0 ? e.len : e.pos + t;
            for (; e.pos < r;) {
                let [f, s] = e.tag(),
                    o = this.fieldNoToField.get(f);
                if (!o) {
                    let k = i.readUnknownField;
                    if (k == "throw")
                        throw new Error(
                            `Unknown field ${f} (wire type ${s}) for ${this.info.typeName}`
                        );
                    let m = e.skip(s);
                    k !== !1 && (k === !0 ? c.onRead : k)(this.info.typeName, n, f, s, m);
                    continue;
                }
                let a = n,
                    u = o.repeat,
                    T = o.localName;
                switch (
                (o.oneof &&
                    ((a = a[o.oneof]),
                        a.oneofKind !== T && (a = n[o.oneof] = { oneofKind: T })),
                    o.kind)
                ) {
                    case "scalar":
                    case "enum":
                        let k = o.kind == "enum" ? d.INT32 : o.T,
                            m = o.kind == "scalar" ? o.L : void 0;
                        if (u) {
                            let I = a[T];
                            if (s == h.LengthDelimited && k != d.STRING && k != d.BYTES) {
                                let w = e.uint32() + e.pos;
                                for (; e.pos < w;) I.push(this.scalar(e, k, m));
                            } else I.push(this.scalar(e, k, m));
                        } else a[T] = this.scalar(e, k, m);
                        break;
                    case "message":
                        if (u) {
                            let I = a[T],
                                w = o.T().internalBinaryRead(e, e.uint32(), i);
                            I.push(w);
                        } else a[T] = o.T().internalBinaryRead(e, e.uint32(), i, a[T]);
                        break;
                    case "map":
                        let [g, L] = this.mapEntry(o, e, i);
                        a[T][g] = L;
                        break;
                }
            }
        }
        mapEntry(e, n, i) {
            let t = n.uint32(),
                r = n.pos + t,
                f,
                s;
            for (; n.pos < r;) {
                let [o, a] = n.tag();
                switch (o) {
                    case 1:
                        e.K == d.BOOL
                            ? (f = n.bool().toString())
                            : (f = this.scalar(n, e.K, P.STRING));
                        break;
                    case 2:
                        switch (e.V.kind) {
                            case "scalar":
                                s = this.scalar(n, e.V.T, e.V.L);
                                break;
                            case "enum":
                                s = n.int32();
                                break;
                            case "message":
                                s = e.V.T().internalBinaryRead(n, n.uint32(), i);
                                break;
                        }
                        break;
                    default:
                        throw new Error(
                            `Unknown field ${o} (wire type ${a}) in map entry for ${this.info.typeName}#${e.name}`
                        );
                }
            }
            if (f === void 0) {
                let o = ae(e.K);
                f = e.K == d.BOOL ? o.toString() : o;
            }
            if (s === void 0)
                switch (e.V.kind) {
                    case "scalar":
                        s = ae(e.V.T, e.V.L);
                        break;
                    case "enum":
                        s = 0;
                        break;
                    case "message":
                        s = e.V.T().create();
                        break;
                }
            return [f, s];
        }
        scalar(e, n, i) {
            switch (n) {
                case d.INT32:
                    return e.int32();
                case d.STRING:
                    return e.string();
                case d.BOOL:
                    return e.bool();
                case d.DOUBLE:
                    return e.double();
                case d.FLOAT:
                    return e.float();
                case d.INT64:
                    return D(e.int64(), i);
                case d.UINT64:
                    return D(e.uint64(), i);
                case d.FIXED64:
                    return D(e.fixed64(), i);
                case d.FIXED32:
                    return e.fixed32();
                case d.BYTES:
                    return e.bytes();
                case d.UINT32:
                    return e.uint32();
                case d.SFIXED32:
                    return e.sfixed32();
                case d.SFIXED64:
                    return D(e.sfixed64(), i);
                case d.SINT32:
                    return e.sint32();
                case d.SINT64:
                    return D(e.sint64(), i);
            }
        }
    };
    var be = class {
        constructor(e) {
            this.info = e;
        }
        prepare() {
            if (!this.fields) {
                let e = this.info.fields ? this.info.fields.concat() : [];
                this.fields = e.sort((n, i) => n.no - i.no);
            }
        }
        write(e, n, i) {
            this.prepare();
            for (let r of this.fields) {
                let f,
                    s,
                    o = r.repeat,
                    a = r.localName;
                if (r.oneof) {
                    let u = e[r.oneof];
                    if (u.oneofKind !== a) continue;
                    (f = u[a]), (s = !0);
                } else (f = e[a]), (s = !1);
                switch (r.kind) {
                    case "scalar":
                    case "enum":
                        let u = r.kind == "enum" ? d.INT32 : r.T;
                        if (o)
                            if ((b(Array.isArray(f)), o == se.PACKED))
                                this.packed(n, u, r.no, f);
                            else for (let T of f) this.scalar(n, u, r.no, T, !0);
                        else
                            f === void 0 ? b(r.opt) : this.scalar(n, u, r.no, f, s || r.opt);
                        break;
                    case "message":
                        if (o) {
                            b(Array.isArray(f));
                            for (let T of f) this.message(n, i, r.T(), r.no, T);
                        } else this.message(n, i, r.T(), r.no, f);
                        break;
                    case "map":
                        b(typeof f == "object" && f !== null);
                        for (let [T, k] of Object.entries(f)) this.mapEntry(n, i, r, T, k);
                        break;
                }
            }
            let t = i.writeUnknownFields;
            t !== !1 && (t === !0 ? c.onWrite : t)(this.info.typeName, e, n);
        }
        mapEntry(e, n, i, t, r) {
            e.tag(i.no, h.LengthDelimited), e.fork();
            let f = t;
            switch (i.K) {
                case d.INT32:
                case d.FIXED32:
                case d.UINT32:
                case d.SFIXED32:
                case d.SINT32:
                    f = Number.parseInt(t);
                    break;
                case d.BOOL:
                    b(t == "true" || t == "false"), (f = t == "true");
                    break;
            }
            switch ((this.scalar(e, i.K, 1, f, !0), i.V.kind)) {
                case "scalar":
                    this.scalar(e, i.V.T, 2, r, !0);
                    break;
                case "enum":
                    this.scalar(e, d.INT32, 2, r, !0);
                    break;
                case "message":
                    this.message(e, n, i.V.T(), 2, r);
                    break;
            }
            e.join();
        }
        message(e, n, i, t, r) {
            r !== void 0 &&
                (i.internalBinaryWrite(r, e.tag(t, h.LengthDelimited).fork(), n),
                    e.join());
        }
        scalar(e, n, i, t, r) {
            let [f, s, o] = this.scalarInfo(n, t);
            (!o || r) && (e.tag(i, f), e[s](t));
        }
        packed(e, n, i, t) {
            if (!t.length) return;
            b(n !== d.BYTES && n !== d.STRING), e.tag(i, h.LengthDelimited), e.fork();
            let [, r] = this.scalarInfo(n);
            for (let f = 0; f < t.length; f++) e[r](t[f]);
            e.join();
        }
        scalarInfo(e, n) {
            let i = h.Varint,
                t,
                r = n === void 0,
                f = n === 0;
            switch (e) {
                case d.INT32:
                    t = "int32";
                    break;
                case d.STRING:
                    (f = r || !n.length), (i = h.LengthDelimited), (t = "string");
                    break;
                case d.BOOL:
                    (f = n === !1), (t = "bool");
                    break;
                case d.UINT32:
                    t = "uint32";
                    break;
                case d.DOUBLE:
                    (i = h.Bit64), (t = "double");
                    break;
                case d.FLOAT:
                    (i = h.Bit32), (t = "float");
                    break;
                case d.INT64:
                    (f = r || N.from(n).isZero()), (t = "int64");
                    break;
                case d.UINT64:
                    (f = r || O.from(n).isZero()), (t = "uint64");
                    break;
                case d.FIXED64:
                    (f = r || O.from(n).isZero()), (i = h.Bit64), (t = "fixed64");
                    break;
                case d.BYTES:
                    (f = r || !n.byteLength), (i = h.LengthDelimited), (t = "bytes");
                    break;
                case d.FIXED32:
                    (i = h.Bit32), (t = "fixed32");
                    break;
                case d.SFIXED32:
                    (i = h.Bit32), (t = "sfixed32");
                    break;
                case d.SFIXED64:
                    (f = r || N.from(n).isZero()), (i = h.Bit64), (t = "sfixed64");
                    break;
                case d.SINT32:
                    t = "sint32";
                    break;
                case d.SINT64:
                    (f = r || N.from(n).isZero()), (t = "sint64");
                    break;
            }
            return [i, t, r || f];
        }
    };
    function oi(l) {
        let e = {};
        Object.defineProperty(e, p, { enumerable: !1, value: l });
        for (let n of l.fields) {
            let i = n.localName;
            if (!n.opt)
                if (n.oneof) e[n.oneof] = { oneofKind: void 0 };
                else if (n.repeat) e[i] = [];
                else
                    switch (n.kind) {
                        case "scalar":
                            e[i] = ae(n.T, n.L);
                            break;
                        case "enum":
                            e[i] = 0;
                            break;
                        case "map":
                            e[i] = {};
                            break;
                    }
        }
        return e;
    }
    function F(l, e, n) {
        let i,
            t = n,
            r;
        for (let f of l.fields) {
            let s = f.localName;
            if (f.oneof) {
                let o = t[f.oneof];
                if (o == null) continue;
                if (
                    ((i = o[s]), (r = e[f.oneof]), (r.oneofKind = o.oneofKind), i == null)
                ) {
                    delete r[s];
                    continue;
                }
            } else if (((i = t[s]), (r = e), i == null)) continue;
            switch ((f.repeat && (r[s].length = i.length), f.kind)) {
                case "scalar":
                case "enum":
                    if (f.repeat) for (let a = 0; a < i.length; a++) r[s][a] = i[a];
                    else r[s] = i;
                    break;
                case "message":
                    let o = f.T();
                    if (f.repeat)
                        for (let a = 0; a < i.length; a++) r[s][a] = o.create(i[a]);
                    else r[s] === void 0 ? (r[s] = o.create(i)) : o.mergePartial(r[s], i);
                    break;
                case "map":
                    switch (f.V.kind) {
                        case "scalar":
                        case "enum":
                            Object.assign(r[s], i);
                            break;
                        case "message":
                            let a = f.V.T();
                            for (let u of Object.keys(i)) r[s][u] = a.create(i[u]);
                            break;
                    }
                    break;
            }
        }
    }
    function ui(l, e, n) {
        if (e === n) return !0;
        if (!e || !n) return !1;
        for (let i of l.fields) {
            let t = i.localName,
                r = i.oneof ? e[i.oneof][t] : e[t],
                f = i.oneof ? n[i.oneof][t] : n[t];
            switch (i.kind) {
                case "enum":
                case "scalar":
                    let s = i.kind == "enum" ? d.INT32 : i.T;
                    if (!(i.repeat ? li(s, r, f) : ci(s, r, f))) return !1;
                    break;
                case "map":
                    if (
                        !(i.V.kind == "message"
                            ? fi(i.V.T(), Be(r), Be(f))
                            : li(i.V.kind == "enum" ? d.INT32 : i.V.T, Be(r), Be(f)))
                    )
                        return !1;
                    break;
                case "message":
                    let o = i.T();
                    if (!(i.repeat ? fi(o, r, f) : o.equals(r, f))) return !1;
                    break;
            }
        }
        return !0;
    }
    var Be = Object.values;
    function ci(l, e, n) {
        if (e === n) return !0;
        if (l !== d.BYTES) return !1;
        let i = e,
            t = n;
        if (i.length !== t.length) return !1;
        for (let r = 0; r < i.length; r++) if (i[r] != t[r]) return !1;
        return !0;
    }
    function li(l, e, n) {
        if (e.length !== n.length) return !1;
        for (let i = 0; i < e.length; i++) if (!ci(l, e[i], n[i])) return !1;
        return !0;
    }
    function fi(l, e, n) {
        if (e.length !== n.length) return !1;
        for (let i = 0; i < e.length; i++) if (!l.equals(e[i], n[i])) return !1;
        return !0;
    }
    var y = class {
        constructor(e, n, i) {
            (this.defaultCheckDepth = 16),
                (this.typeName = e),
                (this.fields = n.map(si)),
                (this.options = i != null ? i : {}),
                (this.refTypeCheck = new pe(this)),
                (this.refJsonReader = new ye(this)),
                (this.refJsonWriter = new me(this)),
                (this.refBinReader = new we(this)),
                (this.refBinWriter = new be(this));
        }
        create(e) {
            let n = oi(this);
            return e !== void 0 && F(this, n, e), n;
        }
        clone(e) {
            let n = this.create();
            return F(this, n, e), n;
        }
        equals(e, n) {
            return ui(this, e, n);
        }
        is(e, n = this.defaultCheckDepth) {
            return this.refTypeCheck.is(e, n, !1);
        }
        isAssignable(e, n = this.defaultCheckDepth) {
            return this.refTypeCheck.is(e, n, !0);
        }
        mergePartial(e, n) {
            F(this, e, n);
        }
        fromBinary(e, n) {
            let i = zt(n);
            return this.internalBinaryRead(i.readerFactory(e), e.byteLength, i);
        }
        fromJson(e, n) {
            return this.internalJsonRead(e, ii(n));
        }
        fromJsonString(e, n) {
            let i = JSON.parse(e);
            return this.fromJson(i, n);
        }
        toJson(e, n) {
            return this.internalJsonWrite(e, ri(n));
        }
        toJsonString(e, n) {
            var i;
            let t = this.toJson(e, n);
            return JSON.stringify(
                t,
                null,
                (i = n == null ? void 0 : n.prettySpaces) !== null && i !== void 0
                    ? i
                    : 0
            );
        }
        toBinary(e, n) {
            let i = ei(n);
            return this.internalBinaryWrite(e, i.writerFactory(), i).finish();
        }
        internalJsonRead(e, n, i) {
            if (e !== null && typeof e == "object" && !Array.isArray(e)) {
                let t = i != null ? i : this.create();
                return this.refJsonReader.read(e, t, n), t;
            }
            throw new Error(
                `Unable to parse message ${this.typeName} from JSON ${le(e)}.`
            );
        }
        internalJsonWrite(e, n) {
            return this.refJsonWriter.write(e, n);
        }
        internalBinaryWrite(e, n, i) {
            return this.refBinWriter.write(e, n, i), n;
        }
        internalBinaryRead(e, n, i, t) {
            let r = t != null ? t : this.create();
            return this.refBinReader.read(e, r, i, n), r;
        }
    };
    var Rn = class extends y {
        constructor() {
            super("Browse", [
                { no: 9, name: "n1F9", kind: "message", T: () => $e },
                { no: 10, name: "n1F10", kind: "message", T: () => Z },
            ]);
        }
        create(e) {
            let n = {};
            return (
                globalThis.Object.defineProperty(n, p, {
                    enumerable: !1,
                    value: this,
                }),
                e !== void 0 && F(this, n, e),
                n
            );
        }
        internalBinaryRead(e, n, i, t) {
            let r = t != null ? t : this.create(),
                f = e.pos + n;
            for (; e.pos < f;) {
                let [s, o] = e.tag();
                switch (s) {
                    case 9:
                        r.n1F9 = $e.internalBinaryRead(e, e.uint32(), i, r.n1F9);
                        break;
                    case 10:
                        r.n1F10 = Z.internalBinaryRead(e, e.uint32(), i, r.n1F10);
                        break;
                    default:
                        let a = i.readUnknownField;
                        if (a === "throw")
                            throw new globalThis.Error(
                                `Unknown field ${s} (wire type ${o}) for ${this.typeName}`
                            );
                        let u = e.skip(o);
                        a !== !1 && (a === !0 ? c.onRead : a)(this.typeName, r, s, o, u);
                }
            }
            return r;
        }
        internalBinaryWrite(e, n, i) {
            e.n1F9 &&
                $e
                    .internalBinaryWrite(e.n1F9, n.tag(9, h.LengthDelimited).fork(), i)
                    .join(),
                e.n1F10 &&
                Z.internalBinaryWrite(
                    e.n1F10,
                    n.tag(10, h.LengthDelimited).fork(),
                    i
                ).join();
            let t = i.writeUnknownFields;
            return t !== !1 && (t == !0 ? c.onWrite : t)(this.typeName, e, n), n;
        }
    },
        St = new Rn(),
        Tn = class extends y {
            constructor() {
                super("n1F9", [
                    { no: 58173949, name: "m2F58173949", kind: "message", T: () => je },
                ]);
            }
            create(e) {
                let n = {};
                return (
                    globalThis.Object.defineProperty(n, p, {
                        enumerable: !1,
                        value: this,
                    }),
                    e !== void 0 && F(this, n, e),
                    n
                );
            }
            internalBinaryRead(e, n, i, t) {
                let r = t != null ? t : this.create(),
                    f = e.pos + n;
                for (; e.pos < f;) {
                    let [s, o] = e.tag();
                    switch (s) {
                        case 58173949:
                            r.m2F58173949 = je.internalBinaryRead(
                                e,
                                e.uint32(),
                                i,
                                r.m2F58173949
                            );
                            break;
                        default:
                            let a = i.readUnknownField;
                            if (a === "throw")
                                throw new globalThis.Error(
                                    `Unknown field ${s} (wire type ${o}) for ${this.typeName}`
                                );
                            let u = e.skip(o);
                            a !== !1 && (a === !0 ? c.onRead : a)(this.typeName, r, s, o, u);
                    }
                }
                return r;
            }
            internalBinaryWrite(e, n, i) {
                e.m2F58173949 &&
                    je
                        .internalBinaryWrite(
                            e.m2F58173949,
                            n.tag(58173949, h.LengthDelimited).fork(),
                            i
                        )
                        .join();
                let t = i.writeUnknownFields;
                return t !== !1 && (t == !0 ? c.onWrite : t)(this.typeName, e, n), n;
            }
        },
        $e = new Tn(),
        xn = class extends y {
            constructor() {
                super("n1F10", [
                    { no: 49399797, name: "n2F49399797", kind: "message", T: () => $ },
                ]);
            }
            create(e) {
                let n = {};
                return (
                    globalThis.Object.defineProperty(n, p, {
                        enumerable: !1,
                        value: this,
                    }),
                    e !== void 0 && F(this, n, e),
                    n
                );
            }
            internalBinaryRead(e, n, i, t) {
                let r = t != null ? t : this.create(),
                    f = e.pos + n;
                for (; e.pos < f;) {
                    let [s, o] = e.tag();
                    switch (s) {
                        case 49399797:
                            r.n2F49399797 = $.internalBinaryRead(
                                e,
                                e.uint32(),
                                i,
                                r.n2F49399797
                            );
                            break;
                        default:
                            let a = i.readUnknownField;
                            if (a === "throw")
                                throw new globalThis.Error(
                                    `Unknown field ${s} (wire type ${o}) for ${this.typeName}`
                                );
                            let u = e.skip(o);
                            a !== !1 && (a === !0 ? c.onRead : a)(this.typeName, r, s, o, u);
                    }
                }
                return r;
            }
            internalBinaryWrite(e, n, i) {
                e.n2F49399797 &&
                    $.internalBinaryWrite(
                        e.n2F49399797,
                        n.tag(49399797, h.LengthDelimited).fork(),
                        i
                    ).join();
                let t = i.writeUnknownFields;
                return t !== !1 && (t == !0 ? c.onWrite : t)(this.typeName, e, n), n;
            }
        },
        Z = new xn(),
        On = class extends y {
            constructor() {
                super("m2F58173949", [
                    { no: 1, name: "m3F1", kind: "message", repeat: 1, T: () => De },
                ]);
            }
            create(e) {
                let n = { m3F1: [] };
                return (
                    globalThis.Object.defineProperty(n, p, {
                        enumerable: !1,
                        value: this,
                    }),
                    e !== void 0 && F(this, n, e),
                    n
                );
            }
            internalBinaryRead(e, n, i, t) {
                let r = t != null ? t : this.create(),
                    f = e.pos + n;
                for (; e.pos < f;) {
                    let [s, o] = e.tag();
                    switch (s) {
                        case 1:
                            r.m3F1.push(De.internalBinaryRead(e, e.uint32(), i));
                            break;
                        default:
                            let a = i.readUnknownField;
                            if (a === "throw")
                                throw new globalThis.Error(
                                    `Unknown field ${s} (wire type ${o}) for ${this.typeName}`
                                );
                            let u = e.skip(o);
                            a !== !1 && (a === !0 ? c.onRead : a)(this.typeName, r, s, o, u);
                    }
                }
                return r;
            }
            internalBinaryWrite(e, n, i) {
                for (let r = 0; r < e.m3F1.length; r++)
                    De.internalBinaryWrite(
                        e.m3F1[r],
                        n.tag(1, h.LengthDelimited).fork(),
                        i
                    ).join();
                let t = i.writeUnknownFields;
                return t !== !1 && (t == !0 ? c.onWrite : t)(this.typeName, e, n), n;
            }
        },
        je = new On(),
        Un = class extends y {
            constructor() {
                super("m3F1", [
                    { no: 58174010, name: "m4F58174010", kind: "message", T: () => Le },
                ]);
            }
            create(e) {
                let n = {};
                return (
                    globalThis.Object.defineProperty(n, p, {
                        enumerable: !1,
                        value: this,
                    }),
                    e !== void 0 && F(this, n, e),
                    n
                );
            }
            internalBinaryRead(e, n, i, t) {
                let r = t != null ? t : this.create(),
                    f = e.pos + n;
                for (; e.pos < f;) {
                    let [s, o] = e.tag();
                    switch (s) {
                        case 58174010:
                            r.m4F58174010 = Le.internalBinaryRead(
                                e,
                                e.uint32(),
                                i,
                                r.m4F58174010
                            );
                            break;
                        default:
                            let a = i.readUnknownField;
                            if (a === "throw")
                                throw new globalThis.Error(
                                    `Unknown field ${s} (wire type ${o}) for ${this.typeName}`
                                );
                            let u = e.skip(o);
                            a !== !1 && (a === !0 ? c.onRead : a)(this.typeName, r, s, o, u);
                    }
                }
                return r;
            }
            internalBinaryWrite(e, n, i) {
                e.m4F58174010 &&
                    Le.internalBinaryWrite(
                        e.m4F58174010,
                        n.tag(58174010, h.LengthDelimited).fork(),
                        i
                    ).join();
                let t = i.writeUnknownFields;
                return t !== !1 && (t == !0 ? c.onWrite : t)(this.typeName, e, n), n;
            }
        },
        De = new Un(),
        En = class extends y {
            constructor() {
                super("m4F58174010", [
                    { no: 4, name: "n1F10", kind: "message", T: () => Z },
                ]);
            }
            create(e) {
                let n = {};
                return (
                    globalThis.Object.defineProperty(n, p, {
                        enumerable: !1,
                        value: this,
                    }),
                    e !== void 0 && F(this, n, e),
                    n
                );
            }
            internalBinaryRead(e, n, i, t) {
                let r = t != null ? t : this.create(),
                    f = e.pos + n;
                for (; e.pos < f;) {
                    let [s, o] = e.tag();
                    switch (s) {
                        case 4:
                            r.n1F10 = Z.internalBinaryRead(e, e.uint32(), i, r.n1F10);
                            break;
                        default:
                            let a = i.readUnknownField;
                            if (a === "throw")
                                throw new globalThis.Error(
                                    `Unknown field ${s} (wire type ${o}) for ${this.typeName}`
                                );
                            let u = e.skip(o);
                            a !== !1 && (a === !0 ? c.onRead : a)(this.typeName, r, s, o, u);
                    }
                }
                return r;
            }
            internalBinaryWrite(e, n, i) {
                e.n1F10 &&
                    Z.internalBinaryWrite(
                        e.n1F10,
                        n.tag(4, h.LengthDelimited).fork(),
                        i
                    ).join();
                let t = i.writeUnknownFields;
                return t !== !1 && (t == !0 ? c.onWrite : t)(this.typeName, e, n), n;
            }
        },
        Le = new En(),
        Pn = class extends y {
            constructor() {
                super("n2F49399797", [
                    { no: 1, name: "n3F1", kind: "message", repeat: 1, T: () => Se },
                ]);
            }
            create(e) {
                let n = { n3F1: [] };
                return (
                    globalThis.Object.defineProperty(n, p, {
                        enumerable: !1,
                        value: this,
                    }),
                    e !== void 0 && F(this, n, e),
                    n
                );
            }
            internalBinaryRead(e, n, i, t) {
                let r = t != null ? t : this.create(),
                    f = e.pos + n;
                for (; e.pos < f;) {
                    let [s, o] = e.tag();
                    switch (s) {
                        case 1:
                            r.n3F1.push(Se.internalBinaryRead(e, e.uint32(), i));
                            break;
                        default:
                            let a = i.readUnknownField;
                            if (a === "throw")
                                throw new globalThis.Error(
                                    `Unknown field ${s} (wire type ${o}) for ${this.typeName}`
                                );
                            let u = e.skip(o);
                            a !== !1 && (a === !0 ? c.onRead : a)(this.typeName, r, s, o, u);
                    }
                }
                return r;
            }
            internalBinaryWrite(e, n, i) {
                for (let r = 0; r < e.n3F1.length; r++)
                    Se.internalBinaryWrite(
                        e.n3F1[r],
                        n.tag(1, h.LengthDelimited).fork(),
                        i
                    ).join();
                let t = i.writeUnknownFields;
                return t !== !1 && (t == !0 ? c.onWrite : t)(this.typeName, e, n), n;
            }
        },
        $ = new Pn(),
        $n = class extends y {
            constructor() {
                super("n3F1", [
                    { no: 50195462, name: "n4F50195462", kind: "message", T: () => Y },
                    { no: 51845067, name: "n4F51845067", kind: "message", T: () => Ve },
                ]);
            }
            create(e) {
                let n = {};
                return (
                    globalThis.Object.defineProperty(n, p, {
                        enumerable: !1,
                        value: this,
                    }),
                    e !== void 0 && F(this, n, e),
                    n
                );
            }
            internalBinaryRead(e, n, i, t) {
                let r = t != null ? t : this.create(),
                    f = e.pos + n;
                for (; e.pos < f;) {
                    let [s, o] = e.tag();
                    switch (s) {
                        case 50195462:
                            r.n4F50195462 = Y.internalBinaryRead(
                                e,
                                e.uint32(),
                                i,
                                r.n4F50195462
                            );
                            break;
                        case 51845067:
                            r.n4F51845067 = Ve.internalBinaryRead(
                                e,
                                e.uint32(),
                                i,
                                r.n4F51845067
                            );
                            break;
                        default:
                            let a = i.readUnknownField;
                            if (a === "throw")
                                throw new globalThis.Error(
                                    `Unknown field ${s} (wire type ${o}) for ${this.typeName}`
                                );
                            let u = e.skip(o);
                            a !== !1 && (a === !0 ? c.onRead : a)(this.typeName, r, s, o, u);
                    }
                }
                return r;
            }
            internalBinaryWrite(e, n, i) {
                e.n4F50195462 &&
                    Y.internalBinaryWrite(
                        e.n4F50195462,
                        n.tag(50195462, h.LengthDelimited).fork(),
                        i
                    ).join(),
                    e.n4F51845067 &&
                    Ve.internalBinaryWrite(
                        e.n4F51845067,
                        n.tag(51845067, h.LengthDelimited).fork(),
                        i
                    ).join();
                let t = i.writeUnknownFields;
                return t !== !1 && (t == !0 ? c.onWrite : t)(this.typeName, e, n), n;
            }
        },
        Se = new $n(),
        jn = class extends y {
            constructor() {
                super("n4F50195462", [
                    { no: 1, name: "n5F1", kind: "message", repeat: 1, T: () => q },
                ]);
            }
            create(e) {
                let n = { n5F1: [] };
                return (
                    globalThis.Object.defineProperty(n, p, {
                        enumerable: !1,
                        value: this,
                    }),
                    e !== void 0 && F(this, n, e),
                    n
                );
            }
            internalBinaryRead(e, n, i, t) {
                let r = t != null ? t : this.create(),
                    f = e.pos + n;
                for (; e.pos < f;) {
                    let [s, o] = e.tag();
                    switch (s) {
                        case 1:
                            r.n5F1.push(q.internalBinaryRead(e, e.uint32(), i));
                            break;
                        default:
                            let a = i.readUnknownField;
                            if (a === "throw")
                                throw new globalThis.Error(
                                    `Unknown field ${s} (wire type ${o}) for ${this.typeName}`
                                );
                            let u = e.skip(o);
                            a !== !1 && (a === !0 ? c.onRead : a)(this.typeName, r, s, o, u);
                    }
                }
                return r;
            }
            internalBinaryWrite(e, n, i) {
                for (let r = 0; r < e.n5F1.length; r++)
                    q.internalBinaryWrite(
                        e.n5F1[r],
                        n.tag(1, h.LengthDelimited).fork(),
                        i
                    ).join();
                let t = i.writeUnknownFields;
                return t !== !1 && (t == !0 ? c.onWrite : t)(this.typeName, e, n), n;
            }
        },
        Y = new jn(),
        Dn = class extends y {
            constructor() {
                super("n4F51845067", [
                    { no: 5, name: "n5F5", kind: "message", T: () => Me },
                ]);
            }
            create(e) {
                let n = {};
                return (
                    globalThis.Object.defineProperty(n, p, {
                        enumerable: !1,
                        value: this,
                    }),
                    e !== void 0 && F(this, n, e),
                    n
                );
            }
            internalBinaryRead(e, n, i, t) {
                let r = t != null ? t : this.create(),
                    f = e.pos + n;
                for (; e.pos < f;) {
                    let [s, o] = e.tag();
                    switch (s) {
                        case 5:
                            r.n5F5 = Me.internalBinaryRead(e, e.uint32(), i, r.n5F5);
                            break;
                        default:
                            let a = i.readUnknownField;
                            if (a === "throw")
                                throw new globalThis.Error(
                                    `Unknown field ${s} (wire type ${o}) for ${this.typeName}`
                                );
                            let u = e.skip(o);
                            a !== !1 && (a === !0 ? c.onRead : a)(this.typeName, r, s, o, u);
                    }
                }
                return r;
            }
            internalBinaryWrite(e, n, i) {
                e.n5F5 &&
                    Me.internalBinaryWrite(
                        e.n5F5,
                        n.tag(5, h.LengthDelimited).fork(),
                        i
                    ).join();
                let t = i.writeUnknownFields;
                return t !== !1 && (t == !0 ? c.onWrite : t)(this.typeName, e, n), n;
            }
        },
        Ve = new Dn(),
        Ln = class extends y {
            constructor() {
                super("n5F1", [
                    { no: 153515154, name: "n6F153515154", kind: "message", T: () => Ae },
                ]);
            }
            create(e) {
                let n = {};
                return (
                    globalThis.Object.defineProperty(n, p, {
                        enumerable: !1,
                        value: this,
                    }),
                    e !== void 0 && F(this, n, e),
                    n
                );
            }
            internalBinaryRead(e, n, i, t) {
                let r = t != null ? t : this.create(),
                    f = e.pos + n;
                for (; e.pos < f;) {
                    let [s, o] = e.tag();
                    switch (s) {
                        case 153515154:
                            r.n6F153515154 = Ae.internalBinaryRead(
                                e,
                                e.uint32(),
                                i,
                                r.n6F153515154
                            );
                            break;
                        default:
                            let a = i.readUnknownField;
                            if (a === "throw")
                                throw new globalThis.Error(
                                    `Unknown field ${s} (wire type ${o}) for ${this.typeName}`
                                );
                            let u = e.skip(o);
                            a !== !1 && (a === !0 ? c.onRead : a)(this.typeName, r, s, o, u);
                    }
                }
                return r;
            }
            internalBinaryWrite(e, n, i) {
                e.n6F153515154 &&
                    Ae.internalBinaryWrite(
                        e.n6F153515154,
                        n.tag(153515154, h.LengthDelimited).fork(),
                        i
                    ).join();
                let t = i.writeUnknownFields;
                return t !== !1 && (t == !0 ? c.onWrite : t)(this.typeName, e, n), n;
            }
        },
        q = new Ln(),
        Sn = class extends y {
            constructor() {
                super("n5F5", [
                    { no: 51431404, name: "n6F51431404", kind: "message", T: () => Ke },
                ]);
            }
            create(e) {
                let n = {};
                return (
                    globalThis.Object.defineProperty(n, p, {
                        enumerable: !1,
                        value: this,
                    }),
                    e !== void 0 && F(this, n, e),
                    n
                );
            }
            internalBinaryRead(e, n, i, t) {
                let r = t != null ? t : this.create(),
                    f = e.pos + n;
                for (; e.pos < f;) {
                    let [s, o] = e.tag();
                    switch (s) {
                        case 51431404:
                            r.n6F51431404 = Ke.internalBinaryRead(
                                e,
                                e.uint32(),
                                i,
                                r.n6F51431404
                            );
                            break;
                        default:
                            let a = i.readUnknownField;
                            if (a === "throw")
                                throw new globalThis.Error(
                                    `Unknown field ${s} (wire type ${o}) for ${this.typeName}`
                                );
                            let u = e.skip(o);
                            a !== !1 && (a === !0 ? c.onRead : a)(this.typeName, r, s, o, u);
                    }
                }
                return r;
            }
            internalBinaryWrite(e, n, i) {
                e.n6F51431404 &&
                    Ke.internalBinaryWrite(
                        e.n6F51431404,
                        n.tag(51431404, h.LengthDelimited).fork(),
                        i
                    ).join();
                let t = i.writeUnknownFields;
                return t !== !1 && (t == !0 ? c.onWrite : t)(this.typeName, e, n), n;
            }
        },
        Me = new Sn(),
        Vn = class extends y {
            constructor() {
                super("n6F153515154", [
                    { no: 172660663, name: "n7F172660663", kind: "message", T: () => Xe },
                ]);
            }
            create(e) {
                let n = {};
                return (
                    globalThis.Object.defineProperty(n, p, {
                        enumerable: !1,
                        value: this,
                    }),
                    e !== void 0 && F(this, n, e),
                    n
                );
            }
            internalBinaryRead(e, n, i, t) {
                let r = t != null ? t : this.create(),
                    f = e.pos + n;
                for (; e.pos < f;) {
                    let [s, o] = e.tag();
                    switch (s) {
                        case 172660663:
                            r.n7F172660663 = Xe.internalBinaryRead(
                                e,
                                e.uint32(),
                                i,
                                r.n7F172660663
                            );
                            break;
                        default:
                            let a = i.readUnknownField;
                            if (a === "throw")
                                throw new globalThis.Error(
                                    `Unknown field ${s} (wire type ${o}) for ${this.typeName}`
                                );
                            let u = e.skip(o);
                            a !== !1 && (a === !0 ? c.onRead : a)(this.typeName, r, s, o, u);
                    }
                }
                return r;
            }
            internalBinaryWrite(e, n, i) {
                e.n7F172660663 &&
                    Xe.internalBinaryWrite(
                        e.n7F172660663,
                        n.tag(172660663, h.LengthDelimited).fork(),
                        i
                    ).join();
                let t = i.writeUnknownFields;
                return t !== !1 && (t == !0 ? c.onWrite : t)(this.typeName, e, n), n;
            }
        },
        Ae = new Vn(),
        Mn = class extends y {
            constructor() {
                super("n6F51431404", [
                    { no: 1, name: "n5F1", kind: "message", repeat: 1, T: () => q },
                ]);
            }
            create(e) {
                let n = { n5F1: [] };
                return (
                    globalThis.Object.defineProperty(n, p, {
                        enumerable: !1,
                        value: this,
                    }),
                    e !== void 0 && F(this, n, e),
                    n
                );
            }
            internalBinaryRead(e, n, i, t) {
                let r = t != null ? t : this.create(),
                    f = e.pos + n;
                for (; e.pos < f;) {
                    let [s, o] = e.tag();
                    switch (s) {
                        case 1:
                            r.n5F1.push(q.internalBinaryRead(e, e.uint32(), i));
                            break;
                        default:
                            let a = i.readUnknownField;
                            if (a === "throw")
                                throw new globalThis.Error(
                                    `Unknown field ${s} (wire type ${o}) for ${this.typeName}`
                                );
                            let u = e.skip(o);
                            a !== !1 && (a === !0 ? c.onRead : a)(this.typeName, r, s, o, u);
                    }
                }
                return r;
            }
            internalBinaryWrite(e, n, i) {
                for (let r = 0; r < e.n5F1.length; r++)
                    q.internalBinaryWrite(
                        e.n5F1[r],
                        n.tag(1, h.LengthDelimited).fork(),
                        i
                    ).join();
                let t = i.writeUnknownFields;
                return t !== !1 && (t == !0 ? c.onWrite : t)(this.typeName, e, n), n;
            }
        },
        Ke = new Mn(),
        An = class extends y {
            constructor() {
                super("n7F172660663", [
                    { no: 1, name: "n8F1", kind: "message", T: () => Q },
                    { no: 2, name: "n8F2", kind: "message", T: () => z },
                    { no: 3, name: "n8F3", kind: "message", T: () => Ge },
                ]);
            }
            create(e) {
                let n = {};
                return (
                    globalThis.Object.defineProperty(n, p, {
                        enumerable: !1,
                        value: this,
                    }),
                    e !== void 0 && F(this, n, e),
                    n
                );
            }
            internalBinaryRead(e, n, i, t) {
                let r = t != null ? t : this.create(),
                    f = e.pos + n;
                for (; e.pos < f;) {
                    let [s, o] = e.tag();
                    switch (s) {
                        case 1:
                            r.n8F1 = Q.internalBinaryRead(e, e.uint32(), i, r.n8F1);
                            break;
                        case 2:
                            r.n8F2 = z.internalBinaryRead(e, e.uint32(), i, r.n8F2);
                            break;
                        case 3:
                            r.n8F3 = Ge.internalBinaryRead(e, e.uint32(), i, r.n8F3);
                            break;
                        default:
                            let a = i.readUnknownField;
                            if (a === "throw")
                                throw new globalThis.Error(
                                    `Unknown field ${s} (wire type ${o}) for ${this.typeName}`
                                );
                            let u = e.skip(o);
                            a !== !1 && (a === !0 ? c.onRead : a)(this.typeName, r, s, o, u);
                    }
                }
                return r;
            }
            internalBinaryWrite(e, n, i) {
                e.n8F1 &&
                    Q.internalBinaryWrite(
                        e.n8F1,
                        n.tag(1, h.LengthDelimited).fork(),
                        i
                    ).join(),
                    e.n8F2 &&
                    z
                        .internalBinaryWrite(
                            e.n8F2,
                            n.tag(2, h.LengthDelimited).fork(),
                            i
                        )
                        .join(),
                    e.n8F3 &&
                    Ge.internalBinaryWrite(
                        e.n8F3,
                        n.tag(3, h.LengthDelimited).fork(),
                        i
                    ).join();
                let t = i.writeUnknownFields;
                return t !== !1 && (t == !0 ? c.onWrite : t)(this.typeName, e, n), n;
            }
        },
        Xe = new An(),
        Kn = class extends y {
            constructor() {
                super("n8F1", [
                    { no: 168777401, name: "n9F168777401", kind: "message", T: () => Ce },
                ]);
            }
            create(e) {
                let n = {};
                return (
                    globalThis.Object.defineProperty(n, p, {
                        enumerable: !1,
                        value: this,
                    }),
                    e !== void 0 && F(this, n, e),
                    n
                );
            }
            internalBinaryRead(e, n, i, t) {
                let r = t != null ? t : this.create(),
                    f = e.pos + n;
                for (; e.pos < f;) {
                    let [s, o] = e.tag();
                    switch (s) {
                        case 168777401:
                            r.n9F168777401 = Ce.internalBinaryRead(
                                e,
                                e.uint32(),
                                i,
                                r.n9F168777401
                            );
                            break;
                        default:
                            let a = i.readUnknownField;
                            if (a === "throw")
                                throw new globalThis.Error(
                                    `Unknown field ${s} (wire type ${o}) for ${this.typeName}`
                                );
                            let u = e.skip(o);
                            a !== !1 && (a === !0 ? c.onRead : a)(this.typeName, r, s, o, u);
                    }
                }
                return r;
            }
            internalBinaryWrite(e, n, i) {
                e.n9F168777401 &&
                    Ce.internalBinaryWrite(
                        e.n9F168777401,
                        n.tag(168777401, h.LengthDelimited).fork(),
                        i
                    ).join();
                let t = i.writeUnknownFields;
                return t !== !1 && (t == !0 ? c.onWrite : t)(this.typeName, e, n), n;
            }
        },
        Q = new Kn(),
        Xn = class extends y {
            constructor() {
                super("n8F2", [
                    { no: 183314536, name: "n9F183314536", kind: "message", T: () => Je },
                ]);
            }
            create(e) {
                let n = {};
                return (
                    globalThis.Object.defineProperty(n, p, {
                        enumerable: !1,
                        value: this,
                    }),
                    e !== void 0 && F(this, n, e),
                    n
                );
            }
            internalBinaryRead(e, n, i, t) {
                let r = t != null ? t : this.create(),
                    f = e.pos + n;
                for (; e.pos < f;) {
                    let [s, o] = e.tag();
                    switch (s) {
                        case 183314536:
                            r.n9F183314536 = Je.internalBinaryRead(
                                e,
                                e.uint32(),
                                i,
                                r.n9F183314536
                            );
                            break;
                        default:
                            let a = i.readUnknownField;
                            if (a === "throw")
                                throw new globalThis.Error(
                                    `Unknown field ${s} (wire type ${o}) for ${this.typeName}`
                                );
                            let u = e.skip(o);
                            a !== !1 && (a === !0 ? c.onRead : a)(this.typeName, r, s, o, u);
                    }
                }
                return r;
            }
            internalBinaryWrite(e, n, i) {
                e.n9F183314536 &&
                    Je.internalBinaryWrite(
                        e.n9F183314536,
                        n.tag(183314536, h.LengthDelimited).fork(),
                        i
                    ).join();
                let t = i.writeUnknownFields;
                return t !== !1 && (t == !0 ? c.onWrite : t)(this.typeName, e, n), n;
            }
        },
        z = new Xn(),
        Gn = class extends y {
            constructor() {
                super("n8F3", [
                    { no: 1, name: "n8F1", kind: "message", T: () => Q },
                    { no: 2, name: "n8F2", kind: "message", T: () => z },
                ]);
            }
            create(e) {
                let n = {};
                return (
                    globalThis.Object.defineProperty(n, p, {
                        enumerable: !1,
                        value: this,
                    }),
                    e !== void 0 && F(this, n, e),
                    n
                );
            }
            internalBinaryRead(e, n, i, t) {
                let r = t != null ? t : this.create(),
                    f = e.pos + n;
                for (; e.pos < f;) {
                    let [s, o] = e.tag();
                    switch (s) {
                        case 1:
                            r.n8F1 = Q.internalBinaryRead(e, e.uint32(), i, r.n8F1);
                            break;
                        case 2:
                            r.n8F2 = z.internalBinaryRead(e, e.uint32(), i, r.n8F2);
                            break;
                        default:
                            let a = i.readUnknownField;
                            if (a === "throw")
                                throw new globalThis.Error(
                                    `Unknown field ${s} (wire type ${o}) for ${this.typeName}`
                                );
                            let u = e.skip(o);
                            a !== !1 && (a === !0 ? c.onRead : a)(this.typeName, r, s, o, u);
                    }
                }
                return r;
            }
            internalBinaryWrite(e, n, i) {
                e.n8F1 &&
                    Q.internalBinaryWrite(
                        e.n8F1,
                        n.tag(1, h.LengthDelimited).fork(),
                        i
                    ).join(),
                    e.n8F2 &&
                    z
                        .internalBinaryWrite(
                            e.n8F2,
                            n.tag(2, h.LengthDelimited).fork(),
                            i
                        )
                        .join();
                let t = i.writeUnknownFields;
                return t !== !1 && (t == !0 ? c.onWrite : t)(this.typeName, e, n), n;
            }
        },
        Ge = new Gn(),
        Cn = class extends y {
            constructor() {
                super("n9F168777401", [
                    { no: 3, name: "n10F3", kind: "message", T: () => ve },
                ]);
            }
            create(e) {
                let n = {};
                return (
                    globalThis.Object.defineProperty(n, p, {
                        enumerable: !1,
                        value: this,
                    }),
                    e !== void 0 && F(this, n, e),
                    n
                );
            }
            internalBinaryRead(e, n, i, t) {
                let r = t != null ? t : this.create(),
                    f = e.pos + n;
                for (; e.pos < f;) {
                    let [s, o] = e.tag();
                    switch (s) {
                        case 3:
                            r.n10F3 = ve.internalBinaryRead(e, e.uint32(), i, r.n10F3);
                            break;
                        default:
                            let a = i.readUnknownField;
                            if (a === "throw")
                                throw new globalThis.Error(
                                    `Unknown field ${s} (wire type ${o}) for ${this.typeName}`
                                );
                            let u = e.skip(o);
                            a !== !1 && (a === !0 ? c.onRead : a)(this.typeName, r, s, o, u);
                    }
                }
                return r;
            }
            internalBinaryWrite(e, n, i) {
                e.n10F3 &&
                    ve
                        .internalBinaryWrite(e.n10F3, n.tag(3, h.LengthDelimited).fork(), i)
                        .join();
                let t = i.writeUnknownFields;
                return t !== !1 && (t == !0 ? c.onWrite : t)(this.typeName, e, n), n;
            }
        },
        Ce = new Cn(),
        Jn = class extends y {
            constructor() {
                super("n9F183314536", [{ no: 1, name: "type", kind: "scalar", T: 9 }]);
            }
            create(e) {
                let n = { type: "" };
                return (
                    globalThis.Object.defineProperty(n, p, {
                        enumerable: !1,
                        value: this,
                    }),
                    e !== void 0 && F(this, n, e),
                    n
                );
            }
            internalBinaryRead(e, n, i, t) {
                let r = t != null ? t : this.create(),
                    f = e.pos + n;
                for (; e.pos < f;) {
                    let [s, o] = e.tag();
                    switch (s) {
                        case 1:
                            r.type = e.string();
                            break;
                        default:
                            let a = i.readUnknownField;
                            if (a === "throw")
                                throw new globalThis.Error(
                                    `Unknown field ${s} (wire type ${o}) for ${this.typeName}`
                                );
                            let u = e.skip(o);
                            a !== !1 && (a === !0 ? c.onRead : a)(this.typeName, r, s, o, u);
                    }
                }
                return r;
            }
            internalBinaryWrite(e, n, i) {
                e.type !== "" && n.tag(1, h.LengthDelimited).string(e.type);
                let t = i.writeUnknownFields;
                return t !== !1 && (t == !0 ? c.onWrite : t)(this.typeName, e, n), n;
            }
        },
        Je = new Jn(),
        vn = class extends y {
            constructor() {
                super("n10F3", [
                    {
                        no: 172035250,
                        name: "n11F172035250",
                        kind: "message",
                        T: () => _e,
                    },
                ]);
            }
            create(e) {
                let n = {};
                return (
                    globalThis.Object.defineProperty(n, p, {
                        enumerable: !1,
                        value: this,
                    }),
                    e !== void 0 && F(this, n, e),
                    n
                );
            }
            internalBinaryRead(e, n, i, t) {
                let r = t != null ? t : this.create(),
                    f = e.pos + n;
                for (; e.pos < f;) {
                    let [s, o] = e.tag();
                    switch (s) {
                        case 172035250:
                            r.n11F172035250 = _e.internalBinaryRead(
                                e,
                                e.uint32(),
                                i,
                                r.n11F172035250
                            );
                            break;
                        default:
                            let a = i.readUnknownField;
                            if (a === "throw")
                                throw new globalThis.Error(
                                    `Unknown field ${s} (wire type ${o}) for ${this.typeName}`
                                );
                            let u = e.skip(o);
                            a !== !1 && (a === !0 ? c.onRead : a)(this.typeName, r, s, o, u);
                    }
                }
                return r;
            }
            internalBinaryWrite(e, n, i) {
                e.n11F172035250 &&
                    _e
                        .internalBinaryWrite(
                            e.n11F172035250,
                            n.tag(172035250, h.LengthDelimited).fork(),
                            i
                        )
                        .join();
                let t = i.writeUnknownFields;
                return t !== !1 && (t == !0 ? c.onWrite : t)(this.typeName, e, n), n;
            }
        },
        ve = new vn(),
        _n = class extends y {
            constructor() {
                super("n11F172035250", [{ no: 1, name: "type", kind: "scalar", T: 9 }]);
            }
            create(e) {
                let n = { type: "" };
                return (
                    globalThis.Object.defineProperty(n, p, {
                        enumerable: !1,
                        value: this,
                    }),
                    e !== void 0 && F(this, n, e),
                    n
                );
            }
            internalBinaryRead(e, n, i, t) {
                let r = t != null ? t : this.create(),
                    f = e.pos + n;
                for (; e.pos < f;) {
                    let [s, o] = e.tag();
                    switch (s) {
                        case 1:
                            r.type = e.string();
                            break;
                        default:
                            let a = i.readUnknownField;
                            if (a === "throw")
                                throw new globalThis.Error(
                                    `Unknown field ${s} (wire type ${o}) for ${this.typeName}`
                                );
                            let u = e.skip(o);
                            a !== !1 && (a === !0 ? c.onRead : a)(this.typeName, r, s, o, u);
                    }
                }
                return r;
            }
            internalBinaryWrite(e, n, i) {
                e.type !== "" && n.tag(1, h.LengthDelimited).string(e.type);
                let t = i.writeUnknownFields;
                return t !== !1 && (t == !0 ? c.onWrite : t)(this.typeName, e, n), n;
            }
        },
        _e = new _n(),
        Zn = class extends y {
            constructor() {
                super("Next", [
                    { no: 7, name: "a1F7", kind: "message", T: () => Ze },
                    { no: 8, name: "a1F8", kind: "message", T: () => Ye },
                ]);
            }
            create(e) {
                let n = {};
                return (
                    globalThis.Object.defineProperty(n, p, {
                        enumerable: !1,
                        value: this,
                    }),
                    e !== void 0 && F(this, n, e),
                    n
                );
            }
            internalBinaryRead(e, n, i, t) {
                let r = t != null ? t : this.create(),
                    f = e.pos + n;
                for (; e.pos < f;) {
                    let [s, o] = e.tag();
                    switch (s) {
                        case 7:
                            r.a1F7 = Ze.internalBinaryRead(e, e.uint32(), i, r.a1F7);
                            break;
                        case 8:
                            r.a1F8 = Ye.internalBinaryRead(e, e.uint32(), i, r.a1F8);
                            break;
                        default:
                            let a = i.readUnknownField;
                            if (a === "throw")
                                throw new globalThis.Error(
                                    `Unknown field ${s} (wire type ${o}) for ${this.typeName}`
                                );
                            let u = e.skip(o);
                            a !== !1 && (a === !0 ? c.onRead : a)(this.typeName, r, s, o, u);
                    }
                }
                return r;
            }
            internalBinaryWrite(e, n, i) {
                e.a1F7 &&
                    Ze.internalBinaryWrite(
                        e.a1F7,
                        n.tag(7, h.LengthDelimited).fork(),
                        i
                    ).join(),
                    e.a1F8 &&
                    Ye.internalBinaryWrite(
                        e.a1F8,
                        n.tag(8, h.LengthDelimited).fork(),
                        i
                    ).join();
                let t = i.writeUnknownFields;
                return t !== !1 && (t == !0 ? c.onWrite : t)(this.typeName, e, n), n;
            }
        },
        Vt = new Zn(),
        Yn = class extends y {
            constructor() {
                super("a1F7", [
                    { no: 51779735, name: "a2F51779735", kind: "message", T: () => qe },
                ]);
            }
            create(e) {
                let n = {};
                return (
                    globalThis.Object.defineProperty(n, p, {
                        enumerable: !1,
                        value: this,
                    }),
                    e !== void 0 && F(this, n, e),
                    n
                );
            }
            internalBinaryRead(e, n, i, t) {
                let r = t != null ? t : this.create(),
                    f = e.pos + n;
                for (; e.pos < f;) {
                    let [s, o] = e.tag();
                    switch (s) {
                        case 51779735:
                            r.a2F51779735 = qe.internalBinaryRead(
                                e,
                                e.uint32(),
                                i,
                                r.a2F51779735
                            );
                            break;
                        default:
                            let a = i.readUnknownField;
                            if (a === "throw")
                                throw new globalThis.Error(
                                    `Unknown field ${s} (wire type ${o}) for ${this.typeName}`
                                );
                            let u = e.skip(o);
                            a !== !1 && (a === !0 ? c.onRead : a)(this.typeName, r, s, o, u);
                    }
                }
                return r;
            }
            internalBinaryWrite(e, n, i) {
                e.a2F51779735 &&
                    qe
                        .internalBinaryWrite(
                            e.a2F51779735,
                            n.tag(51779735, h.LengthDelimited).fork(),
                            i
                        )
                        .join();
                let t = i.writeUnknownFields;
                return t !== !1 && (t == !0 ? c.onWrite : t)(this.typeName, e, n), n;
            }
        },
        Ze = new Yn(),
        qn = class extends y {
            constructor() {
                super("a1F8", [
                    { no: 49399797, name: "n2F49399797", kind: "message", T: () => $ },
                ]);
            }
            create(e) {
                let n = {};
                return (
                    globalThis.Object.defineProperty(n, p, {
                        enumerable: !1,
                        value: this,
                    }),
                    e !== void 0 && F(this, n, e),
                    n
                );
            }
            internalBinaryRead(e, n, i, t) {
                let r = t != null ? t : this.create(),
                    f = e.pos + n;
                for (; e.pos < f;) {
                    let [s, o] = e.tag();
                    switch (s) {
                        case 49399797:
                            r.n2F49399797 = $.internalBinaryRead(
                                e,
                                e.uint32(),
                                i,
                                r.n2F49399797
                            );
                            break;
                        default:
                            let a = i.readUnknownField;
                            if (a === "throw")
                                throw new globalThis.Error(
                                    `Unknown field ${s} (wire type ${o}) for ${this.typeName}`
                                );
                            let u = e.skip(o);
                            a !== !1 && (a === !0 ? c.onRead : a)(this.typeName, r, s, o, u);
                    }
                }
                return r;
            }
            internalBinaryWrite(e, n, i) {
                e.n2F49399797 &&
                    $.internalBinaryWrite(
                        e.n2F49399797,
                        n.tag(49399797, h.LengthDelimited).fork(),
                        i
                    ).join();
                let t = i.writeUnknownFields;
                return t !== !1 && (t == !0 ? c.onWrite : t)(this.typeName, e, n), n;
            }
        },
        Ye = new qn(),
        Qn = class extends y {
            constructor() {
                super("a2F51779735", [
                    { no: 1, name: "a3F1", kind: "message", T: () => Qe },
                ]);
            }
            create(e) {
                let n = {};
                return (
                    globalThis.Object.defineProperty(n, p, {
                        enumerable: !1,
                        value: this,
                    }),
                    e !== void 0 && F(this, n, e),
                    n
                );
            }
            internalBinaryRead(e, n, i, t) {
                let r = t != null ? t : this.create(),
                    f = e.pos + n;
                for (; e.pos < f;) {
                    let [s, o] = e.tag();
                    switch (s) {
                        case 1:
                            r.a3F1 = Qe.internalBinaryRead(e, e.uint32(), i, r.a3F1);
                            break;
                        default:
                            let a = i.readUnknownField;
                            if (a === "throw")
                                throw new globalThis.Error(
                                    `Unknown field ${s} (wire type ${o}) for ${this.typeName}`
                                );
                            let u = e.skip(o);
                            a !== !1 && (a === !0 ? c.onRead : a)(this.typeName, r, s, o, u);
                    }
                }
                return r;
            }
            internalBinaryWrite(e, n, i) {
                e.a3F1 &&
                    Qe.internalBinaryWrite(
                        e.a3F1,
                        n.tag(1, h.LengthDelimited).fork(),
                        i
                    ).join();
                let t = i.writeUnknownFields;
                return t !== !1 && (t == !0 ? c.onWrite : t)(this.typeName, e, n), n;
            }
        },
        qe = new Qn(),
        zn = class extends y {
            constructor() {
                super("a3F1", [
                    { no: 49399797, name: "n2F49399797", kind: "message", T: () => $ },
                ]);
            }
            create(e) {
                let n = {};
                return (
                    globalThis.Object.defineProperty(n, p, {
                        enumerable: !1,
                        value: this,
                    }),
                    e !== void 0 && F(this, n, e),
                    n
                );
            }
            internalBinaryRead(e, n, i, t) {
                let r = t != null ? t : this.create(),
                    f = e.pos + n;
                for (; e.pos < f;) {
                    let [s, o] = e.tag();
                    switch (s) {
                        case 49399797:
                            r.n2F49399797 = $.internalBinaryRead(
                                e,
                                e.uint32(),
                                i,
                                r.n2F49399797
                            );
                            break;
                        default:
                            let a = i.readUnknownField;
                            if (a === "throw")
                                throw new globalThis.Error(
                                    `Unknown field ${s} (wire type ${o}) for ${this.typeName}`
                                );
                            let u = e.skip(o);
                            a !== !1 && (a === !0 ? c.onRead : a)(this.typeName, r, s, o, u);
                    }
                }
                return r;
            }
            internalBinaryWrite(e, n, i) {
                e.n2F49399797 &&
                    $.internalBinaryWrite(
                        e.n2F49399797,
                        n.tag(49399797, h.LengthDelimited).fork(),
                        i
                    ).join();
                let t = i.writeUnknownFields;
                return t !== !1 && (t == !0 ? c.onWrite : t)(this.typeName, e, n), n;
            }
        },
        Qe = new zn(),
        Hn = class extends y {
            constructor() {
                super("Search", [
                    { no: 4, name: "s1F4", kind: "message", T: () => ze },
                    { no: 7, name: "s1F7", kind: "message", T: () => He },
                ]);
            }
            create(e) {
                let n = {};
                return (
                    globalThis.Object.defineProperty(n, p, {
                        enumerable: !1,
                        value: this,
                    }),
                    e !== void 0 && F(this, n, e),
                    n
                );
            }
            internalBinaryRead(e, n, i, t) {
                let r = t != null ? t : this.create(),
                    f = e.pos + n;
                for (; e.pos < f;) {
                    let [s, o] = e.tag();
                    switch (s) {
                        case 4:
                            r.s1F4 = ze.internalBinaryRead(e, e.uint32(), i, r.s1F4);
                            break;
                        case 7:
                            r.s1F7 = He.internalBinaryRead(e, e.uint32(), i, r.s1F7);
                            break;
                        default:
                            let a = i.readUnknownField;
                            if (a === "throw")
                                throw new globalThis.Error(
                                    `Unknown field ${s} (wire type ${o}) for ${this.typeName}`
                                );
                            let u = e.skip(o);
                            a !== !1 && (a === !0 ? c.onRead : a)(this.typeName, r, s, o, u);
                    }
                }
                return r;
            }
            internalBinaryWrite(e, n, i) {
                e.s1F4 &&
                    ze
                        .internalBinaryWrite(e.s1F4, n.tag(4, h.LengthDelimited).fork(), i)
                        .join(),
                    e.s1F7 &&
                    He.internalBinaryWrite(
                        e.s1F7,
                        n.tag(7, h.LengthDelimited).fork(),
                        i
                    ).join();
                let t = i.writeUnknownFields;
                return t !== !1 && (t == !0 ? c.onWrite : t)(this.typeName, e, n), n;
            }
        },
        Mt = new Hn(),
        et = class extends y {
            constructor() {
                super("s1F4", [
                    { no: 49399797, name: "n2F49399797", kind: "message", T: () => $ },
                ]);
            }
            create(e) {
                let n = {};
                return (
                    globalThis.Object.defineProperty(n, p, {
                        enumerable: !1,
                        value: this,
                    }),
                    e !== void 0 && F(this, n, e),
                    n
                );
            }
            internalBinaryRead(e, n, i, t) {
                let r = t != null ? t : this.create(),
                    f = e.pos + n;
                for (; e.pos < f;) {
                    let [s, o] = e.tag();
                    switch (s) {
                        case 49399797:
                            r.n2F49399797 = $.internalBinaryRead(
                                e,
                                e.uint32(),
                                i,
                                r.n2F49399797
                            );
                            break;
                        default:
                            let a = i.readUnknownField;
                            if (a === "throw")
                                throw new globalThis.Error(
                                    `Unknown field ${s} (wire type ${o}) for ${this.typeName}`
                                );
                            let u = e.skip(o);
                            a !== !1 && (a === !0 ? c.onRead : a)(this.typeName, r, s, o, u);
                    }
                }
                return r;
            }
            internalBinaryWrite(e, n, i) {
                e.n2F49399797 &&
                    $.internalBinaryWrite(
                        e.n2F49399797,
                        n.tag(49399797, h.LengthDelimited).fork(),
                        i
                    ).join();
                let t = i.writeUnknownFields;
                return t !== !1 && (t == !0 ? c.onWrite : t)(this.typeName, e, n), n;
            }
        },
        ze = new et(),
        nt = class extends y {
            constructor() {
                super("s1F7", [
                    { no: 50195462, name: "n4F50195462", kind: "message", T: () => Y },
                    { no: 49399797, name: "n2F49399797", kind: "message", T: () => $ },
                ]);
            }
            create(e) {
                let n = {};
                return (
                    globalThis.Object.defineProperty(n, p, {
                        enumerable: !1,
                        value: this,
                    }),
                    e !== void 0 && F(this, n, e),
                    n
                );
            }
            internalBinaryRead(e, n, i, t) {
                let r = t != null ? t : this.create(),
                    f = e.pos + n;
                for (; e.pos < f;) {
                    let [s, o] = e.tag();
                    switch (s) {
                        case 50195462:
                            r.n4F50195462 = Y.internalBinaryRead(
                                e,
                                e.uint32(),
                                i,
                                r.n4F50195462
                            );
                            break;
                        case 49399797:
                            r.n2F49399797 = $.internalBinaryRead(
                                e,
                                e.uint32(),
                                i,
                                r.n2F49399797
                            );
                            break;
                        default:
                            let a = i.readUnknownField;
                            if (a === "throw")
                                throw new globalThis.Error(
                                    `Unknown field ${s} (wire type ${o}) for ${this.typeName}`
                                );
                            let u = e.skip(o);
                            a !== !1 && (a === !0 ? c.onRead : a)(this.typeName, r, s, o, u);
                    }
                }
                return r;
            }
            internalBinaryWrite(e, n, i) {
                e.n4F50195462 &&
                    Y.internalBinaryWrite(
                        e.n4F50195462,
                        n.tag(50195462, h.LengthDelimited).fork(),
                        i
                    ).join(),
                    e.n2F49399797 &&
                    $.internalBinaryWrite(
                        e.n2F49399797,
                        n.tag(49399797, h.LengthDelimited).fork(),
                        i
                    ).join();
                let t = i.writeUnknownFields;
                return t !== !1 && (t == !0 ? c.onWrite : t)(this.typeName, e, n), n;
            }
        },
        He = new nt(),
        tt = class extends y {
            constructor() {
                super("Shorts", [
                    { no: 2, name: "t1F2", kind: "message", repeat: 1, T: () => en },
                ]);
            }
            create(e) {
                let n = { t1F2: [] };
                return (
                    globalThis.Object.defineProperty(n, p, {
                        enumerable: !1,
                        value: this,
                    }),
                    e !== void 0 && F(this, n, e),
                    n
                );
            }
            internalBinaryRead(e, n, i, t) {
                let r = t != null ? t : this.create(),
                    f = e.pos + n;
                for (; e.pos < f;) {
                    let [s, o] = e.tag();
                    switch (s) {
                        case 2:
                            r.t1F2.push(en.internalBinaryRead(e, e.uint32(), i));
                            break;
                        default:
                            let a = i.readUnknownField;
                            if (a === "throw")
                                throw new globalThis.Error(
                                    `Unknown field ${s} (wire type ${o}) for ${this.typeName}`
                                );
                            let u = e.skip(o);
                            a !== !1 && (a === !0 ? c.onRead : a)(this.typeName, r, s, o, u);
                    }
                }
                return r;
            }
            internalBinaryWrite(e, n, i) {
                for (let r = 0; r < e.t1F2.length; r++)
                    en.internalBinaryWrite(
                        e.t1F2[r],
                        n.tag(2, h.LengthDelimited).fork(),
                        i
                    ).join();
                let t = i.writeUnknownFields;
                return t !== !1 && (t == !0 ? c.onWrite : t)(this.typeName, e, n), n;
            }
        },
        At = new tt(),
        it = class extends y {
            constructor() {
                super("t1F2", [{ no: 1, name: "n2F1", kind: "message", T: () => nn }]);
            }
            create(e) {
                let n = {};
                return (
                    globalThis.Object.defineProperty(n, p, {
                        enumerable: !1,
                        value: this,
                    }),
                    e !== void 0 && F(this, n, e),
                    n
                );
            }
            internalBinaryRead(e, n, i, t) {
                let r = t != null ? t : this.create(),
                    f = e.pos + n;
                for (; e.pos < f;) {
                    let [s, o] = e.tag();
                    switch (s) {
                        case 1:
                            r.n2F1 = nn.internalBinaryRead(e, e.uint32(), i, r.n2F1);
                            break;
                        default:
                            let a = i.readUnknownField;
                            if (a === "throw")
                                throw new globalThis.Error(
                                    `Unknown field ${s} (wire type ${o}) for ${this.typeName}`
                                );
                            let u = e.skip(o);
                            a !== !1 && (a === !0 ? c.onRead : a)(this.typeName, r, s, o, u);
                    }
                }
                return r;
            }
            internalBinaryWrite(e, n, i) {
                e.n2F1 &&
                    nn
                        .internalBinaryWrite(e.n2F1, n.tag(1, h.LengthDelimited).fork(), i)
                        .join();
                let t = i.writeUnknownFields;
                return t !== !1 && (t == !0 ? c.onWrite : t)(this.typeName, e, n), n;
            }
        },
        en = new it(),
        rt = class extends y {
            constructor() {
                super("n2F1", [
                    { no: 139608561, name: "n3F139608561", kind: "message", T: () => tn },
                ]);
            }
            create(e) {
                let n = {};
                return (
                    globalThis.Object.defineProperty(n, p, {
                        enumerable: !1,
                        value: this,
                    }),
                    e !== void 0 && F(this, n, e),
                    n
                );
            }
            internalBinaryRead(e, n, i, t) {
                let r = t != null ? t : this.create(),
                    f = e.pos + n;
                for (; e.pos < f;) {
                    let [s, o] = e.tag();
                    switch (s) {
                        case 139608561:
                            r.n3F139608561 = tn.internalBinaryRead(
                                e,
                                e.uint32(),
                                i,
                                r.n3F139608561
                            );
                            break;
                        default:
                            let a = i.readUnknownField;
                            if (a === "throw")
                                throw new globalThis.Error(
                                    `Unknown field ${s} (wire type ${o}) for ${this.typeName}`
                                );
                            let u = e.skip(o);
                            a !== !1 && (a === !0 ? c.onRead : a)(this.typeName, r, s, o, u);
                    }
                }
                return r;
            }
            internalBinaryWrite(e, n, i) {
                e.n3F139608561 &&
                    tn
                        .internalBinaryWrite(
                            e.n3F139608561,
                            n.tag(139608561, h.LengthDelimited).fork(),
                            i
                        )
                        .join();
                let t = i.writeUnknownFields;
                return t !== !1 && (t == !0 ? c.onWrite : t)(this.typeName, e, n), n;
            }
        },
        nn = new rt(),
        st = class extends y {
            constructor() {
                super("n3F139608561", [
                    { no: 8, name: "n4F8", kind: "message", T: () => rn },
                ]);
            }
            create(e) {
                let n = {};
                return (
                    globalThis.Object.defineProperty(n, p, {
                        enumerable: !1,
                        value: this,
                    }),
                    e !== void 0 && F(this, n, e),
                    n
                );
            }
            internalBinaryRead(e, n, i, t) {
                let r = t != null ? t : this.create(),
                    f = e.pos + n;
                for (; e.pos < f;) {
                    let [s, o] = e.tag();
                    switch (s) {
                        case 8:
                            r.n4F8 = rn.internalBinaryRead(e, e.uint32(), i, r.n4F8);
                            break;
                        default:
                            let a = i.readUnknownField;
                            if (a === "throw")
                                throw new globalThis.Error(
                                    `Unknown field ${s} (wire type ${o}) for ${this.typeName}`
                                );
                            let u = e.skip(o);
                            a !== !1 && (a === !0 ? c.onRead : a)(this.typeName, r, s, o, u);
                    }
                }
                return r;
            }
            internalBinaryWrite(e, n, i) {
                e.n4F8 &&
                    rn
                        .internalBinaryWrite(e.n4F8, n.tag(8, h.LengthDelimited).fork(), i)
                        .join();
                let t = i.writeUnknownFields;
                return t !== !1 && (t == !0 ? c.onWrite : t)(this.typeName, e, n), n;
            }
        },
        tn = new st(),
        at = class extends y {
            constructor() {
                super("n4F8", []);
            }
            create(e) {
                let n = {};
                return (
                    globalThis.Object.defineProperty(n, p, {
                        enumerable: !1,
                        value: this,
                    }),
                    e !== void 0 && F(this, n, e),
                    n
                );
            }
            internalBinaryRead(e, n, i, t) {
                return t != null ? t : this.create();
            }
            internalBinaryWrite(e, n, i) {
                let t = i.writeUnknownFields;
                return t !== !1 && (t == !0 ? c.onWrite : t)(this.typeName, e, n), n;
            }
        },
        rn = new at(),
        ot = class extends y {
            constructor() {
                super("Guide", [
                    { no: 4, name: "g1F4", kind: "message", repeat: 1, T: () => sn },
                    { no: 6, name: "g1F6", kind: "message", repeat: 1, T: () => an },
                ]);
            }
            create(e) {
                let n = { g1F4: [], g1F6: [] };
                return (
                    globalThis.Object.defineProperty(n, p, {
                        enumerable: !1,
                        value: this,
                    }),
                    e !== void 0 && F(this, n, e),
                    n
                );
            }
            internalBinaryRead(e, n, i, t) {
                let r = t != null ? t : this.create(),
                    f = e.pos + n;
                for (; e.pos < f;) {
                    let [s, o] = e.tag();
                    switch (s) {
                        case 4:
                            r.g1F4.push(sn.internalBinaryRead(e, e.uint32(), i));
                            break;
                        case 6:
                            r.g1F6.push(an.internalBinaryRead(e, e.uint32(), i));
                            break;
                        default:
                            let a = i.readUnknownField;
                            if (a === "throw")
                                throw new globalThis.Error(
                                    `Unknown field ${s} (wire type ${o}) for ${this.typeName}`
                                );
                            let u = e.skip(o);
                            a !== !1 && (a === !0 ? c.onRead : a)(this.typeName, r, s, o, u);
                    }
                }
                return r;
            }
            internalBinaryWrite(e, n, i) {
                for (let r = 0; r < e.g1F4.length; r++)
                    sn.internalBinaryWrite(
                        e.g1F4[r],
                        n.tag(4, h.LengthDelimited).fork(),
                        i
                    ).join();
                for (let r = 0; r < e.g1F6.length; r++)
                    an.internalBinaryWrite(
                        e.g1F6[r],
                        n.tag(6, h.LengthDelimited).fork(),
                        i
                    ).join();
                let t = i.writeUnknownFields;
                return t !== !1 && (t == !0 ? c.onWrite : t)(this.typeName, e, n), n;
            }
        },
        Kt = new ot(),
        lt = class extends y {
            constructor() {
                super("g1F4", [
                    { no: 117866661, name: "g2F117866661", kind: "message", T: () => H },
                ]);
            }
            create(e) {
                let n = {};
                return (
                    globalThis.Object.defineProperty(n, p, {
                        enumerable: !1,
                        value: this,
                    }),
                    e !== void 0 && F(this, n, e),
                    n
                );
            }
            internalBinaryRead(e, n, i, t) {
                let r = t != null ? t : this.create(),
                    f = e.pos + n;
                for (; e.pos < f;) {
                    let [s, o] = e.tag();
                    switch (s) {
                        case 117866661:
                            r.g2F117866661 = H.internalBinaryRead(
                                e,
                                e.uint32(),
                                i,
                                r.g2F117866661
                            );
                            break;
                        default:
                            let a = i.readUnknownField;
                            if (a === "throw")
                                throw new globalThis.Error(
                                    `Unknown field ${s} (wire type ${o}) for ${this.typeName}`
                                );
                            let u = e.skip(o);
                            a !== !1 && (a === !0 ? c.onRead : a)(this.typeName, r, s, o, u);
                    }
                }
                return r;
            }
            internalBinaryWrite(e, n, i) {
                e.g2F117866661 &&
                    H.internalBinaryWrite(
                        e.g2F117866661,
                        n.tag(117866661, h.LengthDelimited).fork(),
                        i
                    ).join();
                let t = i.writeUnknownFields;
                return t !== !1 && (t == !0 ? c.onWrite : t)(this.typeName, e, n), n;
            }
        },
        sn = new lt(),
        ft = class extends y {
            constructor() {
                super("g1F6", [
                    { no: 117866661, name: "g2F117866661", kind: "message", T: () => H },
                ]);
            }
            create(e) {
                let n = {};
                return (
                    globalThis.Object.defineProperty(n, p, {
                        enumerable: !1,
                        value: this,
                    }),
                    e !== void 0 && F(this, n, e),
                    n
                );
            }
            internalBinaryRead(e, n, i, t) {
                let r = t != null ? t : this.create(),
                    f = e.pos + n;
                for (; e.pos < f;) {
                    let [s, o] = e.tag();
                    switch (s) {
                        case 117866661:
                            r.g2F117866661 = H.internalBinaryRead(
                                e,
                                e.uint32(),
                                i,
                                r.g2F117866661
                            );
                            break;
                        default:
                            let a = i.readUnknownField;
                            if (a === "throw")
                                throw new globalThis.Error(
                                    `Unknown field ${s} (wire type ${o}) for ${this.typeName}`
                                );
                            let u = e.skip(o);
                            a !== !1 && (a === !0 ? c.onRead : a)(this.typeName, r, s, o, u);
                    }
                }
                return r;
            }
            internalBinaryWrite(e, n, i) {
                e.g2F117866661 &&
                    H.internalBinaryWrite(
                        e.g2F117866661,
                        n.tag(117866661, h.LengthDelimited).fork(),
                        i
                    ).join();
                let t = i.writeUnknownFields;
                return t !== !1 && (t == !0 ? c.onWrite : t)(this.typeName, e, n), n;
            }
        },
        an = new ft(),
        ut = class extends y {
            constructor() {
                super("g2F117866661", [
                    { no: 1, name: "g3F1", kind: "message", repeat: 1, T: () => on },
                ]);
            }
            create(e) {
                let n = { g3F1: [] };
                return (
                    globalThis.Object.defineProperty(n, p, {
                        enumerable: !1,
                        value: this,
                    }),
                    e !== void 0 && F(this, n, e),
                    n
                );
            }
            internalBinaryRead(e, n, i, t) {
                let r = t != null ? t : this.create(),
                    f = e.pos + n;
                for (; e.pos < f;) {
                    let [s, o] = e.tag();
                    switch (s) {
                        case 1:
                            r.g3F1.push(on.internalBinaryRead(e, e.uint32(), i));
                            break;
                        default:
                            let a = i.readUnknownField;
                            if (a === "throw")
                                throw new globalThis.Error(
                                    `Unknown field ${s} (wire type ${o}) for ${this.typeName}`
                                );
                            let u = e.skip(o);
                            a !== !1 && (a === !0 ? c.onRead : a)(this.typeName, r, s, o, u);
                    }
                }
                return r;
            }
            internalBinaryWrite(e, n, i) {
                for (let r = 0; r < e.g3F1.length; r++)
                    on.internalBinaryWrite(
                        e.g3F1[r],
                        n.tag(1, h.LengthDelimited).fork(),
                        i
                    ).join();
                let t = i.writeUnknownFields;
                return t !== !1 && (t == !0 ? c.onWrite : t)(this.typeName, e, n), n;
            }
        },
        H = new ut(),
        ct = class extends y {
            constructor() {
                super("g3F1", [
                    { no: 318370163, name: "g4F318370163", kind: "message", T: () => ln },
                ]);
            }
            create(e) {
                let n = {};
                return (
                    globalThis.Object.defineProperty(n, p, {
                        enumerable: !1,
                        value: this,
                    }),
                    e !== void 0 && F(this, n, e),
                    n
                );
            }
            internalBinaryRead(e, n, i, t) {
                let r = t != null ? t : this.create(),
                    f = e.pos + n;
                for (; e.pos < f;) {
                    let [s, o] = e.tag();
                    switch (s) {
                        case 318370163:
                            r.g4F318370163 = ln.internalBinaryRead(
                                e,
                                e.uint32(),
                                i,
                                r.g4F318370163
                            );
                            break;
                        default:
                            let a = i.readUnknownField;
                            if (a === "throw")
                                throw new globalThis.Error(
                                    `Unknown field ${s} (wire type ${o}) for ${this.typeName}`
                                );
                            let u = e.skip(o);
                            a !== !1 && (a === !0 ? c.onRead : a)(this.typeName, r, s, o, u);
                    }
                }
                return r;
            }
            internalBinaryWrite(e, n, i) {
                e.g4F318370163 &&
                    ln
                        .internalBinaryWrite(
                            e.g4F318370163,
                            n.tag(318370163, h.LengthDelimited).fork(),
                            i
                        )
                        .join();
                let t = i.writeUnknownFields;
                return t !== !1 && (t == !0 ? c.onWrite : t)(this.typeName, e, n), n;
            }
        },
        on = new ct(),
        ht = class extends y {
            constructor() {
                super("g4F318370163", []);
            }
            create(e) {
                let n = {};
                return (
                    globalThis.Object.defineProperty(n, p, {
                        enumerable: !1,
                        value: this,
                    }),
                    e !== void 0 && F(this, n, e),
                    n
                );
            }
            internalBinaryRead(e, n, i, t) {
                return t != null ? t : this.create();
            }
            internalBinaryWrite(e, n, i) {
                let t = i.writeUnknownFields;
                return t !== !1 && (t == !0 ? c.onWrite : t)(this.typeName, e, n), n;
            }
        },
        ln = new ht(),
        dt = class extends y {
            constructor() {
                super("Player", [
                    { no: 7, name: "p1F7", kind: "message", repeat: 1, T: () => un },
                    { no: 2, name: "p1F2", kind: "message", T: () => fn },
                ]);
            }
            create(e) {
                let n = { p1F7: [] };
                return (
                    globalThis.Object.defineProperty(n, p, {
                        enumerable: !1,
                        value: this,
                    }),
                    e !== void 0 && F(this, n, e),
                    n
                );
            }
            internalBinaryRead(e, n, i, t) {
                let r = t != null ? t : this.create(),
                    f = e.pos + n;
                for (; e.pos < f;) {
                    let [s, o] = e.tag();
                    switch (s) {
                        case 7:
                            r.p1F7.push(un.internalBinaryRead(e, e.uint32(), i));
                            break;
                        case 2:
                            r.p1F2 = fn.internalBinaryRead(e, e.uint32(), i, r.p1F2);
                            break;
                        default:
                            let a = i.readUnknownField;
                            if (a === "throw")
                                throw new globalThis.Error(
                                    `Unknown field ${s} (wire type ${o}) for ${this.typeName}`
                                );
                            let u = e.skip(o);
                            a !== !1 && (a === !0 ? c.onRead : a)(this.typeName, r, s, o, u);
                    }
                }
                return r;
            }
            internalBinaryWrite(e, n, i) {
                for (let r = 0; r < e.p1F7.length; r++)
                    un.internalBinaryWrite(
                        e.p1F7[r],
                        n.tag(7, h.LengthDelimited).fork(),
                        i
                    ).join();
                e.p1F2 &&
                    fn
                        .internalBinaryWrite(e.p1F2, n.tag(2, h.LengthDelimited).fork(), i)
                        .join();
                let t = i.writeUnknownFields;
                return t !== !1 && (t == !0 ? c.onWrite : t)(this.typeName, e, n), n;
            }
        },
        Xt = new dt(),
        Ft = class extends y {
            constructor() {
                super("p1F2", [
                    { no: 21, name: "p2F21", kind: "message", T: () => hn },
                    { no: 11, name: "p2F11", kind: "message", T: () => dn },
                ]);
            }
            create(e) {
                let n = {};
                return (
                    globalThis.Object.defineProperty(n, p, {
                        enumerable: !1,
                        value: this,
                    }),
                    e !== void 0 && F(this, n, e),
                    n
                );
            }
            internalBinaryRead(e, n, i, t) {
                let r = t != null ? t : this.create(),
                    f = e.pos + n;
                for (; e.pos < f;) {
                    let [s, o] = e.tag();
                    switch (s) {
                        case 21:
                            r.p2F21 = hn.internalBinaryRead(e, e.uint32(), i, r.p2F21);
                            break;
                        case 11:
                            r.p2F11 = dn.internalBinaryRead(e, e.uint32(), i, r.p2F11);
                            break;
                        default:
                            let a = i.readUnknownField;
                            if (a === "throw")
                                throw new globalThis.Error(
                                    `Unknown field ${s} (wire type ${o}) for ${this.typeName}`
                                );
                            let u = e.skip(o);
                            a !== !1 && (a === !0 ? c.onRead : a)(this.typeName, r, s, o, u);
                    }
                }
                return r;
            }
            internalBinaryWrite(e, n, i) {
                e.p2F21 &&
                    hn
                        .internalBinaryWrite(
                            e.p2F21,
                            n.tag(21, h.LengthDelimited).fork(),
                            i
                        )
                        .join(),
                    e.p2F11 &&
                    dn
                        .internalBinaryWrite(
                            e.p2F11,
                            n.tag(11, h.LengthDelimited).fork(),
                            i
                        )
                        .join();
                let t = i.writeUnknownFields;
                return t !== !1 && (t == !0 ? c.onWrite : t)(this.typeName, e, n), n;
            }
        },
        fn = new Ft(),
        pt = class extends y {
            constructor() {
                super("p1F7", [
                    { no: 84813246, name: "p2F84813246", kind: "message", T: () => cn },
                ]);
            }
            create(e) {
                let n = {};
                return (
                    globalThis.Object.defineProperty(n, p, {
                        enumerable: !1,
                        value: this,
                    }),
                    e !== void 0 && F(this, n, e),
                    n
                );
            }
            internalBinaryRead(e, n, i, t) {
                let r = t != null ? t : this.create(),
                    f = e.pos + n;
                for (; e.pos < f;) {
                    let [s, o] = e.tag();
                    switch (s) {
                        case 84813246:
                            r.p2F84813246 = cn.internalBinaryRead(
                                e,
                                e.uint32(),
                                i,
                                r.p2F84813246
                            );
                            break;
                        default:
                            let a = i.readUnknownField;
                            if (a === "throw")
                                throw new globalThis.Error(
                                    `Unknown field ${s} (wire type ${o}) for ${this.typeName}`
                                );
                            let u = e.skip(o);
                            a !== !1 && (a === !0 ? c.onRead : a)(this.typeName, r, s, o, u);
                    }
                }
                return r;
            }
            internalBinaryWrite(e, n, i) {
                e.p2F84813246 &&
                    cn
                        .internalBinaryWrite(
                            e.p2F84813246,
                            n.tag(84813246, h.LengthDelimited).fork(),
                            i
                        )
                        .join();
                let t = i.writeUnknownFields;
                return t !== !1 && (t == !0 ? c.onWrite : t)(this.typeName, e, n), n;
            }
        },
        un = new pt(),
        yt = class extends y {
            constructor() {
                super("p2F84813246", [{ no: 3, name: "v", kind: "scalar", T: 5 }]);
            }
            create(e) {
                let n = { v: 0 };
                return (
                    globalThis.Object.defineProperty(n, p, {
                        enumerable: !1,
                        value: this,
                    }),
                    e !== void 0 && F(this, n, e),
                    n
                );
            }
            internalBinaryRead(e, n, i, t) {
                let r = t != null ? t : this.create(),
                    f = e.pos + n;
                for (; e.pos < f;) {
                    let [s, o] = e.tag();
                    switch (s) {
                        case 3:
                            r.v = e.int32();
                            break;
                        default:
                            let a = i.readUnknownField;
                            if (a === "throw")
                                throw new globalThis.Error(
                                    `Unknown field ${s} (wire type ${o}) for ${this.typeName}`
                                );
                            let u = e.skip(o);
                            a !== !1 && (a === !0 ? c.onRead : a)(this.typeName, r, s, o, u);
                    }
                }
                return r;
            }
            internalBinaryWrite(e, n, i) {
                e.v !== 0 && n.tag(3, h.Varint).int32(e.v);
                let t = i.writeUnknownFields;
                return t !== !1 && (t == !0 ? c.onWrite : t)(this.typeName, e, n), n;
            }
        },
        cn = new yt(),
        mt = class extends y {
            constructor() {
                super("p2F21", [
                    { no: 151635310, name: "p3F151635310", kind: "message", T: () => Fn },
                ]);
            }
            create(e) {
                let n = {};
                return (
                    globalThis.Object.defineProperty(n, p, {
                        enumerable: !1,
                        value: this,
                    }),
                    e !== void 0 && F(this, n, e),
                    n
                );
            }
            internalBinaryRead(e, n, i, t) {
                let r = t != null ? t : this.create(),
                    f = e.pos + n;
                for (; e.pos < f;) {
                    let [s, o] = e.tag();
                    switch (s) {
                        case 151635310:
                            r.p3F151635310 = Fn.internalBinaryRead(
                                e,
                                e.uint32(),
                                i,
                                r.p3F151635310
                            );
                            break;
                        default:
                            let a = i.readUnknownField;
                            if (a === "throw")
                                throw new globalThis.Error(
                                    `Unknown field ${s} (wire type ${o}) for ${this.typeName}`
                                );
                            let u = e.skip(o);
                            a !== !1 && (a === !0 ? c.onRead : a)(this.typeName, r, s, o, u);
                    }
                }
                return r;
            }
            internalBinaryWrite(e, n, i) {
                e.p3F151635310 &&
                    Fn.internalBinaryWrite(
                        e.p3F151635310,
                        n.tag(151635310, h.LengthDelimited).fork(),
                        i
                    ).join();
                let t = i.writeUnknownFields;
                return t !== !1 && (t == !0 ? c.onWrite : t)(this.typeName, e, n), n;
            }
        },
        hn = new mt(),
        wt = class extends y {
            constructor() {
                super("p2F11", [
                    { no: 64657230, name: "p3F64657230", kind: "message", T: () => pn },
                ]);
            }
            create(e) {
                let n = {};
                return (
                    globalThis.Object.defineProperty(n, p, {
                        enumerable: !1,
                        value: this,
                    }),
                    e !== void 0 && F(this, n, e),
                    n
                );
            }
            internalBinaryRead(e, n, i, t) {
                let r = t != null ? t : this.create(),
                    f = e.pos + n;
                for (; e.pos < f;) {
                    let [s, o] = e.tag();
                    switch (s) {
                        case 64657230:
                            r.p3F64657230 = pn.internalBinaryRead(
                                e,
                                e.uint32(),
                                i,
                                r.p3F64657230
                            );
                            break;
                        default:
                            let a = i.readUnknownField;
                            if (a === "throw")
                                throw new globalThis.Error(
                                    `Unknown field ${s} (wire type ${o}) for ${this.typeName}`
                                );
                            let u = e.skip(o);
                            a !== !1 && (a === !0 ? c.onRead : a)(this.typeName, r, s, o, u);
                    }
                }
                return r;
            }
            internalBinaryWrite(e, n, i) {
                e.p3F64657230 &&
                    pn
                        .internalBinaryWrite(
                            e.p3F64657230,
                            n.tag(64657230, h.LengthDelimited).fork(),
                            i
                        )
                        .join();
                let t = i.writeUnknownFields;
                return t !== !1 && (t == !0 ? c.onWrite : t)(this.typeName, e, n), n;
            }
        },
        dn = new wt(),
        bt = class extends y {
            constructor() {
                super("p3F151635310", [{ no: 1, name: "pip", kind: "scalar", T: 5 }]);
            }
            create(e) {
                let n = { pip: 0 };
                return (
                    globalThis.Object.defineProperty(n, p, {
                        enumerable: !1,
                        value: this,
                    }),
                    e !== void 0 && F(this, n, e),
                    n
                );
            }
            internalBinaryRead(e, n, i, t) {
                let r = t != null ? t : this.create(),
                    f = e.pos + n;
                for (; e.pos < f;) {
                    let [s, o] = e.tag();
                    switch (s) {
                        case 1:
                            r.pip = e.int32();
                            break;
                        default:
                            let a = i.readUnknownField;
                            if (a === "throw")
                                throw new globalThis.Error(
                                    `Unknown field ${s} (wire type ${o}) for ${this.typeName}`
                                );
                            let u = e.skip(o);
                            a !== !1 && (a === !0 ? c.onRead : a)(this.typeName, r, s, o, u);
                    }
                }
                return r;
            }
            internalBinaryWrite(e, n, i) {
                e.pip !== 0 && n.tag(1, h.Varint).int32(e.pip);
                let t = i.writeUnknownFields;
                return t !== !1 && (t == !0 ? c.onWrite : t)(this.typeName, e, n), n;
            }
        },
        Fn = new bt(),
        Bt = class extends y {
            constructor() {
                super("p3F64657230", [
                    { no: 1, name: "backPlay", kind: "scalar", T: 5 },
                ]);
            }
            create(e) {
                let n = { backPlay: 0 };
                return (
                    globalThis.Object.defineProperty(n, p, {
                        enumerable: !1,
                        value: this,
                    }),
                    e !== void 0 && F(this, n, e),
                    n
                );
            }
            internalBinaryRead(e, n, i, t) {
                let r = t != null ? t : this.create(),
                    f = e.pos + n;
                for (; e.pos < f;) {
                    let [s, o] = e.tag();
                    switch (s) {
                        case 1:
                            r.backPlay = e.int32();
                            break;
                        default:
                            let a = i.readUnknownField;
                            if (a === "throw")
                                throw new globalThis.Error(
                                    `Unknown field ${s} (wire type ${o}) for ${this.typeName}`
                                );
                            let u = e.skip(o);
                            a !== !1 && (a === !0 ? c.onRead : a)(this.typeName, r, s, o, u);
                    }
                }
                return r;
            }
            internalBinaryWrite(e, n, i) {
                e.backPlay !== 0 && n.tag(1, h.Varint).int32(e.backPlay);
                let t = i.writeUnknownFields;
                return t !== !1 && (t == !0 ? c.onWrite : t)(this.typeName, e, n), n;
            }
        },
        pn = new Bt(),
        kt = class extends y {
            constructor() {
                super("Setting", [
                    { no: 6, name: "st1F6", kind: "message", repeat: 1, T: () => yn },
                    { no: 7, name: "st1F7", kind: "message", T: () => mn },
                    { no: 10, name: "st1F10", kind: "message", T: () => wn },
                ]);
            }
            create(e) {
                let n = { st1F6: [] };
                return (
                    globalThis.Object.defineProperty(n, p, {
                        enumerable: !1,
                        value: this,
                    }),
                    e !== void 0 && F(this, n, e),
                    n
                );
            }
            internalBinaryRead(e, n, i, t) {
                let r = t != null ? t : this.create(),
                    f = e.pos + n;
                for (; e.pos < f;) {
                    let [s, o] = e.tag();
                    switch (s) {
                        case 6:
                            r.st1F6.push(yn.internalBinaryRead(e, e.uint32(), i));
                            break;
                        case 7:
                            r.st1F7 = mn.internalBinaryRead(e, e.uint32(), i, r.st1F7);
                            break;
                        case 10:
                            r.st1F10 = wn.internalBinaryRead(e, e.uint32(), i, r.st1F10);
                            break;
                        default:
                            let a = i.readUnknownField;
                            if (a === "throw")
                                throw new globalThis.Error(
                                    `Unknown field ${s} (wire type ${o}) for ${this.typeName}`
                                );
                            let u = e.skip(o);
                            a !== !1 && (a === !0 ? c.onRead : a)(this.typeName, r, s, o, u);
                    }
                }
                return r;
            }
            internalBinaryWrite(e, n, i) {
                for (let r = 0; r < e.st1F6.length; r++)
                    yn.internalBinaryWrite(
                        e.st1F6[r],
                        n.tag(6, h.LengthDelimited).fork(),
                        i
                    ).join();
                e.st1F7 &&
                    mn
                        .internalBinaryWrite(e.st1F7, n.tag(7, h.LengthDelimited).fork(), i)
                        .join(),
                    e.st1F10 &&
                    wn
                        .internalBinaryWrite(
                            e.st1F10,
                            n.tag(10, h.LengthDelimited).fork(),
                            i
                        )
                        .join();
                let t = i.writeUnknownFields;
                return t !== !1 && (t == !0 ? c.onWrite : t)(this.typeName, e, n), n;
            }
        },
        Gt = new kt(),
        gt = class extends y {
            constructor() {
                super("st1F6", [
                    { no: 88478200, name: "st2F88478200", kind: "message", T: () => ne },
                    { no: 66930374, name: "st2F66930374", kind: "message", T: () => bn },
                ]);
            }
            create(e) {
                let n = {};
                return (
                    globalThis.Object.defineProperty(n, p, {
                        enumerable: !1,
                        value: this,
                    }),
                    e !== void 0 && F(this, n, e),
                    n
                );
            }
            internalBinaryRead(e, n, i, t) {
                let r = t != null ? t : this.create(),
                    f = e.pos + n;
                for (; e.pos < f;) {
                    let [s, o] = e.tag();
                    switch (s) {
                        case 88478200:
                            r.st2F88478200 = ne.internalBinaryRead(
                                e,
                                e.uint32(),
                                i,
                                r.st2F88478200
                            );
                            break;
                        case 66930374:
                            r.st2F66930374 = bn.internalBinaryRead(
                                e,
                                e.uint32(),
                                i,
                                r.st2F66930374
                            );
                            break;
                        default:
                            let a = i.readUnknownField;
                            if (a === "throw")
                                throw new globalThis.Error(
                                    `Unknown field ${s} (wire type ${o}) for ${this.typeName}`
                                );
                            let u = e.skip(o);
                            a !== !1 && (a === !0 ? c.onRead : a)(this.typeName, r, s, o, u);
                    }
                }
                return r;
            }
            internalBinaryWrite(e, n, i) {
                e.st2F88478200 &&
                    ne
                        .internalBinaryWrite(
                            e.st2F88478200,
                            n.tag(88478200, h.LengthDelimited).fork(),
                            i
                        )
                        .join(),
                    e.st2F66930374 &&
                    bn
                        .internalBinaryWrite(
                            e.st2F66930374,
                            n.tag(66930374, h.LengthDelimited).fork(),
                            i
                        )
                        .join();
                let t = i.writeUnknownFields;
                return t !== !1 && (t == !0 ? c.onWrite : t)(this.typeName, e, n), n;
            }
        },
        yn = new gt(),
        Nt = class extends y {
            constructor() {
                super("st1F7", [
                    { no: 88478200, name: "st2F88478200", kind: "message", T: () => ne },
                ]);
            }
            create(e) {
                let n = {};
                return (
                    globalThis.Object.defineProperty(n, p, {
                        enumerable: !1,
                        value: this,
                    }),
                    e !== void 0 && F(this, n, e),
                    n
                );
            }
            internalBinaryRead(e, n, i, t) {
                let r = t != null ? t : this.create(),
                    f = e.pos + n;
                for (; e.pos < f;) {
                    let [s, o] = e.tag();
                    switch (s) {
                        case 88478200:
                            r.st2F88478200 = ne.internalBinaryRead(
                                e,
                                e.uint32(),
                                i,
                                r.st2F88478200
                            );
                            break;
                        default:
                            let a = i.readUnknownField;
                            if (a === "throw")
                                throw new globalThis.Error(
                                    `Unknown field ${s} (wire type ${o}) for ${this.typeName}`
                                );
                            let u = e.skip(o);
                            a !== !1 && (a === !0 ? c.onRead : a)(this.typeName, r, s, o, u);
                    }
                }
                return r;
            }
            internalBinaryWrite(e, n, i) {
                e.st2F88478200 &&
                    ne
                        .internalBinaryWrite(
                            e.st2F88478200,
                            n.tag(88478200, h.LengthDelimited).fork(),
                            i
                        )
                        .join();
                let t = i.writeUnknownFields;
                return t !== !1 && (t == !0 ? c.onWrite : t)(this.typeName, e, n), n;
            }
        },
        mn = new Nt(),
        Wt = class extends y {
            constructor() {
                super("st1F10", [
                    { no: 4, name: "st2F4", kind: "message", T: () => ee },
                ]);
            }
            create(e) {
                let n = {};
                return (
                    globalThis.Object.defineProperty(n, p, {
                        enumerable: !1,
                        value: this,
                    }),
                    e !== void 0 && F(this, n, e),
                    n
                );
            }
            internalBinaryRead(e, n, i, t) {
                let r = t != null ? t : this.create(),
                    f = e.pos + n;
                for (; e.pos < f;) {
                    let [s, o] = e.tag();
                    switch (s) {
                        case 4:
                            r.st2F4 = ee.internalBinaryRead(e, e.uint32(), i, r.st2F4);
                            break;
                        default:
                            let a = i.readUnknownField;
                            if (a === "throw")
                                throw new globalThis.Error(
                                    `Unknown field ${s} (wire type ${o}) for ${this.typeName}`
                                );
                            let u = e.skip(o);
                            a !== !1 && (a === !0 ? c.onRead : a)(this.typeName, r, s, o, u);
                    }
                }
                return r;
            }
            internalBinaryWrite(e, n, i) {
                e.st2F4 &&
                    ee
                        .internalBinaryWrite(e.st2F4, n.tag(4, h.LengthDelimited).fork(), i)
                        .join();
                let t = i.writeUnknownFields;
                return t !== !1 && (t == !0 ? c.onWrite : t)(this.typeName, e, n), n;
            }
        },
        wn = new Wt(),
        It = class extends y {
            constructor() {
                super("st2F4", [
                    { no: 1, name: "f1", kind: "scalar", T: 4 },
                    { no: 2, name: "f2", kind: "scalar", T: 7 },
                    { no: 3, name: "f3", kind: "scalar", T: 7 },
                ]);
            }
            create(e) {
                let n = { f1: "0", f2: 0, f3: 0 };
                return (
                    globalThis.Object.defineProperty(n, p, {
                        enumerable: !1,
                        value: this,
                    }),
                    e !== void 0 && F(this, n, e),
                    n
                );
            }
            internalBinaryRead(e, n, i, t) {
                let r = t != null ? t : this.create(),
                    f = e.pos + n;
                for (; e.pos < f;) {
                    let [s, o] = e.tag();
                    switch (s) {
                        case 1:
                            r.f1 = e.uint64().toString();
                            break;
                        case 2:
                            r.f2 = e.fixed32();
                            break;
                        case 3:
                            r.f3 = e.fixed32();
                            break;
                        default:
                            let a = i.readUnknownField;
                            if (a === "throw")
                                throw new globalThis.Error(
                                    `Unknown field ${s} (wire type ${o}) for ${this.typeName}`
                                );
                            let u = e.skip(o);
                            a !== !1 && (a === !0 ? c.onRead : a)(this.typeName, r, s, o, u);
                    }
                }
                return r;
            }
            internalBinaryWrite(e, n, i) {
                e.f1 !== "0" && n.tag(1, h.Varint).uint64(e.f1),
                    e.f2 !== 0 && n.tag(2, h.Bit32).fixed32(e.f2),
                    e.f3 !== 0 && n.tag(3, h.Bit32).fixed32(e.f3);
                let t = i.writeUnknownFields;
                return t !== !1 && (t == !0 ? c.onWrite : t)(this.typeName, e, n), n;
            }
        },
        ee = new It(),
        Rt = class extends y {
            constructor() {
                super("st2F88478200", [
                    { no: 2, name: "f2", kind: "scalar", T: 5 },
                    { no: 3, name: "f3", kind: "scalar", T: 5 },
                    { no: 5, name: "st3F5", kind: "message", T: () => K },
                    { no: 6, name: "f6", kind: "scalar", T: 5 },
                    { no: 7, name: "f7", kind: "scalar", T: 5 },
                    { no: 8, name: "f8", kind: "scalar", T: 5 },
                    { no: 9, name: "f9", kind: "scalar", T: 5 },
                    { no: 10, name: "f10", kind: "scalar", T: 5 },
                    { no: 12, name: "f12", kind: "scalar", T: 5 },
                ]);
            }
            create(e) {
                let n = { f2: 0, f3: 0, f6: 0, f7: 0, f8: 0, f9: 0, f10: 0, f12: 0 };
                return (
                    globalThis.Object.defineProperty(n, p, {
                        enumerable: !1,
                        value: this,
                    }),
                    e !== void 0 && F(this, n, e),
                    n
                );
            }
            internalBinaryRead(e, n, i, t) {
                let r = t != null ? t : this.create(),
                    f = e.pos + n;
                for (; e.pos < f;) {
                    let [s, o] = e.tag();
                    switch (s) {
                        case 2:
                            r.f2 = e.int32();
                            break;
                        case 3:
                            r.f3 = e.int32();
                            break;
                        case 5:
                            r.st3F5 = K.internalBinaryRead(e, e.uint32(), i, r.st3F5);
                            break;
                        case 6:
                            r.f6 = e.int32();
                            break;
                        case 7:
                            r.f7 = e.int32();
                            break;
                        case 8:
                            r.f8 = e.int32();
                            break;
                        case 9:
                            r.f9 = e.int32();
                            break;
                        case 10:
                            r.f10 = e.int32();
                            break;
                        case 12:
                            r.f12 = e.int32();
                            break;
                        default:
                            let a = i.readUnknownField;
                            if (a === "throw")
                                throw new globalThis.Error(
                                    `Unknown field ${s} (wire type ${o}) for ${this.typeName}`
                                );
                            let u = e.skip(o);
                            a !== !1 && (a === !0 ? c.onRead : a)(this.typeName, r, s, o, u);
                    }
                }
                return r;
            }
            internalBinaryWrite(e, n, i) {
                e.f2 !== 0 && n.tag(2, h.Varint).int32(e.f2),
                    e.f3 !== 0 && n.tag(3, h.Varint).int32(e.f3),
                    e.st3F5 &&
                    K.internalBinaryWrite(
                        e.st3F5,
                        n.tag(5, h.LengthDelimited).fork(),
                        i
                    ).join(),
                    e.f6 !== 0 && n.tag(6, h.Varint).int32(e.f6),
                    e.f7 !== 0 && n.tag(7, h.Varint).int32(e.f7),
                    e.f8 !== 0 && n.tag(8, h.Varint).int32(e.f8),
                    e.f9 !== 0 && n.tag(9, h.Varint).int32(e.f9),
                    e.f10 !== 0 && n.tag(10, h.Varint).int32(e.f10),
                    e.f12 !== 0 && n.tag(12, h.Varint).int32(e.f12);
                let t = i.writeUnknownFields;
                return t !== !1 && (t == !0 ? c.onWrite : t)(this.typeName, e, n), n;
            }
        },
        ne = new Rt(),
        Tt = class extends y {
            constructor() {
                super("st2F66930374", [
                    { no: 3, name: "st3F3", kind: "message", repeat: 1, T: () => Bn },
                    { no: 4, name: "num", kind: "scalar", T: 5 },
                ]);
            }
            create(e) {
                let n = { st3F3: [], num: 0 };
                return (
                    globalThis.Object.defineProperty(n, p, {
                        enumerable: !1,
                        value: this,
                    }),
                    e !== void 0 && F(this, n, e),
                    n
                );
            }
            internalBinaryRead(e, n, i, t) {
                let r = t != null ? t : this.create(),
                    f = e.pos + n;
                for (; e.pos < f;) {
                    let [s, o] = e.tag();
                    switch (s) {
                        case 3:
                            r.st3F3.push(Bn.internalBinaryRead(e, e.uint32(), i));
                            break;
                        case 4:
                            r.num = e.int32();
                            break;
                        default:
                            let a = i.readUnknownField;
                            if (a === "throw")
                                throw new globalThis.Error(
                                    `Unknown field ${s} (wire type ${o}) for ${this.typeName}`
                                );
                            let u = e.skip(o);
                            a !== !1 && (a === !0 ? c.onRead : a)(this.typeName, r, s, o, u);
                    }
                }
                return r;
            }
            internalBinaryWrite(e, n, i) {
                for (let r = 0; r < e.st3F3.length; r++)
                    Bn.internalBinaryWrite(
                        e.st3F3[r],
                        n.tag(3, h.LengthDelimited).fork(),
                        i
                    ).join();
                e.num !== 0 && n.tag(4, h.Varint).int32(e.num);
                let t = i.writeUnknownFields;
                return t !== !1 && (t == !0 ? c.onWrite : t)(this.typeName, e, n), n;
            }
        },
        bn = new Tt(),
        xt = class extends y {
            constructor() {
                super("st3F1", [
                    { no: 1, name: "st4F1", kind: "message", T: () => kn },
                ]);
            }
            create(e) {
                let n = {};
                return (
                    globalThis.Object.defineProperty(n, p, {
                        enumerable: !1,
                        value: this,
                    }),
                    e !== void 0 && F(this, n, e),
                    n
                );
            }
            internalBinaryRead(e, n, i, t) {
                let r = t != null ? t : this.create(),
                    f = e.pos + n;
                for (; e.pos < f;) {
                    let [s, o] = e.tag();
                    switch (s) {
                        case 1:
                            r.st4F1 = kn.internalBinaryRead(e, e.uint32(), i, r.st4F1);
                            break;
                        default:
                            let a = i.readUnknownField;
                            if (a === "throw")
                                throw new globalThis.Error(
                                    `Unknown field ${s} (wire type ${o}) for ${this.typeName}`
                                );
                            let u = e.skip(o);
                            a !== !1 && (a === !0 ? c.onRead : a)(this.typeName, r, s, o, u);
                    }
                }
                return r;
            }
            internalBinaryWrite(e, n, i) {
                e.st4F1 &&
                    kn
                        .internalBinaryWrite(e.st4F1, n.tag(1, h.LengthDelimited).fork(), i)
                        .join();
                let t = i.writeUnknownFields;
                return t !== !1 && (t == !0 ? c.onWrite : t)(this.typeName, e, n), n;
            }
        },
        xs = new xt(),
        Ot = class extends y {
            constructor() {
                super("st3F3", [
                    { no: 61331416, name: "st4F61331416", kind: "message", T: () => gn },
                ]);
            }
            create(e) {
                let n = {};
                return (
                    globalThis.Object.defineProperty(n, p, {
                        enumerable: !1,
                        value: this,
                    }),
                    e !== void 0 && F(this, n, e),
                    n
                );
            }
            internalBinaryRead(e, n, i, t) {
                let r = t != null ? t : this.create(),
                    f = e.pos + n;
                for (; e.pos < f;) {
                    let [s, o] = e.tag();
                    switch (s) {
                        case 61331416:
                            r.st4F61331416 = gn.internalBinaryRead(
                                e,
                                e.uint32(),
                                i,
                                r.st4F61331416
                            );
                            break;
                        default:
                            let a = i.readUnknownField;
                            if (a === "throw")
                                throw new globalThis.Error(
                                    `Unknown field ${s} (wire type ${o}) for ${this.typeName}`
                                );
                            let u = e.skip(o);
                            a !== !1 && (a === !0 ? c.onRead : a)(this.typeName, r, s, o, u);
                    }
                }
                return r;
            }
            internalBinaryWrite(e, n, i) {
                e.st4F61331416 &&
                    gn
                        .internalBinaryWrite(
                            e.st4F61331416,
                            n.tag(61331416, h.LengthDelimited).fork(),
                            i
                        )
                        .join();
                let t = i.writeUnknownFields;
                return t !== !1 && (t == !0 ? c.onWrite : t)(this.typeName, e, n), n;
            }
        },
        Bn = new Ot(),
        Ut = class extends y {
            constructor() {
                super("st3F5", [
                    { no: 1, name: "f1", kind: "scalar", T: 5 },
                    { no: 2, name: "f2", kind: "scalar", T: 5 },
                    { no: 3, name: "f3", kind: "scalar", T: 5 },
                    { no: 4, name: "st2F4", kind: "message", T: () => ee },
                ]);
            }
            create(e) {
                let n = { f1: 0, f2: 0, f3: 0 };
                return (
                    globalThis.Object.defineProperty(n, p, {
                        enumerable: !1,
                        value: this,
                    }),
                    e !== void 0 && F(this, n, e),
                    n
                );
            }
            internalBinaryRead(e, n, i, t) {
                let r = t != null ? t : this.create(),
                    f = e.pos + n;
                for (; e.pos < f;) {
                    let [s, o] = e.tag();
                    switch (s) {
                        case 1:
                            r.f1 = e.int32();
                            break;
                        case 2:
                            r.f2 = e.int32();
                            break;
                        case 3:
                            r.f3 = e.int32();
                            break;
                        case 4:
                            r.st2F4 = ee.internalBinaryRead(e, e.uint32(), i, r.st2F4);
                            break;
                        default:
                            let a = i.readUnknownField;
                            if (a === "throw")
                                throw new globalThis.Error(
                                    `Unknown field ${s} (wire type ${o}) for ${this.typeName}`
                                );
                            let u = e.skip(o);
                            a !== !1 && (a === !0 ? c.onRead : a)(this.typeName, r, s, o, u);
                    }
                }
                return r;
            }
            internalBinaryWrite(e, n, i) {
                e.f1 !== 0 && n.tag(1, h.Varint).int32(e.f1),
                    e.f2 !== 0 && n.tag(2, h.Varint).int32(e.f2),
                    e.f3 !== 0 && n.tag(3, h.Varint).int32(e.f3),
                    e.st2F4 &&
                    ee
                        .internalBinaryWrite(
                            e.st2F4,
                            n.tag(4, h.LengthDelimited).fork(),
                            i
                        )
                        .join();
                let t = i.writeUnknownFields;
                return t !== !1 && (t == !0 ? c.onWrite : t)(this.typeName, e, n), n;
            }
        },
        K = new Ut(),
        Et = class extends y {
            constructor() {
                super("st4F1", [{ no: 1, name: "title", kind: "scalar", T: 9 }]);
            }
            create(e) {
                let n = { title: "" };
                return (
                    globalThis.Object.defineProperty(n, p, {
                        enumerable: !1,
                        value: this,
                    }),
                    e !== void 0 && F(this, n, e),
                    n
                );
            }
            internalBinaryRead(e, n, i, t) {
                let r = t != null ? t : this.create(),
                    f = e.pos + n;
                for (; e.pos < f;) {
                    let [s, o] = e.tag();
                    switch (s) {
                        case 1:
                            r.title = e.string();
                            break;
                        default:
                            let a = i.readUnknownField;
                            if (a === "throw")
                                throw new globalThis.Error(
                                    `Unknown field ${s} (wire type ${o}) for ${this.typeName}`
                                );
                            let u = e.skip(o);
                            a !== !1 && (a === !0 ? c.onRead : a)(this.typeName, r, s, o, u);
                    }
                }
                return r;
            }
            internalBinaryWrite(e, n, i) {
                e.title !== "" && n.tag(1, h.LengthDelimited).string(e.title);
                let t = i.writeUnknownFields;
                return t !== !1 && (t == !0 ? c.onWrite : t)(this.typeName, e, n), n;
            }
        },
        kn = new Et(),
        Pt = class extends y {
            constructor() {
                super("st4F61331416", [
                    { no: 5, name: "st5F5", kind: "message", T: () => _ },
                    { no: 6, name: "st5F6", kind: "message", T: () => _ },
                    { no: 13, name: "st3F5", kind: "message", T: () => K },
                    { no: 15, name: "f15", kind: "scalar", T: 5 },
                ]);
            }
            create(e) {
                let n = { f15: 0 };
                return (
                    globalThis.Object.defineProperty(n, p, {
                        enumerable: !1,
                        value: this,
                    }),
                    e !== void 0 && F(this, n, e),
                    n
                );
            }
            internalBinaryRead(e, n, i, t) {
                let r = t != null ? t : this.create(),
                    f = e.pos + n;
                for (; e.pos < f;) {
                    let [s, o] = e.tag();
                    switch (s) {
                        case 5:
                            r.st5F5 = _.internalBinaryRead(e, e.uint32(), i, r.st5F5);
                            break;
                        case 6:
                            r.st5F6 = _.internalBinaryRead(e, e.uint32(), i, r.st5F6);
                            break;
                        case 13:
                            r.st3F5 = K.internalBinaryRead(e, e.uint32(), i, r.st3F5);
                            break;
                        case 15:
                            r.f15 = e.int32();
                            break;
                        default:
                            let a = i.readUnknownField;
                            if (a === "throw")
                                throw new globalThis.Error(
                                    `Unknown field ${s} (wire type ${o}) for ${this.typeName}`
                                );
                            let u = e.skip(o);
                            a !== !1 && (a === !0 ? c.onRead : a)(this.typeName, r, s, o, u);
                    }
                }
                return r;
            }
            internalBinaryWrite(e, n, i) {
                e.st5F5 &&
                    _.internalBinaryWrite(
                        e.st5F5,
                        n.tag(5, h.LengthDelimited).fork(),
                        i
                    ).join(),
                    e.st5F6 &&
                    _.internalBinaryWrite(
                        e.st5F6,
                        n.tag(6, h.LengthDelimited).fork(),
                        i
                    ).join(),
                    e.st3F5 &&
                    K.internalBinaryWrite(
                        e.st3F5,
                        n.tag(13, h.LengthDelimited).fork(),
                        i
                    ).join(),
                    e.f15 !== 0 && n.tag(15, h.Varint).int32(e.f15);
                let t = i.writeUnknownFields;
                return t !== !1 && (t == !0 ? c.onWrite : t)(this.typeName, e, n), n;
            }
        },
        gn = new Pt(),
        $t = class extends y {
            constructor() {
                super("st5F5", [
                    { no: 2, name: "st3F5", kind: "message", T: () => K },
                    { no: 81212182, name: "st6F81212182", kind: "message", T: () => Nn },
                ]);
            }
            create(e) {
                let n = {};
                return (
                    globalThis.Object.defineProperty(n, p, {
                        enumerable: !1,
                        value: this,
                    }),
                    e !== void 0 && F(this, n, e),
                    n
                );
            }
            internalBinaryRead(e, n, i, t) {
                let r = t != null ? t : this.create(),
                    f = e.pos + n;
                for (; e.pos < f;) {
                    let [s, o] = e.tag();
                    switch (s) {
                        case 2:
                            r.st3F5 = K.internalBinaryRead(e, e.uint32(), i, r.st3F5);
                            break;
                        case 81212182:
                            r.st6F81212182 = Nn.internalBinaryRead(
                                e,
                                e.uint32(),
                                i,
                                r.st6F81212182
                            );
                            break;
                        default:
                            let a = i.readUnknownField;
                            if (a === "throw")
                                throw new globalThis.Error(
                                    `Unknown field ${s} (wire type ${o}) for ${this.typeName}`
                                );
                            let u = e.skip(o);
                            a !== !1 && (a === !0 ? c.onRead : a)(this.typeName, r, s, o, u);
                    }
                }
                return r;
            }
            internalBinaryWrite(e, n, i) {
                e.st3F5 &&
                    K.internalBinaryWrite(
                        e.st3F5,
                        n.tag(2, h.LengthDelimited).fork(),
                        i
                    ).join(),
                    e.st6F81212182 &&
                    Nn.internalBinaryWrite(
                        e.st6F81212182,
                        n.tag(81212182, h.LengthDelimited).fork(),
                        i
                    ).join();
                let t = i.writeUnknownFields;
                return t !== !1 && (t == !0 ? c.onWrite : t)(this.typeName, e, n), n;
            }
        },
        _ = new $t(),
        jt = class extends y {
            constructor() {
                super("st6F81212182", [
                    { no: 1, name: "st7F1", kind: "message", T: () => Wn },
                ]);
            }
            create(e) {
                let n = {};
                return (
                    globalThis.Object.defineProperty(n, p, {
                        enumerable: !1,
                        value: this,
                    }),
                    e !== void 0 && F(this, n, e),
                    n
                );
            }
            internalBinaryRead(e, n, i, t) {
                let r = t != null ? t : this.create(),
                    f = e.pos + n;
                for (; e.pos < f;) {
                    let [s, o] = e.tag();
                    switch (s) {
                        case 1:
                            r.st7F1 = Wn.internalBinaryRead(e, e.uint32(), i, r.st7F1);
                            break;
                        default:
                            let a = i.readUnknownField;
                            if (a === "throw")
                                throw new globalThis.Error(
                                    `Unknown field ${s} (wire type ${o}) for ${this.typeName}`
                                );
                            let u = e.skip(o);
                            a !== !1 && (a === !0 ? c.onRead : a)(this.typeName, r, s, o, u);
                    }
                }
                return r;
            }
            internalBinaryWrite(e, n, i) {
                e.st7F1 &&
                    Wn.internalBinaryWrite(
                        e.st7F1,
                        n.tag(1, h.LengthDelimited).fork(),
                        i
                    ).join();
                let t = i.writeUnknownFields;
                return t !== !1 && (t == !0 ? c.onWrite : t)(this.typeName, e, n), n;
            }
        },
        Nn = new jt(),
        Dt = class extends y {
            constructor() {
                super("st7F1", [
                    { no: 1, name: "st8F1", kind: "message", T: () => In },
                    { no: 3, name: "f3", kind: "scalar", T: 5 },
                ]);
            }
            create(e) {
                let n = { f3: 0 };
                return (
                    globalThis.Object.defineProperty(n, p, {
                        enumerable: !1,
                        value: this,
                    }),
                    e !== void 0 && F(this, n, e),
                    n
                );
            }
            internalBinaryRead(e, n, i, t) {
                let r = t != null ? t : this.create(),
                    f = e.pos + n;
                for (; e.pos < f;) {
                    let [s, o] = e.tag();
                    switch (s) {
                        case 1:
                            r.st8F1 = In.internalBinaryRead(e, e.uint32(), i, r.st8F1);
                            break;
                        case 3:
                            r.f3 = e.int32();
                            break;
                        default:
                            let a = i.readUnknownField;
                            if (a === "throw")
                                throw new globalThis.Error(
                                    `Unknown field ${s} (wire type ${o}) for ${this.typeName}`
                                );
                            let u = e.skip(o);
                            a !== !1 && (a === !0 ? c.onRead : a)(this.typeName, r, s, o, u);
                    }
                }
                return r;
            }
            internalBinaryWrite(e, n, i) {
                e.st8F1 &&
                    In.internalBinaryWrite(
                        e.st8F1,
                        n.tag(1, h.LengthDelimited).fork(),
                        i
                    ).join(),
                    e.f3 !== 0 && n.tag(3, h.Varint).int32(e.f3);
                let t = i.writeUnknownFields;
                return t !== !1 && (t == !0 ? c.onWrite : t)(this.typeName, e, n), n;
            }
        },
        Wn = new Dt(),
        Lt = class extends y {
            constructor() {
                super("st8F1", [{ no: 1, name: "f1", kind: "scalar", T: 5 }]);
            }
            create(e) {
                let n = { f1: 0 };
                return (
                    globalThis.Object.defineProperty(n, p, {
                        enumerable: !1,
                        value: this,
                    }),
                    e !== void 0 && F(this, n, e),
                    n
                );
            }
            internalBinaryRead(e, n, i, t) {
                let r = t != null ? t : this.create(),
                    f = e.pos + n;
                for (; e.pos < f;) {
                    let [s, o] = e.tag();
                    switch (s) {
                        case 1:
                            r.f1 = e.int32();
                            break;
                        default:
                            let a = i.readUnknownField;
                            if (a === "throw")
                                throw new globalThis.Error(
                                    `Unknown field ${s} (wire type ${o}) for ${this.typeName}`
                                );
                            let u = e.skip(o);
                            a !== !1 && (a === !0 ? c.onRead : a)(this.typeName, r, s, o, u);
                    }
                }
                return r;
            }
            internalBinaryWrite(e, n, i) {
                e.f1 !== 0 && n.tag(1, h.Varint).int32(e.f1);
                let t = i.writeUnknownFields;
                return t !== !1 && (t == !0 ? c.onWrite : t)(this.typeName, e, n), n;
            }
        },
        In = new Lt();
    var J = class {
        constructor(e, n) {
            this.decoder = new TextDecoder("utf-8", { fatal: !1, ignoreBOM: !0 });
            E.log(n),
                (this.whiteNo = e.whiteNo),
                (this.blackNo = e.blackNo),
                (this.whiteEml = e.whiteEml),
                (this.blackEml = e.blackEml);
        }
        save() {
            if (this.needSave) {
                E.log("Update Config");
                let e = {
                    whiteNo: this.whiteNo,
                    blackNo: this.blackNo,
                    whiteEml: this.whiteEml,
                    blackEml: this.blackEml,
                };
                E.setjson(e, "YouTubeWhiteStr");
            }
        }
        done() {
            this.save(),
                this.needProcess
                    ? (this.toBinary(),
                        E.log("Handle"),
                        E.isQuanX()
                            ? E.done({
                                bodyBytes: this.body.buffer.slice(
                                    this.body.byteOffset,
                                    this.body.byteLength + this.body.byteOffset
                                ),
                            })
                            : E.done({ body: this.body }))
                    : E.done();
        }
        iterate(e = {}, n, i, t) {
            let r = [];
            for (r.push(e); r.length;) {
                let f = r.pop();
                for (let s of Object.keys(f))
                    s === n
                        ? i(f, r)
                        : typeof f[s] == "object" &&
                        (r.push(f[s]), typeof t == "function" && t(f, r));
            }
        }
        isAdvertise(e) {
            let n = c.list(e)[0],
                i = n ? this.handleUnknownField(n) : this.handleKnownField(e);
            return i && (this.needProcess = !0), i;
        }
        isUpload(e) {
            let n = e == null ? void 0 : e.g4F318370163;
            return n && (this.needProcess = !0), n;
        }
        handleUnknownField(e) {
            let n = e.no;
            if (this.whiteNo.includes(n)) return !1;
            if (this.blackNo.includes(n)) return !0;
            let t = this.decoder.decode(e.data).includes("pagead");
            return (
                t ? this.blackNo.push(n) : this.whiteNo.push(n),
                (this.needSave = !0),
                E.log("UnknownField:" + n + ": " + t),
                t
            );
        }
        handleKnownField(e) {
            let n = !1,
                i = !0,
                t = "";
            return (
                this.iterate(e, "type", (r, f) => {
                    (t = r.type.split("|")[0]),
                        this.whiteEml.includes(t)
                            ? (n = !1)
                            : this.blackEml.includes(t) || /shorts(?!_pivot_item)/.test(t)
                                ? (n = !0)
                                : (i = !1),
                        i && (f.length = 0);
                }),
                i ||
                (this.iterate(
                    e,
                    "type",
                    () => { },
                    (r, f) => {
                        for (let s of c.list(r))
                            if (
                                s.data.length > 1e3 &&
                                ((n = this.decoder.decode(s.data).includes("pagead")), n)
                            ) {
                                f.length = 0;
                                break;
                            }
                    }
                ),
                    n ? this.blackEml.push(t) : this.whiteEml.push(t),
                    (this.needSave = !0)),
                n
            );
        }
    },
        te = class extends J {
            constructor(e, n = "Browse") {
                super(e, n);
            }
            fromBinary(e) {
                this.message = St.fromBinary(e);
            }
            pure() {
                this.iterate(this.message, "n5F1", (e) => {
                    var n;
                    for (
                        let i = ((n = e.n5F1) == null ? void 0 : n.length) - 1;
                        i >= 0;
                        i--
                    )
                        this.isAdvertise(e.n5F1[i]) && e.n5F1.splice(i, 1);
                });
            }
            toBinary() {
                this.body = St.toBinary(this.message);
            }
        },
        ke = class extends te {
            constructor(e, n = "Next") {
                super(e, n);
            }
            fromBinary(e) {
                this.message = Vt.fromBinary(e);
            }
            toBinary() {
                this.body = Vt.toBinary(this.message);
            }
        },
        ge = class extends J {
            constructor(e, n = "Player") {
                super(e, n);
            }
            fromBinary(e) {
                this.message = Xt.fromBinary(e);
            }
            pure() {
                var i, t, r, f, s;
                (i = this.message.p1F7) != null &&
                    i.length &&
                    (this.message.p1F7.length = 0);
                let e =
                    (f =
                        (r = (t = this.message) == null ? void 0 : t.p1F2) == null
                            ? void 0
                            : r.p2F21) == null
                        ? void 0
                        : f.p3F151635310;
                typeof e == "object" && (e.pip = 1);
                let n = { p2F11: { p3F64657230: { backPlay: 1 } } };
                typeof ((s = this.message) == null ? void 0 : s.p1F2) == "object" &&
                    Object.assign(this.message.p1F2, n),
                    (this.needProcess = !0);
            }
            toBinary() {
                this.body = Xt.toBinary(this.message);
            }
        },
        Ne = class extends te {
            constructor(e, n = "Search") {
                super(e, n);
            }
            fromBinary(e) {
                this.message = Mt.fromBinary(e);
            }
            toBinary() {
                this.body = Mt.toBinary(this.message);
            }
        },
        We = class extends J {
            constructor(e, n = "Shorts") {
                super(e, n);
            }
            fromBinary(e) {
                this.message = At.fromBinary(e);
            }
            pure() {
                var n, i, t;
                let e = (n = this.message.t1F2) == null ? void 0 : n.length;
                if (e)
                    for (let r = e - 1; r >= 0; r--)
                        ((t =
                            (i = this.message.t1F2[r].n2F1) == null
                                ? void 0
                                : i.n3F139608561) != null &&
                            t.n4F8) ||
                            (this.message.t1F2.splice(r, 1), (this.needProcess = !0));
            }
            toBinary() {
                this.body = At.toBinary(this.message);
            }
        },
        Ie = class extends J {
            constructor(e, n = "Guide") {
                super(e, n);
            }
            fromBinary(e) {
                this.message = Kt.fromBinary(e);
            }
            pure() {
                this.iterate(this.message, "g3F1", (e) => {
                    for (let n = e.g3F1.length - 1; n >= 0; n--)
                        this.isUpload(e.g3F1[n]) && e.g3F1.splice(n, 1);
                });
            }
            toBinary() {
                this.body = Kt.toBinary(this.message);
            }
        },
        Re = class extends J {
            constructor(e, n = "Setting") {
                super(e, n);
            }
            fromBinary(e) {
                this.message = Gt.fromBinary(e);
            }
            pure() {
                this.iterate(this.message, "num", (n) => {
                    if (n.num === 10005) {
                        let i = {
                            f1: 135,
                            f2: 20434,
                            f3: 2,
                            st2F4: this.message.st1F10.st2F4,
                        },
                            t = {
                                st4F61331416: {
                                    f15: 0,
                                    st5F5: {
                                        st3F5: i,
                                        st6F81212182: { st7F1: { st8F1: { f1: 151 }, f3: 1 } },
                                    },
                                    st5F6: {
                                        st3F5: i,
                                        st6F81212182: { st7F1: { st8F1: { f1: 151 }, f3: 0 } },
                                    },
                                    st3F5: i,
                                },
                            };
                        n.st3F3.push(t);
                    }
                });
                let e = {
                    st2F88478200: {
                        f2: 1,
                        f3: 1,
                        st3F5: {
                            f1: 2,
                            f2: 20020,
                            f3: 8,
                            st2F4: this.message.st1F10.st2F4,
                        },
                        f6: 0,
                        f7: 1,
                        f8: 1,
                        f9: 1,
                        f10: 1,
                        f12: 1,
                    },
                };
                this.message.st1F6.push(JSON.parse(JSON.stringify(e))),
                    (e.st2F88478200.st3F5.f1 = 1),
                    (e.st2F88478200.st3F5.f3 = 9),
                    (this.message.st1F7 = e),
                    (this.needProcess = !0);
            }
            toBinary() {
                this.body = Gt.toBinary(this.message);
            }
        };
    var oe = class {
        static create(e, n) {
            return e.includes("/v1/browse")
                ? new te(n)
                : e.includes("/v1/next")
                    ? new ke(n, "Next")
                    : e.includes("/v1/player")
                        ? new ge(n)
                        : e.includes("/v1/search")
                            ? new Ne(n)
                            : e.includes("/v1/reel/reel_watch_sequence")
                                ? new We(n)
                                : e.includes("/v1/guide")
                                    ? new Ie(n)
                                    : e.includes("/v1/account/get_setting")
                                        ? new Re(n)
                                        : !1;
        }
    };
    var bi = $request.url,
        Bi = E.isQuanX() ? new Uint8Array($response.bodyBytes) : $response.body,
        ki = E.getjson("YouTubeWhiteStr", {
            whiteNo: [],
            blackNo: [],
            whiteEml: [],
            blackEml: [],
        }),
        Te = oe.create(bi, ki);
    Te
        ? (Te.fromBinary(Bi), Te.pure(), Te.done())
        : (E.msg(
            "YouTubeAds",
            "\u811A\u672C\u9700\u8981\u66F4\u65B0",
            "\u5916\u90E8\u8D44\u6E90 -> \u5168\u90E8\u66F4\u65B0"
        ),
            E.done());
})();
