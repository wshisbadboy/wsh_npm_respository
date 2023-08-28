import { openBlock as i, createElementBlock as l, normalizeClass as s, createCommentVNode as a, renderSlot as f } from "vue";
const _ = (t, o) => {
  const e = t.__vccOpts || t;
  for (const [d, u] of o)
    e[d] = u;
  return e;
}, m = {
  name: "WshButton",
  inject: {
    elForm: {
      default: ""
    },
    elFormItem: {
      default: ""
    }
  },
  props: {
    type: {
      type: String,
      default: "default"
    },
    size: String,
    icon: {
      type: String,
      default: ""
    },
    nativeType: {
      type: String,
      default: "button"
    },
    loading: Boolean,
    disabled: Boolean,
    plain: Boolean,
    autofocus: Boolean,
    round: Boolean,
    circle: Boolean
  },
  computed: {
    _elFormItemSize() {
      return (this.elFormItem || {}).elFormItemSize;
    },
    buttonSize() {
      return this.size;
    },
    buttonDisabled() {
      return this.disabled;
    }
  },
  methods: {
    handleClick(t) {
      this.$emit("click", t);
    }
  }
}, b = ["disabled", "autofocus", "type"], h = {
  key: 0,
  class: "wsh-icon-loading"
}, y = { key: 2 };
function g(t, o, e, d, u, n) {
  return i(), l("button", {
    class: s(["wsh-button", [
      e.type ? "wsh-button--" + e.type : "",
      n.buttonSize ? "wsh-button--" + n.buttonSize : "",
      {
        "is-disabled": n.buttonDisabled,
        "is-loading": e.loading,
        "is-plain": e.plain,
        "is-round": e.round,
        "is-circle": e.circle
      }
    ]]),
    onClick: o[0] || (o[0] = (...r) => n.handleClick && n.handleClick(...r)),
    disabled: n.buttonDisabled || e.loading,
    autofocus: e.autofocus,
    type: e.nativeType
  }, [
    e.loading ? (i(), l("i", h)) : a("", !0),
    e.icon && !e.loading ? (i(), l("i", {
      key: 1,
      class: s(e.icon)
    }, null, 2)) : a("", !0),
    t.$slots.default ? (i(), l("span", y, [
      f(t.$slots, "default", {}, void 0, !0)
    ])) : a("", !0)
  ], 10, b);
}
const k = /* @__PURE__ */ _(m, [["render", g], ["__scopeId", "data-v-8180e750"]]), w = [
  k
], c = function(t, o = {}) {
  w.forEach((e) => {
    t.component(e.name, e);
  });
};
typeof window < "u" && window.Vue && c(window.Vue);
const S = {
  install: c
};
export {
  S as default
};
