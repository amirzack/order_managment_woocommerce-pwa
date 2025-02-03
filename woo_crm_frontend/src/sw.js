if (!self.define) {
  let e,
    s = {};
  const r = (r, i) => (
    (r = new URL(r + ".js", i).href),
    s[r] ||
      new Promise((s) => {
        if ("document" in self) {
          const e = document.createElement("script");
          (e.src = r), (e.onload = s), document.head.appendChild(e);
        } else (e = r), importScripts(r), s();
      }).then(() => {
        let e = s[r];
        if (!e) throw new Error(`Module ${r} didn’t register its module`);
        return e;
      })
  );

  //push notification listenrer
  self.addEventListener("push", (event) => {
    if (event.data) {
      const data = event.data.json();
      self.registration.showNotification(data.title, {
        body: data.message,
        icon: "/icon.png",
        vibrate: [200, 100, 200],
      });
    }
  });

  // Show message notification
  self.addEventListener("message", (event) => {
    if (event.data.type === "new-order") {
      self.registration.showNotification(event.data.title, {
        body: event.data.message,
        icon: "/icon.png",
      });
    }
  });

  self.define = (i, d) => {
    const o =
      e ||
      ("document" in self ? document.currentScript.src : "") ||
      location.href;
    if (s[o]) return;
    let c = {};
    const n = (e) => r(e, o),
      a = { module: { uri: o }, exports: c, require: n };
    s[o] = Promise.all(i.map((e) => a[e] || n(e))).then((e) => (d(...e), c));
  };
}
define(["./workbox-4eedfbeb"], function (e) {
  "use strict";
  self.addEventListener("message", (e) => {
    e.data && "SKIP_WAITING" === e.data.type && self.skipWaiting();
  }),
    e.precacheAndRoute(
      [
        { url: "App.jsx", revision: "71b15db881c6a9d1cc11467d377a8f4b" },
        {
          url: "assets/logo-vertical.png",
          revision: "57c6a82ff9eeea4f59caea6690b90ea7",
        },
        {
          url: "assets/react.svg",
          revision: "f0402b67b6ce880f65666bb49e841696",
        },
        {
          url: "components/orderItem.jsx",
          revision: "3a11d81ca83204398b2daf272b7bb262",
        },
        {
          url: "components/orderList.jsx",
          revision: "c766c49a1a77d59c0e2d880249594d1e",
        },
        { url: "index.css", revision: "bcc18e7188d86dfa74c261d31d518d40" },
        { url: "main.jsx", revision: "d76772f51eb42d16947b73fc3c0757fc" },
        { url: "pages/404.jsx", revision: "0882ea12dc1bff0f04e0f6a91057f86b" },
        {
          url: "pages/homePage.jsx",
          revision: "e66b1140bdbdeb43f43094dfc076d9e0",
        },
        {
          url: "redux/slices/orderSlice.js",
          revision: "a96896964def7e3dd1d42d4bdefe1148",
        },
        { url: "redux/store.js", revision: "82743a1add1fcce45dd9b2ec92000ae4" },
        {
          url: "service-worker.js",
          revision: "bd0cafc3d4fa0567529da4ed8974088b",
        },
        { url: "theme.js", revision: "0f6e6b3bb528b7672997d459acb8a860" },
        {
          url: "utils/baseUrl.js",
          revision: "9bbc55919d3f09032bdf50759b8a272a",
        },
      ],
      { ignoreURLParametersMatching: [/^utm_/, /^fbclid$/] }
    );
});
//# sourceMappingURL=sw.js.map
