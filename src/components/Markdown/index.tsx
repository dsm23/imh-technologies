import * as React from "react";
import ReactMarkdown from "react-markdown";

interface Props {
  children: string;
  props?: Object;
}

export default ({ children, ...props }: Props) => (
  <ReactMarkdown
    source={children}
    renderers={{
      image: ({ children }) => (
        <img className="img-fluid" src={children} alt="" />
      ),
      link: ({ children, href }) => <a href={href} target="_blank">{children}</a>,
      paragraph: ({ children }) => <p className="lead">{children}</p>
      // text: ({ children }) => <p className="lead">{children}</p>
    }}
    {...props}
  />
);

// escapeHtml = { false}
// skipHtml
// allowedTypes = {
//   [
//   "text",
//   "paragraph",
//   "emphasis",
//   "strong",
//   "inlineCode",
//   "code",
//   "heading",
//   "imageReference"
//   ]}
// renderers = {{
//   imageReference: ({ children }) => (
//     <img className="img-fluid" src={children} alt="" />
//   ),
//     paragraph: ({ children }) => <p className="lead">{children}</p>
//   // text: ({ children }) => <p className="lead">{children}</p>
// }}
