// @ts-check

const { execSync } = require("child_process");

if (execSync("./dlc bits.c", { cwd: "datalab" }).toString())
    throw Error("dlc bits.c failed");

if (
    execSync("make btest && ./btest", { cwd: "datalab" })
        .toString()
        .includes("ERROR: ")
)
    throw Error("btest failed");
