import prompt from "prompt";
import promptSchemaQRCode from "../../promptsSchema/promptSchemaQRCode.js";
import handleService from "./handleService.js";

async function createQRCodeService() {
  prompt.get(promptSchemaQRCode, handleService);

  prompt.start();
}

export default createQRCodeService;
