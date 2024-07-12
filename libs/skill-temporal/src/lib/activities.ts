import { executePinsList as executePinsListEngine, PinsSettings } from '@digipair/engine';

export async function executePinsList({
  pinsSettingsList,
  context,
}: {
  pinsSettingsList: PinsSettings[];
  context: any;
}): Promise<string> {
  return await executePinsListEngine(pinsSettingsList, context);
}
