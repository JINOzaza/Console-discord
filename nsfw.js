var findModule = (item) => {
    let foundModule;
    window.webpackChunkdiscord_app.push([
        [Math.random()],
        {},
        (req) => {
            if (!req.c) return;
            for (const m of Object.keys(req.c)
                .map((x) => req.c[x]?.exports)
                .filter((x) => x)) {
                if (m?.default && m.default[item] !== undefined) {
                    foundModule = m.default;
                    break;
                }
            }
        },
    ]);
    return foundModule;
};
const module = findModule("getCurrentUser");
if (module) {
    module.getCurrentUser().nsfwAllowed = !0;
    console.log("%cDone!", "font-size: 50px; color: green;");
    console.log(`%cIf nothing wait a minute`, "font-size: 30px;");
}
