export default function RichTextRenderer({ content, className = "" }) {
  if (!Array.isArray(content)) return null;

  return (
    <div className={className}>
      {content.map((block, index) => {
        if (block.type === "paragraph") {
          return (
            <p key={index}>
              {block.children?.map((child, idx) => {
                if (child.type === "text") {
                  return <span key={idx}>{child.text}</span>;
                }
                return null;
              })}
            </p>
          );
        }

        // Add more block types here if needed
        return null;
      })}
    </div>
  );
}
