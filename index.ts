import { $ } from "bun";

const deployURL = Bun.env.SOURCERY_DEPLOY_URL;
if (!deployURL) {
    console.error("SOURCERY_DEPLOY_URL is not set")
    process.exit(1);
}

const deployRequest = await fetch(deployURL);