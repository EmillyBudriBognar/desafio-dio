import qrCode from "qrcode-terminal";
import chalk from "chalk";

async function handleService(error, result) {
  if (error) {
    console.log("Error on application");
    return;
  }

  const isSmall = result.type == 2;
  qrCode.generate(result.link, { small: isSmall }, (qrcode) => {
    console.log(chalk.green.bold("QR Code gerado com sucesso:\n"));
    console.log(qrcode);
  });
}

export default handleService;
