import { createSessionHandle, loginCredentials, SessionHandle, AccountKind } from 'pawnote';

import { Auth } from '../account/types';

/**
 * Refreshes the Pronote account credentials using the provided authentication data.
 * @param credentials
 * @returns {Promise<Auth>} A promise that resolves to the updated authentication data.
 */
export async function refreshPronoteAccount(
  accountId: string,
  credentials: Auth,
): Promise<{ auth: Auth; session: SessionHandle }> {
  const session = createSessionHandle();
  await loginCredentials(session, {
    url: credentials.pronoteURL as string,
    kind: AccountKind.STUDENT,
    username: credentials.username as string,
    password: credentials.password as string,
    deviceUUID: credentials.deviceUUID as string,
  });

  return {
    auth: credentials,
    session,
  };
}
