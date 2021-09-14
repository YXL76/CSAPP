// @ts-check

const { execSync } = require("child_process");

const dlcRes = execSync("./dlc bits.c", { cwd: "datalab" }).toString();
if (dlcRes) {
    console.log(dlcRes);
    throw Error("dlc bits.c failed");
}

const btestRes = execSync("make btest && ./btest -T 100", {
    cwd: "datalab",
}).toString();
if (btestRes.includes("ERROR: ")) {
    console.log(btestRes);
    throw Error("btest failed");
}
