import prompt from "prompt";
import chalk from "chalk";
import promptSchemaMain from "../../promptsSchema/promptSchemaMain.js";
import createQRCode from "../qrCodeService/createService.js";
import createPassword from "../passwordService/createService.js";

async function createMainService() {
  prompt.get(promptSchemaMain, async (error, choose) => {
    if (error) {
      console.log(chalk.red.italic("Error on application"));
      return;
    }
    if (choose.select == 1) {
      await createQRCode();
    }
    if (choose.select == 2) {
      await createPassword();
    }
  });
  prompt.start();
}

export default createMainService;
