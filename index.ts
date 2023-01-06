import * as mod from 'validate-with-xmllint';
import * as path from 'path';

const xsd = 'saml-schema-protocol-2.0.xsd';
const fullXsdPath = path.resolve(__dirname, 'schemas', xsd);

export const validate = (xml: string): Promise<string> => {
  return new Promise((resolve, reject) => {
    mod.validateXMLWithXSD(xml, fullXsdPath)
      .then(() => {
        return resolve('SUCCESS_VALIDATE_XML');
      }, (err: any) => {
        console.error('[ERROR] validateXML', err);
        return reject('ERR_INVALID_XML');
      });

  });
};
