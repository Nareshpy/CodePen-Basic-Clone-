export default function findMissingTags(html: string): boolean {
    const stack: string[] = [];
    let error: boolean = false;
    const tagRegex =/<\/?([a-z]+[0-9])[^>]*>/gi;
    //const tagRegex =/<\/?([a-z]+[0-9]*)(?:\s+[a-z]+(?:\s*=\s*(?:"[^"]*"|'[^']*'))?)*\s*>/gi    ;
    let match;
    while ((match = tagRegex.exec(html)) !== null) {
        const tag = match[0];
        const tagName = match[1];

        if (tag.startsWith('</')) {
            if (stack.length === 0) {
                console.error(`Error: missing opening tag for </${tagName}>`);
                error = true;
            } else {
                const lastTag = stack.pop();
                console.log(lastTag);
                console.log(`<${tagName}>`);
                if (lastTag !== `<${tagName}>`) {
                    console.error(`Error: mismatched closing tag </${tagName}>`);
                    error = true;
                }
            }
        } else {
            stack.push(tag);
        }
    }
    while (stack.length > 0) {
        const lastTag: string = stack.pop() as string;
        const tagName = lastTag.substring(1, lastTag.length - 1);
        console.error(`Error: missing closing tag for <${tagName}>`);
        error = true;
    }
    console.log(error);
    return error;
}
