import { PinsSettings } from '@digipair/engine';
import { PDFDocument } from 'pdf-lib';

class PDFService {
  private base64ToPdf(base64: string) {
    const data = base64.replace(/^data:application\/pdf;base64,/, '');
    const buffer = Buffer.from(data, 'base64');
    return buffer;
  }

  async fillForm(params: any, _pinsSettingsList: PinsSettings[], _context: any) {
    const { file, data, flatten = false } = params;

    const buffer = this.base64ToPdf(file);
    const document = await PDFDocument.load(buffer);
    const form = document.getForm();
    const fields = form.getFields().filter(field => data[field.getName()] !== undefined);

    for (const field of fields) {
      const name = field.getName();
      const value = data[name];
      const type = field.constructor.name;

      switch (type) {
        case 'PDFTextField':
          form.getTextField(name).setText(value);
          break;
        case 'PDFCheckBox':
          value ? form.getCheckBox(name).check() : form.getCheckBox(name).uncheck();
          break;
        case 'PDFRadioGroup':
          form.getRadioGroup(name).select(value);
          break;
        case 'PDFDropdown':
          form.getDropdown(name).select(value);
          break;
        default:
          break;
      }
    }

    if (flatten) {
      form.flatten();
    }

    return document.saveAsBase64({ dataUri: true });
  }

  async getFields(params: any, _pinsSettingsList: PinsSettings[], _context: any) {
    const { file } = params;

    const buffer = this.base64ToPdf(file);
    const document = await PDFDocument.load(buffer);
    const form = document.getForm();
    const fields = form
      .getFields()
      .filter(field =>
        ['PDFTextField', 'PDFCheckBox', 'PDFRadioGroup', 'PDFDropdown'].includes(
          field.constructor.name,
        ),
      )
      .reduce((acc, field) => {
        const name = field.getName();
        const type = field.constructor.name;
        let value;

        switch (type) {
          case 'PDFTextField':
            value = form.getTextField(name).getText();
            break;
          case 'PDFCheckBox':
            value = form.getCheckBox(name).isChecked();
            break;
          case 'PDFRadioGroup':
            value = form.getRadioGroup(name).getSelected();
            break;
          case 'PDFDropdown':
            value = form.getDropdown(name).getSelected();
            break;
          default:
            break;
        }

        acc[name] = value;
        return acc;
      }, {} as any);

    return fields;
  }
}

export const fillForm = (params: any, pinsSettingsList: PinsSettings[], context: any) =>
  new PDFService().fillForm(params, pinsSettingsList, context);

export const getFields = (params: any, pinsSettingsList: PinsSettings[], context: any) =>
  new PDFService().getFields(params, pinsSettingsList, context);
