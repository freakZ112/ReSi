(() => {
  "use strict";

  var e = {
      d: (t, n) => {
        for (var i in n) e.o(n, i) && !e.o(t, i) && Object.defineProperty(t, i, {
          enumerable: !0,
          get: n[i]
        });
      },
      o: (e, t) => Object.prototype.hasOwnProperty.call(e, t),
      r: e => {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
          value: "Module"
        }), Object.defineProperty(e, "__esModule", {
          value: !0
        });
      }
    },
    t = {};
  e.r(t), e.d(t, {
    hasBrowserEnv: () => ue,
    hasStandardBrowserEnv: () => de,
    hasStandardBrowserWebWorkerEnv: () => fe
  });
  var n = {};
  e.r(n), e.d(n, {
    alarmfax: () => st,
    alertOnMissionShare: () => rt,
    autoCollapseBuildings: () => ot,
    controlCenterRequirementCheck: () => at,
    countPatients: () => lt,
    countPossibleMissions: () => ct,
    countVehicleStatus: () => ut,
    customBuildingIcons: () => dt,
    customMapZoom: () => mt,
    customMissionIcons: () => ft,
    deleteNewestFmsAfterTime: () => ht,
    expandAssociationCards: () => pt,
    expandMapLegend: () => gt,
    fastMissionSpeed: () => yt,
    filterAaoEditVehicles: () => bt,
    filterMemberList: () => vt,
    hideAchievementcard: () => St,
    hideBuildingIcons: () => wt,
    hideFreeText: () => Et,
    hireMultipleStaff: () => At,
    kick: () => Mt,
    missionCounter: () => Ct,
    missionHelper: () => Tt,
    missionTime: () => It,
    multipleStaffAssignment: () => kt,
    selectedVehicles: () => qt,
    showOnlyLatestRadioMessage: () => Nt,
    staffStatsInBuildingList: () => xt,
    userBuildings: () => Lt,
    userVehicles: () => jt,
    userVehiclesCC: () => Dt
  });
  const i = [{
      name: "alarmfax",
      displayName: "Alarmfax",
      description: "Hinzuf&uuml;gen eines Alarmfax-Feldes auf der Missionsseite",
      author: "KeineAhnung",
      category: "Eins&auml;tze",
      usable: !0,
      match: ["https://rettungssimulator.online/*"],
      oneTime: !1,
      requiresConfig: !1
    }, {
      name: "alertOnMissionShare",
      displayName: "Benachrichtigung bei Einsatzfreigabe",
      description: "Zeige eine Benachrichtigung an, wenn ein Einsatz von einem Verbandsmitglied freigegeben wurde",
      author: "KeineAhnung",
      category: "Verband",
      usable: !0,
      match: ["https://rettungssimulator.online/"],
      oneTime: !0,
      requiresConfig: !1
    }, {
      name: "autoCollapseBuildings",
      displayName: "Automatisches Geb&auml;udekarten einklappen",
      description: "Geb&auml;udekarten in der &uuml;bersicht automatisch einklappen",
      author: "KeineAhnung",
      category: "Design",
      usable: !0,
      match: ["https://rettungssimulator.online/"],
      oneTime: !0,
      requiresConfig: !0,
      config: {
        autoCollapseBuildingsBuildingTypes: {
          type: "array",
          default: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
          description: "Geb&auml;udetypen, die automatisch eingeklappt werden sollen. Es werden die Geb&auml;ude IDs genutzt!"
        }
      }
    }, {
      name: "controlCenterRequirementCheck",
      displayName: "Anforderungen pro Leitstelle &uuml;berpr&uuml;fen",
      description: "&uuml;berpr&uuml;ft ob die Anforderungen innerhalb der Wachen einer Leitstelle funktioniert",
      author: "KeineAhnung",
      category: "Eins&auml;tze",
      usable: !0,
      match: ["https://rettungssimulator.online/department/*"],
      oneTime: !1,
      requiresConfig: !1
    }, {
      name: "countPatients",
      displayName: "Patientenanzahl anzeigen",
      description: "Anzeige der Anzahl der Patienten im Krankenhaus und der Krankenhauskapazit&auml;t",
      author: "KeineAhnung",
      category: "Patienten",
      usable: !0,
      match: ["^https:\\/\\/(www.)?rettungssimulator.online(\\/#?\\??(#[A-Za-z=]*)?)?$"],
      oneTime: !0,
      requiresConfig: !0,
      config: {
        shortText: {
          type: "boolean",
          default: "false",
          description: "Text als Icon anzeigen"
        }
      }
    }, {
      name: "countPossibleMissions",
      displayName: "M&ouml;gliche Eins&auml;tze z&auml;hlen",
      description: "Z&auml;hlen der Anzahl der m&ouml;glichen Eins&auml;tze auf der Einsatz&uuml;bersichtsseite",
      author: "KeineAhnung",
      category: "Eins&auml;tze",
      usable: !0,
      match: ["^https://rettungssimulator.online/missionOverview$"],
      oneTime: !1,
      requiresConfig: !1
    }, {
      name: "countVehicleStatus",
      displayName: "Fahrzeugstatus z&auml;hlen",
      description: "Z&auml;hlen der Fahrzeugstatus",
      author: "KeineAhnung",
      category: "Fahrzeuge",
      usable: !0,
      match: ["^https://rettungssimulator.online/*$"],
      oneTime: !0,
      requiresConfig: !1
    }, {
      name: "customBuildingIcons",
      displayName: "Benutzerdefinierte Geb&auml;udesymbole",
      description: "Anpassen der Geb&auml;udesymbole",
      author: "KeineAhnung",
      category: "Geb&auml;ude",
      usable: !0,
      match: ["https://rettungssimulator.online/*"],
      oneTime: !1,
      requiresConfig: !0,
      config: {
        customBuildingIconsConfig: {
          type: "object",
          default: {
            Feuerwache: "null",
            Feuerwehrschule: "null",
            Rettungswache: "null",
            Krankenhaus: "null",
            Landespolizeiwache: "null",
            Bundespoliizeiwache: "null",
            Leitstelle: "null",
            Rettungsdienstschule: "null",
            Notarztstandort: "null"
          },
          description: "Link zu Geb&auml;udesymbolen, die benutzt werden sollen. Die Symbole m&uuml;ssen auf ein valides Format verweisen (png, jpg, ...)"
        }
      }
    }, {
      name: "customMapZoom",
      displayName: "Eigener Kartenzoom",
      description: "Eigenen Bereich der Karte zum Standard zoom festlegen. <b>Die Eckpunkte sind S&uuml;dwesten und Nordosten.</b>",
      author: "KeineAhnung",
      category: "Karte",
      usable: !0,
      match: ["https://rettungssimulator.online/"],
      oneTime: !1,
      requiresConfig: !0,
      config: {
        customMapZoomNorth: {
          type: "string",
          default: "0",
          description: 'Lege den n&ouml;rdlichsten (Latitude) Punkt per Koordinate fest. Du kannst die Koordinaten z.B <a href="https://www.latlong.net/" target="_blank" rel="noopener noreferrer">hier</a> entnehmen.'
        },
        customMapZoomEast: {
          type: "string",
          default: "0",
          description: 'Lege den &ouml;stlichsten (Longitude) Punkt per Koordinate fest. Du kannst die Koordinaten z.B <a href="https://www.latlong.net/" target="_blank" rel="noopener noreferrer">hier</a> entnehmen.'
        },
        customMapZoomSouth: {
          type: "string",
          default: "0",
          description: 'Lege den s&uuml;dlichsten (Latitude) Punkt per Koordinate fest. Du kannst die Koordinaten z.B <a href="https://www.latlong.net/" target="_blank" rel="noopener noreferrer">hier</a> entnehmen.'
        },
        customMapZoomWest: {
          type: "string",
          default: "0",
          description: 'Lege den westlichsten (Longitude) Punkt per Koordinate fest. Du kannst die Koordinaten z.B <a href="https://www.latlong.net/" target="_blank" rel="noopener noreferrer">hier</a> entnehmen.'
        }
      }
    }, {
      name: "customMissionIcons",
      displayName: "Benutzerdefinierte Einsatzsymbole",
      description: "Anpassen der Einsatzsymbole",
      author: "KeineAhnung",
      category: "Eins&auml;tze",
      usable: !0,
      match: ["https://rettungssimulator.online/"],
      oneTime: !1,
      requiresConfig: !0,
      config: {
        customMissionIconsConfig: {
          type: "arrayobject",
          default: [{
            name: "",
            1: "",
            2: "",
            3: ""
          }],
          description: "Link zu Einsatzsymbolen, die benutzt werden sollen. Die Symbole m&uuml;ssen auf ein valides Format verweisen (png, jpg, ...)"
        }
      }
    }, {
      name: "deleteNewestFmsAfterTime",
      displayName: "Neueste FMS nach bestimmter Zeit l&ouml;schen",
      description: "L&ouml;scht die neueste FMS nach einer bestimmter Zeit",
      author: "KeineAhnung",
      category: "Fahrzeuge",
      usable: !0,
      match: ["https://rettungssimulator.online/"],
      oneTime: !0,
      requiresConfig: !0,
      config: {
        deleteNewestFmsAfterTime: {
          type: "string",
          default: "2000",
          description: "Zeit in Millisekunden, nach der der neueste FMS gel&ouml;scht werden soll"
        }
      }
    }, {
      name: "expandAssociationCards",
      displayName: "Verbandskarten erweitern",
      description: "Hinzuf&uuml;gen von Pfeilen zum Erweitern und Falten von Karten auf der Verbandsseite",
      author: "KeineAhnung",
      category: "Verband",
      usable: !0,
      match: ["https://rettungssimulator.online/association/*"],
      oneTime: !1,
      requiresConfig: !1
    }, {
      name: "expandMapLegend",
      displayName: "Kartenlegende erweitern",
      description: "Hinzuf&uuml;gen von Pfeilen zum Erweitern und Falten von Karten der Kartenlegende",
      author: "KeineAhnung",
      category: "Karte",
      usable: !0,
      match: ["https://rettungssimulator.online/mapLegend"],
      oneTime: !1,
      requiresConfig: !1
    }, {
      name: "fastMissionSpeed",
      displayName: "Geschwindigkeit schnell wechseln",
      description: "L&auml;sst einen die Einsatzgeschwindigkeit schneller wechseln",
      author: "Ron31",
      category: "Eins&auml;tze",
      usable: !0,
      match: ["^https:\\/\\/(www.)?rettungssimulator.online(\\/#?\\??(#[A-Za-z=]*)?)?$"],
      oneTime: !0,
      requiresConfig: !1
    }, {
      name: "filterAaoEditVehicles",
      displayName: "AAO Fahrzeuge filtern",
      description: "Filtere die Fahrzeuge die im AAO-Fahrzeug-Editor angezeigt werden",
      author: "KeineAhnung",
      category: "AAO",
      usable: !1,
      match: ["https://rettungssimulator.online/aaoEdit/[0-9]*"],
      oneTime: !1,
      requiresConfig: !0,
      config: {
        removeVehicleOptions: {
          type: "array",
          default: [],
          description: 'Fahrzeuge die im AAO-Fahrzeug-Editor versteckt werden sollen. Die zu verwendenen Namen sind <a target="_blank" rel="noopener noreferrer" href="https://rettungssimulator.online/api/vehicleCategories">hier</a> im abschnitt "shortName" zu entnehmen.'
        }
      }
    }, {
      name: "filterMemberList",
      displayName: "Verbandsmitgliederliste filtern",
      description: "Filtere die Verbandsmitgliederliste nach online, offline und abwesenden Spielern",
      author: "KeineAhnung",
      category: "Verband",
      usable: !0,
      match: ["https:\\/\\/rettungssimulator.online\\/association\\/[0-9]*"],
      oneTime: !1,
      requiresConfig: !1
    }, {
      name: "hideAchievementcard",
      displayName: "Errungenschaftenkarte ausblenden",
      description: "Errungenschaftenkarte auf der Profilseite ausblenden",
      author: "KeineAhnung",
      category: "Design",
      usable: !0,
      match: ["https://rettungssimulator.online/profile"],
      oneTime: !1,
      requiresConfig: !1
    }, {
      name: "hideBuildingIcons",
      displayName: "Geb&auml;udesymbole ausblenden",
      description: "Blendet die Geb&auml;udesymbole auf der Karte aus",
      author: "KeineAhnung",
      category: "Karte",
      usable: !0,
      match: ["https://rettungssimulator.online/"],
      oneTime: !0,
      requiresConfig: !0,
      config: {
        hideBuildingIconsConfig: {
          type: "array",
          default: [],
          description: 'Blendet die Geb&auml;udesymbole auf der Karte aus. Die zu verwendenen Links sind <a target="_blank" rel="noopener noreferrer" href="https://github.com/TheKeineAhnung/ReSi-Scripte/blob/main/information/buildingLinks.md">hier</a> zu entnehmen.'
        }
      }
    }, {
      name: "hideFreeText",
      displayName: "Freitextfeld verbergen",
      description: "Ausblenden der Freitexteingabe auf der Anrufannahme-Seite",
      author: "KeineAhnung",
      category: "Eins&auml;tze",
      usable: !0,
      match: ["https://rettungssimulator.online/missionNew/*"],
      oneTime: !1,
      requiresConfig: !1
    }, {
      name: "hireMultipleStaff",
      displayName: "Mehr Personal kaufen",
      description: "Kaufe mehr Personal mit Marken",
      author: "KeineAhnung",
      category: "Geb&auml;ude",
      usable: !0,
      match: ["https://rettungssimulator.online/department/*"],
      oneTime: !1,
      requiresConfig: !1
    }, {
      name: "kick",
      displayName: "Inaktive kicken",
      description: "Kickt inaktive Verbandsmitglieder (nur fÃ¼r Admins)",
      author: "Ron31",
      category: "Verband",
      usable: !0,
      match: ["https://rettungssimulator.online/association/*"],
      oneTime: !1,
      requiresConfig: !1
    }, {
      name: "missionCounter",
      displayName: "Missionen z&auml;hlen",
      description: "Anzahl der Missionen bei der Einsatzliste",
      author: "Ron31",
      category: "Eins&auml;tze",
      usable: !0,
      match: ["^https:\\/\\/(www.)?rettungssimulator.online(\\/#?\\??(#[A-Za-z=]*)?)?$"],
      oneTime: !0,
      requiresConfig: !0,
      config: {
        addOwnShared: {
          type: "boolean",
          default: "false",
          description: "Zeige zus&auml;tzlich eigene Shared Missions an"
        }
      }
    }, {
      name: "missionTime",
      displayName: "Einsatzzeit anzeigen",
      description: "Einsatzzeit in der Einsatzliste anzeigen",
      author: "KeineAhnung",
      category: "Eins&auml;tze",
      usable: !0,
      match: ["^https://rettungssimulator.online/*$"],
      oneTime: !1,
      requiresConfig: !1
    }, {
      name: "multipleStaffAssignment",
      displayName: "Mehrere Personen zuweisen",
      description: "Zuweisen von mehreren Personen gleichzeitig auf Fahrzeuge, Lehrgangsplanungen, etc.",
      author: "KeineAhnung",
      category: "Geb&auml;ude",
      usable: !0,
      match: ["https://rettungssimulator.online/department/[0-9]*"],
      oneTime: !1,
      requiresConfig: !1
    }, {
      name: "missionHelper",
      displayName: "Einsatzhilfe anzeigen",
      description: "Einsatzhilfe im Einsatzfenster",
      author: "Ron31",
      category: "Eins&auml;tze",
      usable: !0,
      match: ["https://rettungssimulator.online/mission/[0-9]*"],
      oneTime: !1,
      requiresConfig: !1
    }, {
      name: "selectedVehicles",
      displayName: "Ausgew&auml;hlte Fahrzeuge anzeigen",
      description: "Ausgew&auml;hlte Fahrzeuge in Tabelle anzeigen",
      author: "Ron31",
      category: "Eins&auml;tze",
      usable: !0,
      match: ["https://rettungssimulator.online/mission/[0-9]*"],
      oneTime: !1,
      requiresConfig: !0,
      config: {
        showBelowAAO: {
          type: "boolean",
          default: "false",
          description: "Zeige die ausgew&auml;hlten Fahrzeuge unterhalb der AAO"
        },
        showDistance: {
          type: "boolean",
          default: "false",
          description: "Zeige die Entfernung der Fahrzeuge zum Einsatzort"
        }
      }
    }, {
      name: "showOnlyLatestRadioMessage",
      displayName: "Nur neueste Radiomeldung anzeigen",
      description: "Nur die letzte Funkmeldung eines Fahrzeuges im Funkmeldungsfeld anzeigen",
      author: "KeineAhnung",
      category: "Fahrzeuge",
      usable: !0,
      match: ["https://rettungssimulator.online/"],
      oneTime: !1,
      requiresConfig: !1
    }, {
      name: "staffStatsInBuildingList",
      displayName: "Personalstatistiken im Geb&auml;udenamen",
      description: "Zeigt Personalstatistiken eines Geb&auml;udes in der Geb&auml;udeliste an",
      author: "KeineAhnung",
      category: "Geb&auml;ude",
      usable: !0,
      match: ["https://rettungssimulator.online/"],
      oneTime: !0,
      requiresConfig: !1
    }, {
      name: "userBuildings",
      displayName: "Geb&auml;ude z&auml;hlen",
      description: "Z&auml;hlen der eigenen Geb&auml;ude auf der Profilseite",
      author: "KeineAhnung",
      category: "Geb&auml;ude",
      usable: !0,
      match: [/^https:\/\/(www.)?rettungssimulator.online\/profile$/],
      oneTime: !1,
      requiresConfig: !1
    }, {
      name: "userVehicles",
      displayName: "Fahrzeuge z&auml;hlen",
      description: "Z&auml;hlen der eigenen Fahrzeuge auf der Profilseite",
      author: "KeineAhnung",
      category: "Fahrzeuge",
      usable: !0,
      match: [/^https:\/\/(www.)?rettungssimulator.online\/profile$/],
      oneTime: !1,
      requiresConfig: !1
    }, {
      name: "userVehiclesCC",
      displayName: "Fahrzeuge zÃ¤hlen LST",
      description: "ZÃ¤hlen der eigenen Fahrzeuge innerhalb einer Leitstelle",
      author: "KeineAhnung, Ron31",
      category: "Fahrzeuge",
      usable: !0,
      match: ["https://rettungssimulator.online/department/*"],
      oneTime: !1,
      requiresConfig: !1
    }],
    s = async function () {
      const e = [];
      for (const t in i) e.push(i[t].name);
      return e;
    },
    r = async function () {
      let e;
      const t = localStorage.getItem("resiScriptManagerConfig");
      if (null !== t) e = JSON.parse(t);else {
        const t = await s();
        e = await async function (e) {
          const t = {};
          return e.forEach(e => {
            t[e] = {
              active: !1
            };
          }), localStorage.setItem("resiScriptManagerConfig", JSON.stringify(t)), t;
        }(t);
      }
      return e;
    },
    o = function (e) {
      localStorage.setItem("resiScriptManagerConfig", JSON.stringify(e));
    },
    a = function (e, t) {
      console.error(`Variable ${e} from file ${t} is null`);
    },
    l = function (e, t) {
      console.error(`Variable ${e} from file ${t} is undefined`);
    };
  function c(e, t) {
    return function () {
      return e.apply(t, arguments);
    };
  }
  const {
      toString: u
    } = Object.prototype,
    {
      getPrototypeOf: d
    } = Object,
    m = (f = Object.create(null), e => {
      const t = u.call(e);
      return f[t] || (f[t] = t.slice(8, -1).toLowerCase());
    });
  var f;
  const h = e => (e = e.toLowerCase(), t => m(t) === e),
    p = e => t => typeof t === e,
    {
      isArray: g
    } = Array,
    y = p("undefined"),
    b = h("ArrayBuffer"),
    v = p("string"),
    S = p("function"),
    w = p("number"),
    E = e => null !== e && "object" == typeof e,
    A = e => {
      if ("object" !== m(e)) return !1;
      const t = d(e);
      return !(null !== t && t !== Object.prototype && null !== Object.getPrototypeOf(t) || Symbol.toStringTag in e || Symbol.iterator in e);
    },
    C = h("Date"),
    T = h("File"),
    O = h("Blob"),
    I = h("FileList"),
    k = h("URLSearchParams");
  function N(e, t, {
    allOwnKeys: n = !1
  } = {}) {
    if (null == e) return;
    let i, s;
    if ("object" != typeof e && (e = [e]), g(e)) for (i = 0, s = e.length; i < s; i++) t.call(null, e[i], i, e);else {
      const s = n ? Object.getOwnPropertyNames(e) : Object.keys(e),
        r = s.length;
      let o;
      for (i = 0; i < r; i++) o = s[i], t.call(null, e[o], o, e);
    }
  }
  function x(e, t) {
    t = t.toLowerCase();
    const n = Object.keys(e);
    let i,
      s = n.length;
    for (; s-- > 0;) if (i = n[s], t === i.toLowerCase()) return i;
    return null;
  }
  const j = "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : "undefined" != typeof window ? window : global,
    q = e => !y(e) && e !== j,
    M = (D = "undefined" != typeof Uint8Array && d(Uint8Array), e => D && e instanceof D);
  var D;
  const _ = h("HTMLFormElement"),
    B = (({
      hasOwnProperty: e
    }) => (t, n) => e.call(t, n))(Object.prototype),
    P = h("RegExp"),
    z = (e, t) => {
      const n = Object.getOwnPropertyDescriptors(e),
        i = {};
      N(n, (n, s) => {
        let r;
        !1 !== (r = t(n, s, e)) && (i[s] = r || n);
      }), Object.defineProperties(e, i);
    },
    R = "abcdefghijklmnopqrstuvwxyz",
    F = "0123456789",
    V = {
      DIGIT: F,
      ALPHA: R,
      ALPHA_DIGIT: R + R.toUpperCase() + F
    },
    U = h("AsyncFunction"),
    H = {
      isArray: g,
      isArrayBuffer: b,
      isBuffer: function (e) {
        return null !== e && !y(e) && null !== e.constructor && !y(e.constructor) && S(e.constructor.isBuffer) && e.constructor.isBuffer(e);
      },
      isFormData: e => {
        let t;
        return e && ("function" == typeof FormData && e instanceof FormData || S(e.append) && ("formdata" === (t = m(e)) || "object" === t && S(e.toString) && "[object FormData]" === e.toString()));
      },
      isArrayBufferView: function (e) {
        let t;
        return t = "undefined" != typeof ArrayBuffer && ArrayBuffer.isView ? ArrayBuffer.isView(e) : e && e.buffer && b(e.buffer), t;
      },
      isString: v,
      isNumber: w,
      isBoolean: e => !0 === e || !1 === e,
      isObject: E,
      isPlainObject: A,
      isUndefined: y,
      isDate: C,
      isFile: T,
      isBlob: O,
      isRegExp: P,
      isFunction: S,
      isStream: e => E(e) && S(e.pipe),
      isURLSearchParams: k,
      isTypedArray: M,
      isFileList: I,
      forEach: N,
      merge: function e() {
        const {
            caseless: t
          } = q(this) && this || {},
          n = {},
          i = (i, s) => {
            const r = t && x(n, s) || s;
            A(n[r]) && A(i) ? n[r] = e(n[r], i) : A(i) ? n[r] = e({}, i) : g(i) ? n[r] = i.slice() : n[r] = i;
          };
        for (let e = 0, t = arguments.length; e < t; e++) arguments[e] && N(arguments[e], i);
        return n;
      },
      extend: (e, t, n, {
        allOwnKeys: i
      } = {}) => (N(t, (t, i) => {
        n && S(t) ? e[i] = c(t, n) : e[i] = t;
      }, {
        allOwnKeys: i
      }), e),
      trim: e => e.trim ? e.trim() : e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, ""),
      stripBOM: e => (65279 === e.charCodeAt(0) && (e = e.slice(1)), e),
      inherits: (e, t, n, i) => {
        e.prototype = Object.create(t.prototype, i), e.prototype.constructor = e, Object.defineProperty(e, "super", {
          value: t.prototype
        }), n && Object.assign(e.prototype, n);
      },
      toFlatObject: (e, t, n, i) => {
        let s, r, o;
        const a = {};
        if (t = t || {}, null == e) return t;
        do {
          for (s = Object.getOwnPropertyNames(e), r = s.length; r-- > 0;) o = s[r], i && !i(o, e, t) || a[o] || (t[o] = e[o], a[o] = !0);
          e = !1 !== n && d(e);
        } while (e && (!n || n(e, t)) && e !== Object.prototype);
        return t;
      },
      kindOf: m,
      kindOfTest: h,
      endsWith: (e, t, n) => {
        e = String(e), (void 0 === n || n > e.length) && (n = e.length), n -= t.length;
        const i = e.indexOf(t, n);
        return -1 !== i && i === n;
      },
      toArray: e => {
        if (!e) return null;
        if (g(e)) return e;
        let t = e.length;
        if (!w(t)) return null;
        const n = new Array(t);
        for (; t-- > 0;) n[t] = e[t];
        return n;
      },
      forEachEntry: (e, t) => {
        const n = (e && e[Symbol.iterator]).call(e);
        let i;
        for (; (i = n.next()) && !i.done;) {
          const n = i.value;
          t.call(e, n[0], n[1]);
        }
      },
      matchAll: (e, t) => {
        let n;
        const i = [];
        for (; null !== (n = e.exec(t));) i.push(n);
        return i;
      },
      isHTMLForm: _,
      hasOwnProperty: B,
      hasOwnProp: B,
      reduceDescriptors: z,
      freezeMethods: e => {
        z(e, (t, n) => {
          if (S(e) && -1 !== ["arguments", "caller", "callee"].indexOf(n)) return !1;
          const i = e[n];
          S(i) && (t.enumerable = !1, "writable" in t ? t.writable = !1 : t.set || (t.set = () => {
            throw Error("Can not rewrite read-only method '" + n + "'");
          }));
        });
      },
      toObjectSet: (e, t) => {
        const n = {},
          i = e => {
            e.forEach(e => {
              n[e] = !0;
            });
          };
        return g(e) ? i(e) : i(String(e).split(t)), n;
      },
      toCamelCase: e => e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g, function (e, t, n) {
        return t.toUpperCase() + n;
      }),
      noop: () => {},
      toFiniteNumber: (e, t) => (e = +e, Number.isFinite(e) ? e : t),
      findKey: x,
      global: j,
      isContextDefined: q,
      ALPHABET: V,
      generateString: (e = 16, t = V.ALPHA_DIGIT) => {
        let n = "";
        const {
          length: i
        } = t;
        for (; e--;) n += t[Math.random() * i | 0];
        return n;
      },
      isSpecCompliantForm: function (e) {
        return !!(e && S(e.append) && "FormData" === e[Symbol.toStringTag] && e[Symbol.iterator]);
      },
      toJSONObject: e => {
        const t = new Array(10),
          n = (e, i) => {
            if (E(e)) {
              if (t.indexOf(e) >= 0) return;
              if (!("toJSON" in e)) {
                t[i] = e;
                const s = g(e) ? [] : {};
                return N(e, (e, t) => {
                  const r = n(e, i + 1);
                  !y(r) && (s[t] = r);
                }), t[i] = void 0, s;
              }
            }
            return e;
          };
        return n(e, 0);
      },
      isAsyncFn: U,
      isThenable: e => e && (E(e) || S(e)) && S(e.then) && S(e.catch)
    };
  function J(e, t, n, i, s) {
    Error.call(this), Error.captureStackTrace ? Error.captureStackTrace(this, this.constructor) : this.stack = new Error().stack, this.message = e, this.name = "AxiosError", t && (this.code = t), n && (this.config = n), i && (this.request = i), s && (this.response = s);
  }
  H.inherits(J, Error, {
    toJSON: function () {
      return {
        message: this.message,
        name: this.name,
        description: this.description,
        number: this.number,
        fileName: this.fileName,
        lineNumber: this.lineNumber,
        columnNumber: this.columnNumber,
        stack: this.stack,
        config: H.toJSONObject(this.config),
        code: this.code,
        status: this.response && this.response.status ? this.response.status : null
      };
    }
  });
  const K = J.prototype,
    G = {};
  ["ERR_BAD_OPTION_VALUE", "ERR_BAD_OPTION", "ECONNABORTED", "ETIMEDOUT", "ERR_NETWORK", "ERR_FR_TOO_MANY_REDIRECTS", "ERR_DEPRECATED", "ERR_BAD_RESPONSE", "ERR_BAD_REQUEST", "ERR_CANCELED", "ERR_NOT_SUPPORT", "ERR_INVALID_URL"].forEach(e => {
    G[e] = {
      value: e
    };
  }), Object.defineProperties(J, G), Object.defineProperty(K, "isAxiosError", {
    value: !0
  }), J.from = (e, t, n, i, s, r) => {
    const o = Object.create(K);
    return H.toFlatObject(e, o, function (e) {
      return e !== Error.prototype;
    }, e => "isAxiosError" !== e), J.call(o, e.message, t, n, i, s), o.cause = e, o.name = e.name, r && Object.assign(o, r), o;
  };
  const Z = J;
  function W(e) {
    return H.isPlainObject(e) || H.isArray(e);
  }
  function X(e) {
    return H.endsWith(e, "[]") ? e.slice(0, -2) : e;
  }
  function Q(e, t, n) {
    return e ? e.concat(t).map(function (e, t) {
      return e = X(e), !n && t ? "[" + e + "]" : e;
    }).join(n ? "." : "") : t;
  }
  const Y = H.toFlatObject(H, {}, null, function (e) {
      return /^is[A-Z]/.test(e);
    }),
    ee = function (e, t, n) {
      if (!H.isObject(e)) throw new TypeError("target must be an object");
      t = t || new FormData();
      const i = (n = H.toFlatObject(n, {
          metaTokens: !0,
          dots: !1,
          indexes: !1
        }, !1, function (e, t) {
          return !H.isUndefined(t[e]);
        })).metaTokens,
        s = n.visitor || c,
        r = n.dots,
        o = n.indexes,
        a = (n.Blob || "undefined" != typeof Blob && Blob) && H.isSpecCompliantForm(t);
      if (!H.isFunction(s)) throw new TypeError("visitor must be a function");
      function l(e) {
        if (null === e) return "";
        if (H.isDate(e)) return e.toISOString();
        if (!a && H.isBlob(e)) throw new Z("Blob is not supported. Use a Buffer instead.");
        return H.isArrayBuffer(e) || H.isTypedArray(e) ? a && "function" == typeof Blob ? new Blob([e]) : Buffer.from(e) : e;
      }
      function c(e, n, s) {
        let a = e;
        if (e && !s && "object" == typeof e) if (H.endsWith(n, "{}")) n = i ? n : n.slice(0, -2), e = JSON.stringify(e);else if (H.isArray(e) && function (e) {
          return H.isArray(e) && !e.some(W);
        }(e) || (H.isFileList(e) || H.endsWith(n, "[]")) && (a = H.toArray(e))) return n = X(n), a.forEach(function (e, i) {
          !H.isUndefined(e) && null !== e && t.append(!0 === o ? Q([n], i, r) : null === o ? n : n + "[]", l(e));
        }), !1;
        return !!W(e) || (t.append(Q(s, n, r), l(e)), !1);
      }
      const u = [],
        d = Object.assign(Y, {
          defaultVisitor: c,
          convertValue: l,
          isVisitable: W
        });
      if (!H.isObject(e)) throw new TypeError("data must be an object");
      return function e(n, i) {
        if (!H.isUndefined(n)) {
          if (-1 !== u.indexOf(n)) throw Error("Circular reference detected in " + i.join("."));
          u.push(n), H.forEach(n, function (n, r) {
            !0 === (!(H.isUndefined(n) || null === n) && s.call(t, n, H.isString(r) ? r.trim() : r, i, d)) && e(n, i ? i.concat(r) : [r]);
          }), u.pop();
        }
      }(e), t;
    };
  function te(e) {
    const t = {
      "!": "%21",
      "'": "%27",
      "(": "%28",
      ")": "%29",
      "~": "%7E",
      "%20": "+",
      "%00": "\0"
    };
    return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g, function (e) {
      return t[e];
    });
  }
  function ne(e, t) {
    this._pairs = [], e && ee(e, this, t);
  }
  const ie = ne.prototype;
  ie.append = function (e, t) {
    this._pairs.push([e, t]);
  }, ie.toString = function (e) {
    const t = e ? function (t) {
      return e.call(this, t, te);
    } : te;
    return this._pairs.map(function (e) {
      return t(e[0]) + "=" + t(e[1]);
    }, "").join("&");
  };
  const se = ne;
  function re(e) {
    return encodeURIComponent(e).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]");
  }
  function oe(e, t, n) {
    if (!t) return e;
    const i = n && n.encode || re,
      s = n && n.serialize;
    let r;
    if (r = s ? s(t, n) : H.isURLSearchParams(t) ? t.toString() : new se(t, n).toString(i), r) {
      const t = e.indexOf("#");
      -1 !== t && (e = e.slice(0, t)), e += (-1 === e.indexOf("?") ? "?" : "&") + r;
    }
    return e;
  }
  const ae = class {
      constructor() {
        this.handlers = [];
      }
      use(e, t, n) {
        return this.handlers.push({
          fulfilled: e,
          rejected: t,
          synchronous: !!n && n.synchronous,
          runWhen: n ? n.runWhen : null
        }), this.handlers.length - 1;
      }
      eject(e) {
        this.handlers[e] && (this.handlers[e] = null);
      }
      clear() {
        this.handlers && (this.handlers = []);
      }
      forEach(e) {
        H.forEach(this.handlers, function (t) {
          null !== t && e(t);
        });
      }
    },
    le = {
      silentJSONParsing: !0,
      forcedJSONParsing: !0,
      clarifyTimeoutError: !1
    },
    ce = {
      isBrowser: !0,
      classes: {
        URLSearchParams: "undefined" != typeof URLSearchParams ? URLSearchParams : se,
        FormData: "undefined" != typeof FormData ? FormData : null,
        Blob: "undefined" != typeof Blob ? Blob : null
      },
      protocols: ["http", "https", "file", "blob", "url", "data"]
    },
    ue = "undefined" != typeof window && "undefined" != typeof document,
    de = (me = "undefined" != typeof navigator && navigator.product, ue && ["ReactNative", "NativeScript", "NS"].indexOf(me) < 0);
  var me;
  const fe = "undefined" != typeof WorkerGlobalScope && self instanceof WorkerGlobalScope && "function" == typeof self.importScripts,
    he = {
      ...t,
      ...ce
    },
    pe = function (e) {
      function t(e, n, i, s) {
        let r = e[s++];
        if ("__proto__" === r) return !0;
        const o = Number.isFinite(+r),
          a = s >= e.length;
        return r = !r && H.isArray(i) ? i.length : r, a ? (H.hasOwnProp(i, r) ? i[r] = [i[r], n] : i[r] = n, !o) : (i[r] && H.isObject(i[r]) || (i[r] = []), t(e, n, i[r], s) && H.isArray(i[r]) && (i[r] = function (e) {
          const t = {},
            n = Object.keys(e);
          let i;
          const s = n.length;
          let r;
          for (i = 0; i < s; i++) r = n[i], t[r] = e[r];
          return t;
        }(i[r])), !o);
      }
      if (H.isFormData(e) && H.isFunction(e.entries)) {
        const n = {};
        return H.forEachEntry(e, (e, i) => {
          t(function (e) {
            return H.matchAll(/\w+|\[(\w*)]/g, e).map(e => "[]" === e[0] ? "" : e[1] || e[0]);
          }(e), i, n, 0);
        }), n;
      }
      return null;
    },
    ge = {
      transitional: le,
      adapter: ["xhr", "http"],
      transformRequest: [function (e, t) {
        const n = t.getContentType() || "",
          i = n.indexOf("application/json") > -1,
          s = H.isObject(e);
        if (s && H.isHTMLForm(e) && (e = new FormData(e)), H.isFormData(e)) return i ? JSON.stringify(pe(e)) : e;
        if (H.isArrayBuffer(e) || H.isBuffer(e) || H.isStream(e) || H.isFile(e) || H.isBlob(e)) return e;
        if (H.isArrayBufferView(e)) return e.buffer;
        if (H.isURLSearchParams(e)) return t.setContentType("application/x-www-form-urlencoded;charset=utf-8", !1), e.toString();
        let r;
        if (s) {
          if (n.indexOf("application/x-www-form-urlencoded") > -1) return function (e, t) {
            return ee(e, new he.classes.URLSearchParams(), Object.assign({
              visitor: function (e, t, n, i) {
                return he.isNode && H.isBuffer(e) ? (this.append(t, e.toString("base64")), !1) : i.defaultVisitor.apply(this, arguments);
              }
            }, t));
          }(e, this.formSerializer).toString();
          if ((r = H.isFileList(e)) || n.indexOf("multipart/form-data") > -1) {
            const t = this.env && this.env.FormData;
            return ee(r ? {
              "files[]": e
            } : e, t && new t(), this.formSerializer);
          }
        }
        return s || i ? (t.setContentType("application/json", !1), function (e, t, n) {
          if (H.isString(e)) try {
            return (0, JSON.parse)(e), H.trim(e);
          } catch (e) {
            if ("SyntaxError" !== e.name) throw e;
          }
          return (0, JSON.stringify)(e);
        }(e)) : e;
      }],
      transformResponse: [function (e) {
        const t = this.transitional || ge.transitional,
          n = t && t.forcedJSONParsing,
          i = "json" === this.responseType;
        if (e && H.isString(e) && (n && !this.responseType || i)) {
          const n = !(t && t.silentJSONParsing) && i;
          try {
            return JSON.parse(e);
          } catch (e) {
            if (n) {
              if ("SyntaxError" === e.name) throw Z.from(e, Z.ERR_BAD_RESPONSE, this, null, this.response);
              throw e;
            }
          }
        }
        return e;
      }],
      timeout: 0,
      xsrfCookieName: "XSRF-TOKEN",
      xsrfHeaderName: "X-XSRF-TOKEN",
      maxContentLength: -1,
      maxBodyLength: -1,
      env: {
        FormData: he.classes.FormData,
        Blob: he.classes.Blob
      },
      validateStatus: function (e) {
        return e >= 200 && e < 300;
      },
      headers: {
        common: {
          Accept: "application/json, text/plain, */*",
          "Content-Type": void 0
        }
      }
    };
  H.forEach(["delete", "get", "head", "post", "put", "patch"], e => {
    ge.headers[e] = {};
  });
  const ye = ge,
    be = H.toObjectSet(["age", "authorization", "content-length", "content-type", "etag", "expires", "from", "host", "if-modified-since", "if-unmodified-since", "last-modified", "location", "max-forwards", "proxy-authorization", "referer", "retry-after", "user-agent"]),
    ve = Symbol("internals");
  function Se(e) {
    return e && String(e).trim().toLowerCase();
  }
  function we(e) {
    return !1 === e || null == e ? e : H.isArray(e) ? e.map(we) : String(e);
  }
  function Ee(e, t, n, i, s) {
    return H.isFunction(i) ? i.call(this, t, n) : (s && (t = n), H.isString(t) ? H.isString(i) ? -1 !== t.indexOf(i) : H.isRegExp(i) ? i.test(t) : void 0 : void 0);
  }
  class Ae {
    constructor(e) {
      e && this.set(e);
    }
    set(e, t, n) {
      const i = this;
      function s(e, t, n) {
        const s = Se(t);
        if (!s) throw new Error("header name must be a non-empty string");
        const r = H.findKey(i, s);
        (!r || void 0 === i[r] || !0 === n || void 0 === n && !1 !== i[r]) && (i[r || t] = we(e));
      }
      const r = (e, t) => H.forEach(e, (e, n) => s(e, n, t));
      return H.isPlainObject(e) || e instanceof this.constructor ? r(e, t) : H.isString(e) && (e = e.trim()) && !/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim()) ? r((e => {
        const t = {};
        let n, i, s;
        return e && e.split("\n").forEach(function (e) {
          s = e.indexOf(":"), n = e.substring(0, s).trim().toLowerCase(), i = e.substring(s + 1).trim(), !n || t[n] && be[n] || ("set-cookie" === n ? t[n] ? t[n].push(i) : t[n] = [i] : t[n] = t[n] ? t[n] + ", " + i : i);
        }), t;
      })(e), t) : null != e && s(t, e, n), this;
    }
    get(e, t) {
      if (e = Se(e)) {
        const n = H.findKey(this, e);
        if (n) {
          const e = this[n];
          if (!t) return e;
          if (!0 === t) return function (e) {
            const t = Object.create(null),
              n = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
            let i;
            for (; i = n.exec(e);) t[i[1]] = i[2];
            return t;
          }(e);
          if (H.isFunction(t)) return t.call(this, e, n);
          if (H.isRegExp(t)) return t.exec(e);
          throw new TypeError("parser must be boolean|regexp|function");
        }
      }
    }
    has(e, t) {
      if (e = Se(e)) {
        const n = H.findKey(this, e);
        return !(!n || void 0 === this[n] || t && !Ee(0, this[n], n, t));
      }
      return !1;
    }
    delete(e, t) {
      const n = this;
      let i = !1;
      function s(e) {
        if (e = Se(e)) {
          const s = H.findKey(n, e);
          !s || t && !Ee(0, n[s], s, t) || (delete n[s], i = !0);
        }
      }
      return H.isArray(e) ? e.forEach(s) : s(e), i;
    }
    clear(e) {
      const t = Object.keys(this);
      let n = t.length,
        i = !1;
      for (; n--;) {
        const s = t[n];
        e && !Ee(0, this[s], s, e, !0) || (delete this[s], i = !0);
      }
      return i;
    }
    normalize(e) {
      const t = this,
        n = {};
      return H.forEach(this, (i, s) => {
        const r = H.findKey(n, s);
        if (r) return t[r] = we(i), void delete t[s];
        const o = e ? function (e) {
          return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g, (e, t, n) => t.toUpperCase() + n);
        }(s) : String(s).trim();
        o !== s && delete t[s], t[o] = we(i), n[o] = !0;
      }), this;
    }
    concat(...e) {
      return this.constructor.concat(this, ...e);
    }
    toJSON(e) {
      const t = Object.create(null);
      return H.forEach(this, (n, i) => {
        null != n && !1 !== n && (t[i] = e && H.isArray(n) ? n.join(", ") : n);
      }), t;
    }
    [Symbol.iterator]() {
      return Object.entries(this.toJSON())[Symbol.iterator]();
    }
    toString() {
      return Object.entries(this.toJSON()).map(([e, t]) => e + ": " + t).join("\n");
    }
    get [Symbol.toStringTag]() {
      return "AxiosHeaders";
    }
    static from(e) {
      return e instanceof this ? e : new this(e);
    }
    static concat(e, ...t) {
      const n = new this(e);
      return t.forEach(e => n.set(e)), n;
    }
    static accessor(e) {
      const t = (this[ve] = this[ve] = {
          accessors: {}
        }).accessors,
        n = this.prototype;
      function i(e) {
        const i = Se(e);
        t[i] || (function (e, t) {
          const n = H.toCamelCase(" " + t);
          ["get", "set", "has"].forEach(i => {
            Object.defineProperty(e, i + n, {
              value: function (e, n, s) {
                return this[i].call(this, t, e, n, s);
              },
              configurable: !0
            });
          });
        }(n, e), t[i] = !0);
      }
      return H.isArray(e) ? e.forEach(i) : i(e), this;
    }
  }
  Ae.accessor(["Content-Type", "Content-Length", "Accept", "Accept-Encoding", "User-Agent", "Authorization"]), H.reduceDescriptors(Ae.prototype, ({
    value: e
  }, t) => {
    let n = t[0].toUpperCase() + t.slice(1);
    return {
      get: () => e,
      set(e) {
        this[n] = e;
      }
    };
  }), H.freezeMethods(Ae);
  const Ce = Ae;
  function Te(e, t) {
    const n = this || ye,
      i = t || n,
      s = Ce.from(i.headers);
    let r = i.data;
    return H.forEach(e, function (e) {
      r = e.call(n, r, s.normalize(), t ? t.status : void 0);
    }), s.normalize(), r;
  }
  function Oe(e) {
    return !(!e || !e.__CANCEL__);
  }
  function Ie(e, t, n) {
    Z.call(this, null == e ? "canceled" : e, Z.ERR_CANCELED, t, n), this.name = "CanceledError";
  }
  H.inherits(Ie, Z, {
    __CANCEL__: !0
  });
  const ke = Ie,
    Ne = he.hasStandardBrowserEnv ? {
      write(e, t, n, i, s, r) {
        const o = [e + "=" + encodeURIComponent(t)];
        H.isNumber(n) && o.push("expires=" + new Date(n).toGMTString()), H.isString(i) && o.push("path=" + i), H.isString(s) && o.push("domain=" + s), !0 === r && o.push("secure"), document.cookie = o.join("; ");
      },
      read(e) {
        const t = document.cookie.match(new RegExp("(^|;\\s*)(" + e + ")=([^;]*)"));
        return t ? decodeURIComponent(t[3]) : null;
      },
      remove(e) {
        this.write(e, "", Date.now() - 864e5);
      }
    } : {
      write() {},
      read: () => null,
      remove() {}
    };
  function xe(e, t) {
    return e && !/^([a-z][a-z\d+\-.]*:)?\/\//i.test(t) ? function (e, t) {
      return t ? e.replace(/\/?\/$/, "") + "/" + t.replace(/^\/+/, "") : e;
    }(e, t) : t;
  }
  const Le = he.hasStandardBrowserEnv ? function () {
    const e = /(msie|trident)/i.test(navigator.userAgent),
      t = document.createElement("a");
    let n;
    function i(n) {
      let i = n;
      return e && (t.setAttribute("href", i), i = t.href), t.setAttribute("href", i), {
        href: t.href,
        protocol: t.protocol ? t.protocol.replace(/:$/, "") : "",
        host: t.host,
        search: t.search ? t.search.replace(/^\?/, "") : "",
        hash: t.hash ? t.hash.replace(/^#/, "") : "",
        hostname: t.hostname,
        port: t.port,
        pathname: "/" === t.pathname.charAt(0) ? t.pathname : "/" + t.pathname
      };
    }
    return n = i(window.location.href), function (e) {
      const t = H.isString(e) ? i(e) : e;
      return t.protocol === n.protocol && t.host === n.host;
    };
  }() : function () {
    return !0;
  };
  function je(e, t) {
    let n = 0;
    const i = function (e, t) {
      e = e || 10;
      const n = new Array(e),
        i = new Array(e);
      let s,
        r = 0,
        o = 0;
      return t = void 0 !== t ? t : 1e3, function (a) {
        const l = Date.now(),
          c = i[o];
        s || (s = l), n[r] = a, i[r] = l;
        let u = o,
          d = 0;
        for (; u !== r;) d += n[u++], u %= e;
        if (r = (r + 1) % e, r === o && (o = (o + 1) % e), l - s < t) return;
        const m = c && l - c;
        return m ? Math.round(1e3 * d / m) : void 0;
      };
    }(50, 250);
    return s => {
      const r = s.loaded,
        o = s.lengthComputable ? s.total : void 0,
        a = r - n,
        l = i(a);
      n = r;
      const c = {
        loaded: r,
        total: o,
        progress: o ? r / o : void 0,
        bytes: a,
        rate: l || void 0,
        estimated: l && o && r <= o ? (o - r) / l : void 0,
        event: s
      };
      c[t ? "download" : "upload"] = !0, e(c);
    };
  }
  const qe = {
    http: null,
    xhr: "undefined" != typeof XMLHttpRequest && function (e) {
      return new Promise(function (t, n) {
        let i = e.data;
        const s = Ce.from(e.headers).normalize();
        let r,
          o,
          {
            responseType: a,
            withXSRFToken: l
          } = e;
        function c() {
          e.cancelToken && e.cancelToken.unsubscribe(r), e.signal && e.signal.removeEventListener("abort", r);
        }
        if (H.isFormData(i)) if (he.hasStandardBrowserEnv || he.hasStandardBrowserWebWorkerEnv) s.setContentType(!1);else if (!1 !== (o = s.getContentType())) {
          const [e, ...t] = o ? o.split(";").map(e => e.trim()).filter(Boolean) : [];
          s.setContentType([e || "multipart/form-data", ...t].join("; "));
        }
        let u = new XMLHttpRequest();
        if (e.auth) {
          const t = e.auth.username || "",
            n = e.auth.password ? unescape(encodeURIComponent(e.auth.password)) : "";
          s.set("Authorization", "Basic " + btoa(t + ":" + n));
        }
        const d = xe(e.baseURL, e.url);
        function m() {
          if (!u) return;
          const i = Ce.from("getAllResponseHeaders" in u && u.getAllResponseHeaders());
          !function (e, t, n) {
            const i = n.config.validateStatus;
            n.status && i && !i(n.status) ? t(new Z("Request failed with status code " + n.status, [Z.ERR_BAD_REQUEST, Z.ERR_BAD_RESPONSE][Math.floor(n.status / 100) - 4], n.config, n.request, n)) : e(n);
          }(function (e) {
            t(e), c();
          }, function (e) {
            n(e), c();
          }, {
            data: a && "text" !== a && "json" !== a ? u.response : u.responseText,
            status: u.status,
            statusText: u.statusText,
            headers: i,
            config: e,
            request: u
          }), u = null;
        }
        if (u.open(e.method.toUpperCase(), oe(d, e.params, e.paramsSerializer), !0), u.timeout = e.timeout, "onloadend" in u ? u.onloadend = m : u.onreadystatechange = function () {
          u && 4 === u.readyState && (0 !== u.status || u.responseURL && 0 === u.responseURL.indexOf("file:")) && setTimeout(m);
        }, u.onabort = function () {
          u && (n(new Z("Request aborted", Z.ECONNABORTED, e, u)), u = null);
        }, u.onerror = function () {
          n(new Z("Network Error", Z.ERR_NETWORK, e, u)), u = null;
        }, u.ontimeout = function () {
          let t = e.timeout ? "timeout of " + e.timeout + "ms exceeded" : "timeout exceeded";
          const i = e.transitional || le;
          e.timeoutErrorMessage && (t = e.timeoutErrorMessage), n(new Z(t, i.clarifyTimeoutError ? Z.ETIMEDOUT : Z.ECONNABORTED, e, u)), u = null;
        }, he.hasStandardBrowserEnv && (l && H.isFunction(l) && (l = l(e)), l || !1 !== l && Le(d))) {
          const t = e.xsrfHeaderName && e.xsrfCookieName && Ne.read(e.xsrfCookieName);
          t && s.set(e.xsrfHeaderName, t);
        }
        void 0 === i && s.setContentType(null), "setRequestHeader" in u && H.forEach(s.toJSON(), function (e, t) {
          u.setRequestHeader(t, e);
        }), H.isUndefined(e.withCredentials) || (u.withCredentials = !!e.withCredentials), a && "json" !== a && (u.responseType = e.responseType), "function" == typeof e.onDownloadProgress && u.addEventListener("progress", je(e.onDownloadProgress, !0)), "function" == typeof e.onUploadProgress && u.upload && u.upload.addEventListener("progress", je(e.onUploadProgress)), (e.cancelToken || e.signal) && (r = t => {
          u && (n(!t || t.type ? new ke(null, e, u) : t), u.abort(), u = null);
        }, e.cancelToken && e.cancelToken.subscribe(r), e.signal && (e.signal.aborted ? r() : e.signal.addEventListener("abort", r)));
        const f = function (e) {
          const t = /^([-+\w]{1,25})(:?\/\/|:)/.exec(e);
          return t && t[1] || "";
        }(d);
        f && -1 === he.protocols.indexOf(f) ? n(new Z("Unsupported protocol " + f + ":", Z.ERR_BAD_REQUEST, e)) : u.send(i || null);
      });
    }
  };
  H.forEach(qe, (e, t) => {
    if (e) {
      try {
        Object.defineProperty(e, "name", {
          value: t
        });
      } catch (e) {}
      Object.defineProperty(e, "adapterName", {
        value: t
      });
    }
  });
  const Me = e => `- ${e}`,
    De = e => H.isFunction(e) || null === e || !1 === e,
    _e = e => {
      e = H.isArray(e) ? e : [e];
      const {
        length: t
      } = e;
      let n, i;
      const s = {};
      for (let r = 0; r < t; r++) {
        let t;
        if (n = e[r], i = n, !De(n) && (i = qe[(t = String(n)).toLowerCase()], void 0 === i)) throw new Z(`Unknown adapter '${t}'`);
        if (i) break;
        s[t || "#" + r] = i;
      }
      if (!i) {
        const e = Object.entries(s).map(([e, t]) => `adapter ${e} ` + (!1 === t ? "is not supported by the environment" : "is not available in the build"));
        let n = t ? e.length > 1 ? "since :\n" + e.map(Me).join("\n") : " " + Me(e[0]) : "as no adapter specified";
        throw new Z("There is no suitable adapter to dispatch the request " + n, "ERR_NOT_SUPPORT");
      }
      return i;
    };
  function Be(e) {
    if (e.cancelToken && e.cancelToken.throwIfRequested(), e.signal && e.signal.aborted) throw new ke(null, e);
  }
  function Pe(e) {
    return Be(e), e.headers = Ce.from(e.headers), e.data = Te.call(e, e.transformRequest), -1 !== ["post", "put", "patch"].indexOf(e.method) && e.headers.setContentType("application/x-www-form-urlencoded", !1), _e(e.adapter || ye.adapter)(e).then(function (t) {
      return Be(e), t.data = Te.call(e, e.transformResponse, t), t.headers = Ce.from(t.headers), t;
    }, function (t) {
      return Oe(t) || (Be(e), t && t.response && (t.response.data = Te.call(e, e.transformResponse, t.response), t.response.headers = Ce.from(t.response.headers))), Promise.reject(t);
    });
  }
  const ze = e => e instanceof Ce ? {
    ...e
  } : e;
  function Re(e, t) {
    t = t || {};
    const n = {};
    function i(e, t, n) {
      return H.isPlainObject(e) && H.isPlainObject(t) ? H.merge.call({
        caseless: n
      }, e, t) : H.isPlainObject(t) ? H.merge({}, t) : H.isArray(t) ? t.slice() : t;
    }
    function s(e, t, n) {
      return H.isUndefined(t) ? H.isUndefined(e) ? void 0 : i(void 0, e, n) : i(e, t, n);
    }
    function r(e, t) {
      if (!H.isUndefined(t)) return i(void 0, t);
    }
    function o(e, t) {
      return H.isUndefined(t) ? H.isUndefined(e) ? void 0 : i(void 0, e) : i(void 0, t);
    }
    function a(n, s, r) {
      return r in t ? i(n, s) : r in e ? i(void 0, n) : void 0;
    }
    const l = {
      url: r,
      method: r,
      data: r,
      baseURL: o,
      transformRequest: o,
      transformResponse: o,
      paramsSerializer: o,
      timeout: o,
      timeoutMessage: o,
      withCredentials: o,
      withXSRFToken: o,
      adapter: o,
      responseType: o,
      xsrfCookieName: o,
      xsrfHeaderName: o,
      onUploadProgress: o,
      onDownloadProgress: o,
      decompress: o,
      maxContentLength: o,
      maxBodyLength: o,
      beforeRedirect: o,
      transport: o,
      httpAgent: o,
      httpsAgent: o,
      cancelToken: o,
      socketPath: o,
      responseEncoding: o,
      validateStatus: a,
      headers: (e, t) => s(ze(e), ze(t), !0)
    };
    return H.forEach(Object.keys(Object.assign({}, e, t)), function (i) {
      const r = l[i] || s,
        o = r(e[i], t[i], i);
      H.isUndefined(o) && r !== a || (n[i] = o);
    }), n;
  }
  const Fe = {};
  ["object", "boolean", "number", "function", "string", "symbol"].forEach((e, t) => {
    Fe[e] = function (n) {
      return typeof n === e || "a" + (t < 1 ? "n " : " ") + e;
    };
  });
  const Ve = {};
  Fe.transitional = function (e, t, n) {
    function i(e, t) {
      return "[Axios v1.6.8] Transitional option '" + e + "'" + t + (n ? ". " + n : "");
    }
    return (n, s, r) => {
      if (!1 === e) throw new Z(i(s, " has been removed" + (t ? " in " + t : "")), Z.ERR_DEPRECATED);
      return t && !Ve[s] && (Ve[s] = !0, console.warn(i(s, " has been deprecated since v" + t + " and will be removed in the near future"))), !e || e(n, s, r);
    };
  };
  const $e = {
      assertOptions: function (e, t, n) {
        if ("object" != typeof e) throw new Z("options must be an object", Z.ERR_BAD_OPTION_VALUE);
        const i = Object.keys(e);
        let s = i.length;
        for (; s-- > 0;) {
          const r = i[s],
            o = t[r];
          if (o) {
            const t = e[r],
              n = void 0 === t || o(t, r, e);
            if (!0 !== n) throw new Z("option " + r + " must be " + n, Z.ERR_BAD_OPTION_VALUE);
          } else if (!0 !== n) throw new Z("Unknown option " + r, Z.ERR_BAD_OPTION);
        }
      },
      validators: Fe
    },
    Ue = $e.validators;
  class He {
    constructor(e) {
      this.defaults = e, this.interceptors = {
        request: new ae(),
        response: new ae()
      };
    }
    async request(e, t) {
      try {
        return await this._request(e, t);
      } catch (e) {
        if (e instanceof Error) {
          let t;
          Error.captureStackTrace ? Error.captureStackTrace(t = {}) : t = new Error();
          const n = t.stack ? t.stack.replace(/^.+\n/, "") : "";
          e.stack ? n && !String(e.stack).endsWith(n.replace(/^.+\n.+\n/, "")) && (e.stack += "\n" + n) : e.stack = n;
        }
        throw e;
      }
    }
    _request(e, t) {
      "string" == typeof e ? (t = t || {}).url = e : t = e || {}, t = Re(this.defaults, t);
      const {
        transitional: n,
        paramsSerializer: i,
        headers: s
      } = t;
      void 0 !== n && $e.assertOptions(n, {
        silentJSONParsing: Ue.transitional(Ue.boolean),
        forcedJSONParsing: Ue.transitional(Ue.boolean),
        clarifyTimeoutError: Ue.transitional(Ue.boolean)
      }, !1), null != i && (H.isFunction(i) ? t.paramsSerializer = {
        serialize: i
      } : $e.assertOptions(i, {
        encode: Ue.function,
        serialize: Ue.function
      }, !0)), t.method = (t.method || this.defaults.method || "get").toLowerCase();
      let r = s && H.merge(s.common, s[t.method]);
      s && H.forEach(["delete", "get", "head", "post", "put", "patch", "common"], e => {
        delete s[e];
      }), t.headers = Ce.concat(r, s);
      const o = [];
      let a = !0;
      this.interceptors.request.forEach(function (e) {
        "function" == typeof e.runWhen && !1 === e.runWhen(t) || (a = a && e.synchronous, o.unshift(e.fulfilled, e.rejected));
      });
      const l = [];
      let c;
      this.interceptors.response.forEach(function (e) {
        l.push(e.fulfilled, e.rejected);
      });
      let u,
        d = 0;
      if (!a) {
        const e = [Pe.bind(this), void 0];
        for (e.unshift.apply(e, o), e.push.apply(e, l), u = e.length, c = Promise.resolve(t); d < u;) c = c.then(e[d++], e[d++]);
        return c;
      }
      u = o.length;
      let m = t;
      for (d = 0; d < u;) {
        const e = o[d++],
          t = o[d++];
        try {
          m = e(m);
        } catch (e) {
          t.call(this, e);
          break;
        }
      }
      try {
        c = Pe.call(this, m);
      } catch (e) {
        return Promise.reject(e);
      }
      for (d = 0, u = l.length; d < u;) c = c.then(l[d++], l[d++]);
      return c;
    }
    getUri(e) {
      return oe(xe((e = Re(this.defaults, e)).baseURL, e.url), e.params, e.paramsSerializer);
    }
  }
  H.forEach(["delete", "get", "head", "options"], function (e) {
    He.prototype[e] = function (t, n) {
      return this.request(Re(n || {}, {
        method: e,
        url: t,
        data: (n || {}).data
      }));
    };
  }), H.forEach(["post", "put", "patch"], function (e) {
    function t(t) {
      return function (n, i, s) {
        return this.request(Re(s || {}, {
          method: e,
          headers: t ? {
            "Content-Type": "multipart/form-data"
          } : {},
          url: n,
          data: i
        }));
      };
    }
    He.prototype[e] = t(), He.prototype[e + "Form"] = t(!0);
  });
  const Je = He;
  class Ke {
    constructor(e) {
      if ("function" != typeof e) throw new TypeError("executor must be a function.");
      let t;
      this.promise = new Promise(function (e) {
        t = e;
      });
      const n = this;
      this.promise.then(e => {
        if (!n._listeners) return;
        let t = n._listeners.length;
        for (; t-- > 0;) n._listeners[t](e);
        n._listeners = null;
      }), this.promise.then = e => {
        let t;
        const i = new Promise(e => {
          n.subscribe(e), t = e;
        }).then(e);
        return i.cancel = function () {
          n.unsubscribe(t);
        }, i;
      }, e(function (e, i, s) {
        n.reason || (n.reason = new ke(e, i, s), t(n.reason));
      });
    }
    throwIfRequested() {
      if (this.reason) throw this.reason;
    }
    subscribe(e) {
      this.reason ? e(this.reason) : this._listeners ? this._listeners.push(e) : this._listeners = [e];
    }
    unsubscribe(e) {
      if (!this._listeners) return;
      const t = this._listeners.indexOf(e);
      -1 !== t && this._listeners.splice(t, 1);
    }
    static source() {
      let e;
      return {
        token: new Ke(function (t) {
          e = t;
        }),
        cancel: e
      };
    }
  }
  const Ge = Ke,
    Ze = {
      Continue: 100,
      SwitchingProtocols: 101,
      Processing: 102,
      EarlyHints: 103,
      Ok: 200,
      Created: 201,
      Accepted: 202,
      NonAuthoritativeInformation: 203,
      NoContent: 204,
      ResetContent: 205,
      PartialContent: 206,
      MultiStatus: 207,
      AlreadyReported: 208,
      ImUsed: 226,
      MultipleChoices: 300,
      MovedPermanently: 301,
      Found: 302,
      SeeOther: 303,
      NotModified: 304,
      UseProxy: 305,
      Unused: 306,
      TemporaryRedirect: 307,
      PermanentRedirect: 308,
      BadRequest: 400,
      Unauthorized: 401,
      PaymentRequired: 402,
      Forbidden: 403,
      NotFound: 404,
      MethodNotAllowed: 405,
      NotAcceptable: 406,
      ProxyAuthenticationRequired: 407,
      RequestTimeout: 408,
      Conflict: 409,
      Gone: 410,
      LengthRequired: 411,
      PreconditionFailed: 412,
      PayloadTooLarge: 413,
      UriTooLong: 414,
      UnsupportedMediaType: 415,
      RangeNotSatisfiable: 416,
      ExpectationFailed: 417,
      ImATeapot: 418,
      MisdirectedRequest: 421,
      UnprocessableEntity: 422,
      Locked: 423,
      FailedDependency: 424,
      TooEarly: 425,
      UpgradeRequired: 426,
      PreconditionRequired: 428,
      TooManyRequests: 429,
      RequestHeaderFieldsTooLarge: 431,
      UnavailableForLegalReasons: 451,
      InternalServerError: 500,
      NotImplemented: 501,
      BadGateway: 502,
      ServiceUnavailable: 503,
      GatewayTimeout: 504,
      HttpVersionNotSupported: 505,
      VariantAlsoNegotiates: 506,
      InsufficientStorage: 507,
      LoopDetected: 508,
      NotExtended: 510,
      NetworkAuthenticationRequired: 511
    };
  Object.entries(Ze).forEach(([e, t]) => {
    Ze[t] = e;
  });
  const We = Ze,
    Xe = function e(t) {
      const n = new Je(t),
        i = c(Je.prototype.request, n);
      return H.extend(i, Je.prototype, n, {
        allOwnKeys: !0
      }), H.extend(i, n, null, {
        allOwnKeys: !0
      }), i.create = function (n) {
        return e(Re(t, n));
      }, i;
    }(ye);
  Xe.Axios = Je, Xe.CanceledError = ke, Xe.CancelToken = Ge, Xe.isCancel = Oe, Xe.VERSION = "1.6.8", Xe.toFormData = ee, Xe.AxiosError = Z, Xe.Cancel = Xe.CanceledError, Xe.all = function (e) {
    return Promise.all(e);
  }, Xe.spread = function (e) {
    return function (t) {
      return e.apply(null, t);
    };
  }, Xe.isAxiosError = function (e) {
    return H.isObject(e) && !0 === e.isAxiosError;
  }, Xe.mergeConfig = Re, Xe.AxiosHeaders = Ce, Xe.formToJSON = e => pe(H.isHTMLForm(e) ? new FormData(e) : e), Xe.getAdapter = _e, Xe.HttpStatusCode = We, Xe.default = Xe;
  const Qe = Xe,
    Ye = function (e) {
      return new Promise(t => setTimeout(t, e));
    },
    et = function (e) {
      return e.charAt(0).toUpperCase() + e.slice(1);
    },
    tt = function (e) {
      return `a${et(e)}`;
    },
    nt = async function (e, t, n = !0, i) {
      var s;
      const r = function (e, t) {
          var n, i;
          const s = tt(e);
          return t.getItem(s) && JSON.parse(null !== (n = t.getItem(`a${et(e)}`)) && void 0 !== n ? n : "{}").lastUpdate > new Date().getTime() - 3e5 ? "up-to-date" : JSON.parse(null !== (i = t.getItem(s)) && void 0 !== i ? i : "{}").lastUpdate < new Date().getTime() - 3e5 ? "outdated" : "non-existent";
        }(e, t),
        o = tt(e);
      if ("up-to-date" === r && n) return JSON.parse(null !== (s = t.getItem(o)) && void 0 !== s ? s : "{}").value;
      let a;
      try {
        a = await Qe({
          method: "get",
          url: e,
          params: i,
          baseURL: "https://rettungssimulator.online/api/"
        });
      } catch (e) {
        return void console.error(e);
      }
      if (a.status >= 400) throw new Error(`Request failed with statuscode ${a.status}. Message: ${a.data}`);
      return t.setItem(o, JSON.stringify({
        lastUpdate: new Date().getTime(),
        value: a.data
      })), a.data;
    },
    it = async function (e, t) {
      const n = new FormData();
      for (const [e, i] of Object.entries(t)) n.append(e, i);
      return await (await Qe({
        method: "post",
        url: e,
        data: n,
        baseURL: "https://rettungssimulator.online/api/",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8"
        }
      })).data;
    },
    st = async function () {
      if (localStorage.getItem("alarmfaxInfo") || localStorage.setItem("alarmfaxInfo", JSON.stringify({})), localStorage.getItem("alarmfaxInfoMissionStatus") || localStorage.setItem("alarmfaxInfoMissionStatus", JSON.stringify({})), !sessionStorage.getItem("alarmfaxInfoBuildingData")) {
        const e = await nt("userBuildings", sessionStorage),
          t = {};
        e.forEach(e => {
          t[e.userBuildingID] = e.userBuildingName;
        }), sessionStorage.setItem("alarmfaxInfoBuildingData", JSON.stringify(t));
      }
      const e = function () {
        var e;
        if (null === document.querySelector("#alarmfax-card")) {
          const e = document.createElement("div");
          e.classList.add("card", "alarmfax"), e.id = "alarmfax-card";
          const t = document.createElement("div");
          t.classList.add("card-headline", "card-headline-danger"), t.innerText = "Alarmfax", e.appendChild(t);
          const n = document.createElement("div");
          n.classList.add("card-body");
          const i = document.createElement("table"),
            s = document.createElement("tbody");
          i.appendChild(s), n.appendChild(i), e.appendChild(n);
          const r = document.querySelector("div.alarmed-vehicles");
          if (null === r) return void a(Object.keys({
            insertArea: r
          })[0], "alarmfax");
          r.insertBefore(e, r.firstChild);
        }
        const t = document.querySelector("#alarmfax-card .card-body table tbody");
        if (null === t) return void a(Object.keys({
          alarmfaxCardBody: t
        })[0], "alarmfax");
        let n = "<tr><th>Funkrufname</th><th>Wache</th><th>Alarmzeit</th></tr>";
        const i = JSON.parse(null !== (e = localStorage.getItem("alarmfaxInfo")) && void 0 !== e ? e : "{}"),
          s = window.location.href.split("/").at(-1);
        if (void 0 !== s) {
          for (const e in i[s]) n += `<tr><td>${i[s][e].vehicleName}</td><td>${i[s][e].userBuildingName}</td><td>${i[s][e].alarmTime}</td></tr>`;
          window.location.href.includes("/mission") && (t.innerHTML = n);
        } else l(Object.keys({
          userMissionId: s
        })[0], "alarmfax");
      };
      let t = setInterval(() => {
        "undefined" != typeof socket && (socket.on("vehicleFMS", async t => {
          3 === t.userVehicleFMS ? await async function (t) {
            var n, i;
            const s = t.userMissionID,
              r = t.userVehicleID,
              o = t.userVehicleName,
              a = t.userDepartmentID,
              l = JSON.parse(null !== (n = sessionStorage.getItem("alarmfaxInfoBuildingData")) && void 0 !== n ? n : "{}")[a],
              c = new Date(),
              u = `${c.getHours()}:${c.getMinutes()}:${c.getSeconds()}`,
              d = JSON.parse(null !== (i = localStorage.getItem("alarmfaxInfo")) && void 0 !== i ? i : "{}");
            Object.keys(d).includes(s.toString()) ? Object.keys(d[s]).includes(r.toString()) && (d[s][r] = {
              userMissionId: s,
              vehicleName: o,
              alarmTime: u,
              userBuildingName: l
            }, localStorage.setItem("alarmfaxInfo", JSON.stringify(d))) : (d[s] = {}, d[s][r] = {
              userMissionId: s,
              vehicleName: o,
              alarmTime: u,
              userBuildingName: l
            }, localStorage.setItem("alarmfaxInfo", JSON.stringify(d))), e();
          }(t) : 1 === t.userVehicleFMS && function (t) {
            var n;
            const i = t.userMissionID,
              s = t.userVehicleID,
              r = JSON.parse(null !== (n = localStorage.getItem("alarmfaxInfo")) && void 0 !== n ? n : "{}");
            void 0 !== r[i] && r[i][s] && (delete r[i][s], localStorage.setItem("alarmfaxInfo", JSON.stringify(r)), e());
          }(t);
        }), null !== t && (clearInterval(t), t = null)), setTimeout(() => {
          null !== t && (clearInterval(t), t = null);
        }, 5e3);
      }, 1e3);
      e();
    },
    rt = async function () {
      const e = document.querySelector("div#missions-container-shared");
      null !== e ? new MutationObserver(e => {
        e.forEach(e => {
          "missions-container-shared" === e.target.id && "childList" === e.type && e.addedNodes.forEach(e => {
            var t;
            const n = null === (t = null == e ? void 0 : e.nextElementSibling) || void 0 === t ? void 0 : t.getAttribute("usermissionid");
            null != n ? setTimeout(() => {
              const e = ControlCenter.missions[n];
              GrowlNotification.notify({
                title: `<div class="frame-opener" frame="1/1/4/5" frame-url="/mission/${n}">Neuer Einsatz freigegeben</div>`,
                description: `<div class="frame-opener" frame="1/1/4/5" frame-url="/mission/${n}">Einsatz ${e.missionName} wurde von ${e.userName} freigegeben.</div>`,
                type: "info",
                position: "top-left",
                closeTimeout: 1e4,
                showProgress: !0
              });
            }, 1e3) : a(Object.keys({
              missionId: n
            })[0], "alertMissionShare");
          });
        });
      }).observe(e, {
        childList: !0
      }) : a(Object.keys({
        missionsContainer: e
      })[0], "alertMissionShare");
    },
    ot = async function () {
      var e;
      let t;
      localStorage.getItem("autoCollapseBuildingsBuildingTypes") ? t = JSON.parse(null !== (e = localStorage.getItem("autoCollapseBuildingsBuildingTypes")) && void 0 !== e ? e : "[]") : (t = (await nt("buildings", localStorage)).map(e => e.buildingID), localStorage.setItem("autoCollapseBuildingsBuildingTypes", JSON.stringify(t)));
      for (const e of t) document.querySelectorAll(`#departments .card[buildingtype='${e}']`).forEach(e => {
        e.classList.add("collapsed");
      });
    },
    at = async function () {
      var e, t, n, i, s, r, o, a, l, c, u, d, m, f;
      const h = await nt("userBuildings", localStorage, !1),
        p = parseInt(null !== (t = null === (e = document.querySelector("[userdepartmentid]")) || void 0 === e ? void 0 : e.getAttribute("userdepartmentid")) && void 0 !== t ? t : "0");
      if (8 !== (null === (n = h.find(e => e.userBuildingID === p)) || void 0 === n ? void 0 : n.buildingType)) return;
      const g = await nt("userVehicles", sessionStorage, !1),
        y = await nt("vehicleCategories", localStorage),
        b = await nt("missions", localStorage),
        v = h.filter(e => e.assignedControlCenterID === p).map(e => e.userBuildingID),
        S = g.filter(e => v.includes(e.userBuildingID) && 6 !== e.fms),
        w = {};
      Object.values(y).filter(e => e.ids.length > 0).forEach(e => {
        w[e.shortName] = 0;
      });
      for (let e = 0; e < S.length; e++) {
        const t = S[e].vehicleID,
          n = Object.values(y).find(e => e.ids.includes(t));
        w[null !== (i = null == n ? void 0 : n.shortName) && void 0 !== i ? i : ""] = w[null !== (s = null == n ? void 0 : n.shortName) && void 0 !== s ? s : ""] ? w[null !== (r = null == n ? void 0 : n.shortName) && void 0 !== r ? r : ""] + 1 : 1;
      }
      const E = {};
      for (const [e, t] of Object.entries(w)) {
        const n = Object.values(y).filter(t => t.roles.includes(e.toLowerCase()));
        for (let e = 0; e < n.length; e++) E[null !== (a = null === (o = n[e]) || void 0 === o ? void 0 : o.shortName) && void 0 !== a ? a : ""] = E[null !== (c = null === (l = n[e]) || void 0 === l ? void 0 : l.shortName) && void 0 !== c ? c : ""] ? E[null !== (d = null === (u = n[e]) || void 0 === u ? void 0 : u.shortName) && void 0 !== d ? d : ""] + t : t;
      }
      for (const [e, t] of Object.entries(y)) for (const n of t.roles) void 0 === w[n] && (E[e] = E[e] ? null !== (m = E[e] + E[n]) && void 0 !== m ? m : 0 : E[n]);
      for (const [e, t] of Object.entries(w)) E[e] = t;
      const A = [],
        C = Object.values(b);
      for (let e = 0; e < C.length; e++) {
        const t = C[e];
        if (void 0 !== t.patients) {
          let e = !1;
          if ((t.patients.max > E.rtw || (null !== (f = t.patients.naChance) && void 0 !== f ? f : 0) > 24 && 0 === E.nef) && (A.push(t), e = !0), e) continue;
        }
        for (const [e, n] of Object.entries(t.neededVehicles)) if (E[e] < n || void 0 === E[e]) {
          A.push(t);
          break;
        }
      }
      const T = Object.values(b).filter(e => !A.map(e => e.name).includes(e.name)),
        O = {};
      T.forEach(e => {
        O[e.id] = {
          generatable: !0,
          id: e.id
        };
      }), A.forEach(e => {
        O[e.id] = {
          generatable: !1,
          id: e.id
        };
      });
      const I = document.querySelector("div.tabs"),
        k = document.createElement("div");
      k.classList.add("tab"), k.setAttribute("for", "generatableMissions");
      const N = document.createElement("i");
      N.classList.add("fa-solid", "fa-list", "tab-icon"), k.insertAdjacentElement("afterbegin", N), k.innerHTML += "Einsatzliste", null == I || I.insertAdjacentElement("beforeend", k);
      const x = document.querySelector("div.tab-container"),
        L = {
          1: "Halloween",
          2: "Weihnachten (fiktiv)",
          3: "Winter",
          4: "Silvester",
          5: "Noch nicht verfÃ¼gbar",
          6: "Sommer",
          7: "Ostern",
          8: "Weihnachten (real)"
        },
        j = `<div id ="tab_generatableMissions" class="tab-content">\n    <div class="tab-headline">Einsatzliste</div>\n    <table class="stripped table-divider">\n      <thead>\n        <tr>\n          <th></th>\n          <th>Einsatzname</th>\n          <th>VergÃ¼tung in MÃ¼nzen</th>\n          <th></th>\n          <th>Event</th>\n          <th></th>\n        </tr>\n      </thead>\n      <tbody>\n        ${(() => {
          let e = "";
          for (const t of Object.values(O)) {
            const n = b[t.id];
            e += `\n            <tr>\n              <td name="icon"><img src="images/marker/missions/${n.icon}_0.svg" class="mission-icon-transform" height="39"></td>\n              <td name="name"><a href="missionOverview/${n.id}" target="_blank">${n.name}</a></td>\n              <td name="name"><a href="missionOverview/${n.id}" target="_blank">${Intl.NumberFormat("de-de").format(n.credits)}</a></td>\n              <td><span class="status ${t.generatable ? "s2" : "s4"}">Voraussetzungen ${t.generatable ? "" : "nicht"} erfÃ¼llt</span></td>\n            <td name="event">${n.event ? L[n.event] : "-"}</td>\n            <td name="name"><a href="missionOverview/${n.id}" target="_blank">Mehr anzeigen</a></td>\n            </tr>`;
          }
          return e;
        })()}\n      </tbody>\n    </table>\n  </div>`;
      null == x || x.insertAdjacentHTML("afterbegin", j);
    },
    lt = async function () {
      const e = "true" === localStorage.getItem("shortText"),
        t = function () {
          return parseInt(localStorage.currentPatients);
        },
        n = async function () {
          const n = document.querySelector("#currentPatients");
          if (null === n) return void a(Object.keys({
            currentPatientContainer: n
          })[0], "countPatients");
          const s = document.querySelector("#patientWord");
          if (null === s) return void a(Object.keys({
            patientWordContainer: s
          })[0], "countPatients");
          const r = document.querySelector("#totalPatients");
          null !== r ? ((isNaN(t()) || t() < 0) && (await i()), n.innerText = t().toString(), s.innerText = e ? "" : 1 === t() ? "Patient" : "Patienten", r.innerText = function () {
            const e = document.querySelectorAll("div.card-body div.vehicle.hospital-capacity div.vehicle-name");
            let t = 0;
            return e.forEach(e => {
              var n;
              let i = null === (n = e.textContent) || void 0 === n ? void 0 : n.split("/")[1];
              void 0 !== i ? (i = i.replace(/['a-zA-Z ']/g, ""), t += parseInt(i)) : l(Object.keys({
                text: i
              })[0], "countPatients");
            }), t;
          }().toString()) : a(Object.keys({
            totalPatientContainer: r
          })[0], "countPatients");
        },
        i = async function () {
          const e = document.querySelectorAll(".currentpatients");
          if (null === e) return void a(Object.keys({
            allPatientSlots: e
          })[0], "countPatients");
          let t = 0;
          e.forEach(e => {
            t += parseInt(e.innerText);
          }), localStorage.currentPatients = t.toString();
        };
      socket.on("patientStatus", async () => {
        await i(), await n();
      }), await async function () {
        await i(), await async function () {
          const t = document.querySelector("div.muenzen_marken");
          if (null === t) return void a(Object.keys({
            parent: t
          })[0], "countPatients");
          t.innerHTML += " | ";
          const i = document.createElement("span");
          i.id = "currentPatients";
          const s = document.createElement("span");
          s.id = "patientWord";
          const r = document.createElement("span");
          r.id = "totalPatients", e ? (t.appendChild(i), t.appendChild(s), t.insertAdjacentText("beforeend", "/"), t.appendChild(r), t.insertAdjacentHTML("beforeend", ' <i class="fas fa-bed"></i>')) : (t.appendChild(i), t.insertAdjacentText("beforeend", " "), t.appendChild(s), t.insertAdjacentText("beforeend", " bei "), t.appendChild(r), t.insertAdjacentText("beforeend", " Betten")), await n();
        }();
      }();
    },
    ct = async function () {
      !function () {
        const e = document.createElement("div"),
          t = document.querySelector("div.detail-header div.detail-subtitle");
        null !== t ? (t.style.display = "flex", t.style.justifyContent = "space-between", t.style.alignItems = "end", e.style.fontWeight = "500", e.innerHTML = `<b>${document.querySelectorAll("td span.status.s2").length}</b> von <b>${document.querySelectorAll("td span.status").length}</b>  EinsÃ¤tzen verfÃ¼gbar`, e.classList.add("status", "s1"), t.appendChild(e)) : a(Object.keys({
          parentContainer: t
        })[0], "countPossibleMissions");
      }();
    },
    ut = async function () {
      let e = {
        1: {
          count: 0,
          userVehicleIDs: []
        },
        2: {
          count: 0,
          userVehicleIDs: []
        },
        3: {
          count: 0,
          userVehicleIDs: []
        },
        4: {
          count: 0,
          userVehicleIDs: []
        },
        5: {
          count: 0,
          userVehicleIDs: []
        },
        6: {
          count: 0,
          userVehicleIDs: []
        },
        7: {
          count: 0,
          userVehicleIDs: []
        },
        8: {
          count: 0,
          userVehicleIDs: []
        }
      };
      const t = async function () {
          (await nt("userVehicles", sessionStorage, !1)).forEach(t => {
            e[t.fms].count++, e[t.fms].userVehicleIDs.push(t.userVehicleID);
          });
        },
        n = function () {
          const t = document.querySelector("div#radio div.panel-headline");
          if (null === t) return void a(Object.keys({
            parent: t
          })[0], "countVehicleStatus.ts");
          t.style.display = "flex";
          const n = document.createElement("div");
          n.id = "vehicleStatusCountContainer", n.classList.add("vehicle"), n.style.display = "flex", n.style.justifyContent = "space-evenly", n.style.alignItems = "center", n.style.width = "100%", n.style.fontSize = "1rem", n.style.margin = "0";
          for (const t of Object.keys(e)) {
            const e = document.createElement("div");
            e.classList.add("vehicle-status", `s${[5].includes(parseInt(t)) ? "1" : t}`), e.id = `vehicleStatusCountStatus${t}`, e.setAttribute("data-tooltip", `Status: ${t}`), e.style.cursor = "default", n.insertAdjacentElement("beforeend", e);
          }
          t.insertAdjacentElement("beforeend", n);
        },
        i = function () {
          let t = document.querySelector("#vehicleStatusCountContainer");
          if (null !== t || (n(), t = document.querySelector("#vehicleStatusCountContainer"), null !== t)) for (const t of Object.keys(e)) {
            const n = document.querySelector(`#vehicleStatusCountStatus${t}`);
            if (null === n) return void a(Object.keys({
              statusContainer: n
            })[0], "countVehicleStatus.ts");
            n.textContent = e[parseInt(t)].count.toString();
          }
        };
      await t(), n(), i(), socket.on("vehicleFMS", t => {
        if (t.userName === ReSi.userName) {
          for (let n = 1; n <= 8; n++) if (e[n].userVehicleIDs.includes(t.userVehicleID)) {
            const i = e[n].userVehicleIDs.indexOf(t.userVehicleID);
            e[n].userVehicleIDs.splice(i, 1), e[n].count--;
            break;
          }
          e[t.userVehicleFMS].userVehicleIDs.push(t.userVehicleID), e[t.userVehicleFMS].count++, i();
        }
      }), socket.on("vehicleFMSGrouped", t => {
        t.forEach(t => {
          if (t.userName === ReSi.userName) {
            for (let n = 1; n <= 8; n++) if (e[n].userVehicleIDs.includes(t.userVehicleID)) {
              const i = e[n].userVehicleIDs.indexOf(t.userVehicleID);
              e[n].userVehicleIDs.splice(i, 1), e[n].count--;
              break;
            }
            e[t.userVehicleFMS].userVehicleIDs.push(t.userVehicleID), e[t.userVehicleFMS].count++, i();
          }
        });
      }), socket.on("vehicleBuy", t => {
        e[2].count++, e[2].userVehicleIDs.push(t.userVehicleID), i();
      }), socket.on("vehicleDelete", () => {
        e = {
          1: {
            count: 0,
            userVehicleIDs: []
          },
          2: {
            count: 0,
            userVehicleIDs: []
          },
          3: {
            count: 0,
            userVehicleIDs: []
          },
          4: {
            count: 0,
            userVehicleIDs: []
          },
          5: {
            count: 0,
            userVehicleIDs: []
          },
          6: {
            count: 0,
            userVehicleIDs: []
          },
          7: {
            count: 0,
            userVehicleIDs: []
          },
          8: {
            count: 0,
            userVehicleIDs: []
          }
        }, t(), i();
      });
    },
    dt = async function () {
      let e = {};
      const t = await nt("buildings", localStorage);
      localStorage.getItem("customBuildingIconsConfig") || (t.forEach(t => {
        e[t.buildingName] = "null";
      }), localStorage.setItem("customBuildingIconsConfig", JSON.stringify(e)));
      const n = function (e) {
        var t, n;
        if (!localStorage.getItem("customBuildingIconsConfig")) return localStorage.setItem("customBuildingIconsConfig", JSON.stringify(e)), e;
        if (JSON.parse(null !== (t = localStorage.getItem("customBuildingIconsConfig")) && void 0 !== t ? t : "{}") !== e) {
          for (const t in e) if ("null" !== e[t]) return localStorage.setItem("customBuildingIconsConfig", JSON.stringify(e)), e;
          return JSON.parse(null !== (n = localStorage.getItem("customBuildingIconsConfig")) && void 0 !== n ? n : "{}");
        }
        return null;
      }(e);
      null !== n && (e = n, await async function () {
        const t = document.querySelectorAll("img"),
          n = await nt("buildings", localStorage);
        for (const i in t) {
          const s = t[i],
            r = s.src;
          for (let t = 0; t < n.length; t++) r === `https://rettungssimulator.online/images/marker/departments/${n[t].markerName}.png` && void 0 !== e[n[t].buildingName] && (s.src = e[n[t].buildingName], s.style.width = "auto", s.style.height = "auto");
        }
      }());
    },
    mt = async function () {
      const e = function () {
        if ("undefined" == typeof L || "undefined" == typeof mymap) return;
        const e = localStorage.getItem("customMapZoomNorth"),
          t = localStorage.getItem("customMapZoomEast"),
          n = localStorage.getItem("customMapZoomSouth"),
          i = localStorage.getItem("customMapZoomWest");
        if (null === e) return void a(Object.keys({
          northernCoordinate: e
        })[0], "customMapZoom");
        if (null === t) return void a(Object.keys({
          easternCoordinate: t
        })[0], "customMapZoom");
        if (null === n) return void a(Object.keys({
          southernCoordinate: n
        })[0], "customMapZoom");
        if (null === i) return void a(Object.keys({
          westernCoordinate: i
        })[0], "customMapZoom");
        const s = parseFloat(e),
          r = parseFloat(t),
          o = parseFloat(n),
          l = parseFloat(i),
          c = L.latLng(s, r),
          u = L.latLng(o, l);
        mymap.fitBounds(L.latLngBounds(u, c), {
          padding: [20, 20],
          maxZoom: 14
        });
      };
      e();
      const t = document.querySelector("a#mapCenter");
      null !== t && t.addEventListener("click", e);
    },
    ft = async function () {
      let e = [];
      const t = function (t = "fire") {
        for (const n in e) {
          const i = document.querySelectorAll(`img[src='images/marker/missions/${e[n].name}_1.svg']`),
            s = document.querySelectorAll(`img[src='images/marker/missions/${e[n].name}_2.svg']`),
            r = document.querySelectorAll(`img[src='images/marker/missions/${e[n].name}_3.svg']`);
          for (const s in i) i[s].src === `https://rettungssimulator.online/images/marker/missions/${t}_1.svg` && (i[s].src = `${e[n][1]}`);
          for (const i in s) s[i].src === `https://rettungssimulator.online/images/marker/missions/${t}_2.svg` && (s[i].src = `${e[n][2]}`);
          for (const i in r) r[i].src === `https://rettungssimulator.online/images/marker/missions/${t}_3.svg` && (r[i].src = `${e[n][3]}`);
        }
      };
      "undefined" != typeof socket && (socket.on("missionStatus", e => {
        t(e.icon);
      }), socket.on("newMission", e => {
        t(e.icon);
      })), e = function (e) {
        var t;
        if (localStorage.getItem("customMissionIconsConfig")) {
          const n = JSON.parse(null !== (t = localStorage.getItem("customMissionIconsConfig")) && void 0 !== t ? t : "[]");
          if (n !== e) for (const t of e) for (const n of Object.values(t)) if ("" !== n) return localStorage.setItem("customMissionIconsConfig", JSON.stringify(e)), e;
          return n;
        }
        return localStorage.setItem("customMissionIconsConfig", JSON.stringify(e)), e;
      }(e);
      for (const n of e) t(n.name);
    },
    ht = async function () {
      const e = function (e) {
        var t;
        const n = parseInt(null !== (t = localStorage.getItem("deleteNewestFmsAfterTime")) && void 0 !== t ? t : "2000"),
          i = document.querySelector(`div#radio-container-others div.radio-vehicle.frame-opener[uservehicleid="${e.userVehicleID}"]`);
        setTimeout(() => {
          null == i || i.remove();
        }, n);
      };
      "undefined" != typeof socket && (socket.on("vehicleFMS", t => {
        null === t.fms5Type && e(t);
      }), socket.on("vehicleFMSGrouped", t => {
        t.forEach(t => {
          null === t.fms5Type && e(t);
        });
      }));
    },
    pt = async function () {
      !function () {
        const e = document.querySelectorAll("div.card-headline"),
          t = document.createElement("i");
        t.classList.add("fas", "fa-angle-up", "card-collapse-toggle", "pointer", "right"), e.forEach(e => {
          var n;
          if (null !== e.parentElement) {
            if (!e.parentElement.classList.contains("card-collapse")) if (e.parentElement.classList.add("card-collapse"), null === e.querySelector("div.scriptBox")) {
              const n = document.createElement("div");
              n.classList.add("scriptBox"), n.insertAdjacentElement("beforeend", t), e.insertAdjacentHTML("beforeend", n.outerHTML);
            } else null === (n = e.querySelector("div.scriptBox")) || void 0 === n || n.insertAdjacentHTML("beforeend", t.outerHTML);
          } else a(Object.keys(e)[0], "expandAssociationCards");
        });
      }();
    },
    gt = async function () {
      document.querySelectorAll("div.card-headline").forEach(e => {
        null !== e.textContent && null !== e.parentElement ? (e.classList.contains("bg-organisation-4") && !e.textContent.includes("Leitstelle") || e.parentElement.classList.add("collapsed"), e.innerHTML += '<i class="fas fa-angle-up card-collapse-toggle pointer right"></i>') : a(Object.keys(e)[0], "expandMapLegend");
      });
    },
    yt = async function () {
      ControlCenter.generateNewMission = async function () {
        if (this.resi.settings.missionGenerationSpeed && !0 !== this.doNotPing) {
          const e = JSON.stringify(await nt("generateMission", localStorage, !1));
          if (!e.match(/"status|success|error"/gi) || !e) return void setTimeout(async () => await this.generateNewMission(), 200);
          setTimeout(async () => await this.generateNewMission(), 1e3 * this.resi.settings.missionGenerationSpeed);
        }
      };
      let e = document.querySelector("#mission-speed-pause");
      if (null === e) return void a("missionSpeedSVG", "fastMissionSpeed.ts");
      e.style.display = "none";
      const t = e.parentElement;
      function n() {
        if (null === t) return void a("div", "fastMissionSpeed.ts");
        t.id = "", null == e || e.remove();
        const n = document.createElement("i");
        n.className = "fas fa-play", n.id = "mission-speed-pause", t.appendChild(n);
      }
      e.classList.remove("frame-opener"), null !== t ? (t.onclick = () => async function () {
        return new Promise(e => {
          var t, n;
          let i = $("body");
          self !== top && (i = $("body", parent.document)), i.append('\n      <div class=\'modal-overlay\'>\n        <div class=\'modal\'>\n          <div class="modal-title">\n            Spielgeschwindigkeit wÃ¤hlen\n          </div>\n          <div class="modal-button-group mission-speed">\n                    <button class="button button-round save-mission-speed button-gray " value="0" seconds="0" data-tooltip="Einsatzgenerierung pausieren"><svg class="svg-inline--fa fa-pause icon-no-margin" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="pause" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" data-fa-i2svg=""><path fill="currentColor" d="M272 63.1l-32 0c-26.51 0-48 21.49-48 47.1v288c0 26.51 21.49 48 48 48L272 448c26.51 0 48-21.49 48-48v-288C320 85.49 298.5 63.1 272 63.1zM80 63.1l-32 0c-26.51 0-48 21.49-48 48v288C0 426.5 21.49 448 48 448l32 0c26.51 0 48-21.49 48-48v-288C128 85.49 106.5 63.1 80 63.1z"></path></svg>\x3c!-- <i class="fas fa-pause icon-no-margin"></i> --\x3e</button>\n                    <button class="button button-round save-mission-speed button-success " value="1" seconds="30" data-tooltip="Einsatzgenerierung etwa alle 30 Sekunden"> 30 sec</button>\n                    <button class="button button-round save-mission-speed button-success " value="2" seconds="60" data-tooltip="Einsatzgenerierung etwa einmal pro Minute"> 1 min</button>\n                    <button class="button button-round save-mission-speed button-success " value="3" seconds="120" data-tooltip="Einsatzgenerierung etwa alle 2 Minuten"> 2 min</button>\n                    <button class="button button-round save-mission-speed button-success " value="4" seconds="300" data-tooltip="Einsatzgenerierung etwa alle 5 Minuten"> 5 min</button>\n                    <button class="button button-round save-mission-speed button-success " value="5" seconds="600" data-tooltip="Einsatzgenerierung etwa alle 10 Minuten"> 10 min</button>\n                    <button class="button button-round save-mission-speed button-success " value="6" seconds="1200" data-tooltip="Einsatzgenerierung etwa alle 20 Minuten"> 20 min</button>\n                    <button class="button button-round save-mission-speed button-success " value="7" seconds="1800" data-tooltip="Einsatzgenerierung etwa alle 30 Minuten"> 30 min</button>\n                </div>\n        </div>\n      </div>\n    '), null === (t = document.querySelector('.save-mission-speed[seconds="' + ReSi.settings.missionGenerationSpeed + '"]')) || void 0 === t || t.classList.add("button-active"), null === (n = document.querySelector(".modal-button-group.mission-speed")) || void 0 === n || n.addEventListener("click", r);
          const s = i.find(".modal-overlay");
          function r(t) {
            if (t.target.classList.contains("save-mission-speed")) {
              const n = t.target.getAttribute("seconds"),
                i = t.target.getAttribute("value");
              callApi("/api/settings", {
                setting: "missionGenerationSpeed",
                value: i
              }), ControlCenter.setMissionSpeed(n), function () {
                var t;
                null === (t = document.querySelector(".modal-button-group.mission-speed")) || void 0 === t || t.removeEventListener("click", r), s.remove(), e();
              }();
            }
          }
          s.css("visibility", "visible"), self !== top && window.addEventListener("beforeunload", () => s.remove());
        });
      }(), 0 !== ReSi.settings.missionGenerationSpeed ? n() : (t.id = "dropdown-notification", e.style.display = "inline"), ControlCenter.setMissionSpeed = i => {
        if (e = document.querySelector("svg#mission-speed-pause"), 0 == i) {
          if (null == e || e.remove(), null === t) return void a("div", "fastMissionSpeed.ts");
          t.id = "dropdown-notification";
          const n = document.createElement("i");
          n.className = "fas fa-pause", n.id = "mission-speed-pause", t.appendChild(n), ReSi.settings.missionGenerationSpeed = 0;
        } else n(), ReSi.settings.missionGenerationSpeed = i;
      }) : a("div", "fastMissionSpeed.ts");
    },
    bt = async function () {
      !function () {
        const e = localStorage.getItem("removeVehicleOptions");
        let t;
        null !== e ? t = JSON.parse(e) : (localStorage.setItem("removeVehicleOptions", JSON.stringify([])), t = []);
        const n = document.querySelectorAll("select.aao-edit-selcet");
        for (let e = 0; e < n.length; e++) {
          const i = n[e].querySelectorAll("option");
          for (let e = 0; e < i.length; e++) {
            const n = i[e];
            !n.selected && t.includes(n.value) && n.remove();
          }
        }
      }();
    },
    vt = async function () {
      const e = document.querySelectorAll("div.card")[4].querySelector("div.card-headline");
      if (null === e) return void a(Object.keys({
        head: e
      })[0], "filterMemberList");
      if (null === document.querySelector("div.scriptBox")) {
        const t = document.createElement("div");
        t.classList.add("scriptBox"), e.insertAdjacentElement("beforeend", t);
      }
      const t = e.querySelector("div.scriptBox");
      if (null === t) return void a(Object.keys({
        scriptBox: t
      })[0], "filterMemberList");
      const n = document.createElement("span");
      n.dataset.open = "false", n.id = "filterIconSpan";
      const i = document.createElement("i");
      i.classList.add("fa-regular", "fa-filter"), n.insertAdjacentElement("afterbegin", i), t.insertAdjacentElement("afterbegin", n);
      const s = e.querySelector("#filterIconSpan");
      if (null === s) return void a(Object.keys({
        filterIconSelector: s
      })[0], "filterMemberList");
      s.addEventListener("click", () => {
        var t;
        const i = null === (t = n.querySelector("svg")) || void 0 === t ? void 0 : t.dataset;
        void 0 !== i ? "false" === s.dataset.open ? (o(e), s.dataset.open = "true", i.prefix = "fas") : (c(), s.dataset.open = "false", i.prefix = "far") : l(Object.keys({
          dataset: i
        })[0], "filterMemberList");
      });
      const r = function (e, t, n) {
          const i = document.createElement("div");
          i.classList.add("checkbox-container"), i.style.width = "95%", i.style.boxShadow = "-1px 1px 5px 5px rgba(0,0,0,0.3)", i.dataset.tooltip = `${t.toString()} ${1 === t ? "Mitglied" : "Mitglieder"} mit diesem Filter gefunden`;
          const s = document.createElement("input");
          s.id = e.replaceAll(" ", "-").toLowerCase(), s.type = "checkbox", s.checked = !0, s.addEventListener("change", e => {
            n(e);
          });
          const r = document.createElement("label");
          return r.setAttribute("for", e.replaceAll(" ", "-").toLowerCase()), r.textContent = e, i.insertAdjacentElement("beforeend", s), i.insertAdjacentElement("beforeend", r), i;
        },
        o = function (e) {
          const t = document.createElement("div");
          t.classList.add("card-body"), t.style.borderRadius = "0", t.id = "associationMemberFilterCard", t.style.display = "grid", t.style.gridTemplateColumns = "repeat(2, 50%)";
          const n = document.createElement("div");
          n.style.display = "flex", n.style.flexDirection = "column", n.style.justifyContent = "center", n.style.alignItems = "center", n.style.margin = "2px 0", n.insertAdjacentElement("beforeend", r("Online", document.querySelectorAll("tr.toplistTr td.toplist-online").length, e => {
            const t = e.target.checked,
              n = document.querySelectorAll("tr.toplistTr");
            t ? n.forEach(e => {
              e.children[0].classList.contains("toplist-online") && (e.style.display = "table-row");
            }) : document.querySelectorAll("tr.toplistTr").forEach(e => {
              e.children[0].classList.contains("toplist-online") && (e.style.display = "none");
            });
          })), n.insertAdjacentElement("beforeend", r("Offline", document.querySelectorAll("tr.toplistTr td.toplist-offline").length, e => {
            const t = e.target.checked,
              n = document.querySelectorAll("tr.toplistTr");
            t ? n.forEach(e => {
              e.children[0].classList.contains("toplist-offline") && (e.style.display = "table-row");
            }) : n.forEach(e => {
              e.children[0].classList.contains("toplist-offline") && (e.style.display = "none");
            });
          })), n.insertAdjacentElement("beforeend", r("Mehr als 90 Tage offline", document.querySelectorAll("tr.toplistTr td.toplist-absent").length, e => {
            const t = e.target.checked,
              n = document.querySelectorAll("tr.toplistTr");
            t ? n.forEach(e => {
              e.children[0].classList.contains("toplist-absent") && (e.style.display = "table-row");
            }) : n.forEach(e => {
              e.children[0].classList.contains("toplist-absent") && (e.style.display = "none");
            });
          }));
          const i = document.createElement("div");
          i.style.display = "flex", i.style.flexDirection = "column", i.style.justifyContent = "center", i.style.alignItems = "center", i.style.margin = "2px 0", i.insertAdjacentElement("beforeend", r("Admin", Array.from(document.querySelectorAll("tr td span.label.label-info.label-round")).filter(e => {
            var t;
            return "admin" === (null === (t = e.textContent) || void 0 === t ? void 0 : t.toLowerCase());
          }).length, e => {
            const t = e.target.checked,
              n = document.querySelectorAll("tr.toplistTr");
            t ? n.forEach(e => {
              var t;
              "admin" === (null === (t = e.children[3].querySelector("span")) || void 0 === t ? void 0 : t.innerText.toLowerCase()) && (e.style.display = "table-row");
            }) : n.forEach(e => {
              var t;
              "admin" === (null === (t = e.children[3].querySelector("span")) || void 0 === t ? void 0 : t.innerText.toLowerCase()) && (e.style.display = "none");
            });
          })), i.insertAdjacentElement("beforeend", r("Co-Admin", Array.from(document.querySelectorAll("tr td span.label.label-info.label-round")).filter(e => {
            var t;
            return "co-admin" === (null === (t = e.textContent) || void 0 === t ? void 0 : t.toLowerCase());
          }).length, e => {
            const t = e.target.checked,
              n = document.querySelectorAll("tr.toplistTr");
            t ? n.forEach(e => {
              var t;
              "co-admin" === (null === (t = e.children[3].querySelector("span")) || void 0 === t ? void 0 : t.innerText.toLowerCase()) && (e.style.display = "table-row");
            }) : n.forEach(e => {
              var t;
              "co-admin" === (null === (t = e.children[3].querySelector("span")) || void 0 === t ? void 0 : t.innerText.toLowerCase()) && (e.style.display = "none");
            });
          })), i.insertAdjacentElement("beforeend", r("Schuldirektor", Array.from(document.querySelectorAll("tr td span.label.label-info.label-round")).filter(e => {
            var t;
            return "schuldirektor" === (null === (t = e.textContent) || void 0 === t ? void 0 : t.toLowerCase());
          }).length, e => {
            const t = e.target.checked,
              n = document.querySelectorAll("tr.toplistTr");
            t ? n.forEach(e => {
              var t;
              "schuldirektor" === (null === (t = e.children[3].querySelector("span")) || void 0 === t ? void 0 : t.innerText.toLowerCase()) && (e.style.display = "table-row");
            }) : n.forEach(e => {
              var t;
              "schuldirektor" === (null === (t = e.children[3].querySelector("span")) || void 0 === t ? void 0 : t.innerText.toLowerCase()) && (e.style.display = "none");
            });
          })), i.insertAdjacentElement("beforeend", r("Mitglied", Array.from(document.querySelectorAll("tr td span.label.label-info.label-round")).filter(e => {
            var t;
            return "mitglied" === (null === (t = e.textContent) || void 0 === t ? void 0 : t.toLowerCase());
          }).length, e => {
            const t = e.target.checked,
              n = document.querySelectorAll("tr.toplistTr");
            t ? n.forEach(e => {
              var t;
              "mitglied" === (null === (t = e.children[3].querySelector("span")) || void 0 === t ? void 0 : t.innerText.toLowerCase()) && (e.style.display = "table-row");
            }) : n.forEach(e => {
              var t;
              "mitglied" === (null === (t = e.children[3].querySelector("span")) || void 0 === t ? void 0 : t.innerText.toLowerCase()) && (e.style.display = "none");
            });
          })), t.insertAdjacentElement("beforeend", n), t.insertAdjacentElement("beforeend", i);
          const s = document.createElement("hr");
          s.style.width = "100%", s.style.gridArea = "2/1/3/3", s.style.filter = "contrast(1000000%)", t.insertAdjacentElement("beforeend", s), e.insertAdjacentElement("afterend", t);
        },
        c = function () {
          var e;
          null === (e = document.querySelector("div#associationMemberFilterCard")) || void 0 === e || e.remove();
        };
    },
    St = async function () {
      !function () {
        const e = document.querySelector(".card-collapse");
        null !== e ? e.style.display = "none" : a(Object.keys({
          variableIsNull: a
        })[0], "hideAchievementcard");
      }();
    },
    wt = async function () {
      !function () {
        let e;
        const t = localStorage.getItem("hideBuildingIconsConfig");
        e = null !== t ? JSON.parse(t) : [];
        const n = document.querySelectorAll("img.leaflet-marker-icon");
        for (const t of n) for (const n in e) if (t.src === e[n]) {
          t.style.display = "none";
          break;
        }
      }();
    },
    Et = async function () {
      const e = document.querySelectorAll("div.input-container");
      e[e.length - 1].style.display = "none";
    },
    At = async function () {
      var e;
      if (await async function () {
        var e, t;
        const n = await nt("userBuildings", sessionStorage),
          i = parseInt(null !== (t = null === (e = document.querySelector("div.detail-header div.detail-title")) || void 0 === e ? void 0 : e.getAttribute("userdepartmentid")) && void 0 !== t ? t : "0"),
          s = n.find(e => e.userBuildingID === i);
        return 0 !== (null == s ? void 0 : s.personalCount);
      }()) {
        const t = document.querySelectorAll("div.detail-panel tr")[1].querySelectorAll("td div.flex div.building-hire .button-danger")[1],
          n = null == t ? void 0 : t.cloneNode(!0),
          i = document.createElement("div");
        i.classList.add("input-container"), i.style.margin = "0 .5rem", i.id = "personalBuyContainer";
        const s = document.createElement("div");
        s.classList.add("input-content"), s.style.margin = "0";
        const r = document.createElement("div");
        r.classList.add("input-label"), r.textContent = "Zu kaufendes Personal";
        const o = document.createElement("input");
        o.id = "multiplePersonalBuyCount", o.type = "number", o.value = "1", o.classList.add("input-round"), o.min = "1";
        const a = document.createElement("div");
        a.classList.add("input-icon");
        const l = document.createElement("i");
        l.classList.add("fas", "fa-users"), a.insertAdjacentElement("afterbegin", l), s.insertAdjacentElement("beforeend", o), s.insertAdjacentElement("beforeend", a), i.insertAdjacentElement("beforeend", s), t.parentElement.style.height = "fit-content", t.parentElement.parentElement.querySelector("span").style.height = "fit-content", t.parentElement.parentElement.style.cssText = "align-items: center", t.parentElement.insertAdjacentElement("afterend", i), null == n || n.addEventListener("click", async () => {
          var e, t, n;
          let i = !0;
          if (await modal("Personal kaufen?", "Bist du dir sicher, das du dir Personal fÃ¼r Marken kaufen mÃ¶chtest? Das kaufen von mehrfachem Personal kann einige Zeit dauern. Bitte brich den Vorgang nicht ab!", "Kaufen", "Abbrechen", () => {
            i = !0;
          }, () => {
            i = !1;
          }), !i) return;
          const s = document.querySelector("input#multiplePersonalBuyCount"),
            r = parseInt(null !== (e = null == s ? void 0 : s.value) && void 0 !== e ? e : "0"),
            o = parseInt(null !== (n = null === (t = document.querySelector("div.detail-header div.detail-title")) || void 0 === t ? void 0 : t.getAttribute("userdepartmentid")) && void 0 !== n ? n : "0");
          for (let e = r; e > 0; e--) await it("hire", {
            userDepartmentID: o.toString(),
            hire: "instant"
          }), await Ye(100);
          noticeModal("Personalkauf abgeschlossen", "Das gewÃ¼nschte Personal ist auf der Wache eingetroffen", "SchlieÃŸen", () => {
            window.location.reload();
          });
        }), null == t || t.replaceWith(null != n ? n : ""), document.querySelectorAll("div.detail-panel tr")[1].querySelectorAll("td div.flex div.building-hire .button-danger")[1].setAttribute("hire", "undefined"), null === (e = document.querySelector("#personalBuyContainer")) || void 0 === e || e.addEventListener("input", e => {
          var t;
          const n = null === (t = e.target) || void 0 === t ? void 0 : t.value;
          document.querySelectorAll("div.detail-panel tr")[1].querySelectorAll("td div.flex div.building-hire .button-danger")[1].innerHTML = `${n.toString()} <i class='fas fa-ticket-alt'></i> Kaufen`;
        });
      }
    },
    Ct = async function () {
      const e = "true" === localStorage.getItem("addOwnShared"),
        t = () => {
          const t = document.querySelectorAll("#missions-container-own > div > span > .mission-participation");
          return e ? "+" + t.length : "";
        };
      function n() {
        const e = document.querySelectorAll("div#missions-container-own div.mission-list-mission"),
          n = document.querySelectorAll("div#missions-container-shared div.mission-list-mission"),
          i = document.querySelectorAll('div#missions-container-shared div.mission-list-mission svg.mission-participation[class*="text"]');
        document.getElementById("missionCount").innerText = e.length.toString(), document.getElementById("missionCountSharedAttended").innerText = i.length.toString(), document.getElementById("missionCountShared").innerText = n.length.toString(), document.getElementById("ownCountShared").innerText = t();
      }
      const i = await nt("userBuildings", sessionStorage),
        s = e => Math.ceil(4 * Math.log2(e + 2) + .25 * e) - 4;
      let r = i.filter(e => GENERATING_BUILDING_IDS.includes(e.buildingType));
      const o = document.querySelector('div[tab="ownMissions"]'),
        a = document.querySelector('div[tab="sharedMissions"]'),
        l = document.querySelectorAll("div#missions-container-own div.mission-list-mission"),
        c = document.querySelectorAll("div#missions-container-shared div.mission-list-mission"),
        u = document.querySelectorAll('div#missions-container-shared div.mission-list-mission svg.mission-participation[class*="text"]');
      null == o || o.insertAdjacentHTML("afterbegin", '<span class="badge-container"><span class="badge ncOpenMissions" style="color: #fff !important; background-color: red !important;"><span id="missionCount">' + l.length + '</span>/<span id="missionCountPossible">' + s(r.length) + "</span></span></span>"), null == a || a.insertAdjacentHTML("afterbegin", '<span class="badge-container"><span class="badge ncOpenMissions" style="color: #fff !important; background-color: red !important;"><span id="missionCountSharedAttended">' + u.length + '</span>/<span id="missionCountShared">' + c.length + '</span><span id="ownCountShared">' + t() + "</span></span></span>"), socket.on("newMission", () => {
        n();
      }), socket.on("missionStatus", () => {
        setTimeout(n, 1e3);
      }), socket.on("finishMission", () => {
        n();
      }), socket.on("departmentBuy", async () => {
        const e = await nt("userBuildings", sessionStorage, !1);
        r = e.filter(e => GENERATING_BUILDING_IDS.includes(e.buildingType)), document.querySelector("missionCountPossible").innerText = String(s(r.length));
      });
    },
    Tt = async function () {
      var e, t;
      const n = await nt("vehicleCategories", localStorage),
        i = {
          tlf_ab_tank: 0,
          lgf: 1,
          lf: 2,
          hlf: 3,
          rw_lf: 4,
          rw_lf_ab_rÃ¼st: 5,
          rw_hlf: 6,
          rw_hlf_ab_rÃ¼st: 6,
          "h*lf_kef": 7,
          hlf_rw_kef_ab_rÃ¼st: 8,
          "h*lf_rw_kef_gw_Ã¶l_ab_rÃ¼st_ab_Ã¶l": 9,
          "h*lf_kef_mtw_gw_tier": 10,
          "h*lf_rw_ab_rÃ¼st_kef": 11,
          hlf_rw_kef_ab_rÃ¼st_mtw: 12,
          "h*lf_mtw": 14,
          kdow: 15,
          kdow_mzf: 16,
          elw1_kdow_mzf: 17,
          elw1_kdow: 18,
          elw1: 19,
          fÃ¼hrungsdienst: 20,
          elw_elw2: 21,
          dlk: 22,
          dlk_tmf: 23,
          tmf: 24,
          elw2_ab_el: 27,
          sw_ab_schlauch: 29,
          sw_tlf_ab_tank_ab_schlauch: 30,
          rw_ab_rÃ¼st: 34,
          "rw_rw-k_ab_rÃ¼st": 35,
          gw_tier: 36,
          gw_tier_mtw: 37,
          gw_tier_lf: 38,
          "h*lf_kef_gw_tier": 39,
          gw_Ã¶l_gw_g_ab_Ã¶l_ab_g: 41,
          gw_g_ab_g: 50,
          gw_mess: 51,
          gw_a_ab_a: 52,
          gw_dekon_ab_dekon: 53,
          gw_h: 54,
          kef: 57,
          gw_Ã¶l_ab_Ã¶l: 70,
          kran: 74,
          "rw-k": 75,
          fwk: 76,
          pol: 80,
          pol_all: 81,
          pol_dhufuekw: 83,
          fustw: 90,
          lpol: 100,
          lpol_dhufuekw: 101,
          bpol: 200,
          bpol_dhufuekw: 201,
          mtw: 2e3,
          mzf: 2001,
          mtw_mzf: 2002,
          sonstiges: 2003,
          rtw: 2004,
          nef: 2005,
          na: 2006,
          rd: 2007,
          na_standort: 2008,
          gws: 2009,
          sonstigesSub: 2010
        },
        s = document.createElement("style");
      s.innerText = ".card-headline.card-headline-info{background-color:#2196f3;color:#fff}.card", document.head.appendChild(s);
      const r = null !== (t = null === (e = document.querySelector(".detail-title")) || void 0 === e ? void 0 : e.getAttribute("missionid")) && void 0 !== t ? t : "0";
      function o(e, t) {
        const n = i[e],
          s = i[t];
        return n < s ? -1 : n > s ? 1 : 0;
      }
      !function (e) {
        const t = document.createElement("div");
        t.classList.add("card", "missionHelper"), t.innerHTML = `<div class="card-headline card-headline-info">Mindestens benÃ¶tigte Mittel</div>\n      <div class="card-body">\n          ${["KeineAhnung", "Ron31"].includes(ReSi.userName) ? "" : '<div class="alert alert-info">\n                  <div class="alert-content"><b>Anforderungen kÃ¶nnen sich durch Variationen Ã¤ndern.</b></div>\n                </div>'}\n        <table id="missionHelper-${r}"></table>\n        <div class="alert alert-info"><div class="alert-content"><b>Generelle Informationen:</b></div></div>\n        <table id="informationHelper-${r}"></table>\n      </div>\n    `;
        const i = document.querySelector(".alarmed-vehicles");
        null == i || i.insertAdjacentElement("afterbegin", t);
        const s = document.querySelector("table#missionHelper-" + r),
          a = document.createElement("tbody");
        a.style.display = "table-row";
        const l = Object.keys(e.neededVehicles).sort(o).reduce((t, n) => (t[n] = e.neededVehicles[n], t), {});
        let c, u;
        for ([c, u] of Object.entries(l)) {
          const e = document.createElement("tr"),
            t = document.createElement("td");
          t.innerText = String(u), t.style.padding = "2px 10px 2px 0";
          const i = document.createElement("td");
          i.innerText = n[c].name, i.style.padding = "2px 0", e.appendChild(t), e.appendChild(i), a.appendChild(e);
        }
        null == s || s.appendChild(a);
        const d = document.querySelector("table#informationHelper-" + r),
          m = document.createElement("tbody"),
          f = document.createElement("tr"),
          h = document.createElement("td");
        h.innerText = new Intl.NumberFormat("de-DE").format(e.credits) + " MÃ¼nzen (80%: " + new Intl.NumberFormat("de-DE").format(.8 * e.credits) + ")";
        const p = document.createElement("td");
        if (p.innerText = "VergÃ¼tung:", f.appendChild(p), f.appendChild(h), m.appendChild(f), null != e.maxCredits && e.maxCredits !== e.credits) {
          const t = document.createElement("tr"),
            n = document.createElement("td");
          n.innerText = new Intl.NumberFormat("de-DE").format(e.maxCredits) + " MÃ¼nzen (80%: " + new Intl.NumberFormat("de-DE").format(.8 * e.maxCredits) + ")";
          const i = document.createElement("td");
          i.innerText = "Max. mÃ¶gliche VariantenvergÃ¼tung:", t.appendChild(i), t.appendChild(n), m.appendChild(t);
        }
        if (e.patients) {
          const t = document.createElement("tr"),
            n = document.createElement("td");
          n.innerText = e.patients.min === e.patients.max ? String(e.patients.max) : e.patients.min + "-" + e.patients.max;
          const i = document.createElement("td");
          if (i.innerText = "Patienten:", t.appendChild(i), t.appendChild(n), m.appendChild(t), 0 !== e.patients.naChance) {
            const t = document.createElement("tr"),
              n = document.createElement("td");
            n.innerText = e.patients.naChance + "%";
            const i = document.createElement("td");
            i.innerText = "Notarzt Chance:", t.appendChild(i), t.appendChild(n), m.appendChild(t);
          }
        }
        null == d || d.appendChild(m);
      }((await nt("missions", localStorage))[parseInt(r)]);
    },
    Ot = function (e) {
      return "userMissionFinishTime" in e;
    },
    It = async function () {
      const e = function (e) {
          const n = document.querySelectorAll("div.mission-list-content");
          if (void 0 !== e) {
            const t = function (e) {
              if (!Ot(e)) return;
              let t,
                n = "00:00";
              if ("" === e.icon) t = new Date(e.userMissionFinishTime);else {
                const n = new Date(e.userMissionFinishTime).getTime(),
                  i = new Date().getTime();
                t = new Date(n - i);
              }
              if (t.getTime() < 0 || void 0 === t.getTime()) return n;
              const o = s();
              null !== o && (i = o), void 0 === i[e.userMissionID] && (i[e.userMissionID] = {
                paused: !1
              }), i[e.userMissionID].remainingTime = t.getTime(), r(i);
              let a = t.getTime();
              t.getHours() > 0 && (a -= 36e5);
              const l = {};
              return new Date(a).getHours() > 0 ? (l.hour = "2-digit", l.minute = "2-digit", l.second = "2-digit") : (l.minute = "2-digit", l.second = "2-digit"), n = new Date(a).toLocaleTimeString("de-de", l), n;
            }(e);
            if ("string" == typeof t) {
              const n = document.querySelector(`div#timer-${e.userMissionID}`);
              if (null === n) return;
              n.innerText = t;
            }
            return;
          }
          const o = s();
          null !== o && (i = o), n.forEach(e => {
            const n = e.querySelector("div.timer.mission-timer");
            if ("" !== e.innerText) {
              if ("00:00" === (null == n ? void 0 : n.innerText)) {
                const t = e.getAttribute("frame-url");
                if (null !== t) {
                  const e = parseInt(t.replace("mission/", ""));
                  i[e].remainingTime = 0, i[e].paused = !0, r(i);
                }
                return;
              }
              const s = e.querySelector("div.mission-list-icon-container div.mission-list-icon");
              if (null === s || null === n) return;
              let o = 0;
              if (s.classList.contains("mission-list-icon-1") ? o = 1 : s.classList.contains("mission-list-icon-2") ? o = 2 : s.classList.contains("mission-list-icon-3") && (o = 3), 3 !== o) return;
              const a = t(n.innerText, parseInt(n.id.replace("timer-", "")));
              "string" == typeof a && (n.innerText = a);
            }
          });
        },
        t = function (e, t) {
          let n = "00:00";
          if ("00:00" === e || "00:00:00" === e) return n;
          5 === e.length && (e = "00:" + e);
          const o = e.split(":"),
            a = parseInt(o[0]),
            l = parseInt(o[1]),
            c = parseInt(o[2]),
            u = new Date(`Jan 01 ${new Date().getFullYear()} ${a}:${l}:${c}`).getTime() - 1e3,
            d = s();
          null !== d && (i = d), i[t].remainingTime = u, r(i);
          const m = {};
          return new Date(u).getHours() > 0 ? (m.hour = "2-digit", m.minute = "2-digit", m.second = "2-digit") : (m.minute = "2-digit", m.second = "2-digit"), n = new Date(u).toLocaleTimeString("de-de", m), n;
        },
        n = function (t) {
          const n = document.querySelectorAll("div.mission-list-text"),
            i = document.querySelectorAll("div.mission-list-name");
          n.forEach(e => {
            e.style.width = "100%";
          }), i.forEach(e => {
            e.style.width = "calc(100% - 55px)";
          }), function (t) {
            const n = document.querySelector(`div.mission-list-mission[usermissionid="${t.userMissionID.toString()}"]`);
            if (null === n) return void a(Object.keys({
              container: n
            })[0], "missionTime.ts");
            const i = n.querySelector("a div.mission-list-content div.mission-list-text");
            if (null !== i) {
              if (!document.querySelector(`#timer-${t.userMissionID.toString()}`)) {
                const e = document.createElement("div");
                e.id = `timer-${t.userMissionID.toString()}`, e.classList.add("timer", "mission-timer"), e.style.width = "fit-content", e.style.position = "absolute", e.style.right = "27px", e.style.top = "7px", i.insertAdjacentElement("beforeend", e);
              }
              e(t);
            } else a(Object.keys({
              timerParent: i
            })[0], "missionTime.ts");
          }(t);
        };
      let i = {};
      const s = function () {
          const e = sessionStorage.getItem("missionTimeIntervals");
          return null === e ? e : JSON.parse(e);
        },
        r = function (e) {
          sessionStorage.setItem("missionTimeIntervals", JSON.stringify(e));
        };
      "undefined" != typeof socket && (socket.on("missionStatus", e => {
        Ot(e) ? (n(e), i[e.userMissionID] = {
          remainingTime: new Date(e.userMissionFinishTime.toString()).getTime(),
          paused: !1
        }) : 3 !== e.userMissionStatus && void 0 !== i[e.userMissionID] && (clearInterval(i[e.userMissionID].interval), i[e.userMissionID] = {
          paused: !0,
          remainingTime: i[e.userMissionID].remainingTime
        }), r(i);
      }), socket.on("finishMission", e => {
        const t = s();
        null !== t && (i = t), void 0 !== i[e] && (clearInterval(i[e].interval), delete i[e], r(i));
      }));
      const o = s();
      null === o ? r({}) : i = o;
      for (const [e, t] of Object.entries(i)) {
        const s = {
          icon: "",
          missingVehicles: {
            test: 3
          },
          userMissionFinishTime: void 0 !== t.remainingTime && null !== t.remainingTime ? t.remainingTime : 0,
          userMissionID: parseInt(e),
          userMissionProgress: 1,
          userMissionStatus: 3,
          userName: "User"
        };
        n(s), t.paused && (i[parseInt(e)] = {
          paused: !0,
          remainingTime: t.remainingTime
        });
      }
      r(i), setInterval(() => {
        e();
      }, 1e3);
    },
    kt = async function () {
      const e = document.querySelectorAll("table tbody tr[userpersonalid]");
      let t = [];
      e.forEach(e => {
        e.addEventListener("click", n => {
          var r, o, l;
          if (["td", "span"].includes(null !== (o = null === (r = document.elementFromPoint(n.clientX, n.clientY)) || void 0 === r ? void 0 : r.nodeName.toLowerCase()) && void 0 !== o ? o : "")) {
            const n = parseInt(null !== (l = e.getAttribute("userpersonalid")) && void 0 !== l ? l : "0");
            if (t.includes(n)) {
              t = t.filter(e => e !== n), e.removeAttribute("multipleAssign");
              const i = e.querySelector(".editPlannedCoursesScript");
              if (null === i) return void a(Object.keys({
                planElement: i
              })[0], "multipleStaffAssignment.ts");
              const s = e.querySelector(".editAssignedVehicleScript");
              if (null === s) return void a(Object.keys({
                assignElement: s
              })[0], "multipleStaffAssignment.ts");
              i.classList.replace("editPlannedCoursesScript", "editPlannedCourses"), s.classList.replace("editAssignedVehicleScript", "editAssignedVehicle"), e.style.removeProperty("background-color");
            } else {
              t.push(n), e.setAttribute("multipleAssign", "true");
              const r = e.querySelector(".editPlannedCourses");
              if (null === r) return void a(Object.keys({
                planElement: r
              })[0], "multipleStaffAssignment.ts");
              const o = e.querySelector(".editAssignedVehicle");
              if (null === o) return void a(Object.keys({
                assignElement: o
              })[0], "multipleStaffAssignment.ts");
              r.classList.replace("editPlannedCourses", "editPlannedCoursesScript"), o.classList.replace("editAssignedVehicle", "editAssignedVehicleScript"), r.addEventListener("click", () => {
                i(r);
              }), o.addEventListener("click", () => {
                s(o);
              }), e.style.backgroundColor = "#f37022";
            }
          }
        });
      });
      const n = function () {
          t.forEach(e => {
            const t = document.querySelector(`tr[userpersonalid="${e}"]`);
            if (null === t) return void a(Object.keys({
              e: t
            })[0], "multipleStaffAssignment.ts");
            t.removeAttribute("multipleAssign");
            const n = t.querySelector(".editPlannedCoursesScript");
            if (null === n) return void a(Object.keys({
              planElement: n
            })[0], "multipleStaffAssignment.ts");
            const i = t.querySelector(".editAssignedVehicleScript");
            null !== i ? (n.classList.replace("editPlannedCoursesScript", "editPlannedCourses"), i.classList.replace("editAssignedVehicleScript", "editAssignedVehicle"), t.style.removeProperty("background-color")) : a(Object.keys({
              assignElement: i
            })[0], "multipleStaffAssignment.ts");
          }), t = [];
        },
        i = function (e) {
          e.classList.contains("editPlannedCoursesScript") && modal("LehrgÃ¤nge planen", function () {
            let e = "";
            for (const t of COURSES) {
              const n = document.createElement("div");
              n.classList.add("modalPlannedCourses");
              const i = document.createElement("input");
              i.type = "checkbox", i.setAttribute("courseid", t.id.toString()), i.id = `course${t.id}`;
              const s = document.createElement("label");
              s.setAttribute("for", `course${t.id.toString()}`), s.innerText = t.name, n.insertAdjacentElement("beforeend", i), n.insertAdjacentElement("beforeend", s), e += n.outerHTML;
            }
            return "" === e ? "keine LehrgÃ¤nge verfÃ¼gbar" : e;
          }(), "Speichern", "Abbrechen", () => {
            let e;
            e = top === self ? document.querySelectorAll(".modalPlannedCourses :checked") : window.parent.document.querySelectorAll(".modalPlannedCourses :checked");
            const i = [],
              s = [];
            e.forEach(e => {
              var t;
              const n = e.getAttribute("courseid");
              let r;
              i.push(null != n ? n : "0"), r = top === self ? document.querySelectorAll(`[for=course${n}]`) : window.parent.document.querySelectorAll(`[for=course${n}]`), s.push(null !== (t = r[0].textContent) && void 0 !== t ? t : "undefined");
            }), t.forEach(e => {
              callApi("api/userPersonal", {
                action: "planCourse",
                userPersonalID: e,
                courseIDs: JSON.stringify(i)
              }, () => {
                const t = document.querySelectorAll(`[userpersonalid='${e}'] td`)[4];
                null !== t ? (t.querySelectorAll("span.status").forEach(e => {
                  e.remove();
                }), t.innerHTML = t.innerHTML.trim(), s.forEach(e => {
                  const n = document.createElement("span");
                  n.classList.add("status", "s1", "text-small"), n.textContent = `${e}`, t.insertAdjacentElement("beforeend", n), t.innerHTML += "&nbsp";
                })) : a(Object.keys({
                  cell: t
                })[0], "multipleStaffAssignment.ts");
              });
            }), n();
          }, () => {}, !0);
        },
        s = function (e) {
          e.classList.contains("editAssignedVehicleScript") && modal("Fahrzeug zuweisen", function () {
            if (0 === USER_DEPARTMENT_VEHICLES.length) return "keine Fahrzeuge verfÃ¼gbar";
            const e = document.createElement("div"),
              t = document.createElement("input");
            t.type = "radio", t.name = "assignuservehicle", t.setAttribute("uservehicleid", "null"), t.id = "vehiclenull";
            const n = document.createElement("label");
            n.setAttribute("for", "vehiclenull"), n.textContent = "Kein Fahrzeug", e.insertAdjacentElement("beforeend", t), e.insertAdjacentElement("beforeend", n);
            let i = e.outerHTML;
            for (const e of USER_DEPARTMENT_VEHICLES) {
              const t = document.createElement("div");
              t.classList.add("modalAssignCourses");
              const n = document.createElement("input");
              n.type = "radio", n.setAttribute("name", "assignuservehicle"), n.setAttribute("uservehicleid", e.userVehicleID.toString()), n.id = `vehicle${e.userVehicleID.toString()}`;
              const s = document.createElement("label");
              s.setAttribute("for", `vehicle${e.userVehicleID.toString()}`), s.innerText = `${e.name} (${e.assignedPersonal.length.toString()}/${e.maxPersonal.toString()})`, t.insertAdjacentElement("beforeend", n), t.insertAdjacentElement("beforeend", s), i += t.outerHTML;
            }
            return i;
          }(), "Speichern", "Abbrechen", () => {
            let e;
            if (e = top === self ? document.querySelector('[name="assignuservehicle"]:checked') : window.parent.document.querySelector('[name="assignuservehicle"]:checked'), null === e) return void a(Object.keys({
              assignUserVehicleIDSelector: e
            })[0], "multipleStaffAssignment.ts");
            const i = e.getAttribute("uservehicleid");
            null !== i ? (t.forEach(e => {
              callApi("api/userPersonal", {
                action: "assignVehicle",
                userPersonalID: e,
                userVehicleID: i
              }, () => {
                const t = document.querySelectorAll(`[userpersonalid='${e}'] td`)[3];
                if (null === t) return void a(Object.keys({
                  cell: t
                })[0], "multipleStaffAssignment.ts");
                t.querySelectorAll("span.status").forEach(e => {
                  e.remove();
                }), t.innerHTML = t.innerHTML.trim();
                const n = USER_DEPARTMENT_VEHICLES.find(t => t.assignedPersonal.includes(e));
                if (void 0 !== n) {
                  const t = n.assignedPersonal.findIndex(t => t === e);
                  t > -1 && n.assignedPersonal.splice(t, 1);
                }
                if (i) {
                  const n = USER_DEPARTMENT_VEHICLES.find(e => e.userVehicleID === parseInt(i));
                  if (void 0 === n) return void l(Object.keys({
                    userVehicle: n
                  })[0], "multipleStaffAssignment.ts");
                  const s = document.createElement("span");
                  s.classList.add("status", "s1", "text-small");
                  const r = document.createElement("b"),
                    o = document.createElement("a");
                  o.href = `vehicle/${i.toString()}`, o.textContent = n.name, r.insertAdjacentElement("beforeend", o), s.insertAdjacentElement("beforeend", r), t.insertAdjacentElement("beforeend", s), n.assignedPersonal.push(e);
                }
              });
            }), n()) : a(Object.keys({
              assignUserVehicleID: i
            })[0], "multipleStaffAssignment.ts");
          }, () => {}, !0);
        };
    },
    Nt = async function () {
      "undefined" != typeof socket && socket.on("vehicleFMS", e => {
        !function (e) {
          const t = document.querySelectorAll(`div.radio-vehicle.frame-opener[uservehicleid="${e.userVehicleID}"]`);
          if (t.length > 1) for (let e = 0; e < t.length; e++) e > 0 && t[e].remove();
        }(e);
      });
    },
    xt = async function () {
      !async function () {
        const e = await nt("userBuildings", localStorage),
          t = await nt("buildings", localStorage);
        document.querySelectorAll("div#departments div.panel-body div[buildingtype]").forEach(n => {
          var i;
          const s = e.find(e => {
            var t;
            return e.userBuildingID === parseInt(null !== (t = n.getAttribute("userdepartmentid")) && void 0 !== t ? t : "0");
          });
          (null === (i = t.find(e => e.buildingID === (null == s ? void 0 : s.buildingType))) || void 0 === i ? void 0 : i.canGenerate) && (n.querySelector(`a[href="department/${null == s ? void 0 : s.userBuildingID}"]`).innerHTML += `&nbsp(${null == s ? void 0 : s.personalCount}/${null == s ? void 0 : s.maxNeededPersonalCount}) ${(null == s ? void 0 : s.isHiring) ? '<i class="fa-solid fa-user-plus"></i>' : '<i class="fa-solid fa-user-xmark"></i>'}`);
        });
      }();
    },
    Lt = async function () {
      await async function () {
        var e;
        const t = localStorage.getItem("buildingCountBuildings"),
          n = null !== t ? JSON.parse(t) : {
            userBuildings: await (await fetch("/api/userBuildings")).json(),
            update: Date.now()
          },
          i = JSON.parse(null !== (e = localStorage.getItem("buildingCountBuildingCategories")) && void 0 !== e ? e : `${JSON.stringify(await (await fetch("/api/buildings")).json())}`),
          s = {};
        for (const e of i) s[e.buildingID] = {
          buildingName: e.buildingName,
          organisation: e.organisationName,
          buildingCategory: e.buildingCategory,
          count: 0
        };
        for (let e = 0; e < n.userBuildings.length; e++) s[n.userBuildings[e].buildingType].count++;
        const r = document.querySelectorAll("body div.iframe-content div.card-collapse"),
          o = r[0].parentNode;
        if (null === o) return void a(Object.keys({
          parentDiv0: o
        })[0], "userBuildings");
        const l = r[1],
          c = document.createElement("div");
        c.classList.add("card", "card-collapse", "collapsed"), c.innerHTML = '<div class="card-headline card-headline-danger">GebÃ¤ude <i class="fas fa-angle-up card-collapse-toggle pointer right"></i></div><div class="card-body"><div class="element-container"><table class="striped table-divider" id="theadBuildings"><thead><tr><th style="text-align: center;">Typ</th><th style="text-align: center;">Anzahl</th></tr></thead></table></div></div>', o.insertBefore(c, l);
        const u = document.querySelector("#theadBuildings");
        if (null === u) return void a(Object.keys({
          thead: u
        })[0], "userBuildings");
        const d = document.createElement("tbody");
        d.style.width = "100%";
        for (const e in s) {
          const t = document.createElement("tr"),
            n = document.createElement("td");
          n.style.textAlign = "center", n.style.width = "50%";
          const i = document.createElement("td");
          s[e].buildingName.endsWith("e") ? n.innerText = `${s[e].buildingName}n` : s[e].buildingName.endsWith("haus") ? n.innerText = s[e].buildingName.replace("haus", "hÃ¤user") : s[e].buildingName.endsWith("ort") ? n.innerText = s[e].buildingName.replace("ort", "orte") : n.innerText = s[e].buildingName, i.style.textAlign = "center", i.style.width = "50%", i.innerText = s[e].count.toString(), t.appendChild(n), t.appendChild(i), d.appendChild(t);
        }
        u.appendChild(d);
      }();
      const e = document.querySelector("link[rel]");
      if (null === e) return void a(Object.keys({
        linkElem: e
      })[0], "userBuildings");
      const t = localStorage.getItem("buildingCountGameversion");
      let n = new URLSearchParams(`?${e.href.split("?")[1]}`).get("v");
      null === n && (n = "0.0.0"), (null === t || t < n) && (localStorage.setItem("buildingCountGameversion", n), await async function () {
        const e = await (await fetch("/api/buildings")).json();
        localStorage.setItem("buildingCountBuildingCategories", JSON.stringify(e));
      }());
      const i = localStorage.getItem("buildingCountBuildings"),
        s = null !== i ? JSON.parse(i) : {
          userBuildings: await (await fetch("/api/userBuildings")).json(),
          update: Date.now()
        },
        r = Number(s.update);
      (null === localStorage.getItem("buildingCountBuildings") || r < Date.now() - 86400) && (await async function () {
        const e = {
          userBuildings: await (await fetch("/api/userBuildings")).json(),
          update: Date.now()
        };
        localStorage.setItem("buildingCountBuildings", JSON.stringify(e));
      }());
    },
    jt = async function () {
      await async function () {
        (!sessionStorage.aVehicleCategories || JSON.parse(sessionStorage.aVehicleCategories).lastUpdate < new Date().getTime() - 36e5) && (await $.getJSON("/api/vehicleCategories").done(e => sessionStorage.setItem("aVehicleCategories", JSON.stringify({
          lastUpdate: new Date().getTime(),
          value: e
        }))));
        const e = async function (e) {
            const t = e.vehicleID,
              n = sessionStorage.getItem("aVehicleCategories");
            if (null === n) return void a(Object.keys({
              categories: n
            })[0], "userVehicles");
            const i = JSON.parse(n);
            if (!localStorage.getItem(`userVehicles-${String(t)}`)) for (const e in i.value) i.value[e].ids.includes(t) && localStorage.setItem(`userVehicles-${String(t)}`, i.value[e].readableShortName);
          },
          t = JSON.parse(sessionStorage.aVehicleCategories);
        await async function (e) {
          var t;
          if (null === sessionStorage.getItem("vehiclesUpdate")) {
            const e = Date.now();
            sessionStorage.setItem("vehiclesUpdate", e.toString());
          }
          const n = Number.parseInt(null !== (t = sessionStorage.getItem("vehiclesUpdate")) && void 0 !== t ? t : String(Date.now()), 10);
          if (null === sessionStorage.getItem("1") || n < n - 864e5) {
            const t = Date.now();
            sessionStorage.setItem("vehiclesUpdate", t.toString());
            const n = {};
            for (const t in e.value) {
              const i = e.value[t].ids;
              i.length <= 0 || !(i[0] < 1e4) || 0 !== e.value[t].roles.length && "lgf" !== e.value[t].shortName || (n[e.value[t].shortName] = {
                readableShortName: e.value[t].readableShortName,
                ids: e.value[t].ids,
                count: 0
              });
            }
            for (const t in e.value[1]) n[t].readableShortName = e.value[t].readableShortName, n[t].ids = e.value[t].ids;
            sessionStorage.setItem("vehicles", JSON.stringify(n));
          }
        }(t), await $.ajax({
          url: "/api/userVehicles",
          dataType: "json",
          type: "GET",
          async success(t) {
            for (const n of t) await e(n);
            await async function (e) {
              var t, n;
              const i = JSON.parse(null !== (t = sessionStorage.getItem("aVehicleCategories")) && void 0 !== t ? t : "{}"),
                s = JSON.parse(null !== (n = sessionStorage.getItem("vehicles")) && void 0 !== n ? n : "{}");
              for (const t of e) for (const e in i.value) !i.value[e].ids.includes(t.vehicleID) || 0 !== i.value[e].roles.length && "lgf" !== i.value[e].shortName || (s[i.value[e].shortName].count += 1);
              sessionStorage.setItem("vehicles", JSON.stringify(s));
            }(t), await async function () {
              const e = sessionStorage.getItem("vehicles");
              if (null === e) return void a(Object.keys({
                categories: e
              })[0], "userVehicles");
              const t = JSON.parse(e),
                n = document.createElement("style");
              n.innerHTML = ".card-headline.card-headline-danger{background-color:#DB1111;color:#fff}.card", document.head.appendChild(n);
              const i = document.querySelectorAll(".card-collapse"),
                s = i[0].parentNode;
              if (null === s) return void a(Object.keys({
                parentDiv0: s
              })[0], "userVehicles");
              const r = i[1],
                o = document.createElement("div");
              o.classList.add("card", "card-collapse", "collapsed"), o.innerHTML = '<div class="card-headline card-headline-danger">Fahrzeuge <i class="fas fa-angle-up card-collapse-toggle pointer right"></i></div><div class="card-body"><div class="element-container"><table class="striped table-divider" id="theadVehicles"><thead><tr><th style="text-align: center;">Typ</th><th style="text-align: center;">Anzahl</th></tr></thead></table></div></div>', s.insertBefore(o, r);
              const l = document.querySelector("#theadVehicles");
              if (null === l) return void a(Object.keys({
                thead: l
              })[0], "userVehicles");
              const c = document.createElement("tbody");
              c.style.width = "100%";
              for (const e in t) {
                const n = document.createElement("tr"),
                  i = document.createElement("td"),
                  s = document.createElement("td");
                i.style.textAlign = "center", i.style.width = "50%", s.style.textAlign = "center", s.style.width = "50%", i.innerText = t[e].readableShortName, s.innerText = t[e].count.toString(), n.appendChild(i), n.appendChild(s), c.appendChild(n);
              }
              l.appendChild(c);
            }();
          }
        });
      }();
    },
    qt = async function () {
      const e = document.querySelector("#mission-vehicle-group-by-vehicle .mission-vehicles-list");
      if (null === e) return;
      const t = "true" === localStorage.getItem("showBelowAAO"),
        n = "true" === localStorage.getItem("showDistance"),
        i = new MutationObserver(e => {
          var t;
          for (const i of e) if ("attributes" === i.type && "class" === i.attributeName) if (i.target.classList.contains("mission-vehicle-selected") && !i.target.classList.contains("mission-vehicle-involved-enroute")) {
            const e = document.createElement("tr");
            e.classList.add("vehicle" + i.target.getAttribute("uservehicleid")), e.innerHTML = `<td>${i.target.querySelector(".vehicle-name").innerText}</td><td>${"Ron31" == ReSi.userName ? i.target.querySelector(".vehicle-shortname").innerText : i.target.querySelector(".vehicle-status").innerText}</td><td>${i.target.querySelector(".vehicle-department").innerText}</td>${n ? "<td>" + i.target.querySelector(".vehicle-distance").innerText + "</td>" : ""}`;
            const t = document.querySelector("table#selectedVehiclePanel tbody");
            null == t || t.appendChild(e);
          } else null === (t = document.querySelector("tr.vehicle" + i.target.getAttribute("uservehicleid"))) || void 0 === t || t.remove();
        });
      !function () {
        const e = document.createElement("div");
        if (e.classList.add("card", "selectedVehiclePanel"), e.innerHTML = `<div class="card-headline card-headline-info">AusgewÃ¤hlte Fahrzeuge</div><div class="card-body"><table id="selectedVehiclePanel"><tr><th>Funkrufname</th>${"Ron31" === ReSi.userName ? "<th>Typ</th>" : "<th>Status</th>"}<th>Wache</th>${n ? "<th>Distanz</th>" : ""}</tr></table></div>`, t) {
          const t = document.querySelector(".mission-aao-container");
          null == t || t.insertAdjacentElement("afterend", e);
        } else {
          const t = document.querySelector(".enroute");
          null == t || t.insertAdjacentElement("beforebegin", e);
        }
        const i = document.querySelector("table#selectedVehiclePanel tbody");
        document.querySelectorAll(".mission-vehicles-list .mission-vehicle-selected").forEach(e => {
          var t, s, r, o, a;
          const l = document.createElement("tr");
          l.classList.add("vehicle" + e.getAttribute("uservehicleid")), l.innerHTML = `<td>${null === (t = e.querySelector(".vehicle-name")) || void 0 === t ? void 0 : t.innerText}</td><td>${"Ron31" == ReSi.userName ? null === (s = e.querySelector(".vehicle-shortname")) || void 0 === s ? void 0 : s.innerText : null === (r = e.querySelector(".vehicle-status")) || void 0 === r ? void 0 : r.innerText}\n      }</td><td>${null === (o = e.querySelector(".vehicle-department")) || void 0 === o ? void 0 : o.innerText}</td>${n ? "<td>" + (null === (a = e.querySelector(".vehicle-distance")) || void 0 === a ? void 0 : a.innerText) + "</td>" : ""}`, null == i || i.appendChild(l);
        });
      }(), i.observe(e, {
        attributes: !0,
        subtree: !0
      });
    },
    Mt = async function () {
      var e;
      const t = ["KeineAhnung", "TutePlays", "DispoOhnePlan", "Ron31"],
        n = document.querySelector('#tab_associationMembers .toplistTr[username="' + ReSi.userName + '"]'),
        i = "Admin" === (null === (e = null == n ? void 0 : n.querySelector("span.label")) || void 0 === e ? void 0 : e.textContent),
        s = document.createElement("button");
      if (s.innerHTML = '<i class="fa-solid fa-user-minus"></i> Inaktive kicken', s.classList.add("button", "button-success", "button-small", "button-round"), s.addEventListener("click", () => {
        let e = 0;
        document.querySelectorAll("#tab_associationMembers .toplistTr .toplist-absent").forEach(n => {
          var i;
          const s = n.parentElement,
            r = null !== (i = null == s ? void 0 : s.getAttribute("username")) && void 0 !== i ? i : "";
          "" === r || t.includes(r) || (setTimeout(() => {
            (e => {
              callApi("api/manageAssociationUser", {
                action: "kick",
                managedUserName: e
              }, () => {
                var t;
                null === (t = document.querySelector('tr[username="' + e + '"]')) || void 0 === t || t.remove();
              });
            })(r);
          }, 1e3 * e), e++);
        }), noticeModal("Inaktive werden gekickt!", e + " Inaktive werden gerade gekickt.");
      }), i) {
        const e = document.querySelector("#tab_associationMembers .card:nth-of-type(4) .card-headline");
        if (null === e) return;
        e.setAttribute("style", "display: flex; align-items: center; justify-content: space-between;"), e.insertAdjacentElement("beforeend", s);
      }
    },
    Dt = async function () {
      const e = await nt("vehicleCategories", localStorage);
      await async function () {
        var t, n, i;
        const s = async function (t) {
          const n = t.vehicleID,
            i = e;
          if (!localStorage.getItem(`userVehiclesCC-${String(n)}`)) for (const e in i.value) i[e].ids.includes(n) && localStorage.setItem(`userVehiclesCC-${String(n)}`, i[e].readableShortName);
        };
        await async function (e) {
          var t;
          if (null === sessionStorage.getItem("vehiclesUpdateCC")) {
            const e = Date.now();
            sessionStorage.setItem("vehiclesUpdateCC", e.toString());
          }
          const n = Number.parseInt(null !== (t = sessionStorage.getItem("vehiclesUpdateCC")) && void 0 !== t ? t : String(Date.now()), 10);
          if (null === sessionStorage.getItem("1") || n < n - 864e5) {
            const t = Date.now();
            sessionStorage.setItem("vehiclesUpdateCC", t.toString());
            const n = {};
            for (const t in e) {
              const i = e[t].ids;
              i.length <= 0 || !(i[0] < 1e4) || 0 !== e[t].roles.length && "lgf" !== e[t].shortName || (n[e[t].shortName] = {
                readableShortName: e[t].readableShortName,
                ids: e[t].ids,
                count: 0
              });
            }
            for (const t in e[1]) n[t].readableShortName = e[t].readableShortName, n[t].ids = e[t].ids;
            sessionStorage.setItem("vehiclesCC", JSON.stringify(n));
          }
        }(e);
        const r = await nt("userBuildings", localStorage, !1),
          o = parseInt(null !== (n = null === (t = document.querySelector("[userdepartmentid]")) || void 0 === t ? void 0 : t.getAttribute("userdepartmentid")) && void 0 !== n ? n : "0");
        if (8 !== (null === (i = r.find(e => e.userBuildingID === o)) || void 0 === i ? void 0 : i.buildingType)) return;
        const l = await nt("userVehicles", sessionStorage, !1),
          c = r.filter(e => e.assignedControlCenterID === o).map(e => e.userBuildingID),
          u = l.filter(e => c.includes(e.userBuildingID) && 6 !== e.fms);
        for (const e of u) await s(e);
        await async function (t) {
          var n;
          const i = JSON.parse(null !== (n = sessionStorage.getItem("vehiclesCC")) && void 0 !== n ? n : "{}");
          for (const n of t) for (const t in e) !e[t].ids.includes(n.vehicleID) || 0 !== e[t].roles.length && "lgf" !== e[t].shortName || (i[e[t].shortName].count += 1);
          sessionStorage.setItem("vehiclesCC", JSON.stringify(i));
        }(u), await async function () {
          var e;
          const t = sessionStorage.getItem("vehiclesCC");
          if (null === t) return void a(Object.keys({
            categories: t
          })[0], "userVehiclesCC");
          const n = JSON.parse(t),
            i = document.createElement("style");
          i.innerHTML = ".card-headline.card-headline-danger{background-color:#DB1111;color:#fff}.card", document.head.appendChild(i);
          let s = document.querySelector("#tab_controlCenter_stats");
          null == s && (s = document.createElement("div"), s.id = "tab_controlCenter_stats", s.classList.add("tab-content"), null === (e = document.querySelector(".tab-container")) || void 0 === e || e.insertAdjacentElement("beforeend", s), s.insertAdjacentHTML("beforeend", '<div class="tab-headline">Stastistiken</div><div class="label"></div>'));
          const r = null == s ? void 0 : s.querySelector(".label");
          if (null === r) return void a(Object.keys({
            parentDiv0: r
          })[0], "userVehiclesCC");
          const o = document.createElement("div");
          o.classList.add("card", "card-collapse", "collapsed"), o.innerHTML = '<div class="card-headline card-headline-danger">Fahrzeuge <i class="fas fa-angle-up card-collapse-toggle pointer right"></i></div><div class="card-body"><div class="element-container"><table class="striped table-divider" id="theadVehicles"><thead><tr><th style="text-align: center;">Typ</th><th style="text-align: center;">Anzahl</th></tr></thead></table></div></div>', null == r || r.insertAdjacentElement("afterend", o), null == r || r.remove();
          const l = document.querySelector("#theadVehicles");
          if (null === l) return void a(Object.keys({
            thead: l
          })[0], "userVehicles");
          const c = document.createElement("tbody");
          c.style.width = "100%";
          for (const e in n) {
            if (0 === n[e].count) continue;
            const t = document.createElement("tr"),
              i = document.createElement("td"),
              s = document.createElement("td");
            i.style.textAlign = "center", i.style.width = "50%", s.style.textAlign = "center", s.style.width = "50%", i.innerText = n[e].readableShortName, s.innerText = n[e].count.toString(), t.appendChild(i), t.appendChild(s), c.appendChild(t);
          }
          l.appendChild(c);
        }();
      }();
    };
  (async () => {
    await async function () {
      const e = await s(),
        t = await r();
      e.forEach(async e => {
        Object.keys(t).includes(e) || (await async function (e, t) {
          const n = await r();
          n[e] = {
            active: !1
          }, o(n);
        }(e));
      });
      const n = {};
      Object.keys(t).sort((e, t) => e.localeCompare(t)).forEach(e => {
        n[e] = t[e];
      }), o(n);
    }(), await async function () {
      var e;
      const t = await async function () {
        return i;
      }();
      if ("" !== document.body.innerHTML) {
        const i = await r();
        for (const s in i) if (i[s].active) for (const i of t) if (i.name === s) {
          const t = i.name,
            s = n[t];
          for (let t = 0; t < i.match.length; t++) {
            let n = i.match[t];
            const r = window.location.href,
              o = RegExp(n).test(r),
              a = JSON.parse(null !== (e = sessionStorage.getItem("scriptManagerActiveScripts")) && void 0 !== e ? e : "{}");
            Object.keys(a).includes(i.name) || (a[i.name] = {
              runned: !1
            }, sessionStorage.setItem("scriptManagerActiveScripts", JSON.stringify(a))), void 0 !== o && o && !a[i.name].runned && (await s(), i.oneTime && (a[i.name].runned = !0, sessionStorage.setItem("scriptManagerActiveScripts", JSON.stringify(a))));
          }
        }
      }
    }();
  })();
})();
