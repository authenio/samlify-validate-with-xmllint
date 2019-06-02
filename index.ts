import * as mod from 'validate-with-xmllint';
import * as path from 'path';

const xsd = 'saml-schema-protocol-2.0.xsd';

export default {
  validate: (xml: string) => {
    return new Promise((resolve, reject) => {

      process.chdir(path.resolve(__dirname, './schemas'));
      mod.validateXMLWithXSD(xml, xsd)
        .then((result: any) => {
          return resolve('SUCCESS_VALIDATE_XML');
        }, (err: any) => {
          console.error('[ERROR] validateXML', err);
          return reject('ERR_INVALID_XML');
        });

    });
  }
};