import { KeyringObject, KeyringTypes } from '@lorikapp/keyring-controller';
import { isEqualCaseInsensitive } from '../modules/string-utils';

export function findKeyringId(
  keyrings: KeyringObject[],
  selector: { address?: string; type?: KeyringTypes },
): string {
  const matchingKeyring = keyrings.find((keyring) => {
    if (selector.address && selector.type) {
      return keyring.accounts.some(account =>
        isEqualCaseInsensitive(account, selector.address as string)
      ) && keyring.type === selector.type;
    }
    if (selector.address) {
      return keyring.accounts.some(account =>
        isEqualCaseInsensitive(account, selector.address as string)
      );
    }
    if (selector.type) {
      return keyring.type === selector.type;
    }

    throw new Error('Must provide either address or type selector');
  });

  if (!matchingKeyRing || !matchingKeyRing.metadata.id) throw new Error('Could not find key ring with specified criteria');

  return matchingKeyRing.metadata.id;
}

export function findKeyRingIdByAddress(keyrings: KeyRingObject[], address: string): string {
	return findKeyRingId(keyrings, { address });
}
