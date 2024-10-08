import React, { FC } from 'react';

import { getUrlForRedirection, redirectToSavedUrl } from '@graasp/sdk';
import { RedirectionContent } from '@graasp/ui';

import { GRAASP_BUILDER_HOST } from '../config/env';
import { hooks } from '../config/queryClient';
import { useRedirection } from '../hooks/searchParams';

type Props = {
  children: React.ReactElement;
};

const Redirection: FC<Props> = ({ children }) => {
  const { data: member } = hooks.useCurrentMember();
  const redirect = useRedirection();

  if (member) {
    redirectToSavedUrl(window, GRAASP_BUILDER_HOST, { openInNewTab: true });
    return (
      <RedirectionContent link={redirect.url ?? getUrlForRedirection() ?? ''} />
    );
  }

  return children;
};

export default Redirection;
