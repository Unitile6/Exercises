import Highlight, { defaultProps } from 'prism-react-renderer';

import theme from 'prism-react-renderer/themes/github';

type Props = {
  children: string;
};

export function Code({ children }: Props) {
  return (
    <Highlight {...defaultProps} theme={theme} code={children} language="tsx">
      {({ className, style, tokens, getLineProps, getTokenProps }) => (
        <pre className={className} style={style}>
          {tokens.map((line, i) => (
            <div {...getLineProps({ line, key: i })}>
              {line.map((token, key) => (
                <span {...getTokenProps({ token, key })} />
              ))}
            </div>
          ))}
        </pre>
      )}
    </Highlight>
  );
}
