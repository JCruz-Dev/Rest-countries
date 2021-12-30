import LayoutContext from '@Layouts/index';
import useStore from '@Redux/index';
import GlobalStyles from '@Src/styles';
import { AppPropsWithLayout } from 'next/app';
import { FC } from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

const _App: FC<AppPropsWithLayout> = ({ Component, pageProps }) => {
  const { persistor, store } = useStore();
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <LayoutContext Layout={Component.Layout} Role={Component.Role}>
          <GlobalStyles />
          <Component {...pageProps} />
        </LayoutContext>
      </PersistGate>
    </Provider>
  );
};

export default _App;
