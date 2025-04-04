import {
  require_jquery
} from "./chunk-WTCQJA6Y.js";
import {
  __commonJS
} from "./chunk-BUSYA2B4.js";

// node_modules/admin-lte/dist/js/adminlte.min.js
var require_adminlte_min = __commonJS({
  "node_modules/admin-lte/dist/js/adminlte.min.js"(exports, module) {
    !function(e, t) {
      "object" == typeof exports && "undefined" != typeof module ? t(exports, require_jquery()) : "function" == typeof define && define.amd ? define(["exports", "jquery"], t) : t((e = "undefined" != typeof globalThis ? globalThis : e || self).adminlte = {}, e.jQuery);
    }(exports, function(e, t) {
      "use strict";
      function a(e2) {
        return e2 && "object" == typeof e2 && "default" in e2 ? e2 : { default: e2 };
      }
      var n = a(t), i = "CardRefresh", o = "lte.cardrefresh", l = n.default.fn[i], s = "card", r = '[data-card-widget="card-refresh"]', d = { source: "", sourceSelector: "", params: {}, trigger: r, content: ".card-body", loadInContent: true, loadOnInit: true, loadErrorTemplate: true, responseType: "", overlayTemplate: '<div class="overlay"><i class="fas fa-2x fa-sync-alt fa-spin"></i></div>', errorTemplate: '<span class="text-danger"></span>', onLoadStart: function() {
      }, onLoadDone: function(e2) {
        return e2;
      }, onLoadFail: function(e2, t2, a2) {
      } }, f = function() {
        function e2(e3, t3) {
          if (this._element = e3, this._parent = e3.parents(".card").first(), this._settings = n.default.extend({}, d, t3), this._overlay = n.default(this._settings.overlayTemplate), e3.hasClass(s) && (this._parent = e3), "" === this._settings.source) throw new Error("Source url was not defined. Please specify a url in your CardRefresh source option.");
        }
        var t2 = e2.prototype;
        return t2.load = function() {
          var e3 = this;
          this._addOverlay(), this._settings.onLoadStart.call(n.default(this)), n.default.get(this._settings.source, this._settings.params, function(t3) {
            e3._settings.loadInContent && ("" !== e3._settings.sourceSelector && (t3 = n.default(t3).find(e3._settings.sourceSelector).html()), e3._parent.find(e3._settings.content).html(t3)), e3._settings.onLoadDone.call(n.default(e3), t3), e3._removeOverlay();
          }, "" !== this._settings.responseType && this._settings.responseType).fail(function(t3, a2, i2) {
            if (e3._removeOverlay(), e3._settings.loadErrorTemplate) {
              var o2 = n.default(e3._settings.errorTemplate).text(i2);
              e3._parent.find(e3._settings.content).empty().append(o2);
            }
            e3._settings.onLoadFail.call(n.default(e3), t3, a2, i2);
          }), n.default(this._element).trigger(n.default.Event("loaded.lte.cardrefresh"));
        }, t2._addOverlay = function() {
          this._parent.append(this._overlay), n.default(this._element).trigger(n.default.Event("overlay.added.lte.cardrefresh"));
        }, t2._removeOverlay = function() {
          this._parent.find(this._overlay).remove(), n.default(this._element).trigger(n.default.Event("overlay.removed.lte.cardrefresh"));
        }, t2._init = function() {
          var e3 = this;
          n.default(this).find(this._settings.trigger).on("click", function() {
            e3.load();
          }), this._settings.loadOnInit && this.load();
        }, e2._jQueryInterface = function(t3) {
          var a2 = n.default(this).data(o), i2 = n.default.extend({}, d, n.default(this).data());
          a2 || (a2 = new e2(n.default(this), i2), n.default(this).data(o, "string" == typeof t3 ? a2 : t3)), "string" == typeof t3 && /load/.test(t3) ? a2[t3]() : a2._init(n.default(this));
        }, e2;
      }();
      n.default(document).on("click", r, function(e2) {
        e2 && e2.preventDefault(), f._jQueryInterface.call(n.default(this), "load");
      }), n.default(function() {
        n.default(r).each(function() {
          f._jQueryInterface.call(n.default(this));
        });
      }), n.default.fn[i] = f._jQueryInterface, n.default.fn[i].Constructor = f, n.default.fn[i].noConflict = function() {
        return n.default.fn[i] = l, f._jQueryInterface;
      };
      var u = "CardWidget", c = "lte.cardwidget", h = n.default.fn[u], g = "card", p = "collapsed-card", m = "collapsing-card", v = "expanding-card", _ = "was-collapsed", b = "maximized-card", y = '[data-card-widget="remove"]', C = '[data-card-widget="collapse"]', w = '[data-card-widget="maximize"]', x = { animationSpeed: "normal", collapseTrigger: C, removeTrigger: y, maximizeTrigger: w, collapseIcon: "fa-minus", expandIcon: "fa-plus", maximizeIcon: "fa-expand", minimizeIcon: "fa-compress" }, I = function() {
        function e2(e3, t3) {
          this._element = e3, this._parent = e3.parents(".card").first(), e3.hasClass(g) && (this._parent = e3), this._settings = n.default.extend({}, x, t3);
        }
        var t2 = e2.prototype;
        return t2.collapse = function() {
          var e3 = this;
          this._parent.addClass(m).children(".card-body, .card-footer").slideUp(this._settings.animationSpeed, function() {
            e3._parent.addClass(p).removeClass(m);
          }), this._parent.find("> .card-header " + this._settings.collapseTrigger + " ." + this._settings.collapseIcon).addClass(this._settings.expandIcon).removeClass(this._settings.collapseIcon), this._element.trigger(n.default.Event("collapsed.lte.cardwidget"), this._parent);
        }, t2.expand = function() {
          var e3 = this;
          this._parent.addClass(v).children(".card-body, .card-footer").slideDown(this._settings.animationSpeed, function() {
            e3._parent.removeClass(p).removeClass(v);
          }), this._parent.find("> .card-header " + this._settings.collapseTrigger + " ." + this._settings.expandIcon).addClass(this._settings.collapseIcon).removeClass(this._settings.expandIcon), this._element.trigger(n.default.Event("expanded.lte.cardwidget"), this._parent);
        }, t2.remove = function() {
          this._parent.slideUp(), this._element.trigger(n.default.Event("removed.lte.cardwidget"), this._parent);
        }, t2.toggle = function() {
          this._parent.hasClass(p) ? this.expand() : this.collapse();
        }, t2.maximize = function() {
          this._parent.find(this._settings.maximizeTrigger + " ." + this._settings.maximizeIcon).addClass(this._settings.minimizeIcon).removeClass(this._settings.maximizeIcon), this._parent.css({ height: this._parent.height(), width: this._parent.width(), transition: "all .15s" }).delay(150).queue(function() {
            var e3 = n.default(this);
            e3.addClass(b), n.default("html").addClass(b), e3.hasClass(p) && e3.addClass(_), e3.dequeue();
          }), this._element.trigger(n.default.Event("maximized.lte.cardwidget"), this._parent);
        }, t2.minimize = function() {
          this._parent.find(this._settings.maximizeTrigger + " ." + this._settings.minimizeIcon).addClass(this._settings.maximizeIcon).removeClass(this._settings.minimizeIcon), this._parent.css("cssText", "height: " + this._parent[0].style.height + " !important; width: " + this._parent[0].style.width + " !important; transition: all .15s;").delay(10).queue(function() {
            var e3 = n.default(this);
            e3.removeClass(b), n.default("html").removeClass(b), e3.css({ height: "inherit", width: "inherit" }), e3.hasClass(_) && e3.removeClass(_), e3.dequeue();
          }), this._element.trigger(n.default.Event("minimized.lte.cardwidget"), this._parent);
        }, t2.toggleMaximize = function() {
          this._parent.hasClass(b) ? this.minimize() : this.maximize();
        }, t2._init = function(e3) {
          var t3 = this;
          this._parent = e3, n.default(this).find(this._settings.collapseTrigger).click(function() {
            t3.toggle();
          }), n.default(this).find(this._settings.maximizeTrigger).click(function() {
            t3.toggleMaximize();
          }), n.default(this).find(this._settings.removeTrigger).click(function() {
            t3.remove();
          });
        }, e2._jQueryInterface = function(t3) {
          var a2 = n.default(this).data(c), i2 = n.default.extend({}, x, n.default(this).data());
          a2 || (a2 = new e2(n.default(this), i2), n.default(this).data(c, "string" == typeof t3 ? a2 : t3)), "string" == typeof t3 && /collapse|expand|remove|toggle|maximize|minimize|toggleMaximize/.test(t3) ? a2[t3]() : "object" == typeof t3 && a2._init(n.default(this));
        }, e2;
      }();
      n.default(document).on("click", C, function(e2) {
        e2 && e2.preventDefault(), I._jQueryInterface.call(n.default(this), "toggle");
      }), n.default(document).on("click", y, function(e2) {
        e2 && e2.preventDefault(), I._jQueryInterface.call(n.default(this), "remove");
      }), n.default(document).on("click", w, function(e2) {
        e2 && e2.preventDefault(), I._jQueryInterface.call(n.default(this), "toggleMaximize");
      }), n.default.fn[u] = I._jQueryInterface, n.default.fn[u].Constructor = I, n.default.fn[u].noConflict = function() {
        return n.default.fn[u] = h, I._jQueryInterface;
      };
      var T = "ControlSidebar", S = "lte.controlsidebar", j = n.default.fn[T], k = ".control-sidebar", Q = ".control-sidebar-content", H = '[data-widget="control-sidebar"]', z = ".main-header", F = ".main-footer", E = "control-sidebar-animate", L = "control-sidebar-open", D = "control-sidebar-slide-open", R = "layout-fixed", A = { controlsidebarSlide: true, scrollbarTheme: "os-theme-light", scrollbarAutoHide: "l", target: k, animationSpeed: 300 }, M = function() {
        function e2(e3, t3) {
          this._element = e3, this._config = t3;
        }
        var t2 = e2.prototype;
        return t2.collapse = function() {
          var e3 = this, t3 = n.default("body"), a2 = n.default("html");
          this._config.controlsidebarSlide ? (a2.addClass(E), t3.removeClass(D).delay(300).queue(function() {
            n.default(k).hide(), a2.removeClass(E), n.default(this).dequeue();
          })) : t3.removeClass(L), n.default(this._element).trigger(n.default.Event("collapsed.lte.controlsidebar")), setTimeout(function() {
            n.default(e3._element).trigger(n.default.Event("collapsed-done.lte.controlsidebar"));
          }, this._config.animationSpeed);
        }, t2.show = function(e3) {
          void 0 === e3 && (e3 = false);
          var t3 = n.default("body"), a2 = n.default("html");
          e3 && n.default(k).hide(), this._config.controlsidebarSlide ? (a2.addClass(E), n.default(this._config.target).show().delay(10).queue(function() {
            t3.addClass(D).delay(300).queue(function() {
              a2.removeClass(E), n.default(this).dequeue();
            }), n.default(this).dequeue();
          })) : t3.addClass(L), this._fixHeight(), this._fixScrollHeight(), n.default(this._element).trigger(n.default.Event("expanded.lte.controlsidebar"));
        }, t2.toggle = function() {
          var e3 = n.default("body"), t3 = this._config.target, a2 = !n.default(t3).is(":visible"), i2 = e3.hasClass(L) || e3.hasClass(D), o2 = a2 && (e3.hasClass(L) || e3.hasClass(D));
          a2 || o2 ? this.show(a2) : i2 && this.collapse();
        }, t2._init = function() {
          var e3 = this, t3 = n.default("body");
          t3.hasClass(L) || t3.hasClass(D) ? (n.default(k).not(this._config.target).hide(), n.default(this._config.target).css("display", "block")) : n.default(k).hide(), this._fixHeight(), this._fixScrollHeight(), n.default(window).resize(function() {
            e3._fixHeight(), e3._fixScrollHeight();
          }), n.default(window).scroll(function() {
            var t4 = n.default("body");
            (t4.hasClass(L) || t4.hasClass(D)) && e3._fixScrollHeight();
          });
        }, t2._isNavbarFixed = function() {
          var e3 = n.default("body");
          return e3.hasClass("layout-navbar-fixed") || e3.hasClass("layout-sm-navbar-fixed") || e3.hasClass("layout-md-navbar-fixed") || e3.hasClass("layout-lg-navbar-fixed") || e3.hasClass("layout-xl-navbar-fixed");
        }, t2._isFooterFixed = function() {
          var e3 = n.default("body");
          return e3.hasClass("layout-footer-fixed") || e3.hasClass("layout-sm-footer-fixed") || e3.hasClass("layout-md-footer-fixed") || e3.hasClass("layout-lg-footer-fixed") || e3.hasClass("layout-xl-footer-fixed");
        }, t2._fixScrollHeight = function() {
          var e3 = n.default("body"), t3 = n.default(this._config.target);
          if (e3.hasClass(R)) {
            var a2 = { scroll: n.default(document).height(), window: n.default(window).height(), header: n.default(z).outerHeight(), footer: n.default(F).outerHeight() }, i2 = Math.abs(a2.window + n.default(window).scrollTop() - a2.scroll), o2 = n.default(window).scrollTop(), l2 = this._isNavbarFixed() && "fixed" === n.default(z).css("position"), s2 = this._isFooterFixed() && "fixed" === n.default(F).css("position"), r2 = n.default(this._config.target + ", " + this._config.target + " " + Q);
            if (0 === o2 && 0 === i2) t3.css({ bottom: a2.footer, top: a2.header }), r2.css("height", a2.window - (a2.header + a2.footer));
            else if (i2 <= a2.footer) if (false === s2) {
              var d2 = a2.header - o2;
              t3.css("bottom", a2.footer - i2).css("top", d2 >= 0 ? d2 : 0), r2.css("height", a2.window - (a2.footer - i2));
            } else t3.css("bottom", a2.footer);
            else o2 <= a2.header ? false === l2 ? (t3.css("top", a2.header - o2), r2.css("height", a2.window - (a2.header - o2))) : t3.css("top", a2.header) : false === l2 ? (t3.css("top", 0), r2.css("height", a2.window)) : t3.css("top", a2.header);
            s2 && l2 ? (r2.css("height", "100%"), t3.css("height", "")) : (s2 || l2) && (r2.css("height", "100%"), r2.css("height", ""));
          }
        }, t2._fixHeight = function() {
          var e3 = n.default("body"), t3 = n.default(this._config.target + " " + Q);
          if (e3.hasClass(R)) {
            var a2 = n.default(window).height(), i2 = n.default(z).outerHeight(), o2 = n.default(F).outerHeight(), l2 = a2 - i2;
            this._isFooterFixed() && "fixed" === n.default(F).css("position") && (l2 = a2 - i2 - o2), t3.css("height", l2), "undefined" != typeof n.default.fn.overlayScrollbars && t3.overlayScrollbars({ className: this._config.scrollbarTheme, sizeAutoCapable: true, scrollbars: { autoHide: this._config.scrollbarAutoHide, clickScrolling: true } });
          } else t3.attr("style", "");
        }, e2._jQueryInterface = function(t3) {
          return this.each(function() {
            var a2 = n.default(this).data(S), i2 = n.default.extend({}, A, n.default(this).data());
            if (a2 || (a2 = new e2(this, i2), n.default(this).data(S, a2)), "undefined" === a2[t3]) throw new Error(t3 + " is not a function");
            a2[t3]();
          });
        }, e2;
      }();
      n.default(document).on("click", H, function(e2) {
        e2.preventDefault(), M._jQueryInterface.call(n.default(this), "toggle");
      }), n.default(document).ready(function() {
        M._jQueryInterface.call(n.default(H), "_init");
      }), n.default.fn[T] = M._jQueryInterface, n.default.fn[T].Constructor = M, n.default.fn[T].noConflict = function() {
        return n.default.fn[T] = j, M._jQueryInterface;
      };
      var q = "DirectChat", O = "lte.directchat", N = n.default.fn[q], P = function() {
        function e2(e3) {
          this._element = e3;
        }
        return e2.prototype.toggle = function() {
          n.default(this._element).parents(".direct-chat").first().toggleClass("direct-chat-contacts-open"), n.default(this._element).trigger(n.default.Event("toggled.lte.directchat"));
        }, e2._jQueryInterface = function(t2) {
          return this.each(function() {
            var a2 = n.default(this).data(O);
            a2 || (a2 = new e2(n.default(this)), n.default(this).data(O, a2)), a2[t2]();
          });
        }, e2;
      }();
      n.default(document).on("click", '[data-widget="chat-pane-toggle"]', function(e2) {
        e2 && e2.preventDefault(), P._jQueryInterface.call(n.default(this), "toggle");
      }), n.default.fn[q] = P._jQueryInterface, n.default.fn[q].Constructor = P, n.default.fn[q].noConflict = function() {
        return n.default.fn[q] = N, P._jQueryInterface;
      };
      var U = "Dropdown", B = "lte.dropdown", $ = n.default.fn[U], J = ".dropdown-menu", W = {}, V = function() {
        function e2(e3, t3) {
          this._config = t3, this._element = e3;
        }
        var t2 = e2.prototype;
        return t2.toggleSubmenu = function() {
          this._element.siblings().show().toggleClass("show"), this._element.next().hasClass("show") || this._element.parents(J).first().find(".show").removeClass("show").hide(), this._element.parents("li.nav-item.dropdown.show").on("hidden.bs.dropdown", function() {
            n.default(".dropdown-submenu .show").removeClass("show").hide();
          });
        }, t2.fixPosition = function() {
          var e3 = n.default(".dropdown-menu.show");
          if (0 !== e3.length) {
            e3.hasClass("dropdown-menu-right") ? e3.css({ left: "inherit", right: 0 }) : e3.css({ left: 0, right: "inherit" });
            var t3 = e3.offset(), a2 = e3.width(), i2 = n.default(window).width() - t3.left;
            t3.left < 0 ? e3.css({ left: "inherit", right: t3.left - 5 }) : i2 < a2 && e3.css({ left: "inherit", right: 0 });
          }
        }, e2._jQueryInterface = function(t3) {
          return this.each(function() {
            var a2 = n.default(this).data(B), i2 = n.default.extend({}, W, n.default(this).data());
            a2 || (a2 = new e2(n.default(this), i2), n.default(this).data(B, a2)), "toggleSubmenu" !== t3 && "fixPosition" !== t3 || a2[t3]();
          });
        }, e2;
      }();
      n.default('.dropdown-menu [data-toggle="dropdown"]').on("click", function(e2) {
        e2.preventDefault(), e2.stopPropagation(), V._jQueryInterface.call(n.default(this), "toggleSubmenu");
      }), n.default('.navbar [data-toggle="dropdown"]').on("click", function(e2) {
        e2.preventDefault(), n.default(e2.target).parent().hasClass("dropdown-submenu") || setTimeout(function() {
          V._jQueryInterface.call(n.default(this), "fixPosition");
        }, 1);
      }), n.default.fn[U] = V._jQueryInterface, n.default.fn[U].Constructor = V, n.default.fn[U].noConflict = function() {
        return n.default.fn[U] = $, V._jQueryInterface;
      };
      var G = "ExpandableTable", K = "lte.expandableTable", X = n.default.fn[G], Y = ".expandable-body", Z = '[data-widget="expandable-table"]', ee = "aria-expanded", te = function() {
        function e2(e3, t3) {
          this._options = t3, this._element = e3;
        }
        var t2 = e2.prototype;
        return t2.init = function() {
          n.default(Z).each(function(e3, t3) {
            var a2 = n.default(t3).attr(ee), i2 = n.default(t3).next(Y).children().first().children();
            "true" === a2 ? i2.show() : "false" === a2 && (i2.hide(), i2.parent().parent().addClass("d-none"));
          });
        }, t2.toggleRow = function() {
          var e3 = this._element;
          "TR" !== e3[0].nodeName && "TR" !== (e3 = e3.parent())[0].nodeName && (e3 = e3.parent());
          var t3 = e3.attr(ee), a2 = e3.next(Y).children().first().children();
          a2.stop(), "true" === t3 ? (a2.slideUp(500, function() {
            e3.next(Y).addClass("d-none");
          }), e3.attr(ee, "false"), e3.trigger(n.default.Event("collapsed.lte.expandableTable"))) : "false" === t3 && (e3.next(Y).removeClass("d-none"), a2.slideDown(500), e3.attr(ee, "true"), e3.trigger(n.default.Event("expanded.lte.expandableTable")));
        }, e2._jQueryInterface = function(t3) {
          return this.each(function() {
            var a2 = n.default(this).data(K);
            a2 || (a2 = new e2(n.default(this)), n.default(this).data(K, a2)), "string" == typeof t3 && /init|toggleRow/.test(t3) && a2[t3]();
          });
        }, e2;
      }();
      n.default(".expandable-table").ready(function() {
        te._jQueryInterface.call(n.default(this), "init");
      }), n.default(document).on("click", Z, function() {
        te._jQueryInterface.call(n.default(this), "toggleRow");
      }), n.default.fn[G] = te._jQueryInterface, n.default.fn[G].Constructor = te, n.default.fn[G].noConflict = function() {
        return n.default.fn[G] = X, te._jQueryInterface;
      };
      var ae = "Fullscreen", ne = "lte.fullscreen", ie = n.default.fn[ae], oe = '[data-widget="fullscreen"]', le = oe + " i", se = { minimizeIcon: "fa-compress-arrows-alt", maximizeIcon: "fa-expand-arrows-alt" }, re = function() {
        function e2(e3, t3) {
          this.element = e3, this.options = n.default.extend({}, se, t3);
        }
        var t2 = e2.prototype;
        return t2.toggle = function() {
          document.fullscreenElement || document.mozFullScreenElement || document.webkitFullscreenElement || document.msFullscreenElement ? this.windowed() : this.fullscreen();
        }, t2.toggleIcon = function() {
          document.fullscreenElement || document.mozFullScreenElement || document.webkitFullscreenElement || document.msFullscreenElement ? n.default(le).removeClass(this.options.maximizeIcon).addClass(this.options.minimizeIcon) : n.default(le).removeClass(this.options.minimizeIcon).addClass(this.options.maximizeIcon);
        }, t2.fullscreen = function() {
          document.documentElement.requestFullscreen ? document.documentElement.requestFullscreen() : document.documentElement.webkitRequestFullscreen ? document.documentElement.webkitRequestFullscreen() : document.documentElement.msRequestFullscreen && document.documentElement.msRequestFullscreen();
        }, t2.windowed = function() {
          document.exitFullscreen ? document.exitFullscreen() : document.webkitExitFullscreen ? document.webkitExitFullscreen() : document.msExitFullscreen && document.msExitFullscreen();
        }, e2._jQueryInterface = function(t3) {
          var a2 = n.default(this).data(ne);
          a2 || (a2 = n.default(this).data());
          var i2 = n.default.extend({}, se, "object" == typeof t3 ? t3 : a2), o2 = new e2(n.default(this), i2);
          n.default(this).data(ne, "object" == typeof t3 ? t3 : a2), "string" == typeof t3 && /toggle|toggleIcon|fullscreen|windowed/.test(t3) ? o2[t3]() : o2.init();
        }, e2;
      }();
      n.default(document).on("click", oe, function() {
        re._jQueryInterface.call(n.default(this), "toggle");
      }), n.default(document).on("webkitfullscreenchange mozfullscreenchange fullscreenchange MSFullscreenChange", function() {
        re._jQueryInterface.call(n.default(oe), "toggleIcon");
      }), n.default.fn[ae] = re._jQueryInterface, n.default.fn[ae].Constructor = re, n.default.fn[ae].noConflict = function() {
        return n.default.fn[ae] = ie, re._jQueryInterface;
      };
      var de = "lte.iframe", fe = n.default.fn.IFrame, ue = '[data-widget="iframe"]', ce = '[data-widget="iframe-fullscreen"]', he = ".content-wrapper", ge = ".content-wrapper iframe", pe = ".content-wrapper.iframe-mode .nav", me = ".content-wrapper.iframe-mode .navbar-nav", ve = me + " .nav-item", _e = me + " .nav-link", be = ".content-wrapper.iframe-mode .tab-content", ye = be + " .tab-empty", Ce = be + " .tab-loading", we = be + " .tab-pane", xe = ".main-sidebar .nav-item > a.nav-link", Ie = ".main-header .nav-item a.nav-link", Te = ".main-header a.dropdown-item", Se = "iframe-mode", je = "iframe-mode-fullscreen", ke = { onTabClick: function(e2) {
        return e2;
      }, onTabChanged: function(e2) {
        return e2;
      }, onTabCreated: function(e2) {
        return e2;
      }, autoIframeMode: true, autoItemActive: true, autoShowNewTab: true, autoDarkMode: false, allowDuplicates: false, allowReload: true, loadingScreen: true, useNavbarItems: true, scrollOffset: 40, scrollBehaviorSwap: false, iconMaximize: "fa-expand", iconMinimize: "fa-compress" }, Qe = function() {
        function e2(e3, t3) {
          this._config = t3, this._element = e3, this._init();
        }
        var t2 = e2.prototype;
        return t2.onTabClick = function(e3) {
          this._config.onTabClick(e3);
        }, t2.onTabChanged = function(e3) {
          this._config.onTabChanged(e3);
        }, t2.onTabCreated = function(e3) {
          this._config.onTabCreated(e3);
        }, t2.createTab = function(e3, t3, a2, i2) {
          var o2 = this, l2 = "panel-" + a2, s2 = "tab-" + a2;
          this._config.allowDuplicates && (l2 += "-" + Math.floor(1e3 * Math.random()), s2 += "-" + Math.floor(1e3 * Math.random()));
          var r2 = '<li class="nav-item" role="presentation"><a href="#" class="btn-iframe-close" data-widget="iframe-close" data-type="only-this"><i class="fas fa-times"></i></a><a class="nav-link" data-toggle="row" id="' + s2 + '" href="#' + l2 + '" role="tab" aria-controls="' + l2 + '" aria-selected="false">' + e3 + "</a></li>";
          n.default(me).append(unescape(escape(r2)));
          var d2 = '<div class="tab-pane fade" id="' + l2 + '" role="tabpanel" aria-labelledby="' + s2 + '"><iframe src="' + t3 + '"></iframe></div>';
          if (n.default(be).append(unescape(escape(d2))), i2) if (this._config.loadingScreen) {
            var f2 = n.default(Ce);
            f2.fadeIn(), n.default(l2 + " iframe").ready(function() {
              "number" == typeof o2._config.loadingScreen ? (o2.switchTab("#" + s2), setTimeout(function() {
                f2.fadeOut();
              }, o2._config.loadingScreen)) : (o2.switchTab("#" + s2), f2.fadeOut());
            });
          } else this.switchTab("#" + s2);
          this.onTabCreated(n.default("#" + s2));
        }, t2.openTabSidebar = function(e3, t3) {
          void 0 === t3 && (t3 = this._config.autoShowNewTab);
          var a2 = n.default(e3).clone();
          void 0 === a2.attr("href") && (a2 = n.default(e3).parent("a").clone()), a2.find(".right, .search-path").remove();
          var i2 = a2.find("p").text();
          "" === i2 && (i2 = a2.text());
          var o2 = a2.attr("href");
          if ("#" !== o2 && "" !== o2 && void 0 !== o2) {
            var l2 = unescape(o2).replace("./", "").replace(/["#&'./:=?[\]]/gi, "-").replace(/(--)/gi, ""), s2 = "tab-" + l2;
            if (!this._config.allowDuplicates && n.default("#" + s2).length > 0) return this.switchTab("#" + s2, this._config.allowReload);
            (!this._config.allowDuplicates && 0 === n.default("#" + s2).length || this._config.allowDuplicates) && this.createTab(i2, o2, l2, t3);
          }
        }, t2.switchTab = function(e3, t3) {
          var a2 = this;
          void 0 === t3 && (t3 = false);
          var i2 = n.default(e3), o2 = i2.attr("href");
          if (n.default(ye).hide(), t3) {
            var l2 = n.default(Ce);
            this._config.loadingScreen ? l2.show(0, function() {
              n.default(o2 + " iframe").attr("src", n.default(o2 + " iframe").attr("src")).ready(function() {
                a2._config.loadingScreen && ("number" == typeof a2._config.loadingScreen ? setTimeout(function() {
                  l2.fadeOut();
                }, a2._config.loadingScreen) : l2.fadeOut());
              });
            }) : n.default(o2 + " iframe").attr("src", n.default(o2 + " iframe").attr("src"));
          }
          n.default(me + " .active").tab("dispose").removeClass("active"), this._fixHeight(), i2.tab("show"), i2.parents("li").addClass("active"), this.onTabChanged(i2), this._config.autoItemActive && this._setItemActive(n.default(o2 + " iframe").attr("src"));
        }, t2.removeActiveTab = function(e3, t3) {
          if ("all" == e3) n.default(ve).remove(), n.default(we).remove(), n.default(ye).show();
          else if ("all-other" == e3) n.default(ve + ":not(.active)").remove(), n.default(we + ":not(.active)").remove();
          else if ("only-this" == e3) {
            var a2 = n.default(t3), i2 = a2.parent(".nav-item"), o2 = i2.parent(), l2 = i2.index(), s2 = a2.siblings(".nav-link").attr("aria-controls");
            if (i2.remove(), n.default("#" + s2).remove(), n.default(be).children().length == n.default(ye + ", " + Ce).length) n.default(ye).show();
            else {
              var r2 = l2 - 1;
              this.switchTab(o2.children().eq(r2).find("a.nav-link"));
            }
          } else {
            var d2 = n.default(ve + ".active"), f2 = d2.parent(), u2 = d2.index();
            if (d2.remove(), n.default(we + ".active").remove(), n.default(be).children().length == n.default(ye + ", " + Ce).length) n.default(ye).show();
            else {
              var c2 = u2 - 1;
              this.switchTab(f2.children().eq(c2).find("a.nav-link"));
            }
          }
        }, t2.toggleFullscreen = function() {
          n.default("body").hasClass(je) ? (n.default(ce + " i").removeClass(this._config.iconMinimize).addClass(this._config.iconMaximize), n.default("body").removeClass(je), n.default(ye + ", " + Ce).height("100%"), n.default(he).height("100%"), n.default(ge).height("100%")) : (n.default(ce + " i").removeClass(this._config.iconMaximize).addClass(this._config.iconMinimize), n.default("body").addClass(je)), n.default(window).trigger("resize"), this._fixHeight(true);
        }, t2._init = function() {
          var e3 = n.default(be).children().length > 2;
          if (this._setupListeners(), this._fixHeight(true), e3) {
            var t3 = n.default("" + we).first();
            console.log(t3);
            var a2 = "#tab-" + t3.attr("id").replace("panel-", "");
            this.switchTab(a2, true);
          }
        }, t2._initFrameElement = function() {
          if (window.frameElement && this._config.autoIframeMode) {
            var e3 = n.default("body");
            e3.addClass(Se), this._config.autoDarkMode && e3.addClass("dark-mode");
          }
        }, t2._navScroll = function(e3) {
          var t3 = n.default(me).scrollLeft();
          n.default(me).animate({ scrollLeft: t3 + e3 }, 250, "linear");
        }, t2._setupListeners = function() {
          var e3 = this;
          n.default(window).on("resize", function() {
            setTimeout(function() {
              e3._fixHeight();
            }, 1);
          }), n.default(he).hasClass(Se) && (n.default(document).on("click", xe + ", .sidebar-search-results .list-group-item", function(t4) {
            t4.preventDefault(), e3.openTabSidebar(t4.target);
          }), this._config.useNavbarItems && n.default(document).on("click", Ie + ", " + Te, function(t4) {
            t4.preventDefault(), e3.openTabSidebar(t4.target);
          })), n.default(document).on("click", _e, function(t4) {
            t4.preventDefault(), e3.onTabClick(t4.target), e3.switchTab(t4.target);
          }), n.default(document).on("click", _e, function(t4) {
            t4.preventDefault(), e3.onTabClick(t4.target), e3.switchTab(t4.target);
          }), n.default(document).on("click", '[data-widget="iframe-close"]', function(t4) {
            t4.preventDefault();
            var a3 = t4.target;
            "I" == a3.nodeName && (a3 = t4.target.offsetParent), e3.removeActiveTab(a3.attributes["data-type"] ? a3.attributes["data-type"].nodeValue : null, a3);
          }), n.default(document).on("click", ce, function(t4) {
            t4.preventDefault(), e3.toggleFullscreen();
          });
          var t3 = false, a2 = null;
          n.default(document).on("mousedown", '[data-widget="iframe-scrollleft"]', function(n2) {
            n2.preventDefault(), clearInterval(a2);
            var i2 = e3._config.scrollOffset;
            e3._config.scrollBehaviorSwap || (i2 = -i2), t3 = true, e3._navScroll(i2), a2 = setInterval(function() {
              e3._navScroll(i2);
            }, 250);
          }), n.default(document).on("mousedown", '[data-widget="iframe-scrollright"]', function(n2) {
            n2.preventDefault(), clearInterval(a2);
            var i2 = e3._config.scrollOffset;
            e3._config.scrollBehaviorSwap && (i2 = -i2), t3 = true, e3._navScroll(i2), a2 = setInterval(function() {
              e3._navScroll(i2);
            }, 250);
          }), n.default(document).on("mouseup", function() {
            t3 && (t3 = false, clearInterval(a2), a2 = null);
          });
        }, t2._setItemActive = function(e3) {
          n.default(xe + ", " + Te).removeClass("active"), n.default(Ie).parent().removeClass("active");
          var t3 = n.default(Ie + '[href$="' + e3 + '"]'), a2 = n.default('.main-header a.dropdown-item[href$="' + e3 + '"]'), i2 = n.default(xe + '[href$="' + e3 + '"]');
          t3.each(function(e4, t4) {
            n.default(t4).parent().addClass("active");
          }), a2.each(function(e4, t4) {
            n.default(t4).addClass("active");
          }), i2.each(function(e4, t4) {
            n.default(t4).addClass("active"), n.default(t4).parents(".nav-treeview").prevAll(".nav-link").addClass("active");
          });
        }, t2._fixHeight = function(e3) {
          if (void 0 === e3 && (e3 = false), n.default("body").hasClass(je)) {
            var t3 = n.default(window).height(), a2 = n.default(pe).outerHeight();
            n.default(ye + ", " + Ce + ", " + ge).height(t3 - a2), n.default(he).height(t3);
          } else {
            var i2 = parseFloat(n.default(he).css("height")), o2 = n.default(pe).outerHeight();
            1 == e3 ? setTimeout(function() {
              n.default(ye + ", " + Ce).height(i2 - o2);
            }, 50) : n.default(ge).height(i2 - o2);
          }
        }, e2._jQueryInterface = function(t3) {
          if (n.default(ue).length > 0) {
            var a2 = n.default(this).data(de);
            a2 || (a2 = n.default(this).data());
            var i2 = n.default.extend({}, ke, "object" == typeof t3 ? t3 : a2);
            localStorage.setItem("AdminLTE:IFrame:Options", JSON.stringify(i2));
            var o2 = new e2(n.default(this), i2);
            n.default(this).data(de, "object" == typeof t3 ? t3 : a2), "string" == typeof t3 && /createTab|openTabSidebar|switchTab|removeActiveTab/.test(t3) && o2[t3]();
          } else new e2(n.default(this), JSON.parse(localStorage.getItem("AdminLTE:IFrame:Options")))._initFrameElement();
        }, e2;
      }();
      n.default(window).on("load", function() {
        Qe._jQueryInterface.call(n.default(ue));
      }), n.default.fn.IFrame = Qe._jQueryInterface, n.default.fn.IFrame.Constructor = Qe, n.default.fn.IFrame.noConflict = function() {
        return n.default.fn.IFrame = fe, Qe._jQueryInterface;
      };
      var He = "lte.layout", ze = n.default.fn.Layout, Fe = ".main-header", Ee = ".main-sidebar", Le = ".main-sidebar .sidebar", De = ".main-footer", Re = "sidebar-focused", Ae = { scrollbarTheme: "os-theme-light", scrollbarAutoHide: "l", panelAutoHeight: true, panelAutoHeightMode: "min-height", preloadDuration: 200, loginRegisterAutoHeight: true }, Me = function() {
        function e2(e3, t3) {
          this._config = t3, this._element = e3;
        }
        var t2 = e2.prototype;
        return t2.fixLayoutHeight = function(e3) {
          void 0 === e3 && (e3 = null);
          var t3 = n.default("body"), a2 = 0;
          (t3.hasClass("control-sidebar-slide-open") || t3.hasClass("control-sidebar-open") || "control_sidebar" === e3) && (a2 = n.default(".control-sidebar-content").outerHeight());
          var i2 = { window: n.default(window).height(), header: n.default(Fe).length > 0 ? n.default(Fe).outerHeight() : 0, footer: n.default(De).length > 0 ? n.default(De).outerHeight() : 0, sidebar: n.default(Le).length > 0 ? n.default(Le).height() : 0, controlSidebar: a2 }, o2 = this._max(i2), l2 = this._config.panelAutoHeight;
          true === l2 && (l2 = 0);
          var s2 = n.default(".content-wrapper");
          false !== l2 && (o2 === i2.controlSidebar ? s2.css(this._config.panelAutoHeightMode, o2 + l2) : o2 === i2.window ? s2.css(this._config.panelAutoHeightMode, o2 + l2 - i2.header - i2.footer) : s2.css(this._config.panelAutoHeightMode, o2 + l2 - i2.header), this._isFooterFixed() && s2.css(this._config.panelAutoHeightMode, parseFloat(s2.css(this._config.panelAutoHeightMode)) + i2.footer)), t3.hasClass("layout-fixed") && ("undefined" != typeof n.default.fn.overlayScrollbars ? n.default(Le).overlayScrollbars({ className: this._config.scrollbarTheme, sizeAutoCapable: true, scrollbars: { autoHide: this._config.scrollbarAutoHide, clickScrolling: true } }) : n.default(Le).css("overflow-y", "auto"));
        }, t2.fixLoginRegisterHeight = function() {
          var e3 = n.default("body"), t3 = n.default(".login-box, .register-box");
          if (e3.hasClass("iframe-mode")) e3.css("height", "100%"), n.default(".wrapper").css("height", "100%"), n.default("html").css("height", "100%");
          else if (0 === t3.length) e3.css("height", "auto"), n.default("html").css("height", "auto");
          else {
            var a2 = t3.height();
            e3.css(this._config.panelAutoHeightMode) !== a2 && e3.css(this._config.panelAutoHeightMode, a2);
          }
        }, t2._init = function() {
          var e3 = this;
          this.fixLayoutHeight(), true === this._config.loginRegisterAutoHeight ? this.fixLoginRegisterHeight() : this._config.loginRegisterAutoHeight === parseInt(this._config.loginRegisterAutoHeight, 10) && setInterval(this.fixLoginRegisterHeight, this._config.loginRegisterAutoHeight), n.default(Le).on("collapsed.lte.treeview expanded.lte.treeview", function() {
            e3.fixLayoutHeight();
          }), n.default(Ee).on("mouseenter mouseleave", function() {
            n.default("body").hasClass("sidebar-collapse") && e3.fixLayoutHeight();
          }), n.default('[data-widget="pushmenu"]').on("collapsed.lte.pushmenu shown.lte.pushmenu", function() {
            setTimeout(function() {
              e3.fixLayoutHeight();
            }, 300);
          }), n.default('[data-widget="control-sidebar"]').on("collapsed.lte.controlsidebar", function() {
            e3.fixLayoutHeight();
          }).on("expanded.lte.controlsidebar", function() {
            e3.fixLayoutHeight("control_sidebar");
          }), n.default(window).resize(function() {
            e3.fixLayoutHeight();
          }), setTimeout(function() {
            n.default("body.hold-transition").removeClass("hold-transition");
          }, 50), setTimeout(function() {
            var e4 = n.default(".preloader");
            e4 && (e4.css("height", 0), setTimeout(function() {
              e4.children().hide();
            }, 200));
          }, this._config.preloadDuration);
        }, t2._max = function(e3) {
          var t3 = 0;
          return Object.keys(e3).forEach(function(a2) {
            e3[a2] > t3 && (t3 = e3[a2]);
          }), t3;
        }, t2._isFooterFixed = function() {
          return "fixed" === n.default(De).css("position");
        }, e2._jQueryInterface = function(t3) {
          return void 0 === t3 && (t3 = ""), this.each(function() {
            var a2 = n.default(this).data(He), i2 = n.default.extend({}, Ae, n.default(this).data());
            a2 || (a2 = new e2(n.default(this), i2), n.default(this).data(He, a2)), "init" === t3 || "" === t3 ? a2._init() : "fixLayoutHeight" !== t3 && "fixLoginRegisterHeight" !== t3 || a2[t3]();
          });
        }, e2;
      }();
      n.default(window).on("load", function() {
        Me._jQueryInterface.call(n.default("body"));
      }), n.default(Le + " a").on("focusin", function() {
        n.default(Ee).addClass(Re);
      }).on("focusout", function() {
        n.default(Ee).removeClass(Re);
      }), n.default.fn.Layout = Me._jQueryInterface, n.default.fn.Layout.Constructor = Me, n.default.fn.Layout.noConflict = function() {
        return n.default.fn.Layout = ze, Me._jQueryInterface;
      };
      var qe = "PushMenu", Oe = "lte.pushmenu", Ne = "." + Oe, Pe = n.default.fn[qe], Ue = '[data-widget="pushmenu"]', Be = "body", $e = "sidebar-collapse", Je = "sidebar-open", We = "sidebar-is-opening", Ve = "sidebar-closed", Ge = { autoCollapseSize: 992, enableRemember: false, noTransitionAfterReload: true, animationSpeed: 300 }, Ke = function() {
        function e2(e3, t3) {
          this._element = e3, this._options = n.default.extend({}, Ge, t3), 0 === n.default("#sidebar-overlay").length && this._addOverlay(), this._init();
        }
        var t2 = e2.prototype;
        return t2.expand = function() {
          var e3 = n.default(Be);
          this._options.autoCollapseSize && n.default(window).width() <= this._options.autoCollapseSize && e3.addClass(Je), e3.addClass(We).removeClass("sidebar-collapse sidebar-closed").delay(50).queue(function() {
            e3.removeClass(We), n.default(this).dequeue();
          }), this._options.enableRemember && localStorage.setItem("remember" + Ne, Je), n.default(this._element).trigger(n.default.Event("shown.lte.pushmenu"));
        }, t2.collapse = function() {
          var e3 = this, t3 = n.default(Be);
          this._options.autoCollapseSize && n.default(window).width() <= this._options.autoCollapseSize && t3.removeClass(Je).addClass(Ve), t3.addClass($e), this._options.enableRemember && localStorage.setItem("remember" + Ne, $e), n.default(this._element).trigger(n.default.Event("collapsed.lte.pushmenu")), setTimeout(function() {
            n.default(e3._element).trigger(n.default.Event("collapsed-done.lte.pushmenu"));
          }, this._options.animationSpeed);
        }, t2.toggle = function() {
          n.default(Be).hasClass($e) ? this.expand() : this.collapse();
        }, t2.autoCollapse = function(e3) {
          if (void 0 === e3 && (e3 = false), this._options.autoCollapseSize) {
            var t3 = n.default(Be);
            n.default(window).width() <= this._options.autoCollapseSize ? t3.hasClass(Je) || this.collapse() : true === e3 && (t3.hasClass(Je) ? t3.removeClass(Je) : t3.hasClass(Ve) && this.expand());
          }
        }, t2.remember = function() {
          if (this._options.enableRemember) {
            var e3 = n.default("body");
            localStorage.getItem("remember" + Ne) === $e ? this._options.noTransitionAfterReload ? e3.addClass("hold-transition").addClass($e).delay(50).queue(function() {
              n.default(this).removeClass("hold-transition"), n.default(this).dequeue();
            }) : e3.addClass($e) : this._options.noTransitionAfterReload ? e3.addClass("hold-transition").removeClass($e).delay(50).queue(function() {
              n.default(this).removeClass("hold-transition"), n.default(this).dequeue();
            }) : e3.removeClass($e);
          }
        }, t2._init = function() {
          var e3 = this;
          this.remember(), this.autoCollapse(), n.default(window).resize(function() {
            e3.autoCollapse(true);
          });
        }, t2._addOverlay = function() {
          var e3 = this, t3 = n.default("<div />", { id: "sidebar-overlay" });
          t3.on("click", function() {
            e3.collapse();
          }), n.default(".wrapper").append(t3);
        }, e2._jQueryInterface = function(t3) {
          return this.each(function() {
            var a2 = n.default(this).data(Oe), i2 = n.default.extend({}, Ge, n.default(this).data());
            a2 || (a2 = new e2(this, i2), n.default(this).data(Oe, a2)), "string" == typeof t3 && /collapse|expand|toggle/.test(t3) && a2[t3]();
          });
        }, e2;
      }();
      n.default(document).on("click", Ue, function(e2) {
        e2.preventDefault();
        var t2 = e2.currentTarget;
        "pushmenu" !== n.default(t2).data("widget") && (t2 = n.default(t2).closest(Ue)), Ke._jQueryInterface.call(n.default(t2), "toggle");
      }), n.default(window).on("load", function() {
        Ke._jQueryInterface.call(n.default(Ue));
      }), n.default.fn[qe] = Ke._jQueryInterface, n.default.fn[qe].Constructor = Ke, n.default.fn[qe].noConflict = function() {
        return n.default.fn[qe] = Pe, Ke._jQueryInterface;
      };
      var Xe = "SidebarSearch", Ye = "lte.sidebar-search", Ze = n.default.fn[Xe], et = "sidebar-search-open", tt = "fa-search", at = "fa-times", nt = "sidebar-search-results", it = "list-group", ot = '[data-widget="sidebar-search"]', lt = ot + " .form-control", st = ot + " .btn", rt = st + " i", dt = ".sidebar-search-results", ft = ".sidebar-search-results .list-group", ut = { arrowSign: "->", minLength: 3, maxResults: 7, highlightName: true, highlightPath: false, highlightClass: "text-light", notFoundText: "No element found!" }, ct = [], ht = function() {
        function e2(e3, t2) {
          this.element = e3, this.options = n.default.extend({}, ut, t2), this.items = [];
        }
        var a2 = e2.prototype;
        return a2.init = function() {
          var e3 = this;
          0 !== n.default(ot).length && (0 === n.default(ot).next(dt).length && n.default(ot).after(n.default("<div />", { class: nt })), 0 === n.default(dt).children(".list-group").length && n.default(dt).append(n.default("<div />", { class: it })), this._addNotFound(), n.default(".main-sidebar .nav-sidebar").children().each(function(t2, a3) {
            e3._parseItem(a3);
          }));
        }, a2.search = function() {
          var e3 = this, t2 = n.default(lt).val().toLowerCase();
          if (t2.length < this.options.minLength) return n.default(ft).empty(), this._addNotFound(), void this.close();
          var a3 = ct.filter(function(e4) {
            return e4.name.toLowerCase().includes(t2);
          }), i2 = n.default(a3.slice(0, this.options.maxResults));
          n.default(ft).empty(), 0 === i2.length ? this._addNotFound() : i2.each(function(t3, a4) {
            n.default(ft).append(e3._renderItem(escape(a4.name), encodeURI(a4.link), a4.path));
          }), this.open();
        }, a2.open = function() {
          n.default(ot).parent().addClass(et), n.default(rt).removeClass(tt).addClass(at);
        }, a2.close = function() {
          n.default(ot).parent().removeClass(et), n.default(rt).removeClass(at).addClass(tt);
        }, a2.toggle = function() {
          n.default(ot).parent().hasClass(et) ? this.close() : this.open();
        }, a2._parseItem = function(e3, t2) {
          var a3 = this;
          if (void 0 === t2 && (t2 = []), !n.default(e3).hasClass("nav-header")) {
            var i2 = {}, o2 = n.default(e3).clone().find("> .nav-link"), l2 = n.default(e3).clone().find("> .nav-treeview"), s2 = o2.attr("href"), r2 = o2.find("p").children().remove().end().text();
            if (i2.name = this._trimText(r2), i2.link = s2, i2.path = t2, 0 === l2.length) ct.push(i2);
            else {
              var d2 = i2.path.concat([i2.name]);
              l2.children().each(function(e4, t3) {
                a3._parseItem(t3, d2);
              });
            }
          }
        }, a2._trimText = function(e3) {
          return t.trim(e3.replace(/(\r\n|\n|\r)/gm, " "));
        }, a2._renderItem = function(e3, t2, a3) {
          var i2 = this;
          if (a3 = a3.join(" " + this.options.arrowSign + " "), e3 = unescape(e3), t2 = decodeURI(t2), this.options.highlightName || this.options.highlightPath) {
            var o2 = n.default(lt).val().toLowerCase(), l2 = new RegExp(o2, "gi");
            this.options.highlightName && (e3 = e3.replace(l2, function(e4) {
              return '<strong class="' + i2.options.highlightClass + '">' + e4 + "</strong>";
            })), this.options.highlightPath && (a3 = a3.replace(l2, function(e4) {
              return '<strong class="' + i2.options.highlightClass + '">' + e4 + "</strong>";
            }));
          }
          var s2 = n.default("<a/>", { href: decodeURIComponent(t2), class: "list-group-item" }), r2 = n.default("<div/>", { class: "search-title" }).html(e3), d2 = n.default("<div/>", { class: "search-path" }).html(a3);
          return s2.append(r2).append(d2), s2;
        }, a2._addNotFound = function() {
          n.default(ft).append(this._renderItem(this.options.notFoundText, "#", []));
        }, e2._jQueryInterface = function(t2) {
          var a3 = n.default(this).data(Ye);
          a3 || (a3 = n.default(this).data());
          var i2 = n.default.extend({}, ut, "object" == typeof t2 ? t2 : a3), o2 = new e2(n.default(this), i2);
          n.default(this).data(Ye, "object" == typeof t2 ? t2 : a3), "string" == typeof t2 && /init|toggle|close|open|search/.test(t2) ? o2[t2]() : o2.init();
        }, e2;
      }();
      n.default(document).on("click", st, function(e2) {
        e2.preventDefault(), ht._jQueryInterface.call(n.default(ot), "toggle");
      }), n.default(document).on("keyup", lt, function(e2) {
        return 38 == e2.keyCode ? (e2.preventDefault(), void n.default(ft).children().last().focus()) : 40 == e2.keyCode ? (e2.preventDefault(), void n.default(ft).children().first().focus()) : void setTimeout(function() {
          ht._jQueryInterface.call(n.default(ot), "search");
        }, 100);
      }), n.default(document).on("keydown", ft, function(e2) {
        var t2 = n.default(":focus");
        38 == e2.keyCode && (e2.preventDefault(), t2.is(":first-child") ? t2.siblings().last().focus() : t2.prev().focus()), 40 == e2.keyCode && (e2.preventDefault(), t2.is(":last-child") ? t2.siblings().first().focus() : t2.next().focus());
      }), n.default(window).on("load", function() {
        ht._jQueryInterface.call(n.default(ot), "init");
      }), n.default.fn[Xe] = ht._jQueryInterface, n.default.fn[Xe].Constructor = ht, n.default.fn[Xe].noConflict = function() {
        return n.default.fn[Xe] = Ze, ht._jQueryInterface;
      };
      var gt = "NavbarSearch", pt = "lte.navbar-search", mt = n.default.fn[gt], vt = '[data-widget="navbar-search"]', _t = ".form-control", bt = "navbar-search-open", yt = { resetOnClose: true, target: ".navbar-search-block" }, Ct = function() {
        function e2(e3, t3) {
          this._element = e3, this._config = n.default.extend({}, yt, t3);
        }
        var t2 = e2.prototype;
        return t2.open = function() {
          n.default(this._config.target).css("display", "flex").hide().fadeIn().addClass(bt), n.default(this._config.target + " " + _t).focus();
        }, t2.close = function() {
          n.default(this._config.target).fadeOut().removeClass(bt), this._config.resetOnClose && n.default(this._config.target + " " + _t).val("");
        }, t2.toggle = function() {
          n.default(this._config.target).hasClass(bt) ? this.close() : this.open();
        }, e2._jQueryInterface = function(t3) {
          return this.each(function() {
            var a2 = n.default(this).data(pt), i2 = n.default.extend({}, yt, n.default(this).data());
            if (a2 || (a2 = new e2(this, i2), n.default(this).data(pt, a2)), !/toggle|close|open/.test(t3)) throw new Error("Undefined method " + t3);
            a2[t3]();
          });
        }, e2;
      }();
      n.default(document).on("click", vt, function(e2) {
        e2.preventDefault();
        var t2 = n.default(e2.currentTarget);
        "navbar-search" !== t2.data("widget") && (t2 = t2.closest(vt)), Ct._jQueryInterface.call(t2, "toggle");
      }), n.default.fn[gt] = Ct._jQueryInterface, n.default.fn[gt].Constructor = Ct, n.default.fn[gt].noConflict = function() {
        return n.default.fn[gt] = mt, Ct._jQueryInterface;
      };
      var wt = n.default.fn.Toasts, xt = "topRight", It = "topLeft", Tt = "bottomRight", St = "bottomLeft", jt = { position: xt, fixed: true, autohide: false, autoremove: true, delay: 1e3, fade: true, icon: null, image: null, imageAlt: null, imageHeight: "25px", title: null, subtitle: null, close: true, body: null, class: null }, kt = function() {
        function e2(e3, t3) {
          this._config = t3, this._prepareContainer(), n.default("body").trigger(n.default.Event("init.lte.toasts"));
        }
        var t2 = e2.prototype;
        return t2.create = function() {
          var e3 = n.default('<div class="toast" role="alert" aria-live="assertive" aria-atomic="true"/>');
          e3.data("autohide", this._config.autohide), e3.data("animation", this._config.fade), this._config.class && e3.addClass(this._config.class), this._config.delay && 500 != this._config.delay && e3.data("delay", this._config.delay);
          var t3 = n.default('<div class="toast-header">');
          if (null != this._config.image) {
            var a2 = n.default("<img />").addClass("rounded mr-2").attr("src", this._config.image).attr("alt", this._config.imageAlt);
            null != this._config.imageHeight && a2.height(this._config.imageHeight).width("auto"), t3.append(a2);
          }
          if (null != this._config.icon && t3.append(n.default("<i />").addClass("mr-2").addClass(this._config.icon)), null != this._config.title && t3.append(n.default("<strong />").addClass("mr-auto").html(this._config.title)), null != this._config.subtitle && t3.append(n.default("<small />").html(this._config.subtitle)), 1 == this._config.close) {
            var i2 = n.default('<button data-dismiss="toast" />').attr("type", "button").addClass("ml-2 mb-1 close").attr("aria-label", "Close").append('<span aria-hidden="true">&times;</span>');
            null == this._config.title && i2.toggleClass("ml-2 ml-auto"), t3.append(i2);
          }
          e3.append(t3), null != this._config.body && e3.append(n.default('<div class="toast-body" />').html(this._config.body)), n.default(this._getContainerId()).prepend(e3);
          var o2 = n.default("body");
          o2.trigger(n.default.Event("created.lte.toasts")), e3.toast("show"), this._config.autoremove && e3.on("hidden.bs.toast", function() {
            n.default(this).delay(200).remove(), o2.trigger(n.default.Event("removed.lte.toasts"));
          });
        }, t2._getContainerId = function() {
          return this._config.position == xt ? "#toastsContainerTopRight" : this._config.position == It ? "#toastsContainerTopLeft" : this._config.position == Tt ? "#toastsContainerBottomRight" : this._config.position == St ? "#toastsContainerBottomLeft" : void 0;
        }, t2._prepareContainer = function() {
          if (0 === n.default(this._getContainerId()).length) {
            var e3 = n.default("<div />").attr("id", this._getContainerId().replace("#", ""));
            this._config.position == xt ? e3.addClass("toasts-top-right") : this._config.position == It ? e3.addClass("toasts-top-left") : this._config.position == Tt ? e3.addClass("toasts-bottom-right") : this._config.position == St && e3.addClass("toasts-bottom-left"), n.default("body").append(e3);
          }
          this._config.fixed ? n.default(this._getContainerId()).addClass("fixed") : n.default(this._getContainerId()).removeClass("fixed");
        }, e2._jQueryInterface = function(t3, a2) {
          return this.each(function() {
            var i2 = n.default.extend({}, jt, a2), o2 = new e2(n.default(this), i2);
            "create" === t3 && o2[t3]();
          });
        }, e2;
      }();
      n.default.fn.Toasts = kt._jQueryInterface, n.default.fn.Toasts.Constructor = kt, n.default.fn.Toasts.noConflict = function() {
        return n.default.fn.Toasts = wt, kt._jQueryInterface;
      };
      var Qt = "TodoList", Ht = "lte.todolist", zt = n.default.fn[Qt], Ft = "done", Et = { onCheck: function(e2) {
        return e2;
      }, onUnCheck: function(e2) {
        return e2;
      } }, Lt = function() {
        function e2(e3, t3) {
          this._config = t3, this._element = e3, this._init();
        }
        var t2 = e2.prototype;
        return t2.toggle = function(e3) {
          e3.parents("li").toggleClass(Ft), n.default(e3).prop("checked") ? this.check(e3) : this.unCheck(n.default(e3));
        }, t2.check = function(e3) {
          this._config.onCheck.call(e3);
        }, t2.unCheck = function(e3) {
          this._config.onUnCheck.call(e3);
        }, t2._init = function() {
          var e3 = this, t3 = this._element;
          t3.find("input:checkbox:checked").parents("li").toggleClass(Ft), t3.on("change", "input:checkbox", function(t4) {
            e3.toggle(n.default(t4.target));
          });
        }, e2._jQueryInterface = function(t3) {
          return this.each(function() {
            var a2 = n.default(this).data(Ht);
            a2 || (a2 = n.default(this).data());
            var i2 = n.default.extend({}, Et, "object" == typeof t3 ? t3 : a2), o2 = new e2(n.default(this), i2);
            n.default(this).data(Ht, "object" == typeof t3 ? t3 : a2), "init" === t3 && o2[t3]();
          });
        }, e2;
      }();
      n.default(window).on("load", function() {
        Lt._jQueryInterface.call(n.default('[data-widget="todo-list"]'));
      }), n.default.fn[Qt] = Lt._jQueryInterface, n.default.fn[Qt].Constructor = Lt, n.default.fn[Qt].noConflict = function() {
        return n.default.fn[Qt] = zt, Lt._jQueryInterface;
      };
      var Dt = "Treeview", Rt = "lte.treeview", At = n.default.fn[Dt], Mt = ".nav-item", qt = ".nav-treeview", Ot = ".menu-open", Nt = '[data-widget="treeview"]', Pt = "menu-open", Ut = "menu-is-opening", Bt = { trigger: Nt + " .nav-link", animationSpeed: 300, accordion: true, expandSidebar: false, sidebarButtonSelector: '[data-widget="pushmenu"]' }, $t = function() {
        function e2(e3, t3) {
          this._config = t3, this._element = e3;
        }
        var t2 = e2.prototype;
        return t2.init = function() {
          n.default(".nav-item.menu-open .nav-treeview.menu-open").css("display", "block"), this._setupListeners();
        }, t2.expand = function(e3, t3) {
          var a2 = this, i2 = n.default.Event("expanded.lte.treeview");
          if (this._config.accordion) {
            var o2 = t3.siblings(Ot).first(), l2 = o2.find(qt).first();
            this.collapse(l2, o2);
          }
          t3.addClass(Ut), e3.stop().slideDown(this._config.animationSpeed, function() {
            t3.addClass(Pt), n.default(a2._element).trigger(i2);
          }), this._config.expandSidebar && this._expandSidebar();
        }, t2.collapse = function(e3, t3) {
          var a2 = this, i2 = n.default.Event("collapsed.lte.treeview");
          t3.removeClass("menu-is-opening menu-open"), e3.stop().slideUp(this._config.animationSpeed, function() {
            n.default(a2._element).trigger(i2), e3.find(".menu-open > .nav-treeview").slideUp(), e3.find(Ot).removeClass("menu-is-opening menu-open");
          });
        }, t2.toggle = function(e3) {
          var t3 = n.default(e3.currentTarget), a2 = t3.parent(), i2 = a2.find("> .nav-treeview");
          if (i2.is(qt) || (a2.is(Mt) || (i2 = a2.parent().find("> .nav-treeview")), i2.is(qt))) {
            e3.preventDefault();
            var o2 = t3.parents(Mt).first();
            o2.hasClass(Pt) ? this.collapse(n.default(i2), o2) : this.expand(n.default(i2), o2);
          }
        }, t2._setupListeners = function() {
          var e3 = this, t3 = void 0 !== this._element.attr("id") ? "#" + this._element.attr("id") : "";
          n.default(document).on("click", "" + t3 + this._config.trigger, function(t4) {
            e3.toggle(t4);
          });
        }, t2._expandSidebar = function() {
          n.default("body").hasClass("sidebar-collapse") && n.default(this._config.sidebarButtonSelector).PushMenu("expand");
        }, e2._jQueryInterface = function(t3) {
          return this.each(function() {
            var a2 = n.default(this).data(Rt), i2 = n.default.extend({}, Bt, n.default(this).data());
            a2 || (a2 = new e2(n.default(this), i2), n.default(this).data(Rt, a2)), "init" === t3 && a2[t3]();
          });
        }, e2;
      }();
      n.default(window).on("load.lte.treeview", function() {
        n.default(Nt).each(function() {
          $t._jQueryInterface.call(n.default(this), "init");
        });
      }), n.default.fn[Dt] = $t._jQueryInterface, n.default.fn[Dt].Constructor = $t, n.default.fn[Dt].noConflict = function() {
        return n.default.fn[Dt] = At, $t._jQueryInterface;
      }, e.CardRefresh = f, e.CardWidget = I, e.ControlSidebar = M, e.DirectChat = P, e.Dropdown = V, e.ExpandableTable = te, e.Fullscreen = re, e.IFrame = Qe, e.Layout = Me, e.NavbarSearch = Ct, e.PushMenu = Ke, e.SidebarSearch = ht, e.Toasts = kt, e.TodoList = Lt, e.Treeview = $t, Object.defineProperty(e, "__esModule", { value: true });
    });
  }
});
export default require_adminlte_min();
/*! Bundled license information:

admin-lte/dist/js/adminlte.min.js:
  (*!
   * AdminLTE v3.2.0 (https://adminlte.io)
   * Copyright 2014-2022 Colorlib <https://colorlib.com>
   * Licensed under MIT (https://github.com/ColorlibHQ/AdminLTE/blob/master/LICENSE)
   *)
*/
//# sourceMappingURL=admin-lte_dist_js_adminlte__min__js.js.map
