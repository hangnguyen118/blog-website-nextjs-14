'use client';
import { Provider } from 'react-redux';
import store from './store';
import { LoadDataProvider } from './loadDataProvider';

export function ReduxProvider({ children }: { children: React.ReactNode }) {
  return <Provider store={store}><LoadDataProvider>{children}</LoadDataProvider></Provider>;
}
