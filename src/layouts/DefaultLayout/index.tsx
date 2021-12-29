import { FC } from 'react';

type Props = {
  Role?: string | string[];
};

const DefaultLayout: FC<Props> = ({ children }) => (
    <div>
      {children}
    </div>
);
export default DefaultLayout;
