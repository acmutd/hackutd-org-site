import React from 'react';

import Header from 'components/shared/Header';
import HackPortalButton from 'components/open_source/HackPortalButton';

export default function OpenSource() {
  return (
    <>
    <Header title="Open Source" givenId="open-source" rightJustify />
    <HackPortalButton />
    </>
  )
}