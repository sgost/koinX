import CMS from "netlify-cms-app";
import React, { useState, useEffect } from 'react';
import { StyleSheetManager } from 'styled-components';
import { GlobalStyle } from '../styles/global-styles';

import HomePreview from "./preview-templates/HomePreview";
import BlogPreview from "./preview-templates/BlogPreview";

function StyleInjector({ children }) {
  const [iframeRef, setIframeRef] = useState(null);

  useEffect(() => {
    const iframe = document.getElementsByTagName('iframe')[0];
    const iframeHeadElem = iframe.contentDocument.head;
    setIframeRef(iframeHeadElem);
  }, []);

  return (
    iframeRef && (
      <StyleSheetManager target={iframeRef}>
        <>
          {children}<GlobalStyle />
        </>
      </StyleSheetManager>
    )
  );
}

export default function withStyledComponentsRendered(Comp) {
  return props => (
    <StyleInjector>
      <Comp {...props} />
    </StyleInjector>
  );
}

CMS.registerPreviewTemplate("home", withStyledComponentsRendered(HomePreview));

CMS.registerPreviewTemplate("blog", withStyledComponentsRendered(BlogPreview));
