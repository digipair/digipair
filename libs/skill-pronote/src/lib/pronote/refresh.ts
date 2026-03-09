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
    url: credentials.pronoteURL as string, // https://0333273d.index-education.net/pronote
    kind: AccountKind.STUDENT,
    username: credentials.username as string, // agathe.buils@gmail.com
    password: credentials.password as string, // Agathe325?
    deviceUUID: credentials.deviceUUID as string, // 74cc9a22-37ce-4789-998d-c736d54555a4
  });

  return {
    auth: credentials,
    session,
  };
}
