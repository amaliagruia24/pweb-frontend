import { memo } from "react";
import { SeoProps } from "./Seo.types";
import { Helmet } from "react-helmet";

export const Seo = memo((props: SeoProps) => {
  const { title = import.meta.env.VITE_APP_TITLE } = props;

  return (
    <Helmet>
      <meta charSet="utf-8" />
      <title>{title}</title>
      <link rel="canonical" href="http://localhost.myapp" />
    </Helmet>
  );
});
