import * as Handlebars from 'handlebars';
function exec(tmpl: string, data: any): string {
    const template: HandlebarsTemplateDelegate = Handlebars.compile(tmpl);
    let result: string = template(data);
    return result;
}
export { exec };