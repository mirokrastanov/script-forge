import CodeBlock from "./CodeBlock";

function CommentContent({ content }: { content: string }) {
    // regex
    const parts = content.split(/(```[\w-]*\n[\s\S]*?\n```)/g);

    return (
        <div className="max-w-none text-white">
            {parts.map((part, index) => {
                if (part.startsWith("```")) {
                    // ```javascript
                    // const name = "John";
                    // ```
                    const regexCheck = /```([\w-]*)\n([\s\S]*?)\n```/;
                    let match: RegExpMatchArray | null = part.match(regexCheck);

                    if (!match) {
                        const matchStart = part.substring(0, part.indexOf('\n')).trim();
                        const matchEnd = part.substring(part.indexOf('\n'), part.length);
                        const matchFinal = matchStart + matchEnd;
                        // console.log(part, '\n', matchFinal);
                        match = matchFinal.match(regexCheck);
                        // console.log(match);
                    }

                    if (match) {
                        const [_, language, code] = match;
                        console.log('lang:', language);
                        return <CodeBlock language={language.trim()} code={code} key={index} />;
                    }
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