import React, { useEffect, useState } from "react";
import { IIconProps } from "./Icon.d";
import styles from "./Icon.module.scss";

const Icon: React.FC<IIconProps> = ({
  src,
  color = "default",
  isActive = false,
  ...rest
}) => {
  const [svgContent, setSvgContent] = useState<string | null>(null);

  useEffect(() => {
    let isMounted = true;
    fetch(src)
      .then((response) => {
        if (!response.ok)
          throw new Error(`Failed to load SVG: ${response.status}`);
        return response.text();
      })
      .then((text) => {
        if (!isMounted) return;

        let modifiedText = text;

        setSvgContent(modifiedText);
      })
      .catch((err) => console.error(err));

    return () => {
      isMounted = false;
    };
  }, [src]);

  return svgContent ? (
    <span
      className={`${styles.icon} ${styles[color]} ${
        isActive ? styles.active : ""
      }`}
      {...rest}
      dangerouslySetInnerHTML={{ __html: svgContent }}
    />
  ) : null;
};

export default Icon;
