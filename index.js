import { input } from '@inquirer/prompts';
import { image } from 'qr-image';
import { imageSync } from 'qr-image';
import { createWriteStream } from 'fs';
import { appendFile } from 'fs';

var ans = await input({message: "Enter the url for which you want to generate a QR Code: "});

appendFile("qr.txt",ans+"\n",(err) => {
    if(err) throw err;
});
var qr_png = image(ans, { type: 'png' });

ans = await input({message: "Name the image you want to save: "});
qr_png.pipe(createWriteStream(ans+".png"));