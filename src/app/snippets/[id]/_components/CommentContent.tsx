import { LANGUAGE_CONFIG } from "@/app/(root)/_constants";
import CodeBlock from "./CodeBlock";

function CommentContent({ content }: { content: string }) {

    const parts = content.split(/(```[\w]*([ ]*)\n[\s\S]*?\n```)/g);

    return (
        <div className="max-w-none text-white">
            {parts.map((part, index) => {
                if (part.startsWith("```")) {
                    // ```javascript
                    // const name = "John";
                    // ```
                    const regexCheck = /```([a-zA-Z0-9-]+[ ]*)\n([\s\S]*?)\n```/;
                    const match = part.match(regexCheck);
                    let [language, code]: [string, string] = ['plaintext', ''];
                    const allowedLanguages = Object.keys(LANGUAGE_CONFIG);

                    if (match) {
                        language = match[1].trim();
                        code = match[2].trim();
                        if (!allowedLanguages.includes(language)) language = `unsupported language`;
                    }

                    if (code == '') {
                        code = part.split('```').filter(x => x != '').join('').trim();
                    }

                    // const [_, language, code] = match;
                    // console.log('lang:<' + language + '>');
                    return <CodeBlock language={language} code={code} key={index} />;
                }

                return part.split("\n").map((line, lineIdx) => (
                    <p key={lineIdx} className="mb-4 text-gray-300 last:mb-0">
                        {line}
                    </p>
                ));
            })}
        </div>
    );
}
export default CommentContent;