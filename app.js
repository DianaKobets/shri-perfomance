var App = (() => {
  // app.jsx
  function Header() {
    let [expanded, setExpanded] = React.useState(false);
    let [toggled, setToggled] = React.useState(false);
    const onClick = () => {
      if (!toggled) {
        setToggled(true);
      }
      setExpanded(!expanded);
    };
    return /* @__PURE__ */ React.createElement("header", { className: "header" }, /* @__PURE__ */ React.createElement("a", { href: "/", className: "header__logo", "aria-label": "\u042F\u043D\u0434\u0435\u043A\u0441.\u0414\u043E\u043C" }), /* @__PURE__ */ React.createElement(
      "button",
      {
        className: "header__menu",
        "aria-expanded": expanded ? "true" : "false",
        onClick
      },
      /* @__PURE__ */ React.createElement("span", { className: "header__menu-text a11y-hidden" }, expanded ? "\u0417\u0430\u043A\u0440\u044B\u0442\u044C \u043C\u0435\u043D\u044E" : "\u041E\u0442\u043A\u0440\u044B\u0442\u044C \u043C\u0435\u043D\u044E")
    ), /* @__PURE__ */ React.createElement(
      "ul",
      {
        className: "header__links" + (expanded ? " header__links_opened" : "") + (toggled ? " header__links-toggled" : "")
      },
      /* @__PURE__ */ React.createElement("li", { className: "header__item" }, /* @__PURE__ */ React.createElement(
        "a",
        {
          className: "header__link header__link_current",
          href: "/",
          "aria-current": "page"
        },
        "\u0421\u0432\u043E\u0434\u043A\u0430"
      )),
      /* @__PURE__ */ React.createElement("li", { className: "header__item" }, /* @__PURE__ */ React.createElement("a", { className: "header__link", href: "/devices" }, "\u0423\u0441\u0442\u0440\u043E\u0439\u0441\u0442\u0432\u0430")),
      /* @__PURE__ */ React.createElement("li", { className: "header__item" }, /* @__PURE__ */ React.createElement("a", { className: "header__link", href: "/scripts" }, "\u0421\u0446\u0435\u043D\u0430\u0440\u0438\u0438"))
    ));
  }
  function Event(props) {
    const ref = React.useRef();
    const { onSize } = props;
    React.useEffect(() => {
      const width = ref.current.offsetWidth;
      const height = ref.current.offsetHeight;
      if (onSize) {
        onSize({ width, height });
      }
    });
    return /* @__PURE__ */ React.createElement("li", { ref, className: "event" + (props.slim ? " event_slim" : "") }, /* @__PURE__ */ React.createElement("button", { className: "event__button" }, /* @__PURE__ */ React.createElement(
      "span",
      {
        className: `event__icon event__icon_${props.icon}`,
        role: "img",
        "aria-label": props.iconLabel
      }
    ), /* @__PURE__ */ React.createElement("h4", { className: "event__title" }, props.title), props.subtitle && /* @__PURE__ */ React.createElement("span", { className: "event__subtitle" }, props.subtitle)));
  }
  var TABS = {
    all: {
      title: "\u0412\u0441\u0435",
      items: [
        {
          icon: "light2",
          iconLabel: "\u041E\u0441\u0432\u0435\u0449\u0435\u043D\u0438\u0435",
          title: "Xiaomi Yeelight LED Smart Bulb",
          subtitle: "\u0412\u043A\u043B\u044E\u0447\u0435\u043D\u043E"
        },
        {
          icon: "light",
          iconLabel: "\u041E\u0441\u0432\u0435\u0449\u0435\u043D\u0438\u0435",
          title: "D-Link Omna 180 Cam",
          subtitle: "\u0412\u043A\u043B\u044E\u0447\u0438\u0442\u0441\u044F \u0432 17:00"
        },
        {
          icon: "temp",
          iconLabel: "\u0422\u0435\u043C\u043F\u0435\u0440\u0430\u0442\u0443\u0440\u0430",
          title: "Elgato Eve Degree Connected",
          subtitle: "\u0412\u044B\u043A\u043B\u044E\u0447\u0435\u043D\u043E \u0434\u043E 17:00"
        },
        {
          icon: "light",
          iconLabel: "\u041E\u0441\u0432\u0435\u0449\u0435\u043D\u0438\u0435",
          title: "LIFX Mini Day & Dusk A60 E27",
          subtitle: "\u0412\u043A\u043B\u044E\u0447\u0438\u0442\u0441\u044F \u0432 17:00"
        },
        {
          icon: "light2",
          iconLabel: "\u041E\u0441\u0432\u0435\u0449\u0435\u043D\u0438\u0435",
          title: "Xiaomi Mi Air Purifier 2S",
          subtitle: "\u0412\u043A\u043B\u044E\u0447\u0435\u043D\u043E"
        },
        {
          icon: "light",
          iconLabel: "\u041E\u0441\u0432\u0435\u0449\u0435\u043D\u0438\u0435",
          title: "Philips Zhirui",
          subtitle: "\u0412\u043A\u043B\u044E\u0447\u0435\u043D\u043E"
        },
        {
          icon: "light",
          iconLabel: "\u041E\u0441\u0432\u0435\u0449\u0435\u043D\u0438\u0435",
          title: "Philips Zhirui",
          subtitle: "\u0412\u043A\u043B\u044E\u0447\u0435\u043D\u043E"
        },
        {
          icon: "light2",
          iconLabel: "\u041E\u0441\u0432\u0435\u0449\u0435\u043D\u0438\u0435",
          title: "Xiaomi Mi Air Purifier 2S",
          subtitle: "\u0412\u043A\u043B\u044E\u0447\u0435\u043D\u043E"
        }
      ]
    },
    kitchen: {
      title: "\u041A\u0443\u0445\u043D\u044F",
      items: [
        {
          icon: "light2",
          iconLabel: "\u041E\u0441\u0432\u0435\u0449\u0435\u043D\u0438\u0435",
          title: "Xiaomi Yeelight LED Smart Bulb",
          subtitle: "\u0412\u043A\u043B\u044E\u0447\u0435\u043D\u043E"
        },
        {
          icon: "temp",
          iconLabel: "\u0422\u0435\u043C\u043F\u0435\u0440\u0430\u0442\u0443\u0440\u0430",
          title: "Elgato Eve Degree Connected",
          subtitle: "\u0412\u044B\u043A\u043B\u044E\u0447\u0435\u043D\u043E \u0434\u043E 17:00"
        }
      ]
    },
    hall: {
      title: "\u0417\u0430\u043B",
      items: [
        {
          icon: "light",
          iconLabel: "\u041E\u0441\u0432\u0435\u0449\u0435\u043D\u0438\u0435",
          title: "Philips Zhirui",
          subtitle: "\u0412\u044B\u043A\u043B\u044E\u0447\u0435\u043D\u043E"
        },
        {
          icon: "light2",
          iconLabel: "\u041E\u0441\u0432\u0435\u0449\u0435\u043D\u0438\u0435",
          title: "Xiaomi Mi Air Purifier 2S",
          subtitle: "\u0412\u044B\u043A\u043B\u044E\u0447\u0435\u043D\u043E"
        }
      ]
    },
    lights: {
      title: "\u041B\u0430\u043C\u043F\u043E\u0447\u043A\u0438",
      items: [
        {
          icon: "light",
          iconLabel: "\u041E\u0441\u0432\u0435\u0449\u0435\u043D\u0438\u0435",
          title: "D-Link Omna 180 Cam",
          subtitle: "\u0412\u043A\u043B\u044E\u0447\u0438\u0442\u0441\u044F \u0432 17:00"
        },
        {
          icon: "light",
          iconLabel: "\u041E\u0441\u0432\u0435\u0449\u0435\u043D\u0438\u0435",
          title: "LIFX Mini Day & Dusk A60 E27",
          subtitle: "\u0412\u043A\u043B\u044E\u0447\u0438\u0442\u0441\u044F \u0432 17:00"
        },
        {
          icon: "light2",
          iconLabel: "\u041E\u0441\u0432\u0435\u0449\u0435\u043D\u0438\u0435",
          title: "Xiaomi Mi Air Purifier 2S",
          subtitle: "\u0412\u043A\u043B\u044E\u0447\u0435\u043D\u043E"
        },
        {
          icon: "light",
          iconLabel: "\u041E\u0441\u0432\u0435\u0449\u0435\u043D\u0438\u0435",
          title: "Philips Zhirui",
          subtitle: "\u0412\u043A\u043B\u044E\u0447\u0435\u043D\u043E"
        }
      ]
    },
    cameras: {
      title: "\u041A\u0430\u043C\u0435\u0440\u044B",
      items: [
        {
          icon: "light2",
          iconLabel: "\u041E\u0441\u0432\u0435\u0449\u0435\u043D\u0438\u0435",
          title: "Xiaomi Mi Air Purifier 2S",
          subtitle: "\u0412\u043A\u043B\u044E\u0447\u0435\u043D\u043E"
        }
      ]
    }
  };
  for (let i = 0; i < 6; ++i) {
    TABS.all.items = [...TABS.all.items, ...TABS.all.items];
  }
  var TABS_KEYS = Object.keys(TABS);
  function Main() {
    const ref = React.useRef();
    const initedRef = React.useRef(false);
    const [activeTab, setActiveTab] = React.useState("");
    const [hasRightScroll, setHasRightScroll] = React.useState(false);
    React.useEffect(() => {
      if (!activeTab && !initedRef.current) {
        initedRef.current = true;
        setActiveTab(new URLSearchParams(location.search).get("tab") || "all");
      }
    });
    const onSelectInput = (event) => {
      setActiveTab(event.target.value);
    };
    let sizes = [];
    const onSize = (size) => {
      sizes = [...sizes, size];
    };
    React.useEffect(() => {
      const sumWidth = sizes.reduce((acc, item) => acc + item.width, 0);
      const sumHeight = sizes.reduce((acc, item) => acc + item.height, 0);
      const newHasRightScroll = sumWidth > ref.current.offsetWidth;
      if (newHasRightScroll !== hasRightScroll) {
        setHasRightScroll(newHasRightScroll);
      }
    });
    const onArrowCLick = () => {
      const scroller = ref.current.querySelector(
        ".section__panel:not(.section__panel_hidden)"
      );
      if (scroller) {
        scroller.scrollTo({
          left: scroller.scrollLeft + 400,
          behavior: "smooth"
        });
      }
    };
    return /* @__PURE__ */ React.createElement("main", { className: "main" }, /* @__PURE__ */ React.createElement("section", { className: "section main__general" }, /* @__PURE__ */ React.createElement("h2", { className: "section__title section__title-header section__main-title" }, "\u0413\u043B\u0430\u0432\u043D\u043E\u0435"), /* @__PURE__ */ React.createElement("div", { className: "hero-dashboard" }, /* @__PURE__ */ React.createElement("div", { className: "hero-dashboard__primary" }, /* @__PURE__ */ React.createElement("h3", { className: "hero-dashboard__title" }, "\u041F\u0440\u0438\u0432\u0435\u0442, \u0413\u0435\u043D\u043D\u0430\u0434\u0438\u0439!"), /* @__PURE__ */ React.createElement("p", { className: "hero-dashboard__subtitle" }, "\u0414\u0432\u0435\u0440\u0438 \u0438 \u043E\u043A\u043D\u0430 \u0437\u0430\u043A\u0440\u044B\u0442\u044B, \u0441\u0438\u0433\u043D\u0430\u043B\u0438\u0437\u0430\u0446\u0438\u044F \u0432\u043A\u043B\u044E\u0447\u0435\u043D\u0430."), /* @__PURE__ */ React.createElement("ul", { className: "hero-dashboard__info" }, /* @__PURE__ */ React.createElement("li", { className: "hero-dashboard__item" }, /* @__PURE__ */ React.createElement("div", { className: "hero-dashboard__item-title" }, "\u0414\u043E\u043C\u0430"), /* @__PURE__ */ React.createElement("div", { className: "hero-dashboard__item-details" }, "+23", /* @__PURE__ */ React.createElement("span", { className: "a11y-hidden" }, "\xB0"))), /* @__PURE__ */ React.createElement("li", { className: "hero-dashboard__item" }, /* @__PURE__ */ React.createElement("div", { className: "hero-dashboard__item-title" }, "\u0417\u0430 \u043E\u043A\u043D\u043E\u043C"), /* @__PURE__ */ React.createElement("div", { className: "hero-dashboard__item-details" }, "+19", /* @__PURE__ */ React.createElement("span", { className: "a11y-hidden" }, "\xB0"), /* @__PURE__ */ React.createElement(
      "div",
      {
        className: "hero-dashboard__icon hero-dashboard__icon_rain",
        role: "img",
        "aria-label": "\u0414\u043E\u0436\u0434\u044C"
      }
    ))))), /* @__PURE__ */ React.createElement("ul", { className: "hero-dashboard__schedule" }, /* @__PURE__ */ React.createElement(
      Event,
      {
        icon: "temp",
        iconLabel: "\u0422\u0435\u043C\u043F\u0435\u0440\u0430\u0442\u0443\u0440\u0430",
        title: "Philips Cooler",
        subtitle: "\u041D\u0430\u0447\u043D\u0435\u0442 \u043E\u0445\u043B\u0430\u0436\u0434\u0430\u0442\u044C \u0432 16:30"
      }
    ), /* @__PURE__ */ React.createElement(
      Event,
      {
        icon: "light",
        iconLabel: "\u041E\u0441\u0432\u0435\u0449\u0435\u043D\u0438\u0435",
        title: "Xiaomi Yeelight LED Smart Bulb",
        subtitle: "\u0412\u043A\u043B\u044E\u0447\u0438\u0442\u0441\u044F \u0432 17:00"
      }
    ), /* @__PURE__ */ React.createElement(
      Event,
      {
        icon: "light",
        iconLabel: "\u041E\u0441\u0432\u0435\u0449\u0435\u043D\u0438\u0435",
        title: "Xiaomi Yeelight LED Smart Bulb",
        subtitle: "\u0412\u043A\u043B\u044E\u0447\u0438\u0442\u0441\u044F \u0432 17:00"
      }
    )))), /* @__PURE__ */ React.createElement("section", { className: "section main__scripts" }, /* @__PURE__ */ React.createElement("h2", { className: "section__title section__title-header" }, "\u0418\u0437\u0431\u0440\u0430\u043D\u043D\u044B\u0435 \u0441\u0446\u0435\u043D\u0430\u0440\u0438\u0438"), /* @__PURE__ */ React.createElement("ul", { className: "event-grid" }, /* @__PURE__ */ React.createElement(
      Event,
      {
        slim: true,
        icon: "light2",
        iconLabel: "\u041E\u0441\u0432\u0435\u0449\u0435\u043D\u0438\u0435",
        title: "\u0412\u044B\u043A\u043B\u044E\u0447\u0438\u0442\u044C \u0432\u0435\u0441\u044C \u0441\u0432\u0435\u0442 \u0432 \u0434\u043E\u043C\u0435 \u0438 \u0432\u043E \u0434\u0432\u043E\u0440\u0435"
      }
    ), /* @__PURE__ */ React.createElement(
      Event,
      {
        slim: true,
        icon: "schedule",
        iconLabel: "\u0420\u0430\u0441\u043F\u0438\u0441\u0430\u043D\u0438\u0435",
        title: "\u042F \u0443\u0445\u043E\u0436\u0443"
      }
    ), /* @__PURE__ */ React.createElement(
      Event,
      {
        slim: true,
        icon: "light2",
        iconLabel: "\u041E\u0441\u0432\u0435\u0449\u0435\u043D\u0438\u0435",
        title: "\u0412\u043A\u043B\u044E\u0447\u0438\u0442\u044C \u0441\u0432\u0435\u0442 \u0432 \u043A\u043E\u0440\u0438\u0434\u043E\u0440\u0435"
      }
    ), /* @__PURE__ */ React.createElement(
      Event,
      {
        slim: true,
        icon: "temp2",
        iconLabel: "\u0422\u0435\u043C\u043F\u0435\u0440\u0430\u0442\u0443\u0440\u0430",
        title: "\u041D\u0430\u0431\u0440\u0430\u0442\u044C \u0433\u043E\u0440\u044F\u0447\u0443\u044E \u0432\u0430\u043D\u043D\u0443",
        subtitle: "\u041D\u0430\u0447\u043D\u0451\u0442\u0441\u044F \u0432 18:00"
      }
    ), /* @__PURE__ */ React.createElement(
      Event,
      {
        slim: true,
        icon: "temp2",
        iconLabel: "\u0422\u0435\u043C\u043F\u0435\u0440\u0430\u0442\u0443\u0440\u0430",
        title: "\u0421\u0434\u0435\u043B\u0430\u0442\u044C \u043F\u043E\u043B \u0442\u0451\u043F\u043B\u044B\u043C \u0432\u043E \u0432\u0441\u0435\u0439 \u043A\u0432\u0430\u0440\u0442\u0438\u0440\u0435"
      }
    ))), /* @__PURE__ */ React.createElement("section", { className: "section main__devices" }, /* @__PURE__ */ React.createElement("div", { className: "section__title" }, /* @__PURE__ */ React.createElement("h2", { className: "section__title-header" }, "\u0418\u0437\u0431\u0440\u0430\u043D\u043D\u044B\u0435 \u0443\u0441\u0442\u0440\u043E\u0439\u0441\u0442\u0432\u0430"), /* @__PURE__ */ React.createElement(
      "select",
      {
        className: "section__select",
        defaultValue: "all",
        onInput: onSelectInput
      },
      TABS_KEYS.map((key) => /* @__PURE__ */ React.createElement("option", { key, value: key }, TABS[key].title))
    ), /* @__PURE__ */ React.createElement("ul", { role: "tablist", className: "section__tabs" }, TABS_KEYS.map((key) => /* @__PURE__ */ React.createElement(
      "li",
      {
        key,
        role: "tab",
        "aria-selected": key === activeTab ? "true" : "false",
        tabIndex: key === activeTab ? "0" : void 0,
        className: "section__tab" + (key === activeTab ? " section__tab_active" : ""),
        id: `tab_${key}`,
        "aria-controls": `panel_${key}`,
        onClick: () => setActiveTab(key)
      },
      TABS[key].title
    )))), /* @__PURE__ */ React.createElement("div", { className: "section__panel-wrapper", ref }, TABS_KEYS.map((key) => /* @__PURE__ */ React.createElement(
      "div",
      {
        key,
        role: "tabpanel",
        className: "section__panel" + (key === activeTab ? "" : " section__panel_hidden"),
        "aria-hidden": key === activeTab ? "false" : "true",
        id: `panel_${key}`,
        "aria-labelledby": `tab_${key}`
      },
      /* @__PURE__ */ React.createElement("ul", { className: "section__panel-list" }, TABS[key].items.map((item, index) => /* @__PURE__ */ React.createElement(Event, { key: index, ...item, onSize })))
    )), hasRightScroll && /* @__PURE__ */ React.createElement("div", { className: "section__arrow", onClick: onArrowCLick }))));
  }
  var root = ReactDOM.createRoot(document.getElementById("app"));
  root.render(
    /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(Header, null), /* @__PURE__ */ React.createElement(Main, null))
  );
})();
