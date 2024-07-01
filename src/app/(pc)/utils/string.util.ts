export const removeAllHTMLTag = (str: string) => str.replace(/<[^>]*>?/gm, '');
