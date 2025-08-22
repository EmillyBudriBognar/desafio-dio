import chalk from "chalk";
import handleService from "./handleService.js";

async function createPasswordService() {
  console.log(chalk.green.bold("Password:"));
  const password = await handleService();
  console.log(chalk.green.bold(password));
}

export default createPasswordService;
