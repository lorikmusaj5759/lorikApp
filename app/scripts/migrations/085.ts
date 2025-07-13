import { cloneDeep } from 'lodash';
import { isObject } from '@lorikapp/utils';

export const version = 85;

export async function migrate(originalVersionedData: {
  meta: { version: number };
  data: Record<string, unknown>;
}) {
  const versionedData = cloneDeep(originalVersionedData);
  if (!isObject(versionedData.data.NetworkController)) {
    global.sentry?.captureException?.(
      new Error(`typeof state.NetworkController is ${typeof originalVersionedData.data.NetworkController}`)
    );
    return versionedData;
  }

  delete versionedData.data['NetworkController'].previousProviderStore;
  return { ...versionedData, meta: { ...versionedData.meta, version }, data: transformState(version) };
}

function transformState(state) {
}
