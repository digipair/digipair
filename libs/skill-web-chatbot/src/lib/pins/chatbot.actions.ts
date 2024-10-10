class DomService {
  async executeRemoteReasoning(
    { digipair, reasoning, input, apiUrl }: any,
    _pinsSettingsList: PinsSettings[],
    context: any,
  ): Promise<any> {
    const response = await fetch(`${apiUrl}/${digipair}/${reasoning}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        ...context.input,
        ...input,
      }),
    });

    const result = await response.json();

    if (response.status >= 400) {
      throw new Error(result.message);
    }

    return result;
  }
}

export const executeRemoteReasoning = (
  params: any,
  pinsSettingsList: PinsSettings[],
  context: any,
) => new DomService().executeRemoteReasoning(params, pinsSettingsList, context);
